## Sequencing
{: .govuk-heading-l #sequencing}

As detailed in the Technical Overview section, the Reporting API drives
a large amount of data retrieval functionality whilst the Street Manager
API drives a lot of key user workflows e.g. submit permit, assess
permit, etc. These two APIs together form much of the common sequences a
user is likely to perform.
{: .govuk-body}

Below is an example of sequence calls used to submit and respond to a
permit application as well as how various actions affect the works
lifecycle. These endpoints are all available as part of the street
manager API and are discussed in more detail within the resource guide.
{: .govuk-body}

![sequence diagram]({{site.baseurl}}/api-documentation/images/v1/sequence-calls-used-to-submit-and-respond-to-a-permit-application.png)

The following actions can be performed at any subsequent stage in the
sequence from the stage they are available:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>File upload</li>
  <li>Add a comment</li>
  <li>Add reinstatement</li>
  <li>Add inspections</li>
  <li>Make alteration</li>
</ol>

Whilst the above focuses much on data manipulation via the Work API, here is an example of some data retrieval calls that may be performed alongside these actions via the Reporting API.
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>Permits awaiting assessment</strong>: <code>GET /permits?status=submitted</code></li>
  <li><strong>Expiring interim reinstatements</strong>: <code>GET /reinstatements?status=interim&latest_reinstatements_only=true</code></li>
  <li><strong>Disputed FPNs</strong>: <code>GET /fixed-penalty-notices?status=disputed</code></li>
</ol>

### Understanding the status of a work
{: .govuk-heading-m}

As a permit progresses through the sequence above the permit status
changes. Knowing the various statuses of a work and a permit allows you to filter
lists of permits related to your organization through the Reporting API.
{: .govuk-body}

The statuses of a work are:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>planned</strong>: The work has not yet started i.e. works start has not been logged</li>
  <li><strong>in_progress</strong>: The work has been started but not yet completed i.e. works start has been logged but works stop has not</li>
  <li><strong>completed</strong>: The work has been finished i.e. works stop has been logged</li>
  <li><strong>cancelled</strong>: The active permit on the work has been cancelled</li>
  <li><strong>unattributable</strong>: An unattributable work record</li>
  <li><strong>historical</strong>: The work record was created from a historical inspection or FPN</li>
  <li><strong>non_notifiable</strong>: The work record was created from a non notifiable reinstatement</li>
  <li><strong>section_81</strong>: The work record was created from a section 81</li>
</ol>

The statuses of a permit are:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>submitted</strong>: The permit is awaiting assessment</li>
  <li><strong>granted</strong>: The permit has deemed or has been assessed as granted by an HA</li>
  <li><strong>permit_modification_request</strong>: The permit has been assessed as a permit modification request by an HA, it can still be subsequently assessed as granted/refused by an HA.</li>
  <li><strong>refused</strong>: The permit has been assessed as refused by an HA</li>
  <li><strong>closed</strong>: The permit has been stopped by the promoter</li>
  <li><strong>cancelled</strong>: The permit has been cancelled by the promoter</li>
  <li><strong>revoked</strong>: The permit has been revoked after it was granted</li>
  <li><strong>progressed</strong>: The PAA has been progressed to a major permit</li>
</ol>

Note: PAA/Major submission will be included as part of this sequence.
{: .govuk-body}

### Viewing works and permits
{: .govuk-heading-m}

#### Work API
{: .govuk-heading-s}

When a permit has been submitted and a works record exists both
promoters and HAs can view the works record via the GET work endpoint on
the work API. This endpoint requires you to provide the **work
reference number** which was supplied during the submission of the
permit application.
{: .govuk-body}

<code>GET /works/{work reference number}</code>

This contains information about all of the entities associated with the
work record, the properties of this response are:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><strong>Active permit</strong>: The currently active permit associated with the works. In the sequence above this would contain the permit awaiting assessment</li>
  <li><strong>Forward plan</strong>: Summary of a forward plan if it has been added to the works (none initially)</li>
  <li><strong>Sites</strong>: Any reinstatement sites that have been added to the works (none initially)</li>
  <li><strong>Inspections</strong>: Any inspections that have been issued on the works (none initially)</li>
  <li><strong>FPNs</strong>: Any fixed penalty notices that have been issued on the works (none initially)</li>
  <li><strong>Permits</strong>: Summary of all permits that have been associated with that works (i.e. multiple permits)</li>
  <li><strong>Reinstatements</strong>: Summary of all reinstatements that have been associated with that works (none initially)</li>
  <li><strong>History</strong>: Summary of all history associated with that works</li>
  <li><strong>Files</strong>: Any files that have been uploaded on the works (none initially)</li>
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

The Reporting API permits endpoint will be the most useful way to see
all permits that are relevant to your organisation.
{: .govuk-body}

For example, as an HA you can use the **status** property of a permit
indicates the current state it is in, for submitted permits that are
awaiting assessment the permit status will be "submitted".
{: .govuk-body}

<code>GET /permits?status=submitted</code>

The **status** query param can be changed to any of the values discussed
above to retrieve permits in any stage of the sequence. This is
discussed in more detail in the Reporting API resource guide.
{: .govuk-body}

Promoters can use **status** values to find permits which the HA has
responded to, see the Street Manager API resource guide for more details
on Permit status values.
{: .govuk-body}

### Permits
{: .govuk-heading-m}

<ol class="govuk-list govuk-list--bullet">
  <li>
    <strong>Create a work record (Planner)</strong>: <code>POST /works</code>
    <p>
      Initially a promoter will create a work, which will, in turn, create a
      permit application.
    </p>
  </li>
  <li>
    <strong>Approve the permit (Highway Authority)</strong>: <code>PUT /works/{work reference number}/permits/{permit reference number}/status</code>
  </li>
</ol>

![permit create and assess diagram]({{site.baseurl}}/api-documentation/images/v1/create-and-assess-permits.png)

#### Permit modification requests
{: .govuk-heading-s}

HA Officers will have the option to assess permit applications as a `permit_modification_request`. This means the work can not be started until the HA makes a final assessment, i.e. `granted` or `refused`. They can do this at any time, but the promoter will have the option to submit permit alterations in order to address the changes the HA has asked for.
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>
    <strong>Create a work record (Planner)</strong>: <code>POST /works</code>
    <p>
      Initially a promoter will create a work, which will, in turn, create a
      permit application.
    </p>
  </li>
  <li>
    <strong>Modification request (Highway Authority)</strong>: <code>PUT /works/{work reference number}/permits/{permit reference number}/status</code>
    <p>
      Via the assessment endpoint, the HA requests changes to the permit.
    </p>
  </li>
  <li>
    <strong>Create permit alteration (Promoter)</strong>: <code>POST /works/{work reference number}/permits/{permit reference number}/alterations</code>
    <p>
      Promoter submits requested changes via change request
    </p>
  </li>
  <li>
    <strong>Assess the alteration (Highway Authority)</strong>: <code>PUT /works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations/{permitAlterationReferenceNumber}/status</code>
    <p>
      Once a permit alteration is submitted the Highway Authority can either grant or refuse it.
    </p>
    <p>
      Once a permit alteration is granted by a Highway Authority the permit is updated with the altered values.
    </p>
  </li>
  <li>
    <strong>Approve or reject the permit (Highway Authority)</strong>: <code>PUT /works/{work reference number}/permits/{permit reference number}/status</code>
    <p>
      The HA makes a final assessment decision on the permit
    </p>
  </li>
</ol>
![permit modification request diagram]({{site.baseurl}}/api-documentation/images/v1/permit-modification-request.png)


### Inspections
{: .govuk-heading-m}

In order to create an inspection the following steps should be followed:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>
    <strong>Create a work record (Planner)</strong>: <code>POST /works</code>
    <p>
      Initially a promoter will create a work, which will, in turn, create a
      permit application.
    </p>
  </li>
  <li>
    <strong>Start the work (Planner)</strong>: <code>PUT /works/{work reference number}/start</code>
  </li>
  <li>
    <strong>Upload supporting evidence (Highway Authority)</strong>: <code>POST /files</code>
    <p>
      If supporting evidence is required for an inspection (for example, a
      photograph of a defect) one or more files can be associated with the
      inspection as part of the POST request. The file(s) must be uploaded
      first, the returned <code>file_id</code> submitted in the
      <code>file_ids</code> array in the inspection request and the
      <code>inspection_evidence</code> boolean set to <code>true</code>.
    </p>
  </li>
  <li>
    <strong>Create an inspection (Highway Authority)</strong>: <code>POST /works/{work reference number}/inspections</code>
    <p>
      Once a permit is in the "In Progress" or "Closed" state an inspection can
      be recorded against it. When recording a Failed inspection it is possible
      to create a reinspection which will act as a placeholder for a follow up
      inspection.
    </p>
    <p>
      Once an inspection is recorded against a work any previously scheduled
      reinspections, for that work, will be removed.
    </p>
    <p>
      Once an inspection is recorded against a work it cannot be updated.
    </p>
  </li>
</ol>

![Inspections sequence diagram]({{site.baseurl}}/api-documentation/images/v1/inspections-wsd.png)

### Fixed Penalty Notices
{: .govuk-heading-m}

In order to create a fixed penalty notice the following steps should be
followed:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>
    <strong>Create a work record (Planner)</strong>: <code>POST /works</code>
    <p>
      Initially a promoter will create a work, which will, in turn, create a
      permit application.
    </p>
  </li>
  <li>
    <strong>Upload supporting evidence (Highway Authority)</strong>: <code>POST /files</code>
    <p>
      If supporting evidence is required for a fixed penalty notice (for
      example, a photograph of a breach of conditions) one or more files can be
      associated with the inspection as part of the POST request. The file(s)
      must be uploaded first, the returned <code>file_id</code> submitted in the
      <code>file_ids</code> array in the inspection request and the
      <code>fpn_evidence</code> boolean set to <code>true</code>.
    </p>
  </li>
  <li>
    <strong>Create a fixed penalty notice (Highway Authority)</strong>: <code>POST /works/{work reference number}/fixed-penalty-notices</code>
    <p>
      A fixed penalty notice can be created against a work as soon as it has
      been created.
    </p>
  </li>
  <li>
    <strong>Accept a fixed penalty notice (Planner)</strong>: <code>PUT /works/{work reference number}/fixed-penalty-notices/{fpn reference number}/status</code>
    <p>
      Optional Step: A promoter can mark the fixed penalty notice as accepted
      or, alternatively, they can pay it offline.
    </p>
  </li>
  <li>
    <strong>Dispute a fixed penalty notice (Planner)</strong>: <code>PUT /works/{work reference number}/fixed-penalty-notices/{fpn reference number}/status</code>
    <p>
      Optional Step: A promoter can dispute a fixed penalty notice. Once a
      promoter disputes a fixed penalty notice, they are able to retroactively
      mark it as accepted, if required.
    </p>
  </li>
  <li>
    <strong>Set fixed penalty notice outcome (Highway Authority)</strong>: <code>PUT /works/{work reference number}/fixed-penalty-notices/{fpn reference number}/status</code>
    <p>
      The Highway Authority issuing the fixed penalty notice is able to
      record the resolution of the fixed penalty notice. Possible resolution
      states are: Paid, Paid with Discount or Withdrawn.
    </p>
  </li>
</ol>

![FPN sequence diagram]({{site.baseurl}}/api-documentation/images/v1/fpn-wsd.png)

### Sites and reinstatements
{: .govuk-heading-m}

Reinstatements can be created as part of a non-notifiable work record or a planned work record. Reinstatement and sites have the following types:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>
    excavation
  </li>
  <li>
    bar_holes
  </li>
  <li>
    core_holes
  </li>
  <li>
    pole_testing
  </li>
</ol>

The type is only specified when creating a site, any reinstatements created an against existing site will inherit the type from the site they are created against. Excavation sites can only be created for work records which have an active permit which is in-progress or complete and where excavation is set to true in the permit application. A typical flow is as follows:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>
    <strong>Create a work record (Planner)</strong>: <code>POST /works</code>
    <p>
      Initially a promoter will create a work, which will, in turn, create a
      permit application. Excavation will be true when promoter wishes to raise excavation sites
    </p>
  </li>
  <li>
    <strong>Start the work (Planner)</strong>: <code>PUT /works/{work reference number}/start</code>
  </li>
  <li>
    <strong>Create a site (Planner)</strong>: <code>POST /works/{workReferenceNumber}/sites</code>
    <p>
      Once a permit is in the "In Progress" or "Closed" state a site can
      be created.
    </p>
    <p>
      Once a site is recorded against a work a reinstatement of the same type can be optionally added to the site using <code>POST /works/{workReferenceNumber}/sites/{siteNumber}/reinstatements</code>
    </p>
    <p>
      Once a site/reinstatement is recorded against a work it cannot be updated.
    </p>
  </li>
</ol>

![Reinstatement sequence diagram]({{site.baseurl}}/api-documentation/images/v1/create-reinstatement-sites.png)

### Permit alterations
{: .govuk-heading-m}

#### Promoter change request
{: .govuk-heading-s}

In order to create a promoter change request the following steps should be followed:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>
    <strong>Create a work record (Planner)</strong>: <code>POST /works</code>
    <p>
      Initially a promoter will create a work, which will, in turn, create a
      permit application.
    </p>
  </li>
  <li>
    <strong>Approve the permit (Highway Authority)</strong>: <code>PUT /works/{work reference number}/permits/{permit reference number}/status</code>
  </li>
  <li>
    <strong>Request a change (Planner)</strong>: <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations</code>
    <p>
      Promoter should submit all fields in the original permit with the changes they require included.
    </p>
  </li>
  <li>
    <strong>Assess the alteration (Highway Authority)</strong>: <code>PUT
/works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations/{permitAlterationReferenceNumber}/status</code>
    <p>
      Once a permit alteration is submitted the Highway Authority can either grant or refuse it.
    </p>
    <p>
      Once a permit alteration is granted by a Highway Authority the permit is updated with the altered values.
    </p>
  </li>
</ol>

#### Promoter work extension
{: .govuk-heading-s}

In order to create a work extension the following steps should be followed:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>
    <strong>Create a work record (Planner)</strong>: <code>POST /works</code>
    <p>
      Initially a promoter will create a work, which will, in turn, create a
      permit application.
    </p>
  </li>
  <li>
    <strong>Approve the permit (Highway Authority)</strong>: <code>PUT /works/{work reference number}/permits/{permit reference number}/status</code>
  </li>
  <li>
    <strong>Start the work (Planner)</strong>: <code>PUT /works/{work reference number}/start</code>
  </li>
  <li>
    <strong>Request a change (Planner)</strong>: <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations</code>
    <p>
      Promoter should submit all fields in the original permit containing a change to the proposed_stop_date.
    </p>
  </li>
  <li>
    <strong>Assess the alteration (Highway Authority)</strong>: <code>PUT
/works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations/{permitAlterationReferenceNumber}/status</code>
    <p>
      Once a permit alteration is submitted the Highway Authority can either grant, grant with duration challenge or refuse it. If the Highway Authority grants with duration challenge they also provide an alternative end_date for the work to be complete.
    </p>
    <p>
      Once a permit alteration is granted by a Highway Authority the permit is updated with the altered values.
    </p>
  </li>
</ol>

#### Highway Authority imposed changed
{: .govuk-heading-s}

In order to create a work extension the following steps should be followed:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>
    <strong>Create a work record (Planner)</strong>: <code>POST /works</code>
    <p>
      Initially a promoter will create a work, which will, in turn, create a
      permit application.
    </p>
  </li>
  <li>
    <strong>Approve the permit (Highway Authority)</strong>: <code>PUT /works/{work reference number}/permits/{permit reference number}/status</code>
  </li>
  <li>
    <strong>Impose a change (Highway Authority)</strong>: <code>POST /works/{workReferenceNumber}/permits/{permitReferenceNumber}/alterations</code>
    <p>
      Highway Authority can impose changes to the conditions only. Highway Authority should submit all fields in the original permit containing a change to the conditions.
    </p>
    <p>
      Once a imposed change is submitted by a Highway Authority the permit is updated with the altered values. No assessment is required.
    </p>
  </li>
</ol>

![alteration sequence diagram]({{site.baseurl}}/api-documentation/images/v1/create-and-assess-permit-alteration.png)
