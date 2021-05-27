---
lang: en-us
title: Deleting Daily Schedules
viewport: width=device-width, initial-scale=1.0
---

#  Deleting Daily Schedules

Deleting Daily Schedules is the process of deleting
[Completed]{.skd-job-statuses} or unprocessed schedules from the Daily tables. OpCon does not delete schedules that
are [In Process]{.skd-job-statuses} or [On Hold]{.skd-job-statuses} (and previously released). If there is a need to keep schedules in the Daily
tables for longer than a single day, [SMA Technologies]{.GeneralCompanyName} recommends that no more than two
weeks of schedules be kept. The SAM and supporting services perform
better when there are fewer days of schedules built.

 

All schedule delete processing is managed by the SMASchedMan program on
the OpCon server. For additional information,
refer to
[SMASchedMan](../Server-Programs/SMA-Request-Router.md#SMASched){.MCXref
.xref} in the **Server Programs** online help.

-   If automatic schedule maintenance is configured, the SAM will
    automatically delete daily schedules. For additional information,
    refer to [Schedule     Maintenance](Schedule-Definition.md#Schedule_Maintenance){.MCXref
    .xref}.
-   If an automatic Schedule Delete process fails, the SAM will process
    the events on the SMA_SKD_DELETE job. For additional information,
    refer to [SMA_SKD Jobs on the AdHoc     Schedule](AdHoc-Schedule.md#SMA_SKD).
-   Schedule deletions can be automated using:
    -   OpCon events (refer to
        [Schedule-Related         Events](../OpCon-Events/Event-Types.md#Schedule){.MCXref
        .xref} in the **OpCon Events** online help)
    -   The DoBatch utility (refer to
        [DoBatch](../Utilities/Command-line-Utilities/DoBatch.md){.MCXref
        .xref} in the in the **Utilities** online help)

```{=html}
<!-- -->
```
-   Schedule deletions can be requested through the graphical
    interfaces.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Delete Daily Schedules       |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, consult [Deleting Daily  | |                                  | Schedules](../U                  |
|                                  | I/Enterprise-Manager/Deleting% |
|                                  | 20Daily-Schedules.md){.MCXref |
|                                  | .xref} in the **Enterprise       |
|                                  | Manager** online help.           |
+----------------------------------+----------------------------------+
:::

 

