---
lang: en-us
title: AdHoc Schedule
viewport: width=device-width, initial-scale=1.0
---

#  []{#AdHoc}AdHoc Schedule 
The AdHoc schedule allows the execution of jobs that run outside normal
schedule activity. The AdHoc schedule behaves the same as any other
schedule, but never requires a Build process. The SAM automatically puts
the AdHoc schedule in the Daily tables if any job on the schedule is
requested through a \$JOB:ADD, \$JOB:TRACK, or \$JOB:QUEUE event type.
When the AdHoc schedule is in the Daily tables, it remains open for that
day until midnight. If jobs are still active on the AdHoc schedule at
midnight, the schedule closes after all jobs are completed.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If renamed, the AdHoc schedule will always display first and continues to work as designed.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------

## SMA_SKD Jobs on the AdHoc Schedule

The SMA_SKD jobs on the AdHoc schedule store the
OpCon events to process when automatic
schedule build, check, and delete processes fail. This provides a method
for notification when automatic schedule maintenance processes fail. By
connecting the process this way, all of the notifications available for
jobs are made available to the schedule build, check, and delete
processes. The SAM will not automatically call the jobs to run, but it
will use the Events from the jobs to send notifications.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Enterprise Manager Build, Check, and Delete processes give interactive feedback and do not use the SMA_SKD jobs for notification.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------

 

The SMA_SKD jobs have the following names:

-   SMA_SKD_BUILD: The SAM uses this job for all automatic schedule
    build failure events.
-   SMA_SKD_CHECK: The SAM uses this job for all automatic schedule
    check failure events.
-   SMA_SKD_DELETE: The SAM uses this job for all automatic schedule
    delete failure events.

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The SMA_SKD jobs can be imported from the AdHoc.mdb file or they can be created manually. To import the jobs, refer to [Import the OpCon Maintenance and Report Jobs](../Installation/OpCon-Server-Configuration.md#Import_the_OpCon_Maintenance) in the **OpCon Installation** online help for procedures on importing the AdHoc schedule; otherwise, use the information below to create the jobs manually.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

The jobs are each configured with an On Request type frequency named
\"SMAOnRequest\". A date in the past is defined so the jobs will not
build unless specifically called by some other user-defined process.

-   Each job has one event defined for Failure as an example of what to
    configure. Upon \"Failed\" for each job the event is defined as:
    -   SMA_SKD_BUILD: \$NOTIFY:EMAIL,\[\[SMAAdminEmail\]\],,,Schedule         Build Failure,
    -   SMA_SKD_CHECK: \$NOTIFY:EMAIL,\[\[SMAAdminEmail\]\],,,Schedule         Check Failure,
    -   SMA_SKD_DELETE: \$NOTIFY:EMAIL,\[\[SMAAdminEmail\]\],,,Schedule         Delete Failure,
        -   Customers should modify the value of the Global Property
            named \[SMAAdminEmail\] to contain the email address or             semicolon separated list of email addresses that should
            receive the notification.
        -   The CC and BCC fields are blank by default.
        -   The Message is left blank because the SAM automatically
            inserts the log message in this position.
        -   There are no attachments.
-   You can also use Event Notification to set up notification for the
    jobs. Set up a Schedule notification group that includes the AdHoc
    schedule then configure notification triggers for Job Failed or Job
    Finished OK.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are several references for       |
| background](../../Resourc        | implementing Automatic Schedule  |
| es/Images/moreinfo-icon(48x48).p | Maintenance.]        |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Configuring Automatic       | |                                  |     Schedule                     |
|                                  |     Maint                        |
|                                  | enance](../UI/Enterprise-Manag |
|                                  | er/Configuring-Automatic-Sch |
|                                  | edule-Maintenance.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Viewing and Exporting       | |                                  |     History                      |
|                                  |                                  |
|                                  |   Records](../UI/Enterprise-Ma |
|                                  | nager/Viewing-and-Exporting% |
|                                  | 20History-Records.md){.MCXref |
|                                  |     .xref} - The **Export Data** |
|                                  |     button (to the right of Run  |
|                                  |     Dates) will open the Export  |
|                                  |     to CSV file dialog in order  |
|                                  |     to provide the export        |
|                                  |     comma-separated value format |
|                                  |     and export information.      |
|                                  |                                  |
|                                  | For OpCon events, refer to the   |
|                                  | [\$SCHED                         | |                                  | ULE:BUILD](../OpCon-Events/Eve |
|                                  | nt-Types.md#$SCHEDULE:BUILD,% |
|                                  | 3Cschedule_date%3E,_%3Cschedule_ |
|                                  | name%3E,%3Clog_file_name%3E,_%3C |
|                                  | overwrite_flag%3E,_%5BSchedule_I |
|                                  | nstance_Property_Definitions%5D) |
|                                  | event in the **OpCon Events**    |
|                                  | online help.                     |
+----------------------------------+----------------------------------+
:::

 

