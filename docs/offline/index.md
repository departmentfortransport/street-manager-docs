---
layout: default
title: Offline
---
<h1 class="govuk-heading-xl">Offline guidance</h1>

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

<h2 class="govuk-heading-l">Introduction</h2>

<p class="govuk-body">
  Planned and unplanned outages can happen as part of a digital service. When this does occur, the following guidance documentation can help you continue to operate if the service is unavailable for a prolonged period.
</p>

<p class="govuk-body">
  This guidance relates to Street Manager only, where either the User Interface or the API cannot be used as defined below. Any issues relating to other systems or API integrations are not covered by this guidance.
</p>

<h2 class="govuk-heading-l">Where to get information about outages</h2>

<p class="govuk-body">
  For incidents identified by the Service Team through our automated proactive monitoring, the Public Beta Manager will notify users through email.  Information will also be available on the <a class="govuk-link" href="https://streetmanager.atlassian.net/servicedesk/customer/portal/1">Street Manager support portal</a>.
</p>

<p class="govuk-body">
  In the event of a service outage, a service maintenance page will also be displayed online.
</p>

<h2 class="govuk-heading-l">Different types of outages</h2>

<p class="govuk-body">
  The service may have different types of outages which could include planned or unplanned ones. There are other circumstances when the Production environment is available, but performance is degraded for some or all users who might be unable to complete some tasks.
</p>

<h3 class="govuk-heading-m">Planned outages</h3>

<p class="govuk-body">
  The release and maintenance process is usually a mixture of regular end-of-sprint and expedited releases. Expedited releases are changes outside the standard release process and could include, for example, an emergency release to fix an incident in line with the Service Level Agreements. The standard release and maintenance process will aim for updates to the service environments every 2 weeks. Users will be notified of planned service downtime at least 2 working days in advance, and  as soon as an expedited release is identified if downtime is expected only.
</p>

<p class="govuk-body">
  Emergency maintenance activities, such as a security patch, may be required, and users will be notified of this as soon as it is identified.
</p>

<h3 class="govuk-heading-m">Unplanned Outages and performance degredation</h3>

<p class="govuk-body">
  The Service Level Agreement classifies unplanned outages or performance degradation as follows.  The DfT decides the classification of incidents as P1s, P2s etc:
</p>

<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Priority</th>
      <th scope="col" class="govuk-table__header">Description</th>
      <th scope="col" class="govuk-table__header">Definition</th>
      <th scope="col" class="govuk-table__header">Target Response Time</th>
      <th scope="col" class="govuk-table__header">Target Fix Time</th>
      <th scope="col" class="govuk-table__header">Support Hours</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">1</th>
      <td class="govuk-table__cell">Critical</td>
      <td class="govuk-table__cell">Entire Production environment is unavailable or unusable for all users</td>
      <td class="govuk-table__cell">1 working hour</td>
      <td class="govuk-table__cell">4 working hours</td>
      <td class="govuk-table__cell">Core Hours</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">2</th>
      <td class="govuk-table__cell">High</td>
      <td class="govuk-table__cell">Malfunction impacting critical piece of production functionality where no workaround is available.<br>Subset of production users cannot access application</td>
      <td class="govuk-table__cell">2 working hours</td>
      <td class="govuk-table__cell">6 working hours</td>
      <td class="govuk-table__cell">Core Hours</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">3</th>
      <td class="govuk-table__cell">Medium</td>
      <td class="govuk-table__cell">Service malfunction impacting non-critical piece of functionality in the Production environment.<br>Non-Production (including pre-prod) entirety or subset of features is unavailable or unusable.<br>Subset of Non-production users cannot access application</td>
      <td class="govuk-table__cell">4 working hours</td>
      <td class="govuk-table__cell">2 working days unless added to product backlog</td>
      <td class="govuk-table__cell">Core Hours</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">4</th>
      <td class="govuk-table__cell">Low/Query</td>
      <td class="govuk-table__cell">Intermittent (not consistently reproducible) or partial faults resulting in loss of non-critical functionality where the software is still useable or there is a suitable alternative.<br>Cosmetic issues with limited impact</td>
      <td class="govuk-table__cell">12 working hours</td>
      <td class="govuk-table__cell">Subject to prioritisation</td>
      <td class="govuk-table__cell">Core Hours</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">5</th>
      <td class="govuk-table__cell">Service Request</td>
      <td class="govuk-table__cell">Feedback, queries or new feature request</td>
      <td class="govuk-table__cell">5 days</td>
      <td class="govuk-table__cell">Subject to prioritisation</td>
      <td class="govuk-table__cell">Core Hours</td>
    </tr>
  </tbody>
</table>

<h2 class="govuk-heading-l">What to do during an outage</h2>

<p class="govuk-body">
  Works on site must continue regardless of service availability.
</p>

<h3 class="govuk-heading-m">Communications</h3>

<p class="govuk-body">
  The following communications will be sent to users should there be a disruption of the service:
</p>

