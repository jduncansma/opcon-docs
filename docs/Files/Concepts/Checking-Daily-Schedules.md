---
lang: en-us
title: Checking Daily Schedules
viewport: width=device-width, initial-scale=1.0
---

#  Checking Daily Schedules

Checking Daily Schedules is a process for validating the job
dependencies in the Daily tables. The process can:

-   Detect Circular dependencies
-   Determine if a Requires dependency cannot be resolved
-   Determine if Conflict or After dependencies are not satisfied

[SMA Technologies]{.GeneralCompanyName} recommends running the schedule check process against every new schedule created or after major
revisions have been made to schedules. The check process can run against
a date for all schedules or against specific schedules.

-   When checking specific schedules, the process does not check the
    subschedules that may be involved with the specified schedule(s).
-   To check a subschedule, define the subschedule as a specific
    schedule to check.
-   Specify a date to check all schedules and their subschedules on that
    date.

Schedule check processing is managed by the SMASchedMan program on the
OpCon server for all applications. For
additional information, refer to
[SMASchedMan](../Server-Programs/SMA-Request-Router.md#SMASched){.MCXref
.xref} in the **Server Programs** online help.

 

If the Schedule Check process fails and was started through an
OpCon Event, the SAM will process the events
on the SMA_SKD_CHECK job. For additional information, refer to [SMA_SKD Jobs on the AdHoc Schedule](AdHoc-Schedule.md#SMA_SKD){.MCXref
.xref}.

 

Checking Daily schedules can be managed using the following methods:

-   Schedule checks can be automated using:
    -   OpCon events (refer to
        [Schedule-Related         Events](../OpCon-Events/Event-Types.md#Schedule){.MCXref
        .xref} in the **OpCon Events** online help)
    -   The DoBatch utility (refer to
        [DoBatch](../Utilities/Command-line-Utilities/DoBatch.md){.MCXref
        .xref} in the in the **Utilities** online help)
-   Schedule checks can be requested through the graphical interfaces.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Check Daily Schedules        |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, consult [Checking Daily  | |                                  | Schedules](../U                  |
|                                  | I/Enterprise-Manager/Checking% |
|                                  | 20Daily-Schedules.md){.MCXref |
|                                  | .xref} in the **Enterprise       |
|                                  | Manager** online help.           |
+----------------------------------+----------------------------------+
:::

 

