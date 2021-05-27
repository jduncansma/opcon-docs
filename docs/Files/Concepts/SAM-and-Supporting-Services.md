---
lang: en-us
title: SAM and Supporting Services (SAM-SS)
viewport: width=device-width, initial-scale=1.0
---

#  SAM and Supporting Services (SAM-SS)

The SAM and supporting services (SAM-SS) are the components that manage
all automation processing. For additional information, refer to the
[Server Programs](../Server-Programs/Overview.md) online help.

## Schedule Activity Monitor (SAM)

The Schedule Activity Monitor (SAM) is the logical processor for
OpCon workflow automation. The SAM monitors
schedule and job start times, dependencies, and user commands to
determine when a particular job will be executed. The SAM also watches
for and processes OpCon events that control
the event driven nature of OpCon automation.
The SAM communicates job and event information with the LSAMs via
SMANetCom. For additional information, refer to [Schedule Activity Monitor
(SAM)](../Server-Programs/Schedule-Activity-Monitor.md){.MCXref
.xref} in the **Server Programs** online help.

## SMA Network Communications Module (SMANetCom)

The SMA Network Communications Module (SMANetCom) is responsible for
communication of platform-specific automation information between SAM
and all LSAMs. Through tables in the database, SAM and SMANetCom
maintain reliable communication and data integrity. SMANetCom
communicates with each LSAM independently via TCP/IP. For additional
information, refer to [SMA Network Communications Module (SMANetCom)](../Server-Programs/SMA-Network-Communications-Module.md){.MCXref
.xref} in the **Server Programs** online help.

## SMA Notify Handler

The SMA Notify Handler processes notifications caused by Machine,
Schedule, and Job status triggers. The SMA Notify Handler can send
e-mails, text messages, write to the Windows Event Log, send SNMP traps,
and perform various other notifications. For additional information,
refer to [SMA Notify Handler](../Server-Programs/SMA-Notify-Handler.md)
in the **Server Programs** online help.

## SMA Request Router

The SMA Request Router is the component responsible for sending various
requests to designated Request Handlers. The SMA Request Router also
writes completion information from the Request Handlers to the
OpCon database. Request Handlers are
responsible for such things as schedule maintenance processing and job
output retrieval. For additional information, refer to [SMA Request Router](../Server-Programs/SMA-Request-Router.md)
in the **Server Programs** online help.

## SMA Start Time Calculator

The SMA Start Time Calculator component periodically recalculates the
estimated start time for all the jobs in the
OpCon daily tables. Following its
calculations, this service updates the database. For additional
information, refer to [SMA Start Time Calculator](../Server-Programs/SMA-Start-Time-Calculator.md){.MCXref
.xref} in the **Server Programs** online help.
:::

 

