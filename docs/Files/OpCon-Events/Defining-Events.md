---
lang: en-us
title: Defining Events
viewport: width=device-width, initial-scale=1.0
---

# Defining Events

Before defining events, review the following information:

-   [Internal Events](#Internal)
-   [External Events](#External)
-   [OpCon Event Syntax](#OpCon)
-   [Event Keywords](#Event)

## Internal Events

An internal event is any OpCon event entered
in the database in association with a specific job or schedule.

## External Events

An external event is any OpCon event not
entered in the database in association with a specific job or schedule.
As of release 20.0 and higher, new users will have their ability to
submit external events disabled by default. Unlike an internal event, an
external event requires a valid OpCon User
Login ID and event password. External events can be passed to the SAM by
several methods:

-   The SAM searches the MSGIN directory.
-   An [LSAM]{.GeneralLSAM} passes an event to the SAM based on an event     placed in a MSGIN directory on the [LSAM]{.GeneralLSAM} machine.
-   An [LSAM]{.GeneralLSAM} passes an event to the SAM with a specific     command.
-   If property definitions are specified with an external event, the
    list of property definitions would be followed by a comma, then the
    user name, external password combination.

[Create an External Event]{.ul} 
Complete the following steps to send an external event through the SAM
MSGIN directory:

1.  Choose an OpCon event to use for the
    external event. For additional information, refer to [Event     Types](Event-Types.md).
2.  Create an ASCII text file in MS Notepad and place the event on the
    first line using external event syntax. For additional information,
    refer to [External OpCon Events Basic Syntax](#External2){.MCXref
    .xref}.
3.  Copy the text file to the MSGIN directory on the machine where SAM
    is installed. For additional information, refer to
    [MSGIN](#MSGIN).
4.  To verify processing of the OpCon event,
    review the SAM.log from \<Output Directory\>\\SAM\\Log\\ directory.
    If the event did not process, review the Critical.log from the
    \<Output Directory\>\\SAM\\Log\\ directory and check for errors.
5.  If errors were detected, make the required changes to the text file
    and repeat [Steps 3 and 4]{.ul}.

### MSGIN

MSGIN is the name of the directory the SAM monitors for external events.
The directory is located on the machine where the SAM is installed under
file path \<Configuration Directory\>\\SAM\\MSGIN\\. Any external
program or application can generate an ASCII file to be placed in this
directory. These files must contain a valid
OpCon event, User Login ID, and event
password for the SAM to process the event.

??

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Output Directory was configured during installation. For more information, refer to [File Locations](../Concepts/File-Locations.md) in the **Concepts**??online help.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Security

[SMA Technologies]{.GeneralCompanyName} suggests creating special OpCon users for the purpose of external
events. These users should be set up with very limited privileges to the
database (e.g., Grant only the Function Privilege to \"Maintain
Thresholds\"). This helps maintain security.

-   For security purposes, a valid OpCon User
    Login ID and external event password are required.
-   The external event password is not the same as the password with
    which a user logs into the graphical interfaces. This is a password
    stored separately in the database.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE??INFO:** [Provided here    | | on blue circular                 | are several references for       |
| background](../../Resourc        | implementing the External Events |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  | ??                                |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding User                 | |                                  |     Accounts](                   |
|                                  | ../UI/Enterprise-Manager/Addin |
|                                  | g-User-Accounts.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Managing                    | |                                  |     Privilege                    |
|                                  | s](../UI/Enterprise-Manager/Ma |
|                                  | naging-Privileges.md){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+

## OpCon Event Syntax

Each OpCon event has a specific syntax. If this syntax is not followed
or the data in field is invalid, the SAM is not able to process the
event and it places an error message in the Critical log on the SAM
machine.

### Internal OpCon Events Basic Syntax

\$EVENT:COMMAND,field-1,field-2,\...,field-n

### External OpCon Events Basic Syntax

#### Comma-separated Command Syntax

\$EVENT:COMMAND,field-1,field-2,\...,field-n,username,external password

#### XML-formatted Command Syntax

\<Event\>

??????????\<Event Elements\>

\</Event\>

\<Event\>

??????????\<Event Elements\>

\</Event\>

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** For examples of how each event is formatted in XML, refer to [Example XML Event Syntax](Example-XML-Event-Syntax.md) in the **Reference Information** section.
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   The maximum number of characters in the event string:
    -   Internal Events: 738
    -   External Events: 2000
-   Commas cannot be used in text; they can only be used as separators
    in events.
-   Asterisks (\*) and question marks (?) cannot be used in Schedule,
    Job, or Machine names. These characters are reserved as wild cards
    (if the Server Option for wild cards in enabled).
-   For all event templates in graphical interfaces, the greater-than
    and less-than symbols (\<\>) are only used to define the field. A
    finished event definition should not contain any of these symbols.
-   Tokens can be used in any field, assuming the token value and the
    field it replaces are compatible. For information on tokens, refer
    to
    [Tokens](../Concepts/Using-Properties-for-Automation.md#Tokens){.MCXref
    .xref} in the **Concepts** online help.
    -   Internal OpCon events can include
        tokens that identify any properties of any type.
    -   External OpCon events can include
        tokens for user-defined properties and the \$TIME, \$DATE, and
        \$NOW Managed System Properties only.
-   Valid entries for the schedule date parameter include:
    -   A specific date entered using the syntax recognized by the
        regional settings of the user running SMA Service Manager. For
        example, the default Short date format for a US English machine
        is m/d/yyyy (e.g., 1/9/2012).
    -   Tokens for date-related Managed System Properties (e.g.,
        \[\[\$DATE\]\]). For additional information, refer to [System         Properties](../Concepts/Properties.md#System) in
        the **Concepts** online help.
    -   [Event Keywords](#Event)
    -   Blank - If the schedule date parameter is left blank, the commas
        must be left in place to delimit the parameter. For example:
        [\$SCHEDULE:CANCEL,,TestSched]{._Override         style="font-family: 'Courier New';"}. An event with a blank
        schedule date defaults to the date the event is processed.
-   To use the default schedule of *AdHoc*, leave the schedule name
    parameter blank. The commas must be left in place to delimit the
    parameter. For example:
    [\$SCHEDULE:BUILD,\[\[\$DATE\]\],,SchedBuild.log,Y]{._Override     style="font-family: 'Courier New';"}.
-   By default, the SAM does not reopen completed schedules based on
    events. When a combination of schedule date and schedule name are
    defined, they need to describe an active schedule in the Daily
    tables. If desired, the SAM can be configured to Allow Job Events to
    Restart Schedules. For additional information, refer to [OpCon     Server Options](../Concepts/OpCon-Server-Options.md){.MCXref
    .xref} in the **Concepts** online help.

## Event Keywords

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Keywords are not tokens and, therefore, do not need any additional formatting.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------

??

The following event keywords are valid entries for the schedule date:

  Keyword                Value
  ---------------------- -----------------------------------------------------------------------------------------------------------
  CURRENT                Today\'s date.
  EARLIEST               Earliest date this schedule exists.
  EARLIEST HELD          Earliest date this schedule exists in a [held]{.skd-job-statuses} state.   EARLIEST ACTIVE        Earliest date this schedule exists in an [active]{.skd-job-statuses} state.
  EARLIEST NONCOMPLETE   Earliest date this schedule exists in a [non-complete]{.skd-job-statuses} state.   EARLIEST WAITING       Earliest date this schedule exists in a [waiting to start]{.skd-job-statuses} state.
  EARLIEST COMPLETE      Earliest date this schedule exists in a [complete]{.skd-job-statuses} state.   LATEST                 Latest date this schedule exists.
  LATEST HELD            Latest date this schedule exists in a [held]{.skd-job-statuses} state.   LATEST ACTIVE          Latest date this schedule exists in an [active]{.skd-job-statuses} state.
  LATEST NONCOMPLETE     Latest date this schedule exists in a [non-complete]{.skd-job-statuses} state.   LATEST WAITING         Latest date this schedule exists in a [waiting to start]{.skd-job-statuses} state.
  LATEST COMPLETE        Latest date this schedule exists in a [complete]{.skd-job-statuses} state.   NEXT                   The next schedule date following the calendar date on which the event executes.
  NEXTREL                The next schedule date relative to the schedule date of the job or schedule that the event was found.
  PREVIOUS               The previous schedule date before the calendar date on which the event executes.
  PREVIOUSREL            The previous schedule date relative to the schedule date of the job or schedule that the event was found.

  : Event Keywords

??

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** [The following is   | | circular                         | an event with a keyword (do not  |
| background](../../Reso           | place brackets around            |
| urces/Images/example-icon(48x48) | keywords):]{.statement2}         |
| .png "Example icon") |                                  |
|                                  | \$S                              |
|                                  | CHEDULE:CANCEL,CURRENT,TestSched |
+----------------------------------+----------------------------------+
:::

??

