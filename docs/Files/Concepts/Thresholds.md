---
lang: en-us
title: Thresholds
viewport: width=device-width, initial-scale=1.0
---

#  []{#top}Thresholds 
A *threshold* is a user-defined placeholder consisting of a name and a
numeric value. Thresholds are used to help resolve dependencies that
cannot be resolved by a job dependency. This means a specification can
be made for a job to not start until a specified threshold condition is
met. Thresholds are also used to allow external applications and systems
to affect schedules.

 

The following information applies to defining thresholds:

-   **Name**: Defines the name for the threshold.
-   **Documentation**: Provides an area for descriptions, explanations,
    and notes that can be updated for the threshold. For information on
    inserting hyperlinks into the Documentation area, refer to [Entering     and Opening Hyperlinks in the Documentation
    Frame](../UI/Enterprise-Manager/Entering-and-Opening-Hyperlinks.md){.MCXref
    .xref} in the **Enterprise Manager** online help.
-   **Threshold Value**: Defines a numeric value for a threshold.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are several references for       |
| background](../../Resourc        | implementing the Thresholds      |
| es/Images/moreinfo-icon(48x48).p | concept.]            |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | For EM, visit the following      |
|                                  | sections in the **Enterprise     |
|                                  | Manager** online help:           |
|                                  |                                  |
|                                  | -   [Adding                      | |                                  |     Thresho                      |
|                                  | lds](../UI/Enterprise-Manager/ |
|                                  | Adding-Thresholds.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Editing                     | |                                  |     Threshol                     |
|                                  | ds](../UI/Enterprise-Manager/E |
|                                  | diting-Thresholds.md){.MCXref |
|                                  |     .xref}                       |
|                                  | -   [Deleting                    | |                                  |     Threshold                    |
|                                  | s](../UI/Enterprise-Manager/De |
|                                  | leting-Thresholds.md){.MCXref |
|                                  |     .xref}                       |
|                                  |                                  |
|                                  | For                              |
|                                  | OpCon |
|                                  | events, visit the following      |
|                                  | section in the **OpCon Events**  |
|                                  | online help:                     |
|                                  |                                  |
|                                  | -   [\$THRESHOLD:SET,\<threshold | |                                  |     name\>,                      |
|                                  | \<value\>](../OpCon-Events/Eve |
|                                  | nt-Types.md#$THRESHO){.MCXref |
|                                  |     .xref}                       |
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
|                                  |     threshold to Master tables   |
|                                  |     of the                       |
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
|                                  |     threshold to Master tables   |
|                                  |     of the                       |
|                                  |                                  |
|                                  | OpCon |
|                                  |     database)                    |
|                                  | -   [Creating Data Input         | |                                  |                                  |
|                                  |    Files](../Utilities/SMA-Dyn |
|                                  | amic-Data-Input/Creating-D |
|                                  | ata-Input-Files.md){.MCXref |
|                                  |     .xref} (for creating data    |
|                                  |     input files)                 |
+----------------------------------+----------------------------------+

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** Jamie needs to      | | circular                         | create an External Application   |
| background](../../Reso           | Dependency because she has an    |
| urces/Images/example-icon(48x48) | OpCon |
| .png "Example icon") | job named \'Testing\' that is    |
|                                  | dependent on job processing on a |
|                                  | machine where an LSAM is not     |
|                                  | installed.                       |
|                                  |                                  |
|                                  | -   Jamie creates a threshold    |
|                                  |     called **EXTERNALAPP** for   |
|                                  |     \'Testing\' in               |
|                                  |                                  |
|                                  | OpCon |
|                                  |     Administration and leaves    |
|                                  |     the default value **0**.     |
|                                  | -   In Job Master, Jamie creates |
|                                  |     a threshold dependency for   |
|                                  |     \'Testing\' and makes the    |
|                                  |     \'Testing\' job dependent on |
|                                  |     the threshold                |
|                                  |     **EXTERNALAPP**. Jamie will  |
|                                  |     set the dependent value      |
|                                  |     equal (**EQ**) to **1**.     |
|                                  | -   In the Job Master, Jamie     |
|                                  |     creates a threshold update   |
|                                  |     for the \'Testing\' job and  |
|                                  |     sets the Job Status to       |
|                                  |     **Finished OK** for the      |
|                                  |     Threshold **EXTERNALAPP**    |
|                                  |     with a value of **0**. This  |
|                                  |     takes place after JobA       |
|                                  |     executes and will reset the  |
|                                  |     threshold for the next time  |
|                                  |     the job executes.            |
|                                  | -   Jamie builds the schedule    |
|                                  |     and the \'Testing\' job      |
|                                  |     should be in a Wait          |
|                                  |     Threshold/Resource           |
|                                  |     Dependency state in Schedule |
|                                  |     Operations.                  |
|                                  | -   On the machine with the job  |
|                                  |     that the \'Testing\' job is  |
|                                  |     dependent on, Jamie will     |
|                                  |     edit the external job so     |
|                                  |     when the process finishes,   |
|                                  |     it copies or FTPs an ASCII   |
|                                  |     file to the SAM server. The  |
|                                  |     file should contain the      |
|                                  |     following OpCon/xps event:   |
|                                  |     \$THRESHOLD:SET,EXTERN       |
|                                  | ALAPP,1,username,event_password. |
|                                  |     This file should be placed   |
|                                  |     in the MSGIN directory for   |
|                                  |     the SAM.                     |
|                                  |                                  |
|                                  | **Result**: When the external    |
|                                  | OpCon/xps event is received      |
|                                  | through the MSGIN, the threshold |
|                                  | EXTERNALAPP is updated to a      |
|                                  | value of one, and the            |
|                                  | \'Testing\' job starts           |
|                                  | processing if there are no other |
|                                  | dependencies to resolve. When    |
|                                  | the \'Testing\' job finishes,    |
|                                  | the threshold EXTERNALAPP is set |
|                                  | back to zero.                    |
+----------------------------------+----------------------------------+

 

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** Jamie has a         | | circular                         | multi-instance job named         |
| background](../../Reso           | **UpdateCreditDatabase** that    |
| urces/Images/example-icon(48x48) | should run once for every ten    |
| .png "Example icon") | (10) credit transactions. Each   |
|                                  | credit transaction causes a      |
|                                  | unique file to be written to the |
|                                  | credit server.                   |
|                                  |                                  |
|                                  | -   Jamie creates a threshold    |
|                                  |     called                       |
|                                  |     **CreditTransactions** in    |
|                                  |                                  |
|                                  | OpCon |
|                                  |     Administration and leaves    |
|                                  |     the default value **0**.     |
|                                  | -   In Job Master Maintenance,   |
|                                  |     Jamie creates a threshold    |
|                                  |     dependency for               |
|                                  |     **UpdateCreditDatabase** and |
|                                  |     makes the job dependent on   |
|                                  |     the threshold                |
|                                  |     **CreditTransactions**.      |
|                                  |     Jamie will set the dependent |
|                                  |     value equal (**EQ**) to      |
|                                  |     **10**.                      |
|                                  | -   Jamie configures the [SMA    | |                                  |     Resource                     |
|                                  |                                  |
|                                  | Monitor](../Utilities/SMA-Reso |
|                                  | urce-Monitor/Introduction.md) |
|                                  |     to detect the unique files   |
|                                  |     that arrive for each credit  |
|                                  |     transaction. When each file  |
|                                  |     arrives, the SMA Resource    |
|                                  |     Monitor sends the following  |
|                                  |     event to increment the value |
|                                  |     of the threshold             |
|                                  |     **CreditTransactions** by 1: |
|                                  |                                  |
|                                  | ```{=html}                       |
|                                  | <!-- -->                         |
|                                  | ```                              |
|                                  | -   In the [Notification         | |                                  |     Manager]                     |
|                                  | (../UI/Enterprise-Manager/Usin |
|                                  | g-Notification-Manager.md), |
|                                  |     Jamie creates a job event    |
|                                  |     trigger on the               |
|                                  |     **UpdateCreditDatabase**     |
|                                  |     job, so when the job is      |
|                                  |     **Submitted**, Notification  |
|                                  |     Manager sends two events to  |
|                                  |     SAM. The first event is to   |
|                                  |     set **CreditTransactions**   |
|                                  |     to a value of **0**. The     |
|                                  |     purpose of this step is to   |
|                                  |     reset the threshold for the  |
|                                  |     next set of credit           |
|                                  |     transactions that will       |
|                                  |     arrive.                      |
|                                  |                                  |
|                                  | ```{=html}                       |
|                                  | <!-- -->                         |
|                                  | ```                              |
|                                  | -   The second event is to add   |
|                                  |     another copy of the          |
|                                  |     UpdateCreditDatabase job to  |
|                                  |     the Daily schedule.          |
|                                  |                                  |
|                                  | **Result**: When the schedule is |
|                                  | built, the                       |
|                                  | **UpdateCreditDatabase** job     |
|                                  | will be in a status of \"Wait    |
|                                  | Threshold Dependency\" in        |
|                                  | Schedule Operations. The SMA     |
|                                  | Resource Monitor increments the  |
|                                  | value of CreditTransactions each |
|                                  | time a file arrives. When the    |
|                                  | value of **CreditTransactions**  |
|                                  | reaches ten (10), the            |
|                                  | UpdateCreditDatabase job runs.   |
|                                  | As soon as the job is Submitted, |
|                                  | the Notification Manager         |
|                                  | executes the two events to reset |
|                                  | the threshold to zero and add    |
|                                  | another copy of the              |
|                                  | UpdateCreditDatabase job so it   |
|                                  | can process the next ten         |
|                                  | records.                         |
+----------------------------------+----------------------------------+
:::

 

