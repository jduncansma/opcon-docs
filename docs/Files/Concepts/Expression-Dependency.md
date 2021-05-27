---
lang: en-us
title: Expression Dependency
viewport: width=device-width, initial-scale=1.0
---

#  Expression Dependency

Each OpCon job can depend on the result of an
expression. The expression must be defined using the Property
Expressions API. For additional information, refer to [Property Expressions API
Syntax](Property-Expressions-API-Syntax.md).

 

The *expression dependency* associated with the job will always be
included with the job when it runs. The expression dependency associated
with the frequencies will only be included with the job when it runs
with the associated frequency.

 

The following information applies to defining expression dependencies:

-   **Schedule Name**: Defines the name of the schedule.
-   **Job Name**: Defines the name of the job.
-   **Frequency Name**: Defines the name of the frequency if the
    expression dependency is defined for a specific frequency.
-   **Job Expression**: Defines the job-related expression that must
    resolve to \"true\" when the SAM performs the dependency check for
    the job.
-   **Frequency Expression**: Defines an expression associated with the
    Frequency Name that must resolve to \"true\" when the SAM performs
    the dependency check for the job. This dependency is included with
    the job only when it runs on the associated frequency.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for implementing  |
| background](../../Resourc        | the Expression Dependency        |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding Expression           | |                                  |     Dependencies](../UI/Ente     |
|                                  | rprise-Manager/Adding-Expres |
|                                  | sion-Dependencies.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Editing Expression          | |                                  |     Dependencies](../UI/Enter    |
|                                  | prise-Manager/Editing-Expres |
|                                  | sion-Dependencies.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Expression         | |                                  |     Dependencies](../UI/Enterp   |
|                                  | rise-Manager/Deleting-Expres |
|                                  | sion-Dependencies.md){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+
:::

 

