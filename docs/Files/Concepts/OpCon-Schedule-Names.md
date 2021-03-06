---
lang: en-us
title: OpCon Schedule Names
viewport: width=device-width, initial-scale=1.0
---

#  OpCon Schedule Names

While most schedules in Schedule Operations appear as the original
schedule name, there are features that cause
OpCon to add extra characters to the name
automatically.

-   [Multi-Instance Schedules](#Multi-In)
-   [SubSchedules](#SubSched)

## Multi-Instance Schedules

When OpCon builds additional copies of a
multi-instance schedule into the Daily schedules, the naming convention
depends on whether Schedule Instance properties were supplied.

 

If Schedule Instance properties are not supplied, the SAM appends the
instance number to the schedule name by adding a dollar sign followed by
a four-digit number (\$XXXX). Each time the same schedule is built this
way, the number increments by one.

 

If Schedule Instance properties are supplied,
OpCon appends the value of the first property
to the schedule name. For more information, refer to [Instance Definition](Instance-Definition.md). Also refer to
[Schedule Instance Definition](../UI/Enterprise-Manager/Schedule-Instance-Definition.md){.MCXref
.xref} in the **Enterprise Manager** online help.

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** The following event | | circular                         | builds a schedule into the Daily |
| background](../../Reso           | schedule using only the required |
| urces/Images/example-icon(48x48) | parameters for the event. The    |
| .png "Example icon") | schedule \"MyScheduleName\" is   |
|                                  | configured as a multi-instance   |
|                                  | schedule.                        |
|                                  |                                  |
|                                  | \$SCHEDULE:BUILD,                |
|                                  | \[\[\$DATE\]\],MyScheduleName,,y | |                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | When the same event is submitted |
|                                  | three times,                     |
|                                  | OpCon |
|                                  | creates the following schedule   |
|                                  | names in Schedule Operations:    |
|                                  |                                  |
|                                  | -   MyScheduleName               |
|                                  | -   MyScheduleName\$0002         |
|                                  | -   MyScheduleName\$0003         |
+----------------------------------+----------------------------------+

 

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [OpCon validates the value for valid characters. Any characters that are invalid for a schedule name will be converted to asterisks (\*) (Note that this conversion is only done to generate the schedule name, but does not change the value of the property stored with the schedule.)]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** The following event | | circular                         | builds a schedule while defining |
| background](../../Reso           | Schedule Instance properties     |
| urces/Images/example-icon(48x48) | called FileName (with a value of |
| .png "Example icon") | abc.txt) and NumRecs (with a     |
|                                  | value of 100).                   |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | The schedule \"MyScheduleName\"  |
|                                  | is configured as a               |
|                                  | multi-instance schedule.         |
|                                  |                                  |
|                                  | \$SCHEDULE:BUI                   |
|                                  | LD,\[\[\$DATE\]\],MyScheduleName | |                                  | ,,y,FileName=abc.txt;NumRecs=100 |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | When                             |
|                                  | OpCon |
|                                  | builds the schedule into the     |
|                                  | Daily tables, it will name the   |
|                                  | schedule:                        |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | MyScheduleName_abc.txt           |
+----------------------------------+----------------------------------+

 

To prevent a duplicate request for a schedule,
OpCon checks the list of Schedule Instance
properties to determine if the build request is unique.

-   If the schedule name is unique, OpCon
    builds the schedule with that name and stores any Schedule Instance
    properties to the Available Properties field in the database.
