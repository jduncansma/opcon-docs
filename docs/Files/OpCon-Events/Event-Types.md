---
lang: en-us
title: Event Types
viewport: width=device-width, initial-scale=1.0
---

# Event Types

[]{#aanchor162} This section contains the syntax, definition, and parameter descriptions for all supported OpCon events. Event types are
grouped in the following categories:

-   [Administrative Events](#Administ)
-   [Job-Related Events](#Job-Rela)
-   [Machine-Related Events](#Machine-)
-   [Notification Events](#Notifica)
-   [Property-Related Events](#Property)
-   [SAM Log Events](#SAM)
-   [Schedule-Related Events](#Schedule)
-   [Threshold/Resource-Related Events](#Threshol)

## Administrative Events

### \$CALENDAR:ADD,\<calendar name\>,\<dates separated by semicolons (;)\>

  ---------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [Adding and removing dates on a calendar can have a direct impact to whether jobs will run or not.]
  ---------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------

The \$CALENDAR:ADD event adds one or more dates to an existing calendar.
If the calendar does not exist, the event will fail.

-   **\<calendar name\>**: The calendar name to which to add the dates.
-   **\<dates separated by semicolons (;)\>**: A semicolon separated
    list of dates to add to the calendar. The dates must be defined
    using a date syntax recognized by the regional settings of the user
    running SMA Service Manager.

### \$CALENDAR:DEL,\<calendar name\>,\<dates separated by semicolons (;)\>

  ---------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [Adding and removing dates on a calendar can have a direct impact to whether jobs will run or not.]
  ---------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------

The \$CALENDAR:DEL event deletes one or more dates a calendar. If the
calendar does not exist, the event will fail.

-   **\<calendar name\>**: The calendar name from which to delete the
    dates.
-   **\<dates separated by semicolons (;)\>**: A semicolon separated
    list of dates to delete from the calendar. The dates must be defined
    using a date syntax recognized by the regional settings of the user
    running SMA Service Manager.

### \$JOB:MACHGRP,\<schedule date\>,\<schedule name\>,\<job name\>,\<machine group name\>

The \$JOB:MACHGRP event changes the Machine Group for a job in the
Daily.

-   **\<schedule date\>**: The date of the Daily schedule containing the
    job.
-   **\<schedule name\>**: The name of the schedule containing the job.
-   **\<job name\>**: The name of the job to affect on in the Daily
    schedule.
-   **\<machine group name\>**: The new Machine Group name for the job
    to use in the Daily schedule.

### \$JOB:MAXRUNTIME,\<schedule date\>,\<schedule name\>,\<job name\>,\<minutes\>

The \$JOB:MAXRUNTIME event updates the maximum runtime for the job in
the Daily.

-   **\<schedule date\>**: The date of the Daily schedule containing the
    job.
-   **\<schedule name\>**:The name of the schedule containing the job.
-   **\<job name\>**: The name of the job to affect on in the Daily
    schedule.
-   **\<minutes\>**: The number of minutes to set the Max Run Time for
    the job to use in the Daily schedule.

### \$JOB:PRIORITY,\<schedule date\>,\<schedule name\>,\<job name\>,\<SAM priority\>

The \$JOB:PRIORITY event updates the SAM Priority for the job in the
Daily.

-   **\<schedule date\>**: The date of the Daily schedule containing the
    job.
-   **\<schedule name\>**: The name of the schedule containing the job.
-   **\<job name\>**: The name of the job to affect on in the Daily
    schedule.
-   **\<SAM priority\>**: The new SAM priority value for the job to use
    in the Daily schedule.

### \$JOB:TAGADD,\<schedule date\>,\<schedule name\>,\<job name\>,\<tags separated by semicolons (;)\>

The \$JOB:TAGADD event adds one or more tags to the job in the Daily.

-   **\<schedule date\>**: The date of the Daily schedule containing the
    job.
-   **\<schedule name\>**:The name of the schedule containing the job.
-   **\<job name\>**: The name of the job to affect on in the Daily
    schedule.
-   **\<tags separated by semicolons (;)\>**: A semicolon separated list
    of tags to add to the Daily job.

### \$JOB:TAGDEL,\<schedule date\>,\<schedule name\>,\<job name\>,\<tags separated by semicolons (;)\>

The \$JOB:TAGDEL event deletes one or more tags from the job in the
Daily.

-   **\<schedule date\>**: The date of the Daily schedule containing the
    job.
-   **\<schedule name\>**:The name of the schedule containing the job.
-   **\<job name\>**: The name of the job to affect on in the Daily
    schedule.
-   **\<tags separated by semicolons (;)\>**: A semicolon separated list
    of tags to delete from the Daily job.

### \$JOB:USER,\<schedule date\>,\<schedule name\>,\<job name\>,\<batch user\>

The \$JOB:USER event changes the Batch User on the job in the Daily.

-   **\<schedule date\>**: The date of the Daily schedule containing the
    job.
-   **\<schedule name\>**: The name of the schedule containing the job.
-   **\<job name\>**: The name of the job to affect on in the Daily
    schedule.
-   **\<batch user\>**: The name of the new Batch User account for the
    job to use in the Daily schedule.

### \$JOBMASTER:BUILDSTATE,\<schedule name\>,\<job name\>,\<frequency name\>,\<build state\>

The \$JOBMASTER:BUILDSTATE event changes the build status for the
frequency of the job in the Master.

-   **\<schedule name\>**:The name of the schedule containing the job.
-   **\<job name\>**: The name of the job to affect on in the Master
    schedule.
-   **\<frequency name\>**: The frequency name of the job to associate
    the Build Status with in the Master schedule.
-   **\<build state\>**: The build status to set for the frequency on
    the job in the Master. Valid values include:
    -   **D**, **Disable Frequency**, or **Disabled**
    -   **R**, or **Released**
    -   **S**, **To Be Skipped**, or **Skipped**
    -   **N**, **Do Not Schedule**, or **Not Scheduled**
    -   **H**, **On Hold**, or **Held**

### \$JOBMASTER:TAGADD,\<schedule name\>,\<job name\>,\<frequency name\>,\<tags separated by semicolons (;)\>

The \$JOBMASTER:TAGADD event adds one or more tags to the job in the
Master.

-   **\<schedule name\>**:The name of the schedule containing the job.
-   **\<job name\>**: The name of the job to affect on in the Master
    schedule.
-   **\<frequency name\>**: The frequency name of the job to associate
    the tag with in the Master schedule. To associate the tag at the job
    level, leave this field blank.
-   **\<tags separated by semicolons (;)\>**: A semicolon separated list
    of tags to add to the Master job.

### \$JOBMASTER:TAGDEL,\<schedule name\>,\<job name\>,\<frequency name\>,\<tags separated by semicolons (;)\>

The \$JOBMASTER:TAGDEL event deletes one or more tags from the job in
the Master.

-   **\<schedule name\>**:The name of the schedule containing the job.
-   **\<job name\>**: The name of the job to affect on in the Master
    schedule.
-   **\<frequency name\>**: The frequency name the tag is associated
    with on the job with in the Master schedule. To delete the tag at
    the job level, leave this field blank.
-   **\<tags separated by semicolons (;)\>**: A semicolon separated list
    of tags to delete from the Master job.

### \$RESOURCE:DEL,\<resource name\>

  --------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White \"X\" icon on red circular background](../../Resources/Images/warning-icon(48x48).png "Warning icon")   **WARNING:** [When you delete a resource, internal and external events that reference the resource will begin failing unless you modify them.]
  --------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------

The \$RESOURCE:DEL event deletes the resource from the administrative
tables. This event will only succeed if a cross reference check reveals
that there are no jobs in the Master or Daily using this resource for a
Resource Dependency or Resource Update.

-   **\<old resource name\>**: An OpCon Resource Name.
-   **\<new resource name\>**: An update value for the resource.

### \$RESOURCE:RENAME,\<old resource name\>, \<new resource name\>

  --------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White \"X\" icon on red circular background](../../Resources/Images/warning-icon(48x48).png "Warning icon")   **WARNING:** [When you rename a resource, internal and external events that reference the resource will begin failing unless you modify them.]
  --------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------

The \$RESOURCE:RENAME event renames a resource in the administrative
tables.

-   **\<old resource name\>**: An OpCon Resource Name.
-   **\<new resource name\>**: An update value for the resource.

### \$THRESHOLD:DEL,\<threshold name\>

  --------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White \"X\" icon on red circular background](../../Resources/Images/warning-icon(48x48).png "Warning icon")   **WARNING:** [When you delete a threshold, internal and external events that reference the threshold will begin failing unless you modify them.]
  --------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------

The \$THRESHOLD:DEL event deletes the threshold from the administrative
tables. This event will only succeed if a cross reference check reveals
that there are no jobs in the Master or Daily using this resource for a
Threshold Dependency or Threshold Update.

-   **\<old threshold name\>**: An OpCon Threshold Name.
-   **\<new threshold name\>**: An update value for the threshold.

### \$THRESHOLD:RENAME,\<old threshold name\>,\<new threshold name\>

  --------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White \"X\" icon on red circular background](../../Resources/Images/warning-icon(48x48).png "Warning icon")   **WARNING:** [When you rename a threshold, internal and external events that reference the threshold will begin failing unless you modify them.]
  --------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------

The \$THRESHOLD:RENAME event renames a threshold in the administrative
tables.

-   **\<old threshold name\>**: An OpCon Threshold Name.
-   **\<new threshold name\>**: An update value for the threshold.

## Job-Related Events

For all job-related events, only valid job status changes are allowed.
For more information, refer to [Job Statuses](../Concepts/Schedule-and-Job-Status-Descriptions.md#Job){.MCXref
.xref} in the **Concepts** online help.

### \$JOB:ADD,\<schedule date\>,\<schedule name\>,\<job name\>,\<frequency name\>,\[job instance property definitions\],\[reopen schedule: Y/N\],\[apply exceptions: Y/N\] 
The \$JOB:ADD event adds the job from the Master tables to the Daily
tables for the specified parameters. Depending on the job\'s \"Allow
Multi-Instance\" setting, requesting a running job will start a
duplicate job. For more information, refer to [Adding Jobs to Daily Schedules](../Concepts/Adding-Jobs-to-Daily-Schedules2.md){.MCXref
.xref} in the **Concepts** online help.

-   **\<schedule date\>**: The date to which to add the job.
-   **\<schedule name\>**: The name of the schedule containing the job.
-   **\<job name\>**: The name of the job to add to the Daily schedule.
-   **\<frequency name\>**: The frequency to use for adding the correct
    dependencies and events for the job. If a frequency name is not
    specified, the job will default to its first frequency.
-   **\[job instance property definitions\]**: Defines properties and     values for the job being added. This parameter is optional. If not
    specified, the comma preceding this parameter is not required. For
    information on creating valid property definitions, refer to
    [Defining Properties](../Concepts/Defining-Properties.md){.MCXref
    .xref} in the **Concepts** online help. Define Properties using the
    following syntax in the event:
-   **\[reopen schedule: Y/N\]**: Indicates whether or not a completed     parent schedule is reopened. This parameter is optional. Valid
    values are:
    -   **Y**: Reopen a parent schedule that is closed (has run and is
        completed) so that any new jobs that are added via the \$JOB:ADD
        event will run. When set to Yes (Y), this new parameter will
        override the \"Job Events to Restart Schedules\" setting in the
        Server Options if it is set to False.
    -   **N**: Do not reopen a parent schedule that is closed (has run
        and is completed). Any new jobs that are added via the \$JOB:ADD
        event will remain in a [Qualifying]{.skd-job-statuses} state and         never run. When set to No (N), this new parameter will override
        the \"Job Events to Restart Schedules\" setting in the Server
        Options if it is set to True.
    -   If the parameter is not set or specified, the default value will
        be set to **N**.

```{=html}
<!-- -->
```
-   **\[apply exceptions: Y/N\]**: Indicates whether or not exceptions     will be applied to the job when the job is added. This parameter is
    optional. Valid values are:
    -   **Y**: Apply exceptions to the job.
    -   **N**: Do not apply exceptions to the job.
    -   If the parameter is not set or specified, the default value will
        be set to **N**.

### \$JOB:ADDHLD,\<schedule date\>,\<schedule name\>,\<job name\>,\<frequency name\>,\[job instance property definitions,\[reopen schedule: Y/N\] 
The \$JOB:ADDHLD event adds the job from the Master tables to the Daily
tables with a status of [Held]{.skd-job-statuses} for the specified parameters. Depending on the job\'s \"Allow Multi-Instance\" setting,
requesting a running job will start a duplicate job.

-   Refer to the parameter descriptions for [\$JOB:ADD](#$JOB:ADD).

### \$JOB:BAD,\<schedule date\>,\<schedule name\>,\<job name\>

The \$JOB:BAD event marks the job as [Failed]{.skd-job-statuses}. 
-   **\<schedule date\>**: The date of the Daily schedule containing the
    job.
-   **\<schedule name\>**: The name of the schedule containing the job.
-   **\<job name\>**: The name of the job on which to execute command in
    the Daily schedule.

### \$JOB:CANCEL,\<schedule date\>,\<schedule name\>,\<job name\>

The \$JOB:CANCEL event cancels the job. Any jobs dependent on this job
does not have the dependency met. This event is allowed for jobs on
\'hold\'.

-   Refer to the parameter descriptions for [\$JOB:BAD](#$JOB:BAD).

### \$JOB:DELETE,\<schedule date\>,\<schedule name\>,\<job name\>

The \$JOB:DELETE event deletes the job from the Daily schedule. If the
job is [Running]{.skd-job-statuses}, the event is rejected. 
-   Refer to the parameter descriptions for [\$JOB:BAD](#$JOB:BAD).

### \$JOB:FIXED,\<schedule date\>,\<schedule name\>,\<job name\>

The \$JOB:FIXED event marks the job as [Fixed]{.skd-job-statuses}. 
-   Refer to the parameter descriptions above for
    [\$JOB:BAD](#$JOB:BAD).

### \$JOB:GOOD,\<schedule date\>,\<schedule name\>,\<job name\>

The \$JOB:GOOD event marks the job as [Finished OK]{.skd-job-statuses}. 
-   Refer to the parameter descriptions above for
    [\$JOB:BAD](#$JOB:BAD).

### \$JOB:HOLD,\<schedule date\>,\<schedule name\>,\<job name\>

The \$JOB:HOLD event places the job on hold. The SAM does not start the
job until it is released.

-   Refer to the parameter descriptions for [\$JOB:BAD](#$JOB:BAD).

### \$JOB:KILL,\<schedule date\>,\<schedule name\>,\<job name\>

The \$JOB:KILL event aborts the job on the [LSAM]{.GeneralLSAM} machine. OpCon reports a killed job as
[Failed]{.skd-job-statuses}. This event is not available for the BIS, OpenVMS, and OS 2200 platforms.

-   Refer to the parameter descriptions for [\$JOB:BAD](#$JOB:BAD).

### \$JOB:QUEUED

The \$JOB:QUEUED event tracks user-submitted jobs on the IBM i and z/OS
platforms. This event is only passed between the [LSAM]{.GeneralLSAM} and the SAM. If a running job is requested, the multi-instance setting
on the job is honored. By default, this event must be submitted to an
active schedule, or the event is rejected.

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If the job is not multi-instance and it is already associated with an OpCon job in Operations that is [Waiting]{.skd-job-statuses} or [Running]{.skd-job-statuses}, the SAM rejects the event. If the job is [Finished OK]{.skd-job-statuses} or [Failed]{.skd-job-statuses}, SAM accepts the event for processing.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   Parameters: None

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Job Tracking                 |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For IBM i, visit the following   |
|                                  | section in the **IBM i LSAM**    |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [Adding New Schedule         | |                                  |     Frequencies](../UI           |
|                                  | /Enterprise-Manager/Adding-S |
|                                  | chedule-Frequencies.md#Adding |
|                                  | _New_Schedule_Frequency){.MCXref |
|                                  |     .xref}                       |
|                                  |                                  |
|                                  | For z/OS, visit the following    |
|                                  | section in the **Concepts**      |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [Tracking Externally         | |                                  |     Submitted Batch Job Events   |
|                                  |     in                           |
|                                  |     OpCon](../Concepts/zOS-Job |
|                                  | -Details.md#Tracking){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+

### \$JOB:RELEASE,\<schedule date\>,\<schedule name\>,\<job name\>

The \$JOB:RELEASE event releases the job from a
[Held]{.skd-job-statuses} state. The SAM starts this job once all its dependencies have been satisfied.

-   Refer to the parameter descriptions for [\$JOB:BAD](#$JOB:BAD).

### \$JOB:RESCHEDHLD,\<schedule date\>,\<schedule name\>,\<job name\>,\<T/S/N\>,\<minutes\>

The \$JOB:RESCHEDHLD reschedules the job start time after the number of
minutes specified. This job will be rescheduled, but put in a
[Held]{.skd-job-statuses} state. 
-   Refer to the parameter descriptions for
    [\$JOB:RESCHEDULE](#$JOB:RES).

### \$JOB:RESCHEDULE,\<schedule date\>,\<schedule name\>,\<job name\>,\<T/S/N\>,\<minutes\>

+----------------------------------+----------------------------------+
| ![White pencil/paper icon on     | **NOTE:** If the job should      | | gray circular                    | reschedule itself on a [Finished |
| background](../.                 | OK]{.skd-job-statuses} or        |
| ./Resources/Images/note-icon(48x | [Failed]{.skd-job-statuses}      | | 48).png "Note icon") | status, [SMA                     |
|                                  | Te                               |
|                                  | chnologies]{.GeneralCompanyName} |
|                                  | recommends using the [Job        | |                                  | Frequency](../Conce              |
|                                  | pts/Job-Frequency.md){.MCXref |
|                                  | .xref} and [Other Job            | |                                  | Details](../Concepts/Jo          |
|                                  | b-Frequency.md#Other){.MCXref |
|                                  | .xref} features in the           |
|                                  | **Concepts** online help.        |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | The Job Recurrence and Retry on  |
|                                  | Job Failure features are much    |
|                                  | more efficient than the          |
|                                  | \$JOB:RESCHEDULE event when used |
|                                  | in those scenarios.              |
+----------------------------------+----------------------------------+

The \$JOB:RESCHEDULE reschedules the job start time after the number of
minutes specified. The event updates the job\'s status to
[Qualifying]{.skd-job-statuses}; consequently, the event releases a [Hold]{.skd-job-statuses} status and clears a [To Be
Skipped]{.skd-job-statuses} status.

Refer to the parameter descriptions for [\$JOB:BAD](#$JOB:BAD), except
for the following:

**\<T/S/N\>:**

 **T**: If \<T/S/N\> contains T, the new start time is calculated based
on the time the job Terminated.

-   If the job is on a schedule in the future that has not started, SAM
    uses the future schedule start date and intended start time of the
    job.

**S**: If \<T/S/N\> contains S, the new start time is calculated based
on the time the job Started.

-   If the job is on a schedule in the future that has not started, SAM
    uses the future schedule start date and intended start time of the
    job.

**N**: If \<T/S/N\> contains N, the new start time is calculated based
on Now, which is the current time the event is processed.

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The start time of a running job cannot be rescheduled. SAM will reject \$JOB:RESCHEDULE events for Container jobs whose subschedules are [In Process]{.skd-job-statuses}.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   If the job has not run yet in an active schedule, the SAM always
    uses the current time the event is processed plus the number of
    minutes specified in the event.
-   SAM uses N by default if the value is not specified in the event.

**\<minutes\>**: Define the number of minutes in the future to set the
start time based on the setting in the T/S/N field. The maximum for
\<minutes\> is 1439.

-   For jobs that have not yet started, you can use the plus (+) and
    minus (-) symbols to increment or decrement the current start offset
    value of a job. The \<T/S/N\> value is ignored in this case.

By default if a schedule is [Completed]{.skd-job-statuses}, the reschedule event will not automatically re-open the schedule. For
information on changing the setting to \"Allow Job Events to Restart
Schedules\", refer to [Time Settings](../Concepts/Time-Settings.md) in the
**Concepts** online help.

### \$JOB:RESTART,\<schedule date\>,\<schedule name\>,\<job name\>,\[Force Restart (optional)\],\[Restart Step (optional)\] 
The \$JOB:RESTART event places the job back in a
[Qualifying]{.skd-job-statuses} state. The job is started as soon as all dependencies are met. By default, the job must be restarted in an active
schedule, or the event is rejected.

-   Refer to the parameter descriptions for [\$JOB:BAD](#$JOB:BAD),
    except for the following:
    -   **\[Force Restart (optional)\]:** Indicates whether or not to         force start the job. This parameter is optional. Valid values
        are:
        -   **Y**: Force start the job.
        -   **N**: Do not force start the job.
        -   If the parameter is not set or specified, the default value
            will be set to **N**.
    -   **\[Restart Step (optional)\]**: Specifies whether or not to         restart the job on a pre-configured step setting. This parameter
        is optional and is only supported for the SAP R/3 and CRM, SAP
        BW, UNIX, and z/OS platforms. Valid values are dependent on the
        host system:
        -   SAP: For more information about the valid values for the SAP
            system, refer to the [SAP LSAM Advanced             Features](https://help.smatechnologies.com/opcon/agents/sap/latest/Files/Agents/SAP/Advanced-Features.md){.MCXref
            .xref} in the SAP agent documentation.
        -   SAP BW: For more information about the valid values for the
            SAP BW system, refer to the [SAP BW LSAM Advanced             Features](https://help.smatechnologies.com/opcon/agents/sapbw/latest/Files/Agents/SAP-BW/Advanced-Features.md){.MCXref
            .xref} in the SAP BW agent documentation.
        -   UNIX: For more information about the valid values for the
            UNIX system, refer to
            [sma_job_step](https://help.smatechnologies.com/opcon/agents/unix/latest/Files/Agents/UNIX/sma_job_step.md#UNIX/Operations-and-Component/Operating-the-LSAM/Utilities/sma_job_step){.MCXref
            .xref} in the UNIX agent documentation.
        -   z/OS: The start and end steps can be specified in the
            \'JCL\' format (jobstep or jobstep.procstep), separated by a
            pipe character. If there is no pipe, or it is not followed
            by a step name, the job will run to the end. If there is no
            starting step (i.e., the restart step starts with a pipe),
            then the job will be restarted without using the step
            restart feature.

### \$JOB:RESTARTHLD,\<schedule date\>,\<schedule name\>,\<job name\>,\[Force Restart (optional)\],\[Restart Step (optional)\] 
The \$JOB:RESTARTHLD event places the job back in a
[Held]{.skd-job-statuses} state. The job will be started as soon as all dependencies are met and it is **Released**. By default, the job must be
restarted in an active schedule, or the event will be rejected.

-   Refer to the parameter descriptions for
    [\$JOB:RESTART](#$JOB:RESTART).

### \$JOB:SKIP,\<schedule date\>,\<schedule name\>,\<job name\>

The \$JOB:SKIP event places the job in a [Job to be Skipped]{.skd-job-statuses} state until the job qualifies to start. When
the job qualifies, it is canceled and the job dependency of all
subsequent jobs is met.

-   Refer to the parameter descriptions for [\$JOB:BAD](#$JOB:BAD).

### \$JOB:START,\<schedule date\>,\<schedule name\>,\<job name\>

The \$JOB:START event triggers SAM to disregard all dependencies and
start the job immediately. This event is invalid for jobs that are in a
[Skipped]{.skd-job-statuses} status. 
-   Refer to the parameter descriptions for [\$JOB:BAD](#$JOB:BAD).

### \$JOB:TRACK

The \$JOB:TRACK event tracks user-submitted jobs on the IBM i, MCP, and
z/OS platforms. This event is only passed between the
[LSAM]{.GeneralLSAM} and the SAM. By default, this event must be submitted to an active schedule, or the event is rejected.

 

Tracked jobs can be controlled by the multi-instance box to prevent or
allow duplicate jobs.

-   Parameters: None

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Job Tracking                 |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For IBM i, visit the following   |
|                                  | section in the **IBM i LSAM**    |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [Adding New Schedule         | |                                  |     Frequencies](../UI           |
|                                  | /Enterprise-Manager/Adding-S |
|                                  | chedule-Frequencies.md#Adding |
|                                  | _New_Schedule_Frequency){.MCXref |
|                                  |     .xref}                       |
|                                  |                                  |
|                                  | For MCP, visit the following     |
|                                  | section in the **MCP LSAM**      |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [Using                       | |                                  |     SMA/Announce](https://hel    |
|                                  | p.smatechnologies.com/opcon/agen |
|                                  | ts/mcp/latest/Files/Agents/MCP/U |
|                                  | sing-SMA_ANNOUNCE.md){.MCXref |
|                                  |     .xref}                       |
|                                  |                                  |
|                                  | For z/OS, visit the following    |
|                                  | section in the **Concepts**      |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [Tracking Externally         | |                                  |     Submitted Batch Job Events   |
|                                  |     in                           |
|                                  |     OpCon](../Concepts/zOS-Job |
|                                  | -Details.md#Tracking){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+

### \$JOB:UNDERREVIEW,\<schedule date\>,\<schedule name\>,\<job name\>

The\$JOB:UNDERREVIEW event marks the job as [Under Review]{.skd-job-statuses}.

-   Refer to the parameter descriptions above for
    [\$JOB:BAD](#$JOB:BAD).

## Machine-Related Events

### \$MACHINE:STATUS,\<machine name\>,\<U/D/L\>

The \$MACHINE:STATUS event places the machine in an up state if the
U/D/L field contains **U**. If it contains **D**, the specified machine
is placed in a down state. If it contains **L**, the specified machine
is placed in a limited state (i.e., SMANetCom does not send job start
information to the [LSAM]{.GeneralLSAM}). 
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Placing a machine in a down state instructs the SAM to stop communicating with the specified machine. Jobs currently active on the specified machine run until completion.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   **\<machine name\>**: An OpCon Machine
    Name.
-   **\<U/D/L\>**: Read the Description stated above.

## Notification Events



### \$NOTIFY:COMMAND,\<path and command to run\>,\[workingdir\],\<batch user\> 
The \$NOTIFY:COMMAND event runs a command.

-   **\<path and command to run\>**: Full path and name of the program
    to run as well as any arguments to be passed to it.
-   **\[workingdir\]**: Working directory used by the program. -   **\<batch user\>**: The user with permissions to run the program.

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [This notification event is disabled on Linux. Events defined prior to Release 20.0.0 will be disabled.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------



### \$NOTIFY:EMAIL,\<to\>,\[cc\],\[ccc\],\<subject\>,\<message\>,\[attachments\],\[exclude prefix information from header: Y/N\] 
The \$NOTIFY:EMAIL event sends an SMTP mail message.

-   **\<to\>**: One or more email address (including distribution
    groups), separated by semicolons (;), to receive the message.
-   **\[cc\]**: One or more email address (including distribution     groups), separated by semicolons (;), to be copied on the message.
-   **\[bcc\]**: One or more email address (including distribution     groups), separated by semicolons (;), to be blind copied on the
    message.
-   **\<subject\>**: The subject of the email.
-   **\<message\>**: Defines a complete, detailed message in the body of
    the email. By default, no machine, schedule, or job information is
    passed with this notification.
-   **\[attachments\]**: Defines the full UNC path to one or more     attachments. This parameter is optional. Separate multiple
    attachments using pipes (\|) (e.g.,
    \\\\server1\\file1\|\\\\Server1\\file2).
-   **\[exclude prefix information from header: Y/N\]**: Specifies     whether or not to include all prefix (system-generated) information
    in the header of the notification. This parameter is optional.
      ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [By default, this parameter is set to N (No). This means that the SMA Notify Handler will insert the system-generated information , which includes a Notification ID, before any other information in the message so users can look up the source of a notification. For more information, refer to [Looking up Notification Sources](../UI/Enterprise-Manager/Looking-up-Notification-Sources.md) in the **Enterprise Manager** online help.]
      ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### \$NOTIFY:LOG,\<severity\>,\<eventid\>,\<message\>,\[event source\],\[exclude prefix information from header: Y/N\] 
The \$NOTIFY:LOG event logs a notification message to the Windows Event
Log.

-   **\<severity\>**: The event severity to be placed in the Windows
    Event Log. Valid values are: **I**, **W**, and **E**. **I** is
    Informational, **W** is Warning, and **E** is Error.
-   **\<eventid\>**: The same Event ID used in the Notification Manager
    when defining an Windows Event Log notification. A third-party
    notification tool uses this number to process the notification.
-   **\<message\>**: Defines a complete, detailed message. By default,
    no machine, schedule, or job information is passed with this
    notification.
-   **\[event Source\]**: Defines a custom Source ID for     OpCon to use when writing to the Windows
    Event Log.
-   **\[exclude prefix information from header: Y/N\]**: Specifies     whether or not to include all prefix (system-generated) information
    in the header of the notification. This parameter is optional.

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [This notification event is disabled on Linux. Events defined prior to Release 20.0.0 will be disabled.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------

### \$NOTIFY:NETSEND,\<machine\>,\<message\>,\[exclude prefix information from header: Y/N\] 
The \$NOTIFY:NETSEND event sends a network pop-up message.

-   **\<machine\>**: A single machine to receive the network pop-up
    message.
-   **\<message\>**: The message for the network window. Defines a
    complete, detailed message. By default, no machine, schedule, or job
    information is passed with this notification.
-   **\[exclude prefix information from header: Y/N\]**: Specifies     whether or not to include all prefix (system-generated) information
    in the header of the notification. This parameter is optional.

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [This notification event is disabled on Linux. Events defined prior to Release 20.0.0 will be disabled.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------

### \$NOTIFY:SNMP,\<severity\>,\<eventid\>,\<message\>,\[exclude notification id from header: Y/N\] 
The \$NOTIFY:SNMP event sends an SNMP trap to an SNMP Trap manager. The
SMA Notify Handler must be configured for SNMP notifications.

-   **\<severity\>**: The SNMP severity for the SNMP trap. Valid values
    range from 1 to 5. 1 is Critical, 2 is Major, 3 is Minor, 4 is
    Warning, and 5 is Information.
-   **\<eventid\>**: The same Event ID used in the Notification Manager
    when defining an SNMP notification. A third-party notification tool
    uses this number to process the notification.
-   **\<message\>**: The SNMP trap\'s text. Defines a complete, detailed
    message. By default, no machine, schedule, or job information is
    passed with this notification.
-   **\[exclude notification id from header: Y/N\]**: Specifies whether     or not to include the Notification ID in the header of the
    notification. This parameter is optional.

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [This notification event is disabled on Linux. Events defined prior to Release 20.0.0 will be disabled.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------

### \$NOTIFY:SPOAL,\<text\>,\<severity\>,\<alarmid\>,\<alarmqual\>,\[exclude notification id from header: Y/N\] 
The \$NOTIFY:SPOAL event sends and AL event report to SPO. The SMA
Notify Handler must be configured for SPO notifications.

-   **\<text\>**:The text for the AL event report. To send the default
    \<lsam_mach_name\> \<schedule_date\> \<schedule_name\> \<job_name\>,
    do not type any text and enter a comma to indicate the start of the
    next parameter.
-   **\<severity\>**: The SPO severity. Valid values are Critical,
    Major, Minor, Warning, Informational, Indeterminate, and Clear.
-   **\<alarmid\>**: The SPO Alarmid.
-   **\<alarmqual**\>: The SPO Alarmqual
-   **\[exclude notification id from header: Y/N\]**: Specifies whether     or not to include the Notification ID in the header of the
    notification. This parameter is optional.

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [This notification event is disabled on Linux. Events defined prior to Release 20.0.0 will be disabled.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------

### \$NOTIFY:SPOCO,\<instance\>,\<command\>

The \$NOTIFY:SPOCO event sends a CO event report to SPO. The SMA Notify
Handler must be configured for SPO notifications.

-   **\<instance\>**: The SPO instance to process the command.
-   **\<command\>**: The command for SPO to process.

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [This notification event is disabled on Linux. Events defined prior to Release 20.0.0 will be disabled.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------

### \$NOTIFY:TASKS,\<To\>,\<Cc\>,\<Bcc\>,\<Subject\>,\<Date Desired\>

The \$NOTIFY:TASKS event sends an SMTP mail message (or multiple if
needed) with the email body containing:

-   **Task Counts for \<Customer Name from License File\>**: This
    section contains a comma-separated list of:
    -   Period: The date or month for which the report processed.
    -   [LSAM]{.GeneralLSAM} Type: The type of [LSAM]{.GeneralLSAM} that         processed the tasks.
    -   Number of Days with tasks: The number of days on which tasks
        processed in the period.
    -   Total Tasks in Period: The total number of tasks that processed
        in the selected period.
    -   Avg Tasks per Day: The average number of tasks that processed
        each day in the selected period.
    -   Following the first list, there is a comma-separated list of:
        -   Exceeded Max Date: The date on which the total number of
            tasks per day was exceeded.
        -   [LSAM]{.GeneralLSAM} Type: The [LSAM]{.GeneralLSAM} type             that processed too many tasks.
        -   Total Tasks: The total number of tasks that were processed
            by the [LSAM]{.GeneralLSAM} Type on the date the tasks were             exceeded.
-   **Tasks Counted for SMA Utility Jobs**: In a comma-separated list,
    this section contains the list of jobs that were not counted against
    the task based license:
    -   Period: The date or month for which the report processed.
    -   [LSAM]{.GeneralLSAM} Type: The type of [LSAM]{.GeneralLSAM} that         processed the tasks.
    -   Number of Days with tasks: Within the [LSAM]{.GeneralLSAM} Type,         the number of days on which tasks processed in the period.
    -   Total Tasks in Period: Within the [LSAM]{.GeneralLSAM} Type, the         total number of tasks that processed in the selected period.
    -   Avg Tasks per Day: Within the [LSAM]{.GeneralLSAM} Type, the         average number tasks that processed each day in the selected
        period.
-   **Tasks Counts by Department**: This section contains a list of
    tasks by Department in a comma-separated list of:
    -   Period: The date or month for which the report processed.
    -   Dept Name: The Department in which the tasks processed.
    -   Number of Days with tasks: Within the Department, the number of
        days on which tasks processed in the selected period.
    -   Total Tasks in Period: Within the Department, the total number
        of tasks that processed in the selected period.
    -   Avg Tasks per Day: Within the Department, the average number of
        tasks that processed each day in the selected period.
-   The parameters to the event include:
    -   **\<To\>**: One or more email address (including distribution
        groups), separated by semicolons (;), to receive the message.
        -   To generate specific task based license reporting
            information to send to [SMA             Technologies]{.GeneralCompanyName}, enter the license email
            address for your [SMA Technologies]{.GeneralCompanyName}             sales and support office:
            -   For [SMA Europe]{.GeneralSMAOfficeEurope}, use                 <license-eu@smatechnologies.com>.
            -   For [SMA France]{.GeneralSMAOfficeFrance}, use                 <license-fr@smatechnologies.com>.
            -   For [SMA USA]{.GeneralSMAOfficeUSA}, use                 <license@smatechnologies.com>.
        -   If the [Send Email to SMA             Office]{.GeneralSendEmailtoSMAOffice} value in the Global
            Options is set to Disabled, SAM will write the license
            reporting information to the SAM.log file only, and no email
            is sent as a result of the event.
        -   If the [Send Email to SMA             Office]{.GeneralSendEmailtoSMAOffice} value in the Global
            Options has and [SMA Technologies]{.GeneralCompanyName}             office selected, the license reporting information will be
            emailed to [SMA Technologies]{.GeneralCompanyName}.     -   **\<Cc\>**: One or more email address (including distribution
        groups), separated by semicolons (;), to be copied on the
        message.
    -   **\<Bcc\>**: One or more email address (including distribution
        groups), separated by semicolons (;), to be blind copied on the
        message.
    -   **\<Subject\>**: The subject of the email.
    -   **\<Date Desired\>**: Define a single date or a month name
        defined using the syntax recognized by the regional settings of
        the user running SMA Service Manager.

### \$NOTIFY:TEXTMSG,\<to\>,\<message\>,\[exclude notification id from header: Y/N\] 
The \$NOTIFY:TEXTMSG event sends a text message.

-   **\<to\>**: A single SMTP email address to an SMS-capable device.
-   **\<message\>**: The notification message\'s text. Defines a
    complete, detailed message. By default, no machine, schedule, or job
    information is passed with this notification.
-   **\[exclude notification id from header: Y/N\]**: Specifies whether     or not to include the Notification ID in the header of the
    notification. This parameter is optional.

## Property-Related Events

For each of the property events, the specified Property Name must
completely identify the property. The syntax for identifying a property
depends on whether the property is an OpCon
Instance, Machine Instance, Schedule Instance, or Job Instance property.
Machine, Schedule, and Job Instance properties have optional qualifiers
to specifically identify an instance. For additional information, refer
to [Fully Qualified Property Name Syntax](../Concepts/Using-Properties-for-Automation.md#Fully){.MCXref
.xref} in the **Concepts** online help. For more information on creating
valid property definitions, refer to [Defining Properties](../Concepts/Defining-Properties.md) in the
**Concepts** online help.

+----------------------------------+----------------------------------+
| ![White pencil/paper icon on     | **NOTE:** [If the property name  | | gray circular                    | or any of the qualifiers contain |
| background](../.                 | periods (.), square brackets (   |
| ./Resources/Images/note-icon(48x | \[ or \] ), or curly brackets (  | | 48).png "Note icon") | { or } ) in their names, the     |
|                                  | name must be enclosed in quotes  |
|                                  | to preserve the syntax of the    |
|                                  | property name. For example, a JI |
|                                  | property could look like this:   |
|                                  | ]                    |
|                                  |                                  |
|                                  | [[JI.\"File.Nam                  | |                                  | e\".\"08.01.2010\".\"Sched\[Name |
|                                  | \]\".\"Job{Name}\"]{.output_Char |
|                                  | styl                             |
|                                  | e="font-family: 'Courier New';fo |
|                                  | nt-style: normal;"}] |
+----------------------------------+----------------------------------+

### \$PROPERTY:ADD,\<property name\>,\<initial value\>

The \$PROPERTY:ADD event adds a new property (of any type) to the
database with the value specified. If the event attempts to add a
property that already exists, the event merely sets the property value.
For backward compatibility, the following syntax is also valid:
[\$TOKEN:ADD,\<token name\>,\<initial value\>]{._Override style="font-family: 'Courier New';"}

-   **\<property name\>**: The property name.
-   **\<initial value\>**: The initial value given to the property name.

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** [For a              | | circular                         | \$PROPERTY:ADD event attached to |
| background](../../Reso           | a Schedule or Job (internal      |
| urces/Images/example-icon(48x48) | event), the following are valid  |
| .png "Example icon") | for adding a property to a       |
|                                  | subschedule whose parent         |
|                                  | schedule is a multi-instance     |
|                                  | schedule:]{.statement2}          |
|                                  |                                  |
|                                  | \$PROPERT                        |
|                                  | Y:ADD,JI.FileName.\[\[\$SCHEDULE | |                                  | DATE\]\].\"\                     |
|                                  | Schedule.Nam                     |
|                                  | e_InstanceName\[subSched\]\".Job | |                                  | Name,Value - or -                |
|                                  |                                  |
|                                  | \$PROPERT                        |
|                                  | Y:ADD,JI.FileName.\[\[\$SCHEDULE | |                                  | DATE\]\].\                       |
|                                  | \[\[\$SCHEDULE                   | |                                  | NAME\]                           |
|                                  | \]\_InstanceName\[subSched\].Job | |                                  | Name,Value                       |
|                                  |                                  |
|                                  | For an External \$PROPERTY:ADD   |
|                                  | event, the following would be    |
|                                  | valid:                           |
|                                  |                                  |
|                                  | \$PROPE                          |
|                                  | RTY:ADD,JI.FileName.\[\[\$DATE\] | |                                  | \].\"Schedule.Name_InstanceName\ |
|                                  | \[SubSched\]\".Job Name,Value -  | |                                  | or -                             |
|                                  |                                  |
|                                  | \$P                              |
|                                  | ROPERTY:ADD,JI.FileName.Specific |
|                                  | Date.Schedule.Name_InstanceName\ |
|                                  | \[SubSched\].Job Name,Value      | +----------------------------------+----------------------------------+

### \$PROPERTY:DELETE,\<property name\>

The \$PROPERTY:DELETE event deletes an existing property from the
database. For backward compatibility, the following syntax is also
valid: [\$TOKEN:DELETE,\<token name\>]{._Override style="font-family: 'Courier New';"}

-   **\<property name\>**: The property name.

### \$PROPERTY:SET,\<property name\>,\<value\>

The \$PROPERTY:SET event sets the value of any existing property to the
specified value. For backward compatibility, the following syntax is
also valid: [\$TOKEN:SET,\<token name\>,\<value\>]{._Override style="font-family: 'Courier New';"}

-   **\<property name\>**: The property name.
-   **\<value\>**: The value of the property defined.

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** If a \$PROPERTY:SET event is created for a global property that is encrypted, then the value of the property will get updated and stored as a clear text value and NOT as an encrypted value.
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## SAM Log Events

### \$CONSOLE:DISPLAY,\<message\>

The \$CONSOLE:DISPLAY event displays the message in the SAM.log file in
the \<Output Directory\>\\SAM\\Log\\ directory on the
OpCon server.

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Output Directory was configured during installation. For more information, refer to [File Locations](../Concepts/File-Locations.md) in the **Concepts** online help.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   **\<message\>**: A user-defined message.

## Schedule-Related Events

For all schedule-related events, only valid schedule status changes are
allowed. For more information, refer to [Schedule Statuses](../Concepts/Schedule-and-Job-Status-Descriptions.md#Schedule){.MCXref
.xref} in the **Concepts** online help.

### \$SCHEDULE:BUILD,\<schedule date\>,\<schedule name\>,\[log file\],\<Y/N\>,\[schedule instance property definitions\],\[Named Instance to build\] 
If the [SMA_SKD_BUILD]{._Override style="font-family: 'Courier New';"} job exists on the AdHoc schedule in the Master and the event fails for
some reason, the SAM will process any events defined on the
SMA_SKD_BUILD job for the [Failed]{.skd-job-statuses} status. The job will not actually be added to the Daily for processing. Only the
notifications and other events associated with \"Build Failure\" will be
processed.

**\<schedule date\>**: The date for which to build the schedule.

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [By default, if the date resolves to a date in the past, the schedule will be built [On Hold]{.skd-job-statuses}.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------

**\<schedule name\>**: The name of the schedule to build.

**\[log file\]**: An optional argument specifying the path and/or file name for creating a detailed log file of the build. The default path and
filename is: [\<Output Directory\>\\SAM\\Log\\SMASchedMan\\ScheduleName_Build_ScheduleDate_RequestID.log]{._Override
style="font-family: 'Courier New';"}

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Output Directory was configured during installation. For more information, refer to [File Locations](../Concepts/File-Locations.md) in the **Concepts** online help.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   [ScheduleName]{._Override style="font-family: 'Courier New';"} is     the schedule name built.
-   [ScheduleDate]{._Override style="font-family: 'Courier New';"} is     the date for which the schedule is built.
-   [RequestID.log]{._Override style="font-family: 'Courier New';"} is     the internal ID number of the OpCon
    Request that ensures a unique log file name.
-   If the path is acceptable but a different file name is desired,
    simply enter a name for the file.
-   If the default path and filename are acceptable, leave the parameter
    empty and insert the comma to indicate the beginning of the next
    parameter in the event.

**\<Y/N\>**: Determines whether to overwrite an existing schedule or
not. Valid entries include:

-   **Y**: Overwrite
-   **N**: Do Not Overwrite (N is the default)

**\[schedule instance property definitions\]**: Defines Schedule Instance Properties for the schedule being built. This parameter is
optional. If not specified, the comma preceding this parameter is not
required. For information on creating valid property definitions, refer
to [Defining Properties](../Concepts/Defining-Properties.md){.MCXref
.xref} in the **Concepts** online help. Use the following syntax to
define properties in the event:\
[PropertyName1=value;PropertyName2=value,etc\...]{._Override style="font-family: 'Courier New';"}

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:**                     | | circular                         |                                  |
| background](../../Reso           | \$SCHEDULE:BUI                   |
| urces/Images/example-icon(48x48) | LD,\[\[\$DATE\]\],ProcessCreditC | | .png "Example icon") | ards,,Y,StoreNumber=2682;FileDat |
|                                  | e=123456,batchuser,batchpassword |
+----------------------------------+----------------------------------+

-   If the schedule has Schedule Instance definitions, and all instances
    should be built, do not specify Schedule Instance Property
    Definitions on the event. By default, all predefined instances will
    build.
-   If the schedule is configured to \"Build an instance for each
    machine in Machine Group,\" and the build is intended for only one
    specific Machine, specify the machine by adding a property named
    MACHINENAME as the first property definition.

**\[Named Instance to build\]**: Defines the named instance of the schedule to build. This parameter is optional. If not specified, the
comma preceding this parameter is not required. For information on
referencing valid named instances, refer to [Named Schedule Instances](../Concepts/Named-Schedule-Instances.md)
in the **Concepts** online help. Use the following syntax to define the
instance name in the event:\
[InstanceName=value]{._Override style="font-family: 'Courier New';"} 
+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:**                     | | circular                         |                                  |
| background](../../Reso           | \$SCHEDULE:BUI                   |
| urces/Images/example-icon(48x48) | LD,\[\[\$DATE\]\],ProcessCreditC | | .png "Example icon") | ards,,Y,,InstanceName=WinServer2 |
+----------------------------------+----------------------------------+

-   If the instance name is specified in the event string, SMASchedMan
    will build the named instance of the schedule, copy all properties
    defined for that instance, and copy any user-defined properties in
    the event string.
-   If the instance name specified in the event string, but the schedule
    being built is not associated with any named instances, then the
    build will fail.
-   If no instance name is specified in the event and the schedule is
    associated with named instances, then all named instances will get
    built (with any user-defined properties added to each instance).

### \$SCHEDULE:BUILDHLD,\<schedule date\>,\<schedule name\>,\[log file\], \<Y/N\>,\[schedule instance property definitions\],\[Named Instance to build\] 
-   If the SMA_SKD_BUILD job exists on the AdHoc schedule in the Master
    and the event fails for some reason, the SAM will process any Events
    defined on the SMA_SKD_BUILD job for the [Failed]{.skd-job-statuses}     status. The job will not actually be added to the Daily for
    processing. Only the notifications and other events associated with
    \"Build Failure\" will be processed.
-   Refer to the parameter descriptions for
    [\$SCHEDULE:BUILD](#$SCHEDULE:BUILD,%3Cschedule_date%3E,_%3Cschedule_name%3E,%3Clog_file_name%3E,_%3Coverwrite_flag%3E,_%5BSchedule_Instance_Property_Definitions%5D).

### \$SCHEDULE:CHECK,\<schedule date\>,\<schedule name\>,\[log file\],\<Y/N/S\> 
If the [SMA_SKD_CHECK]{._Override style="font-family: 'Courier New';"} job exists on the AdHoc schedule in the Master and the event fails for
some reason, the SAM will process any Events defined on the
SMA_SKD_CHECK job for the [Failed]{.skd-job-statuses} status. The job will not actually be added to the Daily for processing. Only the
notifications and other events associated with \"Check Failure\" will be
processed.

**\<schedule date\>**: The date to check the schedule on.

**\<schedule name\>**: The exact schedule name to check. To check all
instances of a multi-instance schedule, specify the master schedule
name.

**\[log file\]**: An optional argument specifying the path and/or file name for creating a detailed log file of the check. The default path and
filename is: [\<Output Directory\>\\SAM\\Log\\SMASchedMan\\ScheduleName_RequestID.log]{._Override
style="font-family: 'Courier New';"}

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Output Directory was configured during installation. For more information, refer to [File Locations](../Concepts/File-Locations.md) in the **Concepts** online help.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   [ScheduleName]{._Override style="font-family: 'Courier New';"} is     the schedule name checked.
-   [ScheduleDate]{._Override style="font-family: 'Courier New';"} is     the date the schedule checked.
-   [RequestID.log]{._Override style="font-family: 'Courier New';"} is     the internal ID number of the OpCon
    Request that ensures a unique log file name.
-   If the path is acceptable but a different file name is desired,
    simply enter a name for the file.
-   If the default path and filename are acceptable, leave the parameter
    empty and insert the comma to indicate the beginning of the next
    parameter in the event.

**\<Y/N/S\>**: Indicates if circular dependencies are included in the
process. Valid values are:

-   **Y**: Check for circular dependencies
-   **N**: Do not check for circular dependencies (**N** is the default)
-   **S**: Perform a simple check which skips after, conflict, and
    circular dependencies.

### \$SCHEDULE:CHECKALL,\<schedule date\>,\[log file\],\<Y/N/S\> 
-   If the [SMA_SKD_CHECK]{._Override     style="font-family: 'Courier New';"} job exists on the AdHoc
    schedule in the Master and the event fails for some reason, the SAM
    will process any Events defined on the SMA_SKD_CHECK job for the
    [Failed]{.skd-job-statuses} status. The job will not actually be     added to the Daily for processing. Only the notifications and other
    events associated with \"Check Failure\" will be processed.
-   If the [SMA_SKD_CHECK]{._Override     style="font-family: 'Courier New';"} job does not exist, the check
    request is inserted directly into the database for processing, and
    notification will [not]{.ul} be sent if the process fails. -   Refer to the parameter descriptions for [\$SCHEDULE:CHECK,\<schedule
    date\>,\<schedule name\>,\[log file\],\<Y/N/S\>](#$SCHEDUL){.MCXref
    .xref}.

### \$SCHEDULE:DELETE,\<schedule date\>,\<schedule name\>,\[log file\] 
The \$SCHEDULE:DELETE event causes the schedule to be deleted from a
specific schedule date.

If the [SMA_SKD_DELETE]{._Override style="font-family: 'Courier New';"} job exists on the AdHoc schedule in the Master and the event fails for
some reason, the SAM will process any Events defined on the
SMA_SKD_delete job for the [Failed]{.skd-job-statuses} status. The job will not actually be added to the Daily for processing. Only the
notifications and other events associated with \"Delete Failure\" will
be processed.

**\<schedule date\>**: The date from which to delete the schedule.

**\<schedule name\>**: The exact schedule name to delete. To delete all
instances of a multi-instance schedule, specify the master schedule
name.

**\[log file\]**: An optional argument specifying the path and/or file name for creating a detailed log file of the delete. The default path
and filename is: [\<Output Directory\>\\SAM\\Log\\SMASchedMan\\ScheduleName_Delete_ScheduleDate_RequestID.log]{._Override
style="font-family: 'Courier New';"}

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Output Directory was configured during installation. For more information, refer to [File Locations](../Concepts/File-Locations.md) in the **Concepts** online help.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   [ScheduleName]{._Override style="font-family: 'Courier New';"} is     the schedule name deleted.
-   [ScheduleDate]{._Override style="font-family: 'Courier New';"} is     the date from which the schedule is deleted.
-   [RequestID.log]{._Override style="font-family: 'Courier New';"} is     the internal ID number of the OpCon
    Request that ensures a unique log file name.
-   If the path is acceptable but a different file name is desired,
    simply enter a name for the file.

If the default path and filename are acceptable, leave the parameter
empty.

### \$SCHEDULE:CANCEL,\<schedule date\>,\<schedule name\>

The \$SCHEDULE:CANCEL event cancels all jobs on the schedule.

-   **\<schedule date\>**: A date entered in the same date format as the
    syntax recognized by the regional settings of the user running SMA
    Service Manager.
-   **\<schedule name\>**: An OpCon Schedule
    Name.

### \$SCHEDULE:HOLD,\<schedule date\>,\<schedule name\>

The \$SCHEDULE:HOLD event places the schedule [On Hold]{.skd-job-statuses}; no additional jobs are initiated until the
schedule is released. If there are subschedules under the defined
schedule and they are in a status of [In Process]{.skd-job-statuses} or [Completed]{.skd-job-statuses}, those subschedules are placed in a
status of [Parent Hold]{.skd-job-statuses}. 
-   **\<schedule date\>**: A date entered in the same date format as the
    syntax recognized by the regional settings of the user running SMA
    Service Manager.
-   **\<schedule name\>**: An OpCon Schedule
    Name.

### \$SCHEDULE:RELEASE,\<schedule date\>,\<schedule name\>

The \$SCHEDULE:RELEASE event releases the schedule; the SAM will resume
processing of the schedule. If there are subschedules under the defined
schedule and they are in a status of [Parent Hold]{.skd-job-statuses}, those subschedules will also be released.

-   **\<schedule date\>**: A date entered in the same date format as the
    syntax recognized by the regional settings of the user running SMA
    Service Manager.
-   **\<schedule name\>**: An OpCon Schedule
    Name.

### \$SCHEDULE:START,\<schedule date\>,\<schedule name\>

The \$SCHEDULE:START event causes the SAM to start processing the
schedule immediately, ignoring the defined start date and time of the
schedule. If there are subschedules under the defined schedule and they
are in a status of [Parent Hold]{.skd-job-statuses}, those subschedules will also be started.

-   **\<schedule date\>**: A date entered in the same date format as the
    syntax recognized by the regional settings of the user running SMA
    Service Manager.
-   **\<schedule name\>**: An OpCon Schedule
    Name.

## Threshold/Resource-Related Events

### \$THRESHOLD:SET,\<threshold name\>,\<value\>

The \$THRESHOLD:SET event sets the threshold to the value specified. If
a plus (+) or minus (-) sign is used in front of the value, the
Threshold is incremented or decremented accordingly.

-   **\<threshold name\>**: An OpCon
    Threshold Name.
-   **\<value\>**: An update value for the threshold.

### \$RESOURCE:SET,\<resource name\>,\<value\>

The \$RESOURCE:SET event changes the Max Resources for the Resource to
the value specified.

-   **\<resource name\>**: An OpCon Resource
    Name.
-   **\<value\>**: An update value for the resource.
:::

 

