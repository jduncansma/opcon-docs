---
lang: en-us
title: Frequency Definition
viewport: width=device-width, initial-scale=1.0
---

#  Frequency Definition

The frequency definition includes a value for \"When to Schedule\" and
the related options for that value.

## When to Schedule

The \"When to Schedule\" options define logical scheduling groups. For
each option, a table shows the related frequency options and their
default settings. The tables also show frequency calculations for each
option to explain the order OpCon applies all
of the frequency options to calculate the list of qualifying dates.

-   **On Occurrence**: The frequency defines an occurrence of a day in a
    month, quarter, or year. For example, a frequency can be defined for
    the third Tuesday and third Thursday of each month.

+----------------------------------+----------------------------------+
| Frequency Options                | Default                          |
+==================================+==================================+
| [Day of the                      | None                             | | Week](#Day_of_the_Week)          |                                  |
+----------------------------------+----------------------------------+
| [Calendar](#Calendar)            | None                             |
+----------------------------------+----------------------------------+
| [A/O/B/N](#A/O/B/N)              | Before Date                      |
+----------------------------------+----------------------------------+
| [Day Type](#Day_Type)            | Working                          |
+----------------------------------+----------------------------------+
| [On Occurrence](#On_Occurrence)  | 1[st]{style="font-si             |
|                                  | ze: 80%;vertical-align: super;"} |
+----------------------------------+----------------------------------+
| [Periods](#Periods)              | Month                            |
+----------------------------------+----------------------------------+
| Frequency Calculations:          |                                  |
+----------------------------------+----------------------------------+
| 1.                               |                                  |
| OpCon |                                  |
|     calculates an initial list   |                                  |
|     of qualifying dates using    |                                  |
|     the Day of the Week          |                                  |
|     selections, Occurrence, and  |                                  |
|     Period.                      |                                  |
| 2.  If a Calendar is associated, |                                  |
|                                  |                                  |
| OpCon |                                  |
|     matches the dates in the     |                                  |
|     Calendar to the initial list |                                  |
|     of qualifying dates and      |                                  |
|     removes any matching dates   |                                  |
|     from the list. For more      |                                  |
|     information, refer to        |                                  |
|     [Negative Annual Plan        |                                  | |     Calendars]                   |                                  |
| (Calendars.md#Negative){.MCXref |                                  |
|     .xref}.                      |                                  |
| 3.  If the Day Type is set to    |                                  |
|     Working, and a date in the   |                                  |
|     list of qualifying dates is  |                                  |
|     on a non-working day,        |                                  |
|                                  |                                  |
| OpCon |                                  |
|     applies the [A/O/B/N         |                                  | |     setting](#A/O/B/N). For more |                                  |
|     information on non-working   |                                  |
|     days, refer to [Holiday      |                                  | |     Calendars                    |                                  |
| ](Calendars.md#Holiday){.MCXref |                                  |
|     .xref}.                      |                                  |
| 4.  If there are any Advanced    |                                  |
|     Frequency options defined    |                                  |
|     for a job, those options     |                                  |
|     override all other           |                                  |
|     calculations. For more       |                                  |
|     information, refer to        |                                  |
|     [Advanced Frequency          |                                  | |     Settings](Advan              |                                  |
| ced-Frequency-Settings.md). |                                  |
+----------------------------------+----------------------------------+

-   **Odd Weeks**: The frequency defines odd weeks of the year.
    OpCon considers a full week to begin on a
    Sunday. Therefore, the first odd week of every year begins with the
    first Sunday in January. Each alternate week for the rest of the
    year is considered an odd week.

  ---------------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [Be careful when using the Odd Weeks group because it is possible to have an extra week between odd weeks at year-end.]
  ---------------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------

 

+-------------------------------------------------------+-------------+
| Frequency Options                                     | Default     |
+=======================================================+=============+
| [Day of the Week](#Day_of_the_Week)                   | None        |
+-------------------------------------------------------+-------------+
| [Calendar](#Calendar)                                 | None        |
+-------------------------------------------------------+-------------+
| [A/O/B/N](#A/O/B/N)                                   | Before Date |
+-------------------------------------------------------+-------------+
| [Day Type](#Day_Type)                                 | Working     |
+-------------------------------------------------------+-------------+
| Frequency Calculations:                               |             |
+-------------------------------------------------------+-------------+
| 1.  OpCon calculates an    |             |
|     initial list of qualifying dates using the Day of |             |
|     the Week selections.                              |             |
| 2.  If a Calendar is associated,                      |             |
|     OpCon matches the      |             |
|     dates in the Calendar to the initial list of      |             |
|     qualifying dates and removes any matching dates   |             |
|     from the list. For more information, refer to     |             |
|     [Negative Annual Plan                             |             | |     Calendars](Calendars.md#Negative){.MCXref        |             |
|     .xref}.                                           |             |
| 3.  If the Day Type is set to Working, and a date in  |             |
|     the list of qualifying dates is on a non-working  |             |
|     day, OpCon applies the |             |
|     [A/O/B/N setting](#A/O/B/N). For more information |             |
|     on non-working days, refer to [Holiday            |             | |     Calendars](Calendars.md#Holiday). |             |
| 4.  If there are any Advanced Frequency options       |             |
|     defined for a job, those options override all     |             |
|     other calculations. For more information, refer   |             |
|     to [Advanced Frequency                            |             | |     Settings](Advanced-Frequency-Settings.md).   |             |
+-------------------------------------------------------+-------------+

-   **Even Weeks**: The frequency defines even weeks of the year.
    OpCon considers a full week to begin on a
    Sunday. Therefore, the first even week of every year begins with the
    second Sunday in January. Each alternate week for the rest of the
    year is an even week.

+-------------------------------------------------------+-------------+
| Frequency Options                                     | Default     |
+=======================================================+=============+
| [Day of the Week](#Day_of_the_Week)                   | None        |
+-------------------------------------------------------+-------------+
| [Calendar](#Calendar)                                 | None        |
+-------------------------------------------------------+-------------+
| [A/O/B/N](#A/O/B/N)                                   | Before Date |
+-------------------------------------------------------+-------------+
| [Day Type](#Day_Type)                                 | Working     |
+-------------------------------------------------------+-------------+
| Frequency Calculations:                               |             |
+-------------------------------------------------------+-------------+
| 1.  OpCon calculates an    |             |
|     initial list of qualifying dates using the Day of |             |
|     the Week selections.                              |             |
| 2.  If a Calendar is associated,                      |             |
|     OpCon matches the      |             |
|     dates in the Calendar to the initial list of      |             |
|     qualifying dates and removes any matching dates   |             |
|     from the list. For more information, refer to     |             |
|     [Negative Annual Plan                             |             | |     Calendars](Calendars.md#Negative){.MCXref        |             |
|     .xref}.                                           |             |
| 3.  If the Day Type is set to Working, and a date in  |             |
|     the list of qualifying dates is on a non-working  |             |
|     day, OpCon applies the |             |
|     [A/O/B/N setting](#A/O/B/N). For more information |             |
|     on non-working days, refer to [Holiday            |             | |     Calendars](Calendars.md#Holiday). |             |
| 4.  If there are any Advanced Frequency options       |             |
|     defined for a job, those options override all     |             |
|     other calculations. For more information, refer   |             |
|     to [Advanced Frequency                            |             | |     Settings](Advanced-Frequency-Settings.md).   |             |
+-------------------------------------------------------+-------------+

 

  ---------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [Be careful when using the Even Weeks group because it is possible to have an extra week between even weeks at year-end.]
  ---------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------

-   **All Weeks**: The frequency defines every week of the year.

+-------------------------------------------------------+-------------+
| Frequency Options                                     | Default     |
+=======================================================+=============+
| [Day of the Week](#Day_of_the_Week)                   | None        |
+-------------------------------------------------------+-------------+
| [Calendar](#Calendar)                                 | None        |
+-------------------------------------------------------+-------------+
| [A/O/B/N](#A/O/B/N)                                   | Before Date |
+-------------------------------------------------------+-------------+
| [Day Type](#Day_Type)                                 | Working     |
+-------------------------------------------------------+-------------+
| Frequency Calculations:                               |             |
+-------------------------------------------------------+-------------+
| 1.  OpCon calculates an    |             |
|     initial list of qualifying dates using the Day of |             |
|     the Week selections.                              |             |
| 2.  If a Calendar is associated,                      |             |
|     OpCon matches the      |             |
|     dates in the Calendar to the initial list of      |             |
|     qualifying dates and removes any matching dates   |             |
|     from the list. For more information, refer to     |             |
|     [Negative Annual Plan                             |             | |     Calendars](Calendars.md#Negative){.MCXref        |             |
|     .xref}.                                           |             |
| 3.  If the Day Type is set to Working, and a date in  |             |
|     the list of qualifying dates is on a non-working  |             |
|     day, OpCon applies the |             |
|     [A/O/B/N setting](#A/O/B/N). For more information |             |
|     on non-working days, refer to [Holiday            |             | |     Calendars](Calendars.md#Holiday). |             |
| 4.  If there are any Advanced Frequency options       |             |
|     defined for a job, those options override all     |             |
|     other calculations. For more information, refer   |             |
|     to [Advanced Frequency                            |             | |     Settings](Advanced-Frequency-Settings.md).   |             |
+-------------------------------------------------------+-------------+

**On Request**: The frequency defines a specific date. This group may
occur only one time or annually.

-   For a one-time request, the frequency qualifies for the requested
    date and then becomes inactive until it is reset.
-   For an annual request, the frequency qualifies for the requested day
    of a month every year. Without a specific year, define the month and
    day for the request.

+-----------------------------------------------------+---------------+
| Frequency Options                                   | Default       |
+=====================================================+===============+
| [Request Date](#Request_Date)                       | Today\'s Date |
+-----------------------------------------------------+---------------+
| [Every Year](#)                                     | No            |
+-----------------------------------------------------+---------------+
| [A/O/B/N](#A/O/B/N)                                 | On Date       |
+-----------------------------------------------------+---------------+
| Frequency Calculations:                             |               |
+-----------------------------------------------------+---------------+
| 1.  OpCon determines the |               |
|     qualifying date using the Request Date.         |               |
| 2.  If the qualifying date is on a non-working day, |               |
|     OpCon applies the    |               |
|     [A/O/B/N setting](#A/O/B/N). For more           |               |
|     information on non-working days, refer to       |               |
|     [Holiday                                        |               | |     Calendars](Calendars.md#Holiday){.MCXref       |               |
|     .xref}.                                         |               |
| 3.  If there are any Advanced Frequency options     |               |
|     defined for a job, those options override all   |               |
|     other calculations. For more information, refer |               |
|     to [Advanced Frequency                          |               | |     Settings](Advanced-Frequency-Settings.md). |               |
+-----------------------------------------------------+---------------+

-   **On Day**: The frequency defines the Nth day of a month. Valid
    values for the day range from 1 to 31.
    -   If the Day Type is Any, the job is scheduled on the Nth day of
        the month, whether it is working, weekend, or holiday.
    -   If the Day Type is Working, the job is scheduled on the Nth
        working day of the month. While counting to the Nth day, all
        non-working days are skipped. Non-working days include weekends
        and holidays as defined on the Holiday Calendars associated with
        the schedule.
    -   If a Negative Annual Plan Calendar is in use with the frequency,
        jobs are not scheduled on any date defined on the Negative
        Annual Plan Calendar. The A/O/B/N flag applies only to dates on
        the associated Holiday Calendars.

+----------------------------------+----------------------------------+
| Frequency Options                | Default                          |
+==================================+==================================+
| [Calendar](#Calendar)            | None                             |
+----------------------------------+----------------------------------+
| [Month Days](#Month_Days)        | On 1[st                          |
|                                  | ]{style="font-size:              |
|                                  |  80%;vertical-align: super;"}Day |
+----------------------------------+----------------------------------+
| [Day Type](#Day_Type)            | 1[st]{style="font-si             |
|                                  | ze: 80%;vertical-align: super;"} |
|                                  | Working Day                      |
+----------------------------------+----------------------------------+
| [A/O/B/N](#A/O/B/N)              | On Date                          |
+----------------------------------+----------------------------------+
| Frequency Calculations:          |                                  |
+----------------------------------+----------------------------------+
| 1.                               |                                  |
| OpCon |                                  |
|     calculates an initial list   |                                  |
|     of qualifying dates using    |                                  |
|     the Day of the Month and the |                                  |
|     Day Type.                    |                                  |
| 2.  If a Calendar is associated, |                                  |
|                                  |                                  |
| OpCon |                                  |
|     matches the dates in the     |                                  |
|     Calendar to the initial list |                                  |
|     of qualifying dates and      |                                  |
|     removes any matching dates   |                                  |
|     from the list. For more      |                                  |
|     information, refer to        |                                  |
|     [Negative Annual Plan        |                                  | |     Calendars]                   |                                  |
| (Calendars.md#Negative){.MCXref |                                  |
|     .xref}.                      |                                  |
| 3.  If the Day Type is set to    |                                  |
|     Any, and a date in the list  |                                  |
|     of qualifying dates is on a  |                                  |
|     non-working day,             |                                  |
|                                  |                                  |
| OpCon |                                  |
|     applies the [A/O/B/N         |                                  | |     setting](#A/O/B/N). For more |                                  |
|     information on non-working   |                                  |
|     days, refer to [Holiday      |                                  | |     Calendars                    |                                  |
| ](Calendars.md#Holiday){.MCXref |                                  |
|     .xref}.                      |                                  |
| 4.  If there are any Advanced    |                                  |
|     Frequency options defined    |                                  |
|     for a job, those options     |                                  |
|     override all other           |                                  |
|     calculations. For more       |                                  |
|     information, refer to        |                                  |
|     [Advanced Frequency          |                                  | |     Settings](Advan              |                                  |
| ced-Frequency-Settings.md). |                                  |
+----------------------------------+----------------------------------+

 

  ---------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [Be careful when selecting high Working Day values. If the number of workdays exceeds the number of workdays in a month, the job is not scheduled for that month.]
  ---------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   **Annual Plan**: The frequency defines dates specified on an Annual
    Plan Calendar. Annual Plan is the only group that uses the Positive
    Annual Plan Calendar.
    -   The Annual Plan group can be used to schedule jobs on special
        dates (e.g., fiscal dates, national holidays, etc.)
    -   This group requires a user-defined calendar.
    -   The Positive Annual Plan dates override all other calendar
        dates. Jobs using the Positive Annual Plan build for the dates
        specified on the defined calendar even if the same dates are
        listed as holidays on the Individual Holiday or Master Holiday
        Calendars.

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [[With the Annual Plan option, the default Offset Days of zero indicates scheduling on the defined calendar date(s). If a calendar date falls on a holiday or weekend, the job is scheduled on the defined date].]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

+-----------------------------------------------------------+---------+
| Frequency Options                                         | Default |
+===========================================================+=========+
| [Calendar](#Calendar)                                     | None    |
+-----------------------------------------------------------+---------+
| [Offset Days](#Offset_Days)                               | 0       |
+-----------------------------------------------------------+---------+
| Frequency Calculations:                                   |         |
+-----------------------------------------------------------+---------+
| 1.  OpCon calculates a list of |         |
|     qualifying dates by adjusting the Calendar days with  |         |
|     the Offset Days number.                               |         |
| 2.  If there are any Advanced Frequency options defined   |         |
|     for a job, those options override all other           |         |
|     calculations. For more information, refer to          |         |
|     [Advanced Frequency                                   |         | |     Settings](Advanced-Frequency-Settings.md).       |         |
+-----------------------------------------------------------+---------+

-   **Beg of Period**: The frequency defines a day on or around the
    beginning of a period. The first day of the period depends on the
    Day Type:
    -   If the Day Type is Working, the beginning of period is the first
        Working Day of the period (calculated with consideration to the
        schedule\'s Workdays per Week and any holiday calendars
        associated with the schedule).
    -   If the Day Type is Any, the actual calendar beginning of period
        is used as reference. The Beg of Period group can use an offset
        of ±N Working Days from the defined beginning of the period.
    -   If an offset is defined, the A/O/B/N is forced in the direction
        of the offset the offset is calculated for Working Days.

+-----------------------------------------------------------+---------+
| Frequency Options                                         | Default |
+===========================================================+=========+
| [Calendar](#Calendar)                                     | None    |
+-----------------------------------------------------------+---------+
| [Offset Days](#Offset_Days)                               | 0       |
+-----------------------------------------------------------+---------+
| [Day Type](#Day_Type)                                     | Working |
+-----------------------------------------------------------+---------+
| [A/O/B/N](#A/O/B/N)                                       | On Date |
+-----------------------------------------------------------+---------+
| [Periods](#Periods)                                       | Month   |
+-----------------------------------------------------------+---------+
| Frequency Calculations:                                   |         |
+-----------------------------------------------------------+---------+
| 1.  OpCon calculates an        |         |
|     initial list of qualifying dates using the Period.    |         |
| 2.  If the Day Type is set to Working, and a date in the  |         |
|     list of qualifying dates is on a non-working day,     |         |
|     OpCon applies the [A/O/B/N |         | |     setting](#A/O/B/N). For more information on           |         |
|     non-working days, refer to [Holiday                   |         | |     Calendars](Calendars.md#Holiday).     |         |
| 3.  If the Offset Days value is not zero (0),             |         |
|     OpCon moves the list of    |         |
|     qualifying dates backward or forward depending on the |         |
|     Offset Days value, but never moves a day into the     |         |
|     previous or next period.                              |         |
| 4.  If a Calendar is associated,                          |         |
|     OpCon matches the dates in |         |
|     the Calendar to the initial list of qualifying dates  |         |
|     and removes any matching dates from the list. For     |         |
|     more information, refer to [Negative Annual Plan      |         | |     Calendars](Calendars.md#Negative).    |         |
| 5.  If there are any Advanced Frequency options defined   |         |
|     for a job, those options override all other           |         |
|     calculations. For more information, refer to          |         |
|     [Advanced Frequency                                   |         | |     Settings](Advanced-Frequency-Settings.md).       |         |
+-----------------------------------------------------------+---------+

-   **Mid of Period**: The frequency defines a day on or around the
    middle of a period (month, quarter or year). It is the only group
    that allows the Day of the Week to have no day defined.
    -   If no Day of the Week is defined, the job is scheduled in the
        middle of the defined period.
    -   If one or more Days of the Week are defined, the job is
        scheduled on the specified days that are closest to the middle
        of the defined period (e.g., if Monday is defined to run on the
        middle of the month, the days of the month is divided in half
        and the closest Monday to that date is scheduled).

+-------------------------------------------------------+-------------+
| Frequency Options                                     | Default     |
+=======================================================+=============+
| [Day of the Week](#Day_of_the_Week)                   | None        |
+-------------------------------------------------------+-------------+
| [Calendar](#Calendar)                                 | None        |
+-------------------------------------------------------+-------------+
| [Day Type](#Day_Type)                                 | Working     |
+-------------------------------------------------------+-------------+
| [A/O/B/N](#A/O/B/N)                                   | Before date |
+-------------------------------------------------------+-------------+
| [Periods](#Periods)                                   | Month       |
+-------------------------------------------------------+-------------+
| Frequency Calculations:                               |             |
+-------------------------------------------------------+-------------+
| 1.  OpCon calculates an    |             |
|     initial list of qualifying dates using the        |             |
|     Period.                                           |             |
| 2.  If a Calendar is associated,                      |             |
|     OpCon matches the      |             |
|     dates in the Calendar to the initial list of      |             |
|     qualifying dates and removes any matching dates   |             |
|     from the list. For more information, refer to     |             |
|     [Negative Annual Plan                             |             | |     Calendars](Calendars.md#Negative){.MCXref        |             |
|     .xref}.                                           |             |
| 3.  If the Day Type is set to Working, and a date in  |             |
|     the list of qualifying dates is on a non-working  |             |
|     day, OpCon applies the |             |
|     [A/O/B/N setting](#A/O/B/N). For more information |             |
|     on non-working days, refer to [Holiday            |             | |     Calendars](Calendars.md#Holiday). |             |
| 4.  If there are any Advanced Frequency options       |             |
|     defined for a job, those options override all     |             |
|     other calculations. For more information, refer   |             |
|     to [Advanced Frequency                            |             | |     Settings](Advanced-Frequency-Settings.md).   |             |
+-------------------------------------------------------+-------------+

 

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [This group does not allow a working day offset like the End of Period group does.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------

-   **End of Period**: The frequency defines a day on or around the end
    of a period. The definition of the last day of the period depends on
    the Day Type.
    -   If the Day Type is Working, the end of period is the last
        Working Day of the period (calculated with consideration to the
        schedule\'s Workdays per Week and any holiday calendars
        associated with the schedule).
    -   If the Day Type is Any, the actual calendar end of period is
        used as reference. The End of Period group can use an offset of
        ±N Working Days from the defined end of the period.
    -   If an offset is defined, the A/O/B/N is forced in the direction
        of the offset the offset is calculated for Working Days.

+--------------------------------------------------------+------------+
| Frequency Options                                      | Default    |
+========================================================+============+
| [Calendar](#Calendar)                                  | None       |
+--------------------------------------------------------+------------+
| [Offset Days](#Offset_Days)                            | 0 workdays |
+--------------------------------------------------------+------------+
| [Day Type](#Day_Type)                                  | Working    |
+--------------------------------------------------------+------------+
| [A/O/B/N](#A/O/B/N)                                    | On Date    |
+--------------------------------------------------------+------------+
| [Periods](#Periods)                                    | Month      |
+--------------------------------------------------------+------------+
| Frequency Calculations:                                |            |
+--------------------------------------------------------+------------+
| 1.  OpCon calculates an     |            |
|     initial list of qualifying dates using the Period. |            |
| 2.  If the Day Type is set to Working, and a date in   |            |
|     the list of qualifying dates is on a non-working   |            |
|     day, OpCon applies the  |            |
|     [A/O/B/N setting](#A/O/B/N). For more information  |            |
|     on non-working days, refer to [Holiday             |            | |     Calendars](Calendars.md#Holiday).  |            |
| 3.  If the Offset Days value is not zero (0),          |            |
|     OpCon moves the list of |            |
|     qualifying dates backward or forward depending on  |            |
|     the Offset Days value, but never moves a day into  |            |
|     the previous or next period.                       |            |
| 4.  If a Calendar is associated,                       |            |
|     OpCon matches the dates |            |
|     in the Calendar to the initial list of qualifying  |            |
|     dates and removes any matching dates from the      |            |
|     list. For more information, refer to [Negative     |            | |     Annual Plan                                        |            |
|     Calendars](Calendars.md#Negative). |            |
| 5.  If there are any Advanced Frequency options        |            |
|     defined for a job, those options override all      |            |
|     other calculations. For more information, refer to |            |
|     [Advanced Frequency                                |            | |     Settings](Advanced-Frequency-Settings.md).    |            |
+--------------------------------------------------------+------------+

-   **On Intervals**: The frequency defines one of the two types of
    intervals.
    -   Any combination of the
        5[th]{style="font-size: 80%;vertical-align: super;"},         10[th]{style="font-size: 80%;vertical-align: super;"},
        15[th]{style="font-size: 80%;vertical-align: super;"},         20[th]{style="font-size: 80%;vertical-align: super;"},
        25[th]{style="font-size: 80%;vertical-align: super;"}, and         30[th]{style="font-size: 80%;vertical-align: super;"} day of a
        month **- or -**
    -   Set a defined number of days apart starting with a specific
        calendar date. Enable the every year option to make the start
        date reset every year.

+-------------------------------------------------------+-------------+
| Frequency Options                                     | Default     |
+=======================================================+=============+
| [Calendar](#Calendar)                                 | None        |
+-------------------------------------------------------+-------------+
| [Day Type](#Day_Type)                                 | Working     |
+-------------------------------------------------------+-------------+
| [A/O/B/N](#A/O/B/N)                                   | Before Date |
+-------------------------------------------------------+-------------+
| [On Intervals](#On_Intervals)                         | None        |
+-------------------------------------------------------+-------------+
| Frequency Calculations:                               |             |
+-------------------------------------------------------+-------------+
| 1.  OpCon calculates an    |             |
|     initial list of qualifying dates using the        |             |
|     Interval selections.                              |             |
| 2.  If a Calendar is associated,                      |             |
|     OpCon matches the      |             |
|     dates in the Calendar to the initial list of      |             |
|     qualifying dates and removes any matching dates   |             |
|     from the list. For more information, refer to     |             |
|     [Negative Annual Plan                             |             | |     Calendars](Calendars.md#Negative){.MCXref        |             |
|     .xref}.                                           |             |
| 3.  If the Day Type is set to Any, and a date in the  |             |
|     list of qualifying dates is on a non-working day, |             |
|     OpCon applies the      |             |
|     [A/O/B/N setting](#A/O/B/N). For more information |             |
|     on non-working days, refer to [Holiday            |             | |     Calendars](Calendars.md#Holiday). |             |
| 4.  If there are any Advanced Frequency options       |             |
|     defined for a job, those options override all     |             |
|     other calculations. For more information, refer   |             |
|     to [Advanced Frequency                            |             | |     Settings](Advanced-Frequency-Settings.md).   |             |
+-------------------------------------------------------+-------------+

 

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Selecting the 30[th]{style="font-size: 80%;vertical-align: super;"} of the month does not schedule the job for that date in February. Selecting Working as the Day Type does not schedule the job on the Nth working day of the month. The scheduling engine still schedules the job on the Nth day of the month, but allows it to move according to A/O/B/N. To schedule a job on the N[th]{style="font-size: 80%;vertical-align: super;"} working day, use the On Day group.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Day of the Week

Determines the days (Sunday through Saturday) a job/schedule may run.
Any combination is valid. At least one day must be defined to avoid a
validation error. The only exception is the Mid of Period group, which
does not require the Day of the Week to be defined.

## On Intervals

Sets the frequency to schedule on intervals.
OpCon supports two different types of
intervals:

1.  Defines the calendar days of the month to schedule a job. These
    values are preset to five days apart. Any combination is valid. At
    least one day must be defined.
2.  Defines the interval to start on a specific date and repeat on a
    user-defined interval every \"X\" number of days:
    a.  The start date is the first date for which the frequency
        qualifies and is any date in the format recognized by the
        OpCon SQL Server.
        i.  Along with the start date is an option to indicate every
            year. If this value is enabled, the job will only schedule
            from the Start Date for each year and then on the defined
            interval until December 31 of each year.
    b.  Valid values for the user-defined interval range from 1 through
        32,767.

## Calendar

Defines the name of a user-defined calendar to associated with the
frequency. The defined calendar has two functions: it contains the days
the frequency qualifies for with the Annual Plan scheduling group
(positive) and the days the frequency will [not]{.ul} qualify for with all other scheduling groups (negative).

-   For the Annual Plan scheduling group, the calendar is required.
-   Calendar definition is optional for all the other scheduling groups.

## Day Type

Determines whether the non-working days on a calendar are taken into
account when the frequency is calculated.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [An exception to this functionality is the On Day group, for which the Working option instructs the scheduling engine to seek out the N[th]{style="font-size: 80%;vertical-align: super;"} working day of the month.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   **Working**: Indicates the frequency will offset dates according to
    the [A/O/B/N setting](#A/O/B/N) if the day falls on a non-working
    day.
-   **Any**: Indicates the frequency will ignore all standard
    non-working days. Only Negative Annual Plan days can override a
    frequency using Any as the day type.

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The A/O/B/N value is forced to \"On Date\" and cannot be modified when the Day Type is set to Any.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------

## Month Days

Determines the day of the month the frequency qualifies for. Depending
on the Day Type, the days are counted based on Working Day or Any
calendar day. Valid values for the day range from 1 to 31.

## Offset Days

Determines the number of Working Days to offset the scheduled day,
either positively or negatively, from the basic frequency.

-   If the Period option is set to Month, Quarter, or Year, the range is
    -15 to +15 days offset.
-   If the Period option is set to Week:
    -   and the schedule is a 5-day week, the range is -4 to +4 days
        offset.
    -   and the schedule is a 6-day week, the range is -5 to +5 days
        offset.
    -   and the schedule is a 7-day week, the range is -6 to +6 days
        offset.

## Request Date

The Request Date determines the date on which the frequency will
qualify. Turn on the every year option to indicate the request is made
annually on a day of a month.

## On Occurrence

Determines on which occurrence of a day in a specified period (month,
quarter or year) a frequency should qualify for. Only one occurrence is
allowed per frequency. However, any combination of weekdays is allowed
for that occurrence. The occurrence of a day in a period does not
necessarily coincide with the ordinal number of the week in that period.

## A/O/B/N

Determines when a date on a frequency should qualify if it happens to
fall on a Non-Working day. Non-Working days include Saturdays and
Sundays for a 5-day workweek, Sundays for a 6-day workweek, all
user-defined holidays, and can include Negative Annual Plan days.

-   For additional information, refer to [Negative Annual Plan     Calendars](Calendars.md#Negative). Special
    calculation is necessary with a Negative Annual Plan Calendar:
-   The A/O/B/N option is not applied to Negative Annual Plan dates that
    exist on a qualifying date since, by definition, no scheduling
    occurs on these dates.
-   Valid options for the A/O/B/N setting include:
    -   **After Date (A)**: Moves the job to the first working day
        following the scheduled day.
    -   **On Date (O)**: Indicates the jobs runs on the scheduled day.
    -   **Before Date (B)**: Moves the job to the first working day
        prior to the scheduled day.
    -   **Not Schedule (N)**: Indicates the job does not get scheduled.

## Periods

Determines the type of period for the On Occurrence, Mid of Period, and
End of Period scheduling groups. Only one period can be defined per
frequency. The valid options are Week, Month, Quarter, and Year. The
Week option is only valid for Beg of Period and End of Period.
:::

 

