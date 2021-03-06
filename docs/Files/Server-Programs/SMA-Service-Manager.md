---
lang: en-us
title: SMA Service Manager (SMAServMan)
viewport: width=device-width, initial-scale=1.0
---

# SMA Service Manager (SMAServMan)

SMAServMan is responsible for managing the application group of the
SAM-SS. Responsibilities include application startup, shutdown, and
failover. In failover scenarios, two SMAServMans communicate with each
other and coordinate the smooth transition from the primary to the
secondary machine (and from the primary to secondary database depending
on configuration).

SMA Service Manager

![SMA Service Manager](../../Resources/Images/Server-Programs/servmanconfig.png "SMA Service Manager"){.dropshadow}

## Configuration

SMAServMan configuration determines basic service settings, logging
behavior, the application group, and the actions taken when an
application or machine fails. The SMAServMan.ini file resides in the
\<Configuration Directory\>\\SAM\\ folder. The table contains the
definitions of each configuration parameter. If a value of \"Yes\" is in
the Dynamic column, any changes take effect immediately upon saving the
file. All other configuration settings require the service to be
restarted before the change takes effect.

 

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [ The Configuration Directory location is based on where you installed your programs. For more information, refer to [File Locations](../Concepts/File-Locations.md) in the **Concepts** online help.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### SMAServMan.ini

All settings in the configuration file apply to the machine on which the
file resides. The SMAServMan.ini file contains the following major
sections:

-   [General Settings](#General)
-   [Failover Settings](#Primary)
-   [Debug Options](#Debug)
-   [Application List](#Applicat)
-   [Individual sections for each application in the Application     List](#Applicat2)

#### General Settings

General Settings contain basic information for the service registration
to the Windows operating system.

+----------------+----------------+---------------+----------------+
| General        | Default        | Dynamic (Y/N) | Description    |
| Settings       |                |               |                |
+================+================+===============+================+
| Sh             | SMA_Servman    | N             | -   Defines    |
| ortServiceName |                |               |     the        |
|                |                |               |     internal   |
|                |                |               |     name of    |
|                |                |               |     the        |
|                |                |               |     service    |
|                |                |               |     stored in  |
|                |                |               |     the        |
|                |                |               |     registry.  |
|                |                |               | -   The name   |
|                |                |               |     must be    |
|                |                |               |     unique.    |
+----------------+----------------+---------------+----------------+
| Disp           | SMA Service    | N             | Defines the    |
| layServiceName | Manager        |               | service name   |
|                |                |               | shown in the   |
|                |                |               | Services       |
|                |                |               | Applet.        |
+----------------+----------------+---------------+----------------+
| Mode           | StandAlone     | N             | -   Determines |
|                |                |               |     the        |
|                |                |               |                |
|                |                |               |  SMAServMan\'s |
|                |                |               |     role in    |
|                |                |               |     the        |
|                |                |               |     failover   |
|                |                |               |     process.   |
|                |                |               | -   Valid      |
|                |                |               |     values are |
|                |                |               |     Primary,   |
|                |                |               |     Secondary, |
|                |                |               |     or         |
|                |                |               |                |
|                |                |               |    StandAlone. |
|                |                |               | -   StandAlone |
|                |                |               |     indicates  |
|                |                |               |     SMAServMan |
|                |                |               |     is not     |
|                |                |               |     configured |
|                |                |               |     for        |
|                |                |               |     failover.  |
|                |                |               | -   Primary    |
|                |                |               |     indicates  |
|                |                |               |     SMAServMan |
|                |                |               |     is         |
|                |                |               |     configured |
|                |                |               |     for        |
|                |                |               |     failover   |
|                |                |               |     and        |
|                |                |               |     controls   |
|                |                |               |     the        |
|                |                |               |     primary    |
|                |                |               |                |
|                |                |               |    application |
|                |                |               |     group.     |
|                |                |               | -   Secondary  |
|                |                |               |     indicates  |
|                |                |               |     SMAServMan |
|                |                |               |     is         |
|                |                |               |     configured |
|                |                |               |     for        |
|                |                |               |     failover   |
|                |                |               |     and        |
|                |                |               |     controls   |
|                |                |               |     the        |
|                |                |               |     secondary  |
|                |                |               |                |
|                |                |               |    application |
|                |                |               |     group.     |
+----------------+----------------+---------------+----------------+
| Initia         | \<Blank\>      | Y             | Provides the   |
| lizationScript |                |               | path and       |
|                |                |               | filename of    |
|                |                |               | the script     |
|                |                |               | SMAServMan     |
|                |                |               | executes upon  |
|                |                |               | startup.       |
+----------------+----------------+---------------+----------------+
| Ter            | \<Blank\>      | Y             | Provides the   |
| minationScript |                |               | path and       |
|                |                |               | filename of    |
|                |                |               | the script     |
|                |                |               | SMAServMan     |
|                |                |               | executes upon  |
|                |                |               | shutdown.      |
+----------------+----------------+---------------+----------------+

: SMAServMan Configuration: General Settings

#### Primary Mode Settings

If necessary, Primary Mode Settings determine the SMAServMan\'s behavior
as manager of the [primary]{.ul} application group. 
+-------------------+-----------+---------------+-------------------+
| Primary Mode      | Default   | Dynamic (Y/N) | Description       |
| Settings          |           |               |                   |
+===================+===========+===============+===================+
| Fai               | \<Blank\> | N             | -   Defines the   |
| lOverSocketNumber |           |               |     socket number |
|                   |           |               |     for           |
|                   |           |               |     communication |
|                   |           |               |     between the   |
|                   |           |               |     primary and   |
|                   |           |               |     secondary     |
|                   |           |               |     services.     |
|                   |           |               | -   This          |
|                   |           |               |     parameter     |
|                   |           |               |     must be the   |
|                   |           |               |     same in the   |
|                   |           |               |     primary and   |
|                   |           |               |     secondary     |
|                   |           |               |     configuration |
|                   |           |               |     files.        |
+-------------------+-----------+---------------+-------------------+
| TimeOu            | 60        | N             | -   Determines    |
| tInSecondsForSync |           |               |     the maximum   |
|                   |           |               |     allowable     |
|                   |           |               |     time for      |
|                   |           |               |                   |
|                   |           |               |   synchronization |
|                   |           |               |     with an       |
|                   |           |               |     SMAServMan on |
|                   |           |               |     another       |
|                   |           |               |     machine.      |
|                   |           |               | -   This          |
|                   |           |               |     parameter     |
|                   |           |               |     does not      |
|                   |           |               |     apply to a    |
|                   |           |               |     StandAlone    |
|                   |           |               |     machine.      |
+-------------------+-----------+---------------+-------------------+
| Sync              | \<Blank\> | Y             | Provides the path |
| InitFailureScript |           |               | and filename of   |
|                   |           |               | the script        |
|                   |           |               | SMAServMan        |
|                   |           |               | executes if the   |
|                   |           |               | initial           |
|                   |           |               | synchronization   |
|                   |           |               | with the          |
|                   |           |               | Secondary         |
|                   |           |               | SMAServMan fails  |
|                   |           |               | after the         |
|                   |           |               | allowable time    |
|                   |           |               | specified by the  |
|                   |           |               | TimeOu            |
|                   |           |               | tInSecondsForSync |
|                   |           |               | configuration     |
|                   |           |               | parameter.        |
+-------------------+-----------+---------------+-------------------+
| SyncLostScript    | \<Blank\> | Y             | Provides the path |
|                   |           |               | and filename of   |
|                   |           |               | the script        |
|                   |           |               | SMAServMan        |
|                   |           |               | executes if the   |
|                   |           |               | Secondary         |
|                   |           |               | SMAServMan fails  |
|                   |           |               | to contact the    |
|                   |           |               | Primary           |
|                   |           |               | SMAServMan        |
|                   |           |               | [after]{.ul}      | |                   |           |               | initial           |
|                   |           |               | synchronization   |
|                   |           |               | is successful.    |
+-------------------+-----------+---------------+-------------------+
| Nor               | \<Blank\> | Y             | Provides the path |
| malShutdownScript |           |               | and filename of   |
|                   |           |               | the script        |
|                   |           |               | SMAServMan        |
|                   |           |               | executes when it  |
|                   |           |               | is shutdown in an |
|                   |           |               | orderly manner.   |
|                   |           |               | Examples of a     |
|                   |           |               | normal shutdown   |
|                   |           |               | are stopping      |
|                   |           |               | SMAServMan by way |
|                   |           |               | of the Service    |
|                   |           |               | Control Manager   |
|                   |           |               | or the NET STOP   |
|                   |           |               | command.          |
+-------------------+-----------+---------------+-------------------+
| Abnor             | \<Blank\> | Y             | Provides the path |
| malShutdownScript |           |               | and filename of   |
|                   |           |               | the script        |
|                   |           |               | SMAServMan        |
|                   |           |               | executes when     |
|                   |           |               | there is a        |
|                   |           |               | critical failure  |
|                   |           |               | in the Primary    |
|                   |           |               | application group |
|                   |           |               | or the SMAServMan |
|                   |           |               | has an            |
|                   |           |               | unrecoverable     |
|                   |           |               | error.            |
+-------------------+-----------+---------------+-------------------+

: SMAServMan Configuration: Primary Mode Settings

 

If necessary, Secondary Mode Settings determine the SMAServMan\'s
behavior as manager of the [secondary]{.ul} application group. 
+-------------------+-----------+---------------+-------------------+
| Secondary Mode    | Default   | Dynamic (Y/N) | Description       |
| Settings          |           |               |                   |
+===================+===========+===============+===================+
| Fai               | \<Blank\> | N             | -   Defines the   |
| lOverSocketNumber |           |               |     socket number |
|                   |           |               |     for           |
|                   |           |               |     communication |
|                   |           |               |     between the   |
|                   |           |               |     primary and   |
|                   |           |               |     secondary     |
|                   |           |               |     SMAServMans.  |
|                   |           |               | -   This          |
|                   |           |               |     parameter     |
|                   |           |               |     must be the   |
|                   |           |               |     same in the   |
|                   |           |               |     primary and   |
|                   |           |               |     secondary     |
|                   |           |               |     configuration |
|                   |           |               |     files.        |
+-------------------+-----------+---------------+-------------------+
| PrimaryMachine    | \<Blank\> | N             | -   Provides the  |
|                   |           |               |     machine name  |
|                   |           |               |     or the TCP/IP |
|                   |           |               |     address of    |
|                   |           |               |     the primary   |
|                   |           |               |     machine.      |
|                   |           |               | -   This          |
|                   |           |               |     parameter     |
|                   |           |               |     only applies  |
|                   |           |               |     to the        |
|                   |           |               |                   |
|                   |           |               |  [secondary]{.ul} | |                   |           |               |     machine.      |
+-------------------+-----------+---------------+-------------------+
| []{#Secon         | 15        | N             | -   Determines    | | dsBetweenPings}Se |           |               |     the frequency |
| condsBetweenPings |           |               |     of pings from |
|                   |           |               |     the secondary |
|                   |           |               |     to the        |
|                   |           |               |     primary       |
|                   |           |               |     machine.      |
|                   |           |               | -   This          |
|                   |           |               |     parameter     |
|                   |           |               |     does not      |
|                   |           |               |     apply to a    |
|                   |           |               |     StandAlone    |
|                   |           |               |     machine.      |
+-------------------+-----------+---------------+-------------------+
| PingRetryCount    | 0         | N             | -   Determines    |
|                   |           |               |     the number of |
|                   |           |               |     consecutive   |
|                   |           |               |     ping          |
|                   |           |               |     \"failures\"  |
|                   |           |               |     before        |
|                   |           |               |     initiating    |
|                   |           |               |     failover.     |
|                   |           |               | -   This          |
|                   |           |               |     parameter     |
|                   |           |               |     does not      |
|                   |           |               |     apply to a    |
|                   |           |               |     StandAlone    |
|                   |           |               |     machine.      |
+-------------------+-----------+---------------+-------------------+
| PingTime          | 1000      | N             | -   Determines    |
| OutInMilliseconds |           |               |     the number of |
|                   |           |               |     milliseconds  |
|                   |           |               |     in the        |
|                   |           |               |     timeout       |
|                   |           |               |     period.       |
|                   |           |               | -   If there is   |
|                   |           |               |     no response   |
|                   |           |               |     to the ping   |
|                   |           |               |     within the    |
|                   |           |               |     timeout       |
|                   |           |               |     period,       |
|                   |           |               |     SMAServMan    |
|                   |           |               |     increments    |
|                   |           |               |     the           |
|                   |           |               |                   |
|                   |           |               |   PingRetryCount. |
|                   |           |               |     If the        |
|                   |           |               |                   |
|                   |           |               |    PingRetryCount |
|                   |           |               |     reaches the   |
|                   |           |               |     maximum,      |
|                   |           |               |     SMAServMan    |
|                   |           |               |     behaves       |
|                   |           |               |     according to  |
|                   |           |               |     the           |
|                   |           |               |     [SyncLostFa   | |                   |           |               | ilover](#SyncLost |
|                   |           |               | Failover){.MCXref |
|                   |           |               |     .xref}        |
|                   |           |               |     setting.      |
|                   |           |               | -   This          |
|                   |           |               |     parameter     |
|                   |           |               |     does not      |
|                   |           |               |     apply to a    |
|                   |           |               |     StandAlone    |
|                   |           |               |     machine.      |
+-------------------+-----------+---------------+-------------------+
| Sync              | \<Blank\> | Y             | Provides the path |
| InitFailureScript |           |               | and filename of   |
|                   |           |               | the script        |
|                   |           |               | SMAServMan        |
|                   |           |               | executes if the   |
|                   |           |               | initial           |
|                   |           |               | synchronization   |
|                   |           |               | with the Primary  |
|                   |           |               | SMAServMan fails  |
|                   |           |               | after the         |
|                   |           |               | allowable time    |
|                   |           |               | specified by the  |
|                   |           |               | [SecondsBetweenPi | |                   |           |               | ngs](#SecondsBetw |
|                   |           |               | eenPings){.MCXref |
|                   |           |               | .xref}            |
|                   |           |               | configuration     |
|                   |           |               | parameter.        |
+-------------------+-----------+---------------+-------------------+
| []{#PrimaryN      | N         | N             | -   Determines if | | ormalShutdownFail |           |               |     the Secondary |
| over}PrimaryNorma |           |               |     SMAServMan    |
| lShutdownFailover |           |               |     starts the    |
|                   |           |               |     secondary     |
|                   |           |               |     application   |
|                   |           |               |     group when    |
|                   |           |               |     the Primary   |
|                   |           |               |     SMAServMan    |
|                   |           |               |     shuts down    |
|                   |           |               |     normally.     |
|                   |           |               |     Examples of a |
|                   |           |               |     normal        |
|                   |           |               |     shutdown are  |
|                   |           |               |     stopping      |
|                   |           |               |     SMAServMan by |
|                   |           |               |     way of the    |
|                   |           |               |     Service       |
|                   |           |               |     Control       |
|                   |           |               |     Manager or    |
|                   |           |               |     the NET STOP  |
|                   |           |               |     command.      |
|                   |           |               | -   If N, the     |
|                   |           |               |     Secondary     |
|                   |           |               |     SMAServMan    |
|                   |           |               |     does          |
|                   |           |               |     [not]{.ul}    | |                   |           |               |     start the     |
|                   |           |               |     secondary     |
|                   |           |               |     application   |
|                   |           |               |     group.        |
|                   |           |               | -   If Y, the     |
|                   |           |               |     Secondary     |
|                   |           |               |     SMAServMan    |
|                   |           |               |     [will]{.ul}   | |                   |           |               |     start the     |
|                   |           |               |     secondary     |
|                   |           |               |     application   |
|                   |           |               |     group that    |
|                   |           |               |     begins        |
|                   |           |               |     processing    |
|                   |           |               |     with the      |
|                   |           |               |     OpCon         |
|                   |           |               |     database.     |
+-------------------+-----------+---------------+-------------------+
| []{#Prim          | \<Blank\> | Y             | Provides the path | | aryNormalShutdown |           |               | and filename of   |
| Script}PrimaryNor |           |               | the script        |
| malShutdownScript |           |               | SMAServMan        |
|                   |           |               | executes when the |
|                   |           |               | Primary           |
|                   |           |               | SMAServMan is     |
|                   |           |               | shutdown          |
|                   |           |               | normally.         |
|                   |           |               | Examples of a     |
|                   |           |               | normal shutdown   |
|                   |           |               | are stopping      |
|                   |           |               | SMAServMan by way |
|                   |           |               | of the Service    |
|                   |           |               | Control Manager   |
|                   |           |               | or the NET STOP   |
|                   |           |               | command.          |
+-------------------+-----------+---------------+-------------------+
| []{#PrimaryAbnorm | N         | N             | -   Determines if | | alShutdownFailove |           |               |     the Secondary |
| r}PrimaryAbnormal |           |               |     SMAServMan    |
| ShutdownFailover\ |           |               |     starts the    |
|                   |           |               |     secondary     |
|                   |           |               |     application   |
|                   |           |               |     group when    |
|                   |           |               |     the Primary   |
|                   |           |               |     SMAServMan    |
|                   |           |               |     shuts down    |
|                   |           |               |     abnormally    |
|                   |           |               |     (i.e., with a |
|                   |           |               |     critical      |
|                   |           |               |     failure in    |
|                   |           |               |     the primary   |
|                   |           |               |     application   |
|                   |           |               |     group or the  |
|                   |           |               |     Primary       |
|                   |           |               |     SMAServMan    |
|                   |           |               |     has an        |
|                   |           |               |     unrecoverable |
|                   |           |               |     error).       |
|                   |           |               | -   If N, the     |
|                   |           |               |     Secondary     |
|                   |           |               |     SMAServMan    |
|                   |           |               |     will          |
|                   |           |               |     [not]{.ul}    | |                   |           |               |     start the     |
|                   |           |               |     secondary     |
|                   |           |               |     application   |
|                   |           |               |     group.        |
|                   |           |               | -   If Y, the     |
|                   |           |               |     Secondary     |
|                   |           |               |     SMAServMan    |
|                   |           |               |     [will]{.ul}   | |                   |           |               |     start the     |
|                   |           |               |     secondary     |
|                   |           |               |     application   |
|                   |           |               |     group that    |
|                   |           |               |     begins        |
|                   |           |               |     processing    |
|                   |           |               |     with the      |
|                   |           |               |     OpCon         |
|                   |           |               |     database.     |
+-------------------+-----------+---------------+-------------------+
| []{#PrimaryA      | \<Blank\> | Y             | Provides the path | | bnormalShutdownSc |           |               | and filename of   |
| ript}PrimaryAbnor |           |               | the script        |
| malShutdownScript |           |               | SMAServMan        |
|                   |           |               | executes when the |
|                   |           |               | Primary           |
|                   |           |               | SMAServMan is     |
|                   |           |               | shutdown          |
|                   |           |               | abnormally.       |
|                   |           |               | Examples of an    |
|                   |           |               | abnormal shutdown |
|                   |           |               | are a critical    |
|                   |           |               | failure in the    |
|                   |           |               | primary           |
|                   |           |               | application group |
|                   |           |               | or when the       |
|                   |           |               | Primary           |
|                   |           |               | SMAServMan has an |
|                   |           |               | unrecoverable     |
|                   |           |               | error.            |
|                   |           |               |                   |
|                   |           |               |                   |
|                   |           |               |                   |
|                   |           |               | **Note:** [SMA    | |                   |           |               | Technologies]{.Ge |
|                   |           |               | neralCompanyName} |
|                   |           |               | provides a script |
|                   |           |               | called            |
|                   |           |               | StopRepl.cmd for  |
|                   |           |               | customers using   |
|                   |           |               | database. For     |
|                   |           |               | information on    |
|                   |           |               | configuring this  |
|                   |           |               | script, refer to  |
|                   |           |               | [Modifying the    | |                   |           |               | Stop Replication  |
|                   |           |               | Command           |
|                   |           |               | File              |
|                   |           |               | ](../Database-I |
|                   |           |               | nformation/Manual |
|                   |           |               | -Setup-for- |
|                   |           |               | Microsoft-SQL%2 |
|                   |           |               | 0Replication.md# |
|                   |           |               | Modifyin){.MCXref |
|                   |           |               | .xref} in the     |
|                   |           |               | **Database        |
|                   |           |               | Information**     |
|                   |           |               | online help. [SMA | |                   |           |               | Technologies]{.Ge |
|                   |           |               | neralCompanyName} |
|                   |           |               | strongly          |
|                   |           |               | recommends        |
|                   |           |               | defining the      |
|                   |           |               | StopRepl.cmd file |
|                   |           |               | for the           |
|                   |           |               | PrimaryAbnorm     |
|                   |           |               | alShutdownScript. |
+-------------------+-----------+---------------+-------------------+
| []{               | N         | N             | -   Determines if | | #SyncLostFailover |           |               |     the Secondary |
| }SyncLostFailover |           |               |     SMAServMan    |
|                   |           |               |     starts the    |
|                   |           |               |     secondary     |
|                   |           |               |     application   |
|                   |           |               |     group when it |
|                   |           |               |     loses         |
|                   |           |               |                   |
|                   |           |               |   synchronization |
|                   |           |               |     with the      |
|                   |           |               |     Primary       |
|                   |           |               |     SMAServMan.   |
|                   |           |               | -   If N, the     |
|                   |           |               |     Secondary     |
|                   |           |               |     SMAServMan    |
|                   |           |               |     will          |
|                   |           |               |     [not]{.ul}    | |                   |           |               |     start the     |
|                   |           |               |     secondary     |
|                   |           |               |     application   |
|                   |           |               |     group.        |
|                   |           |               | -   If Y, the     |
|                   |           |               |     Secondary     |
|                   |           |               |     SMAServMan    |
|                   |           |               |     [will]{.ul}   | |                   |           |               |     start the     |
|                   |           |               |     secondary     |
|                   |           |               |     application   |
|                   |           |               |     group that    |
|                   |           |               |     begins        |
|                   |           |               |     processing    |
|                   |           |               |     with the      |
|                   |           |               |     OpCon         |
|                   |           |               |     database.     |
+-------------------+-----------+---------------+-------------------+
| []{#SyncLostScri  | \<Blank\> | Y             | Provides the path | | pt}SyncLostScript |           |               | and filename of   |
|                   |           |               | the script        |
|                   |           |               | SMAServMan        |
|                   |           |               | executes when it  |
|                   |           |               | loses             |
|                   |           |               | communication     |
|                   |           |               | with the Primary  |
|                   |           |               | SMAServMan.       |
|                   |           |               | Examples of       |
|                   |           |               | communication     |
|                   |           |               | loss are network  |
|                   |           |               | connection        |
|                   |           |               | failure or        |
|                   |           |               | Primary machine   |
|                   |           |               | crash.            |
+-------------------+-----------+---------------+-------------------+
| ShutdownScript    | \<Blank\> | Y             | Provides the path |
|                   |           |               | and filename of   |
|                   |           |               | the script        |
|                   |           |               | SMAServMan        |
|                   |           |               | executes when it  |
|                   |           |               | is shutdown in an |
|                   |           |               | orderly manner.   |
|                   |           |               | Examples of a     |
|                   |           |               | normal shutdown   |
|                   |           |               | are stopping      |
|                   |           |               | SMAServMan by way |
|                   |           |               | of the Service    |
|                   |           |               | Control Manager   |
|                   |           |               | or the NET STOP   |
|                   |           |               | command.          |
+-------------------+-----------+---------------+-------------------+
| Abnor             | \<Blank\> | Y             | -   Provides the  |
| malShutdownScript |           |               |     path and      |
|                   |           |               |     filename of   |
|                   |           |               |     the script    |
|                   |           |               |     SMAServMan    |
|                   |           |               |     executes.     |
|                   |           |               | -   This script   |
|                   |           |               |     executes in   |
|                   |           |               |     the following |
|                   |           |               |     situations:   |
|                   |           |               |     -   When      |
|                   |           |               |         there is  |
|                   |           |               |         a         |
|                   |           |               |         critical  |
|                   |           |               |         failure   |
|                   |           |               |         in the    |
|                   |           |               |         secondary |
|                   |           |               |                   |
|                   |           |               |       application |
|                   |           |               |         group.    |
|                   |           |               |     -   When the  |
|                   |           |               |         Secondary |
|                   |           |               |                   |
|                   |           |               |        SMAServMan |
|                   |           |               |         has an    |
|                   |           |               |                   |
|                   |           |               |     unrecoverable |
|                   |           |               |         error.    |
+-------------------+-----------+---------------+-------------------+

: SMAServMan Configuration: Secondary Mode Settings

#### Debug Options

The Debug Options configure the SMAServMan logging behavior.

+--------------------+---------+---------------+--------------------+
| Debug Options      | Default | Dynamic (Y/N) | Description        |
+====================+=========+===============+====================+
| ArchiveDaysToKeep  | 100     | Y             | -   Determines the |
|                    |         |               |     number of days |
|                    |         |               |     of history     |
|                    |         |               |     (i.e., archive |
|                    |         |               |     folders) to    |
|                    |         |               |     keep.          |
|                    |         |               | -   Includes       |
|                    |         |               |     automatic      |
|                    |         |               |     cleanup to     |
|                    |         |               |     free disk      |
|                    |         |               |     space.         |
|                    |         |               |                    |
|                    |         |               | **Caution:** This  |
|                    |         |               | number must be     |
|                    |         |               | greater than the   |
|                    |         |               | \"Maximum number   |
|                    |         |               | of days archived   |
|                    |         |               | SAM logs should be |
|                    |         |               | kept\" logging     |
|                    |         |               | setting in the     |
|                    |         |               | Global Options.    |
|                    |         |               | For additional     |
|                    |         |               | information, refer |
|                    |         |               | to                 |
|                    |         |               | [Loggi             | |                    |         |               | ng](../Concepts/Lo |
|                    |         |               | gging.md){.MCXref |
|                    |         |               | .xref} in the      |
|                    |         |               | **Concepts**       |
|                    |         |               | online help.       |
+--------------------+---------+---------------+--------------------+
| MaximumLogFileSize | 15000   | Y             | -   Defines the    |
|                    |         |               |     maximum size   |
|                    |         |               |     in bytes for   |
|                    |         |               |     each log file. |
|                    |         |               | -   Determines     |
|                    |         |               |     when the       |
|                    |         |               |     current log    |
|                    |         |               |     file is closed |
|                    |         |               |     and a new file |
|                    |         |               |     is started.    |
|                    |         |               |     When the file  |
|                    |         |               |     reaches this   |
|                    |         |               |     maximum size,  |
|                    |         |               |     it is \"rolled |
|                    |         |               |     over.\"        |
|                    |         |               | -   This setting   |
|                    |         |               |     creates small, |
|                    |         |               |     manageable log |
|                    |         |               |     files.         |
|                    |         |               | -   SMAServMan.log |
|                    |         |               |     resides in the |
|                    |         |               |     \<Output       |
|                    |         |               |     Dir            |
|                    |         |               | ectory\>\\SAM\\Log |
|                    |         |               |     directory.     |
|                    |         |               | -   When the log   |
|                    |         |               |     file reaches   |
|                    |         |               |     the maximum    |
|                    |         |               |     size,          |
|                    |         |               |     SMAServMan     |
|                    |         |               |     archives the   |
|                    |         |               |     log file. The  |
|                    |         |               |     SAM then       |
|                    |         |               |     maintains the  |
|                    |         |               |     archive        |
|                    |         |               |     folders.       |
+--------------------+---------+---------------+--------------------+
| Trace              | OFF     | Y             | -                  |
|                    |         |               |   Enables/Disables |
|                    |         |               |     the SMAServMan |
|                    |         |               |     to write more  |
|                    |         |               |     messages to    |
|                    |         |               |     the SMAServMan |
|                    |         |               |     log file.      |
|                    |         |               | -   If OFF,        |
|                    |         |               |     SMAServMan     |
|                    |         |               |     logs normally. |
|                    |         |               | -   If ON, logging |
|                    |         |               |     for SMAServMan |
|                    |         |               |     is in greater  |
|                    |         |               |     detail.        |
|                    |         |               |                    |
|                    |         |               | **Note:** This     |
|                    |         |               | setting aids [SMA  | |                    |         |               | Technologies]{.G   |
|                    |         |               | eneralCompanyName} |
|                    |         |               | with               |
|                    |         |               | troubleshooting.   |
+--------------------+---------+---------------+--------------------+

: SMAServMan Configuration: Debug Options

#### Application List

The Application List contains the name of each application managed by
the SMAServMan.

+----------------+----------------+---------------+----------------+
| Application    | Default        | Dynamic (Y/N) | Description    |
| List           |                |               |                |
+================+================+===============+================+
| Application1   | SAM            | N             | -   Lists an   |
|                |                |               |                |
|                |                |               |    application |
|                |                |               |     to be      |
|                |                |               |     managed by |
|                |                |               |                |
|                |                |               |    SMAServMan. |
|                |                |               | -   SMAServMan |
|                |                |               |     [          | |                |                |               | requires]{.ul} |
|                |                |               |     SAM in the |
|                |                |               |                |
|                |                |               |    Application |
|                |                |               |     List.      |
+----------------+----------------+---------------+----------------+
| Application2   | SMANetCom      | N             | -   Lists an   |
|                |                |               |                |
|                |                |               |    application |
|                |                |               |     to be      |
|                |                |               |     managed by |
|                |                |               |                |
|                |                |               |    SMAServMan. |
|                |                |               | -   SMAServMan |
|                |                |               |     [          | |                |                |               | requires]{.ul} |
|                |                |               |     SMANetCom  |
|                |                |               |     in the     |
|                |                |               |                |
|                |                |               |    Application |
|                |                |               |     List.      |
+----------------+----------------+---------------+----------------+
| Application3   | SM             | N             | Lists an       |
|                | ANotifyHandler |               | application to |
|                |                |               | be managed by  |
|                |                |               | SMAServMan.    |
+----------------+----------------+---------------+----------------+
| Application4   | SM             | N             | Lists an       |
|                | ARequestRouter |               | application to |
|                |                |               | be managed by  |
|                |                |               | SMAServMan.    |
+----------------+----------------+---------------+----------------+
| Application5   | SMAStart       | N             | Lists an       |
|                | TimeCalculator |               | application to |
|                |                |               | be managed by  |
|                |                |               | SMAServMan.    |
+----------------+----------------+---------------+----------------+
| Application9   | SMALDAPMon     | N             | Lists an       |
|                |                |               | application to |
|                |                |               | be managed by  |
|                |                |               | SMAServMan.    |
+----------------+----------------+---------------+----------------+
| Application10  | None           | N             | For [SMA       | | -Application50 |                |               | Techno         |
|                |                |               | logies]{.Gener |
|                |                |               | alCompanyName} |
|                |                |               | use only.      |
+----------------+----------------+---------------+----------------+
| Application51+ | None           | N             | Available for  |
|                |                |               | user           |
|                |                |               | customization. |
|                |                |               |                |
|                |                |               | The maximum    |
|                |                |               | number of      |
|                |                |               | applications   |
|                |                |               | is 100.        |
+----------------+----------------+---------------+----------------+

: SMAServMan Configuration: Application List Settings

#### Application Parameters

For each application in the Application List, there is a major heading
in the configuration file. Each heading contains a list of parameters
for that application.

+-------------------------+---------------+-------------------------+
| Parameter               | Dynamic (Y/N) | Description             |
+=========================+===============+=========================+
| ApplicationPath         | N             | This is the full path   |
|                         |               | name to the executable. |
+-------------------------+---------------+-------------------------+
| StartInDirectory        | N             | This setting determines |
|                         |               | the current directory   |
|                         |               | where the application   |
|                         |               | is started.             |
+-------------------------+---------------+-------------------------+
| CommandLineArguments    | N             | Defines the arguments   |
|                         |               | in the application\'s   |
|                         |               | command line.           |
+-------------------------+---------------+-------------------------+
| InitialTimeOutInSeconds | Y             | -   Process startup     |
|                         |               |     typically takes     |
|                         |               |     longer than the     |
|                         |               |     \"main\" loop of    |
|                         |               |     the process.        |
|                         |               | -   If the application  |
|                         |               |     has not made the    |
|                         |               |     [initial]{.ul} call | |                         |               |     to SMAServMan       |
|                         |               |     within this time    |
|                         |               |     limit, it is        |
|                         |               |     considered to be    |
|                         |               |     \"hung\" or \"in    |
|                         |               |     error\" and is      |
|                         |               |     terminated.         |
|                         |               | -   If the application  |
|                         |               |     has a heavy         |
|                         |               |     processing load,    |
|                         |               |     consider extending  |
|                         |               |     this timeout to     |
|                         |               |     prevent unnecessary |
|                         |               |     termination of the  |
|                         |               |     application.        |
+-------------------------+---------------+-------------------------+
| Appl                    | Y             | -   If the application  |
| icationTimeOutInSeconds |               |     has not called the  |
|                         |               |     DLL function in     |
|                         |               |     this number of      |
|                         |               |     seconds since the   |
|                         |               |     last call, it is    |
|                         |               |     considered to be    |
|                         |               |     \"hung\" or \"in    |
|                         |               |     error\" and is      |
|                         |               |     terminated.         |
|                         |               | -   If the application  |
|                         |               |     has a heavy         |
|                         |               |     processing load,    |
|                         |               |     consider extending  |
|                         |               |     this timeout to     |
|                         |               |     prevent unnecessary |
|                         |               |     termination of the  |
|                         |               |     application.        |
+-------------------------+---------------+-------------------------+
| DependsOnApplication    | Y             | If the application      |
|                         |               | specified in this       |
|                         |               | parameter fails and     |
|                         |               | cannot be restarted,    |
|                         |               | the dependent           |
|                         |               | application is          |
|                         |               | terminated.             |
+-------------------------+---------------+-------------------------+
| RestartApplicationLimit | Y             | -   If this parameter   |
|                         |               |     is zero, no attempt |
|                         |               |     is made to restart  |
|                         |               |     a \"hung\"          |
|                         |               |     application.        |
|                         |               | -   The application     |
|                         |               |     restart is only     |
|                         |               |     attempted until the |
|                         |               |     internal restart    |
|                         |               |     count exceeds this  |
|                         |               |     limit.              |
|                         |               | -   It may be possible  |
|                         |               |     that the            |
|                         |               |     application simply  |
|                         |               |     cannot come back up |
|                         |               |     without human       |
|                         |               |     intervention.       |
|                         |               | -   Once the            |
|                         |               |     application has     |
|                         |               |     come up and         |
|                         |               |     communicated with   |
|                         |               |     SMAServMan, the     |
|                         |               |     internal restart    |
|                         |               |     count is set back   |
|                         |               |     to 0 because the    |
|                         |               |     restart was         |
|                         |               |     successful.         |
+-------------------------+---------------+-------------------------+
| Second                  | Y             | This is the number of   |
| sBetweenRestartAttempts |               | seconds to wait after a |
|                         |               | failed restart attempt  |
|                         |               | before making another   |
|                         |               | restart attempt.        |
+-------------------------+---------------+-------------------------+
| ApplicationHungScript   | Y             | If SMAServMan           |
|                         |               | terminated the          |
|                         |               | application after       |
|                         |               | determining that the    |
|                         |               | application was         |
|                         |               | \"hung,\" this optional |
|                         |               | user-defined script is  |
|                         |               | run (e.g., command file |
|                         |               | to pass an event to the |
|                         |               | SMA Notify Handler).    |
+-------------------------+---------------+-------------------------+
| RestartFailedScript     | Y             | If SMAServMan was       |
|                         |               | unable to restart the   |
|                         |               | application, this       |
|                         |               | optional user-defined   |
|                         |               | script is run.          |
+-------------------------+---------------+-------------------------+
| AutoRestartInMinutes    | Y             | If this parameter is    |
|                         |               | greater than zero, the  |
|                         |               | application is shut     |
|                         |               | down and restarted in   |
|                         |               | this number of minutes. |
+-------------------------+---------------+-------------------------+
| SecondsBet              | Y             | If the application is   |
| weenAutoRestartAttempts |               | to be restarted, this   |
|                         |               | parameter dictates how  |
|                         |               | many seconds to wait    |
|                         |               | from the time the       |
|                         |               | application was shut    |
|                         |               | down to attempting its  |
|                         |               | start up.               |
+-------------------------+---------------+-------------------------+
| CriticalApplication     | Y             | -   If the application  |
|                         |               |     cannot be restarted |
|                         |               |     and this parameter  |
|                         |               |     is TRUE, [all]{.ul} | |                         |               |     applications are    |
|                         |               |     shutdown and the    |
|                         |               |     service is stopped. |
|                         |               | -   If the application  |
|                         |               |     cannot be restarted |
|                         |               |     and this parameter  |
|                         |               |     is FALSE,           |
|                         |               |     SMAServMan does     |
|                         |               |     [not]{.ul} shut     | |                         |               |     down any other      |
|                         |               |     applications and    |
|                         |               |     continues           |
|                         |               |     monitoring.         |
|                         |               | -   The                 |
|                         |               |     CriticalApplication |
|                         |               |     setting for the SAM |
|                         |               |     and SMANetCom must  |
|                         |               |     be TRUE.            |
|                         |               | -   If this is the      |
|                         |               |     Primary machine,    |
|                         |               |     failover occurs.    |
+-------------------------+---------------+-------------------------+

: SMAServMan Configuration: Application Parameter Settings

+----------------------+----------------------+----------------------+
| Parameter            | Application          | Application Default  |
+======================+======================+:====================:+
| ApplicationPath      | SAM                  | \"\"\<Target         |
|                      |                      | Director             |
|                      |                      | y\>\\OpConxps\\SAM\\ |
|                      |                      |                      |
|                      |                      | Sam.exe\"Dir         |
|                      |                      | ectory\>\\OpConxps\\ |
|                      |                      |                      |
|                      |                      | SAM\\Sam.exe\"\"     |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | \"\"\<Target         |
|                      |                      | Directory            |
|                      |                      | \>\\OpConxps\\SAM\\\ |
|                      |                      | SMANetCom.exe\"\"    |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | \"\"\<Target         |
|                      |                      | Directory\>\\O       |
|                      |                      | pConxps\\SAM\\ENS\\\ |
|                      |                      | SMAN                 |
|                      |                      | otifyHandler.exe\"\" |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter     | \"\"\<Target         |
|                      |                      | Directory            |
|                      |                      | \>\\OpConxps\\SAM\\\ |
|                      |                      | SMAR                 |
|                      |                      | equestRouter.exe\"\" |
+----------------------+----------------------+----------------------+
|                      | SM                   | \"\"\<Target         |
|                      | AStartTimeCalculator | Directory            |
|                      |                      | \>\\OpConxps\\SAM\\\ |
|                      |                      | SMAStartTi           |
|                      |                      | meCalculator.exe\"\" |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | \"\"\<Target         |
|                      |                      | Directory            |
|                      |                      | \>\\OpConxps\\SAM\\\ |
|                      |                      | SMALDAPMon.exe\"\"   |
+----------------------+----------------------+----------------------+
| StartInDirectory     | SAM                  | \<Target             |
|                      |                      | Director             |
|                      |                      | y\>\\OpConxps\\SAM\\ |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | \<Target             |
|                      |                      | Director             |
|                      |                      | y\>\\OpConxps\\SAM\\ |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | \<Target             |
|                      |                      | Directory\>\\        |
|                      |                      | OpConxps\\SAM\\ENS\\ |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter     | \<Target             |
|                      |                      | Director             |
|                      |                      | y\>\\OpConxps\\SAM\\ |
+----------------------+----------------------+----------------------+
|                      | SM                   | \<Target             |
|                      | AStartTimeCalculator | Director             |
|                      |                      | y\>\\OpConxps\\SAM\\ |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | \<Target             |
|                      |                      | Director             |
|                      |                      | y\>\\OpConxps\\SAM\\ |
+----------------------+----------------------+----------------------+
| CommandLineArguments | SAM                  | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter     | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | SM                   | \<Blank\>            |
|                      | AStartTimeCalculator |                      |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | \<Blank\>            |
+----------------------+----------------------+----------------------+
| Ini                  | SAM                  | 60                   |
| tialTimeOutInSeconds |                      |                      |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | 60                   |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | 60                   |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter     | 60                   |
+----------------------+----------------------+----------------------+
|                      | SM                   | 60                   |
|                      | AStartTimeCalculator |                      |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | 60                   |
+----------------------+----------------------+----------------------+
| Applica              | SAM                  | 90                   |
| tionTimeOutInSeconds |                      |                      |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | 90                   |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | 300                  |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter     | 90                   |
+----------------------+----------------------+----------------------+
|                      | StartTimeCalculator  | 300                  |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | 90                   |
+----------------------+----------------------+----------------------+
| DependsOnApplication | SAM                  | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter     | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | StartTimeCalculator  | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | \<Blank\>            |
+----------------------+----------------------+----------------------+
| Res                  | SAM                  | 3                    |
| tartApplicationLimit |                      |                      |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | 3                    |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | 3                    |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter     | 3                    |
+----------------------+----------------------+----------------------+
|                      | SM                   | 3                    |
|                      | AStartTimeCalculator |                      |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | 3                    |
+----------------------+----------------------+----------------------+
| SecondsBe            | SAM                  | 10                   |
| tweenRestartAttempts |                      |                      |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | 10                   |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | 10                   |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter\    | 10                   |
+----------------------+----------------------+----------------------+
|                      | SMA                  | 10                   |
|                      | StartTimeCalculator\ |                      |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | 10                   |
+----------------------+----------------------+----------------------+
| A                    | SAM                  | SAMHung.cmd          |
| pplicationHungScript |                      |                      |
|                      |                      |                      |
| (for additional      |                      |                      |
| information, refer   |                      |                      |
| to [Application Hung |                      |                      | | Scripts]             |                      |                      |
| (#Applicat3){.MCXref |                      |                      |
| .xref})              |                      |                      |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | SMANetComHung.cmd    |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | SMAN                 |
|                      |                      | otifyHandlerHung.cmd |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter\    | SMAR                 |
|                      |                      | equestRouterHung.cmd |
+----------------------+----------------------+----------------------+
|                      | SMA                  | SMAStartTi           |
|                      | StartTimeCalculator\ | meCalculatorHung.cmd |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | SMALDAPMonHung.cmd   |
+----------------------+----------------------+----------------------+
| RestartFailedScript  | SAM                  | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter     | \<Blank\>            |
+----------------------+----------------------+----------------------+
|                      | SM                   | \<Blank\>            |
|                      | AStartTimeCalculator |                      |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | \<Blank\>            |
+----------------------+----------------------+----------------------+
| AutoRestartInMinutes | SAM                  | 0                    |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | 0                    |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | 0                    |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter     | 0                    |
+----------------------+----------------------+----------------------+
|                      | SM                   | 0                    |
|                      | AStartTimeCalculator |                      |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | 0                    |
+----------------------+----------------------+----------------------+
| SecondsBetwee        | SAM                  | 0                    |
| nAutoRestartAttempts |                      |                      |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | 0                    |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | 0                    |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter     | 0                    |
+----------------------+----------------------+----------------------+
|                      | SM                   | 0                    |
|                      | AStartTimeCalculator |                      |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | 0                    |
+----------------------+----------------------+----------------------+
| CriticalApplication  | SAM                  | TRUE                 |
+----------------------+----------------------+----------------------+
|                      | SMANetCom            | TRUE                 |
+----------------------+----------------------+----------------------+
|                      | SMANotifyHandler     | TRUE                 |
+----------------------+----------------------+----------------------+
|                      | SMARequestRouter     | TRUE                 |
+----------------------+----------------------+----------------------+
|                      | SM                   | FALSE                |
|                      | AStartTimeCalculator |                      |
+----------------------+----------------------+----------------------+
|                      | SMALDAPMon           | FALSE                |
+----------------------+----------------------+----------------------+

: SMAServMan Configuration: Application Parameter Setting Defaults

### Application Hung Scripts

[SMA Technologies]{.GeneralCompanyName} supplies command files for default application hung scripts. These scripts must be configured for
proper execution in the event one of the applications hangs. The scrips
are installed to the \<Configuration Directory\>\\SAM folder. By
default, the SMAServMan.ini file contains the path to the SQL
Authentication script names.

 

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [ The Configuration Directory location is based on where you installed your programs. For more information, refer to [File Locations](../Concepts/File-Locations.md) in the **Concepts** online help.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

The following list contains the names of the Application Hung Scripts:

  SQL Authentication Script Names   Windows Authentication Script Names
  --------------------------------- ----------------------------------------
  SAMHung.cmd                       SAMHung_WinAuth.cmd
  SMANetComHung.cmd                 SMANetComHung_WinAuth.cmd
  SMANotifyHandlerHung.cmd          SMANotifyHandlerHung_WinAuth.cmd
  SMARequestRouterHung.cmd          SMARequestRouterHung_WinAuth.cmd
  SMAStartTimeCalculatorHung.cmd    SMAStartTimeCalculatorHung_WinAuth.cmd

  : Application Hung Script Command File Names

 

Each of the Application Hung Scripts calls their own respective
supplemental script (e.g., SAMHung.cmd calls SAM.cmd) to execute
database queries relevant to the \"hung\" application, and output the
results to a text file for troubleshooting. The following list contains
the names for the supplemental scripts:

  SQL Authentication Script Names   Windows Authentication Script Names
  --------------------------------- -------------------------------------
  SAM.cmd                           SAM_WinAuth.cmd
  SMANetCom.cmd                     SMANetCom_WinAuth.cmd
  SMANotifyHandler.cmd              SMANotifyHandler_WinAuth.cmd
  SMARequestRouter.cmd              SMARequestRouter_WinAuth.cmd
  SMAStartTimeCalculator.cmd        SMAStartTimeCalculator_WinAuth.cmd

  : Supplemental Application Hung Script Command File Names

#### Hung Script Configuration

For each of the Application Hung Scripts and supplemental scripts,
complete the following procedures to configure each file:

 

[Configure a Hung Script]{.ul} 
1.  Log in as a *local administrative user*.
2.  Right-click on **Start** and select **Explore**.
3.  Go to the **Folders** frame.
4.  Browse to the \<Configuration Directory\>**\\SAM\\** directory.
5.  Right-click on the desired **hung command file** (e.g., SAMHung.cmd)
    and select **Edit**.
6.  Search for **\<insert SMTP server name here\>** and replace that
    text with the *SMTP server name*.
7.  Search for **\<insert email recipient here\>** and replace that text
    with the *recipient email address*.
8.  Search for **\<insert domain name here\>** and replace that text
    with the *email domain name*.
9.  Search for **\<insert drive letter\>** and replace that text with
    the *drive letter containing the SAM installation*. Also, ensure
    that the path to the SAM folder is correct.
10. Click **File \> Save** in the menu bar.
11. Repeat [Steps 6 - 10]{.ul} for each hung command file.

[Configure a Supplemental Hung Script]{.ul} 
1.  Log in as a *local administrative user*.
2.  Right-click on **Start** and select **Explore**.
3.  Go to the **Folders** frame.
4.  Browse to the \<Configuration Directory\>**\\SAM\\** directory.
5.  Right-click on the desired **supplemental hung command file** (e.g.,
    SAMHung.cmd) and select **Edit**.
6.  Search for [all occurrences]{.ul} of **\<DB server name\>** and     replace that text with the *OpCon database server name*.
7.  Search for *all occurrences* of **\<path to output file\>** and
    replace that text with the *path to the desired location for output
    files from the SQL commands*.
8.  Search for [all occurrences]{.ul} of **\<DSN\>** and replace that     text with the *DSN to the OpCon database*.
9.  If editing a SQL Authentication command file, search for [all     occurrences]{.ul} of **\<sa password\>** and replace that text with
    the *OpCon database sa password*.
10. Click **File \> Save** in the menu bar.
11. Repeat [Steps 6 - 10]{.ul} for each supplemental hung command file.

## Operating the SMA Service Manager

To control the SMA Service Manager status, use the Windows Service
Control Manager. The procedures below explain the process of starting
and stopping the SMAServMan.

 

[Start the SMA Service Manager]{.ul} 
After properly configuring the SMA Service Manager, complete the
following steps to start the service:

Use menu path: **Start \> Control Panel**.

In the Control Panel window:

Double-click the **Administrative Tools** icon.

In the Administrative Tools window:

Double-click the **Services** icon.

In the Services window:

Scroll down to the **SMA OpCon Service Manager** service.

Change the *SMAServMan\'s* **Startup Type** to **Automatic (Delayed
Start)** using the following steps:

a.  Double-click on **SMA OpCon Service Manager**.
b.  Select **Automatic (Delayed Start)** in the **Startup type**
    drop-down list and click **OK**.

In the Services List:

Click on **SMA OpCon Service Manager** then click **Start**.

View the SMAServMan, SAM, Critical, SMANetCom, and SMANetComTrace logs
to verify that the SAM and SMANetCom connected successfully to the
database. Use menu path: **Start \> Programs \> OpConxps \> Log Monitors
\>** *Log File Name*.

Stop the SMA Service Manager

If necessary, complete the following steps to stop the SMA Service
Manager:

1.  Use menu path: **Start \> Control Panel**.
2.  Double-click the **Administrative Tools** icon.
3.  Double-click the **Services** icon.
4.  Scroll down to the **SMA OpCon Service Manager** service.
5.  Click on **SMA OpCon Service Manager** and click **Stop**.
:::

 

