## Access and Permissions
{: .govuk-heading-l #access-and-permissions}

As discussed in our [authentication and authorisation](#auth) section, all resource endpoints in the API, require a [JWT](#jwt) to be passed in the \'token\' header of the
request. The JWT contains information about the currently authenticated user which is used for more granular level access control as detailed below:
{: .govuk-body}

### Role Based Access
{: .govuk-heading-m}

The following roles can be associated with users:
{: .govuk-body}

<ul class="govuk-list govuk-list--bullet">
  <li>Admin</li>
  <li>Planner</li>
  <li>HighwayAuthority</li>
  <li>Contractor</li>
  <li>API</li>
  <li>UI</li>
  <li>DataExport</li>
  <li>StreetWorksAdmin</li>
</ul>

A user can have multiple roles, but some roles are mutually exclusive in that you may only have one role in the following groups:
{: .govuk-body}

<ul class="govuk-list govuk-list--bullet">
  <li>Planner, HighwayAuthority, Contractor, DataExport</li>
  <li>UI, API</li>
  <li>Admin, API</li>
  <li>Contractor, StreetWorksAdmin</li>
</ul>

So for example it is not possible for Admins to be API users at the same time, or to hold both UI and API access simultaneously. The new Street Works Administrator must be paired with Admin, Planner or Highway Authority and is not available for contractors.
{: .govuk-body}

#### Role Based Access - Contractor
{: .govuk-heading-s}

Many endpoints in our API support the ability to provide a `swaCode` query param. This is intended for `Contractor` users to assume the `Planner` role on behalf of another organisation. When assuming the role of a `Planner` for another organisation there is validation in place to ensure that the contractor's organisation is permitted to work for the target organisation. This is controlled by the target organisation's admin, as they can establish contracting relationships via the front-end application. Please note that currently Street Manager does not support contractors assuming a `HighwayAuthority` role. This is currently in the road map for future release (post April 2020).
{: .govuk-body}

If a valid contract exists for the target organisation then a contractor is bound to the same planner access controls detailed below as regular planners working for that organisation directly.
{: .govuk-body}

#### Role Based Access - Planner
{: .govuk-heading-s}

Endpoints which support the `Planner` role on the API are protected by workstream access. This is admin functionality on the front-end which allows an admin to assign users or contractors working for them the following levels of access for a particular workstream:
{: .govuk-body}

 <ul class="govuk-list govuk-list--bullet">
  <li>full-write: User is permitted to perform write and read actions on work records and related resources associated with that workstream.</li>
  <li>read-only: User is permitted to perform read-only actions on work records and related resources associated with that workstream.</li>
  <li>no-access: User is not permitted to perform write or read actions on work records and related resources associated with that workstream</li>
</ul>

The workstream restrictions set by administrators are applied to both UI and API user accounts. `no-access` users are still permitted to use the GeoJSON & Street Lookup API as well as view specific details of entities returned from those API responses, for example permit details can still be accessed via the work-api but the wider work-record details cannot.
{: .govuk-body}

The Reporting and Data Export APIs will automatically filter data in endpoint responses based upon the users allocated workstreams.
{: .govuk-body}

#### Role Based Access - HighwayAuthority
{: .govuk-heading-s}

`HighwayAuthority` users are not restricted to work records based upon workstreams or contract associations. Instead they are only allowed to perform write actions on resources associated with their own organisation. For example they can only assess permits for work records which have been assigned to their own organisation. `HighwayAuthority` users can instead filter resources using Geographical Areas. For more information see the [resource guide](#geographical-areas)
{: .govuk-body}

#### Role Based Access - StreetWorksAdmin
{: .govuk-heading-s}

The `StreetWorksAdmin` role cannot be used by itself, it must be paired with either Admin, Planner or Highway Authority. This role is not available to contractors. Users who are have been granted the `StreetWorksAdmin` role are able to access additional sensitive information, for example financial information relating to Section 74s.
{: .govuk-body}

The `StreetWorksAdmin` role is not the same as the `Admin` role and does not provide access to functionality that is currently exclusive to the `Admin` role.
{: .govuk-body}

#### Default Workstream
{: .govuk-heading-s }

A default workstream with the prefix "000" exists for every organisation. This is intended as a holding-place for work records without permits, for example historic works and section 81s are created against the default workstream for the associated promoter's organisation. When the first permit is created for a work record the promoter will be able to provide the correct workstream for which it should be associated. The default workstream should NOT be provided explicitly in requests when creating permits, this will result in a bad request error. Instead, a workstream for which the user has full-write access to should be provided.
{: .govuk-body}