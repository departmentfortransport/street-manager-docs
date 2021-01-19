---
layout: default
title: API Versions and Changes
---
# API Versions and Changes
{: .govuk-heading-xl #versions}

This section lists any significant changes made to this document (and by extension, the API interfaces themselves) introduced by each recent and upcoming future release.
{: .govuk-body}

Version 1.25.9 - Stable (21/01/2021):
{: .govuk-heading-s}

Updated Work API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>
    SM-3570: Fixed a bug with <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/assessment</code> endpoint,  <code>revoke_reason</code> now included in work history entry when a permit is revoked.
  </li>
</ol>

Version 1.25.8 - Stable (10/12/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>
    SM-6533: Added the following property to <code>Section81Response</code>:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>files</code> (optional)</li>
    </ol>
  </li>
</ol>

Version 1.25.7 - Stable (26/11/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>
    SM-6213: New endpoint <code>PUT ​/works​/{workReferenceNumber}​/section-81s​/{section81ReferenceNumber}​/reassign-section-81</code> added to V2 Work API uses a new Audit Event. Any history items of this type will return <code>upcoming_event</code> as the <code>event</code>.
  </li>
  <li>The following business rule change introduced on 12/11/2020 is included:
    <ol class="govuk-list govuk-list--bullet">
      <li>SM-6263: The <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations</code> endpoint has been updated to prevent alterations being raised on Immediate permits that have been refused.</li>
    </ol>
  </li>
  <li>
    SM-6568: Updated logic used by the <code>POST ​​/works​/{workReferenceNumber}​/permit​/{permitReferenceNumber}​/alterations</code> endpoint to ensure a permit will not be update to a PAA if the work has started.
  </li>
</ol>

Version 1.25.6 - Stable (15/10/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Removed the <code>is_progressable_paa</code> field from the <code>PermitResponse</code> object. This field was never intended to be returned and was never populated in the response object.</li>
  <li>Updated the <code>POST /activity</code> and <code>PUT /activity​/{activityReferenceNumber}</code> endpoints to accept <code>start_date</code> and <code>start_time</code> values in the past.</li>
</ol>

Version 1.25.5 - Stable (17/09/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>New optional <code>hs2_additional_usrns</code> property added to <code>WorkCreateRequest</code>, <code>PermitCreateRequest</code> and <code>PermitResponse</code> objects. This allows HS2 users to provide additional USRNs for permits. The property will be ignored for non-HS2 users.</li>
  <li>Updated the login endpoint, <code>POST /authenticate</code>, to lock out user accounts that have 5 failed login attempts within a 5 minute period. A <code>423</code> status code will be returned when locked accounts attempt to authenticate. Accounts are automatically unlocked after 5 minutes.</li>
</ol>

Version 1.25.4 - Stable (03/09/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Updated <code>GET permits/category</code> endpoint to return minor/standard <code>work_type</code> if the work only contains a forward-plan and the work does not have major works duration. Works with only a forward-plan and major timings will continue to return a <code>work_type</code> of <code>PAA</code></li>
  <li>Updated <code>POST /works/{workReferenceNumber}/permits</code> to use the updated category result described above. Forward plans will now progress directly to Permits when they do not have major timing duration.</li>
  <li>Query optimisations</li>
</ol>

Version 1.25.3 - Stable (20/08/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Updated the following endpoint to allow for submmission of HS2 Forward plans:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>POST /forward-plans/</code></li>
    </ol>
  </li>
  <li>BREAKING CHANGE: Added the following mandatory (only for HS2 Promoters) properties to the <code>ForwardPlanCreateRequest</code> interface for the <code>POST /forward-plans/</code> endpoint. These were also added as optional properties to the <code>ForwardPlanResponse</code> interface.
    <ol class="govuk-list govuk-list--bullet">
      <li><code>hs2_in_act_limits</code></li>
      <li><code>hs2_consultation_requested_response_date</code></li>
      <li><code>hs2_highway_exemption</code></li>
      <li><code>hs2_works_type</code></li>
    </ol>
  </li>
  <li>Updated <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations</code> endpoint to allow HS2 fields to be altered when creating an alteration.</li>
  <li>Added the following optional properties (only for HS2 Promoters) to the <code>PermitAlterationCreateRequest</code> interface for the <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations</code> endpoint.
    <ol class="govuk-list govuk-list--bullet">
      <li><code>hs2_consultation_requested_response_date</code></li>
      <li><code>hs2_highway_emails</code></li>
    </ol>
  </li>
</ol>

Version 1.25.2 - Stable (23/07/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Reasonable period end date can now be set as a date in the past when granting an immediate permit with a duration challenge.</li>
</ol>

Version 1.25.1 - Stable (09/07/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>PermitASD model has been updated to make <code>special_desig_description</code> optional.</li>
</ol>

Updated Street Lookup API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>AdditionalSpecialDesignationsResponse model has been updated to make <code>special_desig_description</code> optional.</li>
</ol>

Version 1.25 (18/06/2020):
{: .govuk-heading-m}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>New optional <code>is_covid_19_response</code> property added to <code>WorkCreateRequest</code>, <code>PermitCreateRequest</code> and <code>PermitResponse</code> objects. Allows a permit to be marked as a response to Covid-19. If this property is not provided in the request it will default to false.</li>
  <li>
    Added the following comment topics to the <code>CommentTopicEnum</code> used in the <code>POST /works/{workReferenceNumber}/comments</code> endpoint:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>FORWARD_PLAN</code></li>
      <li><code>CHANGE_REQUEST</code></li>
      <li><code>IMPOSED_VARIATION</code></li>
      <li><code>DURATION_CHALLENGE</code></li>
      <li><code>SECTION_81</code></li>
    </ol>

    These values can also now be returned in the <code>topic</code> field of the <code>WorkHistoryResponse</code>.
  </li>
  <li>Implemented new optional <code>is_internal</code> property added to <code>POST /works/{workReferenceNumber}/comments</code> endpoint allowing a comment to be marked as internal.</li>
  <li>Implemented new endpoint <code>PUT /works/{workReferenceNumber}/comments/{commentReferenceNumber}/read</code> available to mark comments as read</li>
</ol>

Updated Reporting API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>
    Added the following comment topics to the <code>CommentTopicEnum</code> used in the <code>GET /comments</code> endpoint:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>FORWARD_PLAN</code></li>
      <li><code>CHANGE_REQUEST</code></li>
      <li><code>IMPOSED_VARIATION</code></li>
      <li><code>DURATION_CHALLENGE</code></li>
      <li><code>SECTION_81</code></li>
    </ol>
  </li>
  <li>Response from <code>GET /comments</code> endpoint updated to include the following properties:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>comment_reference_number</code></li>
      <li><code>is_internal</code> (boolean)</li>
      <li><code>is_read</code> (boolean)</li>
      <li><code>read_by</code> (optional string - should be the user's email address)</li>
      <li><code>read_on_date</code> (optional date)</li>
    </ol>
  </li>
</ol>

Updated Data Export API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>
    Added the following comment topics to the <code>CommentTopicEnum</code> used in the <code>POST /comments/csv</code> endpoint:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>FORWARD_PLAN</code></li>
      <li><code>CHANGE_REQUEST</code></li>
      <li><code>IMPOSED_VARIATION</code></li>
      <li><code>DURATION_CHALLENGE</code></li>
      <li><code>SECTION_81</code></li>
    </ol>
  </li>
  <li>
    The hourly generated CSV files exposed through the <code>GET /work-data</code> and <code>GET /activity-data</code> endpoints now use the ISO 8601 format (rather than localised date and time strings) for any datetime values. This is consistent with the datetimes returned in the Works API responses, and removes ambiguity regarding timezones.
  </li>
</ol>

Version 1.24 (28/05/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>PermitASD model has been updated to make <code>special_desig_description</code> optional. This is currently a documentation change only. This functionality will be implemented in a future release.
  </li>
</ol>

Updated Street Lookup API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>AdditionalSpecialDesignationsResponse model has been updated to make <code>special_desig_description</code> optional. This is currently a documentation change only. This functionality will be implemented in a future release.
  </li>
</ol>

The following changes will be made to the Works API in a future release:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>New optional <code>is_covid_19_response</code> property will be added to <code>WorkCreateRequest</code>, <code>PermitCreateRequest</code> and <code>PermitResponse</code> objects. This will allow a permit to be marked as a response to Covid-19. If this property is not provided in the request it will default to false.</li>
</ol>

Version 1.23 (14/05/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>ActivityType request model has been updated to include the following additional values:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>new_service_connection</code></li>
      <li><code>works_for_road_purposes</code></li>
      <li><code>optional_permit_no_fee</code></li>
    </ol>
  </li>
  <li>CommentTopic model has been updated to include the following additional values (please note these will not be useable until a future release):
    <ol class="govuk-list govuk-list--bullet">
      <li><code>FORWARD_PLAN</code></li>
      <li><code>CHANGE_REQUEST</code></li>
      <li><code>IMPOSED_VARIATION</code></li>
      <li><code>DURATION_CHALLENGE</code></li>
      <li><code>SECTION_81</code></li>
    </ol>
  </li>
  <li>
    The <code>InspectionResponse</code> and <code>InspectionSummaryResponse</code> response models have been updated to make the <code>inspection_category</code> property optional.
  </li>
  <li>
    The definitions for <code>ASDCode</code> and <code>ASDPeriodicityCode</code> models have been updated to clarify that the enum values should be submitted as numbers instead of strings. <strong>Note that, in a future release, we will be adding validation against providing strings.</strong> The API will continue to accept both for the time being, but we strongly encourage submitting these values as numbers instead of strings if you aren't already doing so.
  </li>
  <li>
    <code>PermitASD</code> interface, which is used in a number of work and permit request and response models, will be updated to include new optional date properties <code>special_desig_start_date</code> and <code>special_desig_end_date</code>. These fields will be stored against the work and returned on the appropriate responses where available. Affected models include:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>ForwardPlanCreateRequest</code></li>
      <li><code>ForwardPlanResponse</code></li>
      <li><code>ForwardPlanUpdateRequest</code></li>
      <li><code>PermitRequest</code></li>
      <li><code>PermitResponse</code></li>
      <li><code>WorkCreateRequest</code></li>
    </ol>
    While these fields are optional and requests will succeed without providing them, the Work API does compare the ASDs submitted in the request with ASDs returned by the Street Lookup API for the given USRN. This is to determine whether an ASD was provided. In order for the ASD to be correctly flagged as provided, where these properties were returned by the street lookup API, these fields will need to match the Lookup API response.
  </li>
</ol>

Updated Reporting API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li><code>CommentReportingResponse</code> updated to include the string property <code>comment_reference_number</code>.</li>
  <li>CommentTopic model has been updated to include the following additional values (please note these will not be useable until a future release):
    <ol class="govuk-list govuk-list--bullet">
      <li><code>FORWARD_PLAN</code></li>
      <li><code>CHANGE_REQUEST</code></li>
      <li><code>IMPOSED_VARIATION</code></li>
      <li><code>DURATION_CHALLENGE</code></li>
      <li><code>SECTION_81</code></li>
    </ol>
  </li>
  <li>
    The <code>InspectionSummaryResponse</code> response model has been updated to make the <code>inspection_category</code> property optional.
  </li>
</ol>

Updated Street Lookup API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li><code>AdditionalSpecialDesignationsResponse</code> updated to include new optional date properties <code>special_desig_start_date</code> and <code>special_desig_end_date</code>. This is a documentation change only, the api will be updated to return these values in a future release.</li>
</ol>

Version 1.22 (30/04/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>ActivityType request model has been updated to include additional values.
    <code>new_service_connection, works_for_road_purposes, optional_permit_no_fee</code>
    <br>
    This is a documentation update only.
    The application will begin to accept these values in an upcoming release.
  </li>
  <li>AuditEvent response model has been updated to include additional values.
    <code>sample_inspection_target_created, sample_inspection_target_updated, sample_inspection_created,
      sample_inspection_completed, sample_inspection_removed, sample_inspection_expired, internal_comment_submitted, comment_read
    </code>
    <br>
    This is a documentation update only.
    The application will begin to return these values in an upcoming release.
  </li>
  <li><code>road_category: number</code> documentation on create request models has been updated from 0-4 to 0-10 in line with the values accepted by the application.</li>
  <li>Specific authentication error message when attempting to authenticate with a user who has had their account disabled using <code>POST /authenticate</code> endpoint, which was added in V1.19, has been removed. Users will see a generic error message.</li>
  <li>Fixed an issue where calendar day and working day durations would incorrectly be adding an additional day when proposed_end_time was not provided on create work requests</li>
</ol>

Updated Reporting API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>AuditEvent response model has been updated to include additional values.
    <code>sample_inspection_target_created, sample_inspection_target_updated, sample_inspection_created,
      sample_inspection_completed, sample_inspection_removed, sample_inspection_expired, internal_comment_submitted, comment_read
    </code>
    <br>
    This is a documentation update only.
    The application will begin to return these values in an upcoming release.
  </li>
  <li>The <code>GET /comments</code> endpoint has been updated with the following optional properties for filtering:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>date_created_from</code></li>
      <li><code>date_created_to</code></li>
      <li><code>topic</code></li>
    </ol>
  </li>
</ol>

Updated Street Lookup API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>AdditionalSpecialDesignationsResponse updated to include the optional <code>whole_road: boolean</code> and <code>asd_coordinate_geometry: GeoJSONGeometry</code> properties.</li>
</ol>

Updated Party API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Specific authentication error message when attempting to reset password with a user who has not successfully set password after account creation will now return 401 using <code>POST /forgot-password</code> endpoint, which was added in V1.19, has been removed.</li>
</ol>

Updated Data Export API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>The <code>POST ​/comments​/csv</code> endpoint has been updated with the following optional properties for filtering:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>date_created_from</code></li>
      <li><code>date_created_to</code></li>
      <li><code>topic</code></li>
    </ol>
  </li>
</ol>

The following changes will be made to the Works API in a future release:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>New optional <code>is_internal</code> property will be added to <code>POST /works/{workReferenceNumber}/comments</code> endpoint allowing a comment to be marked as internal.</li>
  <li>New endpoint <code>PUT /works/{workReferenceNumber}/comments/{commentReferenceNumber}/read</code> will be available to mark comments as read</li>
</ol>

The following changes will be made to the Reporting API in a future release:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Response from <code>GET /comments</code> endpoint updated to include the following properties:</li>
  <ol class="govuk-list govuk-list--bullet">
    <li><code>comment_reference_number</code></li>
    <li><code>is_internal</code> (boolean)</li>
    <li><code>is_read</code> (boolean)</li>
    <li><code>read_by</code> (optional string - should be the user's email address)</li>
    <li><code>read_on_date</code> (optional date)</li>
  </ol>
</ol>

Version 1.21 (16/04/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Implemented the new <code>PUT /geographical-areas/{geographicalAreaReferenceNumber}</code> endpoint allowing a geographical area to be updated.</li>
  <li>New optional <code>permit_reference_number</code> property added to <code>POST /works/{workReferenceNumber}/fixed-penalty-notices</code> endpoint allowing a fixed penalty notice to be associated with a permit.</li>
  <li>Delegated user properties <code>internal_user_identifier</code> and <code>internal_user_name</code> are being stored against audit events generated by <code>POST</code> and <code>PUT</code> endpoints. These are being returned as part of <code>GET ​/works​/{workReferenceNumber}​/history</code> response.</li>
</ol>

Updated Data Export API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>New fields added to the Fees Report export: Is TTRO required?, Traffic management type, Proposed start date, Proposed end date, Actual start date, Actual end date, Change request reference
  </li>
</ol>

Version 1.20 (02/04/2020):
{: .govuk-heading-s}

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>The following endpoint will be available on the Works API in a future release:
    <ol class="govuk-list govuk-list--bullet">
      <li>Update a geographical area <code>PUT /geographical-areas/{geographicalAreaReferenceNumber}</code> endpoint</li>
    </ol>
  </li>
  <li>The following audit event types have been added:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>update_geographical_area</code></li>
      <li><code>upcoming_event</code> (placeholder for a future audit event)</li>
    </ol>
  </li>
</ol>

Version 1.19 (26/03/2020):
{: .govuk-heading-s}

Updated Party API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Updated authentication error message when attempting to reset password with a user who has not successfully set password after account creation will now return 401 using <code>POST /forgot-password</code> endpoint</li>
</ol>

Updated Street Lookup API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Fixed defect on the <code>GET /nsg/search</code> endpoint to allow users to input multiple spaces and special characters in the <code>query</code> param</li>
</ol>

Updated Works API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Fixed defect on the <code>POST
  /works​/{workReferenceNumber}​/permits​/{permitReferenceNumber}​/alterations</code> endpoint to allow Highway Authorities to impose changes on a permit that contains files and/or ASDs</li>
  <li>Updated authentication error message when attempting to authenticate with a user who has had their account disabled using <code>POST /authenticate</code> endpoint</li>
  <li>Updated validation on <code>POST /works/{workReferenceNumber}/inspections</code> and <code>POST /historic-works/inspections</code> endpoints. An empty array value (<code>[]</code>) for the <code>failure_reason_details</code> property for failed inspections will result in a bad request error.</li>
  <li>Validation has been added to the proposed_start_time field in the <code>POST /work</code> request to prevent immediate works being created without a time being specified.</li>
  <li>The work_end_date and work_end_time are now being correectly updated where the proposed_end_date/time slide as a result of validity period.</li>
  <li>Validity period end date calculation now starting from the next working day if the proposed start date is on a weekend or bank holiday.</li>
</ol>

Updated Reporting API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>The <code>GET /inspections</code> endpoint now returns a maximum <code>total_rows</code> value of 501, similar to other Reporting API endpoints</li>
  <li>The <code>GET /*/csv</code> endpoints which were deprecated in V1.12 have been completely removed. All CSV exporting is available via the Data Export API. This applies to CSV exports for Permits, Fees, FPNs, Inspections and Forward plans.</li>
</ol>

Updated Data Export API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>The <code>POST /*/csv</code> endpoints will now generate CSVs that will include a new <code>town</code> column</li>
  <li>The <code>POST /permits/csv</code> endpoint will now generate a CSV that will include the following new columns: <code>actual_start_date</code>, <code>actual_end_date</code>, <code>revoke_reason</code> and <code>reasonable_period_end_date</code></li>
  <li>The <code>POST /fees/csv</code> endpoint will now generate a CSV that will include a new <code>Area</code> column</li>
  <li>Updated the hourly scheduled job which returns data as part of the <code>GET /work-data</code> endpoint to include the following event types when checking for changes:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>alteration_deemed</code></li>
      <li><code>permit_hs2_acknowledged</code></li>
    </ol>
  </li>
</ol>

Version 1.18 (19/03/2020):
{: .govuk-heading-s}

Town will now be stored in Street Manager:
{: .govuk-body}

In the Works API, the following endpoints have been updated to include the optional property <code>town</code> in its request body (if not provided, it will be inferred from NSG data):
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>POST /activity</code></li>
  <li><code>POST /forward-plans</code></li>
  <li><code>POST /historic-works/fixed-penalty-notices</code></li>
  <li><code>POST /historic-works/inspections</code></li>
  <li><code>POST /non-notifiable-works/sites</code></li>
  <li><code>POST /section-81-works/section-81s</code></li>
  <li><code>POST /works</code></li>
</ol>

In the Works API, the following endpoints now include <code>town</code> in their respective responses:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>GET /works/{workReferenceNumber}</code></li>
  <li><code>GET /works/{workReferenceNumber}/forward-plans/{forwardPlanReferenceNumber}</code></li>
  <li><code>GET /works/{workReferenceNumber}/permits/{permitReferenceNumber}</code></li>
  <li><code>GET /works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations/{permitAlterationReferenceNumber}</code></li>
  <li><code>GET /works/{workReferenceNumber}/section-81s/{section81ReferenceNumber}</code></li>
</ol>

In the Reporting API, the following endpoints now include <code>town</code> in their respective responses:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>GET /alterations</code></li>
  <li><code>GET /forward-plans</code></li>
  <li><code>GET /inspections</code></li>
  <li><code>GET /permits</code></li>
  <li><code>GET /reinstatements</code></li>
  <li><code>GET /section-81s</code></li>
</ol>

Updated Work API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Fixed a defect with the <code>DELETE /files/{fileId}</code> endpoint so it now correctly returns a precondition failed error if the file has already been associated with a work</li>
  <li>Fixed a defect with the <code>GET /works/{workReferenceNumber}/history</code> endpoint so it now correctly returns <code>inspection_agreed_site_compliance</code> AuditEvent enum where applicable instead of the event not being returned</li>
  <li>Users can now update the <code>works_coordinates</code> property when submitting a Permit Alteration to the <code>/works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations</code> endpoint.</li>
  <li>Updated <code>width</code>, <code>depth</code>, <code>length</code>, <code>inspection_units</code> and <code>number_of_holes</code> request properties to now allow a value of 0. This will impact the following endpoints:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>POST /non-notifiable-works/sites</code></li>
      <li><code>POST /works/{workReferenceNumber}/sites</code></li>
      <li><code>POST /works/{workReferenceNumber}/sites/{siteNumber}/reinstatements</code></li>
      <li><code>PUT /works/{workReferenceNumber}/inspection-units</code></li>
    </ol>
  </li>

  <li>The following audit event types have been added, these are used when creating a work:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>planned_works_record_created</code></li>
      <li><code>in_progress_works_record_created</code></li>
      <li><code>historic_works_record_created</code></li>
      <li><code>non_notifiable_works_record_created</code></li>
      <li><code>section_81_works_record_created</code></li>
      <li><code>unattributable_works_record_created</code></li>
    </ol>
  </li>

  <li>Updated the <code>GET /work-data</code> endpoint so that it is now accessible to users with the following roles:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>Planner</code></li>
      <li><code>Contractor</code></li>
      <li><code>HighwayAuthority</code></li>
      <li><code>Admin</code></li>
      <li><code>DataExport</code></li>
    </ol>
  </li>
</ol>

Updated Street Lookup API with the following changes:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Property <code>road_category</code> marked as deprecated and will be removed from the response of the following endpoints in a future release: <code>GET /nsg/streets</code> and
  <code>GET /nsg/streets/{usrn}</code>.</li>
  <li>Property <code>reinstatement_types</code> added to the response of the following endpoints: <code>GET /nsg/streets</code> and <code>GET /nsg/streets/{usrn}</code>. This property contains a
  collection of reinstatement type codes and corresponding location text. For more information on the <code>reinstatement_type_code</code> property see the `Reinstatement type codes` section above.</li>
  <li>The streets returned in the response of the following endpoints now include streets with reinstatement type code value of up to 10 and where the street state does not equal 4: <code>GET /nsg/streets</code> and <code>GET /nsg/streets/{usrn}</code>.</li>
</ol>

Updated Work API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>All existing create endpoints which currently accept the property <code>road_category</code> have been updated to now accept a value of up to 10.</li>
</ol>

Version 1.17 (05/03/2020):
{: .govuk-heading-s}

Workstream restrictions will be taking effect on the Work API. See the <a class="govuk-link" href="#access-and-permissions">access and permissions</a> section for further details.
{: .govuk-body}

Updated Work API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Updated the `object_reference` of audits relating to the <code>event_type</code> of reinstatement_submitted. This will now return the site number that can be used as the resource identifier in <code>GET /works/{workReferenceNumber}/sites/{siteNumber}</code>. This change was applied to the <code>GET /works/{workReferenceNumber}</code> and <code>GET /works/{workReferenceNumber}/history</code> endpoints.</li>
  <li>Planned permits no longer need to be granted by HA before works can be started</li>
  <li>Planned permits can be assessed at any stage, provided they haven't been assessed or cancelled</li>
  <li>Updated the <code>PUT /works/{workReferenceNumber}/permits/{permitReferenceNumber}/assessment</code> endpoint to now accept the additional values <code>reasonable_period_end_date</code> and <code>is_duration_challenged</code></li>
  <li>The <code>PermitResponse</code> has been updated to return <code>is_duration_challenged</code></li>
</ol>

Updated Party API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Updated the <code>GET /users/{email}</code> endpoint to accept <code>swaCode</code> query parameter. This can be used by contractors to see the workstreams they have available for a particular contract</li>
</ol>

The Data Export API has been updated with the following changes:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>POST /permits/csv</code> has been updated with the following new properties:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>geographical_area_reference_number</code></li>
      <li><code>is_duration_challenged</code></li>
    </ol>
  </li>
  <li><code>POST /permits/csv</code>has been updated with the new <code>geographical_area_reference_number</code> property</li>
  <li><code>POST /alterations/csv</code>has been updated with the new <code>geographical_area_reference_number</code> property</li>
  <li><code>POST /forward-plans/csv</code>has been updated with the new <code>geographical_area_reference_number</code> property</li>
  <li><code>POST /reinstatements/csv</code>has been updated with the new <code>geographical_area_reference_number</code> property</li>
  <li><code>POST /section-81s/csv</code>has been updated with the new <code>geographical_area_reference_number</code> property</li>
  <li><code>POST /inspections/csv</code>has been updated with the new <code>geographical_area_reference_number</code> property</li>
  <li><code>POST /fixed-penalty-notices/csv</code>has been updated with the new <code>geographical_area_reference_number</code> property</li>
  <li>Updated the <code>GET /work-data</code> endpoint to allow previously generated CSVs to be retrieved.</li>
  <li>Updated the <code>GET /work-data</code> endpoint to include the following additional fields in generated CSVs:
    <ol class="govuk-list govuk-list--bullet">
      <li><code>Highway authority swa code</code></li>
      <li><code>Works category reference</code></li>
      <li><code>Traffic management type reference</code></li>
      <li><code>Assessment status reference</code></li>
      <li><code>Permit status reference</code></li>
      <li><code>Work status reference</code></li>
    </ol>
  </li>
  <li>New <code>GET /activity-data</code> endpoint added to retrieve data of activities across all organisations which have been added, changed, or deleted within the last hour in CSV format.</li>
  <li>New <code>POST /comments/csv</code> endpoint added to trigger generation of Comment CSV file</li>
</ol>

Reporting API has been updated with the following changes:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>GET works/updates</code> endpoint has been updated to return the <code>event_type</code> and <code>object_type</code> properties. Returns updates for new events, for more information, see
  audit events in the documentation 'History' section.</li>
  <li><code>GET /alterations</code> endpoint now accepts the following <code>sort_column</code> values: <code>date_created</code>, <code>proposed_start_date</code>, <code>proposed_end_date</code> and <code>status_changed_date</code></li>
  <li><code>GET permits/csv</code> endpoint now accepts the additional value <code>is_duration_challenged</code></li>
  <li>The following Reporting API endpoints have been updated with a new <code>geographical_area_reference_number</code> property that enables HA users to filter their lists based on one or more Geographical Areas within their organisation:
  <ol class="govuk-list govuk-list--bullet">
    <li><code>GET /permits</code></li>
    <li><code>GET /alterations</code></li>
    <li><code>GET /forward-plans</code></li>
    <li><code>GET /reinstatements</code></li>
    <li><code>GET /section-81s</code></li>
    <li><code>GET /inspections</code></li>
    <li><code>GET /comments</code></li>
    <li><code>GET /fixed-penalty-notices</code></li>
  </ol>
  </li>
</ol>

Version 1.16 (20/02/2020):
{: .govuk-heading-s}

Work API has been updated with the following changes:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>The <code>topic</code> property on <code>WorkHistoryResponse</code> has been updated with new values specific to permit alterations and permit applications. The content of the <code>details</code> property has also been updated for muliple audit events. This will affect the <code>GET /works/{workReferenceNumber}</code> and <code>GET /works/{workReferenceNumber}/history</code> endpoints.</li>
  <li>The <code>AlterationType</code> enum has been updated to include <code>modified_permit</code> as a valid type</li>
</ol>

Reporting API has been updated with the following changes:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>GET /permits</code> and <code>GET /forward-plans</code> endpoints have been updated to include explicit date range filtering for start and end dates</li>
  <li><code>GET /permits</code> endpoint has been updated to accept the following optional boolean parameters: <code>hs2_works_only</code>, <code>consultation_works_only</code>, <code>consent_works_only</code>, <code>unacknowledged_by_ha_only</code></li>
  <li><code>GET /csv-exports</code> has been updated to only return the CSV Exports that were generated by the requester</li>
  <li>The <code>AlterationType</code> enum has been updated to include <code>modified_permit</code> as a valid type</li>
</ol>

Data Export API has been updated with the following changes:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>POST /permits/csv</code> and <code>POST /forward-plans/csv</code> endpoints have been updated to include explicit date range filtering for start and end dates</li>
  <li><code>POST /permits/csv</code> endpoint has been updated to accept the following optional boolean parameters: <code>hs2_works_only</code>, <code>consultation_works_only</code>, <code>consent_works_only</code>, <code>unacknowledged_by_ha_only</code></li>
  <li>The <code>AlterationType</code> enum has been updated to include <code>modified_permit</code> as a valid type</li>
</ol>

Version 1.15 (06/02/2020):
{: .govuk-heading-s}

Work API has been updated with the following changes:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>PUT /works/{workReferenceNumber}/permits/{permitReferenceNumber}/hs2_acknowledgement</code> endpoint has been added to acknowledge HS2 applications</li>
  <li>The <code>PermitResponse</code> has been updated to return the <code>hs2_acknowledged</code> property</li>
  <li>The <code>PermitResponse</code> has been updated to return the <code>hs2_acknowledged_date_time</code> property</li>
  <li><code>POST /geographical-areas</code> endpoint has been added to upload Geographical Areas</li>
</ol>

Party API has been updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li><code>GET /users/{username}</code> endpoint has been added to return user details</li>
</ol>

Reporting API has been updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li><code>GET /csv-exports</code> endpoint has been added return a list of CSV exports which are associated with the authenticated user's organisation</li>
</ol>

Version 1.14 (23/01/2020):
{: .govuk-heading-s}

Work API has been updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>The <code>PermitRequest</code> has been updated to include the <code>additional_contact</code>, <code>additional_contact_number</code>, and <code>additional_contact_email</code> properties</li>
  <li>The <code>PermitResponse</code> has been updated to return the <code>additional_contact</code>, <code>additional_contact_number</code>, and <code>additional_contact_email</code> properties</li>
  <li>The <code>WorkCreateRequest</code> has been updated to include the <code>additional_contact</code>, <code>additional_contact_number</code>, and <code>additional_contact_email</code> properties</li>
</ol>

Party API has been updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Added <code>PUT /users/{email} </code> endpoint to allow updating of users names </li>
</ol>

Version 1.13 (08/01/2020):
{: .govuk-heading-s}

Work API has been updated with the following changes:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>POST /works/{workReferenceNumber}/comments</code> updated to remove comment_id</li>
  <li>The <code>WorkType</code> enum has been updated to include <code>hs2_highway_works</code> as a valid type</li>
  <li>The <code>WorkCategory</code> enum has been updated to include <code>hs2_highwaycode</code> as a valid category</li>
  <li>The Permit and Work endpoints have been extended to include HS2 specific fields</li>
  <li>The <code>WorkResponse</code> has been updated to no longer return the <code>historical_permit_reference</code></li>
  <li>The <code>WorkResponse</code> has been updated to return the <code>description_of_work</code> property</li>
  <li>The <code>WorkResponse</code> has been updated to return the <code>description_of_work</code> property</li>
  <li>The <code>POST /works/{workReferenceNumber}/sites/{siteNumber}/reinstatements</code> endpoint has been updated to remove the id of the created reinstatement</li>
  <li>The <code>POST /works/{workReferenceNumber}/comments</code> endpoint has been updated to remove the id of the created comment</li>
  <li>The <code>GET /works/{workReferenceNumber}/section-81s/{section81ReferenceNumber}</code> endpoint has been updated to include <code>status_changed_date</code></li>
  <li>The <code>GET /permits/category</code> endpoint has been extended to accept a <code>hs2_highway_works</code> parameter</li>
</ol>

Reporting API has been updated with the following changes:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
    <li>Added <code>GET /section-81s</code> endpoint to allow a list of Section 81s to be retrieved</li>
</ol>

Party API has be updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
	<li>New <code>GET /organisations</code> endpoint to allow retrieval of organisations</li>
</ol>

Data Export API has be updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
	<li>New <code>POST fixed-penalty-notices/csv</code> endpoint to enable async CSV generation</li>
</ol>

Version 1.12 (19/12/2019):
{: .govuk-heading-s}

This version of the specification is the V1 Baseline version that contains all legally required API functions.
{: .govuk-body}

The GET /CSV endpoints have been removed on the Reporting endpoint and will be available via the Data Export API in a future release. This applies to CSV exports for Permits, Fees, FPNs, Inspections and Forward plans.
{: .govuk-body}

Work API will be updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
	<li>New <code>PUT /works/{workReferenceNumber}/section-81s/{section81ReferenceNumber}/status</code> endpoint to allow updates to the status of a section 81</li>
</ol>

Reporting API will be updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
	<li>New <code>GET /section-81s</code> endpoint to retrieve all section 81s associated with the authenticated user's organisation</li>
</ol>

Party API will be updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
	<li>New <code>GET /organisations</code> endpoint to allow retrieval of organisations</li>
</ol>

In previous verions of the documentation <code>GET /works/{workReferenceNumber}/section-81s/{section81ReferenceNumber}</code> was listed as being released on the Party API. This was incorrect. This endpoint is available on the Works API and the documentation has been corrected.
{: .govuk-body}

Version 1.11 (12/12/2019):
{: .govuk-heading-s #upcoming-changes}

All APIs will be updated with the following changes:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>BREAKING CHANGE: <code>site_id</code> and <code>permit_id</code> response fields have removed. These have been replaced with <code>site_number</code> and <code>permit_reference_number</code> respectively.</li>
</ol>

The available values for the <code>permit_status</code> field will be changing across the Works API, Reporting API and GeoJSON API. The new <code>permit_status</code> values are:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>submitted</code></li>
  <li><code>granted</code></li>
  <li><code>refused</code></li>
  <li><code>permit_modification_request</code></li>
  <li><code>revoked</code></li>
  <li><code>closed</code></li>
  <li><code>progressed</code></li>
  <li><code>cancelled</code></li>
</ol>

The <code>forward_plan_status</code> available values will also be updated to replace <code>closed</code> with <code>progressed</code>. The new list of <code>forward_plan_status</code> values are:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>raised</code></li>
  <li><code>progressed</code></li>
  <li><code>cancelled</code></li>
</ol>

Work API will be updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>BREAKING CHANGE: <code>site_id</code> and <code>permit_id</code> response fields have removed. These have been replaced with <code>site_number</code> and <code>permit_reference_number</code> respectively. The biggest impact of this change to when fetching the details of a site, the existing <code>GET /works/{workReferenceNumber}/sites/{siteId}</code> endpoint has been replaced with <code>GET /works/{workReferenceNumber}/sites/{siteNumber}</code></li>
  <li>Existing <code>POST /works/{workReferenceNumber}/permits</code> endpoint updated to allow a permit to be created on a historical and non-notifiable work, optional <code>workstream_prefix</code> field added to request to allow workstream to be set on submission of first permit on a historical and non-notifiable work</li>
	<li>Optional failure_reason_details.site_name added to <code>GET /works/{workReferenceNumber}/inspections/{inspectionReferenceNumber} response</code></li>
	<li>New <code>POST /historic-works/inspections</code> endpoint to create an inspection on a historic work</li>
	<li>New <code>POST /non-notifiable-works/sites</code> endpoint to create a reinstatement on a non-notifiable work</li>
	<li>Existing <code>POST /works</code>, <code>POST /permits</code> and <code>POST /permit-alterations</code> requests updated to make <code>special_desig_location_text</code> field optional</li>
  <li>A new endpoint <code>GET /works/{workReferenceNumber}/section-81s/{section81ReferenceNumber}</code> has been created to view a specific section 81s details.</li>
</ol>

Lookup API will be updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
	<li>BREAKING CHANGE: <code>street_line</code> and <code>street_centre_point</code> on <code>GET /nsg/streets</code> response will be returned as GeoJSON object rather than string</li>
  <li>BREAKING CHANGE: <code>street_line</code> and <code>street_centre_point</code> on <code>GET /nsg/streets/{usrn}</code> response will be returned as GeoJSON object rather than string</li>
  <li>BREAKING CHANGE: <code>street_centre_point</code> on <code>GET /nsg/search</code> response will be returned as GeoJSON object rather than string</li>
	<li>BREAKING CHANGE: <code>GET /nsg​/streets​/{usrn}</code> response updated to make <code>special_desig_location_text</code> field optional</li>
</ol>

Reporting API updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>DEPRECATION: All CSV export endpoints i.e. endpoints ending in <code>/csv</code> are now deprecated and will be removed in an upcoming version</li>
</ol>

Data Export API updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li><code>POST /fixed-penalty-notices/csv</code> endpoint added to trigger generation of FPN CSV file which will be exportable in a later version</li>
</ol>

Version 1.10 (28/11/2019):
{: .govuk-heading-s #upcoming-changes}

<ol class="govuk-list govuk-list--bullet">
  <li>Add new Data Export API with endpoint <code>GET /work-data</code>. (See the resource guide for details)</li>
</ol>

Assessment status
{: .govuk-heading-s}

The available values for a permit's <code>assessment_status</code> field will be updated and will no longer re-use the same values of the <code>permit_status</code> field. The new <code>assessment_status</code> values are:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>granted</code></li>
  <li><code>granted_auto</code></li>
  <li><code>refused</code></li>
  <li><code>refused_auto</code></li>
  <li><code>permit_modification_request</code></li>
  <li><code>revoked</code></li>
</ol>

Deeming will no longer exist as an <code>assessment_status</code>, instead the response of <code>GET /works/{workReferenceNumber}/permits/{permitReferenceNumber}</code> will now contain a boolean <code>is_deemed</code> property to indicate whether or not a permit has deemed.
{: .govuk-body}

Now that <code>assessment_status</code> and <code>permit_status</code> will contain different values, permit assessment will now be carried out by a new endpoint <code>PUT /works/{workReferenceNumber}/permits/{permitReferenceNumber}/assessment</code>. Actions that will be carried out by this new endpoint include:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Granting</li>
  <li>Refusing</li>
  <li>Modification requesting</li>
  <li>Revoking</li>
</ol>

Cancelling a permit will still continue to be carried out using the existing endpoint <code>PUT /works/{workReferenceNumber}/permits/{permitReferenceNumber}/status</code>. The following properties will be removed from this endpoint and migrated to the <code>PUT /works/{workReferenceNumber}/permits/{permitReferenceNumber}/assessment</code> endpoint:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><code>reasons_for_refusal</code></li>
  <li><code>assessment_discount</code></li>
  <li><code>revoke_reason</code></li>
  <li><code>pending_change_details</code></li>
</ol>

Breaking changes summary:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>
    Permit assessment and revoking will now be carried out using a new <code>PUT /works/{workReferenceNumber}/permits/{permitReferenceNumber}/assessment</code> endpoint, with only cancelling now being carried out using the existing <code>PUT /works/{workReferenceNumber}/permits/{permitReferenceNumber}/status</code> endpoint. The following fields will be removed from the latter:
    <ol>
      <li><code>reasons_for_refusal</code></li>
      <li><code>assessment_discount</code></li>
      <li><code>revoke_reason</code></li>
      <li><code>pending_change_details</code></li>
    </ol>
  </li>
  <li>Deeming is no longer tracked as an <code>assessment_status</code>. It is now available via an <code>is_deemed</code> boolean in the response of <code>GET /works/{workReferenceNumber}/permits/{permitReferenceNumber}</code></li>
</ol>

Work API will be updated with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>BREAKING CHANGE: <code>reinstatement_type</code> will be added as a new required field for <code>POST /works/${workReferenceNumber}/sites</code>. This is to prepare for the introduction of non-notifiable reinstatement work records. The value provided to this field should be <code>excavation</code> for current street manager reinstatements until the non-notifiable works feature is released. Reinstatement type is only provided when creating a site, any reinstatements added to an existing site will share the same <code>reinstatement_type</code></li>
  <li>BREAKING CHANGE: <code>final_reinstatement</code> property has been removed from <code>PUT /works/{workReferenceNumber}/inspection-units</code>. This can now be updated using the new <code>PUT /works/{workReferenceNumber}/final-reinstatement</code> endpoint. Inspection units can now be updated so long as there is an existing site/reinstatement for a work, and will be audited individually using the existing inspection_units_logged audit event</li>
  <li>BREAKING CHANGE: <code>PUT /works/{workReferenceNumber}/excavation</code> removed. Promoters should now raise a permit alteration to update whether an excavation was carried out.</li>
  <li>BREAKING CHANGE: <code>site_id</code> and <code>permit_id</code> response fields have removed. These have been replaced with <code>site_number</code> and <code>permit_reference_number</code> respectively. The biggest impact of this change to when fetching the details of a site, the existing <code>GET /works/{workReferenceNumber}/sites/{siteId}</code> endpoint has been replaced with <code>GET /works/{workReferenceNumber}/sites/{siteNumber}</code></li>
  <li><code>inspection_units</code> added to response of <code>GET /works/${workReferenceNumber}</code></li>
  <li>A new endpoint <code>PUT /works/{workReferenceNumber}/final-reinstatement</code> has been created to update the <code>final_reinstatement</code> property. This is only applicable for works with excavation reinstatements, and a new audit event has been added for this, <code>final_site_registered</code></li>
  <li><code>inspection_units</code> will be optional for <code>POST /works/${workReferenceNumber}/sites</code> and <code>POST /works/${workReferenceNumber}/sites/${siteId}/reinstatements</code>. Default to 1.</li>
  <li><code>length</code>, <code>width</code>, <code>depth</code> and <code>final_reinstatement</code> fields will be optional for <code>POST /works/${workReferenceNumber}/sites</code> and <code>POST /works/${workReferenceNumber}/sites/${siteId}/reinstatements</code>. They will still be mandatory for reinstatements where <code>reinstatement_type</code> is set to excavation. This is in preperation for non-notifiable works.</li>
  <li><code>secondary_reinstatement_coordinates</code> optional field will be introduced to <code>POST /works/${workReferenceNumber}/sites</code> and <code>POST /works/${workReferenceNumber}/sites/${siteId}/reinstatements</code>, it must be a GeoJSON geometry (using British National Grid easting and northing coordinate pairs) and must be a point, line string or polygon.</li>
  <li><code>number_of_holes</code> optional field will be introduced to <code>POST /works/${workReferenceNumber}/sites</code> and <code>POST /works/${workReferenceNumber}/sites/${siteId}/reinstatements</code> this will be required if the reinstatement_type is one of bar holes, core holes or pole testing which will be supported when non-notifiable reinstatements are introduced to the system</li>
  <li>Add <code>POST /section-81-works/section-81s</code> to create a new Section 81 work.</li>
</ol>

Version 1.9 (14/11/2019):
{: .govuk-body .govuk-!-font-weight-bold}

<ol class="govuk-list govuk-list--bullet">
  <li>Added the 'Connecting to the API services' section to the API documentation, to explicitly call out the need for clients to connect via DNS CNAMEs, rather than specific fixed IP addresses.</li>
</ol>

Updated Work API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>BREAKING CHANGE: <code>permit_id</code> has been removed from the response of <code>GET /works/{workReferenceNumber}/inspections/{inspectionReferenceNumber}</code></li>
  <li>BREAKING CHANGE: <code>permit_id</code> has been made optional from the response of <code>GET /works/{workReferenceNumber}</code> "sites" property</li>
  <li>BREAKING CHANGE: <code>permit_id</code> has been made optional from the response of <code>GET /works/{workReferenceNumber}/sites/{siteId}</code></li>
  <li>
    <code>work_status</code> will be added to the responses of the following endpoints:
    <ol>
      <li><code>GET /works/{workReferenceNumber}</code></li>
      <li><code>GET /works/{workReferenceNumber}/permits/{permitReferenceNumber}</code></li>
    </ol>
  </li>
</ol>

Updated Reporting API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>BREAKING CHANGE: <code>swa_organisation_name</code> has been removed from the response of <code>GET /reinstatements</code> endpoint, replaced by <code>promoter_organisation</code> and <code>highway_authority</code></li>
  <li>BREAKING CHANGE: <code>permit_status</code> has been removed as a sorting filter from sort_column parameter on<code>GET /permits</code> endpoint</li>
  <li>BREAKING CHANGE: <code>forward_plan_status</code> has been removed as a sorting filter from from sort_column parameter on <code>GET /forward-plans</code> endpoint</li>
  <li>BREAKING CHANGE: <code>sort_column and sort_direction </code> have been removed as paramters on <code>GET /forward-plans</code> endpoint</li>
</ol>

Version 1.8 (31/10/2019):
{: .govuk-body .govuk-!-font-weight-bold}

<ol class="govuk-list govuk-list--bullet">
  <li>Updated wording to reflect entering Public Beta; re-worked environments and release management sections.</li>
</ol>

Updated Work API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Update the <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/status</code> endpoint to allow HA's to submit a <code>permit_modification_request</code>. See sequencing section for more details.</li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}</code> to make <code>close_footway</code> mandatory</li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}/permits</code> to make <code>close_footway</code> mandatory</li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations</code> to make <code>close_footway</code> mandatory</li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}</code> to remove <code>highway_authority</code></li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}</code> to remove <code>promoter_organisation</code></li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}</code> to remove <code>promoter_contact_details</code></li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}/permits</code> to remove <code>promoter_contact_details</code></li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations</code> to remove <code>promoter_contact_details</code></li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}</code> to rename <code>approved_contractor</code> to <code>secondary_contact</code></li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}/permits</code> to rename <code>approved_contractor</code> to <code>secondary_contact</code></li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations</code> to rename <code>approved_contractor</code> to <code>secondary_contact</code></li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}</code> to rename <code>contractor_contact_details</code> to <code>secondary_contact_number</code></li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}/permits</code> to rename <code>contractor_contact_details</code> to <code>secondary_contact_number</code></li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations</code> to rename <code>contractor_contact_details</code> to <code>secondary_contact_number</code></li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/status</code> to make <code>reasons_for_refusal</code> mandatory when refusing permits</li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}/inspections</code> to make <code>inspection_evidence</code> mandatory</li>
</ol>

Updated Reporting API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>BREAKING CHANGE:<code> GET /permits/counts</code> endpoint and associated response body removed</li>
  <li>BREAKING CHANGE:<code> GET /sites</code> endpoint and associated response body removed</li>
  <li>BREAKING CHANGE: Reporting API pagination updated across all reporting endpoints:</li>
  <ol>
    <li><code>before</code> and <code>after</code> query params removed</li>
    <li><code>offset</code> query param added instead (optional for the first page, must be a non-negative integer)</li>
    <li><code>total_count</code> response property will no longer return exact number of rows, instead, 501 will be the maximum number of rows returned by this count</li>
    <li><code>page_start</code> property removed from <code>PaginationResponse</code></li>
    <li><code>ReportingSummaryResponse</code> removed, meaning the <code>cursor</code> property is also removed from each paginated endpoint response</li>
  </ol>
</ol>

Version 1.7 (17/10/2019):
{: .govuk-body .govuk-!-font-weight-bold}

<ol class="govuk-list govuk-list--bullet">
  <li>Added SANDBOX testing strategy details to Testing section</li>
</ol>

Updated Work API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}/inspections</code> renaming the field <code>unable_to_complete_details</code> to <code>inspection_outcome_details</code>, allowing <code>non_compliant</code> inspections and <code>unable_to_complete</code> inspection outcomes to use the same field to record additional details. Note that there can only ever be one scheduled inspection per work record.</li>
  <li>BREAKING CHANGE: Update the request body of <code>POST /works/{workReferenceNumber}/inspections</code> and response body of <code>GET /works/{workReferenceNumber}/inspections/{inspectionReferenceNumber}</code> renaming the field <code>additional_failure_comments</code> to <code>additional_comments</code></li>
  <li>Add <code>POST /works/{workReferenceNumber}/scheduled-inspections</code> to create a scheduled inspection from a work record. With a body with the following poperties: <code>inspection_date</code>, of type DateTime; Optional <code>inspection_date_time</code>, of type DateTime to be used to specify the time of a scheduled inspeciton; <code>inspection_type</code>, of type <code>InspectionType</code> enum; <code>inspection_category</code> of type <code>InspectionCategory</code> enum</li>
  <li>Add <code>DELETE /works/{workReferenceNumber}/scheduled-inspections</code> to cancel the scheduled inspection for a work record. Note that there can only ever be one scheduled inspection per work record</li>
  <li>Update the request body of <code>POST /works/{workReferenceNumber}/inspections</code> to an optional field <code>call_logged_reference</code> of type string</li>
  <li>Update the <code>InspectionType</code> enum to rename <code>slg</code> to <code>live_site</code> and <code>defect_inspection</code> to <code>non_compliance_follow_up</code></li>
  <li>Update the <code>InspectionCategory</code> enum to add <code>site_occupancy</code> and <code>conditions</code> both selectable on the Create Inspection request if the InspectionType is <code>live_site</code></li>
  <li>Update the <code>InspectionOutcomes</code> enum to rename <code>withdraw_defect</code> to <code>agreed_site_compliance</code> and add <code>works_stopped</code>, <code>works_stopped_apparatus_remaining</code>, <code>works_in_progress</code>, <code>works_in_progress_no_carriageway_incursion</code></li>
  <li>Update the validation of <code>POST /works/{workReferenceNumber}/inspections</code> the fields <code>was_call_logged</code>, <code>call_logged_to</code>, <code>call_logged_summary</code>, <code>call_logged_reference</code> are only accepted when when the InspectionType is set to <code>live_site</code> and the inspection outcome is set to <code>failed_high</code></li>
  <li>Update the of <code>POST /works</code> and <code>POST /works/{workReferenceNumber}/permits</code> to automatically add the manditory permit conditions <code>NCT01a</code> and <code>NCT01b</code>. If these conditions are supplied as part of the create requests their <code>comment</code> property will be ignored</li>
</ol>

Update Reporting API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Update the <code>GET /forward-plans</code> endpoint to accept the following query parameters: <code>forward_plan_status</code>, of type <code>ForwardPlanStatus</code> array; <code>start_date</code> of type DateTime; <code>end_date</code> of type DateTime; <code>query</code> of type string, which will search by street name or forward plan reference number</li>
</ol>

Update GeoJSON API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li><code>GET /works</code>, <code>GET /activities</code> and <code>GET /forward-plans</code> endpoints have been updated to return GeoJSON FeatureCollection objects. Each GeoJSON Feature object now contains a <code>geometry</code> property which now reflects what the <code>works_coordinates</code> previously were. Each GeoJSON Feature object also now contains a <code>properties</code> property which contains all previously available fields returned from the respective endpoints, for example <code>work_reference_number</code> would be found here.</li>
</ol>

Update Street Lookup API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
  <li>Add <code>GET /nsg/search</code> endpoint. (See resource guide for details)</li>
  <li><code>GET /nsg/streets</code> and <code>GET /nsg/streets/{ursn}</code> endpoints have been updated to return <code>street_special_desig_code</code> as an integer in order to reflect the [NSG specification](https://www.geoplace.co.uk/-/national-street-gazetteer-nsg-data-transfer-format-dtf-8-1-documents-released).</li>
</ol>

Version 1.6 (03/10/2019):
{: .govuk-body .govuk-!-font-weight-bold}

<!-- 27/09/19 -->
Updated Work API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
<li>BREAKING CHANGE: Update Work API to change <code>POST /works/{workReferenceNumber}/inspections</code> and <code>GET /works/{workReferenceNumber}/inspections/{inspectionReferenceNumber}</code>. <code>failure_reasons</code> updated from a string array to an array of <code>FailReasonDetails</code>, which is composed of a <code>failure_reason</code>, of type <code>FailReason</code> enum; <code>site\_ids</code>, an array of affected sites; and <code>details</code>, a free text field description</li>
<li>BREAKING CHANGE: How we recieve and provide NSG Special Designation information from the API now matches the NSG specification, we've introduced <code>special_desig_start_time</code>, <code>special_desig_end_time</code> and <code>special_desig_periodicity_code</code> to various requests, see the swagger docs for more detail.</li>
<li>Update Work API's <code>POST /works/{workReferenceNumber}/permits</code> to allow permit to be created on a works with only a forward plan.</li>
<li>Update <code>GET /works/{workReferenceNumber}/history</code> with an <code>event</code> which is an enum of high-level event types that can occur in the system.</li>
<li>Added <code>PUT /works/{workReferenceNumber}/forward-plans/{forwardPlanReferenceNumber}/cancel</code> endpoint to allow Promoters/Contractors to cancel forward plans. (See resource guide for details)</li>
<li>Restrict API users to the API interface and UI users to the UI interface</li>
</ol>

Updated Reporting API with non-breaking changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
<li>Update Reporting API to add three optional query parameters added to the <code>GET /permits</code> and <code>GET /alterations</code> endpoints in the Reporting API to enable lane rental filtering: <code>lane_rental_assessment_outcome</code>, array of <code>LaneRentalAssessmentOutcome; charges_not_agreed</code>, of type boolean; <code>lane_rental_charges_potentially_apply</code>, of type boolean</li>
<li>Update the <code>POST /works/updates</code> endpoint with an <code>update_id</code> property. </li>
<li>Restrict API users to the API interface and UI users to the UI interface</li>
</ol>

Updated GeoJSON API with non-breaking changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
<li>Added <code>GET /forward-plans</code> endpoint to fetch forward plans in particular bounding box</li>
<li>Restrict API users to the API interface and UI users to the UI interface</li>
</ol>

Updated Party API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
<li>Update Party API to allow non-Amdin, Planner users create and update workstreams associated with their organisation</li>
<li>Restrict API users to the API interface and UI users to the UI interface</li>
</ol>

Updated Street Lookup API with the following changes:
{: .govuk-body}
<ol class="govuk-list govuk-list--bullet">
<li>Restrict API users to the API interface and UI users to the UI interface</li>
</ol>

Version 1.5 (20/09/2019):
{: .govuk-body .govuk-!-font-weight-bold}

<ol class="govuk-list govuk-list--bullet">
  <li>Updated inspections endpoint in Work API</li>
  <li>Updated authentication endpoint response in Work API</li>
  <li>Updated Work API to add additional forward plan endpoints and fields in existing endpoints</li>
  <li>Added forward plan endpoints to Reporting API</li>
  <li>Updated GET /works/updates endpoint on the Reporting API to include details on comments.</li>
  <li>Updated API documentation to explain permit reference number generation.</li>
</ol>

Version 1.4 (05/09/2019):
{: .govuk-body .govuk-!-font-weight-bold}

<ol class="govuk-list govuk-list--bullet">
  <li>Added Revert start and stop endpoints to Work API</li>
  <li>Added activities endpoints to Work API.</li>
  <li>Updated PermitSummaryResponse object in Reporting API to return more fields.</li>
  <li>Added forward plan endpoints to Work API.</li>
  <li>Added permit discount endpoint for updating discount after assessment to Work API.</li>
</ol>

Version 1.3 (22/08/2019):
{: .govuk-body .govuk-!-font-weight-bold}

<ol class="govuk-list govuk-list--bullet">
  <li>Audit events in the history response will include an object_reference. Where further information is required about what has changed this, object_reference can be used to find more details on the object</li>
  <li>Contractors can use the Reporting API to extract data from the service both as JSON and CSV format. These endpoints allow you to extract most works information efficiently for the organisations for which you're working. swa_code parameters are available on the endpoints which must be used by contractors to provide the SWA code of the promoter they are working for.</li>
  <li>Added lane rental assessment endpoints to Work API.</li>
  <li>Added activities endpoint to Geojson API to find activities in a given area.</li>
  <li>Added forgot password and password reset endpoints to Party API.</li>
  <li>Updated WRN validation to allow underscores as a replace character for non-URL friendly characters.</li>
</ol>

Version 1.2 (07/08/2019):
{: .govuk-body .govuk-!-font-weight-bold}

Updated Work API with non-breaking changes:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">

<!-- 07/08/19 -->
<li>New optional boolean properties have been added to the Reporting API `GET /permits` and `GET /alterations` endpoints for filtering results</li>

<li>`access_token` and `refresh_token` properties have been added to the response of `POST /authenticate`. The `refresh_token` can be provided to the new Party API `POST /refresh` endpoint to retrieve a refreshed `id_token` and `access_token`. The `access_token` can be provided to the Party API `POST /logout` endpoint to invalidate all tokens associated with a user.</li>

</ol>

Version 1.1 (25/07/2019):
{: .govuk-body .govuk-!-font-weight-bold}

<ol class="govuk-list govuk-list--bullet">
<!-- 16/05/19 -->
<li>An optional parameter, workstream_prefix, has been added to POST /work and POST /works/{work reference number}/permits endpoints, to allow API users to specify workstream for permit (if not set will default to "000"), see API Documentation Resource guide for details</li>
<li>API user can now request further information on the updates Permits by calling the POST /permits/search with a list of work reference numbers returned by the GET /works/updates end point, see API Documentation Resource guide for details</li>
<li>The street lookup information can now be returned using a USRN rather than coordinates. The GET streets/{usrn} endpoint will return a single street for the supplied USRN, see API Documentation Resource guide for details</li>
<!-- 30/5/2019 -->
Updated Work API with non-breaking changes:

<li>If the user does not supply a work_reference_number as part of the request body to POST /works then it will be auto-generated with the following format:<br/>
<br/>
<code><2 letter swa_org_prefix><3-letter workstream prefix><8 digit random number></code><br/>
<br/>
The generated work_reference_number is returned in the response.
<br/><br/>
More detail is available in the V1.1 API documentation Resource Guide for the Create work endpoint.</li>

<li>Updated Reporting API, added new sorting options for GET /permits to allow sorting by start/end/status
Added new optional filter parameters for GET /fixed-penalty-notices to allow filtering by date
Added new fields to GET /inspections response, returning Highway Authority and Promoter Organisation</li>
</ol>

Version 1.0 (30/4/2019):
{: .govuk-body .govuk-!-font-weight-bold}

<ol class="govuk-list govuk-list--bullet">
  <li>Added <em>Environments</em> section</li>
  <li>Added <em>Versioning and Release Management</em> section</li>
  <li>Added <em>Roadmap</em> section</li>
  <li>Referenced Onboarding and Business rule documents</li>
  <li>Updated <em>Sequencing</em> section with new flows and details</li>
  <li>Updated security section with details on user roles, see <em>Security</em></li>
  <li>Added static Swagger JSON files, see <em>Resource guide</em></li>
  <li>Added detail on continuous polling endpoint, see <em>Technical Overview</em> and <em>Resource guide</em></li>
</ol>

Version 0.2 (27/03/2019 Draft)
{: .govuk-body .govuk-!-font-weight-bold}

<ol class="govuk-list govuk-list--bullet">
  <li>Exposed Street Lookup API, GeoJSON API and Reporting API for external use, see <em>Technical Overview</em></li>
  <li>Details added for Polling endpoint planned for Reporting API, see <em>Technical Overview</em></li>
  <li>Plans added for Notifications, see <em>Technical Overview</em></li>
  <li>Details added for User account roles and permissions, see <em>Security</em></li>
  <li>Additional features added to Work API
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
