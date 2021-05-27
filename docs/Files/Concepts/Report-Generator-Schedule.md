---
lang: en-us
title: Report Generator Schedule
viewport: width=device-width, initial-scale=1.0
---

#  []{#Report}Report Generator Schedule 
The Report Generator Schedule contains template jobs for automating
every predefined report [SMA Technologies]{.GeneralCompanyName} distributes with OpCon. Each job uses
SMABIRTRptGen.exe and passes in the appropriate parameters for each
report. For more information, refer to [BIRT Report Generator](../Utilities/Command-line-Utilities/BIRT-Report-Generator.md){.MCXref
.xref} in the **Utilities** online help.

 

[SMA Technologies]{.GeneralCompanyName} recommends importing the Report Generator schedule during installation. If the schedule was not imported
during installation, refer to [Import the OpCon Maintenance and Report Jobs](../Installation/OpCon-Server-Configuration.md#Import_the_OpCon_Maintenance){.MCXref
.xref} in the **OpCon Installation** online
help.

 

This section describes the jobs imported with the Report Generator
schedule.

## Global Properties Used by the Report Generator Schedule

When the Report Generator schedule is imported, one Global Property
definition is imported to supply the value to the token on the command
lines of the jobs.

-   **SMAOpConPath**: This property defines the directory in which the
    OpCon [Scripts]{.ul} directory exists on     the SAM application server.
    -   Default Value: **C:\\Program Files\\OpConxps**

## Report Generator Schedule Jobs

-   Each report generator job is named with the same name as its
    associated Report title with the OpCon
    internal job number appended.
-   By default, none of the jobs have frequencies or any other job
    components associated with them.
-   By default, reports that allow a Department filter will include all
    departments.
-   By default, all reports are created as PDF files.

To use the Report Generator jobs:

1.  For Schedule- and Job-related reports, copy the desired Report
    Generator job to the schedule against which the report should run.
2.  Add a frequency and any other desired job components to the desired
    Report Generator job.
:::

 

