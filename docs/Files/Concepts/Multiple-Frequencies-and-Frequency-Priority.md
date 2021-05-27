---
lang: en-us
title: Multiple Frequencies and Frequency Priority
viewport: width=device-width, initial-scale=1.0
---

#  Multiple Frequencies and Frequency Priority

OpCon supports multiple frequency definitions
on jobs and schedules for two reasons:

1.  To provide for complex date patterns.
2.  To provide a way to associate different job automation components
    with different frequencies (refer to [Job Automation     Components](Job-Automation-Components.md)).

When multiple frequencies qualify for overlapping days, the priority of
the frequencies becomes very important.

-   When a schedule is built for a specific date,
    OpCon checks the highest priority
    frequency first. If that frequency qualifies for the build date, the
    job is added using that frequency. All lower priority frequencies
    are ignored for that date.
-   When a schedule is built for a specific date and the highest
    priority frequency does [not]{.ul} qualify for that date,     OpCon works down the priority list until
    it finds a frequency that does qualify. If no frequencies qualify,
    the job is not added to the schedule for that date.

To decide how to prioritize your frequencies, use these rules:

-   Place frequencies that rarely qualify with a higher priority than
    frequencies that qualify more often.
-   If you want it to subtract a pattern of days from other frequencies,
    set a Build Status of \"Do Not Schedule,\" and place the frequency
    with a higher priority than the other frequencies. For more
    information, refer to [Job Build     Status](Job-Frequency.md#Job).

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** [If jobs must run   | | circular                         | every Monday, Friday, and the    |
| background](../../Reso           | last day of the month, two       |
| urces/Images/example-icon(48x48) | frequency definitions are        |
| .png "Example icon") | necessary.]{.statement2}         |
|                                  |                                  |
|                                  | -   [One frequency schedules for | |                                  |     Monday and Friday for All    |
|                                  |     Weeks.]{.statement2}         |
|                                  | -   [The second frequency        | |                                  |     schedules for the End of     |
|                                  |     Period with the Month        |
|                                  |     option.]{.statement2}        |
|                                  |                                  |
|                                  | [Because we are using two        | |                                  | frequencies, we will place the   |
|                                  | End of Month frequency as the    |
|                                  | highest priority. On the days    |
|                                  | the End Of Month frequency       |
|                                  | overlaps with Monday or Friday,  |
|                                  | the End Of Month frequency will  |
|                                  | be used for                      |
|                                  | scheduling.]{.statement2}        |
+----------------------------------+----------------------------------+

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:**                     | | circular                         |                                  |
| background](../../Reso           | -   [**Scenario**: A job is      |
| urces/Images/example-icon(48x48) |     defined with two frequencies |
| .png "Example icon") |     because on the last day of   |
|                                  |     the month, the job has       |
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
|                                  |     considered.]{.statement2}    |
|                                  | -   [**Result**: Because the     | |                                  |     Daily and Monthly            |
|                                  |     frequencies resolve to the   |
|                                  |     same day, at the end of the  |
|                                  |     month builds the job with    |
|                                  |     the Monthly frequency and    |
|                                  |     its related job components.  |
|                                  |     If the administrator had set |
|                                  |     the Daily frequency to the   |
|                                  |     higher priority, the Monthly |
|                                  |     frequency and related job    |
|                                  |     components would have been   |
|                                  |     ignored.]{.statement2}       |
+----------------------------------+----------------------------------+

 

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are several references for       |
| background](../../Resourc        | implementing this                |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
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
|                                  | -   [Adding Job                  | |                                  |     Frequencies](..              |
|                                  | /UI/Enterprise-Manager/Adding% |
|                                  | 20Job-Frequencies.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Editing Job                 | |                                  |     Frequencies](../             |
|                                  | UI/Enterprise-Manager/Editing% |
|                                  | 20Job-Frequencies.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Job                | |                                  |     Frequencies](../U            |
|                                  | I/Enterprise-Manager/Deleting% |
|                                  | 20Job-Frequencies.md){.MCXref |
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
|                                  | -   [Setting Advanced Job        | |                                  |     Freq                         |
|                                  | uencies](../UI/Enterprise-Mana |
|                                  | ger/Managing-Advanced-Job- |
|                                  | Frequencies.md#Setting){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Editing Advanced Job        | |                                  |     Freq                         |
|                                  | uencies](../UI/Enterprise-Mana |
|                                  | ger/Managing-Advanced-Job- |
|                                  | Frequencies.md#Editing){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Advanced Frequency | |                                  |     Set                          |
|                                  | tings](../UI/Enterprise-Manage |
|                                  | r/Managing-Advanced-Job-Fr |
|                                  | equencies.md#Deleting2){.MCXref |
|                                  |     .xref}                       |
|                                  |                                  |
|                                  | For SMADDI, consult the          |
|                                  | following in this online help:   |
|                                  |                                  |
|                                  | -   To add a frequency to a new  |
|                                  |     schedule, refer to the       |
|                                  |     \<frq\> element under        |
|                                  |     [new_schedule Frequency      | |                                  |     Element                      |
|                                  |     Structure](.                 |
|                                  | ./Utilities/SMA-Dynamic-Data |
|                                  | -Input/Data-Input-Message% |
|                                  | 20Elements.md#new_sche){.MCXref |
|                                  |     .xref}.                      |
|                                  | -   To add a frequency to a new  |
|                                  |     job in the Master tables,    |
|                                  |     refer to [new_master         | |                                  |     Frequency Element            |
|                                  |     Structure](..                |
|                                  | /Utilities/SMA-Dynamic-Data% |
|                                  | 20Input/Data-Input-Message%2 |
|                                  | 0Elements.md#new_mast2){.MCXref |
|                                  |     .xref}.                      |
|                                  | -   To add a frequency to a new  |
|                                  |     job in the Daily tables,     |
|                                  |     refer to [new_daily          | |                                  |     Frequency Element            |
|                                  |     Structure](.                 |
|                                  | ./Utilities/SMA-Dynamic-Data |
|                                  | -Input/Data-Input-Message% |
|                                  | 20Elements.md#new_dail){.MCXref |
|                                  |     .xref}.                      |
|                                  | -   To add a new frequency to an |
|                                  |     existing schedule or job,    |
|                                  |     refer to [add_frequency      | |                                  |     Element                      |
|                                  |     Structure](.                 |
|                                  | ./Utilities/SMA-Dynamic-Data |
|                                  | -Input/Data-Input-Message% |
|                                  | 20Elements.md#add_freq){.MCXref |
|                                  |     .xref}.                      |
+----------------------------------+----------------------------------+
:::

 

