---
lang: en-us
title: OpenVMS Job Details
viewport: width=device-width, initial-scale=1.0
---

#  OpenVMS Job Details

The following information applies to defining an OpenVMS job. The text
fields in the graphical interfaces support
OpCon token replacement.
[Properties](Properties.md#Tokens) are resolved as the
SAM prepares to send the job to the [LSAM]{.GeneralLSAM}. For additional information about this platform, refer to [Configuration
Parameters](https://help.smatechnologies.com/opcon/agents/openvms/latest/Files/Agents/OpenVMS/Configuration-Parameters.md){.MCXref
.xref} in the **OpenVMS LSAM** online help.

## OpenVMS Details

-   **User ID**: Defines the OpenVMS user ID under which the job should
    execute.
-   **Submit Details**: Defines the job to execute (maximum 154
    characters).
-   **Parameters**: Defines all arguments and/or parameters required by
    the job (maximum 308 characters).
-   **Prerun**: Provides an area to specify an OpenVMS job to be
    executed immediately before the initiation of the job specified in
    Submit Details (maximum 77 characters). If the Prerun job terminates
    with an error, it is rescheduled at a user-defined interval. For
    information on this Prerun setting, refer to [Time     Settings](Time-Settings.md). The Prerun job
    continues to execute at the user-defined interval until it succeeds,
    allowing the job in the Submit Details to process. The primary
    purpose of a Prerun is to test any required preconditions to job
    execution.
-   **Failure Criteria**: Determines if the job is considered a failure
    if its exit status matches any of the criteria specified.
    -   **Exit Codes**: If any one of the criteria is TRUE at the end of
        a job, OpCon reports the job as
        Failed. Up to five different failure criteria may be defined. A
        failure criterion contains two parts: *Operator* and *Exit Code
        integer:*
        -   **Operator**: An exit code criterion may use one of the
            following operators to compare the exit code with a
            user-defined value.
            -   **EQ** (equal to)
            -   **NE** (not equal to) (Default)
            -   **LT** (less than)
            -   **GT** (greater than)
            -   **GE** (greater than or equal to)
            -   **LE** (less than or equal to)
        -   **Exit Code Integer**: A number to compare with the job\'s
            exit code. The default value of **1** is the normal Finished
            OK exit code and should be sufficient for most OpenVMS jobs.
            Open VMS exit codes range from 0 through 255.
:::

 

