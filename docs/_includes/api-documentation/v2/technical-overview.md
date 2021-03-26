## Technical Overview
{: .govuk-heading-l #technical-overview}

### Available APIs
{: .govuk-heading-m}

![Getting data]({{site.baseurl}}/api-documentation/images/v2/getting-data.png)

Street Manager exposes a number of APIs to allow external applications
to retrieve and submit data.
{: .govuk-body}

#### Work API
{: .govuk-heading-s}

The Street Manager Work API allows promoters and highway authority
users to carry out a number of key workflows relevant to their
organization and role. We will cover each in detail but at a high level
they are:
{: .govuk-body}

**Promoter workflows**
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Submit permit application</li>
  <li>Submit forward plan</li>
  <li>Carry out a work</li>
  <li>Create reinstatement</li>
  <li>Action an FPN</li>
  <li>Add comments to a works record</li>
  <li>Submit a permit alteration (change-request, work extension)</li>
</ol>

**Highway Authority workflows**
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Assess permit application</li>
  <li>Issue an inspection</li>
  <li>Schedule reinspections</li>
  <li>Issue an FPN</li>
  <li>Submit event and highway license activities</li>
  <li>Add comments to a works record</li>
  <li>Issue a Section 81</li>
  <li>Generate Sample Inspections</li>
</ol>

In order to ensure a user has the appropriate permissions to carry out
the above workflows they must authenticate to the API and acquire a JWT
to be used as part of their request.
{: .govuk-body}

#### Street Lookup API
{: .govuk-heading-s}

The Street Manager Street Lookup API allows querying of NSG and ASD data
based on location and USRN. This function is only available as part of
submitting a permit for a work. See the resource guide for details.
{: .govuk-body}

#### GeoJson API
{: .govuk-heading-s}

The Street Manager GeoJson API exposes works and events spatial data to
authenticated users for use with mapping queries. This API returns data in the form of [GeoJSON](https://tools.ietf.org/html/rfc7946#section-4) using BNG (British National Grid [EPSG:27700](https://epsg.io/27700)) as the Coordinate Reference System, as per Street Works industry standard. See the resource guide for details.
{: .govuk-body}

#### Data Export API
{: .govuk-heading-s}

Street Manager supports an API for Open Data users. The Data Export API allows non street works authority users, such as Mobile Application developers, to retrieve information about works. It also allows users of Street Manager to extract data within their organisation from the service in CSV format. See Open Data and the resource guide for details.
{: .govuk-body}

#### Reporting API
{: .govuk-heading-s}

The Reporting API allows promoters and highway authority users to carry
out a number of data analysis and reporting workflows, allowing them to
retrieve data with configurable filtering, sorting and paging. This is
the backbone of our dashboard and list functionality. This API should be
used as a primary API to retrieve large volumes of data about your
works.
{: .govuk-body}

### Getting data from Street Manager
{: .govuk-heading-m #getting-data-from-street-manager}

External systems integrating with Street Manager need to retrieve data
from the service to give their users the most up-to-date view on what is
going on with their works. Street Manager has a number of ways which you
can extract data from the service.
{: .govuk-body}

**Individual work data**
{: .govuk-body}

The Work API provides endpoints which give the full detail available
for individual Works and Permits. Use these endpoints to retrieve
details such as timings, comments, history and changes.
{: .govuk-body}

**Reporting**
{: .govuk-body}

You can use the Data Export API to extract data from the service in
CSV format. These endpoints allow you to extract most Work
information efficiently for your organisation.
{: .govuk-body}

**Continuous** **Polling**
{: .govuk-body}

The Reporting API exposes a `/works/updates` endpoint for polling. See the resource guide for full information.
{: .govuk-body}

**Notifications**
{: .govuk-body}

Street Manager offers a Notification service which will send Push
notifications to organisations for updates to their Works to subscribed
systems. Organisations who wish to receive notifications need to expose
an HTTPS endpoint capable of receiving POST requests from the
Notification service containing the update event data as JSON.
{: .govuk-body}

You can find out more about Notifications, including how to access them, on the <a href="https://departmentfortransport.github.io/street-manager-docs/open-data/">Open Data Overview page</a>.
{: .govuk-body}

Notifications cannot offer guaranteed delivery (network issues, service
downtime etc.) so to reconcile for missed Notifications you can use the
Polling API endpoint to validate you have received notifications for all
updated works.
{: .govuk-body}

**Contractors**
{: .govuk-body}

Contractors can use the Data Export API to extract data from the service in CSV format. These endpoints allow you to extract most Work information efficiently for the organisation you are working on behalf of. <code>swa_code</code> parameters are available on the endpoints which can be used by contractors to provide the SWA code of the promoter they are working on behalf of. Additionally, contractors can carry out promoter workflows via the Work API.
{: .govuk-body}

**Open Data**
{: .govuk-body}

Street Manager maintains a number of hourly scheduled jobs for data exporting. Currently, these retrieve data of permits and activities across all organisations that have been added, changed, or deleted in the past hour, which is then stored in CSV format. These files can be retrieved using the Data Export API.
{: .govuk-body}

For example, a CSV file named <code>Works_data_export_2020-01-01_13-00.csv</code> will contain data of permits across all organisations that have been added, changed, or deleted between <code>2020-01-01T12:00:00.000Z</code> and <code>2020-01-01T12:59:59.999Z</code>.
{: .govuk-body}

Note: The timing in the CSV file names are in British Summer Time (BST), similarly to the async data extraction CSV files. So during BST, a CSV file named <code>Works_data_export_2020-04-15_13-00.csv</code> will contain data of permits across all organisations that have been added, changed, or deleted between <code>2020-04-15T11:00:00.000Z</code> (<code>2020-04-15T12:00:00.000+0100</code>) and <code>2020-04-15T11:59:59.999Z</code> (<code>2020-04-15T12:59:59.999+0100</code>).
{: .govuk-body}
