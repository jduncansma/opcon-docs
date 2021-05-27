---
lang: en-us
title: Advanced Frequency Settings
viewport: width=device-width, initial-scale=1.0
---

#  Advanced Frequency Settings

The Advanced Frequency Settings determine the scheduling of a frequency
on specific schedule dates or for periods of time. The options are
described in the table.

+----------------------+----------------------+----------------------+
| Option Parameter     | Multiple Entries     | Description          |
|                      | (Y/N)                |                      |
+======================+:====================:+======================+
| Start Scheduling on  | N                    | -   Define a date to |
|                      |                      |     begin scheduling |
|                      |                      |     a frequency.     |
|                      |                      | -   With the         |
|                      |                      |     parameter End    |
|                      |                      |     Scheduling On,   |
|                      |                      |     allows the user  |
|                      |                      |     to set a         |
|                      |                      |     scheduling       |
|                      |                      |     range. By        |
|                      |                      |     default, the     |
|                      |                      |     range is without |
|                      |                      |     limits.          |
+----------------------+----------------------+----------------------+
| End Scheduling on    | N                    | -   Define a date to |
|                      |                      |     discontinue      |
|                      |                      |     scheduling a     |
|                      |                      |     frequency.       |
|                      |                      | -   With the         |
|                      |                      |     parameter Start  |
|                      |                      |     Scheduling On,   |
|                      |                      |     allows the user  |
|                      |                      |     to set a         |
|                      |                      |     scheduling       |
|                      |                      |     range.           |
|                      |                      | -   By default, the  |
|                      |                      |     range is without |
|                      |                      |     limits.          |
+----------------------+----------------------+----------------------+
| Include in Schedule  | Y                    | -   Forces the       |
| on                   |                      |     scheduling of a  |
|                      |                      |     frequency on the |
|                      |                      |     defined date     |
|                      |                      |     despite all      |
|                      |                      |     other frequency  |
|                      |                      |     settings.        |
|                      |                      | -   When dates       |
|                      |                      |     conflict between |
|                      |                      |     Include and      |
|                      |                      |     Exclude          |
|                      |                      |     parameters, the  |
|                      |                      |     Include          |
|                      |                      |     overrides the    |
|                      |                      |     Exclude.         |
+----------------------+----------------------+----------------------+
| Exclude from         | Y                    | -   Forces a job\'s  |
| Schedule on          |                      |     build status to  |
|                      |                      |     Do Not Schedule  |
|                      |                      |     on the defined   |
|                      |                      |     date despite all |
|                      |                      |     other frequency  |
|                      |                      |     settings.        |
|                      |                      | -   When dates       |
|                      |                      |     conflict between |
|                      |                      |     Include and      |
|                      |                      |     Exclude          |
|                      |                      |     parameters, the  |
|                      |                      |     Include          |
|                      |                      |     overrides the    |
|                      |                      |     Exclude.         |
+----------------------+----------------------+----------------------+
| Exclude Month from   | Y                    | -   Forces a job\'s  |
| Schedule             |                      |     build status to  |
|                      |                      |     Do Not Schedule  |
|                      |                      |     on the defined   |
|                      |                      |     month despite    |
|                      |                      |     all other        |
|                      |                      |     frequency        |
|                      |                      |     settings.        |
|                      |                      | -   When dates       |
|                      |                      |     conflict between |
|                      |                      |     Include and      |
|                      |                      |     Exclude          |
|                      |                      |     parameters, the  |
|                      |                      |     Include          |
|                      |                      |     overrides the    |
|                      |                      |     Exclude.         |
+----------------------+----------------------+----------------------+

: Advanced Frequency Parameters: General
:::

 