<ul class="govuk-list govuk-list--bullet">
  <li>
    As soon as discovered, we will acknowledge the issue on both the <a class="govuk-link" href="https://departmentfortransport.github.io/street-manager-docs/articles/disruptions-to-service-availability.html">Disruption to Service Availability Page</a> and <a class="govuk-link" href="https://streetmanager.atlassian.net/servicedesk/customer/portal/1">Support Portal</a> and send an email to all users in the event of a P1. In the event of a P2, a decision will be made on a case-by-case basis in agreement with DfT.
  </li>
  <li>
    Whenever possible, we will communicate the scope of the outage, who is being affected and in what ways, describing the issue in the way the customer is affected.
  </li>
  <li>
    If there are workarounds or backup options available that will work in the meantime, we will make those known, clearly explaining how customers can take advantage of workarounds until things are back to working normally.
  </li>
  <li>
    We will send targeted communications to any API integrators who may have been responsible for triggering the incident with instructions, if needed, on what to do and what not to do during the incident and once recovery measures are being implemented.
  </li>
  <li>
    We will provide as much detail as will be helpful in plain English.
  </li>
  <li>
    We will provide regular updates.
  </li>
</ul>

<p class="govuk-body">
  Emails will be sent from this address: street.manager@notifications.service.gov.uk
</p>

<h3 class="govuk-heading-m">Process</h3>

<p class="govuk-body">
  During a P1 critical incident and P2 High incident, you can wait for the service to come back online since the target fix time is 4 working hours for a P1 and 6 working hours for a P2. The service desk will let users know at the start of an incident if it is being treated as a P1 or a P2 incident and when the target fix time will be.  The service desk will update users if the target fix time is not going to be met if initial investigations show that it is not going to be possible.
</p>

<p class="govuk-body">
  If the P1 or P2 incident means that Street Manager will be off-line for longer than the target fix time, the DfT will discuss the ongoing incident with the co-chairs of the Street Manager governance group. A joint decision will be taken to move to using spreadsheets to submit key information (forming the ‘Paper Notification’) based on the expected recovery time of the service and this will be communicated to all users. This advice will be reviewed, as further guidance will be required if an outage lasted several days e.g. impacting the notification period for minor works.
</p>

<p class="govuk-body">
  The key information is to enable authorities to continue to fulfil their Network Management Duty or to inform promoters of a required action, and is to be submitted hourly and directly to the responsible parties either via email (assuming emails are still working) or any other way that has been agreed.  Information should be collated and spreadsheets submitted on an hourly basis, or as agreed, on a best endeavours basis until the DfT informs all users that this should stop and Street Manager is available.
</p>

<p class="govuk-body">
  It is however accepted that submitting manual information should be a last resort and it may be preferable to wait for Street Manager to be fixed and then to submit the data retrospectively at that time.  If spreadsheets are submitted, users will need to submit permit applications, and all other relevant notifications once the full service is restored.
</p>

<p class="govuk-body">
  Other P3-P5 incidents should not impact the Production environment to the extent that users are unable to complete tasks. If a user is unable to carry out a specific task, they should raise a ticket on the <a class="govuk-link" href="https://streetmanager.atlassian.net/servicedesk/customer/portal/1">Support Portal</a>
</p>

<h3 class="govuk-heading-m">Fixed Penalty Notices, Early Starts and Revocations</h3>

<p class="govuk-body">
  If, during a P1 or P2 incident, users are unable to submit works start and/or works stop notices, permit applications e.g. for immediate works, change requests and registrations within the required regulatory deadlines, Highway Authorities should confirm the outage or performance degradation times noted on the <a class="govuk-link" href="https://departmentfortransport.github.io/street-manager-docs/articles/disruptions-to-service-availability.html">Disruption to Service Availability Page</a> and, if late submission was due to Street Manager being unavailable, it is the DfT’s view that Fixed Penalty Notices (FPNs) should not be issued.
</p>

<p class="govuk-body">
  The back-up information submitted by spreadsheet is not subject to FPNs.
</p>

<p class="govuk-body">
  Planned permit applications should be delayed until the service is fully restored, recognising that the full notification period may not have been achieved and there may be a need to grant an early start, subject to the authority’s agreement.
</p>

<p class="govuk-body">
  If a permit has deemed during a P1 or P2 incident, it should be noted that the authority may need to revoke the permit if there is a specific and justified concern once Street Manager is available, e.g. a conflict with another work.  However, this should be an exceptional circumstance.
</p>



<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

<h2 class="govuk-heading-l">Documents</h2>

<ul class="govuk-list govuk-list--bullet">
  <li>Spreadsheet for recording key information [to be added]</li>
  <li><a class="govuk-link" href="{{ site.baseurl }}/assets/files/offline/PERMIT-APPLICATION-INCLUDING-RESPONSES.pdf">Permit form</a></li>
  <li><a class="govuk-link" href="{{ site.baseurl }}/assets/files/offline/Street%20Manager%20-%20inpection%20form%20printable.pdf">Inspection form v1.0</a></li>
</ul>
