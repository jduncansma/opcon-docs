---
lang: en-us
title: Job Automation Components
viewport: width=device-width, initial-scale=1.0
---

#  Job Automation Components

This section describes the components used to automate
OpCon jobs. One of the powerful features of
OpCon is the ability to associate job
automation components with jobs, or with the different frequencies of
jobs. This feature eases administration for those jobs that have
different requirements depending on when they run.

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** [A job is defined   | | circular                         | to execute on every Friday and   |
| background](../../Reso           | execute on the last day of each  |
| urces/Images/example-icon(48x48) | month. When the job executes     |
| .png "Example icon") | each Friday, it is dependent on  |
|                                  | JobA, JobB, and JobC. When the   |
|                                  | job executes on the last day of  |
|                                  | the month, it is dependent on    |
|                                  | JobA, JobB, and                  |
|                                  | JobD.]{.statement2}              |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | In this situation, the job has a |
|                                  | dependency on JobA and JobB at   |
|                                  | the job level. The job has a     |
|                                  | dependency on JobC at the        |
|                                  | frequency level for the Friday   |
|                                  | frequency. The job also has a    |
|                                  | dependency on JobD at the        |
|                                  | frequency level for the last day |
|                                  | of the month frequency.          |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | The frequency priority must be   |
|                                  | set with the end of month        |
|                                  | frequency at the top. The build  |
|                                  | schedule procedure concatenates  |
|                                  | the job and frequency            |
|                                  | specifications for the correct   |
|                                  | days. If the Friday and end of   |
|                                  | month frequencies are the same   |
|                                  | day, the end of month frequency  |
|                                  | with the dependency on JobD is   |
|                                  | built.                           |
+----------------------------------+----------------------------------+

 

Click any of the following links to access the information about the
subject:

-   [Instance Definition](Instance-Definition.md)
-   [Job Frequency](Job-Frequency.md)
-   [Events](Events.md)
-   [Threshold/Resource     Updates](Threshold_Resource-Updates.md)
-   [Job Dependencies](Job-Dependencies.md)
-   [Threshold/Resource     Dependencies](Threshold_Resource-Dependencies.md)
-   [Expression Dependency](Expression-Dependency.md)
-   [Documentation](Documentation.md)
-   [Tags](Tags.md)
:::

 

