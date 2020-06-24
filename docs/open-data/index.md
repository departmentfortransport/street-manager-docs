---
layout: default
title: Open Data Overview
---
# Open Data Overview
{: .govuk-heading-xl}
Street Manager is offering near real-time notification of events which occur in the service.
{: .govuk-body}

## Approach
{: .govuk-heading-m}
A publisher/subscriber model using Amazon's [Simple Notification Service](https://aws.amazon.com/sns/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc)
sending notifications to subscribers when an applicable event occurs in Street Manager.
{: .govuk-body}

Users subscribing to the service will be required to host a POST endpoint capable of recieving
HTTP requests from [Amazon's source IP range](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html).
{: .govuk-body}

Once this endpoint is configured a verification message will be sent to subscribers containing a confirmation link.
This link must be called by the subscriber in order to confirm their subscription.
{: .govuk-body}

Once the subscriber is verified any event will trigger a POST request to the specified subscriber endpoint with the
notification specification represented below.
{: .govuk-body}

<iframe width="560" height="315" src="https://www.youtube.com/embed/5ObhfGEQUu0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<hr class="govuk-section-break govuk-section-break--m govuk-section-break">

## Events
{: .govuk-heading-m}
### Events available
{: .govuk-heading-s}

The open data offering operates using an event driven model, this section describes the events which trigger an open
data notification.
{: .govuk-body}

### Events currently available
{: .govuk-heading-s}

<ul class="govuk-list">
  <li>Work start</li>
  <li>Work stop</li>
</ul>

### Upcoming Events
{: .govuk-heading-s}

<ul class="govuk-list">
  <li>Work start reverted</li>
  <li>Work stop reverted</li>
  <li>Work planned</li>
  <li>Activity planned</li>
</ul>

<hr class="govuk-section-break govuk-section-break--m govuk-section-break">

## Messages
{: .govuk-heading-m}

You can see the event data message format in the <a href="/street-manager-docs/api-documentation/json/event-notifier-message.json">Event Notifier Message JSON Schema</a>.
{: .govuk-body}

NOTE: This messagage specification is subject to extenstion with no prior notice. We recommend that subscribers do not use a serialisier for the JSON message and instead only extract properties they require for forward compatibility.
{: .govuk-body}

### Subscription Confirmation message
{: .govuk-heading-s}
<ul class="govuk-list">
  <li>Received when subscription is set up for each topic (event type) E.g. Work start.</li>
  <li>Subscription URL will stay valid for 3 days, after which you will need to re-register your interest in Open Data with DFT</li>
  <li>We strongly recommend that you set up your endpoint to automically confirm subscriptions. For an example of how to set up your HTTPS endpoint to confirm a subscription, see <a href="https://github.com/departmentfortransport/street-manager-event-subscriber/tree/master/httpSubscriber">Example HTTP subscriber</a></li>
</ul>

```
{
  "Type": "SubscriptionConfirmation",
  "MessageId": "GUID",
  "Token": "TOKEN",
  "TopicArn": "UNIQUE REFERENCE FOR SNS TOPIC",
  "Message": "You have chosen to subscribe to the topic <TOPIC ARN>\nTo confirm the subscription, visit the SubscribeURL included in this message.",
  "SubscribeURL": "SUBSCRIPTION URL",
  "Timestamp": "2020-06-04T10:05:15.215Z",
  "SignatureVersion": "1",
  "Signature": "MESSAGE SIGNATURE",
  "SigningCertURL": "https://sns.eu-west-2.amazonaws.com/SimpleNotificationService-a86cb10b4e1f29c941702d737128f7b6.pem"
}
```
<hr class="govuk-section-break govuk-section-break--m govuk-section-break">

### Permit notification message
{: .govuk-heading-s}

Events: Work start, Work stop
Upcoming events: Work start reverted, Work stop reverted, Work planned
{: .govuk-body}

Example:
{: .govuk-body}
```
{
  "event_reference": 529770,
  "event_type": "work-start",
  "object_data": {
    "work_reference_number": "TSR1591199404915",
    "permit_reference_number": "TSR1591199404915-01",
    "promoter_swa_code": "STPR",
    "promoter_organisation": "Smoke Test Promoter",
    "highway_authority": "CITY OF WESTMINSTER",
    "works_location_coordinates": "LINESTRING(501251.53 222574.64,501305.92 222506.65)",
    "street_name": "HIGH STREET NORTH",
    "area_name": "LONDON",
    "work_category": "Standard",
    "traffic_management_type": "Road closure",
    "proposed_start_date": "2020-06-10T00:00:00.000Z",
    "proposed_start_time": "13:50",
    "proposed_end_date": "2020-06-12T00:00:00.000Z",
    "proposed_end_time": null,
    "actual_start_date_time": "2020-06-11T10:11:00.000Z",
    "actual_end_date_time": null,
    "work_status": "Works in progress",
    "usrn": "8401426",
    "highway_authority_swa_code": "5990",
    "work_category_ref": "standard",
    "traffic_management_type_ref": "road_closure",
    "work_status_ref": "in_progress",
    "activity_type": "Remedial works",
    "is_ttro_required": "No",
    "is_covid_19_response" : "No",
    "works_location_type": "Cycleway, Footpath"
  },
  "event_time": "2020-06-04T08:00:00.000Z",
  "object_type": "PERMIT",
  "object_reference": "TSR1591199404915-01",
  "version": 1
}
```

<hr class="govuk-section-break govuk-section-break--m govuk-section-break">

### Activity notification message (Upcoming release)
{: .govuk-heading-s}

Upcoming events: Activity planned
{: .govuk-body}

Example:
{: .govuk-body}
```
{
  "event_reference": 529771,
  "event_type": "activity-planned",
  "object_data": {
    "activity_reference_number": "TSR1591199404915",
    "usrn": "8401426",
    "street_name": "Fake Street",
    "town": "London",
    "area_name": "MARYLEBONE HIGH STREET",
    "activity_coordinates": "LINESTRING(501251.53 222574.64,501305.92 222506.65)",
    "activity_name": "London Marathon",
    "activity_type": "Event",
    "start_date": "2020-06-10T00:00:00.000Z",
    "start_time": "2020-06-10T14:30:00.000Z",
    "end_date": "2020-06-11T00:00:00.000Z",
    "end_time": "2020-06-11T09:00:00.000Z",
    "traffic_management_type": "Road closure",
    "cancelled": "Yes"
    "highway_authority": "CITY OF WESTMINSTER",
    "highway_authority_swa_code": "5990",
    "activity_type_ref": "event",
    "traffic_management_type_ref": "road_closure"
  },
  "event_time": "2020-06-04T08:00:00.000Z",
  "object_type": "PERMIT",
  "object_reference": "TSR1591199404915-01",
  "version": 1
}
```

<hr class="govuk-section-break govuk-section-break--m govuk-section-break">

## Onboarding approach
{: .govuk-heading-m}
This section outlines the onboarding approach.
{: .govuk-body}

<ol class="govuk-list govuk-list--number">
  <li>Configure a POST endpoint which is accessible by AWS's Simple Notification Service (SNS). See <a href="https://github.com/departmentfortransport/street-manager-event-subscriber/tree/master/httpSubscriber"> Example HTTP subscriber </a></li>
  <li>Contact DFT using data.gov.uk landing page to register interest in Open Data, supplying address of POST endpoint</li>
  <li>Accept Terms of Use</li>
  <li>DFT adds a new subscriber to the relevant topics</li>
  <li>Subscriber makes a GET request to the <code>SubscribeURL</code> in the confirmation message from SNS</li>
  <li>Subscriber verify message contents using the signature before processing</li>
  <li>Subscriber processess messages</li>
</ol>

<hr class="govuk-section-break govuk-section-break--m govuk-section-break">

## Support
{: .govuk-heading-m}
If you need support using the Open Data API, please raise a request using the [service desk](https://streetmanager.atlassian.net/servicedesk/customer/portal/1/group/8/create/30).
{: .govuk-body}

<hr class="govuk-section-break govuk-section-break--m govuk-section-break">

## Stopping open data streaming
{: .govuk-heading-m}
If you would like to stop recieving Open Data, please raise a request using the [service desk](https://streetmanager.atlassian.net/servicedesk/customer/portal/1/create/31).
{: .govuk-body}
