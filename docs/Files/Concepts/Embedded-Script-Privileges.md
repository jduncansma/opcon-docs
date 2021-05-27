---
lang: en-us
title: Embedded Script Privileges
viewport: width=device-width, initial-scale=1.0
---

#  Embedded Script Privileges

Each user must have embedded script privileges via one or more
[roles](Roles.md) to access embedded scripts within
OpCon. By default, a new role has privileges
to no embedded scripts. If a role is not granted privileges to an
embedded script, users in that role will not see that embedded script
listed in the graphical interfaces. A user must be a member of a role
with All Administrative Functions, All Function Privileges, or must be
in the ocadm role to manage roles.

 

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Embedded Script Privileges for individual users are not dynamically granted if they are logged in. If the user is logged into the account when an administrator grants an Embedded Script Privilege to this user\'s role, then it is required for the user to log out and log back in for the privilege to be granted.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

The following information applies to defining Embedded Script
Privileges:

-   **Role Name**: Defines the unique name of the Role.
-   **Revoked**: Provides the Embedded Scripts not assigned to the Role
    Name.
-   **Granted**: Provides the Embedded Scripts assigned to the Role
    Name.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Embedded Script Privileges   |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Granting Script             | |                                  |     Privileges](.                |
|                                  | ./UI/Enterprise-Manager/Managi |
|                                  | ng-Script-Privileges.md#Gra |
|                                  | nting_Script_Privileges){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Revoking Script             | |                                  |     Privileges](.                |
|                                  | ./UI/Enterprise-Manager/Managi |
|                                  | ng-Script-Privileges.md#Rev |
|                                  | oking_Script_Privileges){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+
:::

 

