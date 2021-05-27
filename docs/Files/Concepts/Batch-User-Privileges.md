---
lang: en-us
title: Batch User Privileges
viewport: width=device-width, initial-scale=1.0
---

#  []{#Batch_User_Privileges}Batch User Privileges 
Most platforms require a valid user ID to be associated with each job
submitted by OpCon. Valid user IDs for each
of those platforms must be defined in OpCon.
The following platforms do not require a user ID to be defined: OS 2200,
BIS, and z/OS.

 

The Batch User Privileges in OpCon contain
the user ID definitions for each platform. Additionally, the Batch User
Privileges define which OpCon roles are
allowed to use which user ID\'s for the jobs.

 

The following information applies to defining Batch User Privileges:

-   **Select Role**: Defines the unique name of the Role.
-   **Target Operating System**: Provides the operating systems that
    require Batch User Privileges which includes MCP, IBM i, UNIX, VMS,
    and Windows.
-   **Revoked**: Provides the Batch User IDs not assigned to the Role
    Name.
-   **Granted**: Provides the Batch User IDs assigned to the Role Name.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Batch User Privileges        |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Setting up Batch User       | |                                  |     IDs](../UI/Enterprise-M    |
|                                  | anager/Managing-Batch-User%2 |
|                                  | 0Privileges.md#Setting){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Granting Privileges to      | |                                  |     Batch User                   |
|                                  |     IDs](../UI/Enterprise-Ma   |
|                                  | nager/Managing-Batch-User- |
|                                  | Privileges.md#Granting){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Revoking Privileges from    | |                                  |     Batch User                   |
|                                  |     IDs](../UI/Enterprise-Ma   |
|                                  | nager/Managing-Batch-User- |
|                                  | Privileges.md#Revoking){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+
:::

 

