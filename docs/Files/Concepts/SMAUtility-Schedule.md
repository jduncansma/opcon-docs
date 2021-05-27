---
lang: en-us
title: SMAUtility Schedule
viewport: width=device-width, initial-scale=1.0
---

#  []{#SMAUtili}SMAUtility Schedule 
The SMAUtility schedule is imported during installation and contains
several jobs required for maintenance processes. This section describes
the jobs imported with the SMAUtility schedule.

## Recommendations and Requirements

-   [SMA Technologies]{.GeneralCompanyName} recommends using the     SMAUtility schedule for most jobs involved in the maintenance of
    OpCon.
-   A maintenance job must be added to a schedule to be built in a
    Released state at regular intervals depending on the type of
    maintenance.
-   Specify a time during periods of low job processing. Although the
    utilities and backups do not require exclusive access to the
    database, scheduling the utilities and backups during a time of low
    processing lessens the jobs\' affect on overall system performance.
-   It is important for this schedule to have a consistent actual start
    and finish time to avoid conflicts and failures.
-   Ensure the proper amount of storage (e.g., disk) space is available.

## Global Properties Used by the SMAUtility Schedule

When the SMAUtility schedule is installed, several Global Property
definitions are imported to supply the values to the tokens on the
command lines of the jobs.

-   **SMADBCredentials**: This property defines the User Name and
    Password for logging in to Audit and History cleanup utilities. [SMA     Technologies]{.GeneralCompanyName} recommends updating the default
    value to a user other than ocadm.
    -   Default Value: **-uocadm -w\*\*\*\*\*\*\*\*\*\*\*\***
-   **SMAOpConDataPath**: This property defines the path to the
    \<Configuration Directory\>, which is the parent directory for the
    OpCon data folder.
    -   Default Value: **C:\\ProgramData\\OpConxps**
-   **SMAOpConOutputPath**: This property defines the path to the
    \<Output Directory\>, which is the parent directory for the
    OpCon output folder.
    -   Default Value: **C:\\ProgramData\\OpConxps**
-   **SMAOpConPath**: This property defines the path of the main
    OpCon folder.
    -   Default Value: **C:\\Program Files\\OpConxps**
