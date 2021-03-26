## Versioning and Release Management
{: .govuk-heading-l #versioningandreleasemanagement}

During Public Beta and beyond, the Street Manager services will remain under continual active development.  Therefore, a process must be established which allows low-friction development to continue at pace, whilst providing the option for web frontend users and API integrators to focus on a higher-stability version of the services.
{: .govuk-body}

This section aims to describe the approach taken by the Street Manager team in order to meet both of those requirements.  The approach is based upon existing GDS [best practices](https://gdstechnology.blog.gov.uk/2016/07/26/considering-our-approach-to-api-iteration/) and will undergo continual refinement over time, based on feedback from the consumers of the service environments as well as observations by the Street Manager project team.
{: .govuk-body}


### API Versioning Approach
{: .govuk-heading-m}

The Street Manager API services will be versioned via the URL path, for example <code>api.sandbox.domain.com/v1/works/.../</code> versus <code>api.sandbox.domain.com/v2/works/.../</code>.  Initially, the Public Beta will focus on the <code>v1</code> major version of the codebase, with new major versions being introduced at a later date.
{: .govuk-body}


### Available API Versions
{: .govuk-heading-m}

<ol class="govuk-list govuk-list--bullet">
  <li>V1 (stable - due to be deprecated in May 2021)</li>
  <li>V2 (stable)</li>
  <li>V3 (upcoming in May 2021)</li>
</ol>


### Release Management
{: .govuk-heading-m}

Minor version updates will be released to all available versions of Street Manager APIs every two weeks - these updates may include existing feature enhancements, entirely new feature additions, as well as issue hot fixes. Although regular releases will continue throughout Public Beta, the Street Manager development team will strive to minimise the number of breaking changes to stable versions where possible.
{: .govuk-body}

It should however be noted that during Public Beta development, there remains the potential that breaking changes may occasionally be required in order to release corrective hot fixes deemed to be service critical. In such situations, the project team will notify potentially affected participant organistations in advance of the release and provide support with a view to minimising disruption.
{: .govuk-body}

After an API version is deprecated this will no longer be supported or deployed. This will be communicated in advance to ensure ample notice for integrators to migrate to the new stable version.
{: .govuk-body}

The following are examples of what we consider to be breaking and non-breaking changes.
{: .govuk-body}

#### What is a breaking change
{: .govuk-heading-s}

<ol class="govuk-list govuk-list--bullet">
<li>Adding new mandatory field to existing endpoint request object</li>
<li>Removing/renaming enum value for field in existing endpoint request object</li>
<li>Removing/renaming existing field in endpoint response object</li>
<li>Adding new required endpoint to use an existing flow (e.g. submitting a permit)</li>
</ol>

#### What is a non-breaking change
{: .govuk-heading-s}

<ol class="govuk-list govuk-list--bullet">
<li>Adding a new optional field to existing endpoint request object</li>
<li>Adding new enum values for field in existing endpoint request object</li>
<li>Adding new data to response objects (accepting risk that this breaks some formal contract JSON deserialisers)</li>
<li>Adding a new endpoint to support new functionality or an enhancement to existing functionality</li>
</ol>

When the first participant organisations are approaching production readiness, <code>v1</code> will be 'locked down' to ensure only non-breaking hotfixes and additive enhancements are permitted into the codebase.  At this point in time, a <code>v2</code> version will be published alongside <code>v1</code> in the SANDBOX environment alongside updated Swagger JSON definitions - this is aimed at parties interested in tracking Street Manager development more closely. Similar to <code>v1</code>, updates will be released into <code>v2</code> every two weeks, and whilst the Street Manager development team will strive to minimise them, the occasional breaking change may be required in order to release critical fixes.
{: .govuk-body}
