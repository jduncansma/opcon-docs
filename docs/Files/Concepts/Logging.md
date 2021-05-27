---
lang: en-us
title: Logging
viewport: width=device-width, initial-scale=1.0
---


The Logging category contains log and trace settings for the SAM.

+--------------------+---------+---------------+--------------------+
| Option Parameter   | Default | Dynamic (Y/N) | Description        |
+====================+:=======:+:=============:+====================+
| Log Critical       | False   | Y             | -   This parameter |
| messages to NT     |         |               |     enables        |
| Events             |         |               |     writing of all |
|                    |         |               |     SAM critical   |
|                    |         |               |     errors to the  |
|                    |         |               |     Application    |
|                    |         |               |     Log in the     |
|                    |         |               |     Microsoft      |
|                    |         |               |     Event Log.     |
|                    |         |               | -   To minimize    |
|                    |         |               |     overhead, the  |
|                    |         |               |     SAM does not   |
|                    |         |               |     write critical |
|                    |         |               |     messages to    |
|                    |         |               |     the Windows    |
|                    |         |               |     event log by   |
|                    |         |               |     default.       |
|                    |         |               | -   Valid values   |
|                    |         |               |     are True and   |
|                    |         |               |     False.         |
+--------------------+---------+---------------+--------------------+
| Log job dependency | True    | Y             | -   This parameter |
| errors to          |         |               |                    |
| Critical.log       |         |               |   enables/disables |
|                    |         |               |     logging job    |
|                    |         |               |     dependency     |
|                    |         |               |     errors to the  |
|                    |         |               |     critical log.  |
|                    |         |               | -   Valid values   |
|                    |         |               |     are True and   |
|                    |         |               |     False.         |
|                    |         |               |     -   If True,   |
|                    |         |               |         the SAM    |
|                    |         |               |         logs all   |
|                    |         |               |         job        |
|                    |         |               |         dependency |
|                    |         |               |         errors to  |
|                    |         |               |                    |
|                    |         |               |      Critical.log. |
|                    |         |               |     -   If False,  |
|                    |         |               |         the SAM    |
|                    |         |               |         stops      |
|                    |         |               |         logging    |
|                    |         |               |         job        |
|                    |         |               |         dependency |
|                    |         |               |         errors to  |
|                    |         |               |         the        |
|                    |         |               |                    |
|                    |         |               |      Critical.log. |
|                    |         |               |         When the   |
|                    |         |               |         SAM        |
|                    |         |               |         Message    |
|                    |         |               |         Logging    |
|                    |         |               |         Level is   |
|                    |         |               |         set to     |
|                    |         |               |         Verbose or |
|                    |         |               |         Debug, the |
|                    |         |               |         SAM writes |
|                    |         |               |         job        |
|                    |         |               |         dependency |
|                    |         |               |         errors to  |
|                    |         |               |         the        |
|                    |         |               |         SAM.log.   |
|                    |         |               |         Refer to   |
|                    |         |               |         [SAM       | |                    |         |               |         Message    |
|                    |         |               |         Logging    |
|                    |         |               |         Level]     |
|                    |         |               | (#SAM_Message_Logg |
|                    |         |               | ing_Level){.MCXref |
|                    |         |               |         .xref}     |
|                    |         |               |         below.     |
+--------------------+---------+---------------+--------------------+
| []{#Maximum_n      | 10      | Y             | -   This parameter | | umber_of_days_arch |         |               |     sets the       |
| ived_SAM_logs_shou |         |               |     maximum number |
| ld_be_kept}Maximum |         |               |     of archive     |
| number of days     |         |               |     folders (i.e., |
| archived SAM logs  |         |               |     days) for all  |
| should be kept     |         |               |     log archives.  |
|                    |         |               | -   By default,    |
|                    |         |               |     the SAM        |
|                    |         |               |     deletes        |
|                    |         |               |     archived logs  |
|                    |         |               |     older than 10  |
|                    |         |               |     days.          |
|                    |         |               | -   The SAM        |
|                    |         |               |     archives log   |
|                    |         |               |     files once per |
|                    |         |               |     day.           |
|                    |         |               | -   Valid values   |
|                    |         |               |     range from 0   |
|                    |         |               |     to 365.        |
|                    |         |               |                    |
|                    |         |               | **CAUTION:** This  |
|                    |         |               | number must be     |
|                    |         |               | less than the      |
|                    |         |               | ArchiveDaysToKeep  |
|                    |         |               | setting in the     |
|                    |         |               | SMAServMan         |
|                    |         |               | configuration      |
|                    |         |               | file. Refer to     |
|                    |         |               | [License           | |                    |         |               | Type               |
|                    |         |               | s](../Server-Pro |
|                    |         |               | grams/Licensing.ht |
|                    |         |               | m#License){.MCXref |
|                    |         |               | .xref} in the      |
|                    |         |               | **Server           |
|                    |         |               | Programs** online  |
|                    |         |               | help.              |
+--------------------+---------+---------------+--------------------+
| Maximum number of  | 10      | Y             | -   This parameter |
| days Schedule      |         |               |     sets the       |
| Build logs should  |         |               |     maximum number |
| be kept            |         |               |     of days to     |
|                    |         |               |     keep Schedule  |
|                    |         |               |     Manager logs.  |
|                    |         |               | -   By default,    |
|                    |         |               |     the SAM        |
|                    |         |               |     deletes logs   |
|                    |         |               |     older than 10  |
|                    |         |               |     days.          |
|                    |         |               | -   Valid values   |
|                    |         |               |     range from 0   |
|                    |         |               |     to 365.        |
+--------------------+---------+---------------+--------------------+
| []{#SAM_Message    | Terse   | Y             | -   This parameter | | _Logging_Level}SAM |         |               |     determines the |
| Message Logging    |         |               |     amount of SAM  |
| Level              |         |               |     processing     |
|                    |         |               |     information    |
|                    |         |               |     written to the |
|                    |         |               |     SAM log files. |
|                    |         |               | -   Valid values   |
|                    |         |               |     are *Terse*,   |
|                    |         |               |     *Verbose*, and |
|                    |         |               |     *Debug*.       |
|                    |         |               |     -   *Terse* is |
|                    |         |               |         the        |
|                    |         |               |         default    |
|                    |         |               |         setting    |
|                    |         |               |         providing  |
|                    |         |               |         only       |
|                    |         |               |                    |
|                    |         |               |       job/schedule |
|                    |         |               |         start and  |
|                    |         |               |         finish     |
|                    |         |               |                    |
|                    |         |               |       information. |
|                    |         |               |     -   *Verbose*  |
|                    |         |               |         provides   |
|                    |         |               |         additional |
|                    |         |               |                    |
|                    |         |               |        information |
|                    |         |               |         regarding  |
|                    |         |               |         machine    |
|                    |         |               |                    |
|                    |         |               |        processing. |
|                    |         |               |     -   *Debug*    |
|                    |         |               |         provides   |
|                    |         |               |         verbose    |
|                    |         |               |         messaging  |
|                    |         |               |         plus more  |
|                    |         |               |         detailed   |
|                    |         |               |                    |
|                    |         |               |        information |
|                    |         |               |         on SAM     |
|                    |         |               |                    |
|                    |         |               |        processing. |
+--------------------+---------+---------------+--------------------+

: Option Parameters: Logging
:::

 

