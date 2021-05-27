---
lang: en-us
title: Adding Jobs to Daily Schedules
viewport: width=device-width, initial-scale=1.0
---

#  Adding Jobs to Daily Schedules

Adding jobs to daily schedules involves the process of taking a copy of
a Master job and adding it to a copy of the job\'s schedule on a
specific date. The schedule must already be built for the specific date
before you can take a job from the master and add it to the schedule. If
the job already exists on the date in question, there are several rules
of which to be aware.

-   If the existing job is in a [Finished]{.skd-job-statuses} state and     you add a job to a schedule, the job will get added and overwrite
    the original copy of the job.
-   If the existing job is in a [Running]{.skd-job-statuses} or     [Qualifying]{.skd-job-statuses} state and you add a job to a
    schedule, the behavior depends on whether the job is multi-instance
    or not:
    -   If the job is not multi-instance, the job will not get added.
    -   If the job is multi-instance, the job will get added with a
        unique instance name.
    -   For more information, refer to [Multi-Instance         Jobs](OpCon-Job-Names.md#Multi-In).

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Add Jobs to Daily Schedules  |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding Jobs from Job Master | |                                  |     to Daily                     |
|                                  |     Schedule](../                |
|                                  | UI/Enterprise-Manager/Adding%2 |
|                                  | 0Jobs-from-Job-Master-to |
|                                  | -Daily-Schedule.md){.MCXref |
|                                  |     .xref} (Daily Maintenance)   |
|                                  | -   [Adding                      | |                                  |                                  |
|                                  |    Jobs](../UI/Enterprise-Mana |
|                                  | ger/Performing-Schedule-Proc |
|                                  | edures(List).md#Adding){.MCXref |
|                                  |     .xref} (Daily List view)     |
|                                  | -   [Adding                      | |                                  |                                  |
|                                  |  Jobs](../UI/Enterprise-Manage |
|                                  | r/Performing-Schedule-Proced |
|                                  | ures(Matrix).md#Adding){.MCXref |
|                                  |     .xref} (Matrix view)         |
|                                  |                                  |
|                                  | For                              |
|                                  | OpCon |
|                                  | events, visit the following      |
|                                  | section in the **OpCon Events**  |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [\$JOB:ADD                   | |                                  |     event](../OpCon-Ev         |
|                                  | ents/Event-Types.md#$JOB:ADD) |
+----------------------------------+----------------------------------+
:::

 

