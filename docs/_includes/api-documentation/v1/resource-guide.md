## Resource Guide
{: .govuk-heading-l #resource-guide}

### Reporting API
{: .govuk-heading-m}

As discussed in the sequencing section, the Reporting API allows
promoters and HAs to query resource lists for their organization,
filtering them by various properties. The Reporting API currently allows
users to retrieve the following:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><a class="govuk-link" href="#get-permits">Permits</a></li>
  <li><a class="govuk-link" href="#get-inspections">Inspections</a></li>
  <li>Comments</li>
  <li><a class="govuk-link" href="#get-fpns">Fixed penalty notices</a></li>
  <li><a class="govuk-link" href="#get-reinstatements">Reinstatements</a></li>
  <li>Workstreams</li>
  <li><a class="govuk-link" href="#polling">Work updates (polling endpoint)</a></li>
  <li><a class="govuk-link" href="#get-inspections">Inspections</a></li>
</ol>

#### Pagination
{: .govuk-heading-s}

Most endpoints on the Reporting API are driven with pagination. This
is controlled by the <strong>offset</strong> query param,
which indicates the starting point from which to return data.
{: .govuk-body}

Each paginated response in the Reporting API contains the following meta-data:
{: .govuk-body}

<code>{ "pagination": { "has_next_page": true, "total_rows": "50" }, "rows": [...] }</code>

The <strong>has_next_page</strong> and <strong>total_rows</strong> properties indicate if
additional pages of results are available to be returned, in the context of the total number
of rows (records).
{: .govuk-body}

The <strong>total_rows</strong> property can return a maximum number of <strong>501</strong>,
if 501 is returned it indicates that there may be more rows available in the database to query.
This is confirmed if <strong>has_next_page</strong> is <strong>true</strong>, and means that if
there are more than 501 rows, and the offset is greater than 501, additional rows will be returned,
but the total_rows property will still be limited to 501 rows.
{: .govuk-body}

The rows property contains the records for the
current page.
{: .govuk-body}

By default, there are a maximum of 25 rows returned per page. Therefore, in the
example above, if you have 50 items total with 25 items per page, to
get the next page of results the offset should be set to 25.
The next response would contain rows 26-50.
{: .govuk-body}

#### Organisation specific data
{: .govuk-heading-s}

The various resources queryable through the Reporting API are only for the currently authenticated user's organisation or associated organisation as a contractor.
{: .govuk-body}

#### Get permits
{: .govuk-heading-s}

<code>GET /permits</code>

Query params:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>status</strong>: The permit status i.e. submitted, granted</li>
  <li><strong>work_status</strong>: The work status i.e. planned, completed</li>
  <li><strong>work_category</strong>: The work category i.e. minor, standard</li>
  <li><strong>lane_rental_assessment_outcome</strong>: The outcome of the lane rental assessment (if exists) i.e. chargeable, exempt</li>
  <li><strong>query</strong>: The work reference number, permit reference number or street associated with the permit (partial match)</li>
  <li><strong>sort_column</strong>: The property of the permit to order results by</li>
  <li><strong>sort_direction</strong>: Ascending/descending</li>
  <li><strong>start_date</strong>: Date range filtering by actual dates if available, otherwise filter permits by proposed dates</li>
  <li><strong>end_date</strong>: Date range filtering by actual dates if available, otherwise filter permits by proposed dates</li>
  <li><strong>work_start_date_from</strong>: Date filtering by actual start date if available, otherwise filter permits by proposed start date</li>
  <li><strong>work_start_date_to</strong>: Date filtering by actual start date if available, otherwise filter permits by proposed start date</li>
  <li><strong>work_end_date_from</strong>: Date filtering by actual end date if available, otherwise filter permits by proposed end date</li>
  <li><strong>work_end_date_to</strong>: Date filtering by actual end date if available, otherwise filter permits by proposed end date</li>
  <li><strong>swa_code</strong>: Optional parameter to be used by contractors only. Used to provide the swa code of the promoter the contractor is working on behalf of</li>
  <li><strong>hs2_works_only</strong>: Optional parameter to be used by only eligible promoters, HA's and contractors. This will return all HS2 works.</li>
  <li><strong>consultation_works_only</strong>: Optional parameter to be used by only eligible promoters, HA's and contractors. When true, this will return all HS2 consultation works.</li>
  <li><strong>consent_works_only</strong>: Optional parameter to be used by only eligible promoters, HA's and contractors. When true, this will return all HS2 consent works</li>
  <li><strong>unacknowledged_by_ha_only</strong>: Optional parameter to be used by only eligible promoters, HA's and contractors. When true, this will return all HS2 applications that have not yet been acknowledged by a HA.</li>
  <li><strong>is_traffic_sensitive</strong>: When true this will return permits where a traffic sensitive ASD has been selected</li>
  <li><strong>is_high_impact_traffic_management</strong>: When true this will return permits with a traffic management type of road closure, contra-flow, lane closure, convoy workings, multi-way signals or two-way signals</li>
  <li><strong>has_no_final_registration</strong>: When true this will return permits that have not yet submitted their final reinstatement</li>
  <li><strong>has_excavation</strong>: When true this will return permits that have carried out an excavation</li>
  <li><strong>is_early_start</strong>: When true this will return permits that have been flagged as an early start</li>
  <li><strong>is_deemed</strong>: When true this will return permits that have been automatically deemed</li>
  <li><strong>lane_rental_charges_not_agreed</strong>: When true this will return permits that have a lane rental assessment outcome of "chargeable" and charges have not been agreed</li>
  <li><strong>lane_rental_charges_potentially_apply</strong>: When true this will return permits that have a lane rental assessment outcome of "chargeable" or "potentially chargeable", or the work is taking place on a lane rental applicable road</li>
  <li><strong>geographical_area_reference_number</strong>: An optional array of Geographical Areas that you would like to filter your list by as a HA user</li>
</ol>

#### Get inspections
{: .govuk-heading-s}

Query params:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>inspection_response_type</strong>: inspection or reinspection</li>
  <li><strong>sort_column</strong>: The property of the inspection to order results by</li>
  <li><strong>sort_direction</strong>: Ascending/descending</li>
  <li><strong>swa_code</strong>: Optional parameter to be used by contractors only. Used to provide the swa code of the promoter the contractor is working on behalf of</li>
  <li><strong>geographical_area_reference_number</strong>: An optional array of Geographical Areas that you would like to filter your list by as a HA user</li>
</ol>

#### Get FPNs
{: .govuk-heading-s}

<code>GET /fixed-penalty-notices</code>

Retrieves a list of FPNs that have been added to any works record. FPNs are issued via the work API. FPNs can be filtered by status. Contractors are required to provide optional swa_code parameter in order to state which promoter they are working on behalf of.
{: .govuk-body}

#### Get reinstatements
{: .govuk-heading-s}

<code>GET /reinstatements</code>

Retrieves a list of Reinstatements that have been added to any works record. Reinstatements are created via the work API. Reinstatements can be filtered by status. Contractors are required to provide optional swa_code parameter in order to state which promoter they are working on behalf of.
{: .govuk-body}

#### Get alterations
{: .govuk-heading-s}

<code>GET /alterations</code>

Query params:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>alteration_status</strong>: The alteration status i.e. submitted, granted</li>
  <li><strong>work_status</strong>: The work status i.e. planned, completed</li>
  <li><strong>work_category</strong>: The work category i.e. minor, standard</li>
  <li><strong>lane_rental_assessment_outcome</strong>: The outcome of the lane rental assessment (if exists) i.e. chargeable, exempt</li>
  <li><strong>sort_direction</strong>: Ascending/descending</li>
  <li><strong>start_date_created</strong>: Date range filtering based on the date_created property</li>
  <li><strong>end_date_created</strong>: Date range filtering based on the date_created property</li>
  <li><strong>swa_code</strong>: Optional parameter to be used by contractors only. Used to provide the swa code of the promoter the contractor is working on behalf of</li>
  <li><strong>is_traffic_sensitive</strong>: When true this will return permit alterations where a traffic sensitive ASD has been selected</li>
  <li><strong>is_high_impact_traffic_management</strong>: When true this will return permit alterations with a traffic management type of road closure, contra-flow, lane closure, convoy workings, multi-way signals or two-way signals</li>
  <li><strong>is_duration_extension</strong>: When true this will return permit alterations that raised a duration extension</li>
  <li><strong>is_early_start</strong>: When true this will return permit alterations that have been flagged as an early start</li>
  <li><strong>is_deemed</strong>: When true this will return permit alterations that have been automatically deemed</li>
  <li><strong>lane_rental_charges_not_agreed</strong>: When true this will return permit alterations whose associated permit has a lane rental assessment outcome of "chargeable" and charges have not been agreed</li>
  <li><strong>lane_rental_charges_potentially_apply</strong>: When true this will return permit alterations whose associated permit has a lane rental assessment outcome of "chargeable" or "potentially chargeable", or the work is taking place on a lane rental applicable road</li>
  <li><strong>geographical_area_reference_number</strong>: An optional array of Geographical Areas that you would like to filter your list by as a HA user</li>
</ol>

#### Get forward plans
{: .govuk-heading-s}

<code>GET /forward-plans</code>

Query params:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>forward_plan_status</strong>: The forward plan status i.e. raised, closed</li>
  <li><strong>sort_column</strong>: The property of the forward plan to order results by</li>
  <li><strong>sort_direction</strong>: Ascending/descending</li>
  <li><strong>proposed_start_date</strong>: Date range filtering based on the proposed forward plan dates</li>
  <li><strong>proposed_end_date</strong>: Date range filtering based on the proposed forward plan dates</li>
  <li><strong>work_start_date_from</strong>: Date filtering based on the proposed forward plan start date</li>
  <li><strong>work_start_date_to</strong>: Date filtering based on the proposed forward plan start date</li>
  <li><strong>work_end_date_from</strong>: Date filtering based on the proposed forward plan end date</li>
  <li><strong>work_end_date_to</strong>: Date filtering based on the proposed forward plan end date</li>
  <li><strong>query</strong>: Search field for work reference number, permit reference number or street (partial match)</li>
  <li><strong>swa_code</strong>: Optional parameter to be used by contractors only. Used to provide the swa code of the promoter the contractor is working on behalf of</li>
  <li><strong>geographical_area_reference_number</strong>: An optional array of Geographical Areas that you would like to filter your list by as a HA user</li>
</ol>

#### Polling
{: .govuk-heading-s}

<code>GET /works/updates</code>

Retrieves a list of works which have had changes within a defined time period. This allows
external integrators to provide a start and end date or the number of previous minutes to poll Street Manager for changes and use the results to retrieve further information from the works or Reporting API.
{: .govuk-body}

In order to retrieve all updates since last usage, the start date could be set to the last date and time the user called the endpoint. Alternatively the user could provide the event date returned in the last entry of a previous result set.
{: .govuk-body}

Updates for a particular user can be excluded by populating the optional <code>exclude_events_from</code> field with their username.
{: .govuk-body}

Contractors are required to provide optional swa_code parameter in order to state which promoter they are working on behalf of.
{: .govuk-body}

#### Polling-search
{: .govuk-heading-s}

<code>POST /permits/search</code>

Retrieves further information for the works provided in the request. This allows
external integrators to retrieve additional information for the works returned by the <code>GET /works/updates</code> endpoint.
{: .govuk-body}

#### Fee reporting
{: .govuk-heading-s}

<code>POST /fees/csv</code>

Retrieves a list of chargeable items which have had occured within a defined time period in CSV format.
{: .govuk-body}

Chargeable activities include:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Granting of a permit application</li>
  <li>PAA progressed to PA - note, this occurs when a PA is received, not when it’s granted</li>
  <li>Granting of a change request</li>
  <li>Change in work category</li>
</ol>

{: .govuk-body}

Contractors are required to provide optional swa_code parameter in order to state which promoter they are working on behalf of.
{: .govuk-body}

#### Section 81s
{: .govuk-heading-s}

<code>GET /section-81s</code>

Retrieves a list of section 81s which are associated with the authenticated user's organisation.
{: .govuk-body}

Contractors are required to provide optional swa_code parameter in order to state which promoter they are working on behalf of.
{: .govuk-body}

#### CSV Exports
{: .govuk-heading-s}

<code>GET /csv-exports</code>

Retrieves a list of CSV exports which were generated by the authenticated user.
{: .govuk-body}

Contractors are able to provide optional <code>swa_code</code> parameter in order to state which promoter they are working on behalf of.
{: .govuk-body}

### **Work API**
{: .govuk-heading-m}

#### Work records and permits
{: .govuk-heading-s}

It's important to clarify the technical relationship between a work and a permit. When creating a permit for the first time, this will in effect create a works record. A work can have multiple permits. You can create a work and a permit at the same time, or you can create a permit against an existing work depending on the work records current status. A work cannot exist without a permit.
{: .govuk-body}

There is also a concept of a work record's active permit, that is simply the most recently added permit on that works record. In essence, a work is a representation of all the permits, reinstatements, FPNs, inspections etc. that have been added to a particular location.
{: .govuk-body}

### Delegated Users
{: .govuk-heading-s #delegated-users}

All POST and PUT endpoints will contain two properties, internal_user_identifier and internal_user_name, these are intended to allow external systems to pass their internal users identifiers to Street Manager so that they are recorded against actions performed via the API (e.g. displaying the internal users name against a Street Manager comment).
{: .govuk-body}

#### Create work endpoint
{: .govuk-heading-s}

<code>POST /works</code>

This endpoint takes all the information required to create a permit, as well as some key identification information about the works record as a whole.
{: .govuk-body}

If the user supplies a work_reference_number as part of the request body to POST /works then it must only contain alphanumeric characters, dashes ('-' - Unicode number U+002D) and underscores ('_' - Unicode number U+005F). If the user does not supply a work_reference_number then it will be auto-generated with the following format:<br/>
<br/>
<code><2 letter swa_org_prefix><3-letter workstream prefix><8 digit random number></code><br/>
<br/>
The generated work_reference_number is returned in the response.
{: .govuk-body}

The promoter_swa_code and highway_authority_swa_code are particularly important fields in the request. Currently only a promoter can create a permit and works record so the promoter SWA code provided in the request much match that of the user authenticated to the system. This is determined by the token header of the request, which contains the JWT. In effect this means the promoter can only add a work or permit for their own organisation.
{: .govuk-body}

All SWA codes are left-padded to 4 digits, so for example if the SWA code of your promoter organisation is 10, this should be entered as "0010".
{: .govuk-body}

As a promoter, the HA SWA code you choose is the organisation which will be associated with the permit, and thus responsible for assessing the permit. This HA will also be the only organisation able to add inspections or issue FPNs against the work record. Although generally most information in the system is viewable by any organisation, only the HA and promoter responsible for the work can make actions against it.
{: .govuk-body}

You may provide a workstream_prefix, which corresponds to the workstream with
which you would like to associate the works. A default workstream with prefix
"000" exists for every organisation however this is NOT for permit applications. If you do not explicitly provide a
workstream_prefix, we will try to find a non-default workstream associated with your organisation that the currently authenticated user has full-write access to. If this is not possible a work will not be creatable. When providing a prefix the workstream_prefix must match the prefix of a workstream associated with the user's organisation that they have full-write access to. See <a class="govuk-link" href="#access-and-permissions">access and permissions</a> for further information.
{: .govuk-body}

NSG related fields are optional. If not provided; street_name, town, area_name and road_category will be inferred from NSG data relating to the provided USRN. Use Street Lookup API endpoint /nsg/streets or /nsg/usrn to lookup this information.
{: .govuk-body}

permit_asds for the provided USRN can be found at Street Lookup API endpoint /nsg/usrn
{: .govuk-body}

#### Create permit endpoint
{: .govuk-heading-s}

<code>POST /works/{work reference number}/permits</code>

This endpoint is used to add a new permit to an existing works. There are two main journeys that this endpoint can be used for:

##### Raise an additional permit on a works
{: .govuk-heading-s}

A work can have multiple permits associated with it so it possible to add a new permit to an existing works. This endpoint requires some of the same fields as the create work request but much of the information from the first permit will be used as the value for additional permits, and so only a subset of information is required.
{: .govuk-body}

It's not possible to add an additional permit to an existing works, unless the work is in an inactive state. The state of the work is derived by the status of the most recently added permit. So in short, an additional permit can only be added to a work if the most recently added permit on the existing works record has a status of closed, cancelled, refused or revoked.
{: .govuk-body}

##### Progress a forward plan to a PAA or Permit
{: .govuk-heading-s}

When a forward plan is created, a works is created with no permits. In this scenario, this endpoint is used to raise the first permit on the works. This permit will be a PAA or Permit depending on the type of work and the duration. A forward plan with minor or standard duration, or any highway works will progress straight to a permit. A forward plan will progress to a PAA if the duration falls under the major category or if ttro is required. This endpoint requires some of the same fields as the create forward plan request but much of the information from the forward plan will be used as the value for the PAA/permit, and so only a subset of information is required.
{: .govuk-body}

In order to progress a forward plan, the forward plan must have a status of "raised". Upon successful progression, the forward plan's status will be updated to "closed".
{: .govuk-body}

#### Update status endpoint
{: .govuk-heading-s}

<code>POST /works/{work reference number}/permits/{permit reference
number}/status</code>

The sequence section shows how a permit can be assessed and actioned at various stages by promoters and highway authorities. This endpoint drives all of these functions.
{: .govuk-body}

A permit can only be actioned by the promoter and highway authority organisation it is associated with, these are specified when creating the work record.
{: .govuk-body}

#### On site (start/stop works)
{: .govuk-heading-s}

Once a permit has been submitted, the promoter which raised the permit is able to:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Start a work</li>
  <li>Stop a work</li>
  <li>Provide inspection units</li>
  <li>Update Final site registered</li>
</ol>

These actions control various stages of the works record life cycle as shown in the sequencing section.
{: .govuk-body}

#### Start work endpoint
{: .govuk-heading-s}

<code>PUT /works/{work reference number}/start</code>

When a permit is submitted initially, a proposed start and end date for the work must be provided. The start endpoint is then used to provide the date the work has actually began, and thus officially starting the work.
{: .govuk-body}

By setting an actual start date, the active permit's status will change to in-progress. This allows the promoter to add reinstatements against the works record if an excavation was carried out and it also allows highway authority users to add inspections, which will be covered in separate sections.
{: .govuk-body}

#### Revert start work endpoint
{: .govuk-heading-s}

<code>PUT /works/{work reference number}/revert-start</code>

If a permit has been started accidentally, it can be reverted using this endpoint. This will remove the actual start date and change the active permit's status back to proposed.
{: .govuk-body}

#### Stop work endpoint
{: .govuk-heading-s}

<code>PUT /works/{work reference number}/stop</code>

When a permit is submitted initially, a proposed start and end date for the work must be provided. The stop endpoint is then used to provide the date the work has actually ended, and thus officially stopping the work.
{: .govuk-body}

By setting an actual stop date via this endpoint, the active permit's status will change to closed. It's still possible to add reinstatements and inspections to closed works as they may be added retrospectively.
{: .govuk-body}

#### Revert stop work endpoint
{: .govuk-heading-s}

<code>PUT /works/{work reference number}/revert-stop</code>

If a permit has been stopped accidentally, it can be reverted using this endpoint. This will remove the actual end date and change the active permit's status back to in-progress.
{: .govuk-body}

#### Inspection units endpoint
{: .govuk-heading-s}

<code>PUT /works/{work reference number}/inspection-units</code>

You can only provide inspection units if a reinstatement currently exists on the works record. Adding a reinstatement is covered in a separate section.
{: .govuk-body}

#### Final reinstatement endpoint
{: .govuk-heading-s}

<code>PUT /works/{work reference number}/final-reinstatement</code>

Once a permit is in progress, and an excavation site has been added to the work, a promoter can flag that the final site has been registered for that work. Adding a reinstatement is covered in a separate section.
{: .govuk-body}

#### Reinstatements (Promoter)
{: .govuk-heading-s}

As shown in the sequencing section, once a work has been started by the promoter then a promoter can add reinstatements and sites. A promoter can continue to create and view these even after the work has been stopped and completed, as they may need to do this retrospectively.
{: .govuk-body}

In a similar vein to the relationship between a works and a permit, it's important to clarify the technical relationship between a site and a reinstatement. When creating a reinstatement for the first time, this will in effect create a site record. A site can have multiple reinstatement. You can create a site and a reinstatement at the same time, or you can create a reinstatement against an existing site. A site cannot exist without a reinstatement. All reinstatements belonging to a site will be of the same type e.g. excavation
{: .govuk-body}

A site is a representation of all the reinstatements carried out at a particular location but the most recently added reinstatement reflects the sites properties.
{: .govuk-body}

#### Create site endpoint
{: .govuk-heading-s}

<code>POST /works/{work reference number}/sites</code>

This endpoint takes all the information required to create a reinstatement, a successful request will create a site with an associated reinstatement.
{: .govuk-body}

#### Get site endpoint
{: .govuk-heading-s}

<code>GET /works/{work reference number}/sites/{site number}</code>

Once a site has been created it can be retrieved using the GET endpoint, passing the site number which is returned as part of the create request.
{: .govuk-body}

#### Create reinstatement endpoint
{: .govuk-heading-s}

<code>POST /works/{work reference number}/sites/{site number}/reinstatements</code>

A site can have multiple reinstatements associated with it so it is possible to add a new reinstatement to an existing site. This endpoint requires all of the same fields as the create site request.
{: .govuk-body}

#### Inspections (HA)
{: .govuk-heading-s}

As shown in the sequencing section, once a work has been started then an HA can issue an inspection. Similar to reinstatements, this can be done even after the works has been stopped and completed, in cases where the HA needs to do this retrospectively.
{: .govuk-body}

#### Create inspection endpoint
{: .govuk-heading-s}

<code>POST /works/{work reference number}/inspections</code>

Creating an inspection will return a inspection reference number which can be used to retrieve an individual inspection via the GET endpoint provided.
{: .govuk-body}

#### Fixed Penalty Notices (HA)
{: .govuk-heading-s}

As shown in the sequencing section An HA user can issue a fixed penalty notice (FPN) against the work record at any point in the works life cycle. Promoters can view and dispute the FPN but they cannot issue their own. HA users may upload evidence to support their FPN but the workflow for this is explained in the file upload section.
{: .govuk-body}

#### Create FPN endpoint
{: .govuk-heading-s}

<code>POST /works/{work reference number}/fixed-penalty-notices</code>

Creating a FPN will return a FPN reference number which can be used to retrieve the individual FPN via the GET endpoint provided.
{: .govuk-body}

#### Update FPN status endpoint
{: .govuk-heading-s}

<code>PUT /works/{work reference number}/fixed-penalty-notices/{FPN reference
number}/status</code>

Both a promoter and HA can action FPNs in different ways as shown in the sequencing section. When an FPN is created by the HA it is considered issued. A promoter can accept or dispute FPNs, whilst an HA officer can mark an FPN as withdrawn or paid.
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
  <li>
    <strong>Works record:</strong> Both promoters and HA users can upload files to the work record
  </li>
</ol>

Uploading a file is achieved through the file upload endpoint. This endpoint is required as part of all the above flows as any files that the user wishes to associate with the above requests must first be uploaded using this endpoint.
{: .govuk-body}

*Note: The sequence for uploading files may change to allow drafting permits before uploading files.*
{: .govuk-body}

#### Upload file endpoint
{: .govuk-heading-s}

<code>POST /files</code>

Once a file has been uploaded the response will contain a file ID. This is the unique identifier of the file in our system. Behind the scenes the file will be uploaded to S3 and virus scanned. This file ID can then be provided in the requests of the flows discussed above. Once a valid file ID is provided in the requests of the above flows, the file is then associated with the relevant entity.
{: .govuk-body}

One file can be uploaded at a time. This file cannot exceed 10MB.
{: .govuk-body}

The optional swaCode parameter is required for contractor users only. Contractors should provide the swaCode of the organisation they are working on behalf of.
{: .govuk-body}

#### Get file endpoint
{: .govuk-heading-s}

<code>GET /files/{file ID}</code>

Retrieves the file using the file ID.
{: .govuk-body}

As the file is virus scanned at the point of upload, it is not immediately available for retrieval. It's possible that this endpoint could return a file not found error response if the file has not yet been virus scanned and marked as safe or if the file was deemed unsafe and removed from the system.
{: .govuk-body}

Typically the virus scanning process will only take a few seconds.
{: .govuk-body}

#### Delete file endpoint
{: .govuk-heading-s}

<code>DELETE /files/{file ID}</code>

Deletes a file from the system. Users can only delete files which their organisation uploaded. You cannot remove a file that's been linked to an entity. For example as soon as the file id is used as part of a create request for permits/reinstatements/FPNs/inspections etc. or the file was uploaded against a work reference number it is considered linked to that entity.
{: .govuk-body}

#### History
{: .govuk-heading-s}

<code>GET /works/{work reference number}/history</code>

The history endpoint returns audit events associated with that works record such as when a permit is assessed, a comment is added etc.
{: .govuk-body}

Audit events in the history response will include a <code>topic</code> property to indicate what type of object triggered this audit. The <code>topic</code> property may contain one of following:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>Application</strong>: A permit action prior to assessment</li>
  <li><strong>Permit</strong>: A permit action once it has been granted</li>
  <li><strong>PAA</strong>: A permit action when it has a work_category of paa</li>
  <li><strong>ChangeRequest</strong>: A permit alteration action</li>
  <li><strong>FPN</strong>: A fixed penalty notice action</li>
  <li><strong>Reinstatement</strong>: A site or reinstatement action</li>
  <li><strong>Inspection</strong>: An inspection action</li>
  <li><strong>ScheduledInspection</strong>: A scheduled inspection action</li>
  <li><strong>Work</strong>: A work record action i.e. uploading a file</li>
  <li><strong>ForwardPlan</strong>: A forward plan action</li>
  <li><strong>Comment</strong>: Logging a comment</li>
  <li><strong>Section81</strong>: A section 81 action</li>
</ol>

Note that the <code>topic</code> property is subject to change. A more reliable option is the <code>event</code> enum property that details what specific action trigger the audit. See the <code>AuditEvent</code> enum in the Work API Swagger definition for a full list of possible events in Street Manager.
{: .govuk-body}

Audit events in the history response will also include an object_reference. Where further information is required about what has changed this object_reference can be used to find more details on the object.
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>Logging an Inspections</strong>: Inspection Reference Number</li>
  <li><strong>Applying for a Permit</strong>: Permit Reference Number</li>
  <li><strong>HA granting a permit applicaiton</strong>: Permit Reference Number</li>
  <li><strong>Permit application deeming</strong>: Permit Reference Number</li>
  <li><strong>Requesting a change</strong>: Change Request Reference Number</li>
  <li><strong>Creating a site or reinstatement</strong>: Site Number</li>
  <li><strong>Raising a FPN</strong>: FPN Reference Number</li>
  <li><strong>Adding or removing a File to a work record</strong>: File ID</li>
  <li><strong>Updating on site details of a work</strong>: Permit Reference Number</li>
</ol>

As well as viewing comments on a work record level, you can also call the Reporting API comments endpoint to retrieve all comments associated with your users organization. See the Reporting API section of the resource guide.
{: .govuk-body}

#### Permit Alterations
{: .govuk-heading-s}

Permit alterations allows promoters and HA users the ability to alter a permit once it's been created. Not all properties of a permit are changeable and thus depending on what's been changed and by who, the type of permit alterations are:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>
    <strong>Promoter change request:</strong> Promoter submitted alteration after permit has been granted or in-progress
  </li>
  <li>
    <strong>Promoter imposed change:</strong> Promoter submitted alteration before permit has been granted or in response to a permit modification request.
  </li>
  <li>
    <strong>Work extension:</strong> Promoter submitted proposed end date alteration to in-progress work
  </li>
  <li>
    <strong>HA imposed change:</strong> HA users impose changes to permit conditions after permit is granted or in-progress
  </li>
  <li>
    <strong>HA change request:</strong> Currently in the road map for future release (post April 2020)
  </li>
  <li>
    <strong>Duration challenge:</strong> A work extension which has been challenged by the HA with a reasonable_period_end_date
  </li>
</ol>

Creating an alteration will return a alteration reference number which can be used to retrieve an individual alteration via the GET endpoint provided.
{: .govuk-body}

While HA imposed changes are applied to the permit automatically, promoter change requests need to be granted (or deemed) before the changes are applied to the target permit.
{: .govuk-body}

#### Create alteration endpoint
{: .govuk-heading-s}

<code>POST /works/{work reference number}/permits/{permit reference number}/alterations</code>

Creates a permit alteration. The model takes all editable fields on the permit. When a promoter uses this endpoint, the alteration will have an AlterationType of PROMOTER_CHANGE_REQUEST in the case that they do not extend the end date of the permit while it in in progress, or WORK_EXTENSION in the case that they do. Once the alteration is create it is required to be assessed by the associated HA.
{: .govuk-body}

A HA can use this endpoint to impose changes. The HA must provide all details of the permit with changes only to the conditions section. The AlterationType in this case will be HA_IMPOSED_CHANGE. When an HA imposes a change that change is automatically applied to the permit. It will continue to have a status of Submitted but the permit will reflect the changes submitted.
{: .govuk-body}

#### Update alteration status endpoint
{: .govuk-heading-s}

<code>PUT /works/{work reference number}/permits/{permit reference number}/alterations/{permit alteration reference number}/status</code>

The sequence section shows how an alteration can be assessed and actioned at various stages by promoters and highway authorities. This endpoint drives all of these functions.
{: .govuk-body}

#### Get alteration endpoint
{: .govuk-heading-s}

<code>GET /works/{work reference number}/permits/{permit reference number}/alterations/{permit alteration reference number}</code>

This alteration endpoint returns both the original and the proposed changes of a permit in addition to the reason for the alteration, assessment information and other information relevant to the alteration.
{: .govuk-body}

#### Permit Discount
{: .govuk-heading-s}

<code>PUT /works/{work reference number}/permits/{permit reference number}/permit-discount</code>

This alteration endpoint allows a HA to amend permit discounts applied and reason after assessment.
{: .govuk-body}

#### Acknowledge HS2 applications endpoint
{: .govuk-heading-s}

<code>PUT /works/{work reference number}/permits/{permit reference number}/hs2_acknowledgement</code>

This endpoint allows HAs to acknowledge a HS2 consultation application.
{: .govuk-body}

#### Events and Activities
{: .govuk-heading-s}

<code>POST /activity</code>

<code>GET /activity/{activity reference number}</code>

<code>PUT /activity/{activity reference number}/cancel</code>

Events or Activities allow a HA to represent different activites within Street Manager. There are 13 activity types currently supported by Street Manager:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
 <li>Highway improvement works</li>
 <li>Highway repair and maintenance works</li>
 <li>Utility asset works</li>
 <li>Utility repair and maintenance works</li>
 <li> Diversionary Works</li>
 <li>Disconnection or alteration of supply</li>
 <li>Permanent reinstatement</li>
 <li>Remedial works</li>
 <li>Section 58</li>
 <li>Section 50</li>
 <li>Core Sampling</li>
 <li>Statutory Infrastructure Works</li>
 <li>Works for Rail Purposes</li>
</ol>

Creating an activity using the POST endpoint will return an activity reference number which can be used to retrieve an individual activity via the GET endpoint provided
{: .govuk-body}

Activities can be flagged as being cancelled by HA which initially raised the activity. The activity reference number is required. Optionally a reason for cancelling the activity can be provided. Activites are cancelled via the PUT endpoint provided.
{: .govuk-body}

#### Forward Plans
{: .govuk-heading-s}

<code>POST /forward-plans</code>

<code>GET /works/{work reference number}/forward-plans/{forward plan reference number}</code>

<code>PUT /works/{work reference number}/forward-plans/{forward plan reference number}</code>

<code>PUT /works/{work reference number}/forward-plans/{forward plan reference number}/cancel</code>

Forward plans allow a Planner to supply information about road or street works in their longterm programme, which may include those works in their annual operating programme, or three or five year rolling programmes. Giving advance notice with a forward plan helps with collaboration of works. Forward plans are only for major works and can only be progressed to a PAA.
{: .govuk-body}

The POST endpoint will create a forward plan and return a work reference number and a forward plan reference number, which can be used to retrieve an individual forward plan via the GET endpoint provided.
{: .govuk-body}

The GET endpoint will require the work reference number and forward plan reference number of the intended forward plan to return information.
{: .govuk-body}

There are two PUT endpoints, one to update and one to cancel the forward plan.
{: .govuk-body}

The first PUT endpoint will update a forward plan and will require a work reference number, forward plan reference number and a minimum of the mandatory information that you wish to update.
{: .govuk-body}

The second PUT endpoint (labeled 'cancel') will cancel the forward plan, and subsequently, the work it superseeds. This will require a work reference number, forward plan reference number and a cancellation reason.
{: .govuk-body}

There is no versioning available when updating information, so information changed is lost.
{: .govuk-body}

#### Section 81s
{: .govuk-heading-s}

<code>POST /section-81-works/section-81s</code>

<code>GET /works/{work reference number}/section-81s/{section 81 reference number}</code>

<code>PUT /works/{work reference number}/section-81s/{section 81 reference number}/status</code>

S81 is a part of NRSWA that details the need for works promoters to maintain and inspect their assets within the highway. A failure in these assets is commonly known as a S81 failure and could include covers that are broken.
{: .govuk-body}

The POST endpoint will create a section 81 and return a work reference number and a section 81 reference number.
{: .govuk-body}

The GET endpoint will require the work reference number and section 81 reference number of the intended section 81 to return information.
{: .govuk-body}

The PUT endpoint will update the status of a section 81 and will require a work reference number, section 81 reference number and optionally a promoter response or work type depending on the desired status outcome.
{: .govuk-body}

#### Geographical Areas
{: .govuk-heading-s}

<code>POST /geographical-areas</code>

<code>PUT /geographical-areas/{geographicalAreaReferenceNumber}</code>

Geographical Areas allow Admins of a Highway Authority orgnanistation to divide works and records geographically for HA users (such as permit officers or inspectors). Organisations can have a maximum of 100 Geographical Areas.
{: .govuk-body}

The POST endpoint accepts a CSV file of USRNs and will create a Geographical Area containing those USRNs.
{: .govuk-body}

The PUT endpoint accepts a CSV file of USRNs and will update the Geographical Area specified by the Geographical Area Reference number in the request, with the USRNs in the file.
{: .govuk-body}

The file must:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Be a valid .csv file type</li>
  <li>Contain max 10,000 USRNs</li>
  <li>Contain a single column of USRNs (without a heading)</li>
  <li>Contain unique USRNs</li>
  <li>Contain valid USRNs</li>
</ol>

### GeoJSON API
{: .govuk-heading-m}

This API returns data in the form of [GeoJSON](https://tools.ietf.org/html/rfc7946#section-4) using BNG (British National Grid [EPSG:27700](https://epsg.io/27700)) as the Coordinate Reference System, as per Street Works industry standard.
{: .govuk-body}

#### Get works endpoint
{: .govuk-heading-s}

<code>GET /works</code>

This endpoint takes min and max easting and northing values to select all works within a bounding box. The works selected can be optionally filtered using the start and end date params.
{: .govuk-body}

#### Get activities endpoint
{: .govuk-heading-s}

<code>GET /activities</code>

This endpoint takes min and max easting and northing values to select all activities within a bounding box. The activities selected can be optionally filtered using the start and end date params.
{: .govuk-body}

#### Get forward plans endpoint
{: .govuk-heading-s}

<code>GET /forward-plans</code>

This endpoint takes min and max easting and northing values to select all raised forward plans within a bounding box. The forward plans selected can be optionally filtered using the start and end date params.
{: .govuk-body}

#### Get HS2 Act Limits endpoint
{: .govuk-heading-s}

<code>GET /hs2-act-limits</code>

This endpoint takes min and max easting and northing values to select all HS2 act limits within a bounding box.
{: .govuk-body}

### Street Lookup API
{: .govuk-heading-m}

The Street Lookup API provides a means of querying the NSG dataset. The endpoints described below return a filtered, formatted subset of the data available within the NSG dataset.
{: .govuk-body}

USRNs which are marked as Closed (street state 4) or Addressing Purposes Only (street state 5) are excluded from results. Street Manager also filters results based on the reinstatement
type code, as described below.
{: .govuk-body}

#### Reinstatement type codes
{: .govuk-heading-s}

Below is a list of Reinstatement type codes currently supported by Street Manager, these codes correspond to the reinstatement_type_codes found in the [NSG specification](https://s3.eu-west-1.amazonaws.com/static.geoplace.co.uk/downloads/NSG-Data-Transfer-Format-DTF-8.1.pdf):
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>0 - This is currently mapped to reinstatement type code 5 for backward compatibility purposes, but this will be removed in a future version of Street Manager so we recommend providing reinstatement type code 5 (see below)</li>
  <li>1 - Carriageway type 1 (10 to 30 MSA)</li>
  <li>2 - Carriageway type 2 (2.5 to 10 MSA)</li>
  <li>3 - Carriageway type 3 (0.5 to 2.5 MSA)</li>
  <li>4 - Carriageway type 4 (up to 0.5 MSA)</li>
  <li>5 - Carriageway type 0 (30 to 125 MSA)</li>
  <li>6 - High Duty Footway</li>
  <li>7 - High Amenity Footway</li>
  <li>8 - Other Footways</li>
  <li>9 - Private Street – No definition information held by Street Authority</li>
  <li>10 - Carriageway type 6 (over 125 MSA)</li>
</ol>

The remaining reinstatement type codes (11 - Street maintained by another Highway Authority and 12 Street outside scope of EToN) are **not** supported by Street Manager.
**USRNs with these codes are not returned by the endpoints below**.
{: .govuk-body}

#### Get streets endpoint (coordinates)
{: .govuk-heading-s}

<code>GET /nsg/streets</code>

Returns NSG data withing 25 meters a coordinate pair point. The information returned can be used to populate a PermitCreateRequest or a WorkCreateRequest. The <code>additional_special_designations_response</code> property values are returned in the format defined by the [NSG specification](https://s3.eu-west-1.amazonaws.com/static.geoplace.co.uk/downloads/NSG-Data-Transfer-Format-DTF-8.1.pdf).
{: .govuk-body}

#### Get streets endpoint (USRN)
{: .govuk-heading-s}

<code>GET /nsg/streets/{usrn}</code>

Returns NSG data based on a USRN. The information returned can be used to populate a PermitCreateRequest or a WorkCreateRequest. The <code>additional_special_designations_response</code> property values are returned in the format defined by the [NSG specification](https://s3.eu-west-1.amazonaws.com/static.geoplace.co.uk/downloads/NSG-Data-Transfer-Format-DTF-8.1.pdf).
{: .govuk-body}

#### Get nsg search (Available in public beta)
{: .govuk-heading-s}

<code>GET /nsg/search</code>

Returns street data based on a query search across the NSG street_descriptor, locality_name, town_name and administrative_area.
{: .govuk-body}

### Party API
{: .govuk-heading-m}

#### Get user
{: .govuk-heading-s}

<code>GET /users/{username}</code>

Returns the UserResponse associated with the base 64 encoded username provided. An optional <code>swaCode</code> query param can be provided by contractors to see the associated workstreams available to them for a particular organisation.
{: .govuk-body}

#### Get workstream
{: .govuk-heading-s}

<code>GET /organisations/{organisationReference}/workstreams/{workstreamId}</code>

Returns the WorkstreamResponse associated with the organisation and workstream provided.
{: .govuk-body}

#### Get workstreams
{: .govuk-heading-s}

<code>GET /organisations/{organisationReference}/workstreams</code>

Returns all workstreams associated with the organisation provided.
{: .govuk-body}

#### Post workstreams
{: .govuk-heading-s}

<code>POST /organisations/{organisationReference}/workstreams</code>

Creates a new workstream associated with the organisation provided.
{: .govuk-body}

#### Put workstream
{: .govuk-heading-s}

<code>PUT /organisations/{organisationReference}/workstreams/{workstreamPrefix}</code>

Updates the workstream details associated with the organisation and workstream provided.
{: .govuk-body}

#### Get organisation
{: .govuk-heading-s}

<code>GET /organisations</code>

Returns a list of OrganisationSummaryResponses.
Optionally these can be filtered using the query params
type: Filter by organisation type. Available values include PROMOTER, HA and CONTRACTOR
query: Filter by organisation name. This will perform a partial search on the organisations name.
{: .govuk-body}

<code>GET /organisations/{organisationReference}</code>

Returns the OrganisationResponse associated with the organisation provided.
{: .govuk-body}

#### Refresh tokens
{: .govuk-heading-s}

<code>POST /refresh</code>

Accepts the user's Refresh JWT token and returns new ID and Access JWT tokens that are valid for 1 hour.
{: .govuk-body}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

#### Logout
{: .govuk-heading-s}

<code>POST /logout</code>

Accepts the user's Access JWT token and invalidates all JWTs associated with a user.
{: .govuk-body}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

#### Forgot Password
{: .govuk-heading-s}

<code>POST /forgot-password</code>

Accepts the user's email address. An email will be sent to this address with a verification code, if a user with the address exists in Street Manager. This will only work if the user has activated their account by using the <code>POST /set-password</code> endpoint.
{: .govuk-body}

#### Reset Forgotten Password
{: .govuk-heading-s}

<code>POST /reset-password</code>

Accepts the user's email address, verification code and the new password. The verification code can be found in the email that was sent following a POST to <code>/forgot-password</code>.
{: .govuk-body}

#### Set password
{: .govuk-heading-s}

<code>POST /set-password</code>

Accepts the user's email address, new password and token (returned from the Work API <code>/authenticate/initial</code> endpoint). This will overwrite the temporary password received by email and activate the user's account. The response will include the same authentication tokens returned from the Work API <code>/authenticate</code> endpoint.
{: .govuk-body}

### Data Export API
{: .govuk-heading-m}

#### Get Data CSV
{: .govuk-heading-s}

<code>GET /work-data</code>

<code>GET /activity-data</code>

Retrieves data of permits or activities across all organisations which have been added, changed, or deleted within the last hour in CSV format. See Data Export API and Open Data in the Technical Overview section for details.
{: .govuk-body}

An optional <code>csvExportDate</code> query parameter can be provided to retrieve a CSV (within the last two weeks) that was available for download at the datetime provided. <code>csvExportDate</code> should be an ISO 8601 Date and time format. If no datetime is provided, the current datetime is used as the default (which will retrieve the latest generated CSV).
{: .govuk-body}

Note: If the datetime now, for example, is <code>2020-01-01T15:00:00Z</code>, and a <code>csvExportDate</code> of <code>2020-01-01T15:00:00Z</code> is provided, the generated CSV at <code>2020-01-01T14:00:00Z</code> will most likely be retrieved.
{: .govuk-body}

This is due to the time it takes for the scheduled job to process and upload the CSV data. So the value of the <code>csvExportDate</code> query parameter should be more specific to ensure the correct CSV is retrieved (e.g., <code>2020-01-01T15:05:00Z</code>).
{: .govuk-body}

In the response, the <code>Content-Disposition</code> HTTP header will contain the name of the CSV file retrieved, which contains the file period information.
{: .govuk-body}

#### Generate Section 81s CSV
{: .govuk-heading-s}

<code>POST /section-81s/csv</code>

Retrieves a CSV list of Section 81s which are associated with the authenticated user's organisation.
{: .govuk-body}

#### Generate Reinstatements CSV
{: .govuk-heading-s}

<code>POST /reinstatements/csv</code>

Retrieves a CSV list of reinstatements which are associated with the authenticated user's organisation.
{: .govuk-body}

#### Generate FPNs CSV
{: .govuk-heading-s}

<code>POST /fixed-penalty-notices/csv</code>

Retrieves a CSV list of FPNs which are associated with the authenticated user's organisation.
{: .govuk-body}

#### Generate Fees CSV
{: .govuk-heading-s}

<code>POST /fees/csv</code>

Retrieves a CSV list of fees which are associated with the authenticated user's organisation.
{: .govuk-body}

#### Generate Permits CSV
{: .govuk-heading-s}

<code>POST /permits/csv</code>

Retrieves a CSV list of permits which are associated with the authenticated user's organisation.
{: .govuk-body}

#### Generate Inspections CSV
{: .govuk-heading-s}

<code>POST /inspections/csv</code>

Retrieves a CSV list of inspections which are associated with the authenticated user's organisation.
{: .govuk-body}

#### Generate Comments CSV
{: .govuk-heading-s}

<code>POST /forward-plans/csv</code>

Retrieves a CSV list of forward plans which are associated with the authenticated user's organisation.
{: .govuk-body}

#### Generate Alterations CSV
{: .govuk-heading-s}

<code>POST /alterations/csv</code>

Retrieves a CSV list of alterations which are associated with the authenticated user's organisation.
{: .govuk-body}

#### Generate Comments CSV
{: .govuk-heading-s}

<code>POST /comments/csv</code>

Retrieves a CSV list of comments which are associated with the authenticated user's organisation.
{: .govuk-body}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
