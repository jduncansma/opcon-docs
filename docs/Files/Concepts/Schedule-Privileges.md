---
lang: en-us
title: Schedule Privileges
viewport: width=device-width, initial-scale=1.0
---

#  []{#Schedule_Privileges}Schedule Privileges 
Each user must have schedule privileges via one or more
[roles](Roles.md) to access schedules within
OpCon. By default, a new role has privileges
to no schedules. If a role is not granted privileges to a schedule,
users in that role will not see that schedule listed in the graphical
interfaces. A user must be a member of a role with All Administrative
Functions, All Function Privileges, or must be in the ocadm role to
manage roles.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Schedule Privileges for individual users are not dynamically granted if they are logged in. If the user is logged into the account when an administrator grants a Schedule Privilege to this user\'s role, then it is required for the user to log out and log back in for the privilege to be granted.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

The following information applies to defining Schedule Privileges:

-   **Role Name**: Defines the unique name of the Role.
-   **Revoked**: Provides the Schedules not assigned to the Role Name.
-   **Granted**: Provides the Schedules assigned to the Role Name.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Schedule Privileges          |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Granting Schedule           | |                                  |                                  |
|                                  |    Privileges](../UI/Enterprise% |
|                                  | 20Manager/Managing-Schedule- |
|                                  | Privileges.md#Granting){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Revoking Schedule           | |                                  |                                  |
|                                  |    Privileges](../UI/Enterprise% |
|                                  | 20Manager/Managing-Schedule- |
|                                  | Privileges.md#Revoking){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+
:::

 

