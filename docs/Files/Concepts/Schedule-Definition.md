---
lang: en-us
title: Schedule Definition
viewport: width=device-width, initial-scale=1.0
---

#  []{#Schedule}Schedule Definition 
Schedule definition includes the following topics:

-   [Schedule Details](#Schedule_Details)
-   [Schedule Maintenance](#Schedule_Maintenance)
-   [Instance Definition](#Instance)
-   [Schedule Frequency](#Schedule3)
-   [Schedule Completion Events](#Schedule2)
-   [Schedule Deployment Information](#Schedule4)

## Schedule Details

The following information applies to basic information regarding
schedules:

-   **Schedule Name**: Defines the name for the schedule. It is
    suggested the schedule name be descriptive of the jobs on that
    schedule. The following default schedules are included with
    OpCon:
    -   \"AdHoc\" is installed by default with
        OpCon. Refer to [Schedule Completion         Events](#Schedule2).
    -   \"SMAUtility\" is installed by default with
        OpCon. Refer to [SMAUtility         Schedule](SMAUtility-Schedule.md).
-   **Documentation**: Provides an area for descriptions, explanations,
    and notes that can be updated for the defined schedule. For
    information on inserting hyperlinks into the Documentation area,
    refer to [Entering and Opening Hyperlinks in the Documentation     Frame](../UI/Enterprise-Manager/Entering-and-Opening-Hyperlinks.md){.MCXref
    .xref} in the **Enterprise Manager** online help.
-   **Start Time**: Provides the start time for the schedule and is
    based on a 24-hour clock. The popular choice is to leave this start
    time at midnight because all jobs on the schedule have a start time
    that is offset from the schedule start time. At the appointed time,
    the SAM will start examining the schedule to determine whether any
    jobs qualify to start.

```{=html}
<!-- -->
```
-   **Workdays per Week**: Defines the schedule\'s working days. Every
    day that has a checkbox selected is considered a workday.

```{=html}
<!-- -->
```
-   **Additional Holidays**: Defines the name of a calendar that contain
    the specific \'Additional Holidays\' to apply to the schedule. The
    default name is \<None\> (HC: Only).
-   **Use Master Holiday**: Determines if Master Holiday Calendar dates
    will be applied to the schedule\'s Holiday Calendar. For additional
    information, refer to [Master Holiday     Calendar](Calendars.md#Master).
    -   When turning this setting off, the graphical interface will
        present the option to add the master holiday dates to the
        schedule\'s holiday calendar before disassociating the calendar
        from the schedule.
-   **Multi-Instance**: Determines if multiple instances of the same
    schedule (business process) are allowed. When turning this setting
    on, the graphical interface validates that there are no
    cross-schedule dependencies to this schedule (cross-schedule
    dependencies on Multi-Instance Schedule\'s jobs are invalid).
-   **SubSchedule**: Determines if copies of the schedule are allowed to
    be contained inside other schedules in
    OpCon. If this setting is turned on, the
    schedule must be called by a Container job on any other schedule.
    For additional information, refer to [Container Job     Type](Container-Job-Type.md).
    -   When this setting is off, the graphical interface validates that
        the schedule is not being called by a Container job as a
        subschedule. If the schedule is defined as a subschedule on one
        or more Container jobs, the schedule must remain configured as a
        subschedule.
    -   When turning this setting on, the graphical interface validates
        that there are no cross-schedule dependencies to this schedule
        (cross-schedule dependencies on multi-instance schedule\'s jobs
        are invalid).
-   **Conflict with Other Days**: Determines if a schedule is allowed to
    run if the same schedule is still running on a different day.

## Schedule Maintenance

Schedule Maintenance settings are used for enabling
OpCon to build and/or delete
OpCon schedules automatically. The \"Hour of
each day SAM should detect schedules to build\" determines when the Auto
Build and Auto Delete run. Refer to [Time Settings](Time-Settings.md).

### Build Settings

-   **Auto Build**: Indicates if OpCon should
    automatically build the schedule. When this setting is on, the
    graphical interfaces provide fields to set the number of days in
    advance to start the build and the number of days to build from that
    point forward.
    -   If auto build is enabled, the log file is named
        Auto_Build\_\<Schedule Date\>\_\<Schedule Name\>.log in the
        \<Output Directory\>\\SAM\\Log\\SMASchedMan\\ directory on the
        SAM application server.
-   **Overwrite Existing**: When the auto build executes and the
    schedule is found on the target date, this setting indicates if the
    schedule should be overwritten. When this setting is on,
    OpCon overwrites the schedule if it is in
    a [Completed]{.skd-job-statuses} status. If the schedule is [In     Process]{.skd-job-statuses}, it will not be overwritten.
-   **Build On Hold**: Indicates if the schedule should be built with a
    status of [On Hold]{.skd-job-statuses}. The SAM will not process the     schedule until it is released manually or through an
    OpCon event.
-   **Auto Build Time**: Defines the clock time to build the schedule.
    The default value of 00:00 will build at the time indicated by the
    Server Option setting for \"Hour of each day SAM should detect
    Schedules to build\". To define a specific time for this schedule to
    build, change the value from 00:00 to a time that would be later
    than the Server Option for SAM\'s build time.

### Delete Settings

-   **Auto Delete**: Indicates if OpCon
    should automatically delete the schedule. When this setting is on,
    the graphical interfaces provide a field to set the number of days
    in the past to delete the schedule.
    -   If a Schedule has a status of [On Hold]{.skd-job-statuses} and         has never been released, it will be deleted in the automatic
        delete process. If a schedule is [On Hold]{.skd-job-statuses}         after previously being released, it will [not]{.ul} be deleted
        in the automatic delete process.
    -   If auto delete is enabled, the log file is named
        Auto_Delete\_\<Schedule Date\>\_\<Schedule Name\>.log in the
        \<Output Directory\>\\SAM\\Log\\SMASchedMan\\ directory on the
        SAM application server.

 

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are several references for       |
| background](../../Resourc        | implementing the Schedules       |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding                      | |                                  |     Sched                        |
|                                  | ules](../UI/Enterprise-Manager |
|                                  | /Adding-Schedules.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Configuring Automatic       | |                                  |     Schedule                     |
|                                  |     Maint                        |
|                                  | enance](../UI/Enterprise-Manag |
|                                  | er/Configuring-Automatic-Sch |
|                                  | edule-Maintenance.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Copying                     | |                                  |     Schedu                       |
|                                  | les](../UI/Enterprise-Manager/ |
|                                  | Copying-Schedules.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Merging                     | |                                  |     Schedu                       |
|                                  | les](../UI/Enterprise-Manager/ |
|                                  | Merging-Schedules.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Viewing Additional Schedule | |                                  |     Information](../UI/Enterpri  |
|                                  | se-Manager/Viewing-Additiona |
|                                  | l-Schedule-Info.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Schedules from     | |                                  |     Daily                        |
|                                  |     Tables](../UI                |
|                                  | /Enterprise-Manager/Deleting%2 |
|                                  | 0Schedules.md#Deleting){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Schedules from     | |                                  |     Master                       |
|                                  |     Tables](../UI/               |
|                                  | Enterprise-Manager/Deleting- |
|                                  | Schedules.md#Deleting2){.MCXref |
|                                  |     .xref}                       |
|                                  |                                  |
|                                  | For SMADDI, visit the following  |
|                                  | section in the **Utilities**     |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [new_schedule Element        | |                                  |     Structure](..                |
|                                  | /Utilities/SMA-Dynamic-Data% |
|                                  | 20Input/Data-Input-Message%2 |
|                                  | 0Elements.md#new_sche2){.MCXref |
|                                  |     .xref} (for adding a new     |
|                                  |     schedules to Master tables   |
|                                  |     of the                       |
|                                  |                                  |
|                                  | OpCon |
|                                  |     database)                    |
+----------------------------------+----------------------------------+

## Instance Definition

Instance Definition contains options for defining properties for one or
more instances of the schedule and options for defining properties and
exceptions for one or more named instances of the schedule. Instance
Definitions is enabled for all schedules except the AdHoc schedule. The
following options are provided:

**Build an instance for each machine in Machine Group**: For
Multi-Instance schedules, defines the Machine Group containing the
machines the schedule should build for. One instance of the schedule
will build for each machine in the group. To make use of the schedule
instance machine, configure the jobs in the schedule to \"Use Schedule
Instance Machine\". For more information, refer to [Using the Same Schedule Across Multiple
Machines](Using-Machine-Groups.md#Using2).

**Build an instance for each set of Properties**: Defines the predefined
properties for each instance of the schedule. To make use of the
Schedule Instance Properties, use tokens with the jobs to reference the
Schedule Instance Properties (e.g., \[\[**SI**.StoreID\]\]). For more information, refer to [Using Properties for
Automation](Using-Properties-for-Automation.md)
and [Schedule Instance Property Name Syntax](Using-Properties-for-Automation.md#Schedule){.MCXref
.xref}.

-   The value of the first property for each instance is appended to the
    schedule name when it is built. A schedule's name in Operations
    cannot exceed 255 characters; therefore, the value for the first
    property should be short and informative.
-   If the schedule is a multi-instance schedule, multiple strings of
    properties may be defined. By default, each string will be used to
    build an instance of the schedule.
-   If only a single instance definition of properties were predefined
    in the Master, they will be selected for merging with any
    event-defined properties.
-   If multiple instances of properties are defined in the Master, the
    first property defined in the event will be matched with the first
    property in each instance set.
    -   If a match is found, that instance set of properties will be
        selected for merging with the event-defined properties.
    -   If no match is found, the properties defined in the event will
        be used alone as a new instance of the schedule or job.
-   Now, the user only has to define the properties that differ in value
    from those defined in the Master.

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:**                     | | circular                         |                                  |
| background](../../Reso           |                                  |
| urces/Images/example-icon(48x48) |                                  |
| .png "Example icon") | **Scenario**: In the Schedule    |
|                                  | Master (Instance Definition      |
|                                  | tab), Instance Definitions are   |
|                                  | defined for a schedule named     |
|                                  | CloseRegisters.                  |
|                                  |                                  |
|                                  | -   St                           |
|                                  | oreID=Store23;Path=\"C:\\Program |
|                                  |     Files\\My Program\\Long Path |
|                                  |     Name\";ParentCompany=Smiths  |
|                                  | -   St                           |
|                                  | oreID=Store24;Path=\"D:\\Program |
|                                  |     Files\\My Program\\Long Path |
|                                  |     Name\";ParentCompany=Smiths  |
|                                  | -   St                           |
|                                  | oreID=Store25;Path=\"C:\\Program |
|                                  |     Files (x86)\\My              |
|                                  |     Program\\Long Path           |
|                                  |     Name\";ParentCompany=Smiths  |
|                                  |                                  |
|                                  | When the schedule is built, the  |
|                                  | first property value for each    |
|                                  | instance (e.g., Store23,         |
|                                  | Store24, Store25) is appended to |
|                                  | the schedule name in Operations. |
|                                  |                                  |
|                                  | -   CloseRegisters_Store23       |
|                                  | -   CloseRegisters_Store24       |
|                                  | -   CloseRegisters_Store25       |
+----------------------------------+----------------------------------+

**Build a named schedule instance**: For Multi-Instance schedules,
defines each named instance of the schedule and the associated
predefined properties and/or exceptions. For more information, refer to
[Named Schedule Instances](Named-Schedule-Instances.md){.MCXref
.xref}.

 

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are several references for       |
| background](../../Resourc        | implementing the Schedule        |
| es/Images/moreinfo-icon(48x48).p | Instance                         |
| ng "More Info icon") | Definition.]         |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Defining Schedule Instances | |                                  |     for Machines in Machine      |
|                                  |     Grou                         |
|                                  | ps](../UI/Enterprise-Manager/D |
|                                  | efining-Schedule-Instances%2 |
|                                  | 0for-Machines.md#top){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Defining Properties for     | |                                  |     Single Instance              |
|                                  |     Schedules](../               |
|                                  | UI/Enterprise-Manager/Defining |
|                                  | -Properties-for-Single-I |
|                                  | nstance-Schedules.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Defining Properties for     | |                                  |     Multi-Instance               |
|                                  |     Schedules](                  |
|                                  | ../UI/Enterprise-Manager/Defin |
|                                  | ing-Properties-for-Multi-I |
|                                  | nstance-Schedules.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Defining Named Schedule     | |                                  |     Instances](../UI/Enterpris   |
|                                  | e-Manager/Defining-Named-S |
|                                  | chedule-Instances.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Updating Schedule Instance  | |                                  |                                  |
|                                  |  Properties](../UI/Enterprise- |
|                                  | Manager/Updating-Schedule-In |
|                                  | stance-Properties.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Updating Named Schedule     | |                                  |     Instance                     |
|                                  |     Propert                      |
|                                  | ies](../UI/Enterprise-Manager/ |
|                                  | Updating-Named-Schedule-In |
|                                  | stance-Properties.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Updating Named Schedule     | |                                  |     Instance                     |
|                                  |     Excepti                      |
|                                  | ons](../UI/Enterprise-Manager/ |
|                                  | Updating-Named-Schedule-In |
|                                  | stance-Exceptions.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Schedule Instance  | |                                  |                                  |
|                                  |  Properties](../UI/Enterprise- |
|                                  | Manager/Deleting-Schedule-In |
|                                  | stance-Properties.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Named Schedule     | |                                  |     Instances](../UI/Enterpris   |
|                                  | e-Manager/Deleting-Named-S |
|                                  | chedule-Instances.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Named Schedule     | |                                  |     Instance                     |
|                                  |     Propert                      |
|                                  | ies](../UI/Enterprise-Manager/ |
|                                  | Deleting-Named-Schedule-In |
|                                  | stance-Properties.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Named Schedule     | |                                  |     Instance                     |
|                                  |     Excepti                      |
|                                  | ons](../UI/Enterprise-Manager/ |
|                                  | Deleting-Named-Schedule-In |
|                                  | stance-Exceptions.md){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+

## Schedule Frequency

Schedule Frequencies specify the days on which all jobs on the schedule
should run. Additions, deletions, and modifications of a schedule
frequency affect all jobs on a schedule. For additional information,
refer to [Job and Schedule Frequencies](Job-and-Schedule-Frequencies.md).

-   **Frequency Name**: Defines the name of the schedule frequency. For
    additional information about adding, editing, or deleting Schedule
    Frequencies, refer to [Schedule     Frequency](../UI/Enterprise-Manager/Schedule-Frequency.md){.MCXref
    .xref} in the **Enterprise Manager** online help.
-   **Priority**: Indicates the priority of a frequency when the
    schedule has two or more frequencies that qualify for the same day.
    When a schedule is built, OpCon uses the
    highest priority frequency for the jobs on the schedule. Because
    jobs can have different components associated with each frequency,
    it is important that the correct frequency qualifies. For
    information on job components, refer to [Job Automation     Components](Job-Automation-Components.md). The
    frequencies should be prioritized so the frequency that qualifies
    the least often has the highest priority, and the frequency that
    qualifies the most often has the lowest priority.
-   **Frequency Definition**: Defines the days the jobs on the schedule
    should run. For detailed information on frequency definitions, refer
    to [Frequency Definition](Frequency-Definition.md){.MCXref
    .xref}.

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:**                     | | circular                         |                                  |
| background](../../Reso           | -   **Scenario:** A schedule is  |
| urces/Images/example-icon(48x48) |     defined with two frequencies |
| .png "Example icon") |     because on the last day of   |
|                                  |     the month, the jobs have     |
|                                  |     additional components        |
|                                  |     (dependencies and events)    |
|                                  |     that must be considered. The |
|                                  |     Daily frequency qualifies    |
|                                  |     for every day. The Monthly   |
|                                  |     frequency only qualifies on  |
|                                  |     the last working day of the  |
|                                  |     Month. The administrator     |
|                                  |     sets the Monthly frequency   |
|                                  |     to a higher priority than    |
|                                  |     the Daily frequency to       |
|                                  |     ensure the Monthly related   |
|                                  |     job components are           |
|                                  |     considered.                  |
|                                  | -   **Result:** Because the      |
|                                  |     Daily and Monthly            |
|                                  |     frequencies resolve to the   |
|                                  |     same day, at the end of the  |
|                                  |     month                        |
|                                  |                                  |
|                                  | OpCon |
|                                  |     builds the schedule and its  |
|                                  |     jobs with the Monthly        |
|                                  |     frequency and related job    |
|                                  |     components.                  |
|                                  |                                  |
|                                  | If the administrator had set the |
|                                  | Daily frequency to the higher    |
|                                  | priority, the Monthly frequency  |
|                                  | and related job components would |
|                                  | have been ignored.               |
+----------------------------------+----------------------------------+

 

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are several references for       |
| background](../../Resourc        | implementing the Schedule        |
| es/Images/moreinfo-icon(48x48).p | Frequency.]          |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding New Schedule         | |                                  |     Frequencies](../UI           |
|                                  | /Enterprise-Manager/Adding-S |
|                                  | chedule-Frequencies.md#Adding |
|                                  | _New_Schedule_Frequency){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Adding Existing Schedule    | |                                  |     Frequencies](../UI/Enterpri  |
|                                  | se-Manager/Adding-Schedule%2 |
|                                  | 0Frequencies.md#Adding){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Editing Schedule            | |                                  |     Frequencies](../UI/En        |
|                                  | terprise-Manager/Editing-Sch |
|                                  | edule-Frequencies.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Schedule           | |                                  |     Frequencies](../UI/Ent       |
|                                  | erprise-Manager/Deleting-Sch |
|                                  | edule-Frequencies.md){.MCXref |
|                                  |     .xref}                       |
|                                  |                                  |
|                                  | For SMADDI, visit the following  |
|                                  | section in the **Utilities**     |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [add_frequency Element       | |                                  |     Structure](.                 |
|                                  | ./Utilities/SMA-Dynamic-Data |
|                                  | -Input/Data-Input-Message% |
|                                  | 20Elements.md#add_freq){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+

## Schedule Completion Events

Schedule Completion Events are OpCon events
with user-specified parameters that can be executed based on a
schedule\'s completion. Any number of OpCon
events may be defined for each schedule. For a list and definition for
all supported OpCon events, refer to the
[OpCon Events](../OpCon-Events/Introduction.md) online help.

 

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [For a user to add or modify Schedule Completion Events in Daily Schedule maintenance, the user must have one of the following function privileges: Maintain Schedules, All Function Privileges, or Modify Jobs in Daily Schedules.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are several references for       |
| background](../../Resourc        | implementing the Schedule        |
| es/Images/moreinfo-icon(48x48).p | Events.]             |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding                      | |                                  |     Resou                        |
|                                  | rces](../UI/Enterprise-Manager |
|                                  | /Adding-Resources.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Editing                     | |                                  |     Resour                       |
|                                  | ces](../UI/Enterprise-Manager/ |
|                                  | Editing-Resources.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Copying                     | |                                  |     Resour                       |
|                                  | ces](../UI/Enterprise-Manager/ |
|                                  | Copying-Resources.md){.MCXref |
|                                  |     .xref}                       |
|                                  |                                  |
|                                  | For SMADDI, visit the following  |
|                                  | section in the **Utilities**     |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [ppevtdets](../Utilities/SMA |
|                                  | -Dynamic-Data-Input/Data%2 |
|                                  | 0Input-Message-Elements.md# |
|                                  | %3Cppevtdets%3E%3C/ppevtdets%3E) |
+----------------------------------+----------------------------------+

## Schedule Deployment Information

Deployment Information (Deploy Info) contains a read-only view of
information populated by OpCon Deploy, a product used to centralize and
manage schedule versioning and deployment across multiple OpCon
environments.

 

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** The Deploy Info tab will [display N/A when the schedule has not been deployed or updated by the OpCon Deploy product.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------

 

The following information is shown based on what is defined by OpCon
Deploy:

-   **Version**: Defines the version of the master schedule deployed
    into OpCon via OpCon Deploy.
-   **Package**: Defines a grouping of schedules deployed together.
-   **Description**: Defines a description of the deploy action.
-   **Record Id**: Defines the ID of the record deployed.
-   **Deployed**: Defines the OpCon Deploy user that triggered the
    deploy action and the date and time the schedule was deployed.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are several references providing |
| background](../../Resourc        | additional information about     |
| es/Images/moreinfo-icon(48x48).p | Deployment                       |
| ng "More Info icon") | Information.]        |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Schedule Deployment         | |                                  |     Information](../UI/Enter     |
|                                  | prise-Manager/Schedule-Deplo |
|                                  | yment-Information.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Viewing Deployment          | |                                  |     Information](../UI/Ente      |
|                                  | rprise-Manager/Viewing-Deplo |
|                                  | yment-Information.md){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+
:::

 

