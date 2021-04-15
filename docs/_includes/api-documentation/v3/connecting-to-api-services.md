## Connecting to the API services
{: .govuk-heading-l #connecting}

In order to connect to the Street Manager environments, your API client must be configured to connect to an environment-specific API URL via [HTTPS](#https).
{: .govuk-body}

It is important to note that the hostname within the URL contains a DNS CNAME. Due to the nature of Street Manager's highly-available cloud-native design, <b>the underlying IP addresses resolved from this CNAME are subject to change frequently and without notice.</b>
{: .govuk-body}

Therefore, if your IT department restrict outbound internet access from your API client to the Street Manager service via a perimeter firewall or some other means, it is important that access to Street Manager is whitelisted on the basis of the DNS CNAME and not the transient underlying IP addresses.
{: .govuk-body}
