---
lang: en-us
title: SMA Data Collector
viewport: width=device-width, initial-scale=1.0
---

# SMA Data Collector

To aid [SMA Technologies]{.GeneralCompanyName} support with analyzing problems on a client system, the SMA Data Collector utility gathers
debug information regarding OpCon. Following data collection, compress
(i.e., zip) the Data Collector files and email the compressed file to
SMA for further analysis.

 

To open the Data Collector utility, use menu path:
**[]{#aanchor322}Start \> All Programs \> OpConxps \> Utilities \> SMA Data Collector**. With database and login information from the SMA
Connection Configuration Utility program, the Data Collector
automatically logs in to the OpCon database. After the utility is open,
fill out the user and support information.

## User and Support Information

This section discusses the fields and/or options in the SMA Data
Collector for providing the user and support information.

### Contact Information

-   **Company Name**: Enter the company name recognized by [SMA     Technologies]{.GeneralCompanyName}.
-   **Contact**: Enter the full name of the primary contact person
    involved with the issue.
-   **Phone Number**: Enter the phone number for the contact person. If
    necessary, enter the contact person\'s phone extension.

### Date and Time Details

-   **Incident Start Date**: Enter or select the date on which the
    problem occurred.
-   **Start Time**: Enter the estimated time the problem began.
-   **Incident End Date**: Enter or select the date the problem ended.
-   **End Time**: Enter the estimated time the problem ended.
-   **SMA Case \#**: If the problem is associated with an existing
    support issue with [SMA Technologies]{.GeneralCompanyName}, specify     the case number if known in the format SMA - XXXXXXXX where the X\'s
    represent an 8-digit number. Leave the field blank if unknown.

### Schedule Details

-   **Schedule Date**: Select the schedule date on which the problem
    occurred, or select \<blank\> if the problem is unrelated to any
    specific schedule date.
-   **Schedule Name**: If the problem was related to a specific
    schedule, select the schedule name from the list box; otherwise,
    leave this field blank.
-   **Job Name(s)**: If the problem was related to a specific job(s),
    select the job name from the list box; otherwise, leave this field
    blank. To select multiple job names, click additional job names with
    the CTRL key.

### Additional Information

Paste and/or enter detailed information about the problem in this text
box.

### Reproduce Problem

-   **Can this be Reproduced?**: Select Yes or No from the list box.
-   **Occurred after System Reboot?**: Select Yes or No from the list
    box.

### Buttons

-   **Default**: Click this button to reset all fields.
-   **Collect Data**: Click this button to start the data collection
    process.
-   **Cancel**: Click this button to cancel the data collection process.

## Collected Information

The SMA Data Collector creates a Log directory under the \<Output
Directory\>\\Utilities\\ folder. It then creates the Event Log,
OpCon/xps Log, and System Data folders.

 

  -------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Output Directory was configured during installation. For more information, refer to [File Locations](../../Concepts/File-Locations.md) in the **Concepts** online help.]
  -------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

These next subsections discuss the information that is collected and
placed into the logs.

### Event Log

The program detects the location of Windows event logs on the client
machine and copies the Application, System, and Security event logs to
this folder.

### OpConxps_Log

The tool finds all OpCon/xps logs (SAM, SMANetCom, SMANetComTrace, SMA
Notify Handler, SMAServMan, and Critical) for the incident date and
copies the log files to the OpCon/xps Log folder.

### System Data

This folder contains several files after data collection, all of which
are discussed next.

#### Dr. Watson Log File

The utility finds and copies the Dr. Watson log files.

#### MiniDump File

The utility finds and copies the MiniDump file.

#### Hosts and Services File

The utility copies the Hosts and Services files from the \<Windows
Directory\>\\System32\\Drivers\\Etc\\ directory.

#### Netstat.txt

The utility performs a \"NetStat -- a\" command on the client machine
and saves the results to the Netstat.txt file in the
C:\\ProgamData\\OpConxps\\Utilities\\Log\\System Data\\ folder.

#### SQLDiag.txt

The utility starts the SQLDiagInfo program and saves diagnostic output
to the SQLDiag.txt file in the
C:\\ProgamData\\OpConxps\\Utilities\\Log\\System Data\\SQL\\SQLDiag\\
folder.

#### ODBC_Data.txt

