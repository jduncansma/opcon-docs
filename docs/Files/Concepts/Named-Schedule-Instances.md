---
lang: en-us
title: Named Schedule Instances
viewport: width=device-width, initial-scale=1.0
---

#  Named Schedule Instances

Multi-instance support for schedules in OpCon is a powerful feature that
reduces the maintenance burden on repeatable workflows. Essentially, a
single definition rule can be designated for unlimited use or job runs.

 

Named Schedule Instance functionality expands multi-instance
capabilities on schedules to include exception management and
inter-instance dependency capability.

## Property Association

Already a multi-instance schedule capability, predefined properties can
also be associated with a named instance of a schedule. For more
information, refer to [Using Properties for Automation](Using-Properties-for-Automation.md)
and [Schedule Instance Property Name Syntax](Using-Properties-for-Automation.md#Schedule){.MCXref
.xref}.

## Exception Management

Exception management is a way to associate exception definitions with
named instances by applying execution rules to job patterns. During the
schedule build, the exceptions are applied.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [ When defining the job pattern, if only the asterisk wildcard character (\*) is specified in the field, then the exceptions will be applied to all job.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

The following information applies to defining exception rules:

**Job Field**: Defines the job field in which to apply the exception
rule.

**To Replace**: Defines the value to replace in the job field.

-   The value may be:
    -   an empty string (\"\")
    -   a fixed string (\"abc\")
    -   a string with instance properties (\[\[\$this.Property\]\]) -   The value may not be a property expression.
-   \[\[\@name\]\] is a [case-sensitive]{.ul} token that can be used to     refer to the current instance name.
-   \[\[\@current\]\] is a [case-sensitive]{.ul} token that can be used     to refer to the current value of the job field.
-   \$this may be used as a placeholder for the instance property named
    in the instance definition. This placeholder is
    [case-sensitive]{.ul}. 
**New Value**: Defines the replacement value.

-   The value may be:
    -   a fixed string (\"abc\")
    -   a string with instance properties (\[\[\$this.Property\]\])     -   a property expression (\[\[\@current\]\] + ToOaTime(\"02:00\"))

```{=html}
<!-- -->
```
-   **Is Expression**: Specifies, when enabled, that the new value is a
    property expression.

### Use Cases for Exception Rules

#### When to Use String Replacement

String replacement can be used to change a string value, for instance,
on the command line or of a machine or department name. Here are some
practical examples.

##### Example \#1

To change the command line from \"C:\\MyFolder\\MyApp.exe -arg1 firstArg
-arg2 secondArg\" to \"C:\\MyFolder\\MyApp.exe -arg1 firstArg -arg2
secondArg -arg3 thirdArg\":

 

**Job Field**: (Windows) Command Line

**To Replace**: C:\\MyFolder\\MyApp.exe -arg1 firstArg -arg2 secondArg

**New Value**: C:\\MyFolder\\MyApp.exe -arg1 firstArg -arg2 secondArg
-arg3 thirdArg

**Is Expression**: false

##### Example \#2

To change the command line from \"\<CurrentValue\>\" to
\"\<CurrentValue\> -arg3 thirdArg\":

 

**Job Field**: (Windows) Command Line

**To Replace**:

**New Value**: \[\[\@current\]\] -arg3 thirdArg 
**Is Expression**: false

##### Example \#3

To change the machine from \"MyMachine\" to \"My\<Property\>Machine\":

 

**Job Field**: Primary Machine

**To Replace**: MyMachine

**New Value**: My\[\[\$this.Property\]\]Machine 
**Is Expression**: false

##### Example \#4

To change the department from \"\<CurrentValue\>\" to
\"\<CurrentValue\>\<InstanceName\>\":

 

**Job Field**: Department

**To Replace**:

**New Value**: \[\[\@current\]\]\[\[\@name\]\] 
**Is Expression**: false

#### When to Use True Expressions

Expressions can be used to change a numeric field, for instance, the job
start offset. Here are some practical examples.

##### Example \#1

To change the job start offset from \"\<CurrentValue\>\" by adding 20
minutes to it:

 

**Job Field**: Start Offset

**To Replace**:

**New Value**: \[\[\@current\]\] + ToOaTime(\"00:20\") 
**Is Expression**: true

##### Example \#2

To change the job start offset from \"\<CurrentValue\>\" by adding 15%
of the current offset to it:

 

**Job Field**: Start Offset

**To Replace**:

**New Value**: \[\[\@current\]\] + (\[\[\@current\]\] \* 0.15) 
**Is Expression**: true

 

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are several references for       |
| background](../../Resourc        | implementing this                |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | []                   | |                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Defining Named Schedule     | |                                  |     Instances](../UI/Enterpris   |
|                                  | e-Manager/Defining-Named-S |
|                                  | chedule-Instances.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Updating Schedule Instance  | |                                  |                                  |
|                                  |  Properties](../UI/Enterprise- |
|                                  | Manager/Updating-Schedule-In |
|                                  | stance-Properties.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Updating Named Schedule     | |                                  |     Instance                     |
|                                  |     Propert                      |
|                                  | ies](../UI/Enterprise-Manager/ |
|                                  | Updating-Named-Schedule-In |
|                                  | stance-Properties.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Updating Named Schedule     | |                                  |     Instance                     |
|                                  |     Excepti                      |
|                                  | ons](../UI/Enterprise-Manager/ |
|                                  | Updating-Named-Schedule-In |
|                                  | stance-Exceptions.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Named Schedule     | |                                  |     Instances](../UI/Enterpris   |
|                                  | e-Manager/Deleting-Named-S |
|                                  | chedule-Instances.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Named Schedule     | |                                  |     Instance                     |
|                                  |     Propert                      |
|                                  | ies](../UI/Enterprise-Manager/ |
|                                  | Deleting-Named-Schedule-In |
|                                  | stance-Properties.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting Named Schedule     | |                                  |     Instance                     |
|                                  |     Excepti                      |
|                                  | ons](../UI/Enterprise-Manager/ |
|                                  | Deleting-Named-Schedule-In |
|                                  | stance-Exceptions.md){.MCXref |
|                                  |     .xref}                       |
+----------------------------------+----------------------------------+
:::

 