-   **UNIXLSAMPath**: This property defines the path to the
    [LSAM]{.GeneralLSAM} binary directory for UNIX LSAMs.     -   Default Value: **/usr/local/lsam/bin/**
-   **DB_SERVER_NAME**: This property defines the
    OpCon database server name as used by the
    SMAUtility schedule jobs.
    -   Default Value: **\<server name specified during installation\>**
-   **SqlMaintUser**: This property defines the SQL maintenance user as
    used by the SMAUtility schedule jobs.
    -   Default Value: **\<blank\>**
-   **SqlMaintPassword**: This property defines the SQL maintenance user
    password as used by the SMAUtility schedule jobs. It is recommended
    that the user encrypt this password.
    -   Default Value: **\<blank\>**
-   **DatabaseName**: This property defines the
    OpCon database name as used by the
    SMAUtility schedule jobs.
    -   Default Value: **\<database name specified during
        installation\>**
-   **PathToFullBackupFile**: This property defines the path to the full
    OpCon database backup file as used by the
    SMAUtility schedule jobs.
    -   Default Value: **C:\\Program Files\\Microsoft SQL
        Server\\MSSQL14.MSSQLSERVER\\MSSQL\\Backup\\SMADB_Backup.bak**
-   **PathToTranLogBackupFile**: This property defines the path to the
    OpCon database transaction log backup
    file as used by the SMAUtility schedule jobs.
    -   Default Value: **C:\\Program Files\\Microsoft SQL
        Server\\MSSQL14.MSSQLSERVER\\MSSQL\\Backup\\SMATLog_Backup.bak**

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Configuration Directory location is based on where you installed your programs. For more information, refer to [File Locations](File-Locations.md) in this online help.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Output Directory was configured during installation. For more information, refer to [File Locations](File-Locations.md) in this online help.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## SMAUtility Schedule Job Descriptions

-   [Audit History Purge](#Audit)
-   [Job History Archive](#Job)
-   [Job History Purge](#Job2)
-   [Report File Cleanup](#Report)
-   [RSJBackup_Prune](#RSJBacku)
-   [SMA Database Backup](#SMA2)
-   [SMA Database Maintenance](#SMA5)
-   [SMA Database Transaction Log Backup](#SMA3)
-   [SMA Index Defragmentation (SMA DBCC Index Defrag)](#SMA4){.MCXref
    .xref}
-   [SMA Job Average](#SMA)
-   [Utility Folder Log Cleanup](#Utility)

### Audit History Purge

The default configuration of the Audit History Purge job purges all
audit history older than one year (365 days). The job is configured to
run every day after the Job History Purge job. If any of these settings
are not best for the environment, modify the settings based on the
documentation (refer to [Audit History Cleanup](https://help.smatechnologies.com/opcon/core/latest/Utilities/Command-line-Utilities/Audit-History-Cleanup.md){.MCXref
.xref} in the **Utilities** online help).

#### Job Details and Automation Information

-   Job Details
    -   Command Line:\
        **\"\[\[SMAOpConPath\]\]\\Utilities\\Audit.exe\"         \[\[SMADBCredentials\]\] -d365 -p**
-   Frequency
    -   Frequency Name: **SMASun-SatO7**
    -   Frequency Details: (When to Schedule) **All Weeks**, (Day of the
        Week) **Every Day**, (Day Type) **Any**
    -   Job Build Status: **Released**
    -   Remaining fields: Default Values
-   Job Dependency
    -   Type: **After**
    -   Job: **Job History Purge**
-   Job Dependency
    -   Type: **Conflict**
    -   Job: **SMA Database Transaction Log Backup**

### Job History Archive

The default configuration of the Job History Archive job archives all
job history older than 6 months (180 days), while keeping a minimum of
12 records in history per job. The job is configured to run every day
after the SMA Database Backup job. If any of these settings are not best
for the environment, modify the settings based on the documentation
(refer to [Job History Cleanup](https://help.smatechnologies.com/opcon/core/latest/Utilities/Command-line-Utilities/Job-History-Cleanup.md){.MCXref
.xref} in the **Utilities** online help).

#### Job Details and Automation Information

-   Job Details
    -   Command Line:\
        **\"\[\[SMAOpConPath\]\]\\Utilities\\History.exe\"         \[\[SMADBCredentials\]\] -d180 -m12 -h**
-   Frequency
    -   Frequency Name: **SMASun-SatO7**
    -   Frequency Details: (When to Schedule) **All Weeks**, (Day of the
        Week) **Every Day**, (Day Type) **Any**
    -   Job Build Status: **Released**
    -   Remaining fields: Default Values
-   Job Dependency
    -   Type: **After**
    -   Job: **SMA Database Backup**
-   Job Dependency
    -   Type: **Conflict**
    -   Job: **SMA Database Transaction Log Backup**

### Job History Purge

The default configuration of the Job History Purge job purges all job
history older than 2 years (730 days), while keeping a minimum of 24
records in history per job. The job is configured to run every day after
the Job History Archive job. If any of these settings are not best for
the environment, modify the settings based on the documentation (refer
to [Job History Cleanup](https://help.smatechnologies.com/opcon/core/latest/Utilities/Command-line-Utilities/Job-History-Cleanup.md){.MCXref
.xref} in the **Utilities** online help).

 

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If an alternate database backup is in use (instead of the SMA Database Backup job), [SMA Technologies]{.GeneralCompanyName} recommends configuring the History Purge job to occur after the database has been backed up.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Job Details and Automation Information

-   Job Details
    -   Command Line:\
        **\"\[\[SMAOpConPath\]\]\\Utilities\\History.exe\"         \[\[SMADBCredentials\]\] -d730 -m24 -p**
-   Frequency
    -   Frequency Name: **SMASun-SatO7**
    -   Frequency Details: (When to Schedule) **All Weeks**, (Day of the
        Week) **Every Day**, (Day Type) **Any**
    -   Job Build Status: **Released**
    -   Remaining fields: Default Values
-   Job Dependency
    -   Type: **After**
    -   Job: **Job History Archive**
-   Job Dependency
    -   Type: **Conflict**
    -   Job: **SMA Database Transaction Log Backup**

### Report File Cleanup

The default configuration of the Report File Cleanup job deletes all
files in the \<Output Directory\>\\SAM\\Log\\Reports\\ folder that are
older than 10 days. The job is configured to run every day, but it has a
Job Build Status of \"Do Not Schedule\". If any of these settings are
not best for the environment, modify the settings based on the
documentation for the SMADirectory utility. For information on the
command-line syntax, refer to
[SMADirectory](https://help.smatechnologies.com/opcon/core/latest/Utilities/Command-line-Utilities/SMADirectory.md){.MCXref
.xref} in the **Utilities** online help.

 

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Output Directory was configured during installation. For more information, refer to [File Locations](File-Locations.md) in this online help.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Job Details and Automation Information

-   Job Details
    -   Command Line:\
        **\"\[\[SMAOpConPath\]\]\\MSLSAM\\SMADirectory.exe\" -d         \[\[SMAOpConOutputPath\]\]\\SAM\\Log\\Reports -c 10D -e ALL -B**
    -   Working Directory:\
        **\"\[\[SMAOpConPath\]\]\\MSLSAM\"** -   Frequency
    -   Frequency Name: **SMASun-SatO7**
    -   Frequency Details: (When to Schedule) **All Weeks**, (Day of the
        Week) **Every Day**, (Day Type) **Any**
    -   Job Build Status: **Do Not Schedule**
    -   Remaining fields: Default Values

### RSJBackup_Prune

The default configuration of the RSJBackup_Prune job places all reports
older than 7 days in a backup tar file and deletes all backup tar files
older than 30 days on SYM000. The job is configured to run with a
GID/UID of 0/0 and has a frequency for every day. The Job Build Status
is set to \"Do Not Schedule\" because it is intended only for
OpCon customers who run Episys and RSJ. The
job will not build or run until it is set to build \"On Hold\" or in a
\"Released\" status. Additionally, this job should be configured to run
before or after GOODNIGHT then a copy of the job should be set up for
all SYMS running RSJ.

 

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [This job is set to run at 15 minutes after Midnight. Do not run this job with a Midnight start time as it is possible the job could run a little bit before midnight and will error because it has already run for that day.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Job Details and Automation Information

-   Job Details
    -   Start Image:\
        **/ops/bin/backup_and_prune SYM000 7 30**