The Data Collector performs the following actions to create the
ODBC_Data.txt file in the
C:\\ProgamData\\OpConxps\\Utilities\\Log\\System Data\\ folder:

-   Reads all OpCon/xps DSN information such as DSN name, database, and
    so forth from the registry. The utility decrypts the data (except
    the password) and writes it into this file.
-   Logs all ODBC driver information such as Server name, DBMS version,
    ODBC version, SQL driver version, and so forth.
-   Lists all defined configuration Options from the Administration
    function.
-   Lists all schedules that are \"In Process\" in the database.
-   Logs the ODBC tracing information such as On/Off, Trace DLL, Logfile
    name and location.
-   Performs a SQL \"Select count (\*) from History\" query against the
    database and records the results.
-   If a Schedule Name is selected, the Data Collector queries the
    SMASTER and SNAME tables in the database for the Schedule\'s
    details.
-   If a Job Name is selected, the Data Collector queries the SMASTER
    and SMASTER_AUX tables in the database for the job\'s details.
-   Records the details of the OpCon DSN such as last user, driver,
    server, and so forth.
-   Queries the MACHS and MACHS_AUX tables in the database for all
    machines\' details.

#### System_Summary.txt

The Data Collector also gathers the following system information:

-   Contact and common support information
-   System Information
    -   Operating System Version
    -   Host Name
    -   Locale
    -   Time Zone
    -   Total and available Physical memory
    -   Total and available Virtual memory
    -   Total and available Page File
    -   Memory Load
    -   Page Size
    -   Number of processors
    -   Processor type, level, revision, and speed
-   Versions of SAM, SMANetCom, and MSLSAM
-   Disk space information for the OpCon/xps drive, SQL Server Drive,
    and System root
-   OpCon/xps services details
    -   DisplayName
    -   ImagePath
    -   Running As
    -   Startup type
-   Details about current processes running on the machine

### SMA Data Collector Log Files

The Data Collector also creates logs to trace its own system calls and
ODBC calls. The files are SMADataCollector.log, DebugFile.log,
ODBCDebugFile.log, and TicketDebugFile.log.

## Zipping and Emailing Data to SMA Support

If desired, the tool can automatically generate an email message after
data collection. Follow the message\'s instructions and send to [SMA Technologies]{.GeneralCompanyName} support. If a mail client is
unavailable (e.g., web mail is in use), zip all files in the \<Output
Directory\>\\OpConxps\\Utilities\\Log\\ directory and email to
[support\@smatechnologies.com](mailto:support@smatechnologies.com?subject=SMA-Data-Collector-Zip-File)
with the subject line \"SMA Data Collector Zip File\".

 

  -------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Output Directory was configured during installation. For more information, refer to [File Locations](../../Concepts/File-Locations.md) in the **Concepts** online help.]
  -------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** The following       | | circular                         | example shows an automatically   |
| background](../../../Reso        | generated Data Collector email   |
| urces/Images/example-icon(48x48) | message:                         |
| .png "Example icon") |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | Company Name: Business\          |
|                                  | Contact: Robby Krieger\          |
|                                  | Phone Number: 777-777-7777 Ext.  |
|                                  | 12\                              |
|                                  | Incident Date: 9/02/2008 03:28   |
|                                  | AM - 9/05/08 11:28 PM\           |
|                                  | SMA Ticket \#:\                  |
|                                  | Schedule Date: 09/02/08\         |
|                                  | Schedule Name: Maintenance\      |
|                                  | Job Name (s): Job1 Job2\         |
|                                  | Can this be Reproduced?: No\     |
|                                  | Occurred after System Reboot?:   |
|                                  | Yes                              |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | Additional Comments:             |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | \*\*\*\*\*\*\*\*\*\*             |
|                                  | \*\*\*\*\*\*\*\*\*\*\*Additional |
|                                  | Instructions\*\*\*               |
|                                  | \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* |
|                                  |                                  |
|                                  | 1\) Please describe the detailed |
|                                  | steps to reproduce the incident. |
|                                  |                                  |
|                                  | 2\) WinZip all the files in the  |
|                                  | Utilities\\Log directory.        |
|                                  |                                  |
|                                  | 3\) Attach the zip file to this  |
|                                  | email and send.                  |
+----------------------------------+----------------------------------+
:::

 

