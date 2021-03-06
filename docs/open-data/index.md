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
A publisher/subscriber model using Amazon Web Service's (AWS) [Simple Notification Service](https://aws.amazon.com/sns/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc)
sending notifications to subscribers when an applicable event occurs in Street Manager.
{: .govuk-body}

Users subscribing to the service will be required to host a POST endpoint capable of receiving
HTTP requests from [AWS's source IP range](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html).
{: .govuk-body}

Once this endpoint is configured a verification message will be sent to subscribers containing a confirmation link.
This link must be called by the subscriber in order to confirm their subscription.
{: .govuk-body}

Once the subscriber is verified any event will trigger a POST request to the specified subscriber endpoint with the
notification specification represented below.
{: .govuk-body}

Subscribers can filter messages on their consuming service,  e.g. Filter by `highway_authority_swa_code ` or `area` property.
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
  <li>Work start reverted</li>
  <li>Work stop reverted</li>
  <li>Permit submitted</li>
  <li>Permit granted</li>
  <li>Permit refused</li>
  <li>Permit revoked</li>
  <li>Permit cancelled</li>
  <li>Permit alteration granted</li>
  <li>Activity created</li>
  <li>Activity cancelled</li>
  <li>Activity updated</li>
</ul>

<hr class="govuk-section-break govuk-section-break--m govuk-section-break">

## Messages
{: .govuk-heading-m}

You can see the event data message format in the <a href="/street-manager-docs/api-documentation/json/event-notifier-message.json">Event Notifier Message JSON Schema</a>.
{: .govuk-body}

NOTE: This message specification is subject to extension with no prior notice. We recommend that subscribers do not use a serialisier for the JSON message and instead only extract properties they require for forward compatibility.
{: .govuk-body}

### Subscription Confirmation message
{: .govuk-heading-s}

Received when subscription is set up for each topic (event type) E.g. Permit.
{: .govuk-body}

We strongly recommend that you set up your endpoint to automically confirm subscriptions, by calling the `SubscribeURL`. For an example of how to set up your HTTPS endpoint to confirm a subscription, see <a href="https://github.com/departmentfortransport/street-manager-event-subscriber/tree/master/httpSubscriber">Example HTTP subscriber</a>
{: .govuk-body}

The `SubscribeURL` will stay active for 3 days, if the subscriber does not call it within that period they will need to re-register their interest in Open Data with DFT
{: .govuk-body}

In order to ensure only authorised messages are confirmed validate that the topic ARN (Amazon Resource Name) matches one of the following, before calling the `SubscribeURL`:
{: .govuk-body}

<ul class="govuk-list">
  <li><code>arn:aws:sns:eu-west-2:287813576808:prod-activity-topic</code> for activities</li>
  <li><code>arn:aws:sns:eu-west-2:287813576808:prod-permit-topic</code> for permits</li>
</ul>

If the subscriber only wishes to recieve notifications from one of the topics simply ignore the confirmation message from the undesired topic and no additional messages will be recieved for that event stream.
{: .govuk-body}

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

### Notification messages
{: .govuk-heading-s}
<ul class="govuk-list">
  <li>Received when an event occurs.</li>
  <li>The <code>Message</code> property can be of type Permit/Activity notification message. Examples of these can be found in the sections below.</li>
  <li>The <code>MessageAttributes</code> property can be used to filter messages by the following fields: <code>area</code>, <code>ha_org</code>, <code>activity_type</code>, <code>promoter_org</code>, <code>usrn</code>. These fields will also exist on the <code>Message</code> property and descriptions of each can be found in the <a href="/street-manager-docs/api-documentation/json/event-notifier-message.json">Event Notifier Message JSON Schema</a>.</li>
</ul>

```
{
  "Type" : "Notification",
  "MessageId" : "GUID",
  "TopicArn" : "TOPIC ARN",
  "Message" : "{\"event_reference\":678,\"event_type\":\"WORK_START\",\"object_data\":{\"work_reference_number\":\"0000218889274\",\"permit_reference_number\":\"0000218889274-01\",\"promoter_swa_code\":\"STPR\",\"promoter_organisation\":\"Smoke Test Promoter\",\"highway_authority\":\"CITY OF WESTMINSTER\",\"works_location_coordinates\":\"POINT(527155.3328125 182227.946386719)\",\"street_name\":\"CHURCH STREET\",\"area_name\":\"CHURCH STREET\",\"work_category\":\"Minor\",\"traffic_management_type\":\"Road closure\",\"proposed_start_date\":\"2020-06-23T23:00:00.000Z\",\"proposed_start_time\":null,\"proposed_end_date\":\"2020-06-27T23:00:00.000Z\",\"proposed_end_time\":null,\"actual_start_date_time\":\"2020-06-24T10:11:00.000Z\",\"actual_end_date_time\":null,\"work_status\":\"Works in progress\",\"usrn\":\"8400794\",\"highway_authority_swa_code\":\"5990\",\"work_category_ref\":\"minor\",\"traffic_management_type_ref\":\"road_closure\",\"work_status_ref\":\"in_progress\",\"activity_type\":\"Section 58\",\"is_ttro_required\":\"No\",\"is_covid_19_response\":\"No\",\"works_location_type\":\"Cycleway, Footpath\",\"permit_conditions\":\"NCT01a, NCT01b, NCT11a\",\"road_category\":\"3\",\"is_traffic_sensitive\":\"Yes\",\"is_deemed\":\"No\",\"permit_status\":\"permit_modification_request\",\"town\":\"LONDON\"},\"event_time\":\"2020-06-24T14:21:44.091Z\",\"object_type\":\"PERMIT\",\"object_reference\":\"0000218889274-01\",\"version\":1}",
  "Timestamp" : "2020-06-24T14:22:01.847Z",
  "SignatureVersion" : "1",
  "Signature" : "MESSAGE SIGNATURE",
  "SigningCertURL" : "https://sns.eu-west-2.amazonaws.com/SimpleNotificationService-a86cb10b4e1f29c941702d737128f7b6.pem",
  "UnsubscribeURL" : "https://sns.eu-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:<TOPIC-ARN>:0d59a03a-d105-4da1-ae5f-875b99b3472e",
  "MessageAttributes" : {
    "area" : {"Type":"String","Value":"CHURCH STREET"},
    "ha_org" : {"Type":"String","Value":"5990"},
    "activity_type" : {"Type":"String","Value":"Section 58"},
    "promoter_org" : {"Type":"String","Value":"STPR"},
    "usrn" : {"Type":"Number","Value":"8400794"}
  }
}
```

<hr class="govuk-section-break govuk-section-break--m govuk-section-break">

### Permit notification message
{: .govuk-heading-s}

Events: Work start, Work stop, Work start reverted, Work stop reverted, Permit submitted, Permit granted, Permit refused, Permit revoked, Permit cancelled, Permit alteration granted
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
    "proposed_start_time": "2020-06-10T13:50:00.000Z",
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
    "works_location_type": "Cycleway, Footpath",
    "permit_conditions": "NCT01a, NCT01b, NCT11a",
    "road_category": "3",
    "is_traffic_sensitive": "Yes",
    "is_deemed": "No",
    "permit_status": "permit_modification_request",
    "town": "LONDON"
  },
  "event_time": "2020-06-04T08:00:00.000Z",
  "object_type": "PERMIT",
  "object_reference": "TSR1591199404915-01",
  "version": 1
}
```

<hr class="govuk-section-break govuk-section-break--m govuk-section-break">

### Activity notification message
{: .govuk-heading-s}

Events: Activity created, Activity cancelled, Activity updated
{: .govuk-body}

Example:
{: .govuk-body}
```
{
  "event_reference": 529771,
  "event_type": "ACTIVITY_CREATED",
  "object_data": {
    "activity_reference_number": "ARN-5990-85775436",
    "usrn": "8401426",
    "street_name": "Fake Street",
    "town": "London",
    "area_name": "MARYLEBONE HIGH STREET",
    "road_category": "4",
    "activity_coordinates": "LINESTRING(501251.53 222574.64,501305.92 222506.65)",
    "activity_name": "London Marathon",
    "activity_type": "event",
    "activity_type_details": "Activity type details",
    "start_date": "2020-06-10T00:00:00.000Z",
    "start_time": "2020-06-10T14:30:00.000Z",
    "end_date": "2020-06-11T00:00:00.000Z",
    "end_time": "2020-06-11T09:00:00.000Z",
    "activity_location_type": "Cycleway, Footpath",
    "activity_location_description": "Description of activity location",
    "traffic_management_type": "road_closure",
    "traffic_management_required": "Yes",
    "collaborative_working": "Yes"
    "cancelled": "Yes"
    "highway_authority": "CITY OF WESTMINSTER",
    "highway_authority_swa_code": "5990",
  },
  "event_time": "2020-06-04T08:00:00.000Z",
  "object_type": "ACTIVITY",
  "object_reference": "ARN-5990-85775436",
  "version": 1
}
```

<hr class="govuk-section-break govuk-section-break--m govuk-section-break">

## Registration and onboarding approach
{: .govuk-heading-m}
This section outlines the onboarding approach.
{: .govuk-body}

<ol class="govuk-list govuk-list--number">
  <li>Configure a POST endpoint which is accessible by AWS's Simple Notification Service (SNS). See <a href="https://github.com/departmentfortransport/street-manager-event-subscriber/tree/master/httpSubscriber">Example HTTP subscriber</a></li>
  <li>Register to Open Data by providing an endpoint following the instructions on the <a href="https://www.gov.uk/guidance/find-and-use-roadworks-data">Open Data registration page</a></li>
  <li>Accept Terms of Use</li>
  <li>A subscriber is added to the relevant topics</li>
  <li>Subscriber makes a GET request to the <code>SubscribeURL</code> in the confirmation message from SNS</li>
  <li>Subscriber verify message contents using the signature before processing</li>
  <li>Subscriber processes messages</li>
</ol>

<hr class="govuk-section-break govuk-section-break--m govuk-section-break">

## Testing
{: .govuk-heading-m}
All subscriptions use production environment events from the live service. To test your service you may subscribe your test environment URL to the feed.
{: .govuk-body}

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
