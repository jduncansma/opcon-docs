---
lang: en-us
title: Departmental Function Privileges
viewport: width=device-width, initial-scale=1.0
---

#  []{#Departmental_Function_Privileges}Departmental Function Privileges 
The Departmental Function Privileges are used to grant privileges
related to jobs based on individual departments. For all of the
privileges in this section, to affect a specific existing job, the role
must have the function privilege for the department and all of the
following privileges:

-   [Schedule Privileges](Schedule-Privileges.md) to
    the schedule containing the job
-   [Access Code Privileges](Access-Code-Privileges.md){.MCXref
    .xref} to the job\'s Access Code
-   [Machine Privileges](Machine-Privileges.md) to the
    job\'s Primary and Alternate machines if specified
-   [Machine Group Privileges](Machine-Group-Privileges.md){.MCXref
    .xref} to the Job\'s Machine Group if specified

The following data information applies to defining Function Privileges:

-   **Role Name**: Defines the unique name of the Role.
-   **Granted Departmental Privileges**: Provides the Departmental
    Privileges assigned to the Role Name. Departmental privileges are
    associated with \<All Departments\>, the \<General\> department, or
    user defined departments.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Departmental Function        |
| es/Images/moreinfo-icon(48x48).p | Privileges concept.] |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Granting Departmental       | |                                  |     Function                     |
|                                  |     Priv                         |
|                                  | ileges](../UI/Enterprise-Manag |
|                                  | er/Managing-Dept-Function- |
|                                  | Privileges.md#Granting){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Revoking Departmental       | |                                  |     Function                     |
|                                  |     Priv                         |
|                                  | ileges](../UI/Enterprise-Manag |
|                                  | er/Managing-Dept-Function- |
|                                  | Privileges.md#Revoking){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+

 

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The \<General\> department is the default department for all jobs.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------

## All Daily Schedule Functions

Grants access to all functions related to daily Schedule maintenance
including:

-   [Add Jobs to Daily Schedules](#Add)
-   [Build Daily Schedules](Function-Privileges.md#Build){.MCXref
    .xref}
-   [Delete Daily Schedules](Function-Privileges.md#Delete){.MCXref
    .xref}
-   [Delete Jobs from Daily Schedules](#Delete)
-   [Modify Jobs in Daily Schedules](#Modify)
-   [View Jobs in Daily Schedules](#View2)

## All Job Master Functions

Grants access to all functions related to the Job Master including:

-   [Add Jobs to Master Schedules](#Add2)
-   [Delete Jobs from Master Schedules](#Delete2)
-   [Modify Jobs in Master Schedules](#Modify2)
-   [View Jobs in Master Schedules](#View3)

## View Standard Reports

Grants privileges to view all non-administrative
OpCon Reports.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [To view administrative reports, the All Function Privileges privilege must also be granted.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------

## All Schedule Operation Functions

Grants access to functions related to Schedule Operations including:

-   Jobs
    -   [Cancel Jobs](#Cancel)
    -   [Force-Start Jobs](#Force-St)
    -   [Hold Jobs](#Hold)
    -   [Kill Jobs](#Kill)
    -   [Mark Jobs Failed](#Mark)
    -   [Mark Jobs Finished OK](#Mark2)
    -   [Release Jobs](#Release)
    -   [Restart Jobs](#Restart)
    -   [Skip Jobs](#Skip)
    -   [View Jobs in Schedule Operations](#View)
-   Schedules
    -   [Force-Start         Schedules](Function-Privileges.md#Force-St)
    -   [Release Schedules](Function-Privileges.md#Release){.MCXref
        .xref}
    -   [Hold Schedules](Function-Privileges.md#Hold)

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [To Delete Old Schedules, the Delete Daily Schedules privilege must also be granted. To modify Machine Status from Schedule Operations, the Maintain Machines privilege must also be granted.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Add Jobs to Daily Schedules

Grants privileges to add jobs from the Job Master to the Daily
schedules.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Master Schedules and View Jobs in Daily Schedules to perform this function.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------

## Add Jobs to Master Schedules

Grants access to functions related to adding jobs to the Job Master
including:

-   Add new jobs
-   Copy Jobs
-   View History
-   View Job Master PERT

## Cancel Jobs

Grants privileges to execute the Cancel status change command for Jobs
in Operations.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Schedule Operations to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------

## Delete Jobs from Daily Schedules

Grants privileges to Delete Jobs in the Daily schedules.

 

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Daily Schedules and Modify Jobs in Daily Schedules to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Delete Jobs from Master Schedules

Grants privileges to functions related to deleting jobs from the Job
Master including:

-   Delete Jobs
-   View History
-   View Job Master PERT

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Master Schedules and Modify Jobs in Job Master to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Force-Start Jobs

Grants privileges to execute the Start status change command for Jobs in
Operations.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Schedule Operations to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------

## Hold Jobs

Grants privileges to execute the Hold status change command for Jobs in
Operations.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Schedule Operations to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------

## Kill Jobs

Grants privileges to execute the Kill status change command for Jobs in
Operations.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Schedule Operations to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------

## Mark Jobs Failed

Grants privileges to execute the Mark Jobs Failed status change command
for Jobs in Operations.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Schedule Operations to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------

## Mark Jobs Finished OK

Grants privileges to execute the Mark Jobs Finished OK status change
command for Jobs in Operations.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Schedule Operations to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------

## Modify Jobs in Daily Schedules

Grants access to functions related to modifying jobs in the Daily
Schedules including:

-   Modify Job Details
-   Add/Modify/Delete Documentation
-   Add/Modify/Delete Events
-   Add/Modify/Delete Other Job Details
-   Add/Modify/Delete Job Dependencies
-   Add/Modify/Delete Threshold/Resource Dependencies
-   Add/Modify/Delete Threshold/Resource Updates
-   Check Daily Schedules
-   Edit Daily Schedules

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Daily Schedules to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------

## Modify Jobs in Master Schedules

Grants access to functions related to modifying jobs in the Job Master
including:

-   Modify Job Details
-   Add/Modify/Delete Documentation
-   Add/Modify/Delete Events
-   Add/Modify/Delete Frequency and Other Job Details
-   Add/Modify/Delete Job Dependencies
-   Add/Modify/Delete Threshold/Resource Dependencies
-   Add/Modify/Delete Threshold/Resource Updates
-   View History
-   View PERT

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Master Schedules to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------

## Release Jobs

Grants privileges to execute the Release status change command for Jobs
in Operations.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Schedule Operations to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------

## Restart Jobs

Grants privileges to execute the Restart status change command for Jobs
in Operations.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Schedule Operations to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------

## Skip Jobs

Grants privileges to execute the Skip status change command for Jobs in
Operations.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have View Jobs in Schedule Operations to perform this function in graphical interfaces.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------

## View Jobs in Daily Schedules

Grants access to functions related to viewing jobs in the daily
Schedules including:

-   View Job Details
-   View Documentation
-   View Events
-   View Job Dependencies
-   View Other Job Details
-   View Threshold/Resource Dependencies
-   View Threshold/Resource Updates
-   Check Daily Schedules

## View Jobs in Master Schedules

Grants access to functions related to viewing jobs in the Job Master
including:

-   View Job Details
-   View Documentation
-   View Events
-   View Frequency and Other Job Details
-   View History
-   View Job Dependencies
-   View PERT
-   View Threshold/Resource Dependencies
-   View Threshold/Resource Updates

## View Jobs in Schedule Operations

Grants access to functions related to viewing jobs in the following
Enterprise Manager Operation views:

-   List
-   Matrix
-   Gantt
-   PERT Viewer
-   Bar Chart
-   Pie Chart
:::

 

