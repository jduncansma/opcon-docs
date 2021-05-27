---
lang: en-us
title: Threshold/Resource Dependencies
viewport: width=device-width, initial-scale=1.0
---

#  Threshold/Resource Dependencies

## Threshold Dependencies

Each OpCon job can depend on the numeric
value of a defined *threshold*. For additional information, refer to
[Thresholds](Thresholds.md). After threshold
dependencies are defined for a job, OpCon
stores the defined threshold dependencies in the database.

 

The following information applies to defining threshold dependencies:

-   **Schedule Name**: Defines the name of the schedule.
-   **Job Name**: Defines the name of the job.
-   **Frequency Name**: Defines the name of the frequency if the
    threshold dependency is defined for a specific frequency.
    -   Leave the frequency blank to associate the threshold dependency
        at the job level and always include the dependency for the job.
    -   Select a frequency name to associate the threshold dependency
        only when the job runs with the associated frequency.
-   **Threshold Name**: Defines the name of the threshold whose current
    value must meet the requirements of the Operator and Value settings
    (below) when the SAM performs the dependency check for the job.
-   **Operator**: Defines the operator the SAM should use when the SAM
    performs the dependency check for the job to compare the current
    threshold value to the dependent Value (below). Valid operators
    include: EQ (equal), GT (greater than), LT (less than), GE (greater
    than or equal to), LE (less than or equal to), NE (not equal).
-   **Value**: Defines the dependent value the SAM applies the Operator
    to for comparison with the current threshold value.

## Resource Dependencies

Each OpCon job can depend on a specific
number of resources being available. The job can require one or more
resources out of a total number allocated to the resource object. For
additional information, refer to [Resources](Resources.md){.MCXref
.xref}. After resource dependencies are defined for a job,
OpCon stores the defined resource
dependencies in the database.

 

The following information applies to defining resource dependencies:

-   **Schedule Name**: Defines the name of the schedule.
-   **Job Name**: Defines the name of the job.
-   **Frequency Name**: Defines the name of the frequency if the
    resource dependency is defined for a specific frequency.
    -   Leave the frequency blank to associate the resource dependency
        at the job level and always include the dependency for the job.
    -   Select a frequency name to associate the resource dependency
        only when the job runs with the associated frequency.
-   **Resource**: Defines the name of the resource that must have enough
    resources available to meet the requirement defined in the Value
    (below).
-   **Value**: Defines the number of resources the job requires.
    -   The SAM checks to make sure the number of available resources is
        greater than the number required before the dependency is met.
    -   If the value is **All**, the job must consume all resources when
        it runs. In this case, the SAM will lock the resource when the
        job qualifies to run so that no additional jobs with the same or
        lower priority can use the resource. The SAM will wait until the
        Resources In Use value is zero before starting the job.

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If the job is placed [On Hold]{.skd-job-statuses} for more than two minutes while waiting for the value to become zero, the SAM will release the lock.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Threshold/Resource           |
| es/Images/moreinfo-icon(48x48).p | Dependencies                     |
| ng "More Info icon") | concept.]            |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding Threshold/Resource   | |                                  |     Dependen                     |
|                                  | cies](../UI/Enterprise-Manager |
|                                  | /Adding-Threshold-and-Reso |
|                                  | urce-Dependencies.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Editing Threshold/Resource  | |                                  |     Dependenc                    |
|                                  | ies](../UI/Enterprise-Manager/ |
|                                  | Editing-Threshold-and-Reso |
|                                  | urce-Dependencies.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Threshold/Resource | |                                  |     Dependenci                   |
|                                  | es](../UI/Enterprise-Manager/D |
|                                  | eleting-Threshold-and-Reso |
|                                  | urce-Dependencies.md){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+
:::

 

