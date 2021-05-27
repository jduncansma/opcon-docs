---
lang: en-us
title: Defining Properties
viewport: width=device-width, initial-scale=1.0
---

#  []{#Defining}Defining Properties 
The following basic information applies to defining properties:

-   **Name**: Defines the property name.
    -   For Global Properties (OpCon/xps Instance (OI) properties), the
        property name must not exceed 64 characters and must be unique.
    -   For Machine, Schedule, and Job Instance properties, the name has
        no restriction on length and should be unique for an instance.
    -   Although not actually invalid, some characters will cause
        problems with OpCon event processing
        and token resolution. Avoid the following characters: \' (single
        quote), \" (double quote), ( ) (open and closed parentheses), \\
        (backslash) , (comma), = (equals), ; (semi-colon), and \|
        (pipe).
        -   Property names should not have a preceding dollar sign (\$).
            This symbol is reserved for System Properties.
        -   The @ symbol cannot be the first or last character of the
            property name, and it cannot appear consecutively more than
            once within the name.
    -   If the database has a binary sort order, the property names are
        case-sensitive.
-   **Documentation**: For Global Properties (OpCon/xps Instance (OI)
    properties), provides an area for descriptions, explanations, and
    notes that can be updated for the defined property. For information
    on inserting hyperlinks into the Documentation area, refer to
    [Entering and Opening Hyperlinks in the Documentation     Frame](../UI/Enterprise-Manager/Entering-and-Opening-Hyperlinks.md){.MCXref
    .xref} in the **Enterprise Manager** online help.
-   **Encrypted**: Allows the Value to be encrypted. Once an encrypted
    value is saved, the value cannot be decrypted.
-   **Value**: Defines the property value. If a token references the
    associated property when submitting a job for processing or
    processing OpCon events,
    OpCon resolve the token to this value.
-   The final value of the property must be usable by the job or
    OpCon event at the time of processing.
-   Property Expressions are allowed in the value of a property. For
    more information, refer to [Property Expressions API     Syntax](Property-Expressions-API-Syntax.md).
-   If defining the final value, you should avoid using the following
    characters: , (comma), = (equals), ; (semi-colon), and \| (pipe).
    These characters can cause problems with
    OpCon event processing and token
    resolution.
-   The value **should not** be enclosed in quotes. If quotes are
    entered, they will be used as part of the value.
-   The value must not exceed 4000 characters.
-   Leading and trailing spaces are removed from property values.

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** In this use case,   | | circular                         | we have the need to dynamically  |
| background](../../Reso           | supply different values as       |
| urces/Images/example-icon(48x48) | parameters to a job through an   |
| .png "Example icon") | OpCon |
|                                  | event. One of these values       |
|                                  | contains a character that would  |
|                                  | cause a problem with the event.  |
|                                  | The solution for this problem is |
|                                  | to define multiple properties    |
|                                  | instead, and place the problem   |
|                                  | character in the job definition. |
|                                  | For this example, the problem    |
|                                  | character in question is a comma |
|                                  | (,).                             |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | On the Job Definition, the first |
|                                  | parameter to the job must be a   |
|                                  | string of alpha characters       |
|                                  | (e.g., DAILY), and the second    |
|                                  | parameter must be a string of    |
|                                  | alpha characters with a comma in |
|                                  | the middle (e.g., TEST,JOB).     |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | The [incorrect]{.ul} approach    | |                                  | is:                              |
|                                  |                                  |
|                                  | 1.  In the Job Details for the   |
|                                  |     platform, we use the         |
|                                  |     following tokens separated   |
|                                  |     by commas:                   |
|                                  | 2.  In the                       |
|                                  |                                  |
|                                  | OpCon |
|                                  |     event to add the job, we use |
|                                  |     this syntax:                 |
|                                  |                                  |
|                                  | **Result**                       |
|                                  |                                  |
|                                  | The job will fail because a      |
|                                  | comma is used by                 |
|                                  | OpCon |
|                                  | as a delimiter for events, and   |
|                                  | when the tokens resolve, the     |
|                                  | value becomes DAILY,TEST instead |
|                                  | of DAILY,TEST,JOB.               |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | The [correct]{.ul} approach is:  | |                                  |                                  |
|                                  | 1.  In the Job Details for the   |
|                                  |     platform, we use the         |
|                                  |     following tokens separated   |
|                                  |     by commas:                   |
|                                  | 2.  In the                       |
|                                  |                                  |
|                                  | OpCon |
|                                  |     event to add the job, we use |
|                                  |     this syntax:                 |
|                                  |                                  |
|                                  | **Result**                       |
|                                  |                                  |
|                                  | When those tokens are resolved   |
|                                  | at job run time, they will       |
|                                  | become: DAILY,TEST,JOB           |
+----------------------------------+----------------------------------+

