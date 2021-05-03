---
layout: default
title: API specification V2.10.12
version: 2.10.12
business_rules_url: /street-manager-docs/articles/business-rules-home.html
---
# API specification
{: .govuk-heading-xl}

Version {{ page.version }}
{: .govuk-body-l}

This document details all the functions for integrating with Street Manager via the latest version of the API. See the 'Versions and Changes' section for more details on previous versions. The documentation for the stable version of the API is available <a class="govuk-link" href="{{ site.baseurl }}/api-documentation/">here</a>.
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
  <li><a class="govuk-link" href="{{ site.baseurl }}/api-documentation/versions-and-changes/v2/changelog#v{{ page.version | replace: '.', '-' }}">Versions and Changes</a></li>
</ul>

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v2/introduction.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v2/swagger-documentation.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v2/environments.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v2/connecting-to-api-services.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v2/timing.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v2/technical-overview.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v2/versioning-and-release-management.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v2/testing.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v2/security.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v2/sequencing.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v2/access-and-permissions.md %}

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

{% include api-documentation/v2/resource-guide.md %}
