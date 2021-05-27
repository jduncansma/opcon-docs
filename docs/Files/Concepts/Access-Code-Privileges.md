---
lang: en-us
title: Access Code Privileges
viewport: width=device-width, initial-scale=1.0
---

#  []{#Access_Code_Privileges}Access Code Privileges 
To implement Access Codes for securing jobs, each user must have the
appropriate Access Code privileges through one or more
[roles](Roles.md) to view and update jobs.

 

Because \'\<None\>\' is an Access Code and is applied to all jobs by
default, all roles automatically have privileges to update jobs with the
\'\<None\>\' Access Code. As additional Access Codes are created, the
administrator must grant privileges for the Access Codes to the
appropriate Role Name.

 

A user must be a member of a role with All Administrative Functions, All
Function Privileges, or must be in the ocadm role to manage Access Code
Privileges.

 

The following information applies to defining Access Code Privileges.

-   **Role Name**: Defines the unique name of the Role.
-   **Allow job updates?**: Determines if users in the Role can update
    jobs defined with an Access Code. If allowed, users can modify and
    delete the job definition in the Master and Daily. If not allowed,
    users can only view the job definition in the Master and Daily.
-   **Revoked**: Provides the Access Codes not assigned to the Role
    Name.
-   **Granted**: Provides the Access Codes assigned to the Role Name.
    Users will be able to see jobs with any of the granted access codes
    in the Master, Daily, and Schedule Operations.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Access Codes                 |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding Access               | |                                  |     Codes]                       |
|                                  | (../UI/Enterprise-Manager/Addi |
|                                  | ng-Access-Codes.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Copying Access              | |                                  |     Codes](                      |
|                                  | ../UI/Enterprise-Manager/Copyi |
|                                  | ng-Access-Codes.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Granting Privileges to      | |                                  |     Access                       |
|                                  |                                  |
|                                  |   Codes](../UI/Enterprise-Mana |
|                                  | ger/Managing-Access-Codes- |
|                                  | Privileges.md#Granting){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Revoking Privileges from    | |                                  |     Access                       |
|                                  |                                  |
|                                  |   Codes](../UI/Enterprise-Mana |
|                                  | ger/Managing-Access-Codes- |
|                                  | Privileges.md#Revoking){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Adding Access Codes to      | |                                  |     Jobs](../UI/Enter            |
|                                  | prise-Manager/Adding-Access% |
|                                  | 20Codes-to-Jobs.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Renaming Access             | |                                  |     Codes](.                     |
|                                  | ./UI/Enterprise-Manager/Renami |
|                                  | ng-Access-Codes.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Access             | |                                  |     Codes](.                     |
|                                  | ./UI/Enterprise-Manager/Deleti |
|                                  | ng-Access-Codes.md){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+
:::

 

