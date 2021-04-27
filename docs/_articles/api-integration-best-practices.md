---
layout: article
title: Integration Guide
date: 2021-01-29T14:24:45.971Z
type: article
published: 'true'
status: publish
---
## Reasonable Use

Use of the Street Manager API is monitored for performance and availability reasons and to help us improve the service. We may contact organisation administrators if our automated tooling determines issues with your integration. As integrators, you should limit your use to what is necessary for the particular task you are performing, and to avoid patterns which may have an adverse impact on the performance of the system or others’ use of the API. 

## Best Practices

This section is a brief guide on how to design your API integration with Street Manager in order to ensure best practice adherence

**Integrating**

* Ensure any integration or changes are well tested and verified against the [sandbox environment](https://www.sandbox.manage-roadworks.service.gov.uk/) before deploying to production
* Ensure sufficient error monitoring is in-place for any integration
* Ensure technical contact information is up to date

**Authentication**

* You should not re-authenticate each time you make an API call. The same authentication token should be used for multiple API calls until it expires.
* The refresh token given in the /authenticate endpoint has a much longer expiry than the id token, you should store and use it to get a new id token when it expires via the Party API /party/refresh endpoint. This avoids needing to re-authenticate with credentials, useful if using user supplied credentials, and reduces unnecessary load on the systems.
* Logging in again will not invalidate a previous token. To explicitly invalidate all a users tokens you must call the Party API /party/logout endpoint.
* There are system limits on the number of concurrent authentication requests, so you should have exception handling to retry authentication using a sensible exponential back-off algorithm in case the service is busy.
* Do not use the same API credentials for multiple systems, as makes calls from different systems appear to come from the same source and risks multiple systems going down if the shared user is disabled.
* Update your passwords for API accounts on a sensible schedule.
* Do not store or send passwords and tokens in plain text.
* See the [JWT](https://departmentfortransport.github.io/street-manager-docs/api-documentation/V2.10.1/#jwt) section of the API docs for full details

**Rate limiting and error handling**

* Street Manager uses rate limiting for denial of service protection, see [rate limiting](https://departmentfortransport.github.io/street-manager-docs/api-documentation/V2.10.1/#rate-limiting) section for details.
* Monitor your integration for common or frequent errors and [understand the meaning of the error codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
* Employ a sensible retry policy for your API call failures to avoid cascading failures, where you repeatedly retry many failed calls at the same time continually triggering rate limiting 429 errors. Use a sensible exponential back-off algorithm in case the service is busy.
* GET calls can be retried without side effects within rate limit constraints, but repeating POST and PUT calls could cause duplicate data. Your error handling logic on important submit/update calls should check error responses to ensure the call did not complete a transaction.

**Eventing**

* Street manager provides an [open data service](https://departmentfortransport.github.io/street-manager-docs/open-data/) for real time event notifications. We will be extending this service over-time and as such is our recommended service for eventing.
* We will introduce a dedicated events API in the V3 specification to compliment the open data service as a means for integrators to get further information for each open data event.
* Street manager currently provides a [polling service](https://departmentfortransport.github.io/street-manager-docs/api-documentation/V2.10.1/#polling) via the reporting API in the V2 specification, the service polls a read replica for any work updates on the system. Using this method, the time between events occurring on the system and appearing on the polling service is asynchronous and therefore may vary significantly. 

**Querying**

* Use the query parameters available to you to make requests as specific as possible and filter out the data you don't need
* Use paginated resource endpoints when requesting large amounts of data
* Avoid 'scraping' i.e. iterating through specific GET entity endpoints unnecessarily 

## Integration Patterns

**Integration for an organisations line of business application**

An example of this would be a new or existing line of business application used by many users in an organisation involved in street works. The application could have many functions specific to the organisation and complex case management workflows, but also need to submit and retrieve data about street works to Street Manager. Many users in the organisation use the application to interact with their organisations street works but do not necessarily have UI accounts

![](/docs/assets/images/cms/diagram-line-of-business-applications.png)

In this case the application will need an API account created for the service user (or two if acting as both an HA and Promoter). This account will be for API use only, assigned with permissions appropriate for all organisation users and should identifiable as a service account. Internal system user identifiers should be passed via the internal_user_identifier and internal_user_name in POST/PUT requests to allow Street Manager to record and display who performed actions submitted from your system.

Applications should use a synchronous approach for submitting and updating items, calling the API when a user makes a significant change that would affect a work, as the user may miss an error returned by API (validation/duplicate data etc.) if updates are pushed onto a backround queue.

If notifcations for changes to items (e.g. Permit rejections/comments) to organisation users are required, the application should monitor Street Manager for updates. See [Getting data from Street Manager](https://departmentfortransport.github.io/street-manager-docs/api-documentation/V2.10.1/#getting-data-from-street-manager) for details on this.

**Integration for software acting for a single user**

An example of this would be an application used to submit or retrieve information on works relating to a single user calling the Street Manager API synchronously, such as a mobile application used by an inspector to view permit details and submit inspection results.

![](/docs/assets/images/cms/diagram-single-user-application.png)

The users for this application should be setup as both UI/API users. These accounts should not be shared between users, so actions carried out by the user can be traced back to individuals.

**Integration for extracting reporting data on street works**

An example of this would be an application used by an organisation to extract specific street work data for organisation specific reporting. This could be for automating operational reports that are generated on a scheduled basis.

![](/docs/assets/images/cms/diagram-reporting-application.png)

This account should use an individual API service account with only permissions to retrieve necessary data for reporting, not a shared account used by other systems. This ensures that the account cannot accidentally submit information or affect your other systems integration.