-   Frequency
    -   Frequency Name: **SMASun-SatO7**
    -   Frequency Details: (When to Schedule) **All Weeks**, (Day of the
        Week) **Every Day**,(Day Type) **Any**
    -   Start Offset: **00:15** (Absolute)
    -   Job Build Status: **Do Not Schedule**
    -   Remaining fields: Default Values

### SMA Database Backup

[SMA Technologies]{.GeneralCompanyName} provides an embedded SQL script for automating the SMA Database Backup job which uses SQL authentication
and is configured to run every day after the SMA Database Maintenance,
but it has a Job Build Status of \"Do Not Schedule.\" To activate this
job, change the Job Build Status to [On Hold]{.skd-job-statuses} or [Released]{.skd-job-statuses}.

#### Job Details and Automation Information

-   Job Details
    -   Job Action:\
        **Embedded Script**
    -   Script:\
        **SMADB_Backup**
    -   Runner:\
        **SQLScript**
    -   Run Command Template:\
        **sqlcmd -i \$FILE \$ ARGUMENTS**
    -   Arguments:\
        **-S\[\[DB_SERVER_NAME\]\] -U\[\[SqlMaintUser\]\]         -P\[\[SqlMaintPassword\]\] -h -1 -b**
    -   Environment Variables:
-   Frequency
    -   Frequency Name: **SMASun-SatO7**
    -   Frequency Details: (When to Schedule) **All Weeks**, (Day of the
        Week) **Every Day**, (Day Type) **Any**
    -   Job Build Status: **Do Not Schedule**
    -   Remaining fields: Default Values
