---
layout: default
title: Open Data Overview
---
# Open Data Overview
{: .govuk-heading-xl}
Street Manager is offering near real-time notification of events which occur in the service.
{: .govuk-body}

## Approach
{: .govuk-heading-l}
A publisher/subscriber model using Amazon's [Simple Notification Service](https://aws.amazon.com/sns/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc)
sending notifications to subscribers when an applicable event occurs in Street Manager.
{: .govuk-body}

Users subscribing to the service will be required to host a POST endpoint capable of recieving
HTTP requests from [Amazon's source IP range](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html).
{: .govuk-body}

Once this host endpoint is configured a verification message will be sent to subscribers containing a confirmation link.
This link must be called by the subscriber in order to confirm their subscription.
{: .govuk-body}

Once the subscriber is verified any event will trigger a POST request to the specified subscriber endpoint with the
notification specification represented below.
{: .govuk-body}

## Sample data
{: .govuk-heading-l}
### Confirmation message format
{: .govuk-heading-m}
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

### Permit notification message format
{: .govuk-heading-m}
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
    "works_location_coordinates": "Point: 527914.64,181739.78",
    "street_name": "Fake Street",
    "area_name": "London",
    "work_category": "Standard",
    "traffic_management_type": "Road closure",
    "proposed_start_date": "03-06-2020",
    "proposed_start_time": "13:50",
    "proposed_end_date": "17-06-2020",
    "proposed_end_time": null,
    "actual_start_date": "04-06-2020 09:00",
    "actual_end_date": null,
    "work_status": "Works in progress",
    "usrn": "8401426",
    "highway_authority_swa_code": "5990",
    "work_category_ref": "standard",
    "traffic_management_type_ref": "road_closure",
    "work_status_ref": "in_progress",
    "activity_type": "Remedial works",
    "is_ttro_required": "No"
  },
  "event_time": "2020-06-04T08:00:00.000Z",
  "object_type": "PERMIT",
  "object_reference": "TSR1591199404915-01",
  "version": 1
}
```