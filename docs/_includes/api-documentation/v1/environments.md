## Environments
{: .govuk-heading-l #environments}

The Street Manager service provides two separate isolated application service environments.  Both of these environments contains a full stack deployment of Street Manager and are designated for specific purposes, as outlined below.
{: .govuk-body}


![Service environments]({{site.baseurl}}/api-documentation/images/v1/service-environments-1.png)


### SANDBOX environment
{: .govuk-heading-m  #sandbox-env}

API URL: https://api.sandbox.manage-roadworks.service.gov.uk
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>SANDBOX environment is primarily intended as an integration testing environment for API integrators and an initial orientation environment for organisations intending to use the Street Manager web frontend.</li>
  <li>Each Public Beta participant organisation will be provided with credentials as part of the initial onboarding process.  User credentials can be valid for either the Street Manager web frontend, or the Street Manager API interfaces - not both at the same time.  In order to have existing credentials reconfigured for API access, please contact the Street Manager service desk.</li>
  <li>Organisations who are not a recognised Street Works Authority (do not have a SWA code, Contractor/Vendors etc.) may test using accounts for associated Street Works Authority organisations.</li>
  <li>Organisations intending to use only the Street Manager web frontend can leverage SANDBOX environment to test end-to-end permit journeys and familiarise their staff with the service.</li>
  <li>API integration developers can leverage the SANDBOX environment to access the latest Swagger documentation for the available API endpoints, as well as test their API clients against the Street Manager API services from their CI integration environment.</li>
  <li>Organisations are permitted to leverage SANDBOX for additional assurance activities such as focussed end-user testing, however no form of performance testing is permitted against this environment.  Organisations who wish to carry out performance testing must contact the Street Manager project team directly in order to discuss options.</li>
  <li>SANDBOX is development-grade, therefore a) is subject to higher-velocity changes and releases; b) is not guaranteed to be highly-available nor highly-performant; c) may be subject to occasional resets of the underlying databases.</li>
  <li><b>Organisations and their users of Street Manager must agree not to submit sensitive nor personally identifiable data into the SANDBOX environment under any circumstances – only use of ‘dummy’ data is permitted.</b></li>
</ol>


### PRODUCTION environment
{: .govuk-heading-m #production-env}

API URL: https://api.manage-roadworks.service.gov.uk
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>The PRODUCTION environment is <b>for LIVE use and LIVE data only</b> – neither functional nor non-functional testing is permitted against the live environment.</li>
  <li>Once an organisation has reached production-readiness – and have aligned with their local area ecosystem partners in that production-readiness – the organisations must engage with the Street Manager team to inform them of their production readiness.  At this stage the team will work with the organisation to facilitate a transition into the PRODUCTION environment.</li>
  <li>In some cases, local area ecosystem alignment may not be possible within reasonable time frames due to external factors.  In these cases, dual-keying may be necessary between the organisation, their existing EToN system, and the Street Manager Service.</li>
</ol>