-   Job Dependency
    -   Type: **After**
    -   Job: **SMA Database Maintenance**

### SMA Database Maintenance

[SMA Technologies]{.GeneralCompanyName} provides an embedded SQL script for automating the SMA Database Maintenance job which uses SQL
authentication and has a Job Build Status of \"Do Not Schedule.\" To
activate this job, change the Job Build Status to [On Hold]{.skd-job-statuses} or [Released]{.skd-job-statuses}.

#### Job Details and Automation Information

-   Job Details
    -   Job Action:\
        **Embedded Script**
    -   Script:\
        **SMADB_DBCCMaint**
    -   Runner:\
        **SQLScript**
    -   Run Command Template:\
        **sqlcmd -i \$FILE \$ ARGUMENTS**
    -   Arguments:\
        **-S\[\[DB_SERVER_NAME\]\] -U\[\[SqlMaintUser\]\]         -P\[\[SqlMaintPassword\]\] -h -1 -b**
    -   Environment Variables:
-   Frequency
    -   Frequency Name: **SMASun-SatO7**
    -   Frequency Details: (When to Schedule) **All Weeks**, (Day of the
        Week) **Every Day**, (Day Type) **Any**
    -   Job Build Status: **Do Not Schedule**
    -   Remaining fields: Default Values

### SMA Database Transaction Log Backup

[SMA Technologies]{.GeneralCompanyName} provides an embedded SQL script for automating the SMA Database Transaction Log Backup job which uses
SQL authentication and is configured to run every day after the SMA
Database Backup and recur every two hours; however, it has a Job Build
Status of \"Do Not Schedule\". To activate this job, change the Job
Build Status to [On Hold]{.skd-job-statuses} or [Released]{.skd-job-statuses}.

#### Job Details and Automation Information

-   Job Details
    -   Job Action:\
        **Embedded Script**
    -   Script:\
        **SMADB_TLog_Backup**
    -   Runner:\
        **SQLScript**
    -   Run Command Template:\
        **sqlcmd -i \$FILE \$ ARGUMENTS**
    -   Arguments:\
        **-S\[\[DB_SERVER_NAME\]\] -U\[\[SqlMaintUser\]\]         -P\[\[SqlMaintPassword\]\] -h -1 -b**
    -   Environment Variables:
-   Frequency
    -   Frequency Name: **SMASun-SatO7**
    -   Frequency Details: (When to Schedule) **All Weeks**, (Day of the
        Week) **Every Day**, (Day Type) **Any**
    -   Job Build Status: **Do Not Schedule**
    -   When Job Finishes OK: **Run Again** (marked)
    -   Minutes from Start to Start: **120**
    -   Number of Runs (marked): **12**
    -   Remaining fields: Default Values
-   Job Dependency
    -   Type: **After**
    -   Job: **SMA Database Backup**
-   Job Dependency
    -   Type: **Conflict**
    -   Job: **Audit History Purge**
-   Job Dependency
    -   Type: **Conflict**
    -   Job: **Job History Archive**
-   Job Dependency
    -   Type: **Conflict**
    -   Job: **Job History Purge**

### SMA Index Defragmentation (SMA DBCC Index Defrag)

[SMA Technologies]{.GeneralCompanyName} provides an embedded SQL script for automating the SMA Index Defragmentation job which uses SQL
authentication and is configured to run every Sunday at 01:00 after SMA
Job Average.

