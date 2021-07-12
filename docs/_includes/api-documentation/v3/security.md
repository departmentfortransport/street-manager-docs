## Security
{: .govuk-heading-l #security}

### HTTPS
{: .govuk-heading-m #https}

All Street Manager web and API interfaces are secured using Transport Layer Security (TLS) v1.2
certificates issued by Amazon Web Services.  These certificates are signed by the 'Amazon Root CA 1' certificate as listed in the 'Certification Authorities' section of the [AWS Chain of Trust](https://www.amazontrust.com/repository/) document.
{: .govuk-body}

When sending requests to the Street Manager APIs the URL must start with <code>https://</code>. Requests sent with <code>http://</code> will result in an error.
{: .govuk-body}

### Authentication and Authorisation
{: .govuk-heading-m #auth}

All resource endpoints in the API, with the exception of authentication and status, require a [JWT](#jwt) to be passed in the \'token\' header of the request. The [JWT](#jwt) contains information about the user and allows them to access routes, services, and resources that are permitted with that token. Without it the request will be met with a 401 error response.
{: .govuk-body}

A <code>systemToken</code> API key is also available on the Party API, this token is for internal use only and is not required for any exposed endpoint.
{: .govuk-body}

### User accounts and permissions
{: .govuk-heading-m}

External systems integrating with Street Manager should use specific credentials setup for API users. This is to allow Street Manager to differentiate between Web UI user accounts and API users. User accounts are assigned specific roles, such as *planner* and *admin*.
{: .govuk-body}

Each user can perform read operations to every resource, however write operations are restricted based on a user's role and the organisation they are associated with.
{: .govuk-body}

If the organisation the user belongs to is suspended they will be unable to log in. If they are logged in before the organisation is suspended then they will receive 401 error responses on read/write operations and will be prevented from logging again. Contractors working on behalf of suspended organisations will receive 401 error responses on read/write operations for that organisation.
{: .govuk-body}

**Note:** *Currently systems who need to act as users associated with multiple organisations, i.e. submitting permits for multiple utility companies, **need to use separate user accounts for each organisation**.*
{: .govuk-body}

The table below shows the current permissions per endpoint.
{: .govuk-body}

#### Work API
{: .govuk-heading-s}

<table class="govuk-table">
  <caption class="govuk-table__caption">Authorisation per endpoint for Work API</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header">Endpoint</th>
      <th class="govuk-table__header">Roles</th>
      <th class="govuk-table__header">Organisation Member*</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /authenticate</code></td>
      <td class="govuk-table__cell">None</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /files</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>DELETE /files/{id}</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /works</code></td>
      <td class="govuk-table__cell">Planner &amp; Contractor</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /works/*</code></td>
      <td class="govuk-table__cell">Planner &amp; Contractor</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /works/{referenceNumber}/comments</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /works/{referenceNumber}/comments/{commentReferenceNumber}/read</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /works/{referenceNumber}/fixed-penalty-notices</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /works/{referenceNumber}/fixed-penalty-notices/{fpnReferenceNumber}/status</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /works/{referenceNumber}/inspections</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /works/{referenceNumber}/inspections/{inspectionReferenceNumber}/withdraw</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /works/{referenceNumber}/scheduled-inspections</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>DELETE /works/{referenceNumber}/scheduled-inspections</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /works/{referenceNumber}/permits/{permitReferenceNumber}/alterations</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /works/{referenceNumber}/permits/{permitReferenceNumber}/alterations</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /works/{referenceNumber}/permits/{permitReferenceNumber}/status</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /works/{referenceNumber}/sites/{siteNumber}/reinstatements</code></td>
      <td class="govuk-table__cell">Planner &amp; Contractor</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /activity</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /activity/{activityReferenceNumber}</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /activity/{activityReferenceNumber}/cancel</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
     <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /forward-plans</code></td>
      <td class="govuk-table__cell">Planner &amp; Contractor</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /work/{workReferenceNumber}/forward-plans/{forwardPlanReferenceNumber}</code></td>
      <td class="govuk-table__cell">Planner &amp; Contractor</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /work/{workReferenceNumber}/forward-plans/{forwardPlanReferenceNumber}</code></td>
      <td class="govuk-table__cell">Planner &amp; Contractor</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /work/{workReferenceNumber}/forward-plans/{forwardPlanReferenceNumber}/cancel</code></td>
      <td class="govuk-table__cell">Planner &amp; Contractor</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /historic-works/fixed-penalty-notices</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /historic-works/inspections</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /non-notifiable-works/sites</code></td>
      <td class="govuk-table__cell">Planner &amp; Contractor</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /section-81-works/section-81s</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /works/{workReferenceNumber}/section-81s/{section81ReferenceNumber}</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /works/{workReferenceNumber}/section-81s/{section81ReferenceNumber}/status</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/link-section-81</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/unlink-section-81</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /works/{workReferenceNumber}/section-81s/{section81ReferenceNumber}/reassign-section-81</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /works/{workReferenceNumber}/permits/{permitReferenceNumber}/hs2_acknowledgement</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /geographical-areas</code></td>
      <td class="govuk-table__cell">Admin (associated with a Highway Authority), Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /geographical-areas/{geographicalAreaReferenceNumber}</code></td>
      <td class="govuk-table__cell">Admin (associated with a Highway Authority), Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /sample-inspection-targets</code></td>
      <td class="govuk-table__cell">Admin (associated with a Highway Authority), Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /sample-inspection-targets/{sampleInspectionTargetReferenceNumber}</code></td>
      <td class="govuk-table__cell">Admin (associated with a Highway Authority), Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /sample-inspection-targets/{sampleInspectionTargetReferenceNumber}</code></td>
      <td class="govuk-table__cell">Admin (associated with a Highway Authority), Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>PUT /sample-inspection-targets/{sampleInspectionTargetReferenceNumber}/close</code></td>
      <td class="govuk-table__cell">Admin (associated with a Highway Authority), Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /sample-inspection-targets/{sampleInspectionTargetReferenceNumber}/close</code></td>
      <td class="govuk-table__cell">Admin (associated with a Highway Authority), Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /works/${workReferenceNumber}/section-74s</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /works/{workReferenceNumber}/section-74s/{section74ReferenceNumber}</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority (StreetWorksAdmin optional and if included returns additional sensitive financial information)</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /works/{workReferenceNumber}/section-74s/{section74ReferenceNumber}/highway-authority-status</code></td>
      <td class="govuk-table__cell">Highway Authority</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
  </tbody>
</table>

#### Reporting API
{: .govuk-heading-s}

<table class="govuk-table">
  <caption class="govuk-table__caption">Authorisation per endpoint for Reporting API</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header">Endpoint</th>
      <th class="govuk-table__header">Roles</th>
      <th class="govuk-table__header">Organisation Member*</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /*</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
  </tbody>
</table>

#### Street Lookup API
{: .govuk-heading-s}

<table class="govuk-table">
  <caption class="govuk-table__caption">Authorisation per endpoint for Street Lookup API</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header">Endpoint</th>
      <th class="govuk-table__header">Roles</th>
      <th class="govuk-table__header">Organisation Member*</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /*</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
  </tbody>
</table>

#### Geojson API
{: .govuk-heading-s}

<table class="govuk-table">
  <caption class="govuk-table__caption">Authorisation per endpoint for Geojson API</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header">Endpoint</th>
      <th class="govuk-table__header">Roles</th>
      <th class="govuk-table__header">Organisation Member*</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /*</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
  </tbody>
</table>

#### Party API
{: .govuk-heading-s}

<table class="govuk-table">
  <caption class="govuk-table__caption">Authorisation per endpoint for Party API</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header">Endpoint</th>
      <th class="govuk-table__header">Roles</th>
      <th class="govuk-table__header">Organisation Member*</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
     <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /*</code></td>
      <td class="govuk-table__cell">Planner, Contractor, Highway Authority &amp; Admin</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /logout</code></td>
      <td class="govuk-table__cell">Planner, Contractor, Highway Authority &amp; Admin</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /refresh</code></td>
      <td class="govuk-table__cell">Planner, Contractor, Highway Authority &amp; Admin</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /organisations/{organisationReference}</code></td>
      <td class="govuk-table__cell">Planner, Contractor, Highway Authority &amp; Admin</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /organisations/{organisationReference}/workstreams</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Admin</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /organisations/{organisationReference}/workstreams</code></td>
      <td class="govuk-table__cell">Planner &amp; Admin</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <code>GET /organisations/{organisationReference}/workstreams/{workstreamId}</code>
      </td>
      <td class="govuk-table__cell">Planner, Contractor, Highway Authority &amp; Admin</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <code>PUT /organisations/{organisationReference}/workstreams/{workstreamPrefix}</code>
      </td>
      <td class="govuk-table__cell">Planner &amp; Admin</td>
      <td class="govuk-table__cell">Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /users/{email}</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Admin</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
  </tbody>
</table>

#### Data Export API
{: .govuk-heading-s}

<table class="govuk-table">
  <caption class="govuk-table__caption">Authorisation per endpoint for Data Export API</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header">Endpoint</th>
      <th class="govuk-table__header">Roles</th>
      <th class="govuk-table__header">Organisation Member*</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /activity-data</code></td>
      <td class="govuk-table__cell">Planner, Contractor, Highway Authority, DataExport and Admin</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>POST /*/csv</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell"><code>GET /csv/{csvId}</code></td>
      <td class="govuk-table__cell">Planner, Contractor &amp; Highway Authority</td>
      <td class="govuk-table__cell">Not Required</td>
    </tr>
  </tbody>
</table>

\* An Organisation Member is a user with a SWA code matching the permit's <code>highway_authority_swa_code</code> or <code>promoter_swa_code</code>. This is enforced in addition to the user's role.
{: .govuk-body}

### JWT
{: .govuk-heading-m}

Json Web Token (JWT) is an open standard for exchanging information securely. The entities of Street Manager exchange information using JWTs and resources of the Street Manager API require that a JWT ID token be provided as part of the request.
{: .govuk-body}

The JWT is validated per service per request. Every service exposed by street manager will attempt to validate the JWT as part of its authentication and authorisation function.
{: .govuk-body}

The ID token expires 1 hour after it was generated, if an expired JWT is used in a request, an error with the HTTP status `401` will be returned.  In this scenario a new token will need to be generated using the <code>/party/refresh</code> endpoint by supplying a Refresh token.
{: .govuk-body}

To invalidate all JWT tokens associated with a user, the Access token should be provided to the <code>/party/logout</code> endpoint.
{: .govuk-body}



### Resource
{: .govuk-heading-m}

<code>POST /authenticate</code>

The authenticate endpoint takes a case sensitive username (email address) and password, returning JWT ID, Access and Refresh tokens if successful. **The JWT ID and Access tokens are valid for one hour, meanwhile the Refresh token is valid for 1 day.** Once the ID token has been acquired it can be added to all
protected resource requests made via swagger using the Authorize button. Users who have had their account disabled will not be able to successfully authenticate. User accounts that have 5 failed login attempts within a 5 minute period will be locked, and will return a <code>423</code> status code when attempting to authenticate. Locked accounts are automatically unlocked after 5 minutes. If the organisation the user belongs to, is suspended, then a 412 (Precondition Failed) error will be returned.
{: .govuk-body}

Example response:
{: .govuk-body .govuk-!-font-weight-bold}
<code>
{<br/>
&nbsp;&nbsp;"idToken": "...",                // Token to be included in header for authentication<br/>
&nbsp;&nbsp;"organisationReference": "XXXX", // SWA code or organisation reference for user<br/>
&nbsp;&nbsp;"accessToken": "...",            // Token used to logout a user invalidating existing tokens<br/>
&nbsp;&nbsp;"refreshToken": "..."            // Token used to re-authenticate a user, has long expiry time<br/>
}
</code>


![authorise]({{site.baseurl}}/api-documentation/images/v3/authorise.png)

When clicked this will present an input to enter the token. Once authorized then all protected resource requests made via swagger will have the token header set.
{: .govuk-body}

![available authorisations]({{site.baseurl}}/api-documentation/images/v3/available-authorisations.png)

If authenticating for the first time with a temporary password, a 307 Temporary Redirect to <code>authenticate/initial</code> will be returned, which can be called with the same request body.
{: .govuk-body}

<code>POST /authenticate/initial</code>

After a user has been invited to the system by their organisation admin, they need to set a new password. This endpoint can be called with a new user's email address and temporary password, and will return a token that should be provided to the Party API <code>/set-password</code> endpoint.
{: .govuk-body}

### Error responses
{: .govuk-heading-m}

It's important to distinguish between authentication and authorization error responses as it will help narrow down where an issue is occurring.
{: .govuk-body}

### Authentication Failed
{: .govuk-heading-m}

<code>{ "message": "Authentication failed", "error": { "status": 401 } }</code>

Authentication fails when the token provided in the request is invalid. The ID token may have expired or the value set as the token was incorrect. You may also see this error when calling the POST /authenticate endpoint with invalid credentials i.e. wrong username or password.
{: .govuk-body}

### Access Restricted
{: .govuk-heading-m}

<code>{ "message": "Access restricted", "error": { "status": 401 } }</code>

The access restricted error indicates that although the token was valid, the user does not have permissions to perform the desired action. This error could arise for several reasons which will be listed in detail as part of the resource section, but common triggers would be attempting to manipulate entities (permit, reinstatement, inspection etc.) not related to your organization.
{: .govuk-body}

### Rate limiting
{: .govuk-heading-m}

To protect the system from denial of service attacks, repeated calls made in a short period of time from a single IP source will receive 429 status responses. If you are receiving 429 responses ensure you are not sending an excessive number of calls.
{: .govuk-body}
