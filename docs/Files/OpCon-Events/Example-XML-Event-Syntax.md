---
lang: en-us
title: Example XML Event Syntax
viewport: width=device-width, initial-scale=1.0
---

# Example XML Event Syntax

[]{#aanchor140} This topic provides examples of how each of the supported OpCon events is formatted or defined in XML. Refer to the
following event categories for the examples:

-   [Administrative Events](#Administ)
-   [Job-Related Events](#Job-Rela)
-   [Machine-Related Events](#Machine-)
-   [Notification Events](#Notifica)
-   [Property-Related Events](#Property)
-   [SAM Log Events](#SAM)
-   [Schedule-Related Events](#Schedule)
-   [Threshold/Resource-Related Events](#Threshol)
-   [Token-Related Events](#Token-Re)

## Administrative Events

### \$CALENDAR:ADD



\<EVENT\>

   \<TYPE\>CALENDAR\</TYPE\>

   \<ACTION\>ADD\</ACTION\>

   \<CALNAME\>\</CALNAME\>

   \<DATES\>

       \<CALDATE\>\</CALDATE\>

       \<CALDATE\>\</CALDATE\>\...\</DATES\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$CALENDAR:DEL



\<EVENT\>

   \<TYPE\>CALENDAR\</TYPE\>

   \<ACTION\>DEL\</ACTION\>

   \<CALNAME\>\</CALNAME\>

   \<DATES\>

       \<CALDATE\>\</CALDATE\>

       \<CALDATE\>\</CALDATE\>\...\</DATES\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:MACHGRP



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>MACHGRP\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<MACHGRPNAME\>\</MACHGRPNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:MAXRUNTIME



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>MAXRUNTIME\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<MAXMINS\>\</MAXMINS\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:PRIORITY



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>PRIORITY\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<PRIORITY\>\</PRIORITY\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:TAGADD



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>TAGADD\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<TAGS\>

       \<TAG\>\</TAG\>

       \<TAG\>\</TAG\>\...\</TAGS\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:TAGDEL



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>TAGDEL\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<TAGS\>

       \<TAG\>\</TAG\>

       \<TAG\>\</TAG\>\...\</TAGS\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:USER



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>USER\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<USER\>\</USER\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOBMASTER:BUILDSTATE



\<EVENT\>

   \<TYPE\>JOBMASTER\</TYPE\>

   \<ACTION\>BUILDSTATE\</ACTION\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<FREQNAME\>\</FREQNAME\>

   \<BLDSTATE\>\</BLDSTATE\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOBMASTER:TAGADD



\<EVENT\>

   \<TYPE\>JOBMASTER\</TYPE\>

   \<ACTION\>TAGADD\</ACTION\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<FREQNAME\>\</FREQNAME\>

   \<TAGS\>

       \<TAG\>\</TAG\>

       \<TAG\>\</TAG\>\...\</TAGS\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOBMASTER:TAGDEL



\<EVENT\>

   \<TYPE\>JOBMASTER\</TYPE\>

   \<ACTION\>TAGDEL\</ACTION\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<FREQNAME\>\</FREQNAME\>

   \<TAGS\>

       \<TAG\>\</TAG\>

       \<TAG\>\</TAG\>\...\</TAGS\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$RESOURCE:DEL



\<EVENT\>

   \<TYPE\>RESOURCE\</TYPE\>

   \<ACTION\>DEL\</ACTION\>

   \<RESOURCENAME\>\</RESOURCENAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$RESOURCE:RENAME



\<EVENT\>

   \<TYPE\>RESOURCE\</TYPE\>

   \<ACTION\>RENAME\</ACTION\>

   \<OLDNAME\>\</OLDNAME\>

   \<NEWNAME\>\</NEWNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$THRESHOLD:DEL



\<EVENT\>

   \<TYPE\>THRESHOLD\</TYPE\>

   \<ACTION\>DEL\</ACTION\>

   \<THRESHNAME\>\</THRESHNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$THRESHOLD:RENAME



\<EVENT\>

   \<TYPE\>THRESHOLD\</TYPE\>

   \<ACTION\>RENAME\</ACTION\>

   \<OLDNAME\>\</OLDNAME\>

   \<NEWNAME\>\</NEWNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



## Job-Related Events

### \$JOB:ADD



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>ADD\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<FREQNAME\>\</FREQNAME\>

   \<PROPERTIES\>

       \<PROPERTY\>\</PROPERTY\>

       \<PROPERTY\>\</PROPERTY\>\...\</PROPERTIES\>

   \<REOPENSKD\>\</REOPENSKD\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:ADDHLD



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>ADDHLD\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<FREQNAME\>\</FREQNAME\>

   \<PROPERTIES\>

       \<PROPERTY\>\</PROPERTY\>

       \<PROPERTY\>\</PROPERTY\>\...\</PROPERTIES\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:BAD



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>BAD\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:CANCEL



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>CANCEL\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:DELETE



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>DELETE\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:GOOD



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>GOOD\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:HOLD



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>HOLD\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:KILL



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>KILL\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:QUESTATE



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>QUESTATE\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<JOBSTATUS\>\</JOBSTATUS\>

   \<JOBPDATA\>\</JOBPDATA\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:QUEUED



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>QUEUED\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<FREQNAME\>\</FREQNAME\>

   \<JOBPDATA\>\</JOBPDATA\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:RELEASE



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>RELEASE\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:RESCHEDHLD



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>RESCHEDHLD\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<OFFSETFROM\>\</OFFSETFROM\>

   \<OFFSETMIN\>\</OFFSETMIN\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:RESCHEDULE



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>RESCHEDULE\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<OFFSETFROM\>\</OFFSETFROM\>

   \<OFFSETMIN\>\</OFFSETMIN\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:RESTART



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>RESTART\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:RESTARTHLD



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>RESTARTHLD\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:SKIP



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>SKIP\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:START



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>START\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$JOB:TRACK



\<EVENT\>

   \<TYPE\>JOB\</TYPE\>

   \<ACTION\>TRACK\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<JOBNAME\>\</JOBNAME\>

   \<FREQNAME\>\</FREQNAME\>

   \<JOBPDATA\>\</JOBPDATA\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



## Machine-Related Events

### \$MACHINE:MAXJOBS



\<EVENT\>

   \<TYPE\>MACHINE\</TYPE\>

   \<ACTION\>MAXJOBS\</ACTION\>

   \<MACHNAME\>\</MACHNAME\>

   \<MACHMAX\>\</MACHMAX\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$MACHINE:STATUS



\<EVENT\>

   \<TYPE\>MACHINE\</TYPE\>

   \<ACTION\>STATUS\</ACTION\>

   \<MACHNAME\>\</MACHNAME\>

   \<MACHSTATUS\>\</MACHSTATUS\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



## Notification Events

### \$NOTIFY:EMAIL



\<EVENT\>

   \<TYPE\>NOTIFY\</TYPE\>

   \<ACTION\>EMAIL\</ACTION\>

   \<MAILTO\>\</MAILTO\>

   \<MAILCC\>\</MAILCC\>

   \<MAILBCC\>\</MAILBCC\>

   \<MAILSUBJ\>\</MAILSUBJ\>

   \<MAILBODY\>\</MAILBODY\>

   \<ATTACHMENTS\>

       \<ATTACH\>\</ATTACH\>

       \<ATTACH\>\</ATTACH\>\...\</ATTACHMENTS\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>





### \$NOTIFY:COMMAND



\<EVENT\>

   \<TYPE\>NOTIFY\</TYPE\>

   \<ACTION\>COMMAND\</ACTION\>

   \<WINCOMMAND\>\</WINCOMMAND\>

   \<WORKDIR\>\</WORKDIR\>

   \<BATCHUSER\>\</BATCHUSER\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>





### \$NOTIFY:LOG



\<EVENT\>

   \<TYPE\>NOTIFY\</TYPE\>

   \<ACTION\>LOG\</ACTION\>

   \<LOGSEV\>\</LOGSEV\>

   \<LOGID\>\</LOGID\>

   \<LOGMSG\>\</LOGMSG\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$NOTIFY:NETSEND



\<EVENT\>

   \<TYPE\>NOTIFY\</TYPE\>

   \<ACTION\>NETSEND\</ACTION\>

   \<NETMACH\>\</NETMACH\>

   \<NETMSG\>\</NETMSG\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$NOTIFY:SNMP



\<EVENT\>

   \<TYPE\>NOTIFY\</TYPE\>

   \<ACTION\>SNMP\</ACTION\>

   \<SNMPTRAP\>\</SNMPTRAP\>

   \<SNMPID\>\</SNMPID\>

   \<SNMPMSG\>\</SNMPMSG\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$NOTIFY:SPOAL



\<EVENT\>

   \<TYPE\>NOTIFY\</TYPE\>

   \<ACTION\>SPOAL\</ACTION\>

   \<SPOALARMMSG\>\</SPOALARMMSG\>

   \<SPOSEV\>\</SPOSEV\>

   \<SPOALARMID\>\</SPOALARMID\>

   \<SPOALARMQUAL\>\</SPOALARMQUAL\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$NOTIFY:SPOCO



\<EVENT\>

   \<TYPE\>NOTIFY\</TYPE\>

   \<ACTION\>SPOCO\</ACTION\>

   \<SPOINST\>\</SPOINST\>

   \<SPOCOMMAND\>\</SPOCOMMAND\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$NOTIFY:TASKS



\<EVENT\>

   \<TYPE\>NOTIFY\</TYPE\>

   \<ACTION\>TASKS\</ACTION\>

   \<MAILTO\>\</MAILTO\>

   \<MAILCC\>\</MAILCC\>

   \<MAILBCC\>\</MAILBCC\>

   \<MAILSUBJ\>\</MAILSUBJ\>

   \<DATEDESIRED\>\</DATEDESIRED\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$NOTIFY:TEXTMSG



\<EVENT\>

   \<TYPE\>NOTIFY\</TYPE\>

   \<ACTION\>TEXTMSG\</ACTION\>

   \<TEXTTO\>\</TEXTTO\>

   \<TEXTMSG\>\</TEXTMSG\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



## Property-Related Events

### \$PROPERTY:ADD



\<EVENT\>

   \<TYPE\>PROPERTY\</TYPE\>

   \<ACTION\>ADD\</ACTION\>

   \<PROPNAME\>\</PROPNAME\>

   \<PROPVALUE\>\</PROPVALUE\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$PROPERTY:DELETE



\<EVENT\>

   \<TYPE\>PROPERTY\</TYPE\>

   \<ACTION\>DELETE\</ACTION\>

   \<PROPNAME\>\</PROPNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$PROPERTY:SET



\<EVENT\>

   \<TYPE\>PROPERTY\</TYPE\>

   \<ACTION\>SET\</ACTION\>

   \<PROPNAME\>\</PROPNAME\>

   \<PROPVALUE\>\</PROPVALUE\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



## SAM Log Events

### \$CONSOLE:DISPLAY



\<EVENT\>

   \<TYPE\>CONSOLE\</TYPE\>

   \<ACTION\>DISPLAY\</ACTION\>

   \<MSG\>\</MSG

   \<USERNAME\>SYSTEM\</USERNAME\>

   \<USERPWD\>MESSAGE\</USERPWD\>

\</EVENT\>



## Schedule-Related Events

### \$SCHEDULE:BUILD



\<EVENT\>

   \<TYPE\>SCHEDULE\</TYPE\>

   \<ACTION\>BUILD\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<OVERWRITE\>\</OVERWRITE\>

   \<PROPERTIES\>

       \<PROPERTY\>\</PROPERTY\>

       \<PROPERTY\>\</PROPERTY\>\...\</PROPERTIES\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$SCHEDULE:BUILDHLD



\<EVENT\>

   \<TYPE\>SCHEDULE\</TYPE\>

   \<ACTION\>BUILDHLD\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<OVERWRITE\>\</OVERWRITE\>

   \<PROPERTIES\>

       \<PROPERTY\>\</PROPERTY\>

       \<PROPERTY\>\</PROPERTY\>\...\</PROPERTIES\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$SCHEDULE:CANCEL



\<EVENT\>

   \<TYPE\>SCHEDULE\</TYPE\>

   \<ACTION\>CANCEL\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$SCHEDULE:CHECK



\<EVENT\>

   \<TYPE\>SCHEDULE\</TYPE\>

   \<ACTION\>CHECK\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<CIRCCHECK\>\</CIRCCHECK\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$SCHEDULE:CHECKALL



\<EVENT\>

   \<TYPE\>SCHEDULE\</TYPE\>

   \<ACTION\>CHECKALL\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<CIRCCHECK\>\</CIRCCHECK\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$SCHEDULE:DELETE



\<EVENT\>

   \<TYPE\>SCHEDULE\</TYPE\>

   \<ACTION\>DELETE\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$SCHEDULE:HOLD



\<EVENT\>

   \<TYPE\>SCHEDULE\</TYPE\>

   \<ACTION\>HOLD\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$SCHEDULE:RELEASE



\<EVENT\>

   \<TYPE\>SCHEDULE\</TYPE\>

   \<ACTION\>RELEASE\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$SCHEDULE:START



\<EVENT\>

   \<TYPE\>SCHEDULE\</TYPE\>

   \<ACTION\>START\</ACTION\>

   \<SKDDATE\>\</SKDDATE\>

   \<SKDNAME\>\</SKDNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



## Threshold/Resource-Related Events

### \$THRESHOLD:SET



\<EVENT\>

   \<TYPE\>THRESHOLD\</TYPE\>

   \<ACTION\>SET\</ACTION\>

   \<THRESHNAME\>\</THRESHNAME\>

   \<THRESHVALUE\>\</THRESHVALUE\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$RESOURCE:SET



\<EVENT\>

   \<TYPE\>RESOURCE\</TYPE\>

   \<ACTION\>SET\</ACTION\>

   \<RESOURCENAME\>\</RESOURCENAME\>

   \<RESOURCEVALUE\>\</RESOURCEVALUE\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



## Token-Related Events

### \$TOKEN:ADD



\<EVENT\>

   \<TYPE\>TOKEN\</TYPE\>

   \<ACTION\>ADD\</ACTION\>

   \<TOKENNAME\>\</TOKENNAME\>

   \<TOKENVALUE\>\</TOKENVALUE\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$TOKEN:DELETE



\<EVENT\>

   \<TYPE\>TOKEN\</TYPE\>

   \<ACTION\>DELETE\</ACTION\>

   \<TOKENNAME\>\</TOKENNAME\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>



### \$TOKEN:SET



\<EVENT\>

   \<TYPE\>TOKEN\</TYPE\>

   \<ACTION\>SET\</ACTION\>

   \<TOKENNAME\>\</TOKENNAME\>

   \<TOKENVALUE\>\</TOKENVALUE\>

   \<USERNAME\>\</USERNAME\>

   \<USERPWD\>\</USERPWD\>

\</EVENT\>


:::

 

