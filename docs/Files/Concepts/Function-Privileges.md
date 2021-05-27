---
lang: en-us
title: Function Privileges
viewport: width=device-width, initial-scale=1.0
---

#  []{#Function_Privileges}Function Privileges 
Function Privileges are used to grant access to functions not related to
jobs. Each user must have function privileges via one or more
[roles](Roles.md) to perform actions within OpCon. By default, a new
role has no privileges. A user must be a member of a role with All
Administrative Functions, All Function Privileges, or must be in the
ocadm role to manage roles.

 

The following data information applies to defining Function Privileges:

-   **Role Name**: Defines the unique name of the Role.
-   **Granted Function Privileges**: Provides the Function Privileges
    assigned to the Role Name.

## All Administrative Functions

Grants privileges to perform the following functions in
OpCon:

Grant and Revoke Access Code Privileges

Grant and Revoke Schedule Privileges

Grant and Revoke Function Privileges

Grant and Revoke Batch User Privileges

Grant and Revoke Machine Privileges

Grant and Revoke Machine Group Privileges

[Import and Export Schedules](#Import)

[Maintain Access Codes](#Maintain)

[Maintain Audit History](#Maintain10)

[Maintain Calendars](#Maintain2)

[Maintain Departments](#Maintain3)

[Maintain Embedded Script](#Maintain13)

[Maintain Global Properties](#Maintain6)

[Maintain Job History](#Maintain11)

[Maintain Machine Groups](#Maintain4)

[Maintain Machines](#Maintain5)

[Maintain Reports](#Maintain12)

[Maintain Schedules](#Maintain7)

[Maintain Service Request](#Maintain8)

[Maintain Thresholds/Resources](#Maintain9)

Manage OpCon Roles

-   Add new Roles
-   Delete Roles
-   Modify Roles

Manage User Accounts

-   Add new User Accounts
-   Delete User Accounts
-   Modify User Accounts

## All Function Privileges

Grants privileges to perform the following functions in
OpCon:

-   Access the Frequency Manager
-   [All Administrative Functions](#All)
-   [All Daily Schedule     Functions](Departmental-Function-Privileges.md#All){.MCXref
    .xref}
-   [All Job Master     Functions](Departmental-Function-Privileges.md#All2){.MCXref
    .xref}
-   [All Notification Manager Functions](#All2)
-   [All Schedule Operation     Functions](Departmental-Function-Privileges.md#All3){.MCXref
    .xref}
-   [View Embedded Script     Contents](#View_Embedded_Script_Contents)
-   [View License Information](#View)
-   [View Service Requests](#View2)
-   [View Standard     Reports](Departmental-Function-Privileges.md#View4){.MCXref
    .xref}

## All Notification Manager Functions

Grants access to all functions in Notification Manager including:

-   Groups
    -   Add Machine, Schedule, and Job groups
    -   Delete Machine, Schedule, and Job groups
    -   Update Machine, Schedule, and Job groups
-   Notifications
    -   Add new Notifications
    -   Delete Notifications
    -   Update Notifications
-   Triggers
    -   Add Machine, Schedule, and Job Event Triggers
    -   Delete Machine, Schedule, and Job Event Triggers
    -   Update Machine, Schedule, and Job Event Triggers

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [No other privileges are verified in Notification Manager. If granted access to this utility, users in the role can set up notifications for any machine, schedule, or job.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



## Build Daily Schedules

Grants privileges to build and check schedules:

-   View schedules in to build
-   Build schedules for defined dates
-   Check schedules for defined dates

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have Schedule Privileges to perform these functions.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------

## Delete Daily Schedules

Grants privileges to perform the following functions in the Daily
schedules:

-   View schedules to delete
-   Delete schedules for defined dates
-   Check schedules for defined dates

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have Schedule Privileges to perform these functions.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------

## Force-Start Schedules

Grants privileges to execute the Start command for schedules in the
Daily schedules.

 

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have Schedule Privileges to perform this function.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------

## Hold Schedules

Grants privileges to execute the Hold command for schedules in the Daily
schedules.

 

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have Schedule Privileges to perform this function.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------

## Release Schedules

Grants privileges to execute the Release command for schedules in the
Daily schedules.

 

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Users in the role must also have Schedule Privileges to perform this function.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------



## Import and Export Schedules

Grants access to all functions in the Schedule Import Export utility.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [When mapping machines to a destination database on import, Machine Privileges are validated for the destination database.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------

## Maintain Access Codes

Grants access to functions related to maintaining Access Codes.

-   View all defined Access Codes
-   Add new Access Codes
-   Delete Access Codes
-   Modify Access Codes

## Maintain Audit History

Grants access to all functions in the Audit Management plugin and Audit
Cleanup utility including:

-   View all audit records
-   Filter all audit records
-   Archive and Purge specified audit records

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [No other privileges are verified in the Audit Management utility. If granted access to this utility, users in the role can all audit records.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Maintain Calendars

Grants access to functions related to maintaining Calendars.

-   View all defined Calendars
-   Add new Calendars
-   Delete Calendars
-   Modify Calendars

## Maintain Departments

Grants access to functions related to maintaining Departments.

-   View all defined Departments
-   Add new Departments
-   Delete Departments
-   Modify Departments

## Maintain Embedded Script

Grants access to functions related to maintaining Embedded Scripts:

-   View all defined Scripts
-   Add new Scripts
-   Delete Scripts
-   Modify Scripts
-   Assign roles to Scripts
-   View all defined Script Versions
-   Create Script Versions
-   Delete Script Versions
-   View all defined Script Types
-   Add new Script Types
-   Delete Script Types
-   Modify Script Types
-   View all defined Script Runners
-   Add new Script Runners
-   Delete Script Runners
-   Modify Script Runners

## Maintain Global Properties

Grants access to related to maintaining Global Properties.

-   View all defined Global Properties
-   Add new Global Properties
-   Delete Global Properties
-   Modify Global Properties

## Maintain Job History

Grants access to all functions in the History Management plugin and
History Cleanup utility including:

-   View all job history records
-   Filter all job history records
-   Archive and purge specified job history records

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [No other privileges are verified in the History Management utility. If granted access to this utility, users in the role can manage history for any schedule or job.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Maintain Machine Groups

Grants access to functions related to maintaining Machine Groups.

-   View all defined Machine Groups
-   Add new Machine Groups
-   Delete Machine Groups
-   Modify Machine Groups

## Maintain Machines

Grants access to functions related to maintaining Machines.

-   View all defined Machines
-   Add new Machines
-   Delete Machines
-   Modify Machines
-   Start communication with the LSAM
-   Stop communication with the LSAM
-   Disable job starts for the LSAM
-   Enable job starts for the LSAM

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [To stop and to start communication with the LSAM from the Machine Information screen in Schedule Operations, the View Jobs in Schedule Operations privilege must also be granted.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Maintain Reports

Grants access to all functions (except locking and unlocking reports) in
the Report Management tool in the Reports view:

-   Add new report specifications
-   Copy report specifications
-   Delete unlocked report specifications
-   Update unlocked report specifications
-   Export unlocked report specifications
-   Import report specifications

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Only users in the ocadm role can manage locked reports.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------

## Maintain Schedules

Grants access to all functions related to the Schedule Master including:

-   Add new Schedules
-   Delete Schedules
-   Modify Schedules

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [When a schedule is added, only the creator is automatically granted privileges to the new schedule; otherwise, the user must have Schedule Privileges to perform the Delete and Modify functions.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Maintain Service Request

Grants access to functions related to maintaining Service Requests in
the SMA Self Service solution.

-   Add new Service Requests
-   Delete Service Requests
-   Modify Service Requests

## Maintain Thresholds/Resources

Grants access to functions related to maintaining thresholds and
resources.

-   View all defined Thresholds/Resources
-   Add new Thresholds/Resources
-   Delete Thresholds/Resources
-   Modify Thresholds/Resources

## Maintain Vision Actions

Grants access to functions related to maintaining Vision actions.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [All events for Actions are submitted in the ocadm role.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------

-   Add Vision Actions
-   Delete Vision Actions
-   Modify Vision Actions

## Maintain Vision Frequencies

Grants access to functions related to maintaining Vision frequencies.

-   Add Vision Frequencies
-   Delete Vision Frequencies
-   Modify Vision Frequencies

## Maintain Vision Workspaces

Grants access to functions related to maintaining Vision cards.

-   Add Vision Cards
-   Delete Vision Cards
-   Modify Vision Cards

## View Embedded Script Contents

Grants users, who are not already members of a role with Maintain
Embedded Scripts or All Administrative Functions or All Function
Privileges, the permissions to view the contents of the embedded scripts
from the Job Details screen in the Enterprise Manager.

## View License Information

Grants access to the **License Information** tab in the **About
OpCon/xps Enterprise Manager** window accessible from the **Help** menu
in the Enterprise Manager.

## View Service Requests

Grants users, who are not already members of a role with Maintain
Service Request or All Administrative Functions or All Function
Privileges, the permissions to use the Self Service solution and view
and trigger Service Requests.

## View Vision Workspaces

Grants users the permissions to view the Vision solution.
:::

 