-   If the schedule name is not unique, OpCon
    compares the complete list of Schedule Instance properties for the
    new schedule with the complete list of Available Properties stored
    for all instances of the schedule that match in the database.
    -   If the list of Schedule Instance properties matches identically,
        OpCon will check the \"Overwrite?\"
        switch in the request and apply the overwrite rules as if
        dealing with a classic \"top-level\" schedule. If the schedule
        can be overwritten, OpCon builds the
        schedule.
    -   If the list of Schedule Instance properties does not match,
        OpCon builds the schedule using the
        following syntax:

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** The following event | | circular                         | builds a schedule while defining |
| background](../../Reso           | Schedule Instance properties     |
| urces/Images/example-icon(48x48) | called FileName (with a value of |
| .png "Example icon") | abc.txt) and NumRecs (with a     |
|                                  | value of 100).                   |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | The schedule \"MyScheduleName\"  |
|                                  | is configured as a               |
|                                  | Multi-Instance schedule. Also,   |
|                                  | the exact same build request     |
|                                  | already created a schedule named |
|                                  | MySchedulename_abc for the day.  |
|                                  |                                  |
|                                  | \$SCHEDULE:BUI                   |
|                                  | LD,\[\[\$DATE\]\],MyScheduleName | |                                  | ,,Y,FileName=abc.txt;NumRecs=100 |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | Because the original schedule    |
|                                  | from the previous identical      |
|                                  | request was in process at the    |
|                                  | time, this event was submitted,  |
|                                  | and                              |
|                                  | OpCon |
|                                  | rejected the event to allow the  |
|                                  | original schedule to finish      |
|                                  | processing. If the original      |
|                                  | schedule had been complete,      |
|                                  | OpCon |
|                                  | would have re-built the schedule |
|                                  | because the overwrite switch was |
|                                  | set to yes.                      |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | After the previous event,        |
|                                  | another build event is           |
|                                  | submitted, but this time with a  |
|                                  | different list of properties:    |
|                                  |                                  |
|                                  | \$SCHEDULE:BUILD,\[\[\$DATE\]\   | |                                  | ],MyScheduleName,,Y,FileName=abc |
|                                  | .txt;NumRecs=100;StoreNumber=985 |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | Because the list of Schedule     |
|                                  | Instance Properties is unique,   |
|                                  | OpCon |
|                                  | builds the schedule with the     |
|                                  | following name:                  |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | MyScheduleName_abc\$0002         |
+----------------------------------+----------------------------------+

## SubSchedules

When OpCon builds schedules with Container
jobs, the \"Schedule to Run as a Subschedule\" is also built into the
Daily schedules as a subschedule. The subschedule name uses the
following syntax:

ParentSchedule_ContainerJobName\[SubSchedule\] 
 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** A schedule named    | | circular                         | MyParentSchedule has a Container |
| background](../../Reso           | job on it named                  |
| urces/Images/example-icon(48x48) | RunAnotherProcess. The job       |
| .png "Example icon") | RunAnotherProcess calls the      |
|                                  | schedule                         |
|                                  | ImportantReusableProcess as the  |
|                                  | SubSchedule. When                |
|                                  | OpCon |
|                                  | builds the schedule              |
|                                  | MyParentSchedule into the Daily  |
|                                  | tables, the following two        |
|                                  | schedules are built:             |
|                                  |                                  |
|                                  | -   MyParentSchedule             |
|                                  | -                                |
|                                  |   MyParentSchedule_RunAnotherPro |
|                                  | cess\[ImportantReusableProcess\] | +----------------------------------+----------------------------------+

OpCon allows any schedule to have a Container
job in it. This means that a subschedule could have a Container job in
it that would call another subschedule. There is no specific limit how
many schedules can be imbedded in each other. The limit is only reached
when the maximum schedule name length is reached.
OpCon supports a 255 character schedule name
in the Daily tables. For information on marking the schedule as a
subschedule, refer to [Adding Schedules](../UI/Enterprise-Manager/Adding-Schedules.md){.MCXref
.xref} in the **Enterprise Manager** online help. For information on
selecting a subschedule for a Container job, refer to [Editing Job Master
Details](../UI/Enterprise-Manager/Editing-Job-Master-Details.md){.MCXref
.xref} in the **Enterprise Manager** online help.

 

Imbedded schedule names have the following naming syntax:

ParentSchedule1_ContainerJob1\[SubSchedule1\]\_ContainerJob2\[SubSchedule2\] 
 

In the syntax, SubSchedule1 also acts as a Parent schedule.

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** A schedule named    | | circular                         | MyParentSchedule has a Container |
| background](../../Reso           | job on it named                  |
| urces/Images/example-icon(48x48) | RunAnotherProcess. The job       |
| .png "Example icon") | RunAnotherProcess calls the      |
|                                  | schedule                         |
|                                  | ImportantReusableProcess as the  |
|                                  | subschedule. Additionally, the   |
|                                  | schedule                         |
|                                  | ImportantReusableProcess has a   |
|                                  | Container job named              |
|                                  | RunBackupProcess that uses the   |
|                                  | schedule BackupProcess as the    |
|                                  | subschedule. When                |
|                                  | OpCon |
|                                  | builds the schedule              |
|                                  | MyParentSchedule into the Daily  |
|                                  | tables, the following three      |
|                                  | schedules are built:             |
|                                  |                                  |
|                                  | -   MyParentSchedule             |
|                                  | -                                |
|                                  |   MyParentSchedule_RunAnotherPro |
|                                  | cess\[ImportantReusableProcess\] | |                                  | -   M                            |
|                                  | yParentSchedule_RunAnotherProces |
|                                  | s\[ImportantReusableProcess\]\_R | |                                  | unBackupProcess\[BackupProcess\] |
+----------------------------------+----------------------------------+
:::

 

