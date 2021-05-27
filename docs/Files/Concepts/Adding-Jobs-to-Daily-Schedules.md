---
lang: en-us
title: Adding Jobs to Daily Schedules
viewport: width=device-width, initial-scale=1.0
---

#  Adding Jobs to Daily Schedules

Adding jobs to Daily schedules is the process of taking a job from the
Job Master and adding it to a specific Daily schedule. To add a job, the
schedule, job, and desired frequency must be specified and added to a
schedule date with the schedule already built. The frequency is defined
to add all of the desired frequency-related job components.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The only frequency-related component not included in the add of a job is the Job Build Status. The only available default statuses for a manually added job are [Released]{.skd-job-statuses} and [On Hold]{.skd-job-statuses}.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

When adding jobs to Daily schedules, you can set specific property
definitions for each job instance.

-   If the job being added has no defined instances, (refer to [Instance     Definition](Instance-Definition.md#Instance)), you
    can enter property definitions for an instance of a specific job in
    the format:
-   In graphical interfaces, if the job being added is configured to
    [Run on each Machine](Jobs.md#Run) in a machine group , you can
    select a specific machine from the group.
-   In graphical interfaces, if the job being added has one or more
    Instance Definitions with predefined user properties (refer to
    [Instance Definition](Instance-Definition.md#Instance){.MCXref
    .xref}), you can enter property definitions for an instance of a
    specific job in the format:

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If specific definitions are not supplied for each job instance, OpCon automatically adds all defined instances for the job.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

Jobs can be added to Daily schedules using the following methods:

-   OpCon events (refer to [Job-Related     Events](../OpCon-Events/Event-Types.md#Job-Rela)
    in the **OpCon Events** online help)
-   Through the graphical interfaces

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Find Jobs, Add Jobs, and     |
| es/Images/moreinfo-icon(48x48).p | Delete Jobs to Daily Schedules   |
| ng "More Info icon") | concept.]            |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Finding Daily Schedules or  | |                                  |     Jobs](../                    |
|                                  | UI/Enterprise-Manager/Finding% |
|                                  | 20Daily-Schedules.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Adding Jobs from Job Master | |                                  |     to Daily                     |
|                                  |     Schedule](../                |
|                                  | UI/Enterprise-Manager/Adding%2 |
|                                  | 0Jobs-from-Job-Master-to |
|                                  | -Daily-Schedule.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Jobs from Daily    | |                                  |                                  |
|                                  |    Schedules](../UI/Enterprise%2 |
|                                  | 0Manager/Deleting-Jobs-from% |
|                                  | 20Daily-Schedules.md){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+
:::

 

