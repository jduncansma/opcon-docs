---
lang: en-us
title: OpCon Job Names
viewport: width=device-width, initial-scale=1.0
---

#  OpCon Job Names

While most jobs in Schedule Operations appear as the original job name,
there are features that cause OpCon to add
extra characters to the name automatically.

-   Multi-Instance Jobs
-   Jobs Run on Each Machine in a Group

## Multi-Instance Jobs

When OpCon adds additional copies of a
multi-instance job to the Daily schedules, the naming convention depends
on whether Job Instance properties were supplied.

 

If Job Instance properties are not supplied,
OpCon appends the instance number to the job
name by adding a dollar sign followed by a four digit number (\$XXXX).
Each time the same job is add this way, the number increments by one. If
Job Instance properties are supplied, OpCon
appends the value of the first property to the job name. Refer to
[Defining Properties for Multi-Instance Jobs](../UI/Enterprise-Manager/Defining-Properties-for-Multi-Instance-Jobs.md){.MCXref
.xref} in the **Enterprise Manager** online help:

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** The following event | | circular                         | adds a job to the Daily schedule |
| background](../../Reso           | using only the required          |
| urces/Images/example-icon(48x48) | parameters for the event. The    |
| .png "Example icon") | job \"MyJobName\" is configured  |
|                                  | as a multi-instance job.         |
|                                  |                                  |
|                                  | \                                |
|                                  | $JOB:ADD,\[\[\$DATE\]\],MySchedu | |                                  | leName,MyJobName,MyFrequencyName |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | When the same event is submitted |
|                                  | three times,                     |
|                                  | OpCon |
|                                  | creates the following job names  |
|                                  | in Schedule Operations:          |
|                                  |                                  |
|                                  | -   MyJobName                    |
|                                  | -   MyJobName\$0002              |
|                                  | -   MyJobName\$0003              |
+----------------------------------+----------------------------------+

 

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If an additional request for a job comes in and would create a duplicate name even with the first property value, the SAM appends the instance number to the job name by adding a dollar sign followed by a four-digit number (\$XXXX).]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** The following event | | circular                         | adds a job to the schedule while |
| background](../../Reso           | defining Job Instance properties |
| urces/Images/example-icon(48x48) | called FileName (with a value of |
| .png "Example icon") | abc.txt) and NumRecs (with a     |
|                                  | value of 100). The job           |
|                                  | \"MyJobName\" is configured as a |
|                                  | multi-instance job.              |
|                                  |                                  |
|                                  | \$JOB:ADD,\[\[\$DATE\]\],MySch   | |                                  | eduleName,MyJobName,MyFrequencyN |
|                                  | ame,FileName=abc.txt;NumRecs=100 |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | When                             |
|                                  | OpCon |
|                                  | creates the job in the Daily     |
|                                  | tables, it will name the job:    |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | MyJobName_abc                    |
+----------------------------------+----------------------------------+

## Jobs Run on Each Machine in a Group

When a job is configured to *Run on Each Machine* in a machine group at
the time the job builds into the Daily schedules,
OpCon creates one copy of the job for each
machine in the group. Refer to [Adding Jobs](../UI/Enterprise-Manager/Adding-Jobs.md) in
the **Enterprise Manager** online help. Each copy of the job is named by
adding the machine name using the following syntax:

JobName_MachineName

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** A machine group     | | circular                         | named WindowsMachines contains   |
| background](../../Reso           | three machines named Saturn,     |
| urces/Images/example-icon(48x48) | Neptune, and Mars. A job named   |
| .png "Example icon") | MyJobName is configured to Run   |
|                                  | on Each Machine in the           |
|                                  | WindowsMachines group. When      |
|                                  | MyJobName qualifies for a Daily  |
|                                  | schedule,                        |
|                                  | OpCon |
|                                  | creates the following job names: |
|                                  |                                  |
|                                  | -   MyJobName_Saturn             |
|                                  | -   MyJobName_Neptune            |
|                                  | -   MyJobName_Mars               |
+----------------------------------+----------------------------------+
:::

 

