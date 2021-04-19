---
layout: default
title: API specification V1.25.12
version: 1.25.12
business_rules_url: /street-manager-docs/articles/business-rules-home.html
---
# API specification
{: .govuk-heading-xl}

Version {{ page.version }}
{: .govuk-body-l}

As of Version 1.12, this document details all the legally required API functions for integrating with Street Manager via the API. Future releases of V1 for the API will only include non-breaking changes to the API interface for additional functionality added after this point. See the 'Versions and Changes' section for details on previous versions.
{: .govuk-body}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

## Table of contents
{: .govuk-heading-l #table-of-contents}

<ul class="govuk-list govuk-list--number">
  <li><a class="govuk-link" href="#introduction">Introduction</a></li>
  <li><a class="govuk-link" href="#swagger-documentation">Swagger Documentation</a></li>
  <li><a class="govuk-link" href="#environments">Environments</a></li>
  <li><a class="govuk-link" href="#connecting">Connecting to the API services</a></li>
  <li><a class="govuk-link" href="#timing">Timing</a></li>
  <li><a class="govuk-link" href="#technical-overview">Technical Overview</a></li>
  <li><a class="govuk-link" href="#versioningandreleasemanagement">Versioning and Release Management</a></li>
  <li><a class="govuk-link" href="#testing">Testing</a></li>
  <li><a class="govuk-link" href="#security">Security</a></li>
  <li><a class="govuk-link" href="#sequencing">Sequencing</a></li>
  <li><a class="govuk-link" href="#access-and-permissions">Access and permissions</a></li>
  <li><a class="govuk-link" href="#resource-guide">Resource Guide</a></li>
  <li><a class="govuk-link" href="{{ site.baseurl }}/api-documentation/versions-and-changes/v1/changelog#v{{ page.version | replace: '.', '-' }}">Versions and Changes</a></li>
</ul>

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v1/introduction.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v1/swagger-documentation.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v1/environments.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v1/connecting-to-api-services.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v1/timing.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v1/technical-overview.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v1/versioning-and-release-management.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v1/testing.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v1/security.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v1/sequencing.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v1/access-and-permissions.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v1/resource-guide.md %}
