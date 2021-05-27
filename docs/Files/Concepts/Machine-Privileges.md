---
lang: en-us
title: Machine Privileges
viewport: width=device-width, initial-scale=1.0
---

#  []{#Machine_Privileges}Machine Privileges 
Machine privileges are used to control the machines for users in a
[role](Roles.md) that have privileges to create and edit jobs. Within
Job Master and Job Daily, users will only see Machines based on their
role privileges. In Schedule Operations, the machine privileges are not
applied.

 

A user must be a member of a role with All Administrative Functions, All
Function Privileges, or must be in the ocadm role to manage Machine
Privileges. The following information applies to defining Machine
Privileges:

-   **Role Name**: Defines the unique name of the Role.
-   **Allow job updates?**: Determines if users in the Role can update
    jobs defined with a Machine. If allowed, users can modify and delete
    the job definition in the Master and Daily. If not allowed, users
    can only view the job definition in the Master and Daily.
-   **Revoked**: Provides the machines not assigned to the Role Name.
-   **Granted**: Provides the machines assigned to the Role Name. Users
    will be able to see jobs with any of the granted machines in the
    Master and Daily.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Machine Privileges           |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Granting Machine            | |                                  |     Privileges](../UI/Enterprise |
|                                  | -Manager/Managing-Machine- |
|                                  | Privileges.md#Granting){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Revoking Machine            | |                                  |     Privileges](../UI/Enterprise |
|                                  | -Manager/Managing-Machine- |
|                                  | Privileges.md#Revoking){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+
:::

 

