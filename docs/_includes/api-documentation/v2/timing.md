## Timing
{: .govuk-heading-l #timing}

All Street Manager environments use standard [NTP Pool](https://www.ntppool.org/en/) servers to synchronise their system clocks, ensuring they keep accurate and consistent time. Street Manager system time is UTC. Please provide accurate time zone information in API requests, not doing so can cause errors in some time based calculations such as works duration. To learn more about how Street Manager uses time and defines rules like working day, see the [Business rules](/street-manager-docs/articles/business-rules-version-1-33.html).
{: .govuk-body}
