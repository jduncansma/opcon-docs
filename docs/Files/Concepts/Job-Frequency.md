---
lang: en-us
title: Job Frequency
viewport: width=device-width, initial-scale=1.0
---

#  Job Frequency

The **Frequency** specifies the weeks, days, and calendar information
for when a job is to be executed. For additional information, refer to
[Job and Schedule Frequencies](Job-and-Schedule-Frequencies.md).
Frequency information is defined in the Job Master.

 

The following information applies to defining a frequency:

-   **Frequency Name**: Defines the unique name of the frequency.
-   **Frequency Details**: Defines the days that qualify for the
    frequency. For additional information, refer to [Frequency     Definition](Frequency-Definition.md).
-   **Priority**: Defines the priority of the frequency with regard to
    other frequencies defined for the job. For additional information,
    refer to [Multiple Frequencies and Frequency     Priority](Multiple-Frequencies-and-Frequency-Priority.md){.MCXref
    .xref}.
-   **Advanced Frequency Settings**: Defines the advanced frequency
    features applied to a job. For additional information, refer to
    [Advanced Frequency     Settings](Advanced-Frequency-Settings.md).

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are several references for       |
| background](../../Resourc        | implementing the Job Frequency   |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding Job                  | |                                  |     Frequencies](../UI/          |
|                                  | Enterprise-Manager/Adding-Jo |
|                                  | b-Frequencies.md#top){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Editing Job                 | |                                  |     Frequencies](../             |
|                                  | UI/Enterprise-Manager/Editing% |
|                                  | 20Job-Frequencies.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Job                | |                                  |     Frequencies](../UI/En        |
|                                  | terprise-Manager/Deleting-Jo |
|                                  | b-Frequencies.md#top){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Forecasting a Single Job    | |                                  |     Frequency](../UI/Enterprise  |
|                                  | -Manager/Forecasting-Job-F |
|                                  | requencies.md#Forecast){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Forecasting All Job         | |                                  |                                  |
|                                  |   Frequencies](../UI/Enterprise% |
|                                  | 20Manager/Forecasting-Job-Fr |
|                                  | equencies.md#Forecast2){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Managing Advanced Job       | |                                  |                                  |
|                                  | Frequencies](../UI/Enterprise- |
|                                  | Manager/Managing-Advanced-Jo |
|                                  | b-Frequencies.md#top){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Advanced Frequency | |                                  |     Set                          |
|                                  | tings](../UI/Enterprise-Manage |
|                                  | r/Managing-Advanced-Job-Fr |
|                                  | equencies.md#Deleting2){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+

## Other Job Details

The other job details are attached to a defined frequency. This provides
the flexibility to define different criteria on different sets of dates.
Other job detail information includes:

-   [Job Build Status](#Job)
-   [Start Offset](#Start)
-   [Latest Start Offset](#Latest)
-   [Late to Start/Late to Finish](#Late)
-   [Start Time Estimation](#Start2)
-   [Job Execution](#Job2)
-   [Retry on Failure](#Retry)
-   [Job Recurrence](#Job3)

### Job Build Status

The Job Build Status determines the default status of the job when it is
built with the schedule for the associated frequency. Status choices
include:

-   **On Hold**: Indicates that the SAM will not automatically start the
    job when the schedule becomes active, even if all other requirements
    (dependencies, start time, etc.) have been met.
-   **Released**: Indicates that the job will start when the schedule
    becomes active and all other requirements have been met.
-   **Do Not Schedule**: Indicates that the job will not be built with
    the schedule when the associated frequency qualifies.
    -   To use the \"Do Not Schedule\" feature to ignore a frequency,
        place the associated frequency as the lowest priority.
    -   To use the \"Do Not Schedule\" feature to exclude specific
        dates, place the associated frequency with a higher priority
        than the frequency containing the dates needing exclusion.
-   **To Be Skipped**: The job will be built with a default status of
    [To be Skipped]{.skd-job-statuses}. -   **Disable Frequency**: If set, OpCon will
    not evaluate the selected frequency when forecasting or building.

### Start Offset

Defines the positive number of hours and minutes to offset the start
time of the job from the start time of the schedule. To correctly
calculate the offset, the Absolute or Relative option must be set for
the Start Offset:

-   **Absolute**: Indicates that the job\'s Start Time will be
    calculated from the [assigned]{.ul} start time of the schedule. -   **Relative**: Indicates that the job\'s Start Time will be
    calculated from the time the schedule was [released]{.ul} for     execution.

### Latest Start Offset

Defines the positive number of hours and minutes to offset the latest
start time of the job from the start time of the schedule. If the latest
start time is passed before the job qualifies for execution, the job is
set to a [Missed Latest Start Time]{.skd-job-statuses} status and will not automatically execute. The default value of 00:00 disables the
feature. To correctly calculate the offset, the Absolute or Relative
option must be set for the Latest Start:

-   **Absolute**: Indicates that the job\'s Latest Start Time will be
    calculated from the [assigned]{.ul} start time of the schedule. -   **Relative**: Indicates that the job\'s Latest Start Time will be
    calculated from the time the schedule was [released]{.ul} for     execution.

### Late to Start/Late to Finish

The Late to Start and Late to Finish settings determine the time to flag
a job as late. If these options are configured, and the late time
arrives, then OpCon events on the job,
Threshold Updates on the job, and Notification Manager triggers can send
notification. For additional information, refer to [Threshold/Resource Updates](Threshold_Resource-Updates.md) and [Defining
Events](../OpCon-Events/Defining-Events.md) in the
**OpCon Event** online help, and [Using Notification Manager](../UI/Enterprise-Manager/Using-Notification-Manager.md){.MCXref
.xref} in the **Enterprise Manager** online help.

-   **Late to Start Offset**: Defines the positive number of hours and
    minutes to offset the Late to Start time from the job Start Offset
    (taking into consideration the Absolute or Relative setting). If the
    time arrives and the job has not yet started, it will be set to a
    status of [Late to Start]{.skd-job-statuses}. The time at which the     job will be set to a status of [Late to Start]{.skd-job-statuses} is
    calculated by adding the **Schedule Start Time + Job Start Offset +
    Late to Start**. The default value of 00:00 disables this feature.
-   **Late to Finish Offset**: Defines the positive number of hours and
    minutes to offset the Late to Finish time from the job Start Offset
    (taking into consideration the Absolute or Relative setting). If the
    time arrives and the job is still running, it will be set to a
    status of [Running; Late to Finish]{.skd-job-statuses}. The time at     which the job will be set to a status of [Late to
    Finish]{.skd-job-statuses} is calculated by adding the **Schedule
    Start Time + Job Start Offset + Late to Finish**. The default value
    of 00:00 disables this feature.

### Start Time Estimation

-   **Estimation Source**: Defines the method for the SMA Start Time
    Calculator to use when predicting the job\'s Estimated Start Time.
    Options include:
    -   **Calculated**: (Default) Use the job\'s start offset value and
        dependency chain to calculate the estimated start time. When a
        job has no external dependencies, this is the best option.
    -   **History**: Use the job\'s average start time by frequency from
        history as the estimated start time. The History option is
        useful when a job depends on external events or user interaction
        to start the job.
    -   **User Defined**: Use a hard-coded Predicted Start Time in days,
        hours, and minutes offset from the schedule\'s start time. The
        User Defined option is useful when the History option does not
        prove to be an accurate enough estimated start time.
-   **Estimated Run Time**: Defines the estimated runtime in minutes for
    the job. This value can be manually configured; however, [SMA     Technologies]{.GeneralCompanyName} recommends setting up a job to
    run the SMA_JOBAVG stored procedure to automatically calculate the
    value on a regular basis. For information on job averaging, refer to
    [SMA Job Average](SMAUtility-Schedule.md#SMA).

### Job Execution

-   **SAM Priority**: Defines a number for the job\'s priority, zero (0)
    being the lowest. If the SAM can submit more jobs at the same time
    to a machine than the machine allows, the SAM uses the priority
    values to submit the most important jobs first.
-   **Max Run Time**: Defines the maximum run time in minutes for the
    job. If the job has run for the specified amount of time, it is left
    running, but set to a status of [Exceeded Max Run     Time]{.skd-job-statuses}. If this option is configured and the job
    runs too long, then OpCon events,
    threshold updates, and Notification Manager triggers can be
    processed for the job. For additional information, refer to
    [Threshold/Resource     Updates](Threshold_Resource-Updates.md) and
    [Defining Events](../OpCon-Events/Defining-Events.md){.MCXref
    .xref} in the **OpCon Events** online help, and [Using Notification     Manager](../UI/Enterprise-Manager/Using-Notification-Manager.md){.MCXref
    .xref} in the **Enterprise Manager** online help. The default value
    of 0 disables this feature.

### Retry on Failure

The Retry on Failure feature is useful for situations where a job may
fail because of timing (e.g., a database is currently unavailable, or a
file has not yet arrived). OpCon will process
the events, threshold/resource updates, and subsequent job dependencies
only upon job failure after the maximum retry.

 

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If the job finishes OK, any configured OpCon automation features for Finished OK jobs will process.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------

 

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [For jobs that have the ability to restart at a step (e.g., z/OS jobs), a job that is automatically restarted after a failure starts at whatever restart step is specified at the time.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Retry Information**: Determines if a job is automatically restarted
after a job failure. If the job fails because of an initialization
error, OpCon does not restart the job.
Initialization errors usually occur because the information to start the
job is invalid. [SMA Technologies]{.GeneralCompanyName} recommends using Event Notification to trigger a notification for Job Initialization
errors. For more information, refer to [Event Notification](Event-Notification.md).

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If the job is a \"Container\" type job, the SAM restarts all jobs on the subschedule when the Container job qualifies to \"Retry on Failure.\"]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   **Minutes Between Attempts**: Defines the interval between restart
    attempts in minutes.
-   **Maximum Attempts**: Defines the maximum number of restart
    attempts. OpCon events on the job,
    threshold updates on the job, and Notification Manager triggers will
    only execute when the job fails after the last attempt. For
    additional information, refer to [Threshold/Resource     Updates](Threshold_Resource-Updates.md) and
    [Defining Events](../OpCon-Events/Defining-Events.md){.MCXref
    .xref} in the **OpCon Events** online help, and [Using Notification     Manager](../UI/Enterprise-Manager/Using-Notification-Manager.md){.MCXref
    .xref} in the **Enterprise Manager** online help.

### Job Recurrence

The Job Recurrence feature is useful for situations where a job needs to
run at regular intervals and/or absolute times throughout the day (e.g.,
backing up files, processing groups of credit card transactions).
OpCon will process the events, and
threshold/resource updates every time the job finishes OK; however,
subsequent job dependencies will only process after the last run of the
day.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If the job fails, any configured OpCon automation features for Failed jobs will process.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------

**Run Again**: Determines if a job is automatically rescheduled after a
successful run. Available options are: None, Recurring Instances, or
Restart Offset.

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If the job is a \"Container\" type job, the SAM restarts all jobs on the subschedule when the Container job qualifies to \"Run Again\" when the job finishes OK.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**None**: Specifies that no job reschedule will take place after a
successful run.

**Recurring Instances**: Allows you to reschedule a successful job to
run at fixed times throughout the day. Available options are:

-   **Add**: Adds new restart times in days, hours, and minutes.
    Specified times appear in the Recurring Instance Time(s) list box in
    chronological order.
      ------------------------------------------------------------------------------------------------------------------------------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      ![White pencil icon on green circular background](../../Resources/Images/example-icon(48x48).png "Example icon")   **EXAMPLE:** [If you want a particular restart time to execute two additional days, then enter \"2\" in the field to the left of *day(s) at*, enter the absolute hour and/or minutes in the entry field to the right of *days at*, and click **Add**.]{.statement2}
      ------------------------------------------------------------------------------------------------------------------------------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-   **Remove**: Deletes existing restart times.
-   **Update**: Updates existing restart times.
-   **Action on Overlap of Job Recurrence**: Indicates what happens if a
    previous job run time overlaps the next scheduled start time.
    Available options are:
    -   **Start on Completion** (Default): Starts the next scheduled
        time as soon as the previous run finishes successfully.
    -   **Skip**: Skips the run for \[that\] scheduled time after the         previous run finishes successfully.

**Restart Offset**: Allows you to reschedule a successful job to run at
regular intervals throughout the day. Available options are:

-   **Minutes from Start to Start**: Defines the number of minutes from
    the start time of one iteration of the job to the start time for the
    next iteration of the job.
-   **Minutes from End to Start**: Defines the number of minutes from
    the end of one iteration of the job to the start time for the next
    iteration of the job.
-   **Latest Run Time**: Defines the latest possible start time for the
    recurring job based on the schedule\'s start time. This value is an
    offset that will be added to the schedule\'s defined Schedule Date
    and scheduled Start Time in the Daily tables.
-   **Number of Runs**: Defines the total number of times for the
    recurring job to run.
:::

 

