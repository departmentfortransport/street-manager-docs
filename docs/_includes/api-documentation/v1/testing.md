## Testing
{: .govuk-heading-l #testing}

#### Environments and usage
{: .govuk-heading-s}

See the <a href="#environments">Environments</a> section for details on the environments. If you require non-functional performance or security testing please contact Street Manager support to agree scope, volumes and scheduling beforehand, as this may have an impact on other users and each environment has specific rate limiting and protective controls which may invalidate your tests.
{: .govuk-body}

#### Recommended testing strategy
{: .govuk-heading-s #recommended-testing-strategy}

Our recommendation for organisations who want to start testing Street Manager is to get access to the SANDBOX environment and test in collaborative groups that reflect their normal operational area and actions. This allows more realistic test scenarios and will help better understand how other organisations plan to use Street Manager.
{: .govuk-body}

This will not always be possible and organisations may need to test using accounts for other organisations in order to test certain scenarios independently (e.g. a Utility company using a HA account to assess a permit they submitted). To enable this we will allow organisations to request accounts for other organisations with some restrictions to prevent conflicts in testing between organisations test data. See below for recommendations per type of organisation for independent testing.
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>
    <p class="govuk-body govuk-!-font-weight-bold">Highway Authorities</p>
    <p class="govuk-body">
    Use self permitting, submitting permits as a HA Planner and assessing permits under your own area.
    </p>
  </li>
  <li>
    <p class="govuk-body govuk-!-font-weight-bold">Promoters</p>
    <p class="govuk-body">
    Request an HA account for a HA which you normally interact with and submit permits using a specific Workstream which identifies your test permits from the HA's own test data. This allows the HA to differentiate between your test data and their own. Use your HA account to respond to your Workstream permits and test your scenarios. You will need permission from the HA to do this and must liaise with the HA to ensure your testing does not interfere with their testing.
    </p>
    <p class="govuk-body">
    If you can not find an appropriate HA to test with you can request a HA test account for Isles of Scilly HA ("COUNCIL OF THE ISLES OF SCILLY", 835, HJ) via the service desk. This will allow you to independently test scenarios for a limited set of streets.
    </p>
  </li>
  <li>
    <p class="govuk-body govuk-!-font-weight-bold">Contractors</p>
    <p class="govuk-body">
    Request your contractor organisation to be associated with a specific Promoter (or HA acting as Promoter for self permitting) in SANDBOX. Arrange with Promoter to create a Workstream for your test permits. If you need an HA account to assess your test permits you may request an HA account (same as a Promoter, see above).
    </p>
    <p class="govuk-body">
    If your users operate directly as users for a Promoter, managed by their organisation directly and not as contractors users working for many organisations under single account, you may request users for that Promoter and test under Workstreams based on your normal actions for the Promoter and should liaise with the Promoter during testing.
    </p>
  </li>
  <li>
    <p class="govuk-body govuk-!-font-weight-bold">Vendors/Non-SWA organisations</p>
    <p class="govuk-body">
    If you are not testing for a specific SWA Promoter/HA (e.g. developing API integration for your product) you may request accounts for a Promoter/HA organisation (with their permission) and test using specific Workstreams to isolate your test data from their own.
    </p>
  </li>
</ol>

#### Reporting issues
{: .govuk-heading-s}

In order to correct issues and bugs found in Street Manager we require specific information so we can trace and attempt to reproduce errors.
{: .govuk-body}

Details will be provided to you at onboarding regarding how to report issues, the format and information required.
{: .govuk-body}

#### Generating test client and server stubs
{: .govuk-heading-s}

It is possible to generate test clients and servers using the available API documentation (Swagger JSON) which can be retrieved directly from the exposed APIs in SANDBOX environments. This allows isolated testing of your integration without dependency on test environments and can speed up development.
{: .govuk-body}

[Swagger-codegen](https://swagger.io/tools/swagger-codegen/) supports generating client and server stubs for a variety of languages, see here for details. Below is an example of generating Java client and server stubs using the [Swagger-codegen](https://swagger.io/tools/swagger-codegen/) utility.
{: .govuk-body}

**Requires**
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>Java (tested with openjdk version "11.0.1" 2018-10-16)</li>
  <li>Maven for build</li>
  <li>Swagger Codegen</li>
</ol>

#### Client
{: .govuk-heading-s}

Generated with command:
{: .govuk-body}

<code>swagger-codegen generate -i swagger.json -l java -o ./streetmanager-apiclient-java</code>

The generated code for the template had a number of errors which required manual corrections.
{: .govuk-body}

Corrections:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>pom.xml - updated <java.version>1.7</java.version> to <java.version>1.8</java.version> to support annotations</li>
  <li>pom.xml - added dependency javax.annotation to replace deprecated class</li>
  <li>Find/Replace body@ApiParam to body,@ApiParam due to template error on generated clients</li>
  <li>Find/Replace new BigDecimal() to new BigDecimal(0)due to template error on generated tests</li>
</ol>

To build:
{: .govuk-body}

<code>mvn package</code>

#### Server
{: .govuk-heading-s}

Generated with command:
{: .govuk-body}

<code>swagger-codegen generate -i swagger.json -l spring -o ./streetmanager-apistub-java-spring<code>

The generated code for the template had a number of errors which required manual corrections.
{: .govuk-body}

Corrections:
{: .govuk-body}

<ol class="govuk-list govuk-list--bullet">
  <li>pom.xml - updated <java.version>1.7</java.version> to <java.version>1.8</java.version> to support annotations</li>
  <li>pom.xml - added dependencies for javax.xml.bind to replace deprecated class</li>
  <li>Find/Replace body\@ApiParam to body,\@ApiParam due to template error on generated controllers</li>
  <li>Find/Replace new BigDecimal() to new BigDecimal(0)due to template error on generated tests To run:</li>
</ol>

<code>
mvn package
java -jar target/swagger-spring-1.0.0.jar --server.port=8080
</code>
