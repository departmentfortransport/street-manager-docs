---
layout: default
title: API specification V0.2
---
# API specification
{: .govuk-heading-xl}

Version 0.2 Draft
{: .govuk-body-l}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

## Table of contents
{: .govuk-heading-l #table-of-contents}

<ol class="govuk-list govuk-list--number">
  <li><a class="govuk-link" href="#introduction">Introduction</a></li>
  <li><a class="govuk-link" href="#onboarding">Onboarding</a></li>
  <li><a class="govuk-link" href="#technical-overview">Technical Overview</a></li>
  <li><a class="govuk-link" href="#versioning">Versioning</a></li>
  <li><a class="govuk-link" href="#testing">Testing</a></li>
  <li><a class="govuk-link" href="#security">Security</a></li>
  <li><a class="govuk-link" href="#sequencing">Sequencing</a></li>
  <li><a class="govuk-link" href="#resource-guide">Resource Guide</a></li>
  <li><a class="govuk-link" href="#permit-alterations">Permit Alterations</a></li>
  <li><a class="govuk-link" href="#user-and-organisation-registration">User and organisation registration</a></li>
</ol>

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

## Introduction
{: .govuk-heading-l #introduction}

This is the API guidance documentation for Street Manager, intended as a guide for developers integrating their systems to submit and retrieve information about street works. It is intended as a technical guide to be used with the API definition documentation and not a business change guide.
{: .govuk-body}

![System context diagram](images/system-context.png)

The Street Manager APIs are RESTful APIs to read/write data to the centralised Street Manager system following [GDS guidelines](https://www.gov.uk/guidance/gds-api-technical-and-data-standards), not a peer to peer solution.
{: .govuk-body}

### Updates
{: .govuk-heading-m}

The following is a list of significant changes since version 0.1 of this document:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Exposed Street Lookup API, GeoJSON API and Reporting API for external use, see <em>Technical Overview</em></li>
  <li>Details added for Polling endpoint planned for Reporting API, see <em>Technical Overview</em></li>
  <li>Plans added for Notifications, see <em>Technical Overview</em></li>
  <li>Details added for User account roles and permissions, see <em>Security</em></li>
  <li>Additional features added to Works API
    <ul>
      <li>Works history</li>
      <li>Works comments</li>
      <li>Submit immediate permit</li>
      <li>Permit alterations</li>
      <li>Scheduled inspections</li>
      <li>Permit cancellation</li>
      <li>Submit PAA</li>
      <li>Progress PAA to PA</li>
    </ul>
  </li>
</ol>

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

## Onboarding
{: .govuk-heading-l #onboarding}

### Access to API pilot and sandbox environment
{: .govuk-heading-m}

Contact <a href="mailto:streetmanager@dft.gov.uk">streetmanager@dft.gov.uk</a> for details on how to
join the API pilot and access to the sandbox environment.
{: .govuk-body}

### Organisation registration and access to production system
{: .govuk-heading-m}

TBC
{: .govuk-body}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

## Technical Overview
{: .govuk-heading-l #technical-overview}

### Available APIs
{: .govuk-heading-m}

Street Manager exposes a number of APIs to allow external applications
to retrieve and submit data.
{: .govuk-body}

#### Works API
{: .govuk-heading-s}

*This API is exposed externally.*
{: .govuk-body}

The street manager works API allows promoters and highway authority
users to carry out a number of key workflows relevant to their
organization and role. We will cover each in detail but at a high level
they are:
{: .govuk-body}

**Promoter workflows**
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Submit permit application</li>
  <li>Carry out a work</li>
  <li>Create reinstatement</li>
  <li>Action an FPN</li>
  <li>Add comments to a works record</li>
</ol>

**Highway authority workflows**
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Assess permit application</li>
  <li>Issue an inspection</li>
  <li>Issue an FPN</li>
  <li>Add comments to a works record</li>
</ol>

In order to ensure a user has the appropriate permissions to carry out
the above workflows they must authenticate to the API and acquire a JWT
to be used as part of their request.
{: .govuk-body}

#### Street Lookup API
{: .govuk-heading-s}

*This API is exposed externally.*
{: .govuk-body}

The street manager street lookup API allows querying of NSG and ASD data
based on location and USRN. This function is only available as part of
submitting a permit for a work.
{: .govuk-body}

Details TBC
{: .govuk-body}

#### GeoJson API
{: .govuk-heading-s}

*This API is exposed externally.*
{: .govuk-body}

The street manager GeoJson API exposes works spatial data to
authenticated users for use with mapping queries. Details TBC
{: .govuk-body}

#### Open data API
{: .govuk-heading-s}

*This API is not yet available.*
{: .govuk-body}

Street Manager will support an API for Open Data users, details TBC.
{: .govuk-body}

#### Reporting API
{: .govuk-heading-s}

*This API is exposed externally.*
{: .govuk-body}

The reporting API allows promoters and highway authority users to carry
out a number of data analysis and reporting workflows, allowing them to
retrieve data with configurable filtering, sorting and paging. This is
the backbone of our dashboard and list functionality. This API should be
used as a primary API to retrieve large volumes of data about your
works.
{: .govuk-body}

### Getting data from Street Manager
{: .govuk-heading-m}

External systems integrating with Street Manager need to retrieve data
from the service to give their users the most up-to-date view on what is
going on with their works. Street Manager has a number of ways which you
can extract data from the service.
{: .govuk-body}

![Getting data](images/getting-data-1.png)

**Individual work data**
{: .govuk-body}

The Works API provides endpoints which give the full detail available
for individual Works and Permits. Use these endpoints to retrieve
details such as timings, comments, history and changes.
{: .govuk-body}

**Reporting**
{: .govuk-body}

You can use the Reporting API to extract data from the service both as
JSON and CSV format. These endpoints allow you to extract most Work
information efficiently for your organisation.
{: .govuk-body}

**Continuous** **Polling**
{: .govuk-body}

*Note: The polling endpoint is planned for private beta, details will be
added shortly.*
{: .govuk-body}

To find out what has changed to your Works recently, there is an API
endpoint available in the Reporting API which will return a list of
Works which have had changes with a defined time period. This allows
external integrators to poll Street Manager for changes and use the
results to retrieve further information from the Works or Reporting API.
{: .govuk-body}

**Notifications**
{: .govuk-body}

*Note: Notifications are currently in roadmap for Phase 3, not in
private beta.*
{: .govuk-body}

Street Manager will offer a Notification service which will send Push
notifications to organisations for updates to their Works to subscribed
systems. Organisations who wish to receive notifications need to expose
an HTTPS endpoint capable of receiving POST requests from the
Notification service containing the update event data as JSON.
{: .govuk-body}

Notifications cannot offer guaranteed delivery (network issues, service
downtime etc.) so to reconcile for missed Notifications you can use the
Polling API endpoint to validate you have received notifications for all
updated works.
{: .govuk-body}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">


## Versioning
{: .govuk-heading-l #versioning}

*Note: API versioning will only be used for updates which change existing API functions, potentially breaking existing integration and will only be introduced after private beta.*
{: .govuk-body}

### Iteration and change
{: .govuk-heading-m}

<ol class="govuk-list govuk-list--bullet">
  <li>API updates to be released at fixed intervals -- potentially every 3 or 6 months (TBD)</li>
  <li>Only the newly released version, and one version previous to it, will be supported</li>
  <li>API is versioned via request URL path</li>
  <li>So you don't need to upgrade immediately, but you can only be one version out</li>
  <li>Release notes will be published for each release</li>
</ol>

### API Versioning
{: .govuk-heading-m}

<ol class="govuk-list govuk-list--bullet">
  <li>Versioning will be controlled via the URL path.</li>
  <li>Versioning structure is TBC and will be researched during the pilot.</li>
</ol>

### Release Management
{: .govuk-heading-m}

<ol class="govuk-list govuk-list--bullet">
  <li>API users will be notified of changes/updates prior to them being released (e.g. via DfT email, newsletter and GitHub).</li>
  <li>Releases / versions will consider the prevention of breaking change, with backwards compatibility being supported where appropriate.</li>
  <li>Sandpit / pre-production environments will be made available to support new releases.</li>
</ol>

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">


## Testing
{: .govuk-heading-l #testing}

### Sandbox environment
{: .govuk-heading-m}

A sandbox environment is available for authorised users to test their API integration.
{: .govuk-body}

Details TBC
{: .govuk-body}

### Other testing
{: .govuk-heading-m}

#### Generating test client and server stubs
{: .govuk-heading-s}

It is possible to generate test clients and servers using the available API documentation (Swagger JSON) which can be retrieved directly from the exposed APIs in Sandbox environments. This allows isolated testing of your integration without dependency on test environments and can speed up development.
{: .govuk-body}

[Swagger-codegen](https://swagger.io/tools/swagger-codegen/) supports generating client and server stubs for a variety of languages, see here for details. Below is an example of generating Java client and server stubs using the [Swagger-codegen](https://swagger.io/tools/swagger-codegen/) utility.
{: .govuk-body}

**Requires**
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Java (tested with openjdk version "11.0.1" 2018-10-16)</li>
  <li>Maven for build</li>
  <li>Swagger Codegen</li>
</ol>

#### Client
{: .govuk-heading-s}

Generated with command:
{: .govuk-body}

<code>swagger-codegen generate -i swagger.json -l java -o ./streetmanager-apiclient-java</code>

The generated code for the template had a number of errors which required manual corrections.
{: .govuk-body}

Corrections:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>pom.xml - updated <java.version>1.7</java.version> to <java.version>1.8</java.version> to support annotations</li>
  <li>pom.xml - added dependency javax.annotation to replace deprecated class</li>
  <li>Find/Replace body@ApiParam to body,@ApiParam due to template error on generated clients</li>
  <li>Find/Replace new BigDecimal() to new BigDecimal(0)due to template error on generated tests</li>
</ol>

To build:
{: .govuk-body}

<code>mvn package</code>

#### Server
{: .govuk-heading-s}

Generated with command:
{: .govuk-body}

<code>swagger-codegen generate -i swagger.json -l spring -o ./streetmanager-apistub-java-spring<code>

The generated code for the template had a number of errors which required manual corrections.
{: .govuk-body}

Corrections:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>pom.xml - updated <java.version>1.7</java.version> to <java.version>1.8</java.version> to support annotations</li>
  <li>pom.xml - added dependencies for javax.xml.bind to replace deprecated class</li>
  <li>Find/Replace body\@ApiParam to body,\@ApiParam due to template error on generated controllers</li>
  <li>Find/Replace new BigDecimal() to new BigDecimal(0)due to template error on generated tests To run:</li>
</ol>

<code>
mvn package
java -jar target/swagger-spring-1.0.0.jar --server.port=8080
</code>

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">


## Security
{: .govuk-heading-l #security}

### HTTPS
{: .govuk-heading-m}

All Street Manager APIs are secured using Transport Layer Security (TLS) v1.2 certificates signed by a standard certificate authority.
{: .govuk-body}

### Authentication and Authorization
{: .govuk-heading-m}

All resource endpoints in the API with the exception of authentication
and health-checks, require a JWT to be passed in the \'token\' header of
the request. The JWT contains information about the user and allows them
to access routes, services, and resources that are permitted with that
token. Without it the request will be met with a 401 error response.
{: .govuk-body}

### User accounts and permissions
{: .govuk-heading-m}

External systems integrating with Street Manager should use specific
credentials setup for API users. This is to allow Street Manager to
differentiate between Web UI user accounts and API users. User accounts
are assigned specific roles, such as *planner* and *admin*.
{: .govuk-body}

*Note: Currently systems who need to act as users associated with
multiple organisations, i.e. submitting permits for multiple utility
companies, need to use separate user accounts for each organisation.*
{: .govuk-body}

### JWT
{: .govuk-heading-m}

Json Web Token (JWT) is an open standard for exchanging information
securely. The entities of street manager exchange information using JWTs
and resources of the street manager API require that a JWT be provided
as part of the request. This will be discussed in detail as part of the
security section.
{: .govuk-body}

### Resource
{: .govuk-heading-m}

<code>POST /authenticate</code>

The authenticate endpoint takes a case sensitive username (email
address) and password, returning a JWT token if successful. **The JWT
token is valid for one hour.** Once the token has been acquired it can
be added to all protected resource requests made via swagger using the
Authorize button.
{: .govuk-body}

![authorise](images/authorise.png)

When clicked this will present an input to enter the token. Once
authorized then all protected resource requests made via swagger will
have the token header set.
{: .govuk-body}

![available authorisations](images/available-authorisations.png)

### Error responses
{: .govuk-heading-m}

It's important to distinguish between authentication and authorization
error responses as it will help narrow down where an issue is occurring.
{: .govuk-body}

### Authentication Failed
{: .govuk-heading-m}

<code>{ "message": "Authentication failed", "error": { "status": 401 }</code>

Authentication fails when the token provided in the request is invalid.
The token may have expired or the value set as the token was incorrect.
You may also see this error when calling the POST /authenticate endpoint
with invalid credentials i.e. wrong username or password.
{: .govuk-body}

### Access Restricted
{: .govuk-heading-m}

<code>{ "message": "Access restricted", "error": { "status": 401 }</code>

The access restricted error indicates that although the token was valid,
the user does not have permissions to perform the desired action. This
error could arise for several reasons which will be listed in detail as
part of the resource section, but common triggers would be attempting to
manipulate entities (permit, reinstatement, inspection etc.) not related
to your organization.
{: .govuk-body}

### Rate limiting
{: .govuk-heading-m}

To protect the system from denial of service attacks, repeated calls
made in a short period of time from a single IP source will receive 405
status responses. If you are receiving 405 responses ensure you are not
sending calls
{: .govuk-body}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">


## Sequencing
{: .govuk-heading-l #sequencing}

As detailed in the Technical Overview section, the reporting API drives
a large amount of data retrieval functionality whilst the street manager
API drives a lot of key user workflows e.g. submit permit, assess
permit, etc. These two APIs together form much of the common sequences a
user is likely to perform.
{: .govuk-body}

Below is an example of sequence calls used to submit and respond to a
permit application as well as how various actions affect the works
lifecycle. These endpoints are all available as part of the street
manager API and are discussed in more detail within the resource guide.
{: .govuk-body}

![sequence diagram](images/sequence-calls-used-to-submit-and-respond-to-a-permit-application.png)

The following actions can be performed at any subsequent stage in the
sequence from the stage they are available:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>File upload</li>
  <li>Add a comment</li>
  <li>Add reinstatement</li>
  <li>Add inspections</li>
</ol>

Whilst the above focuses much on data manipulation via the street
manager API, here is an example of some data retrieval calls that may be
performed alongside these actions via the reporting API.
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>Permits awaiting assessment</strong>: <code>GET /permits?status=submitted</code></li>
  <li><strong>Expiring interim reinstatements</strong>: <code>GET /sites?status=interim</code></li>
  <li><strong>Disputed FPNs</strong>: <code>GET /fixed-penalty-notices?status=disputed</code></li>
</ol>

### Understanding the status of a work
{: .govuk-heading-m}

As a permit progresses through the sequence above the permit status
changes. Knowing the various statuses of a permit allows you to filter
lists of permits related to your organization through the reporting API.
The statuses of a permit are:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>submitted</strong>: The permit is awaiting assessment</li>
  <li><strong>granted_proposed</strong>: The permit has been assessed as granted by an HA</li>
  <li><strong>granted_with_changes</strong>: The permit has been assessed as granted with changes by an HA</li>
  <li><strong>refused</strong>: The permit has been assessed as refused by an HA</li>
  <li><strong>granted_in_progress</strong>: The permit has been started by the promoter after being granted</li>
  <li><strong>closed</strong>: The permit has been stopped by the promoter</li>
  <li><strong>cancelled</strong>: The permit has been cancelled by the promoter</li>
  <li><strong>deemed_proposed</strong>: The permit has been automatically deemed as it was not assessed before the deadline date</li>
  <li><strong>deemed_in_progress</strong>: The permit has been started by the promoter after being deemed</li>
</ol>

Note: PAA/Major submission will be included as part of this sequence.
{: .govuk-body}

### Viewing works and permits
{: .govuk-heading-m}

#### Street Manager API
{: .govuk-heading-s}

When a permit has been submitted and a works record exists both
promoters and HAs can view the works record via the GET work endpoint on
the street manager API. This endpoint requires you to provide the **work
reference number** which was supplied during the submission of the
permit application.
{: .govuk-body}

<code>GET /works/{work reference number}</code>

This contains information about all of the entities associated with the
work record, the properties of this response are:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>Active permit</strong>: The currently active permit associated with the works. In the sequence above this would contain the permit awaiting assessment</li>
  <li><strong>Sites</strong>: Any reinstatement sites that have been added to the works (none initially)</li>
  <li><strong>Inspections</strong>: Any inspections that have been issued on the works (none initially)</li>
  <li><strong>FPNs</strong>: Any fixed penalty notices that have been issued on the works (none initially)</li>
  <li><strong>Permits</strong>: Summary of all permits that have been associated with that works (i.e. multiple permits)</li>
</ol>

It's also possible to retrieve only information about the permit itself
using the GET permit endpoint. This endpoint requires you to provide the
**permit reference number** which is returned in the response of the
permit application submission. As detailed in the submit permit
application section of the resource guide, the permit reference number
is simply the works reference number suffixed by an incrementing number
e.g. {WRN}-01 for the first permit added to that work.
{: .govuk-body}

<code>GET /works/{work reference number}/permits/{permit reference number}</code>

#### Reporting API
{: .govuk-heading-s}

The reporting API permits endpoint will be the most useful way to see
all permits that are relevant to your organisation.
{: .govuk-body}

*Note: Reporting API data can be retrieved as CSV data to allow
exporting data to tools such as Excel for more complex reporting needs,
such as all permit details needed for Fee Reporting.*
{: .govuk-body}

For example, as an HA you can use the **status** property of a permit
indicates the current state it is in, for submitted permits that are
awaiting assessment the permit status will be "submitted".
{: .govuk-body}

<code>GET /permits?status=submitted</code>

The **status** query param can be changed to any of the values discussed
above to retrieve permits in any stage of the sequence. This is
discussed in more detail in the reporting API resource guide.
{: .govuk-body}

Promoters can use **status** values to find permits which the HA has
responded to, see the Street Manager API resource guide for more details
on Permit status values.
{: .govuk-body}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">


## Resource Guide
{: .govuk-heading-l #resource-guide}

### Reporting API
{: .govuk-heading-m}

As discussed in the sequencing section, the reporting API allows
promoters and HAs to query resource lists for their organization,
filtering them by various properties. The reporting API currently allows
users to retrieve the following:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Permits</li>
  <li>Comments</li>
  <li>Fixed penalty notices</li>
  <li>Sites</li>
</ol>

Most endpoints on the reporting API are driven with pagination. This
means the following common query params are available for most
endpoints:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>Before</strong>: cursor to filter pagination results backwards (i.e. retrieve everything before this item)</li>
  <li><strong>After</strong>: cursor to filter pagination results forwards (i.e. retrieve everything after this item) Each paginated response in the reporting API contains the following meta-data:</li>
</ol>

<code>{ "pagination": { "page_start": 1, "total_rows": "50" }, "rows": [...] }</code>

The page_start and total_rows properties indicate the current page of
results returned in the response, in the context of the total number of
available rows (records). The rows property contains the records for the
current page.
{: .govuk-body}

By default there are a maximum 25 rows returned per page and each record
in the rows array has a cursor property, which is that record's
placement in the context of the total result set. Therefore in the
example above, if you have 50 items total, with 25 items per page, to
get the next page of results would simply involve taking the last item
in the rows array, and using it's cursor value as the \'after\' query
param value. This would result in the next metadata response
{: .govuk-body}

containing rows 26-50. The reason we use cursor based paging is to
handle real time data. That is to say, the same items will not show up
on different pages even as items are inserted/removed from the database
in-between queries.
{: .govuk-body}

### Permits
{: .govuk-heading-m}

#### View permits
{: .govuk-heading-s}

As discussed in the sequencing section, the reporting API allows
promoters and HAs to query permits for their organization, filtering
them by various properties such as status or works reference number. As
well as this the reporting API allows users the retrieve count summary
information about permits.
{: .govuk-body}

### Get permits endpoint
{: .govuk-heading-m}

<code>GET /permits</code>

The permits endpoint retrieves a list of permits associated with the
user. The endpoint allows configuration of results through the use of
the following query params:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>status</strong>: The permit status i.e. submitted, granted</li>
  <li><strong>query</strong>: The work reference number associated with the permit (partial match)</li>
  <li><strong>sort_column</strong>: The property of the permit to order results by</li>
  <li><strong>sort_direction</strong>: Ascending/descending</li>
</ol>

### Count permits endpoint
{: .govuk-heading-m}

<code>GET /permits/counts</code>

The counts endpoint provides a total summary of permits grouped by their status. The response contains:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Total refused applications</li>
  <li>Total submitted applications</li>
  <li>Total granted</li>
  <li>Total in-progress permits</li>
  <li>Total closed permits</li>
</ol>

### Comments
{: .govuk-heading-m}

#### View Comments
{: .govuk-heading-s}

The reporting API allows users to view comments associated with their organization.
{: .govuk-body}

#### Get comments endpoint
{: .govuk-heading-s}

<code>GET /comments</code>

Retrieves a list of comments that have been added to any works record associate with the currently authenticated user's organization. Comments are added via the street manager API (see comments section) and visible from this endpoint in the reporting API.
{: .govuk-body}

### FPNs
{: .govuk-heading-m}

#### View Fixed Penalty Notices
{: .govuk-heading-s}

The reporting API allows users to view FPNs associated with their organization.
{: .govuk-body}

#### Get FPNs endpoint
{: .govuk-heading-s}

<code>GET /fixed-penalty-notices</code>

Retrieves a list of FPNs that have been added to any works record associate with the currently authenticated user's organization. FPNs are issued via the street manager API (see FPN section). Similarly to the permits endpoint, FPNs can be filtered by status. The status of an FPN are:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>issued</strong>: Issued by the HA</li>
  <li><strong>accepted</strong>: Accepted by the promoter</li>
  <li><strong>paid</strong>: Confirmed as paid by the HA</li>
  <li><strong>paid_discounted</strong>: Confirmed as paid by the HA with a discount</li>
  <li><strong>disputed</strong>: Disputed by the promoter</li>
  <li><strong>withdrawn</strong>: Withdrawn by the HA</li>
</ol>

**Sites**
{: .govuk-body}

Street Manager API supports retrieving details on sites, details TBC.
{: .govuk-body}

### **Street Manager API**
{: .govuk-heading-m}

#### Submit permit application
{: .govuk-heading-s}

![Submit permit application](images/submit-permit-application.png)

As shown in the sequence, a promoter submits a permit application at which point an HA can assess it. Both a promoter and HA can add comments to the works record once it exists. Both users can upload files for various workflows, but in the case of applying for a permit application, a promoter may choose to upload a file as part of their application (i.e. providing a traffic management plan). Files need to be uploaded via the file upload endpoint before than can be used as part of other requests, so often this endpoint is called first. See the **File Upload** section of the resource guide for details.
{: .govuk-body}

It's important to clarify the technical relationship between a work and a permit. When creating a permit for the first time, this will in effect create a works record. A work can have multiple permits. You can create a work and a permit at the same time, or you can create a permit against an existing work. A work cannot exist without a permit.
{: .govuk-body}

There is also a concept of a work record's active permit, that is simply the most recently added permit on that works record. In essence, a work is a representation of all the permits, reinstatements, FPNs, inspections etc. that have been added to a particular location by a particular promoter.
{: .govuk-body}

#### Create work endpoint
{: .govuk-heading-s}

<code>POST /works</code>

This endpoint takes all the information required to create a permit, as well as some key identification information about the works record as a whole.
{: .govuk-body}

#### Constraints
{: .govuk-heading-s}

**Work reference number**
{: .govuk-body}

The works reference number provided must be unique in the context of our system in order to create a new work.
{: .govuk-body}

##### Works coordinates
{: .govuk-heading-s}

The works coordinates field expects a <a href="http://geojson.org/">GeoJSON geometry</a> and must be a point, line string or polygon.
{: .govuk-body}

<code>{ "type": "Point", "coordinates": [80000.00, 80000.00] }</code>

##### Promoter SWA code and highway authority SWA code
{: .govuk-heading-s}

These are particularly important fields in the request. Currently only a promoter can create a permit and works record so the promoter SWA code provided in the request much match that of the user authenticated to the system. This is determined by the token header of the request, which contains the JWT. In effect this means the promoter can only add a work or permit for their own organization.
{: .govuk-body}

All SWA codes are left-padded to 4 digits, so for example if the SWA code of your promoter organization is 10, this should be entered as "0010".
{: .govuk-body}

As a promoter, the HA SWA code you choose is the organization which will be associated with the permit, and thus responsible for assessing the permit. This HA will also be the only organization able to add inspections or issue FPNs against the work record. Although generally most information in the system is viewable by any organization, only the HA and promoter responsible for the work can make actions against it.
{: .govuk-body}

#### Get work endpoint
{: .govuk-heading-s}

<code>GET /works/{work reference number}</code>

Once the work has been created it can be retrieved using the GET endpoint, passing the work reference number that was used as part of the create request.
{: .govuk-body}

#### Create permit endpoint
{: .govuk-heading-s}

<code>POST /works/{work reference number}/permits</code>

A work can have multiple permits associated with it so it possible to add a new permit to an existing works. This endpoint requires some of the same fields as the create work request but much of the information from the first permit will be used as the value for additional permits, and so only a subset of information is required.
{: .govuk-body}

#### Constraints
{: .govuk-heading-s}

It's not possible to add an additional permit to an existing works, unless the work is in an inactive state. The state of the work is derived by the status of the most recently added permit. So in short, an additional permit can only be added to a work if the most recently added permit on the existing works record has a status of closed, cancelled or refused.
{: .govuk-body}

### Get permit endpoint
{: .govuk-heading-m}

<code>GET /works/{work reference number}/permits/{permit reference number}</code>

Once an additional permit has been added to an existing works record, it can be retrieved using the work and permit reference number. The permit reference number is simply the works reference number suffixed by an incrementing number e.g. {WRN}-01 for the first permit added to that work.
{: .govuk-body}

#### Assess permit application
{: .govuk-heading-s}

![Assess permit application](images/assess-permit-application.png)

As shown in the sequence diagram, once a permit application has been submitted an HA user can provide an assessment decision for the permit. There are technically 4 assessment decision options:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Granted</li>
  <li>Granted with changes</li>
  <li>Refused</li>
  <li>Deemed</li>
</ol>

*Note: Available options may change as functionality is updated/added*
{: .govuk-body}

Permits are deemed automatically when they exceed their response date, and granted with changes is a future function so these two options aren\'t explicitly supported as manually entry.
{: .govuk-body}

#### Update status endpoint
{: .govuk-heading-s}

<code>POST /works/{work reference number}/permits/{permit reference
number}/status</code>

Assessing a permit application is achieved through this endpoint by providing an assessment status. This also changes the overall permit status. Once a permit has been assessed it cannot be assessed again.
{: .govuk-body}

#### Constraints
{: .govuk-heading-s}

As mentioned in the submit permit application section, a permit can only be assessed by the highway authority that the permit was submitted to. This means HA users can only assess permits on work records they are associated with. If the permit was submitted to a different organization, they will not be able to assess it. Furthermore promoters cannot assess their own permits.
{: .govuk-body}

### On site (start/stop works)
{: .govuk-heading-m}

#### On site
{: .govuk-heading-s}

![On site](images/on-site.png)

Once a permit has been submitted and granted by an HA, the promoter which raised the permit is able to:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Start a work</li>
  <li>Stop a work</li>
  <li>Provide inspection units</li>
  <li>Indicate whether or not an excavation was carried out</li>
</ol>

These actions control various stages of the works record life cycle as per the sequence diagram above.
{: .govuk-body}

#### Start work endpoint
{: .govuk-heading-s}

<code>PUT /works/{work reference number}/start</code>

When a permit is submitted initially, a proposed start and end date for the work must be provided. The start endpoint is then used to provide the date the work has actually began, and thus officially starting the work.
{: .govuk-body}

By setting an actual start date, the active permit's status will change to in-progress. This allows promoter organization users to add reinstatements against the works record if an excavation was carried out and it also allows highway authority users to add inspections, which will be covered in separate sections.
{: .govuk-body}

#### Constraints
{: .govuk-heading-s}

The date provided must be in the past, you can\'t set an actual start date ahead of time. You can only start a work if the active permit has been granted. You can only provide an actual start date once, afterwards it cannot be changed.
{: .govuk-body}

### Stop work endpoint
{: .govuk-heading-m}

<code>PUT /works/{work reference number}/stop</code>

When a permit is submitted initially, a proposed start and end date for the work must be provided. The stop endpoint is then used to provide the date the work has actually ended, and thus officially stopping the work.
{: .govuk-body}

By setting an actual stop date via this endpoint, the active permit's status will change to closed. It's still possible to add reinstatements and inspections to closed works as they may be added retrospectively.
{: .govuk-body}

#### Constraints
{: .govuk-heading-s}

The date provided must be in the past, you can\'t set an actual stop date ahead of time. You can only stop a work if the active permit is in progress i.e. a start date has been provided. You can only provide an actual stop date once, afterwards it cannot be changed. The actual stop date must be after the actual start date.
{: .govuk-body}

### Excavation carried out endpoint
{: .govuk-heading-m}

<code>PUT /works/{work reference number}/excavation</code>

When a permit is submitted initially the excavation property indicates whether or not an excavation will need to be carried out as part of the work. Similar to proposed start and stop, this endpoint indicates whether or not an excavation was *actually* carried out.
{: .govuk-body}

Marking an excavation was carried out on an in-progress work record allows promoters to add reinstatements to that works record, which will be covered in a separate section.
{: .govuk-body}

#### Constraints
{: .govuk-heading-s}

You can only make this request if the permit is in-progress or closed. You can only set whether or not an excavation was carried out once, afterwards it cannot be changed.
{: .govuk-body}

### Inspection units endpoint
{: .govuk-heading-m}

<code>PUT /works/{work reference number}/inspection-units</code>

Once a permit is in progress and an excavation has been carried out, a promoter can log the inspection units associated with the currently active permit.
{: .govuk-body}

#### Constraints
{: .govuk-heading-s}

You can only make this request if the permit is in-progress or closed. You can only provide inspection-units if a reinstatement currently exists on the works record, which will cover in a separate section.
{: .govuk-body}

#### Reinstatements
{: .govuk-heading-m}

#### Add reinstatements
{: .govuk-heading-s}

![Add reinstatements](images/add-reinstatements.png)

As shown in the sequence diagram, once the a work has been started by the promoter and an excavation was carried out, then a promoter can add reinstatements and sites. A promoter can continue to create and view these even after the work has been stopped and completed, as they made need to do this retrospectively.
{: .govuk-body}

In a similar vein to the relationship between a works and a permit, it's important to clarify the technical relationship between a site and a reinstatement. When creating a reinstatement for the first time, this will in effect create a site record. A site can have multiple reinstatement. You can create a site and a reinstatement at the same time, or you can create a reinstatement against an existing site. A site cannot exist without a reinstatement.
{: .govuk-body}

A site is a representation of all the reinstatements carried out at a particular location but the most recently added reinstatement reflects the sites properties.
{: .govuk-body}

### Create site endpoint
{: .govuk-heading-m}

<code>POST /works/{work reference number}/sites</code>

This endpoint takes all the information required to create a reinstatement, a successful request will create a site with an associated reinstatement.
{: .govuk-body}

#### Constraints
{: .govuk-heading-s}

##### Reinstatement coordinates
{: .govuk-heading-s}

The reinstatement coordinates field expects a <a href="http://geojson.org/">GeoJSON geometry</a> and must be a point, line string or polygon.
{: .govuk-body}

<code>{ "type": "Point", "coordinates": [80000.00, 80000.00] }</code>

### Get site endpoint
{: .govuk-heading-m}

<code>GET /works/{work reference number}/sites/{site id}</code>

Once a site has been created it can be retrieved using the GET endpoint, passing the site id which is returned as part of the create request.
{: .govuk-body}

### Create reinstatement endpoint
{: .govuk-heading-m}

<code>POST /works/{work reference number}/sites/{site id}/reinstatements</code>

A site can have multiple reinstatements associated with it so it is possible to add a new reinstatement to an existing site. This endpoint requires all of the same fields as the create site request.
{: .govuk-body}

#### Constraints
{: .govuk-heading-s}

A reinstatement cannot be added before the actual start date of a work. A reinstatement can be interim or permanent. If the most recently added reinstatement on a site is interim, then a new permit is required to be granted and started before that site can be made permanent.
{: .govuk-body}

### Inspections
{: .govuk-heading-m}

#### Add inspections
{: .govuk-heading-s}

![Add inspections](images/add-inspections.png)

As shown in the sequence diagram above, once a work has been started then an HA can issue an inspection. Similar to reinstatements, this can be done even after the works has been stopped and completed, in cases where the HA needs to do this retrospectively.
{: .govuk-body}

There are several inspection outcome types supported:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Passed</li>
  <li>Unable to complete</li>
  <li>Failed standard</li>
  <li>Failed 2 hour • Failed 4 hour</li>
</ol>

When issuing a failed inspection it's also possible to upload supporting evidence. This requires using the file upload flow. See the File Upload section of the resource guide for details.
{: .govuk-body}

#### Create inspection endpoint
{: .govuk-heading-s}

<code>POST /works/{work reference number}/inspections</code>

Creating an inspection will return a inspection reference number which can be used to retrieve an individual inspection via the GET endpoint provided. The inspection reference number is simply the works reference number suffixed by an incrementing number e.g. {WRN}-INSP-01 for the first inspection added to that work.
{: .govuk-body}

#### Get inspection endpoint
{: .govuk-heading-s}

<code>GET /works/{work reference number}/inspections/{inspection reference
number}</code>

### FPNs
{: .govuk-heading-m}

#### Issue a FPN (HA only)
{: .govuk-heading-s}

An HA user can issue a fixed penalty notice against the work record at any point in the works life cycle. Promoters can view and dispute the FPN but they cannot issue their own. HA users may upload evidence to support their FPN but the workflow for this is explained in the file upload section. There are several statuses an FPN can have:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Issued</li>
  <li>Accepted</li>
  <li>Paid</li>
  <li>Paid (discounted)</li>
  <li>Disputed</li>
  <li>Withdrawn</li>
</ol>

#### Create FPN endpoint
{: .govuk-heading-s}

<code>POST /works/{work reference number}/fixed-penalty-notices</code>

Creating a FPN will return a FPN reference number which can be used to retrieve the individual FPN via the GET endpoint provided. The FPN reference number is simply the works reference number suffixed by an incrementing number e.g. {WRN}-FPN-01 for the first FPN added to that work.
{: .govuk-body}

#### Get FPN endpoint
{: .govuk-heading-s}

<code>GET /works/{work reference number}/fixed-penalty-notices/{FPN reference
number}</code>

#### Action FPN endpoint
{: .govuk-heading-s}

<code>PUT /works/{work reference number}/fixed-penalty-notices/{FPN reference
number}/status</code>

Both a promoter and HA can action FPNs in different way. When an FPN is created by the HA it is considered issued. A promoter can accept or dispute FPNs, whilst an HA officer can mark an FPN as withdrawn or paid.
{: .govuk-body}

#### File upload
{: .govuk-heading-s}

Several flows discussed in the previous sections allow users to add files as part of their request:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>
    <strong>Submit permit application:</strong> planners can upload traffic management plans
  </li>
  <li>
    <strong>Add reinstatement:</strong> planners can upload evidence of the reinstatement
  </li>
  <li>
    <strong>Issue an inspection:</strong> HA users can upload evidence as part of issuing failed inspection
  </li>
  <li>
    <strong>Issue a fixed penalty notice:</strong> HA users can upload evidence as part of issuing an FPN
  </li>
</ol>

Uploading a file is achieved through the file upload endpoint. This endpoint is required as part of all the above flows as any files that the user wishes to associate with the above requests must first be uploaded using this endpoint. As mentioned in the Sequencing section, you can upload files at any point in the works lifecycle.
{: .govuk-body}

*Note: The sequence for uploading files may change to allow drafting permits before uploading files.*
{: .govuk-body}

### Upload file endpoint
{: .govuk-heading-m}

<code>POST /files</code>

Once a file has been uploaded the response will contain a file ID. This is the unique identifier of the file in our system. Behind the scenes the file will be uploaded to S3 and virus scanned. This file ID can then be provided in the requests of the flows discussed above. Once a valid file ID is provided in the requests of the above flows, the file is then associated with the relevant entity.
{: .govuk-body}

### Get file endpoint
{: .govuk-heading-m}

<code>GET /files/{file ID}</code>

Retrieves the file using the file ID.
{: .govuk-body}

#### Constraints
{: .govuk-heading-s}

As the file is virus scanned at the point of upload, it is not immediately available for retrieval. It's possible that this endpoint could return a file not found error response if the file has not yet been virus scanned and marked as safe or if the file was deemed unsafe and removed from the system.
{: .govuk-body}

Typically the virus scanning process will only take a few seconds.
{: .govuk-body}

### Delete file endpoint
{: .govuk-heading-m}

<code>DELETE /files/{file ID}</code>

Deletes a file from the system.
{: .govuk-body}

#### Constraints
{: .govuk-heading-s}

You cannot remove a file that's been linked to an entity. As soon as the file id is used as part of a create permit/reinstatement/FPN/inspection request then it is considered linked to that entity.
{: .govuk-body}

### Comments
{: .govuk-heading-m}

#### Add comment
{: .govuk-heading-s}

Both promoter and highway authority users can add comments to a works record. When a comment is added to a works record it will be returned as part of the get works response.
{: .govuk-body}

#### Create comment endpoint
{: .govuk-heading-s}

<code>POST /works/{work reference number}/comments</code>

Add a comment to a work record.
{: .govuk-body}

#### View comments
{: .govuk-heading-s}

The comments on an individual work record can be viewed as part of that work's history. This endpoint also returns audit events such as when a permit is assessed, started etc. You can distinguish history items as audits or comments by the **isComment** property.
{: .govuk-body}

### History endpoint
{: .govuk-heading-m}

<code>GET /works/{work reference number}/history</code>

As well as viewing comments on a work record level, you can also call the reporting API comments endpoint to retrieve all comments associated with your users organization. See the Reporting API Comments section of the resource guide.
{: .govuk-body}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">


## Permit Alterations
{: .govuk-heading-l #permit-alterations}

API will support submitting permit alterations, details and sequencing TBC.
{: .govuk-body}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">


## User and organisation registration
{: .govuk-heading-l #user-and-organisation-registration}

API will support user and organisation registration, details and sequencing TBC.
{: .govuk-body}