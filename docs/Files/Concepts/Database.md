---
lang: en-us
title: Database
viewport: width=device-width, initial-scale=1.0
---

#  Database

The OpCon database is installed on Microsoft
SQL Server on a Windows Server. This database contains all of the data
defining the automation requirements, operational processing, and
historical information. For additional information, refer to **Database Information** online help.

## Auditing

The database installation for OpCon ensures
that changes made to all OpCon objects are
audited. All OpCon user accounts and many of
the core services are tracked through the audit history. The following
information is recorded for every change:

-   **Date**: The date and time stamp the change occurred.
-   **User**: The user or application that made the change.
    -   If an OpCon user account made the
        change, that user account is recorded with the change.
    -   If an OpCon application was audited,
        the name appears with an asterisk in front of the name. For
        Example, SAM entries are recorded under the user of
        **\*SMASAM**.
    -   If a change was made to the database by an unregistered
        application (e.g., a user makes an update through a SQL Query
        window), those entries are recorded under the user **Unknown**.
-   **Data Changed**: The name of the item that changed.
-   **Original Value**: The original value for the data item.
-   **Final Value**: The final value for the item.
-   **Category**: The OpCon object category
    affected by the change.
-   **Name**: Shows the name of the exact item that was affected. For
    example, when the Data Changed column shows \"Job Record,\" the
    value for the Name would show the name of the job that was changed
    (e.g., ScheduleABC:Job299).

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [For viewing      | | on blue circular                 | audit records, refer to [Viewing |
| background](../../Resourc        | and Exporting Audit              |
| es/Images/moreinfo-icon(48x48).p | Records](../UI/Enterprise-     |
| ng "More Info icon") | Manager/Viewing-and-Exportin |
|                                  | g-Audit-Records.md){.MCXref |
|                                  | .xref} in the **Enterprise       |
|                                  | Manager** online                 |
|                                  | help.]               |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For information on cleaning up   |
|                                  | old audit records, refer to      |
|                                  | [Audit History                   | |                                  | Cleanup](../Utilities            |
|                                  | /Command-line-Utilities/Audit% |
|                                  | 20History-Cleanup.md){.MCXref |
|                                  | .xref} in the **Utilities**      |
|                                  | online help.                     |
+----------------------------------+----------------------------------+
:::

 