#### Job Details and Automation Information

-   Job Details
    -   Job Action:\
        **Embedded Script**
    -   Script:\
        **SMA_IndexDefragmentation or SMA_DBCCIndexDefrag**
    -   Runner:\
        **SQLScript**
    -   Run Command Template:\
        **sqlcmd -i \$FILE \$ ARGUMENTS**
    -   Arguments:\
        **-S\[\[DB_SERVER_NAME\]\] -U\[\[SqlMaintUser\]\]         -P\[\[SqlMaintPassword\]\] -b**
    -   Environment Variables:
-   Frequency
    -   Frequency Name: **SMAEverySun**
    -   Frequency Details: (When to Schedule) **All Weeks**, (Day of the
        Week) **Sunday**, (Day Type) **Any**.
    -   Job Build Status: **Released**
    -   Start Offset: **01:00**
    -   Remaining fields: Default Values
-   Job Dependency
    -   Type: **After**
    -   Job: **SMA Job Average**

### SMA Job Average

The SMA Job Average job is included in the SMAUtility schedule to
automate running the SMA_JOBAVG stored procedure. Refer to
[SMA_JOBAVG](https://help.smatechnologies.com/opcon/core/latest/Database-Information/OpCon-Data-Maintenance.md#SMA_JOBA){.MCXref
.xref} in the **Database Information** online help. Automation of this
stored procedure is required to provide more accurate data for
reporting, and for the Gantt chart and the Plan display. The SMA Job
Average job is configured to run every day after the Audit History Purge
job. If desired, edit the command file to specify any optional switches.

 

  ---------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [You should disable this job if you chose to have SAM calculate Job Averages. For more information, refer to [SAM Calculates Job Averages](General.md#SAM_Calculates_Job_Averages). To disable the job, simply set the Job Build Status to Disable Frequency.]
  ---------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Job Details and Automation Information

-   Job Details
    -   Command Line:\
        **sqlmcd -S\[\[DB_SERVER_NAME\]\] -U\[\[SqlMaintUser\]\]         -P\[\[SqlMAintPassword\]\]
        -Q\"exec\[\[DatabaseName\]\].dbo.SMA_JOBAVG\"** -   Frequency
    -   Frequency Name: **SMASun-SatO7**
    -   Frequency Details: (When to Schedule) **All Weeks**, (Day of the
        Week) **Every Day**, (Day Type) **Any**
    -   Job Build Status: **Released**
    -   Remaining fields: Default Values
-   Job Dependency
    -   Type: **After**
    -   Job: **Audit History Purge**

### Utility Folder Log Cleanup

The default configuration of the Utility Folder Log Cleanup job deletes
log files in the \<Output Directory\\OpConxps\\Utilities\\ folder that
are older than 10 days. The job is configured to run every day. If the
settings are not best for the environment, modify the settings based on
the documentation for the SMADirectory utility. For information on the
command-line syntax, refer to
[SMADirectory](https://help.smatechnologies.com/opcon/core/latest/Utilities/Command-line-Utilities/SMADirectory.md){.MCXref
.xref} in the **Utilities** online help.

 

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Output Directory was configured during installation. For more information, refer to [File Locations](File-Locations.md) in this online help.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Job Details and Automation Information

-   Job Details
    -   Command Line:\
        **\"\[\[SMAOpConPath\]\]\\MSLSAM\\SMADirectory.exe\" -d         \[\[SMAOpConOutputPath\]\]\\Utilities -e .log -c 10D -B**
    -   Working Directory:\
        **\"\[\[SMAOpConPath\]\]\\MSLSAM\"** -   Frequency
    -   Frequency Name: **SMASun-SatO7**
    -   Frequency Details: (When to Schedule) **All Weeks**, (Day of the
        Week) **Every Day**, (Day Type) **Any**
    -   Job Build Status: **Released**
    -   Remaining fields: **Default Values**
:::

 

