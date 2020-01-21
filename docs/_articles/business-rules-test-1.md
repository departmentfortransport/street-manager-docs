---
layout: article
title: Business rules - Version 1.13
date: 2020-01-02T00:00:00.000Z
type: article
published: 'true'
status: publish
---
<!-- ==================================================== -->
# Business rules
<!-- ==================================================== -->

<span class="govuk-body-l" style="float:left">Version 1.13</span>

<span style="float:right">[Street Manager Glossary](https://departmentfortransport.github.io/street-manager-docs/articles/glossary.html)</span>

<span style="float:left;clear:both;">_&copy; Crown copyright 2020, except where otherwise stated._</span>

<br /><br /><br /><br />


<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />


<!-- ==================================================== -->
## Table of contents
<!-- ==================================================== -->

1. [General rules and validation](#1--general-rules-and-validation)<br />
  1.1. [Numbers](#11-numbers)<br />
  1.2. [Dates and times](#12-dates-and-times)<br />
  1.3. [Coordinates](#13-coordinates)<br />
  1.4. [USRN](#14-unique-street-reference-number-usrn)<br />
  1.5. [File upload size](#15-file-upload-size)<br />
  1.6. [Text character limits](#16-text-character-limits)<br />
2. [Workstreams](#2-workstreams)<br />
3. [Works submissions and applications](#3-works-submissions-and-applications)<br />
  3.1. [Works reference number (WRN)](#31-works-reference-number-wrn)<br />
  3.2. [Works statuses](#32-works-statuses)<br />
  3.3. [Forward plans](#33-forward-plans)<br />
  3.4. [PAA and permit applications (PA)](#34-paa-and-permit-applications-pa)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.1. [Permit reference number](#341-permit-reference-number)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.2. [Works types](#342-works-types)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.3. [Works categories](#343-works-categories)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.4. [Works activity types](#344-works-activity-types)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.5. [Adding PAA & PA](#345-adding-paa--pa)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.6. [Early start](#346-early-start)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.7. [PAA & PA assessment decision options](#347-paa--pa-assessment-decision-options)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.8. [PAA & PA response periods](#348-paa--pa-response-periods)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.9. [Cancelling PAA & PA](#349-cancelling-paa--pa)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.10. [PAA & PA statuses](#3410-paa--pa-statuses)<br />
4. [Change requests (CR)](#4-change-requests-cr)<br />
  4.1. [Change request reference number](#41-change-request-reference-number)<br />
  4.2. [Change request types](#42-change-request-types)<br />
  4.3. [Adding change requests](#43-adding-change-requests)<br />
  4.4. [Change request assessment decision options](#44-change-request-assessment-decision-options)<br />
  4.5. [Change request response period](#45-change-request-response-period)<br />
  4.6. [Cancelling change requests](#46-cancelling-change-requests)<br />
  4.7. [Change request statuses](#47-change-request-statuses)<br />
5. [Revoking a PA](#5-revoking-a-pa)<br />
6. [Delivering and executing works](#6-delivering-and-executing-works)<br />
  6.1. [Logging works start](#61-logging-works-start)<br />
  6.2. [Reverting works start](#62-reverting-works-start)<br />
  6.3. [Logging works stop](#63-logging-works-stop)<br />
  6.4. [Reverting works stop](#64-reverting-works-stop)<br />
  6.5. [Validity periods](#65-validity-periods)<br />
  6.6. [Changing the number of inspection units](#66-changing-the-number-of-inspection-units)<br />
7. [Viewing and managing records](#7-viewing-and-managing-records)<br />
  7.1. [Commenting on a works record](#71-commenting-on-a-works-record)<br />
  7.2. [Works history](#72-works-history)<br />
  7.3. [Map application](#73-map-application)<br />
  7.4. [Searching records](#74-searching-records)<br />
  7.5. [Advanced filtering](#75-advanced-filtering)<br />
  7.6. [Exporting records](#76-exporting-records)<br />
8. [Sites and reinstatements](#8-sites-and-reinstatements)<br />
  8.1. [Sites and site numbers](#81-sites-and-site-numbers)<br />
  8.2. [Reinstatement types](#82-reinstatement-types)<br />
  8.3. [Adding reinstatements](#83-adding-reinstatements)<br />
  8.4. [Making interim sites permanent](#84-making-interim-sites-permanent)<br />
  8.5. [Reinstatement end dates](#85-reinstatement-end-dates)<br />
  8.6. [Indicating when final site has been registered](#86-indicating-when-final-site-has-been-registered)<br />
9. [Activities](#9-activities)<br />
  9.1. [Activity reference number](#91-activity-reference-number)<br />
  9.2. [Activity statuses](#92-activity-statuses)<br />
  9.3. [Managing activities](#93-managing-activities)<br />
10. [Inspections and non-compliance](#10-inspections-and-non-compliance)<br />
  10.1. [Inspection reference number](#101-inspection-reference-number)<br />
  10.2. [Inspection types and categories](#102-inspection-types-and-categories)<br />
  10.3. [Inspection outcomes](#103-inspection-outcomes)<br />
  10.4. [Scheduling inspections](#104-scheduling-inspections)<br />
11. [Fixed penalty notice (FPN)](#11-fixed-penalty-notice-fpn)<br />
  11.1. [FPN reference number](#111-fpn-reference-number)<br />
  11.2. [FPN statuses](#112-fpn-statuses)<br />
12. [Lane rental](#12-lane-rental)<br />
  12.1. [Lane rental assessment or charge types](#121-lane-rental-assessment-or-charge-types)<br />
  12.2. [Adding a lane rental assessment to a PA](#122-adding-a-lane-rental-assessment-to-a-pa)<br />
13. [Fee reporting](#13-fee-reporting)<br />
<!-- 14. [Changes](#changes)<br /> -->

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />



<!-- ==================================================== -->
## 1.  General rules and validation
<!-- ==================================================== -->

### 1.1. Numbers

All numbers within Street Manager system are non-negative.


### 1.2. Dates and times

#### 1.2.1. Date and time format

All dates and times must match the ISO 8601 standard date format.

See GOV.UK guidance for date-times <https://www.gov.uk/government/publications/open-standards-for-government/date-times-and-time-stamps-standard>

#### 1.2.1. Calendar days

Street Manager calculates calendar days based on a 24 hour clock.

For example, the Street Manager system would consider the time period Monday 01:00 to Tuesday 23:00 as 2 calendar days.

#### 1.2.2. Calendar month

Street Manager calculates a calendar month as 28 calendar days for the purpose of deeming and early start.

### 1.3. Coordinates

Coordinates must be a GeoJSON geometry (using British National Grid, easting and northing pairs).



### 1.4. Unique Street Reference Number (USRN)

USRN must be a value between 100001 and 99999999.

_(Previously section 16.3 in Business rules v0.1 draft)_


### 1.5. File upload size

* Maximum file size must be less than 5MB.
* All files on a single permit application must total less than 100mb.

_(Previously section 19 in Business rules v0.1 draft)_



### 1.6. Text character limits

#### 1.6.1. Username field

The max length for username fields is 50 characters.

#### 1.6.2. Single-line text fields

Max length is 100 characters.

These include:
* Promoter contact details
* Approved contractor
* Contractor details
* Secondary contact email
* Project reference number
* Early start pre-approval authoriser
* Promoter org
* Promoter contact details
* Approved contractor
* Contractor contact details
* Street name
* Area name
* Project reference number
* Inspection call log field
* Inspection call log reference
* Inspector name
* FPN authorised officer
* FPN officer contact details
* Activity name
* Activity type details
* Contact name
* Contact details
* Street special designation code

#### 1.6.3. Multi-line text areas

Text areas for large comment fields are limited to the max length of 1500 characters.

All other text areas are limited to 500 characters. These include:
* Description of work
* Works location description
* Collaboration details
* Description of collaborative works* Early start pre approval details
* Early start pre approval reason 
* Additional info (apply for works) / comments (revoke) / details (lane rental assessment / collaborative working) 
* Revoke reason
* Permit discount reason
* Reinstatement location description
* Inspection outcome details
* Inspection call log summary
* FPN offence details
* FPN status reason
* Activity location description
* Cancellation reason



<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />





<!-- ==================================================== -->
## 2. Workstreams
<!-- ==================================================== -->

The Street Manager system will, by default, create a workstream with the prefix of ‘000’ for every organisation. Before users start raising works in Street Manager (production), their organisation **must** set up their workstreams.

When organisations set up their workstreams, they can choose to allocate numerical prefixes between 1 - 999.
See works reference number (WRN) section for details on how the workstream prefix will be used when raising works.

_(Previously section 15 & 15.1 in Business rules v0.1 draft)_


<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />



<!-- ==================================================== -->
## 3. Works submissions and applications
<!-- ==================================================== -->

### 3.1. Works reference number (WRN)

* The WRN is generated in the following format: {SWA prefix} {workstream prefix} {promoter works reference}
  * **SWA prefix** - Two characters of the related organisation from the SWA code list.
  * **Workstream prefix** - A minimum of three numbers with leading zeros where applicable e.g. '001'. See the workstream section for more details.
  * **Promoter works reference** - Between 1 to 19 characters generated by the Street Manager system or provided by the user. If generated by Street Manager, the promoter works reference will consist of a randomly generated 8-digit number (following the unique WRN rule).
* The WRN including the prefix must be unique in the Street Manager system e.g. the same organisation may have two works records with the same 'promoter works reference' if the works were created under two different workstreams.
* WRNs are not case-sensitive and displayed as uppercase.
* WRNs can only include the following special characters: dashes (-) or underscores (_) to separate characters
* Works records and WRNs are created automatically alongside other records such as forward plans and permit applications.

_(Previously section 1.1 in Business rules v0.1 draft)_  




<br />

### 3.2. Works statuses

<div class="center polaroid50 container"><img src="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20Works%20statuses.jpg" alt="Street Manager - Works statuses" width="100%" />
A diagram of works statuses</div>


<br />

### 3.3. Forward plans

* Forward plans are for giving advance notice of major works only.
* It is only possible to add forward plans for a start date in the present or future, and with an end date in the future.
* Forward plans can be progressed to PAA, edited or cancelled while in the ‘Raised’ status. 
* All forward plan details can be edited with the exception of namely the workstream, the highway authority and the USRN.
* When progressed to a PAA, the forward plan's status automatically gets set to 'Progressed'. 

<div class="center polaroid50 container"><img src="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20Forward%20plan%20statuses.jpg" alt="Street Manager Forward plan statuses" width="100%" />
A diagram of forward plan statuses</div>

_(Previously section 22 in Business rules v0.1 draft)_  

<br /><br />




### 3.4. PAA and permit applications (PA)


#### 3.4.1. Permit reference number

* The permit reference number is generated in the following format: {WRN} - {numerical suffix}
    * **WRN** - See the works reference number section for more details.
    * **Numerical suffix** - A minimum of two numbers starting from 01 for the first PAA or PA created on the works record and counts up consecutively for each additional PA (i.e. -01, -02, -03 etc).
* A permit reference number is automatically generated when a PAA or permit application has been submitted.
* The permit reference number is the reference number that promoters needs to display on on-site permit boards.

_(Previously section 1.2 in Business rules v0.1 draft)_  

<br />


#### 3.4.2. Works types

* Works types are as follows:
    * **Planned** - Minor, Standard, and Major works and are not Immediate
    * **Immediate** - See the [NRSWA \(link available from SM Glossary\)](https://departmentfortransport.github.io/street-manager-docs/articles/glossary.html) for more details on immediate works.  The immediate works type (i.e. immediate urgent and immediate emergency) will be determined based on the answer to "Is there a risk of damage to people or property?"

_(Previously section 1.3 in Business rules v0.1 draft)_  

<br />


#### 3.4.3. Works categories

* Works categories are as follows:
    * **Minor**
    * **Standard**
    * **Major PAA/PA**

See the [NRSWA \(link available from SM Glossary\)](https://departmentfortransport.github.io/street-manager-docs/articles/glossary.html) for definitions and duration for each works category.

<div class="center polaroid50 container"><a href="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20Works%20category%20logic.jpg"><img src="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20Works%20category%20logic.jpg" alt="Street Manager - Works category logic" width="100%" /></a>
A diagram of Works category logic</div>

_(Previously section 1.4 in Business rules v0.1 draft)_  

<br />


#### 3.4.4. Works activity types

* Works activity types available are as follows:
    * **Core sampling:** Coring is the method of testing by removing a sample of the reinstatement (a core) finished/completed reinstatement and is part of the inspection process.  
    * **Disconnection or alteration of supply:** Work type that involves the disconnection or re-routing of supplies.
    * **Diversionary works:** Works undertaken by a Works Promoter to move or divert its existing apparatus to enable 3rd party works to be happen.  
    * **Highway improvement works**
    * **Highway repair and maintenance works**  
    * **New service connection:** (coming soon) Works type undertaken to connect new supplies usually for individual customers.
    * **Optional permit (no fee):** (coming soon) e.g. for traffic management. HA may add discount to permit fee if applicable.
    * **Permanent reinstatement:** Works undertaken by a works promoter to replace interim reinstatement with a permanent reinstatement. 
    * **Remedial works:** Works undertaken by a works promoter where the initial reinstatement was not compliant with the specification. 
    * **Section 50**
    * **Statutory infrastructure works**
    * **Utility asset works:** Works undertaken by a Utility Works Promoter as part of a rehabilitation or replacement scheme. These are usually planned works. 
    * **Utility repair and maintenance works:** Works undertaken by a Utility Works Promoter in repairing or maintaining its asset. These works are usually short duration works or works that are not planned.
    * **Works for rail purposes**
    * **Works for road purposes:** (coming soon) As defined in section 86(2) of NRSWA, "works for road purposes means works of any of the following descriptions executed in relation to a highway: (a) works for the maintenance of the highway; (b) any works under powers conferred by Part V of the Highways Act 1980 (improvement); (c) the erection, maintenance, alteration or removal of traffic signs on or near the highway; or (d) the construction of a crossing for vehicles across a footway or grass verge or the strengthening or adaptation of a footway for use as a crossing for vehicles"



_(Previously section 1.14 in Business rules v0.1 draft)_




#### 3.4.5. Adding PAA & PA

* PAs may be added resulting in a new works record or added to an existing works record.
* PAs can only be added to an existing works record if the works record does not contain a Minor/Standard/Major PA that is 'in progress' or 'submitted'.
* Major PAA must be the first application on a works record i.e. cannot be added as a second application on an existing works record.
* A major PAA may be progressed to PA if it is in 'submitted' or 'granted' status.

_(Previously section 1.12 in Business rules v0.1 draft)_ 
 


#### 3.4.6. Early start

* If a PAA/PA does not provide sufficient advance notice (based on the proposed start date provided), including when the proposed start date is altered during a change request, the promoter will be required to specify if they have pre-approval for an early start and additional information.
* The early start calculation will be carried out immediately after the proposed start and end dates have been entered during the apply for PAA/PA process.
* The early start calculation will include the day of the application is made.
* The minimum notice period by works category are as follows:

| Works category | Minimum notice period  |
|:---------------|:-----------------------|
| Major PAA      | 3 calendar months (84 calendar days in Street Manager)|
| Major PA       | 10 working days        |
| Standard       | 10 working days        |
| Minor          | 3 working days         |
| Immediate      | Not applicable         |

_(Previously section 1.9 in Business rules v0.1 draft)_ 
 
<br />



#### 3.4.7. PAA & PA assessment decision options

* The assessment decision options for PAA/PA are as follows:

| Assessment decision  | Applicable for |
|:---------------------|:---------------|
| Grant                | All PAA/PA     |
| Refuse               | All PAA/PA     |
| Modification request | PA only        |

* The assessment decision may be changed to grant or refuse on PAs that have a status of 'modification requested' and no change requests awaiting assessment.

* Street Manager will automatically set a record's assessment decision under the following circumstances:
    * Immediate works that are started and completed before an assessment decision has been manually submitted will have the assessment decision of "Granted (auto)".
    * When a major PA is assessed, the associated PAA will take on the matching assessment decision if the an assessment decision has not been manually submitted for the PAA. e.g. if a major PA is refused, the PAA will have the assessment decision of "Refused (auto)".

_(Previously section 25.3 in Business rules v0.1 draft)_ 


#### 3.4.8. PAA & PA response periods

* The response period is the time period that a Highway Authority (HA) has to assess and evaluate a PAA/PA (or any other promoter request) prior to the PAA/PA deeming.
* The response period will begin from the next working day after application submission.
* The response period for each works category are as follows:

| Works category | Response period |
|:---------------|:------------------|
| Major PAA      | 28 calendar days  |
| Major PA       | 5 working days    |
| Standard       | 5 working days    |
| Minor          | 2 working days    |
| Immediate      | 2 working days    |

_(Previously section 1.8 & 1.10 in Business rules v0.1 draft)_ 

<br />


#### 3.4.9. Cancelling PAA & PA

* PAA applications and planned PA may be cancelled if in 'submitted' (pre-assessment) or 'granted' statuses and works start has not been logged.
* Immediate PA may be cancelled whilst works is 'in progress' (immediate works are automatically placed into in progress upon creation).
* Immediate PA may not be cancelled if
    * works stop has been logged
    * reinstatement(s) have been added
    * the immediate PA has been revoked
* If a PA with a change request awaiting assessment is cancelled, the outstanding change request will also be cancelled automatically.
* The PAA/PA status and works status will be set to 'Cancelled'.

_(Previously section 7 in Business rules v0.1 draft)_ 



<br />

#### 3.4.10. PAA & PA statuses

_(Previously section 1.5 & 10 in Business rules v0.1 draft)_ 

##### 3.4.10.1. PAA statuses

<div class="center polaroid50 container"><img src="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20PAA%20statuses.jpg" alt="Street Manager - PAA statuses" width="100%" />
A diagram of PAA statuses</div>

##### 3.4.10.2. PA statuses

<div class="center polaroid50 container"><a href="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20PA%20statuses.jpg"><img src="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20PA%20statuses.jpg" alt="Street Manager - PA statuses" width="100%" /></a>
A diagram of PA statuses</div>


<br />




<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />





<!-- ==================================================== -->
## 4. Change requests (CR)
<!-- ==================================================== -->

### 4.1. Change request reference number

* The change request reference number is generated in the following format: {permit reference number} -CR- {numerical suffix}
    * See the **permit reference number** section for more details.
    * Numerical suffix - A minimum of two numbers starting from 01 for the first change request created on the PA and counts up consecutively for each additional change request (i.e. -01, -02, -03 etc).

### 4.2. Change request types

* The change request types are as follows:

| Change request type | Available for | Criteria | Assessment required? |
|:--------------------|:---------------------|:---------|:------------------------|
| Promoter imposed change (modified application) | Promoter | PA is awaiting assessment | No |
| Promoter change request | Promoter |  PA in status 'Granted', 'In progress' or 'Modification Requested' | Yes |
| Works extension | Promoter | Same criteria as 'Promoter change request' and includes a change to the proposed end date | Yes |
| HA imposed change | HA | PA in status 'Granted' or 'In progress' | No |

* For promoter imposed and HA imposed change types, the changes made will be applied automatically to the PA with the change request record available to see what has changed historically, and these change request types are not chargeable.
* A PA's response period is not affected by promoter imposed changes (i.e. changes while the PA is awaiting assessment).
* A works extension change request may include other changes in addition to a change to the proposed end date.
* HA imposed change is currently limited to adding or removing conditions.
* Promoter change requests include the change requests submitted as a response to a 'modification request' assessment decision.

_(Previously section 5.1, 5.3, 5.4, 5.8 & 26 in Business rules v0.1 draft)_ 




### 4.3. Adding change requests

* Each PA may have only one change request awaiting assessment. 
* A change request may be added to PAs that are not 'Refused', 'Revoked' or 'Closed'
* The works category may be updated if the works duration is changed.
* Change requests may not be added to a PAA.
* The following cannot be changed on a PA: 
    * Permit reference number or works reference number
    * USRN
    * USRN address e.g. road/street
    * Road category
    * Primary notice authority the PA is submitted to
* Proposed start date may not be changed if works start has been logged.
* All change requests show the original details and changed values.

_(Previously section 5.2, 5.3, 5.4 & 5.6 in Business rules v0.1 draft)_ 





### 4.4. Change request assessment decision options

* The assessment decision options for change requests are as follows:

| Assessment decision | Applicable for CR type | Assessment decision impact |
|:------------------|:--------------------|:---|
| Grant | Promoter change request & works extension | Changes will be applied to the PA. |
| Refuse | Promoter change request & works extension | Changes will not be applied to the PA. Original PA will remain unchanged in status and contents i.e. the PA is not refused as a result of a change request assessment. | 
| Grant with duration challenge | Works extension | A reasonable period end date and reason for the duration challenge must be provided. The new proposed end date, reasonable period end date and any other changes requested will be applied to the PA. |

* Note: Currently, granting or refusing a change request created as a response to 'modification request' will not grant or refuse the the related PA or affect it in any way. The PA will need to be assessed separately (changes to this are coming soon).


_(Previously section 5.1, 5.4, 5.5 & 25.3 in Business rules v0.1 draft)_ 



### 4.5. Change request response period

* The response period for change requests is 2 working days. The change request will deem after this period and the changes will be applied to the PA.

_(Previously section 5.7 in Business rules v0.1 draft)_ 




### 4.6. Cancelling change requests

* It is currently not possible to cancel change requests.



### 4.7. Change request statuses

<div class="center polaroid50 container"><a href="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20Change%20request%20statuses.jpg"><img src="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20Change%20request%20statuses.jpg" alt="Street Manager - Change request statuses" width="100%" /></a>
A diagram of Change request statuses</div>





<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />









<!-- ==================================================== -->
## 5. Revoking a PA
<!-- ==================================================== -->

* A PA may be revoked if the PA has been granted and before works stop has been logged.
* If a PA is revoked 
    * before works start has been logged, the PA will remain in the final status of 'Revoked' where no further actions can be performed on the PA by the promoter.
    * after works start has been logged, the promoter may request a change, log works stop and add reinstatements.
    * with a change request awaiting assessment on a PA, the change request will be revoked automatically.

_(Previously section 6.1 in Business rules v0.1 draft)_ 


<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />



<!-- ==================================================== -->
## 6. Delivering and executing works
<!-- ==================================================== -->

### 6.1. Logging works start

* To log a works start
    * PA must be in 'granted' status,
    * date and time must be provided, and
    * works cannot be started in the future or before the proposed start.

_(Previously section 11.1 in Business rules v0.1 draft)_ 


### 6.2. Reverting works start

* Works start may be reverted if
    * works stop is not logged for the current PA
    * a reinstatement has not been logged for the current PA
    * for planned works (i.e. not immediate works)
    * the PA has not been revoked.

_(Previously section 21.1 in Business rules v0.1 draft)_ 




### 6.3. Logging works stop

* To log a works stop
    * works must be in 'in progress' status,
    * date and time must be provided, and
    * date must occur on or after the actual start date
    * date must occur today or a date in the past

_(Previously section 11.2 in Business rules v0.1 draft)_ 



### 6.4. Reverting works stop

* Works stop may be reverted if
    * a PA has not been added on the same works record after the works stop was logged.

_(Previously section 21.2 in Business rules v0.1 draft)_ 




### 6.5. Validity periods

* Only applicable for works on non-traffic sensitive category 3 or 4 roads.
    * Non-traffic sensitivity is determined either by there being no traffic-sensitive designations for the works' USRN or if there are, none were selected by the promoter as applicable to the works.
* If a works' actual start date is later than the proposed start date and within validity period, Street Manager will shift the proposed end date accordingly maintaining the same works duration as originally proposed starting from the actual start date.
* The validity periods for each works category are as follows (includes original start date):

| Works category | Validity period        |
|:---------------|:-----------------------|
| Major PAA      | Currently out of scope |
| Major PA       | 5 working days         |
| Standard       | 5 working days         |
| Minor          | 2 working days         |
| Immediate      | Not applicable         |

_(Previously section 13 in Business rules v0.1 draft)_ 



### 6.6. Changing the number of inspection units

* The number of inspection units will be added when the first reinstatement is submitted and may be changed at any point thereafter on the works record level.
     * The number of inspection units is defaulted to 1.

_(Previously section 11.4 in Business rules v0.1 draft)_ 




<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />






<!-- ==================================================== -->
## 7. Viewing and managing records
<!-- ==================================================== -->

### 7.1. Commenting on a works record

* Users associated with a works can add a comment on the works record. Users associated with a works include being from the HA the works has been submitted to, being from (or working on behalf of) the promoter organisation that submitted the works and with access to the associated workstream.
* A topic must be selected when adding a comment. The comment topics are as follows:
    * General
    * FPN
    * Inspection
    * Section 74
    * Overrun warning (only available to HA)

_(Previously section 8 in Business rules v0.1 draft)_


### 7.2. Works history

* Works history is available for each works record showing all events related to the works record. The works history includes:
    * Date and time
    * Topic
    * Details (description of the event)
    * Username
* Works history topics include:
    * Forward Plan
    * PAA
    * Permit
    * Inspection
    * Scheduled Inspection
    * FPN
    * Reinstatement
    * Comment
    * Section 81

### 7.3. Map application

* The date filter is automatically defaulted with the current date in the 'From' field and 14 days after the current date in the 'To' field.
* For performance reasons, the map application is limited to 
    * displaying a maximum of 500 results, and
    * displaying results within three zoom levels higher than the default

_(Previously section 16 in Business rules v0.1 draft)_


### 7.4. Searching records

* Search functionality is available on the following list pages:
    * Permit applications
    * Change requests
    * Works records
    * PAAs to progress
    * Forward plans
    * Registered reinstatements
    * Section 81s
* Search by works reference number, permit reference number or road/street
    * Partial search compatible - Street Manager will return results that contain the search term and does not need the full reference or street.
* Search and filtering functionality may be used in combination.

_(Previously section 17.1 in Business rules v0.1 draft)_


### 7.5. Advanced filtering

* Advanced filtering is available on the following list pages:
    * Permit applications
    * Change requests
    * Works records
    * Forward plans
* Each list page have different filter options available.
* Note: the URL/web address may be shared or bookmarked/saved with filters currently applied.

* Advanced filters and descriptions below:

| Filter name              | Logic/description |
|:-------------------------|:------------------|
| Works start / end date   | Note: due to be changed soon to have the start and end dates with their own To and From to give the user more control |
| Awaiting assessment      | Applications awaiting assessment - the records often have the status of 'Submitted' |
| Working within traffic-sensitive times | A traffic-sensitive designation has been selected by the promoter on the PA. |
| High impact traffic management | Includes applications with any of the following traffic management types: Road closure; Contraflow; Lane closure; Convoy working; Multi-way signals; Two-way signals |
| Not submitted final registration | Final site registered = "No". On works record list: return the works records where this condition is met. On PA list: return all PAs associated with the works records where this condition is met. |
| Works with excavation | On works record list: return works records where latest PA indicating that excavation is required. On PA list: return any PAs where excavation is required. |
| Deemed | PA or change request that have deemed. |
| Early start | Proposed timings have indicated that the PAA/PA is due for an early start. On PA list: return any PAs where early start details were completed. On change request list: return any change requests associated to a PA where early start details were completed. |
| Lane rental charges (potentially) apply | Work takes place on a lane rental applicable road (indicated in the designations), and/or a lane rental assessment has been added with an outcome of "Chargeable" or "Potentially chargeable". |
| Lane rental charges not agreed | A lane rental assessment has been added with an outcome of "Chargeable" and charges have not been agreed. |
| Duration extension | On change request list only: change requests with works extension request |

_(Previously section 17.2 in Business rules v0.1 draft)_




### 7.6. Exporting records

* Export functionality is available on the following list pages:
    * Permit applications
    * Change requests (coming soon)
    * Works records
    * PAAs to progress
    * Forward plans
    * Fixed penalty notices (FPN)
    * Inspections
    * Registered reinstatements (coming soon)
    * Comments (coming soon)



<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />






<!-- ==================================================== -->
## 8. Sites and reinstatements
<!-- ==================================================== -->


### 8.1. Sites and site numbers

* A new site will be added automatically when 'Add a reinstatement' is selected on the 'works record' level.
* For each works record, the site numbers begin at 1 and counts up consecutively for each additional site (i.e. Site 1, Site 2, Site 3 etc).
* All historical reinstatement details are available for each site on the individual 'site record' pages.


### 8.2. Reinstatement types

* The reinstatement types are as follows:
    * Excavation
    * Bar holes
    * Core holes
    * Pole testing
* Reinstatement measurements and whether the reinstatement is a final reinstatement must be provided for excavation reinstatement type.
* Number of holes must be provided for bar holes, core holes and pole testing reinstatement types.

_(Previously section 4.7 in Business rules v0.1 draft)_






### 8.3. Adding reinstatements

* To add a reinstatement, the latest PA must be in 'In progress or 'Closed' status and require excavation.
* Reinstatement date must be:
    * the current date or in the past
    * on or after the actual start date
    * on or before the actual end date if works stop has been logged
* To update a site with a new reinstatement, select 'Add another reinstatement' on the 'site record' level.
* This functionality may be used to correct a mistake on the previous reinstatement.
  + Note: if a mistake is made where the Reinstatement state 'Interim' is selected instead of 'permanent' as a new PA would be required to rectify this mistake. See the business rules regarding making an interim site permanent for more information.


_(Previously section 4.2, 4.3, 4.5 & 4.6 in Business rules v0.1 draft)_





### 8.4. Making interim sites permanent

* If an existing site is in 'interim' state, a new PA must be raised to add a 'permanent' reinstatement to the existing site.

_(Previously section 4.4 in Business rules v0.1 draft)_







### 8.5. Reinstatement end dates

* If the reinstatement state is 'interim', the interim period end date is 6 months from the reinstatement date e.g. if an interim reinstatement date is 26/10/18 then the end date should be 25/04/19
* If the reinstatement state is 'permanent' and
    * depth is less than or equal to 1.5m, the end date (guarantee expiry date) is 2 years from the reinstatement date e.g. if reinstatement added 13/06/18, end date is 12/06/20.
    * depth is greater than 1.5m, the end date (guarantee expiry date) is 3 years from the reinstatement date e.g. if reinstatement added 13/06/18, end date is 12/06/21.

_(Previously section 4.1 in Business rules v0.1 draft)_




### 8.6. Indicating when final site has been registered

* Final site registered may be set to 'Yes' as part of a reinstatement submission or directly on the works record level.
* Final site registered should be indicated for each PA where excavation was required.

_(Previously section 4.3 in Business rules v0.1 draft)_


<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />








<!-- ==================================================== -->
## 9. Activities
<!-- ==================================================== -->

### 9.1. Activity reference number

* The activity reference number is generated in the following format: ARN- {SWA number} - {numerical suffix}
    * **SWA number** - The four-digit portion of the organisation's SWA code i.e. the SWA code without the two-character prefix.
    * **Numerical suffix** - A minimum of three numbers starting from 001 for the first activity by the organisation and counts up consecutively for each additional activity (i.e. -001, -002, -003 etc).



### 9.2. Activity statuses

<div class="center polaroid50 container"><img src="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20Activity%20statuses.jpg" alt="Street Manager - Activity statuses" width="100%" />
A diagram of activity statuses</div>

_(Previously section 23.2 in Business rules v0.1 draft)_ 



### 9.3. Managing activities

* HAs may add activities for their organisation at any point.
* The activity types are as follows:
    * Skips
    * Scaffolding
    * Hoarding
    * Crane/mobile platform
    * Event
    * Section 50
    * Section 58
    * Compound
    * Other (enter a brief description)
* HAs may change or cancel an activity added by their own organisation.
    * The Activity Location or activity area cannot be changed.


<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />






<!-- ==================================================== -->
## 10. Inspections and non-compliance
<!-- ==================================================== -->

### 10.1. Inspection reference number

* The inspection reference number is generated in the following format: {WRN}-INSP-{numerical suffix}
    * **WRN** - See the works reference number section for more details.
    * **Numerical suffix** - A minimum of two numbers starting from 01 for the first inspection created on the works record and counts up consecutively for each additional inspection (i.e. -01, -02, -03 etc).

_(Previously section 3.1 in Business rules v0.1 draft)_ 



### 10.2. Inspection types and categories

* Inspections may be added at any stage of a works record.

| Inspection type | Inspection categories |
|:----------------|:----------------------|
| Live Site                | Category A<br />Site occupancy<br />Conditions<br />Third party<br />Routine |
| Reinstatement            | Category B<br />Category C<br />Third party<br />Routine |
| Non-compliance follow up | Joint site visit<br />Follow up<br />Follow up completion |
| Section 81               | Not applicable |

_(Previously section 3.2 & 3.5 in Business rules v0.1 draft)_ 



### 10.3. Inspection outcomes

* If a failed inspection outcome is selected for Live site, reinstatement or non-compliance follow up inspection types, details of non-compliant areas must be provided.
* If a failed inspection outcome is selected for Section 81, the inspection may advise if the site was 'made safe by HA'.
* Additional information and evidence/photos may be provided for all outcomes.
* The inspection outcomes available for inspection types and categories are as below:

| Inspection type | Inspection outcomes |
|:----------------|:--------------------|
| Live Site (excl. Site occupancy & Conditions), Reinstatement and Non-compliance follow up (excl. Joint site visit) | Passed<br />Failed — high<br />Failed — low<br />Unable to complete inspection |
| Live Site type with Site occupancy category | Works stopped - Apparatus remaining<br />Works in progress - No carriageway incursion<br />Works in progress<br />Works stopped<br />Unable to complete inspection |
| Live Site type with Conditions category | Passed<br />Non compliant (with conditions)<br />Unable to complete inspection |
| Non-compliance follow up with Joint site visit category | Further inspections required<br />Agreed site compliance<br />Unable to complete inspection |

_(Previously section 3.3 & 3.5 in Business rules v0.1 draft)_ 




### 10.4. Scheduling inspections

* One inspection may be scheduled against a works record.
* A scheduled inspection consists of a date, time (optional) and inspection type & category.
* The date provided must be today or in the future. If time is provided, it must occur in the future.
* A scheduled inspection may be cancelled from the works record.
* A scheduled inspection that has not been cancelled will be automatically removed when any inspection is submitted.
* A scheduled inspection will remain on the works record until it is cancelled or an inspection is added regardless of the date and time the inspection was scheduled for.
* A new scheduled inspection may be created as part of any add an inspection process. Alternatively, A new scheduled inspection may be created directly on the works record level.

_(Previously section 3.6 in Business rules v0.1 draft)_ 





<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />





<!-- ==================================================== -->
## 11. Fixed penalty notice (FPN)
<!-- ==================================================== -->

### 11.1. FPN reference number

* The FPN reference number is generated in the following format: {WRN}-FPN-{numerical suffix}
    * **WRN** - See the works reference number section for more details.
    * **Numerical suffix** - A minimum of two numbers starting from 01 for the first FPN created on the works record and counts up consecutively for each additional FPN (i.e. -01, -02, -03 etc).

_(Previously section 2.2 in Business rules v0.1 draft)_ 

### 11.2. FPN statuses

* The FPN statuses are as follows:
    * **Issued** - The initial status of an FPN issued by a HA. (Applicable for all FPNs)
    * **Accepted** - Promoter may change to this FPN status when to acknowledge receipt of FPN. (Optional status change)
    * **Disputed** - Promoter may change to this FPN status when in discussion with the HA about the validity of an FPN. (Optional status change)
    * **Withdrawn** - HA may change to this FPN status if HA agree to withdraw FPN. (if applicable)
    * **Paid** - HA acknowledge that the promoter payment (no discount) has been received. (if applicable)
    * **Paid (Discounted)** - HA acknowledge that the promoter payment (with discount) has been received. (if applicable)


<div class="center polaroid50 container"><a href="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20FPN%20statuses.jpg"><img src="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20FPN%20statuses.jpg" alt="Street Manager - FPN statuses" width="100%" /></a>
A diagram of FPN statuses</div>


_(Previously section 2.1 in Business rules v0.1 draft)_ 








<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />







<!-- ==================================================== -->
## 12. Lane rental
<!-- ==================================================== -->

### 12.1. Lane rental assessment or charge types

* The lane rental charge types and descriptions are as follows:

| Lane rental type | Description |
|:-----------------|:------------|
| Chargeable       | Works will incur a lane rental charge |
| Potentially chargeable | Flagged or HA to follow up for inspection |
| Charges waived   | Charges do not need to be paid e.g. due to collaborative works |
| Exempt           | Works fall outside the lane rental scheme |
| Charges not applicable to works | Not applicable |

_(Previously section 18.1 in Business rules v0.1 draft)_ 


### 12.2. Adding a lane rental assessment to a PA

* A lane rental assessment or charge may be added on any PA at any time.
* If chargeable, the charge band/tier and number of chargeable days may be optionally provided. Chargeable days must be greater than or equal to 1 and in whole numbers.

_(Previously section 18.1 in Business rules v0.1 draft)_ 


<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />






<!-- ==================================================== -->
## 13. Fee reporting
<!-- ==================================================== -->

* A fee report is available showing individual entries for every chargeable transaction within a specified date range. Dates queried are the date of the chargeable transaction.
* The chargeable transactions included are as follows:
    * Granting of a PA
    * PAA progressed to PA - note, this occurs upon receipt of the PA, not when it is granted
    * Granting of a change request
    * A change in works category
* The maximum date range for the fee report is 31 calendar days.
* The fee report results are sorted by date of the chargeable transaction in ascending order.

* The following will be provided to support organisations calculating the fees due:
    * **Road category**
    * **Is street is traffic-sensitive** - are there any traffic-sensitive designations for the works' USRN?
    * **Is works is traffic-sensitive** - were any traffic-sensitive designations selected by the promoter on the PA?

* Note: The works category field will be populated with the PAA/PA's current works category at the time the report is run as opposed to showing the works category of the PAA/PA at the time the chargeable transaction took place.
* For example, if a PA is granted then soon after a works extension was also granted changing it from a standard to a major PA, there would be three transactions for this PA in the fee report:
    * granting of a PA
    * granting of a change request 
    * change in works category
    * The works category field for all three of these transactions will be 'major'

* Not included: inspection chargeable transactions; fee amounts

_(Previously section 14.1 in Business rules v0.1 draft)_ 


<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />


<!-- ==================================================== -->
## 14. Section 81 (work in progress)
<!-- ==================================================== -->


### 14.1. Section 81 reference number

* The section 81 reference number is generated in the following format: {WRN}-S81-{numerical suffix}
    * **WRN** - See the works reference number section for more details.
    * **Numerical suffix** - A minimum of two numbers starting from 01 for the first FPN created on the works record and counts up consecutively for each additional FPN (i.e. -01, -02, -03 etc).

### 14.2. Managing section 81

* The following can be added to a section 81 record:
    * Scheduled inspections
    * Inspections
    * FPNs
    * Files
    * Comments
* The following cannot be added to a section 81 record:
    * Forward plans
    * PAA/PAs
    * Reinstatements


### 14.3. section 81 statuses

<div class="center polaroid50 container"><a href="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20S81%20statuses.jpg"><img src="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20S81%20statuses.jpg.jpg" alt="Street Manager - S81 statuses" width="100%" /></a>
A diagram of S81 statuses</div>



<!-- ==================================================== -->
## 15. Historic works (work in progress)
<!-- ==================================================== -->

* A new historical works record may be initiated by the adding of an inspection or FPN for works recorded outside of Street Manager.
* PAs may be created on an existing historical works record.
    * Workstream to be set when creating the first PA.
* 


<!-- ==================================================== -->
## 16. Non-notifiable works (work in progress)
<!-- ==================================================== -->

* PAs may be created on an existing non-notifiable works record.
    * Workstream to be set when creating the first PA.




<!-- ==================================================== -->
## 17. HS2 (work in progress)
<!-- ==================================================== -->

* HS2 functionality will only be available to HAs marked as HS2-applicable.






<!--
<!-- ==================================================== 
## Changes
<!-- ==================================================== 

| Section | Change comment |
|:--------|:---------------|
| 1.      | Added |
| 1.1.    | Updated |
| 1.2.    | Updated |

-->











<!-- ==================================================== -->
<!-- ==========DO NOT DELETE ANYTHING BELOW THIS========= -->
<!-- ==================================================== -->



<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
div.polaroid50 {
  width: 50%;
  background-color: white;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
div.container {
  text-align: center;
  padding: 0px 20px 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
}
em {
  font-size: 12px;
}
</style>
