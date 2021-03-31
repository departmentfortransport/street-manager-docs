## Swagger Documentation
{: .govuk-heading-l #swagger-documentation}

The services APIs are documented and defined using <a href="https://swagger.io/docs/specification/about/">OpenAPI Specification Version 2 (Swagger)</a>. This allows developers to get the full technical detail for the API endpoints, including Request/Response object definitions. The Swagger JSON includes comments for field validation rules and references to the business rules. You can use the files to <a href="https://swagger.io/tools/swagger-codegen/">generate interface code</a> for your chosen language.
{: .govuk-body}

The Swagger JSON files for each API are available below:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><a href="json/work-swagger.json">Work API JSON</a></li>
  <li><a href="json/reporting-swagger.json">Reporting API JSON</a></li>
  <li><a href="json/lookup-swagger.json">Street Lookup API JSON</a></li>
  <li><a href="json/geojson-swagger.json">GeoJSON API JSON</a></li>
  <li><a href="json/party-swagger.json">Party API JSON</a></li>
  <li><a href="json/export-swagger.json">Data Export API JSON</a></li>
</ol>

You can see the Swagger definitions rendered as HTML on the SANDBOX environment:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li><a href="https://api.sandbox.manage-roadworks.service.gov.uk/v2/work/docs/">Work API</a></li>
  <li><a href="https://api.sandbox.manage-roadworks.service.gov.uk/v2/reporting/docs/">Reporting API</a></li>
  <li><a href="https://api.sandbox.manage-roadworks.service.gov.uk/v2/lookup/docs/">Street Lookup API</a></li>
  <li><a href="https://api.sandbox.manage-roadworks.service.gov.uk/v2/geojson/docs/">GeoJSON API</a></li>
  <li><a href="https://api.sandbox.manage-roadworks.service.gov.uk/v2/party/docs/">Party API</a></li>
  <li><a href="https://api.sandbox.manage-roadworks.service.gov.uk/v2/export/docs/">Data Export API</a></li>
</ol>

**Please be aware of the following:**
{: .govuk-body}

If you attempt to validate the above swagger files using the online tool <a href="https://editor.swagger.io"> https://editor.swagger.io </a> or `swagger-cli`, you may see schema errors. Please note we are aware of this issue and it will not stop you from being able to generate mock server/clients. We aim to fix this in a future version.
{: .govuk-body}

Swagger UI does not display all description text for enumerations and child elements, instead check each of the swagger.json files above for full description text.
{: .govuk-body}

In the Work API several request definitions contain `internal_user_identifier` and `internal_user_name`. Please see <a class="govuk-link" href="#delegated-users">Works API - Delegated Users section</a> for details.
{: .govuk-body}
