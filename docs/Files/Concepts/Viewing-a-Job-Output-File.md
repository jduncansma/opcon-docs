---
lang: en-us
title: Viewing a Job Output File
viewport: width=device-width, initial-scale=1.0
---

#  []{#Viewing}Viewing a Job Output File 
When OpCon runs a job, the LSAM on the target machine can capture the
output from the execution of the job and save it to one or more files.
Each platform saves different files based on the standard behavior of
the operating system (e.g., UNIX jobs will save standard out and
standard error). Graphical interfaces for
OpCon can then retrieve those files for
viewing using the Job Output Retrieval System (JORS). This feature is
accessed using the **View Job Output** menu option from a job in
Operations.

 

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Configuring job scheduling for TLS Security implies that the JORS communications will also be secured by the same digital certificate configuration. Refer to [TLS Security](../Server-Programs/SMA-Network-Communications-Module.md#TLS) in the **Server Programs** online help for details.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

The following actions need to take place to View Job Output
successfully:

-   The following components must be active on the target machine:
    -   The [LSAM]{.GeneralLSAM} must be running     -   The JORS component must be running
-   In the [LSAM]{.GeneralLSAM}\'s configuration file:     -   Enable the [LSAM]{.GeneralLSAM} to \"Capture Job Output\"
    -   Set the JORS port number to the same value you will set for that
        machine in the OpCon database.
-   In the **Enterprise Manager**:
    -   The **JORS Port number** needs to be set in the *Advanced
        Machine Properties*. The JORS port number needs to match the one
        in the [LSAM]{.GeneralLSAM}\'s configuration file. For more         information, refer to [Set JORS Port Number for the
        Machine](../UI/Enterprise-Manager/Configuring-Advanced-Machine-Properties.md#Set_JORS_Port_Number_for_the_Machine){.MCXref
        .xref} in the **Enterprise Manager** online help.

+----------------------------------+----------------------------------+
| ![White \"person reading\" icon  | **MORE INFO:** [Provided here    | | on blue circular                 | are references for the Viewing   |
| background](../../Resourc        | Job Output concept.] |
| es/Images/moreinfo-icon(48x48).p |                                  |
| ng "More Info icon") |                                  |
|                                  |                                  |
|                                  | For EM, consult [Viewing Job     | |                                  | Output](../UI/Enterprise-Ma    |
|                                  | nager/Performing-Job-Procedu |
|                                  | res-Matrix.md#Viewing){.MCXref |
|                                  | .xref} in the **Enterprise       |
|                                  | Manager** online help.           |
+----------------------------------+----------------------------------+
:::

 

