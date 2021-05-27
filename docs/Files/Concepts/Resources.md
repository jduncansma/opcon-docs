---
lang: en-us
title: Resources
viewport: width=device-width, initial-scale=1.0
---

#  []{#top}Resources 
A *resource* is a user-defined value consisting of a name and a numeric
limit. Resources are used to manage and limit the number of concurrently
running jobs across schedules and machines in
OpCon. Maximum job count on an LSAM limits
concurrently running jobs on a specific machine. Conflict dependencies
can also limit the number of concurrently running jobs, but conflict
dependencies can be hard to manage in large numbers. Resources are more
flexible because they are platform independent, easy to manage, and can
be influenced by external events (refer to [External Events](../OpCon-Events/Defining-Events.md#External)
in the **OpCon Events** online help).

 

The following information applies to defining resources:

-   **Name**: Defines the name for the resource.
-   **Documentation**: Provides an area for descriptions, explanations,
    and notes that can be updated for the resource. For information on
    inserting hyperlinks into the Documentation area, refer to [Entering     and Opening Hyperlinks in the Documentation
    Frame](../UI/Enterprise-Manager/Entering-and-Opening-Hyperlinks.md){.MCXref
    .xref} in the **Enterprise Manager** online help.
-   **Max Resources**: Defines a numeric maximum number of resources.
-   **Resources in Use**: Indicates the number of resources currently in
    use by OpCon jobs.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are several references for       |
| background](../../Resourc        | implementing the Resources       |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding                      | |                                  |     Resou                        |
|                                  | rces](../UI/Enterprise-Manager |
|                                  | /Adding-Resources.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Editing                     | |                                  |     Resour                       |
|                                  | ces](../UI/Enterprise-Manager/ |
|                                  | Editing-Resources.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Copying                     | |                                  |     Resour                       |
|                                  | ces](../UI/Enterprise-Manager/ |
|                                  | Copying-Resources.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting                    | |                                  |     Resourc                      |
|                                  | es](../UI/Enterprise-Manager/D |
|                                  | eleting-Resources.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Resetting Resources in      | |                                  |     Use](../UI/En                |
|                                  | terprise-Manager/Resetting-R |
|                                  | esources-in-Use.md){.MCXref |
|                                  |     .xref}                       |
|                                  |                                  |
|                                  | For                              |
|                                  | OpCon |
|                                  | events, visit the following      |
|                                  | section in the **OpCon Events**  |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [\$RESOURCE:SET,\<resource   | |                                  |     name\>,                      |
|                                  |     \<value\>](../OpCon-Ev     |
|                                  | ents/Event-Types.md#$RESOURC) |
|                                  |                                  |
|                                  | For SMADDI, visit the following  |
|                                  | sections in the **Utilities**    |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [new_variable and            | |                                  |     update_variable Element      |
|                                  |     Structures](../Utilities     |
|                                  | /SMA-Dynamic-Data-Input/Da |
|                                  | ta-Input-Message-Elements. |
|                                  | htm#new_variable_and_update_vari |
|                                  | able_Element_Structures){.MCXref |
|                                  |     .xref} (for adding a new     |
|                                  |     resource to Master tables of |
|                                  |     the                          |
|                                  |                                  |
|                                  | OpCon |
|                                  |     database)                    |
|                                  | -   [new_variable and            | |                                  |     update_variable Element      |
|                                  |     Structures](../Utilities     |
|                                  | /SMA-Dynamic-Data-Input/Da |
|                                  | ta-Input-Message-Elements. |
|                                  | htm#new_variable_and_update_vari |
|                                  | able_Element_Structures){.MCXref |
|                                  |     .xref} (for updating a       |
|                                  |     resource to Master tables of |
|                                  |     the                          |
|                                  |                                  |
|                                  | OpCon |
|                                  |     database)                    |
+----------------------------------+----------------------------------+

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** Jamie has thirty    | | circular                         | jobs requiring the use of tape   |
| background](../../Reso           | drives on a mainframe. The       |
| urces/Images/example-icon(48x48) | mainframe has only 10 physical   |
| .png "Example icon") | tape drives for use. The thirty  |
|                                  | jobs could run at any time based |
|                                  | on other job dependencies, but   |
|                                  | the number of those jobs running |
|                                  | concurrently must never exceed   |
|                                  | the number of physical tape      |
|                                  | drives.                          |
|                                  |                                  |
|                                  | -   Jamie creates a resource     |
|                                  |     called **TapeDrive** in      |
|                                  |                                  |
|                                  | OpCon |
|                                  |     Administration and sets the  |
|                                  |     Max Resources to **10**.     |
|                                  | -   For [each]{.ul} job (Job1    | |                                  |     through Job30), Jamie        |
|                                  |     creates a resource           |
|                                  |     requirement to require one   |
|                                  |     TapeDrive resource.          |
|                                  |                                  |
|                                  | **Result**: For Job1 through     |
|                                  | Job30, the SAM uses one          |
|                                  | TapeDrive resource each time a   |
|                                  | job is submitted. If all 10      |
|                                  | resources are in use, the SAM    |
|                                  | waits until a resource is        |
|                                  | available before submitting the  |
|                                  | next job.                        |
+----------------------------------+----------------------------------+
:::

 

