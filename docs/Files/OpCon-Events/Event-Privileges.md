---
lang: en-us
title: Event Privileges
viewport: width=device-width, initial-scale=1.0
---

#  []{#Event2}Event Privileges 
The table below contains all of the OpCon
events and the associated privileges required to execute each event.

+---------------------+----------------------+----------------------+
| Event               | Umbrella Function    | Minimum Function     |
|                     | Privilege            | Privilege            |
+=====================+======================+======================+
| \$SCHEDULE:HOLD     | All Schedule         | Hold Schedules       |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$SCHEDULE:RELEASE  | All Schedule         | Release Schedules    |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$SCHEDULE:START    | All Schedule         | Force Start Schedule |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$SCHEDULE:BUILD    | All Daily Schedule   | Build Daily          |
|                     | Functions            | Schedules            |
+---------------------+----------------------+----------------------+
| \$SCHEDULE:BUILDHLD | All Daily Schedule   | Build Daily          |
|                     | Functions            | Schedules            |
+---------------------+----------------------+----------------------+
| \$SCHEDULE:CANCEL   | All Schedule         | Cancel Jobs          |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$SCHEDULE:DELETE   | All Daily Schedule   | Delete Daily         |
|                     | Functions            | Schedules            |
+---------------------+----------------------+----------------------+
| \$SCHEDULE:CHECK    | All Daily Schedule   | Build Daily          |
|                     | Functions            | Schedules            |
+---------------------+----------------------+----------------------+
| \$SCHEDULE:CHECKALL | All Daily Schedule   | Build Daily          |
|                     | Functions            | Schedules            |
+---------------------+----------------------+----------------------+
| \$JOB:ADD           | All Daily Schedule   | Add Jobs to Daily    |
|                     | Functions            | Schedules            |
+---------------------+----------------------+----------------------+
| \$JOB:ADDHLD        | All Daily Schedule   | Add Jobs to Daily    |
|                     | Functions            | Schedules            |
+---------------------+----------------------+----------------------+
| \$JOB:DELETE        | All Daily Schedule   | Delete Jobs from     |
|                     | Functions            | Daily Schedules      |
+---------------------+----------------------+----------------------+
| \$JOB:SKIP          | All Schedule         | Skip Jobs            |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$JOB:HOLD          | All Schedule         | Hold Jobs            |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$JOB:RELEASE       | All Schedule         | Release Jobs         |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$JOB:START         | All Schedule         | Force Start Jobs     |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$JOB:CANCEL        | All Schedule         | Cancel Jobs          |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$JOB:RESTART       | All Schedule         | Restart Jobs         |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$JOB:RESTARTHLD    | All Schedule         | Restart Jobs         |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$JOB:GOOD          | All Schedule         | Mark Jobs Finished   |
|                     | Operation Functions  | Ok                   |
+---------------------+----------------------+----------------------+
| \$JOB:BAD           | All Schedule         | Mark Jobs Failed     |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$JOB:RESCHEDULE    | All Schedule         | Restart Jobs         |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$JOB:RESCHEDHLD    | All Schedule         | Restart Jobs         |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$JOB:KILL          | All Schedule         | Kill Jobs            |
|                     | Operation Functions  |                      |
+---------------------+----------------------+----------------------+
| \$MACHINE:STATUS    | All Administrative   | Maintain Machines    |
|                     | Functions            |                      |
+---------------------+----------------------+----------------------+
| \$TOKEN:SET         | All Administrative   | Maintain Global      |
|                     | Functions            | Properties           |
+---------------------+----------------------+----------------------+
| \$TOKEN:ADD         | All Administrative   | Maintain Global      |
|                     | Functions            | Properties           |
+---------------------+----------------------+----------------------+
| \$TOKEN:DELETE      | All Administrative   | Maintain Global      |
|                     | Functions            | Properties           |
+---------------------+----------------------+----------------------+
| \$RESOURCE:SET      | All Administrative   | Maintain             |
|                     | Functions            | Thresholds/Resources |
+---------------------+----------------------+----------------------+
| \$THRESHOLD:SET     | All Administrative   | Maintain             |
|                     | Functions            | Thresholds/Resources |
+---------------------+----------------------+----------------------+
| \$CONSOLE:DISPLAY   | N/A                  | N/A                  |
|                     |                      |                      |
|                     |                      |                      |
|                     |                      |                      |
|                     | User must be an      |                      |
|                     | Active User account  |                      |
|                     | OR                   |                      |
|                     |                      |                      |
|                     | The user name SYSTEM |                      |
|                     | and password of      |                      |
|                     | MESSAGE can be used. |                      |
+---------------------+----------------------+----------------------+
| \$NOTIFY:EMAIL      | N/A                  | N/A                  |
|                     |                      |                      |
|                     |                      |                      |
|                     |                      |                      |
|                     | User must be an      |                      |
|                     | Active User account  |                      |
|                     | OR                   |                      |
|                     |                      |                      |
|                     | The user name SYSTEM |                      |
|                     | and password of      |                      |
|                     | MESSAGE can be used. |                      |
+---------------------+----------------------+----------------------+
| \$NOTIFY:LOG        | N/A                  | N/A                  |
|                     |                      |                      |
|                     |                      |                      |
|                     |                      |                      |
|                     | User must be an      |                      |
|                     | Active User account  |                      |
|                     |                      |                      |
|                     | OR                   |                      |
|                     |                      |                      |
|                     | The user name SYSTEM |                      |
|                     | and password of      |                      |
|                     | MESSAGE can be used. |                      |
+---------------------+----------------------+----------------------+
| \$NOTIFY:NETSEND    | N/A                  | N/A                  |
|                     |                      |                      |
|                     |                      |                      |
|                     |                      |                      |
|                     | User must be an      |                      |
|                     | Active User account  |                      |
|                     | OR                   |                      |
|                     |                      |                      |
|                     | The user name SYSTEM |                      |
|                     | and password of      |                      |
|                     | MESSAGE can be used. |                      |
+---------------------+----------------------+----------------------+
| \$NOTIFY:SNMP       | N/A                  | N/A                  |
|                     |                      |                      |
|                     |                      |                      |
|                     |                      |                      |
|                     | User must be an      |                      |
|                     | Active User account  |                      |
|                     | OR                   |                      |
|                     |                      |                      |
|                     | The user name SYSTEM |                      |
|                     | and password of      |                      |
|                     | MESSAGE can be used. |                      |
+---------------------+----------------------+----------------------+
| \$NOTIFY:SPOAL      | N/A                  | N/A                  |
|                     |                      |                      |
|                     |                      |                      |
|                     |                      |                      |
|                     | User must be an      |                      |
|                     | Active User account  |                      |
|                     | OR                   |                      |
|                     |                      |                      |
|                     | The user name SYSTEM |                      |
|                     | and password of      |                      |
|                     | MESSAGE can be used. |                      |
+---------------------+----------------------+----------------------+
| \$NOTIFY:SPOCO      | N/A                  | N/A                  |
|                     |                      |                      |
|                     |                      |                      |
|                     |                      |                      |
|                     | User must be an      |                      |
|                     | Active User account  |                      |
|                     | OR                   |                      |
|                     |                      |                      |
|                     | The user name SYSTEM |                      |
|                     | and password of      |                      |
|                     | MESSAGE can be used. |                      |
+---------------------+----------------------+----------------------+
| \$NOTIFY:TEXTMSG    | N/A                  | N/A                  |
|                     |                      |                      |
|                     |                      |                      |
|                     |                      |                      |
|                     | User must be an      |                      |
|                     | Active User account  |                      |
|                     | OR                   |                      |
|                     |                      |                      |
|                     | The user name SYSTEM |                      |
|                     | and password of      |                      |
|                     | MESSAGE can be used. |                      |
+---------------------+----------------------+----------------------+

: Required Privileges for External Events
:::

 

