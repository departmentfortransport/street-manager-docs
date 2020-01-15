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

<!--span style="float:right">[Business rules - All versions](https://departmentfortransport.github.io/street-manager-docs/articles/glossary-change-history.html)</span--><br /><br />

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />


<!-- ==================================================== -->
## Table of contents
<!-- ==================================================== -->

1. [General rules and validation](#1--general-rules-and-validation)<br />
  1.1. [Numbers](#11-numbers)<br />
  1.2. [Dates and times](#12-datetime)<br />
  1.3. [Coordinates](#13-coordinates)<br />
  1.4. [USRN](#14-usrn)<br />
  1.5. [Text character limits](#15-charlimits)<br />
2. [Workstreams](#2-workstreams)<br />
3. [Works submissions and applications](#3-works-submissions-and-applications)<br />
  3.1. [Works reference number (WRN)]()<br />
  3.2. [Works statuses]()<br />
  3.2. [Forward plans](#32-forwardplans)<br />
  3.3. [PAA and permit applications (PA)](#3-paa)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.1. [Permit reference number]()<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.2. [Works types]()<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.3. [Works categories]()<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.4. [Works activity types]()<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.5. [Adding PAA & PA]()<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.6. [Early start]()<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.7. [PAA & PA assessment options]()<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.8. [PAA & PA response periods]()<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.9. [Cancelling PAA & PA]()<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.10. [PAA & PA statuses]()<br />
4. [Changing applications and permits](#changes)<br />
  x.x [Change request reference number]()<br />
  x.x [Change request types]()<br />
  x.x [Adding change requests]()<br />
  x.x [Change request assessment options]()<br />
  x.x [Change request response period]()<br />
  x.x [Cancelling change requests]()<br />
  x.x [Change request statuses]()<br />
5. [Revoking a permit]()<br />
6. [Delivering and executing works]()<br />
7. [Viewing and managing records]()<br />
8. [Sites and reinstatements]()<br />
  x.x [Sites and site numbers]()<br />
  x.x [Reinstatement types]()<br />
  x.x [Adding reinstatements]()<br />
  x.x [Making interim sites permanent]()<br />
  x.x [Reinstatement end dates]()<br />
  x.x [Registering final sites]()<br />
9. [Activities]()<br />
  x.x [Activity reference number]()<br />
10. [Inspections and non-compliance]()<br />
  x.x [Inspection reference number]()<br />
  x.x [Inspection types and categories]()<br />
  x.x [Inspection outcomes]()<br />
  x.x [Scheduling inspections]()<br />
11. [Fixed penalty notice (FPN)]()<br />
  x.x [FPN reference number]()<br />
  x.x [FPN statuses]()<br />
12. [Fee reporting]()<br />
  x.x []()<br />
  x.x []()<br />
  x.x []()<br />
  x.x []()<br />
13. [Changes](#changes)<br />


X. []()<br />
  x.x []()<br />
      x.x.x. []()<br />

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />



<!-- ==================================================== -->
## 1.  General rules and validation
<!-- ==================================================== -->

### 1.1. Numbers

All numbers within Street Manager system are non-negative.


### <span id="1-datetime">1.2. Dates and times</span>

All dates and times must match the ISO 8601 standard date format.

See GOV.UK guidance for date-times <https://www.gov.uk/government/publications/open-standards-for-government/date-times-and-time-stamps-standard>


### 1.3. Coordinates

Coordinates must be a GeoJSON geometry (using British National Grid, easting and northing pairs).

<br />

### 1.4. Unique Street Reference Number (USRN)

USRN must be a value between 100001 and 99999999.

_(Previously section 16.3 in Business rules v0.1 draft)_






<br />

### 1.3. Text character limits

#### 1.3.1. Username field

The max length for username fields is 50 characters.

#### 1.3.2. Single-line text fields

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

#### 1.3.3. Multi-line text areas

Text areas for large comment fields are limited to the max length of 1500 characters.

All other text areas are limited to 500 characters. These include:
* Description of work
* Works location description
* Collaboration details
* Description of collaborative works
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

Before users start raising works in Street Manager, their organisation must set up their workstreams. These were previously known as ‘operational districts’.

The Street Manager system will, by default, create the prefix ‘000’ for every organisation. When organisations set up their workstreams, they can choose to allocate numerical prefixes between 1 - 999.
See works reference number (WRN) section for details on how the workstream prefix will be used when raising works.

_(Previously section 15 & 15.1 in Business rules v0.1 draft)_


<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />



<!-- ==================================================== -->
## 3. Works submissions and applications
<!-- ==================================================== -->

### 3.1. Works reference number (WRN)

* The WRN is generated in the following format: {SWA prefix} {workstream prefix} {promoter works reference}
  * **SWA prefix** consists of two characters for the related organisation from the SWA code list.
  * **Workstream prefix** - See the workstream section for more details.
  * **Promoter works reference** - Between 1 to 19 characters generated by the Street Manager system or provided by the user.
* The WRN including the prefix must be unique in the Street Manager system e.g. the same organisation may have two works records with the same 'promoter works reference' if the works were created under two different workstreams.
* WRNs are not case-sensitive and displayed as uppercase.
* WRNs can only include the following special characters: dashes (-) or underscores (_) to separate characters
* Works records and WRNs are created automatically alongside other records such as forward plans and permit applications.

_(Previously section 1.1 in Business rules v0.1 draft)_  




<br />

### 3.2. Works statuses

< insert diagram >


<br />

### 3.2. Forward plans

* It is only possible to add forward plans for a start date in the present or future, and with an end date in the future.
* Forward plans can be progressed to PAA, edited or cancelled while in the ‘Raised’ status. 
* All forward plan details can be edited with the exception of certain details, namely the workstream, the highway authority and the USRN.
* When progressed to a PAA, the forward plan's status automatically gets set to 'Progressed'. 

<div class="center polaroid50 container"><img src="https://departmentfortransport.github.io/street-manager-docs/business-rules/images/Street%20Manager%20-%20Forward%20plan%20statuses.jpg" alt="Street Manager Forward plan statuses" width="100%" />
A diagram of forward plan statuses</div>

_(Previously section 22 in Business rules v0.1 draft)_  

<br /><br />




### 3.3. PAA and permit applications (PA)


#### 3.3.2. Permit reference number

* The permit reference number is generated in the following format: {WRN} - {numerical suffix}
    * **WRN** - See the works reference number section for more details.
    * **Numerical suffix** - A minimum of two numbers starting from 01 for the first PAA or permit application created on the works record and counts up consecutively for each additional permit application (i.e. -01, -02, -03 etc).
* A permit reference number is automatically generated when a PAA or permit application has been submitted.
* The permit reference number is the reference number that promoters needs to display on on-site permit boards.

_(Previously section 1.2 in Business rules v0.1 draft)_  

<br />


#### 3.3.3. Works types

* Works types are as follows:
    * **Planned** - Minor, Standard, and Major works that are not Immediate
    * **Immediate** - See the [NRSWA \(link from SM Glossary\)](https://departmentfortransport.github.io/street-manager-docs/articles/glossary.html) for more details on immediate works.  The immediate works type (i.e. immediate urgent and immediate emergency) will be determined based on the answer to "Is there a risk of damage to people or property?"

_(Previously section 1.3 in Business rules v0.1 draft)_  

<br />


#### 3.3.4. Works categories

* Works categories are as follows:
    * **Minor**
    * **Standard**
    * **Major PAA/PA**

See the [NRSWA \(link from SM Glossary\)](https://departmentfortransport.github.io/street-manager-docs/articles/glossary.html) for definitions and duration for each works category.

< Insert diagram >

_(Previously section 1.4 in Business rules v0.1 draft)_  

<br />


#### 3.3.8. Works activity types

* See the [Street Manager glossary](https://departmentfortransport.github.io/street-manager-docs/articles/glossary.html) for the works activity types.

_(Previously section 1.14 in Business rules v0.1 draft)_




#### 3.3.7. Adding PAA & PA

* PA's may be added from the Home page resulting in a new works record or added to an existing works record.
* PA's can only be added to an existing works record if the works record does not contain a Minor/Standard/Major PA that is 'in progress' or 'submitted'.
* Major PAA must be the first application on a works record i.e. cannot be added as a second application on an existing works record.
* A major PAA may be progressed to PA if it is in 'submitted' or 'granted' status.

_(Previously section 1.12 in Business rules v0.1 draft)_ 
 
<br />


#### 3.3.7. Progressing PAA to PA

* 


#### 3.3.5. Early start

* If a permit application does not provide sufficient advance notice (based on the proposed start date provided) including when the proposed start date is altered during a change request, the promoter will be required to specify if they have pre-approval for an early start and additional information.
* The early start calculation will be carried out immediately after the proposed start and end dates have been entered during the apply for permit process.
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



#### 3.3.9. PAA & PA assessment options

* x



#### 3.3.6. PAA & PA response periods

* The response period is the time period that a Highway Authority (HA) has to assess and evaluate a permit application (or any other promoter request) prior to the permit deeming.
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


#### 3.3.9. Cancelling PAA & PA

* PAA applications and planned PA may be cancelled if in 'submitted' (pre-assessment) or 'granted' statuses and works start has not been logged.
* Immediate PA may be cancelled whilst works is 'in progress' (immediate works are automatically placed into in progress upon creation).
* Immediate PA may not be cancelled if
    * works stop has been logged
    * reinstatement(s) have been added
    * the immediate PA has been revoked
* If an immediate PA with a change request awaiting assessment is cancelled, the change request be cancelled automatically.
* Promoters may only cancel PAA & PA that they have full permissions to.
* The PAA or PA status and works status will be set to 'Cancelled'.

_(Previously section 7 in Business rules v0.1 draft)_ 



<br />

#### 3.3.1. PAA & PA statuses

_(Previously section 1.5 & 10 in Business rules v0.1 draft)_ 

##### 3.3.1.1. PAA statuses

< Insert diagram >

##### 3.3.1.2. Permit statuses

< Insert diagram >


<br />




<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />





<!-- ==================================================== -->
## Changing applications and permits
<!-- ==================================================== -->

### 4.x. Change request reference number

* The change request reference number is generated in the following format: {permit reference number} -CR- {numerical suffix}
    * See the **permit reference number** section for more details.
    * Numerical suffix - A minimum of two numbers starting from 01 for the first change request created on the PA and counts up consecutively for each additional change request (i.e. -01, -02, -03 etc).

### 4.x. Change request types

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

_(Previously section 5.1, 5.3, 5.4, 5.8 & 26 in Business rules v0.1 draft)_ 




### 4.x. Adding change requests

* Each PA may have only one change request awaiting assessment. 
* A change request may be added to PA's that are not 'Refused', 'Revoked' or 'Closed'
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





### 3.x. Change request assessment options

* The assessment options for change requests are as follows:

| Assessment option | Change request type | Assessment option description |
|:------------------|:--------------------|:---|
| Grant | Promoter change request & works extension | Changes will be applied to the PA. |
| Refuse | Promoter change request & works extension | Changes will not be applied to the PA. Original PA will remain unchanged in status and contents i.e. the PA is not refused as a result of a change request assessment. | 
| Grant with duration challenge | Works extension | HA to provide a reasonable period end date and reason for the duration challenge. The new proposed end date, reasonable period end date and any other changes requested will be applied to the PA. |

_(Previously section 5.1, 5.4 & 5.5 in Business rules v0.1 draft)_ 



### 4.x. Change request response period

* The response period for change requests is 2 working days. The change request will deem after this period and the changes will be applied to the PA.

_(Previously section 5.7 in Business rules v0.1 draft)_ 




### 4.x. Cancelling change requests

* Promoters may only cancel change requests for permit applications that they have full permissions to.


### 4.x. Change request statuses

< insert diagram >





<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />









<!-- ==================================================== -->
## Revoking a permit
<!-- ==================================================== -->

* HA may revoke a permit that has been granted and before works stop has been logged.
* If a PA is revoked 
    * before works start has been logged, the PA will remain in the final status of 'Revoked' where no further actions can be performed on the permit by the promoter.
    * after works start has been logged, the promoter may request a change, log works stop and add reinstatements.
    * with a change request awaiting assessment on a PA, the change request be revoked automatically.

_(Previously section 6.1 in Business rules v0.1 draft)_ 


<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />



<!-- ==================================================== -->
## Delivering and executing works
<!-- ==================================================== -->

### Logging works start

* To log a works start
    * PA must be in 'granted' status,
    * date and time must be provided, and
    * works cannot be started in the future or before the proposed start.

_(Previously section 11.1 in Business rules v0.1 draft)_ 


### Logging works stop

* To log a works stop
    * works must be in 'in progress' status,
    * date and time must be provided, and
    * date must occur on or after the actual start date
    * date must occur today or a date in the past

_(Previously section 11.2 in Business rules v0.1 draft)_ 


### Validity periods

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



### Changing the number of inspection units

* The number of inspection units will be added when the first reinstatement is submitted.
    * The number of inspection units is defaulted to 1.
* The number of inspection units may be changed without submitting another reinstatement.

_(Previously section 11.4 in Business rules v0.1 draft)_ 


Rules

Log works stop - can you log a stop date that is before a reinstatement date that was added whilst the works was in progress?

Rules

Revert works start / works stop

Inspection units

Validity period

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />






<!-- ==================================================== -->
## Viewing and managing records
<!-- ==================================================== -->

### Commenting on a works record

* Users associated with a works can add a comment on the works record. Users associated with a works include being from the HA the works has been submitted to, being from (or working on behalf of) the promoter organisation that submitted the works and with access to the associated workstream.
* A topic must be selected when adding a comment. The comment topics are as follows:
    * General
    * FPN
    * Inspection
    * Section 74
    * Overrun warning (only available to HA)

_(Previously section 8 in Business rules v0.1 draft)_


### Works history

* Works history is available for each works record showing all events related to the works record. The works history includes:
    * Date and time
    * Topic
    * Details (description of the event)
    * Username


### Map application

* The date filter is automatically defaulted with the current date in the 'From' field and 14 days after the current date in the 'To' field.
* For performance reasons, the map application is limited to 
    * displaying a maximum of 500 results, and
    * displaying results within three zoom levels higher than the default

_(Previously section 16 in Business rules v0.1 draft)_


### Searching records

* Search functionality is available on the following list pages:
    * Permit applications
    * Change requests
    * Works records
    * PAAs to progress
    * Forward plans
    * Registered reinstatements
* Search by works reference number, permit reference number or road/street
    * Partial search compatible - Street Manager will return results that contain the search term and does not need the full reference or street.
* Search and filtering may be used in combination.

_(Previously section 17.1 in Business rules v0.1 draft)_


### Exporting records

* Export functionality is available on the following list pages:
    * Permit applications
    * Change requests
    * Works records
    * PAAs to progress
    * Forward plans
    * Fixed penalty notices (FPN)
    * Inspections
    * Registered reinstatements (coming soon)
    * Comments (coming soon)

### Advanced filtering

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
| Awaiting assessment      | Applications awaiting assessment - often the records have the status of 'Submitted' |
| Lane rental - Chargeable | x |
| Lane rental - Potentially chargeable | x |
| Lane rental - Charges waived | x |
| Lane rental - Exempt     | x |
| Lane rental - Charges not applicable | x |
| Working within traffic-sensitive times | A traffic-sensitive designation has been selected by the promoter on the PA. |
| High impact traffic management | Traffic management type: Road closure; Contraflow<br />Lane closure; Convoy working; Multi-way signals; Two-way signals |
| Not submitted final registration | On works record list: return the works records where final registration has not been added. On PA list: return PAs < tbc test results > . |
| Works with excavation | On works record list: return works records where latest ???? permits indicating that excavation is required. On PA list: return any PAs where excavation is required. |
| Deemed | PA or change request that have deemed. |
| Early start | Proposed timings have indicated that the permit is due for an early start. On PA list: return any PAs where early start details were completed. On change request list: return any change requests associated to a PA where early start details were completed. |
| Lane rental charges (potentially) apply | Work takes place on a lane rental applicable road (indicated in the designations), and/or a lane rental assessment has been added with an outcome of "Chargeable" or "Potentially chargeable". |
| Lane rental charges not agreed | A lane rental assessment has been added with an outcome of "Chargeable" and charges have not been agreed. |
| Duration extension | On change request list only: change requests with works extension request |

_(Previously section 17.2 in Business rules v0.1 draft)_



List pages, search and filtering

Expiring interim page is xxx




Map Filtering

Map Search
Topic



<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />






<!-- ==================================================== -->
## Sites and reinstatements
<!-- ==================================================== -->


### 4.x. Sites and site numbers

* A new site will be added automatically when 'Add a reinstatement' is selected on the 'works record' level.
* For each works record, the site numbers begin at 1 and counts up consecutively for each additional site (i.e. Site 1, Site 2, Site 3 etc).
* All historical reinstatement details are available for each site on the individual 'site record' pages.


### 4.x. Reinstatement types

* The reinstatement types are as follows:
    * Excavation
    * Bar holes
    * Core holes
    * Pole testing
* Reinstatement measurements and whether the reinstatement is a final reinstatement must be provided for excavation reinstatement type.
* Number of holes must be provided for bar holes, core holes and pole testing reinstatement types.

_(Previously section 4.7 in Business rules v0.1 draft)_






### 4.x. Adding reinstatements

* To add a reinstatement, the latest permit must be in 'In progress or 'Closed' status and require excavation.
* Reinstatement date must be:
    * the current date or in the past
    * on or after the actual start date
    * on or before the actual end date if works stop has been logged
* To update a site with a new reinstatement, select 'Add another reinstatement' on the 'site record' level.
* This functionality may be used to correct a mistake on the previous reinstatement.
  + Note: if a mistake is made where the Reinstatement state 'Interim' is selected instead of 'permanent' as a new permit would be required to rectify this mistake. See the business rules regarding making an interim site permanent for more information.


_(Previously section 4.2, 4.3, 4.5 & 4.6 in Business rules v0.1 draft)_





### 4.x. Making interim sites permanent

* If an existing site is in 'interim' state, a new permit must be raised to add a 'permanent' reinstatement to the existing site.

_(Previously section 4.4 in Business rules v0.1 draft)_







### 4.x. Reinstatement end dates

* If the reinstatement state is 'interim', the interim period end date is 6 months from the reinstatement date e.g. if an interim reinstatement date is 26/10/18 then the end date should be 25/04/19
* If the reinstatement state is 'permanent' and
    * depth is less than or equal to 1.5m, the end date (guarantee expiry date) is 2 years from the reinstatement date e.g. if reinstatement added 13/06/18, end date is 12/06/20.
    * depth is greater than 1.5m, the end date (guarantee expiry date) is 3 years from the reinstatement date e.g. if reinstatement added 13/06/18, end date is 12/06/21.

_(Previously section 4.1 in Business rules v0.1 draft)_


### 4.x. Registering final sites

* Final sites may be registered by marking 'Are you registering the final site?' as 'Yes' when adding a reinstatement.
* Alternatively, select 'Change' on the works record level against 'Final site registered'.

_(Previously section 4.3 in Business rules v0.1 draft)_


<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />








<!-- ==================================================== -->
## Activities
<!-- ==================================================== -->

### 4.x. Activity reference number

* The activity reference number is generated in the following format: ARN- {SWA number} - {numerical suffix}
    * **SWA number** - The four-digit portion of the organisation's SWA code i.e. the SWA code without the two-character prefix.
    * **Numerical suffix** - A minimum of three numbers starting from 001 for the first activity by the organisation and counts up consecutively for each additional activity (i.e. -001, -002, -003 etc).

<br />



<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />






<!-- ==================================================== -->
## Inspections and non-compliance
<!-- ==================================================== -->

### 4.x. Inspection reference number

* The inspection reference number is generated in the following format: {WRN}-INSP-{numerical suffix}
    * **WRN** - See the works reference number section for more details.
    * **Numerical suffix** - A minimum of two numbers starting from 01 for the first inspection created on the works record and counts up consecutively for each additional inspection (i.e. -01, -02, -03 etc).

_(Previously section 3.1 in Business rules v0.1 draft)_ 

### 4.x. Inspection types and categories

* Inspections may be added by a HA at any stage of a works record.

| Inspection type | Inspection categories |
|:----------------|:----------------------|
| Live Site                | Category A<br />Site occupancy<br />Conditions<br />Third party<br />Routine |
| Reinstatement            | Category B<br />Category C<br />Third party<br />Routine |
| Non-compliance follow up | Joint site visit<br />Follow up<br />Follow up completion |
| Section 81               | Not applicable |

_(Previously section 3.2 & 3.5 in Business rules v0.1 draft)_ 

### 4.x. Inspection outcomes

* If a failed inspection outcome is selected for Live site, reinstatement or non-compliance follow up inspection types, details of non-compliant areas must be provided.
* If a failed inspection outcome is selected for Section 81, the inspection may advise if the site was made safe by HA.
* Additional information and evidence/photos may be provided by HA for all outcomes.
* The inspection outcomes available for inspection types and categories are as below:

| Inspection type | Inspection outcomes |
|:----------------|:--------------------|
| Live Site (excl. Site occupancy & Conditions), Reinstatement and Non-compliance follow up (excl. Joint site visit) | Passed<br />Failed — high<br />Failed — low<br />Unable to complete inspection |
| Live Site type with Site occupancy category | Works stopped - Apparatus remaining<br />Works in progress - No carriageway incursion<br />Works in progress<br />Works stopped<br />Unable to complete inspection |
| Live Site type with Conditions category | Passed<br />Non compliant (with conditions)<br />Unable to complete inspection |
| Non-compliance follow up with Joint site visit category | Further inspections required<br />Agreed site compliance<br />Unable to complete inspection |

_(Previously section 3.3 & 3.5 in Business rules v0.1 draft)_ 



<!-- SECTION NOT REQUIRED
### x. Inspection failure categories
_(Previously section 3.4 in Business rules v0.1 draft)_ -->


### 4.x. Scheduling inspections

* HA may schedule one inspection against a works record.
* A scheduled inspection consists of a date, time (optional) and inspection type & category.
* The date provided must be today or in the future. If time is provided, it must occur in the future.
* A scheduled inspection may be cancelled from the works record.
* A scheduled inspection that has not been cancelled will be automatically removed when any inspection is submitted.
* A scheduled inspection will remain on the works record until it is cancelled or an inspection is added regardless of the date and time the inspection was scheduled for.
* A new scheduled inspection may be created as part of any add an inspection process. Alternatively, A new scheduled inspection may be created directly on the works record level.

_(Previously section 3.6 in Business rules v0.1 draft)_ 





<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />





<!-- ==================================================== -->
## Fixed penalty notice (FPN)
<!-- ==================================================== -->

### 4.x. FPN reference number

* The FPN reference number is generated in the following format: {WRN}-FPN-{numerical suffix}
    * **WRN** - See the works reference number section for more details.
    * **Numerical suffix** - A minimum of two numbers starting from 01 for the first FPN created on the works record and counts up consecutively for each additional FPN (i.e. -01, -02, -03 etc).

_(Previously section 2.2 in Business rules v0.1 draft)_ 

### 3.3. FPN statuses

* The FPN statuses are as follows:
    * **Issued** - The initial status of an FPN issued by a HA. (Applicable for all FPNs)
    * **Accepted** - Promoter may change to this FPN status when to acknowledge receipt of FPN. (Optional status change)
    * **Disputed** - Promoter may change to this FPN status when in discussion with the HA about the validity of an FPN. (Optional status change)
    * **Withdrawn** - HA may change to this FPN status if HA agree to withdraw FPN. (if applicable)
    * **Paid** - HA acknowledge that the promoter payment (no discount) has been received. (if applicable)
    * **Paid (Discounted)** - HA acknowledge that the promoter payment (with discount) has been received. (if applicable)

< insert diagram >

_(Previously section 2.1 in Business rules v0.1 draft)_ 

<br />











<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />






<!-- ==================================================== -->
## Fee reporting
<!-- ==================================================== -->

* A fee report is available showing individual entries for every chargeable transaction within a specified date range. Dates queried are the date of the chargeable transaction.
* The chargeable transactions included are as follows:
    * Granting of a permit application
    * PAA progressed to PA - note, this occurs upon receipt of the permit application, not when it is granted
    * Granting of a change request
    * A change in work category
* The maximum date range for the fee report is 31 calendar days.
* The fee report results are sorted by date of the chargeable transaction in ascending order.

* The following will be provided to support organisations calculating the fees due:
    * **Road category**
    * **Is street is traffic-sensitive** - are there any traffic-sensitive designations for the works' USRN?
    * **Is works is traffic-sensitive** - were any traffic-sensitive designations selected by the promoter on the PA?

* Note: The works category field will be populated with the permit application's current works category at the time the report is run as opposed to showing the works category of the permit at the time the chargeable transaction took place.
* For example, if a permit is granted then soon after a work extension was also granted changing it from a standard to a major permit, there would be three transactions for this permit in the fee report:
    * granting of a permit application, 
    * granting of a change request 
    * change in work category
    * The works category field for all three of these transactions will be 'major'.

* Out of scope: inspection chargeable transaction ; fee amounts

_(Previously section 14.1 in Business rules v0.1 draft)_ 


<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />








<!-- ==================================================== -->
## Changes
<!-- ==================================================== -->

| Section | Change comment |
|:--------|:---------------|
| 1.      | Added |
| 1.1.    | Updated |
| 1.2.    | Updated |













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