---
lang: en-us
title: Notification Settings
viewport: width=device-width, initial-scale=1.0
---

#  Notification Settings

The Notification Settings category contains configuration options for
the SMA Notify Handler.

+-------------------+-----------+---------------+-------------------+
| Option Parameter  | Default   | Dynamic (Y/N) | Description       |
+===================+:=========:+:=============:+===================+
| M                 | 150000    | Y             | -   Defines the   |
| aximumLogFileSize |           |               |     maximum size  |
| (bytes)           |           |               |     in bytes for  |
|                   |           |               |     each log      |
|                   |           |               |     file.         |
|                   |           |               | -   Determines    |
|                   |           |               |     when the      |
|                   |           |               |     current log   |
|                   |           |               |     file is       |
|                   |           |               |     closed and a  |
|                   |           |               |     new file is   |
|                   |           |               |     started. When |
|                   |           |               |     the file      |
|                   |           |               |     reaches this  |
|                   |           |               |     maximum size, |
|                   |           |               |     it is         |
|                   |           |               |     \"rolled      |
|                   |           |               |     over.\"       |
|                   |           |               | -   This setting  |
|                   |           |               |     creates small |
|                   |           |               |     manageable    |
|                   |           |               |     log files.    |
|                   |           |               | -   SMA           |
|                   |           |               | NotifyHandler.log |
|                   |           |               |     resides in    |
|                   |           |               |     the \<Output  |
|                   |           |               |     Direct        |
|                   |           |               | ory\>\\SAM\\Log\\ |
|                   |           |               |     directory.    |
|                   |           |               |                   |
|                   |           |               | ```{=html}        |
|                   |           |               | <!-- -->          |
|                   |           |               | ```               |
|                   |           |               | -   When the log  |
|                   |           |               |     file reaches  |
|                   |           |               |     the maximum   |
|                   |           |               |     size, the SMA |
|                   |           |               |     Notify        |
|                   |           |               |     Handler       |
|                   |           |               |     archives the  |
|                   |           |               |     file. The SAM |
|                   |           |               |     then          |
|                   |           |               |     maintains the |
|                   |           |               |     archive       |
|                   |           |               |     folders.      |
|                   |           |               | -   Minimum Value |
|                   |           |               |     = 50000 bytes |
|                   |           |               | -   Maximum Value |
|                   |           |               |     = 500000      |
|                   |           |               |     bytes         |
+-------------------+-----------+---------------+-------------------+
| Trace Level       | None      | Y             | -   Determines    |
|                   |           |               |     the detail of |
|                   |           |               |     debug trace   |
|                   |           |               |     logs.         |
|                   |           |               | -   Valid         |
|                   |           |               |     Selections:   |
|                   |           |               |     -   None      |
|                   |           |               |     -   Basic     |
|                   |           |               |                   |
|                   |           |               |     (non-detailed |
|                   |           |               |         trace)    |
|                   |           |               |     -   Detailed  |
|                   |           |               |     -   Very      |
|                   |           |               |         Detailed  |
|                   |           |               |         (Traces   |
|                   |           |               |         all the   |
|                   |           |               |         possible  |
|                   |           |               |         debug     |
|                   |           |               |                   |
|                   |           |               |       information |
|                   |           |               |         in the    |
|                   |           |               |                   |
|                   |           |               |     application.) |
+-------------------+-----------+---------------+-------------------+
| Include Labels in | True      | Y             | -   This          |
| Notifications     |           |               |     parameter     |
|                   |           |               |                   |
|                   |           |               |  enables/disables |
|                   |           |               |     the inclusion |
|                   |           |               |     of labels for |
|                   |           |               |     Machine Name, |
|                   |           |               |     Schedule      |
|                   |           |               |     Name, Job     |
|                   |           |               |     Name, and so  |
|                   |           |               |     forth in      |
|                   |           |               |     notification  |
|                   |           |               |     messages.     |
|                   |           |               | -   By default,   |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler       |
|                   |           |               |     includes all  |
|                   |           |               |     labels to     |
|                   |           |               |     enhance the   |
|                   |           |               |     clarity of    |
|                   |           |               |     the           |
|                   |           |               |     information.  |
|                   |           |               | -   This setting  |
|                   |           |               |     applies to    |
|                   |           |               |     all           |
|                   |           |               |     notification  |
|                   |           |               |     types         |
|                   |           |               |     [except]{.ul} | |                   |           |               |     \"Text        |
|                   |           |               |     Message.\"    |
|                   |           |               | -   Valid values  |
|                   |           |               |     are True and  |
|                   |           |               |     False.        |
+-------------------+-----------+---------------+-------------------+
| Include Machine   | True      | Y             | -   This          |
| Name in           |           |               |     parameter     |
| Notifications     |           |               |                   |
|                   |           |               |  enables/disables |
|                   |           |               |     inclusion of  |
|                   |           |               |     the Machine   |
|                   |           |               |     Name in       |
|                   |           |               |     notification  |
|                   |           |               |     messages.     |
|                   |           |               | -   By default,   |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler       |
|                   |           |               |     includes the  |
|                   |           |               |     machine name  |
|                   |           |               |     to identify   |
|                   |           |               |     the job\'s    |
|                   |           |               |     machine.      |
|                   |           |               | -   This setting  |
|                   |           |               |     applies to    |
|                   |           |               |     all           |
|                   |           |               |     notification  |
|                   |           |               |     types         |
|                   |           |               |     [except]{.ul} | |                   |           |               |     \"Text        |
|                   |           |               |     Message.\"    |
|                   |           |               | -   Valid values  |
|                   |           |               |     are True and  |
|                   |           |               |     False.        |
+-------------------+-----------+---------------+-------------------+
| Notification      | \|        | Y             | -   This          |
| Delimiter         |           |               |     parameter     |
|                   |           |               |     determines    |
|                   |           |               |     the delimiter |
|                   |           |               |     used between  |
|                   |           |               |     fields in     |
|                   |           |               |     notification  |
|                   |           |               |     messages.     |
|                   |           |               | -   This          |
|                   |           |               |     delimiter     |
|                   |           |               |     allows        |
|                   |           |               |     third-party   |
|                   |           |               |     notification  |
|                   |           |               |     tools to      |
|                   |           |               |     easier read   |
|                   |           |               |     messages.     |
|                   |           |               | -   Valid values  |
|                   |           |               |     are the tilde |
|                   |           |               |     (\~), the     |
|                   |           |               |     \"at\" symbol |
|                   |           |               |     (@), the      |
|                   |           |               |     exclamation   |
|                   |           |               |     mark (!), the |
|                   |           |               |     pound sign    |
|                   |           |               |     (\#), the     |
|                   |           |               |     dollar sign   |
|                   |           |               |     (\$), the     |
|                   |           |               |     caret symbol  |
|                   |           |               |     (\^), and the |
|                   |           |               |     pipe symbol ( |
|                   |           |               |     \| ).         |
|                   |           |               | -   The default   |
|                   |           |               |     is the pipe   |
|                   |           |               |     symbol ( \|   |
|                   |           |               |     ).            |
+-------------------+-----------+---------------+-------------------+
| Seconds between   | 20        | Y             | -   This          |
| Checking for New  |           |               |     parameter     |
| Notifications     |           |               |     defines the   |
|                   |           |               |     delay in      |
|                   |           |               |     seconds       |
|                   |           |               |     between       |
|                   |           |               |     searches for  |
|                   |           |               |     new events in |
|                   |           |               |     the NOTIFY    |
|                   |           |               |     table.        |
|                   |           |               | -   Valid values  |
|                   |           |               |     range from 5  |
|                   |           |               |     to 20.        |
+-------------------+-----------+---------------+-------------------+
| Days to Keep      | 14        | Y             | -   Defines the   |
| Notification      |           |               |     number of     |
| History           |           |               |     days of       |
|                   |           |               |     Notification  |
|                   |           |               |     history to    |
|                   |           |               |     keep in the   |
|                   |           |               |     database.     |
|                   |           |               | -   The           |
|                   |           |               |     notification  |
|                   |           |               |     history table |
|                   |           |               |     shows the     |
|                   |           |               |     notification  |
|                   |           |               |     ID and        |
|                   |           |               |     trigger that  |
|                   |           |               |     caused each   |
|                   |           |               |     notification  |
|                   |           |               |     so users can  |
|                   |           |               |     research how  |
|                   |           |               |     a             |
|                   |           |               |     notification  |
|                   |           |               |     was           |
|                   |           |               |     generated.    |
|                   |           |               | -   Valid values  |
|                   |           |               |     range from    |
|                   |           |               |     1 - 35.       |
+-------------------+-----------+---------------+-------------------+
| Event Source for  | OPCON_ENS | Y             | -   This          |
| Windows Event Log |           |               |     parameter     |
| Messages          |           |               |     defines the   |
|                   |           |               |     event source  |
|                   |           |               |     that show up  |
|                   |           |               |     in the Source |
|                   |           |               |     column in the |
|                   |           |               |     Windows Event |
|                   |           |               |     Viewer.       |
|                   |           |               | -   Valid values  |
|                   |           |               |     are OPCON_ENS |
|                   |           |               |     or            |
|                   |           |               |                   |
|                   |           |               | SMANotifyHandler. |
+-------------------+-----------+---------------+-------------------+
| SPO Notifications | False     | Y             | -   This          |
| Enabled           |           |               |     parameter     |
|                   |           |               |                   |
|                   |           |               |  enables/disables |
|                   |           |               |     processing of |
|                   |           |               |     SPO events by |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler.      |
|                   |           |               | -   Valid values  |
|                   |           |               |     are True and  |
|                   |           |               |     False.        |
+-------------------+-----------+---------------+-------------------+
| Path and File     | \<blank\> | Y             | This parameter    |
| Name of SPO       |           |               | defines the full  |
| Executable        |           |               | path to the       |
|                   |           |               | executable        |
|                   |           |               | responsible for   |
|                   |           |               | processing SPO    |
|                   |           |               | messages.         |
+-------------------+-----------+---------------+-------------------+
| SPO Default Alarm | \<None\>  | Y             | -   This          |
| ID                |           |               |     parameter is  |
|                   |           |               |     the default   |
|                   |           |               |     machine name  |
|                   |           |               |     for SPO       |
|                   |           |               |     Events.       |
|                   |           |               | -   By default,   |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler does  |
|                   |           |               |     not send a    |
|                   |           |               |     machine name  |
|                   |           |               |     with SPO      |
|                   |           |               |     events.       |
|                   |           |               | -   The maximum   |
|                   |           |               |     is 24         |
|                   |           |               |     characters.   |
+-------------------+-----------+---------------+-------------------+
| Stack SPO Events  | True      | Y             | -   This          |
|                   |           |               |     parameter     |
|                   |           |               |                   |
|                   |           |               |  enables/disables |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler to    |
|                   |           |               |     make the      |
|                   |           |               |     ALARM         |
|                   |           |               |     qualifier     |
|                   |           |               |     unique across |
|                   |           |               |     multiple job  |
|                   |           |               |     states.       |
|                   |           |               | -   Valid values  |
|                   |           |               |     are True and  |
|                   |           |               |     False.        |
|                   |           |               |     -   If False, |
|                   |           |               |         the SMA   |
|                   |           |               |         Notify    |
|                   |           |               |         Handler   |
|                   |           |               |         sends the |
|                   |           |               |         ALARM     |
|                   |           |               |                   |
|                   |           |               |        qualifier, |
|                   |           |               |         specified |
|                   |           |               |         in the    |
|                   |           |               |                   |
|                   |           |               |     notification, |
|                   |           |               |         to SPO.   |
|                   |           |               |                   |
|                   |           |               |        Subsequent |
|                   |           |               |         status    |
|                   |           |               |         changes   |
|                   |           |               |         for the   |
|                   |           |               |         same job  |
|                   |           |               |         will      |
|                   |           |               |         overwrite |
|                   |           |               |         the       |
|                   |           |               |         previous  |
|                   |           |               |                   |
|                   |           |               |      notification |
|                   |           |               |         in SPO.   |
|                   |           |               |     -   If True,  |
|                   |           |               |         the SMA   |
|                   |           |               |         Notify    |
|                   |           |               |         Handler   |
|                   |           |               |         appends   |
|                   |           |               |         the       |
|                   |           |               |         EventID   |
|                   |           |               |         to the    |
|                   |           |               |         ALARM     |
|                   |           |               |                   |
|                   |           |               |        qualifier, |
|                   |           |               |         specified |
|                   |           |               |         in the    |
|                   |           |               |                   |
|                   |           |               |     notification, |
|                   |           |               |         to SPO.   |
|                   |           |               |                   |
|                   |           |               |        Subsequent |
|                   |           |               |         status    |
|                   |           |               |         changes   |
|                   |           |               |         for the   |
|                   |           |               |         same job  |
|                   |           |               |         will      |
|                   |           |               |         produce   |
|                   |           |               |         new       |
|                   |           |               |         unique    |
|                   |           |               |                   |
|                   |           |               |     notifications |
|                   |           |               |         to SPO.   |
+-------------------+-----------+---------------+-------------------+
| SNMP              | False     | Y             | -   This          |
| Notifications     |           |               |     parameter     |
| Enabled           |           |               |                   |
|                   |           |               |  enables/disables |
|                   |           |               |     processing of |
|                   |           |               |     SNMP events   |
|                   |           |               |     by the SMA    |
|                   |           |               |     Notify        |
|                   |           |               |     Handler.      |
|                   |           |               | -   Valid Values  |
|                   |           |               |     are True and  |
|                   |           |               |     False.        |
+-------------------+-----------+---------------+-------------------+
| Write SPO and     | True      | Y             | -   This          |
| SNMP Event        |           |               |     parameter     |
| Failures to the   |           |               |                   |
| Windows Event Log |           |               |  enables/disables |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler to    |
|                   |           |               |     write SNMP or |
|                   |           |               |     SPO event     |
|                   |           |               |     failures to   |
|                   |           |               |     the Windows   |
|                   |           |               |     Event Log.    |
|                   |           |               | -   Valid values  |
|                   |           |               |     are True and  |
|                   |           |               |     False.        |
+-------------------+-----------+---------------+-------------------+

: Option Parameters: Notification Settings
:::

 

