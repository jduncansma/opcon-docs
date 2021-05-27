---
lang: en-us
title: Getting Started
viewport: width=device-width, initial-scale=1.0
---

# Getting Started

[]{#aanchor614} Installation [must]{.ul} follow the information in this document for OpCon to function properly. Prior to installing OpCon,
verify that the computer meets the requirements listed in this chapter.
The initial database size is 200 MB, and the initial log file size is
1000 MB. After the initial size, the Database size will be based on
Schedules, Jobs, Auditing, and History information.

  --------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White \"X\" icon on red circular background](../../Resources/Images/warning-icon(48x48).png "Warning icon")   **WARNING:** [Do [not]{.ul} use the underscore character (\_) in the naming convention of the dedicated OpCon server name (e.g., myservername_2017). Usage of the underscore in the server name will directly affect OpCon license validation.]
  --------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

The following system requirements reflect the minimum necessary to run
OpCon:

-   [OpCon Server](#OpCon)
-   [Enterprise Manager (Client)](#Enterpri)

## OpCon Server

The requirements in this section are the [minimum]{.ul} requirements for hosting OpCon Server applications.

 

Please review all of the requirements in the following sections:

-   [Minimum Hardware for the OpCon Server](#Minimum)
    -   [Small Environment](#Small)
    -   [Medium Environment](#Medium)
    -   [Large Environment](#Large)
-   [Required Software on the OpCon Server](#Required2)
    -   [Operating System Requirements](#Operating_System_Requirements)
    -   [Framework Requirements](#Framework_Requirements)
    -   [SQL Server Administrative         Requirements](#SQL_Server_Administrative_Requirements)
-   [Required Software that can be Hosted on a Separate     Server](#Required3)
    -   [Database Requirements](#Database_Requirements2)

### Minimum Hardware for the OpCon Server

On the OpCon Server, ensure the following minimum hardware requirements
are met based on the size of your environment: [Small](#Small){.MCXref
.xref}, [Medium](#Medium), or [Large](#Large){.MCXref
.xref}.

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The number of concurrent jobs is defined as the typical number of jobs in a [Running]{.skd-job-statuses} status at any given time.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [Heavy usage of external events, AdHoc schedule build requests, or expression dependencies may require more hardware than the recommendations provided below.]
  ---------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [Maintaining in-process schedules across several days may require more hardware than the recommendations provided below.]
  ---------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------

#### Small

A small environment is defined as an environment with:

-   Less than 20,000 jobs per day **- and -**
-   Less than 50 concurrent running jobs

##### Hardware Requirements

Physical or virtual server-class machine with dual 64-bit processors

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [On a virtual machine, the [customer]{.ul} is responsible for performance of the underlying Physical Host. Customers must ensure that the minimum defined resources are available to the OpCon Virtual Server.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   Both processors must be 2GHz processor or better (A faster processor
    will translate to OpCon processing faster.)

Hard Drives must have:

-   RAID 10 configuration for hard drive failure protection and
    performance
-   10,000 RPM SATA or SAS hard drives
-   Minimum 100 GB usable space

Minimum 8 GB RAM (The greater the memory the more efficient processing
will be.)

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If the SQL Server is hosted on a separate machine, 4 GB of RAM is an acceptable minimum for the OpCon server.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [If the SAM and the SQL database are on different machines, then the Distributed Transaction Coordinator (MSDTC) service must either be running on both machines or not running on either machine. It does not matter if the service is running or not if both the SAM and SQL are on the same machine. Running on the one machine and not the other will cause performance issues and result in a very large SQL server error log.]
  ---------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   Dual power supplies (one for redundancy)
-   Dual Gigabit NICs (one for redundancy)

#### Medium

A medium environment is defined as an environment with:

-   40,000 jobs per day **- and -**
-   Less than 100 concurrent running jobs

##### Hardware Requirements

Physical or virtual server-class machine with dual 64-bit processors

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [On a virtual machine, the [customer]{.ul} is responsible for performance of the underlying Physical Host. Customers must ensure that the minimum defined resources are available to the OpCon Virtual Server.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   Both processors must be 2 GHz processor or better (A faster
    processor will translate to OpCon processing faster.)

Hard Drives must have:

-   RAID 10 configuration for hard drive failure protection and
    performance
-   15,000 RPM SATA or SAS hard drives
-   Minimum 175 GB usable space

Minimum 16 GB RAM (The greater the memory the more efficient processing
will be.)

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If the SQL Server is hosted on a separate machine, 8 GB of RAM is an acceptable minimum for the OpCon server.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [If the SAM and the SQL database are on different machines, then the Distributed Transaction Coordinator (MSDTC) service must either be running on both machines or not running on either machine. It does not matter if the service is running or not if both the SAM and SQL are on the same machine. Running on the one machine and not the other will cause performance issues and result in a very large SQL server error log.]
  ---------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Dual power supplies (one for redundancy)

Dual Gigabit NICs (one for redundancy)

#### Large

A large environment is defined as an environment with:

-   More than 40,000 jobs per day **- or -**
-   More than 100 concurrent running jobs

##### Hardware Requirements

Physical or virtual server-class machine with dual 64-bit processors

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [On a virtual machine, the [customer]{.ul} is responsible for performance of the underlying Physical Host. Customers must ensure that the minimum defined resources are available to the OpCon Virtual Server.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   Both processors must be 2 GHz processor or better (A faster
    processor will translate to OpCon processing faster.)

Hard Drives must have:

-   RAID 10 configuration for hard drive failure protection and
    performance
-   15,000 RPM SATA or SAS hard drives
-   Minimum 250 GB usable space

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [For large environment and in the case of using solid state disk drives, we would not recommend a RAID 10 configuration. Instead, we would recommend a RAID 5 configuration.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Minimum 32 GB RAM (The greater the memory the more efficient processing
will be.)

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [ If the SQL Server is hosted on a separate machine, 16 GB of RAM is an acceptable minimum for the OpCon server.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [If the SAM and the SQL database are on different machines, then the Distributed Transaction Coordinator (MSDTC) service must either be running on both machines or not running on either machine. It does not matter if the service is running or not if both the SAM and SQL are on the same machine. Running on the one machine and not the other will cause performance issues and result in a very large SQL server error log.]
  ---------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Dual power supplies (one for redundancy)

Dual Gigabit NICs (one for redundancy)

### Required Software on the OpCon Server

#### Operating System Requirements

-   Operating System (must be one of the following):
    -   Windows Server 2012 Full Install with the most recent Service
        Pack applied
        -   Standard or Enterprise Editions only
    -   Windows Server 2012 R2 Full Install with the most recent Service
        Pack applied
        -   Standard or Enterprise Editions only
    -   Windows Server 2016 Full Install with the most recent Service
        Pack applied
        -   Standard or Enterprise Editions only
    -   Windows Server 2019 Full Install with the most recent Service
        Pack applied
        -   Standard or Enterprise Editions only

#### SQL Server Administrative Requirements

-   If SQL server is installed on a separate machine, the Microsoft SQL
    Administrative Utilities compatible with the SQL server\'s version
    of MSSQL must be installed on the SAM server.

### Required Software that can be Hosted on a Separate Server

The software in this section can be hosted either on the OpCon server or
additional servers. If additional servers are used, please refer to the
hardware and operating system requirements for the OpCon server in the
previous section. If there are any concerns about the hardware
requirements, please contact [SMA Technologies]{.GeneralCompanyName}. 
#### Database Requirements

  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [All database versions should be maintained at the most current service pack available from Microsoft.]
  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [All editions of SQL Server are supported; however, [large environments must use Standard Edition or better]{.ul}.]
  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [For any edition of SQL Server, customers must set up both SQL Server and OpCon maintenance procedures and monitor the environment to ensure continuous processing.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

The database must be one of the following:

-   Microsoft SQL Server version 2012 with Service Pack 3
-   Microsoft SQL Server version 2014 with the most recent Service Pack
    applied
-   Microsoft SQL Server version 2016 with the most recent Service Pack
    applied
-   Microsoft SQL Server version 2017 with the most recent Service Pack
    applied
-   Microsoft SQL Server version 2019 with the most recent Service Pack
    applied

### Recommendations

The volume of jobs, OpCon events, and users active in the database
directly affects the amount of hardware required at a site. Depending on
the level of performance expected, customers should consider increased
processor and memory for the OpCon server. Disk space requirements also
depend on the number and size of log files, database backups, and
history that must be retained.

 

For best performance and easiest support, [SMA Technologies]{.GeneralCompanyName} recommends that a machine be
dedicated as the OpCon server. The Schedule Activity Monitor (SAM) and
supporting services, Enterprise Manager (EM), Database, and Windows LSAM
(MSLSAM) are all required components for the OpCon server.

  --------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White \"X\" icon on red circular background](../../Resources/Images/warning-icon(48x48).png "Warning icon")   **WARNING:** [Installing any additional applications on the OpCon server will directly affect the processing speed for the data center automation.]
  --------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White \"X\" icon on red circular background](../../Resources/Images/warning-icon(48x48).png "Warning icon")   **WARNING:** [If installing the SAM and supporting services (SAM-SS) on a machine with a Windows Regional locale setting other than English (US), please contact [SMA Technologies]{.GeneralCompanyName} before installation.]
  --------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [[SMA Technologies]{.GeneralCompanyName} does support the OpCon Server Components on virtual machines. However, even with equivalent hardware, virtual machines may not perform to the standards [SMA Technologies]{.GeneralCompanyName} expects for efficient processing of the OpCon database. If a customer chooses to implement the OpCon Server Components on a virtual environment and poor performance follows, the [SMA Technologies]{.GeneralCompanyName} Support team may require migration to a stand-alone machine for proper debugging.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Failover Machines

[SMA Technologies]{.GeneralCompanyName} strongly recommends installation and configuration of failover machines for the OpCon Server applications
and database. [Whether hosted together or separately, they represent mission critical applications and data]{.ul}. Separate identical
hardware should be set up and configured for failover. [SMA Technologies]{.GeneralCompanyName} recommends using transactional
replication or SQL Mirroring in addition to setting up database and
transaction log backups on the primary and secondary databases.

### Configure the Security Environment for SQL Server

OpCon can work with either mode of authentication supported by Microsoft
SQL Server. Before deciding on the authentication mode, consider the
following:

-   Windows Authentication mode: In Windows Authentication mode, only
    Windows User accounts with access to the SQL Server are allowed to
    connect to databases on the server. This means that any Windows User
    account that has privileges to the OpCon database can connect
    directly to the database through any program supporting SQL
    connectivity.
-   SQL Server and Windows Authentication mode: In SQL Server and
    Windows Authentication mode, either Windows user accounts with
    access to the SQL Server or SQL users can connect to databases on
    the server. The OpCon database installation scripts will detect the
    security mode and create the required SQL users for OpCon.
    -   [SMA Technologies]{.GeneralCompanyName} recommends using SQL         authentication to the OpCon database as this limits the number
        of users with direct authorization to SQL server. This helps to
        isolate the connections to the OpCon database to a reduced set
        of known database users. It is important to restrict knowledge
        of passwords for the OpCon SQL logins (opconsam and opconui) to
        authorized individuals only.

[[]{#Create_the_OpConxps_Active_Directory_Group}Create the OpConxps Active Directory Group]{.ul}

If using Windows Authentication to SQL or using the SMA LDAP Monitor for
OpCon logins, authorized users on the network must be granted access to
the OpCon database on the database server.

 

To create the Active Directory group, complete the procedure below.
After installing the OpCon database later in this document, another
procedure will describe how to grant privileges to the Active Directory
group in SQL Server if Windows Authentication to SQL is desired.

1.  Log in as a *domain administrator*.
2.  Use menu path: **Start \> Settings \> Control Panel**.
3.  Double-click **Administrative Tools**.
4.  Double-click **Active Directory Users and Computers**.
5.  Expand the **Active Directory Name** (e.g., CompanyName.local).
6.  Right-click **Users**.
7.  Use menu path: **New \> Group**.
8.  Enter a *descriptive name* (e.g., OpConxps) in the **First Name**
    field.
9.  Enter a *description* (e.g., Domain Group for SMA OpCon Users) in
    the **Full Name** field.
10. Enter the *same name as the First Name in Step 8* (e.g., OpConxps)
    in the **User Name** field.
11. Click **Next**.
12. Add the *proper windows users* to the new group.
13. Click **Next**.
14. Review the summary information for the user and click **Finish**.

### Confirm the SQL TCP/IP Port Number

If multiple versions of SQL Server have been installed on the SQL Server
machine, it is important to confirm that the SQL Native Client TCP/IP
Port number matches the SQL Server\'s TCP/IP Port number.

 

[Confirm the SQL Server Port Number]{.ul} 
To confirm the SQL Port number, complete the following procedure:

On the SQL Server machine hosting the OpCon database:

Log in as a *local administrative user*.

Use menu path: **Start \> All Programs \> Microsoft SQL Server \>
Configuration Tools \>\
SQL Server Configuration Manager**.

In the Microsoft SQL Server Configuration Manager window:

Expand **SQL Server Network Configuration**.

Click **Protocols for SQL Environment**.

Right-click **TCP/IP** in the **Protocol Name** column and select
**Properties** from the menu.

In the TCP/IP Properties window:

Click the **IP Addresses** tab.

In the IP Addresses tab:

Scroll to the bottom of the list to the **IPAll** section.

Write down the *value* for the **TCP Dynamic Ports** or **TCP Port**.
(Only one of these parameters should have a value.)

In the TCP/IP Properties window:

Click the **OK** button.

In the Microsoft SQL Server Configuration Manager window:

Expand **SQL Native Client Configuration**.

Click **Client Protocols**.

Right-click **TCP/IP** in the **Name** column and select **Properties**
from the menu.

In the TCP/IP Properties window:

Compare the value of the **Default Port** parameter to the value
recorded for the SQL Server TCP/IP port number identified in Step 8.

If the port numbers match, click the **Cancel** button.

If the port numbers [do not]{.ul} match: 
a.  In the **Default Port** value, change the number to match the SQL
    Server TCP/IP port number identified in Step 8.
b.  Click the **OK** button.

In the Microsoft SQL Server Configuration Manager window:

Close the **SQL Server Configuration Manager**.

## Enterprise Manager (Client)

-   Desktop-class machine with a 1 GHz processor or better. Supported
    processors are x64.
-   100 MB hard drive space
-   Minimum 512 MB RAM (1 GB+ recommended)
-   For a list of supported operating systems, refer to the **Operating
    Systems** table.

+----------------------------+----------------------------+----------+
| Operating System           | Version                    | Hardware |
+:==========================:+:==========================:+==========+
| **Windows**                | All mainstream supported   | 64-bit   |
|                            | Windows operating systems  |          |
|                            | from Microsoft as of the   |          |
|                            | publication of this        |          |
|                            | document. For more         |          |
|                            | information, refer to      |          |
|                            | <https://support.microsof  |          |
|                            | t.com/en-us/lifecycle/sear |          |
|                            | ch?alpha=windows-server> |          |
+----------------------------+----------------------------+----------+
| **Red Hat Enterprise       | 4.0 and 5.0                | 64-bit   |
| Linux**                    |                            |          |
+----------------------------+----------------------------+----------+
| **SUSE Linux Enterprise    | 11                         | 64-bit   |
| Server**                   |                            |          |
+----------------------------+----------------------------+----------+
| **Ubuntu**\                | 10.04                      | 64-bit   |
| **Long Term Support**      |                            |          |
+----------------------------+----------------------------+----------+

: Operating Systems

::: {mc-conditions="General.Exclude_from_PDF(One-off)"}
## Installation Media

Throughout this manual, the text \"*\<media\>*\" appears in many paths
to represent the OpCon distribution media. OpCon is available in the
following methods of delivery:

-   **FTP**:If downloading the files over FTP, the best practice is to
    download the installation files directly to a folder on the hard
    drive of the machine where the software will be installed. Run the
    installation from the hard drive.
-   **URL**: Download the OpCon Web Installer (OWI) directly from
    <https://github.com/smatechnologies/opcon-web-installer>.
:::

::: {mc-conditions="General.Exclude_from_PDF(One-off)"}
## Determining Installation Locations

OpCon programs and output files can be installed to separate custom
locations, providing the option to keep all files off of the system
drive.

-   [SMA Technologies]{.GeneralCompanyName} strongly recommends     including \\OpConxps or an OpCon-related name at the end of your
    path for programs and output file locations.
-   [SMA Technologies]{.GeneralCompanyName} also strongly recommends     that you use the same path for each program and output file location
    on the same machine (e.g., SAM, Database Scripts, Resource Monitor,
    etc.).
-   For the simplest final directory structures, [SMA     Technologies]{.GeneralCompanyName} recommends installing your
    software to a non-system drive (if available). This will keep all
    program, configuration, and output files in the same directory
    structure.
-   If installing to the system drive (e.g., C:\\), [SMA     Technologies]{.GeneralCompanyName} complies with Microsoft standards
    to store configuration files in ProgramData.
-   For more information, refer to [File     Locations](../Concepts/File-Locations.md) in the
    **Concepts** online help.
:::
:::

 

