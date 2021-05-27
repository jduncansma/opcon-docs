---
lang: en-us
title: Calendars
viewport: width=device-width, initial-scale=1.0
---

#  Calendars

OpCon supports several types of calendars to
help provide flexible scheduling around holidays and any other
non-working days. All calendars must be manually updated for each year.
Each calendar should be cleaned up by deleting old dates, and then dates
for next year should be added. The types of calendars supported include:

-   [Holiday Calendars](#Holiday)
-   [Annual Plan Calendars](#Annual)

The following information applies to defining calendars:

-   **Name**: Defines the name for the calendar.
-   **Documentation**: Provides an area for descriptions, explanations,
    and notes that can be updated for the calendar. For information on
    inserting hyperlinks into the Documentation area, refer to [Entering     and Opening Hyperlinks in the Documentation
    Frame](../UI/Enterprise-Manager/Entering-and-Opening-Hyperlinks.md){.MCXref
    .xref} in the **Enterprise Manager** online help.
-   **Date List**: Defines all dates defined for the calendar.
-   **Schedules using for holidays (\#)**: Defines the schedules that
    are using the calendar to define holidays in addition to that
    schedule\'s default Holiday Calendar (HC).
    -   The number indicates the total number of schedules using the
        calendar.
-   **Schedules/Jobs/Frequencies Using this Calendar (\#)**: Defines
    each schedule, job, and frequency using the calendar.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are several references for       |
| background](../../Resourc        | implementing the Calendars       |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding Holidays or          | |                                  |     Non-Working Days to          |
|                                  |     Calendars](../UI/Ente        |
|                                  | rprise-Manager/Adding-Days%2 |
|                                  | 0to-Calendars.md#top){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Applying Master Calendars   | |                                  |     to                           |
|                                  |     S                            |
|                                  | chedules](../UI/Enterprise-Man |
|                                  | ager/Applying-Master-Calenda |
|                                  | rs-to-Schedules.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Creating User-defined       | |                                  |     Calendars](../UI/Enter       |
|                                  | prise-Manager/Creating-User- |
|                                  | defined-Calendars.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Add Dates to User-defined   | |                                  |     Calendars](../UI/Enterpris   |
|                                  | e-Manager/Creating-User-defi |
|                                  | ned-Calendars.md#Add_Dates_to |
|                                  | _User-defined_Calendars){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Using as Additional Holiday | |                                  |     Calendars](../UI/Enterpri    |
|                                  | se-Manager/Using-User-define |
|                                  | d-Calendars.md#Using){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Using as Annual Plan        | |                                  |     Calendars](../UI/Enterpris   |
|                                  | e-Manager/Using-User-defined |
|                                  | -Calendars.md#Using2){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Using as Negative Annual    | |                                  |     Plan                         |
|                                  |     Calendars](../UI/Enterpris   |
|                                  | e-Manager/Using-User-defined |
|                                  | -Calendars.md#Using3){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Un-used            | |                                  |     User-defined                 |
|                                  |     Calendars](../UI/Enter       |
|                                  | prise-Manager/Deleting-User- |
|                                  | defined-Calendars.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Old                | |                                  |     Dates                        |
|                                  | ](../UI/Enterprise-Manager/Del |
|                                  | eting-Old-Dates.md){.MCXref |
|                                  |     .xref}                       |
|                                  |                                  |
|                                  | For SMADDI, visit the following  |
|                                  | section in the **Utilities**     |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [add_caldate and del_caldate | |                                  |     Element                      |
|                                  |     Structures]                  |
|                                  | (../Utilities/SMA-Dynamic-Da |
|                                  | ta-Input/Data-Input-Messag |
|                                  | e-Elements.md#add_caldate_and |
|                                  | _del_caldate_Element_Structures) |
|                                  |     (for adding dates to         |
|                                  |     calendars)                   |
+----------------------------------+----------------------------------+

## Holiday Calendars

When a [Job and Schedule Frequencies](Job-and-Schedule-Frequencies.md) uses
working days to determine the included days for the frequency, the
non-working days are determined by the Holiday Calendars associated with
the schedule.

-   The dates from the [Individual Holiday Calendars](#Individu){.MCXref
    .xref} are always included.
-   The [Master Holiday Calendar](#Master) dates are
    included only if the schedule is set to use the Master Holiday
    calendar.
-   Dates from [Additional Holiday Calendars](#Addition)
    are only included if an Additional Holiday Calendar is associated
    with the schedule.

### Individual Holiday Calendars

An individual Holiday Calendar stores non-working days for a single
schedule. The individual Holiday Calendar is automatically created when
a schedule is initially created. The calendar is called HC:\<schedule
name\>, where \<schedule name\> is the name of the schedule to which it
applies. When a schedule is first created,
OpCon sets Sundays to non-working days in the
case of a 6-day workweek. If a 5-day workweek is defined, Saturdays and
Sundays are set as non-working days. Administrators must set additional
days as non-working days as required.

### Master Holiday Calendar

A Master Holiday Calendar stores non-working days for multiple
schedules. The Master Holiday Calendar is installed with the
OpCon database. By default, there are no
non-working days on this calendar. Administrators must set any desired
non-working days. These non-working days affect all schedules that are
configured to use the Master Holiday Calendar.

### Additional Holiday Calendars

Additional Holiday Calendars are user-defined calendars that store
non-working dates that can be associated with multiple schedules.
Administrators can create as many Additional Holiday Calendars that are
needed for automation. The non-working days on these calendars only
affect the schedules that have the calendar selected for Additional
Holidays.

## Annual Plan Calendars

Annual Plan Calendars are user-defined calendars containing a list of
dates. When associated with a [Job and Schedule Frequencies](Job-and-Schedule-Frequencies.md), the
calendar can have a positive or negative effect. The effect the calendar
has on a given frequency is based on the type of frequency that is
defined for each job or schedule.

### Positive Annual Plan Calendars

Positive Annual Plan Calendars are typically used to schedule jobs on
non-repetitive days. For example, certain jobs need to run on specific
days of a year, such as March
20[th]{style="font-size: 80%;vertical-align: super;"}, June 23[rd]{style="font-size: 80%;vertical-align: super;"}, September
30[th]{style="font-size: 80%;vertical-align: super;"}, and December 17[th]{style="font-size: 80%;vertical-align: super;"}. An Annual Plan
Calendar can be created to store the desired dates. A frequency with the
[When to Schedule](Frequency-Definition.md#When)
option of Annual Plan can then be assigned to the required jobs. In
addition, jobs may be set up to run up to 15 days before or after these
dates. This is particularly useful for scheduling jobs around a fiscal
cycle. Annual Plan Calendars may be used by any job on any schedule.

 

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Master Holiday Calendar may also be defined as a Positive Annual Plan Calendar with the Annual Plan frequency setting.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------

### Negative Annual Plan Calendars

Annual Plan Calendars describe dates on which jobs **cannot** be
scheduled. If any [When to Schedule](Frequency-Definition.md#When) option other
than Annual Plan is defined for a Frequency, the dates on the Calendar
are treated as Negative Annual Plan dates.

-   If the initial calculated Frequency date is in the Negative Annual
    Plan Calendar, the job is not scheduled.
-   If the initial calculated Frequency date is a Non-Workday and
    **not** in the Negative Annual Plan Calendar, then the surrounding
    Negative Annual Plan dates are treated like additional holiday dates
    for A/O/B/N resolution.
:::

 