### Methods for Defining Properties

There are two methods for defining properties:

-   [Defining One Property at a Time](#Defining2)
-   [Defining Multiple Properties at a Time](#Defining3)

#### Defining One Property at a Time

The areas below allow for only one property to be defined at a time.
These same areas support maintenance of properties.

##### Enterprise Manager

-   User-defined OpCon/xps Instance (OI) properties and values are
    maintained in [Properties](Properties.md). For
    information on Adding, Editing, or Deleting Properties, refer to
    [Managing Global     Properties](../UI/Enterprise-Manager/Managing-Global-Properties.md){.MCXref
    .xref} in the **Enterprise Manager** online help.
-   Users can define Schedule Instance Properties from the [Schedule     Instance
    Definition](../UI/Enterprise-Manager/Schedule-Instance-Definition.md){.MCXref
    .xref} frame in the **Enterprise Manager** online help.
-   Users can define Job Instance Properties from the [Job Instance     Definition](../UI/Enterprise-Manager/Job-Instance-Definition.md){.MCXref
    .xref} frame in the **Enterprise Manager** online help.

##### OpCon Events

The [Property-Related Events](../OpCon-Events/Event-Types.md#Property) (\$PROPERTY:ADD,
SET, and DELETE) support maintenance of user-defined properties for any
object (e.g., OpCon/xps Instance, Machine Instance, Schedule Instance,
and Job Instance).

##### SMADDI

-   The \"new_token\" message type supports adding a new
    OpCon Instance user property value to the
    Master tables. Refer to [new_token and update_token Element     Structures](../Utilities/SMA-Dynamic-Data-Input/Data-Input-Message-Elements.md#new_token_and_update_token_Element_Structures){.MCXref
    .xref}.
-   The \"update_token\" message type supports updating an
    OpCon Instance user property value in the
    Master tables. Refer to [new_token and update_token Element     Structures](../Utilities/SMA-Dynamic-Data-Input/Data-Input-Message-Elements.md#new_token_and_update_token_Element_Structures){.MCXref
    .xref}.

#### Defining Multiple Properties at a Time

The following areas allow for one or more properties to be defined at a
time:

-   [Enterprise Manager](#Enterprise_Manager)
-   [OpCon Events](#OpCon_Events)

From each of these locations, multiple properties can be defined at one
time by listing properties and their values in a string. The following
syntax must be followed:

PropertyName1=value;PropertyName2=value...

 

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Properties and values may not begin or end with a space.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------

##### Enterprise Manager

The links below reference the **Enterprise Manager** online help.

-   From Schedule Master or Schedule Daily, users can define Schedule
    Instance properties. Properties will automatically be associated
    with the defined schedule when it builds. Refer to [Schedule     Instance
    Definition](../UI/Enterprise-Manager/Schedule-Instance-Definition.md){.MCXref
    .xref}.
-   From Job Master or Job Daily, users can define Job Instance
    properties. Properties will automatically be associated with the
    defined Job when it builds with the schedule. Refer to [Job Instance     Definition](../UI/Enterprise-Manager/Job-Instance-Definition.md){.MCXref
    .xref}.
-   From Schedule Build, users can define Schedule Instance properties
    when building a schedule. Properties will automatically be
    associated with the defined schedule when it builds. Refer to [Using     Schedule
    Build](../UI/Enterprise-Manager/Using-Schedule-Build.md){.MCXref
    .xref}.
-   From Daily Maintenance, users can define Job Instance properties
    when adding a job. Properties will automatically be associated with
    the defined job to add to the daily schedule. Refer to [Adding Jobs     from Job Master to Daily
    Schedule](../UI/Enterprise-Manager/Adding-Jobs-from-Job-Master-to-Daily-Schedule.md){.MCXref
    .xref}.

##### OpCon Events

-   \$SCHEDULE:BUILD type events have an optional parameter for defining
    properties for the schedule being built. Properties will
    automatically be associated with the defined schedule to build. A
    job is created in the AdHoc schedule and causes the schedule to
    build in a released state so the schedule will start processing as
    soon as its start time arrives. For more information, refer to
    [\$SCHEDULE:BUILD](../OpCon-Events/Event-Types.md#$SCHEDULE:BUILD,%3Cschedule_date%3E,_%3Cschedule_name%3E,%3Clog_file_name%3E,_%3Coverwrite_flag%3E,_%5BSchedule_Instance_Property_Definitions%5D)
    in the **OpCon Events** online help.
-   \$JOB:ADD type events have an optional parameter for defining
    properties for the job being added. Properties will automatically be
    associated with the defined job to add to the daily schedule. For
    more information, refer to
    [\$JOB:ADD](../OpCon-Events/Event-Types.md#$JOB:ADD) in the
    **OpCon Events** online help.
:::

 

