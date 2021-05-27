---
lang: en-us
title: Time Settings
viewport: width=device-width, initial-scale=1.0
---

#  Time Settings

The Time Settings category contains time-related settings for the SAM.

+--------------------+---------+---------------+--------------------+
| Option Parameter   | Default | Dynamic (Y/N) | Description        |
+====================+:=======:+:=============:+====================+
| Hour of each day   | 0       | Y             | -   By default, at |
| SAM should detect  |         |               |     midnight the   |
| Schedules to build |         |               |     SAM detects    |
|                    |         |               |     schedules to   |
|                    |         |               |     build.         |
|                    |         |               | -   Valid values   |
|                    |         |               |     range from 0   |
|                    |         |               |     to 23.         |
|                    |         |               | -   The hours are  |
|                    |         |               |     based on a     |
|                    |         |               |     24-hour format |
|                    |         |               |     starting from  |
|                    |         |               |     0 (midnight)   |
|                    |         |               |     to 23 (11      |
|                    |         |               |     p.m.).         |
|                    |         |               | -   The SAM only   |
|                    |         |               |     processes the  |
|                    |         |               |     builds once    |
|                    |         |               |     per day. If    |
|                    |         |               |     this hour      |
|                    |         |               |     changes after  |
|                    |         |               |     the build      |
|                    |         |               |     process, SAM   |
|                    |         |               |     does not       |
|                    |         |               |     consider this  |
|                    |         |               |     parameter      |
|                    |         |               |     until the next |
|                    |         |               |     day.           |
|                    |         |               | -   Set specific   |
|                    |         |               |     times for      |
|                    |         |               |     individual     |
|                    |         |               |     schedules to   |
|                    |         |               |     build on the   |
|                    |         |               |     schedule       |
|                    |         |               |     definitions.   |
|                    |         |               |     For more       |
|                    |         |               |     information,   |
|                    |         |               |     refer to       |
|                    |         |               |     [Schedule      | |                    |         |               |     Maintenance](S |
|                    |         |               | chedule-Definiti |
|                    |         |               | on.md#Schedule_Ma |
|                    |         |               | intenance){.MCXref |
|                    |         |               |     .xref}.        |
|                    |         |               |                    |
|                    |         |               | **Note:** To       |
|                    |         |               | enable             |
|                    |         |               | notification for   |
|                    |         |               | failed schedule    |
|                    |         |               | build processes,   |
|                    |         |               | define             |
|                    |         |               | [OpCon]{.Gener     | |                    |         |               | alOpConGlobalName} |
|                    |         |               | events on the      |
|                    |         |               | SMA_SKD_BUILD job  |
|                    |         |               | on the AdHoc       |
|                    |         |               | schedule.          |
|                    |         |               |                    |
|                    |         |               |                    |
|                    |         |               |                    |
|                    |         |               | [SMA               | |                    |         |               | Technologies]{.G   |
|                    |         |               | eneralCompanyName} |
|                    |         |               | provides template  |
|                    |         |               | jobs for AdHoc     |
|                    |         |               | with the           |
|                    |         |               | **AdHoc**.mdb      |
|                    |         |               | file. For more     |
|                    |         |               | information, refer |
|                    |         |               | to [SMA_SKD Jobs   | |                    |         |               | on the AdHoc       |
|                    |         |               | Schedule](A        |
|                    |         |               | dHoc-Schedule.ht |
|                    |         |               | m#SMA_SKD){.MCXref |
|                    |         |               | .xref}.            |
+--------------------+---------+---------------+--------------------+
| Minutes between    | 5       | Y             | -   This parameter |
| checking running   |         |               |     determines the |
| jobs               |         |               |     maximum time   |
|                    |         |               |     period for the |
|                    |         |               |     SAM to wait    |
|                    |         |               |     before         |
|                    |         |               |     inquiring      |
|                    |         |               |     about job      |
|                    |         |               |     status.        |
|                    |         |               |     -   SAM only   |
|                    |         |               |         inquires   |
|                    |         |               |         about the  |
|                    |         |               |         job status |
|                    |         |               |         if         |
|                    |         |               |         SMANetCom  |
|                    |         |               |         has not    |
|                    |         |               |         received a |
|                    |         |               |         valid      |
|                    |         |               |         message    |
|                    |         |               |         from the   |
|                    |         |               |         [L         | |                    |         |               | SAM]{.GeneralLSAM} |
|                    |         |               |         in the     |
|                    |         |               |         configured |
|                    |         |               |         amount of  |
|                    |         |               |         time.      |
|                    |         |               | -   When jobs are  |
|                    |         |               |     processing,    |
|                    |         |               |     the status     |
|                    |         |               |     responses      |
|                    |         |               |     update the     |
|                    |         |               |     timestamp of   |
|                    |         |               |     the last time  |
|                    |         |               |     the SAM        |
|                    |         |               |     received job   |
|                    |         |               |     information.   |
|                    |         |               |     For short      |
|                    |         |               |     jobs, there is |
|                    |         |               |     no need for    |
|                    |         |               |     the SAM to     |
|                    |         |               |     request job    |
|                    |         |               |     status. If the |
|                    |         |               |     SAM does not   |
|                    |         |               |     receive a      |
|                    |         |               |     status for the |
|                    |         |               |     job within the |
|                    |         |               |     specified      |
|                    |         |               |     time-out       |
|                    |         |               |     value, it      |
|                    |         |               |     requests the   |
|                    |         |               |     job status.    |
|                    |         |               | -   This timer is  |
|                    |         |               |     necessary for  |
|                    |         |               |     jobs that run  |
|                    |         |               |     for long       |
|                    |         |               |     periods of     |
|                    |         |               |     time. It is    |
|                    |         |               |     also necessary |
|                    |         |               |     for possible   |
|                    |         |               |     losses in      |
|                    |         |               |     communication  |
|                    |         |               |     between        |
|                    |         |               |     SMANetCom and  |
|                    |         |               |     the            |
|                    |         |               |     [LS            | |                    |         |               | AM]{.GeneralLSAM}. |
|                    |         |               | -   If             |
|                    |         |               |     job-processing |
|                    |         |               |     issues are     |
|                    |         |               |     suspected, set |
|                    |         |               |     this timer to  |
|                    |         |               |     three minutes  |
|                    |         |               |     for debugging. |
|                    |         |               |     When finished  |
|                    |         |               |     debugging, set |
|                    |         |               |     the timer back |
|                    |         |               |     to five        |
|                    |         |               |     minutes.       |
|                    |         |               | -   If all is      |
|                    |         |               |     running well,  |
|                    |         |               |     this timer can |
|                    |         |               |     be increased   |
|                    |         |               |     to a           |
|                    |         |               |     recommended    |
|                    |         |               |     maximum of 10  |
|                    |         |               |     minutes.       |
|                    |         |               | -   Valid values   |
|                    |         |               |     range from 1   |
|                    |         |               |     to 1440.       |
|                    |         |               |                    |
|                    |         |               | **Note:** Jobs in  |
|                    |         |               | a \"Start          |
|                    |         |               | Attempted\" status |
|                    |         |               | are not subject to |
|                    |         |               | this timer because |
|                    |         |               | they are checked   |
|                    |         |               | in as timely a     |
|                    |         |               | fashion as         |
|                    |         |               | possible.          |
+--------------------+---------+---------------+--------------------+
| Seconds SAM should | 180     | Y             | -   This parameter |
| wait between       |         |               |     determines the |
| PreRun attempts    |         |               |     amount of time |
|                    |         |               |     in seconds     |
|                    |         |               |     between prerun |
|                    |         |               |     attempts.      |
|                    |         |               | -   By default,    |
|                    |         |               |     the SAM        |
|                    |         |               |     re-attempts    |
|                    |         |               |     prerun jobs    |
|                    |         |               |     every 180      |
|                    |         |               |     seconds (3     |
|                    |         |               |     minutes) until |
|                    |         |               |     the job        |
|                    |         |               |     succeeds.      |
|                    |         |               | -   Valid values   |
|                    |         |               |     range from 0   |
|                    |         |               |     to 32000.      |
+--------------------+---------+---------------+--------------------+

: Option Parameters: Time Settings
:::

 

