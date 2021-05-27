---
lang: en-us
title: Job Dependencies
viewport: width=device-width, initial-scale=1.0
---

#  Job Dependencies

Each OpCon job can depend on one or more
OpCon jobs. These dependencies help to
maintain the workflow. Dependencies can be internal to one schedule,
defined across schedules, and defined across schedule dates.

 

The following information applies to defining job dependencies:

-   **Predecessor Schedule Name**: Defines the name of the schedule
    containing the Predecessor Job. The dependent schedule can be the
    same as the schedule Name, or any other single- or multi-instance
    schedule or subschedule.
-   **Predecessor Job Name**: Defines the name of the dependent job that
    the Successor Job depends on. In most cases, the Predecessor Job
    Name must be different than the Job Name. If a job needs to be
    dependent on itself across days, set the Offset to an value other
    than zero. In this case, the dependent Job Name can be the same as
    the Job Name.
-   **Predecessor Instance Name**: Defines the name of the schedule
    instance to be used for the Predecessor Job.

```{=html}
<!-- -->
```
-   **Dependency Type**: Defines the type of job dependency. Refer to
    the [Dependency Types](#Dependency_Types) table.
-   **Options**: Defines the options that are set for the defined
    dependency. Refer to the [Dependency Options     Details](#Dependency_Options_Details) table.
-   **Successor Frequency Name**: Defines the name of the frequency if
    the job dependency is defined for a specific frequency.
    -   Leave the frequency blank to associate the job dependency at the
        job level and always include the dependency for the job.
    -   Select a frequency name to associate the job dependency only
        when the job runs with the associated frequency.
-   **Successor Instance Name**: Defines the name of the schedule
    instance for the job.

+-----------------+---------------------------------------------------+
| Dependency Type | Description                                       |
+=================+===================================================+
| After           | The job waits until the dependent job completes.  |
|                 |                                                   |
|                 | -   If the dependent job does not exist in the    |
|                 |     Daily tables, the dependency is resolved      |
|                 |     immediately.                                  |
|                 | -   If the dependent job exists in the Daily      |
|                 |     tables, it must complete before the           |
|                 |     dependency is resolved.                       |
+-----------------+---------------------------------------------------+
| Conflict        | The job cannot start if the dependent job is      |
|                 | running.                                          |
|                 |                                                   |
|                 | -   The Conflict dependency should be defined for |
|                 |     all jobs involved in the conflict.            |
|                 | -   For example, if Job A is set up with a        |
|                 |     conflict dependency on Job B, then Job B      |
|                 |     should also be set up with a Conflict         |
|                 |     dependency on Job A.                          |
+-----------------+---------------------------------------------------+
| Exclude         | The job removes the dependent job from the Daily  |
|                 | schedule during the Schedule Build process.       |
|                 |                                                   |
|                 | -   If the excluded job is a Container job and    |
|                 |     the subschedule is already built, the         |
|                 |     subschedule is also removed.                  |
|                 | -   If a job to be excluded is already running or |
|                 |     finished, it is too late for that job to be   |
|                 |     excluded; therefore, you should build all     |
|                 |     related schedules before their start time.    |
|                 |     This ensures the build process has time to    |
|                 |     handle all the exclusions before any of the   |
|                 |     schedules start.                              |
+-----------------+---------------------------------------------------+
| Requires        | The job waits until the dependent job exists in   |
|                 | the Daily tables and completes.                   |
|                 |                                                   |
|                 | -   If the dependent job does not exist in the    |
|                 |     Daily tables, the dependency cannot be        |
|                 |     resolved. The job remains in a [Wait Job      | |                 |     Dependency]{.skd-job-statuses} status until a |
|                 |     user force starts the job to override the     |
|                 |     dependency, or the dependent job is added to  |
|                 |     the Daily schedule and completes.             |
+-----------------+---------------------------------------------------+

: []{#Dependency_Types}Dependency Types 
+----------------------+----------------------------------------------+
| Option               | Description                                  |
+======================+==============================================+
| Check All Days (C)   | -   Enables the SAM to check all days listed |
|                      |     in Schedule Operations.                  |
|                      | -   This option is only available only when  |
|                      |     the Conflict dependency type is defined. |
+----------------------+----------------------------------------------+
| Failed               | -   If selected, this indicates that the     |
|                      |     dependency can be resolved when the      |
|                      |     dependent job fails.                     |
|                      | -   This option is only available when the   |
|                      |     After or Requires dependency type are    |
|                      |     defined.                                 |
+----------------------+----------------------------------------------+
| Finished OK          | -   If selected, this indicates that the     |
|                      |     dependency can be resolved when the      |
|                      |     dependent job finishes OK.               |
|                      | -   This option is only available when the   |
|                      |     After or Requires dependency type are    |
|                      |     defined.                                 |
+----------------------+----------------------------------------------+
| Ignore Exit Code (E) | -   If selected, this indicates that the     |
|                      |     dependency can be resolved whether the   |
|                      |     dependent job finishes OK [or]{.ul}      | |                      |     fails.                                   |
|                      | -   This option is only available when the   |
|                      |     After or Requires dependency type are    |
|                      |     defined.                                 |
+----------------------+----------------------------------------------+
| Job Name Like (L)    | -   For Conflict dependencies, this enables  |
|                      |     the SAM to check all jobs beginning with |
|                      |     the characters specified for the         |
|                      |     dependent Job Name.                      |
|                      | -   Use underscores (\_) as single-character |
|                      |     wildcards in the text for a wider        |
|                      |     search.                                  |
|                      | -   This option is only available with the   |
|                      |     Conflict dependency type.                |
|                      | -   Example: If the characters \"JobA\" are  |
|                      |     defined for the dependent job,           |
|                      |     \"JobA12,\" \"JobAspecial,\" and         |
|                      |     \"JobAbc\" would be checked for a        |
|                      |     Conflict dependency.                     |
+----------------------+----------------------------------------------+
| Offset               | -   Defines the number of days offset from   |
|                      |     the schedule date to check for the       |
|                      |     dependent schedule and job. This setting |
|                      |     enables the SAM to check for             |
|                      |     dependencies across schedule dates. A    |
|                      |     positive offset checks future schedule   |
|                      |     dates while a negative offset checks a   |
|                      |     schedule date in the past.               |
|                      | -   Default value is 000.                    |
|                      | -   Valid values range is 000 - 999.         |
|                      | -   The option is available with all         |
|                      |     dependency types except Excludes.        |
|                      | -   The option is not available for job      |
|                      |     dependencies defined within a            |
|                      |     multi-instance schedule.                 |
|                      |                                              |
|                      | **Note:** If the Schedule Name is a          |
|                      | multi-instance schedule and the dependent    |
|                      | schedule is the same schedule, the Day       |
|                      | Offset is not available. Multi-instance      |
|                      | schedules can only have internal same day    |
|                      | dependencies or valid cross-schedule         |
|                      | dependencies.                                |
+----------------------+----------------------------------------------+

: []{#Dependency_Options_Details}Dependency Options Details 
 

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Job Dependencies             |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding Job                  | |                                  |     Dependencies](../            |
|                                  | UI/Enterprise-Manager/Adding%2 |
|                                  | 0Job-Dependencies.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Editing Job                 | |                                  |     Dependencies](../U           |
|                                  | I/Enterprise-Manager/Editing%2 |
|                                  | 0Job-Dependencies.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Job                | |                                  |     Dependencies](../UI          |
|                                  | /Enterprise-Manager/Deleting%2 |
|                                  | 0Job-Dependencies.md){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+
:::

 

