---
lang: en-us
title: Machine Group Privileges
viewport: width=device-width, initial-scale=1.0
---

#  []{#Machine_Group_Privileges}Machine Group Privileges 
Machine Group privileges are used to control the machine groups that
users in a [role](Roles.md) have privileges to maintain jobs on. Within
Job Master Maintenance and Daily Schedule Maintenance, users will only
see Machine Groups based on their role privileges. In Schedule
Operations, the machine group privileges are not applied.

 

A user must be a member of a role with All Administrative Functions, All
Function Privileges, or must be in the ocadm role to manage Machine
Group Privileges. The following information applies to defining Machine
Group Privileges:

-   **Role Name**: Defines the unique name of the Role.
-   **Allow job updates?**: Determines if users in the Role can update
    jobs defined with a Machine Group. If allowed, users can modify and
    delete the job definition in the Master and Daily. If not allowed,
    users can only view the job definition in the Master and Daily.
-   **Revoked**: Provides the Machines not assigned to the Role Name.
-   **Granted**: Provides the Machines assigned to the Role Name. Users
    will be able to see jobs with any of the granted machine groups in
    the Master and Daily.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Machine Group Privileges     |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Granting Machine Group      | |                                  |     Priv                         |
|                                  | ileges](../UI/Enterprise-Manag |
|                                  | er/Managing-Machine-Group- |
|                                  | Privileges.md#Granting){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Revoking Machine Group      | |                                  |     Priv                         |
|                                  | ileges](../UI/Enterprise-Manag |
|                                  | er/Managing-Machine-Group- |
|                                  | Privileges.md#Revoking){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+

 

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Machine Group Privileges do not automatically grant privileges to the individual Machines in the group. To grant privileges to individual machines, refer to [Machine Privileges](Machine-Privileges.md).]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
:::

 

