---
lang: en-us
title: Licensing
viewport: width=device-width, initial-scale=1.0
---

# Licensing

[SMA Technologies]{.GeneralCompanyName} provides a license file during installation and maintenance to enable SAM; however, if the license
expires, the SAM enters Emergency Mode to allow normal functioning for a
short time. For instructions on obtaining a new license file, refer to
the [Request a New License File from SMA Technologies](Schedule-Activity-Monitor.md#Request_a_New_License_File_from_SMA){.MCXref
.xref} procedure in **Schedule Activity Monitor** topic.

 

The license file contains general information about the license and
Product Support information.

-   The license defines the Customer Name/ID, License Create Date, and
    Expiration for the software.
-   Product Support defines the date though which you will be able to
    receive paid [SMA Technologies]{.GeneralCompanyName} technical     support.

License notifications appear in the Enterprise Manager during login and
while using the Operation Views. Additionally, the SAM writes license
notifications to the SAM log file and/or the Critical log file depending
on the severity of the message. Notifications occur when:

-   The number of machines (LSAMs) exceeds the license limit.
-   A license is missing.
-   A license is invalid.
-   A license approaches its expiration date.
-   A license expires.
-   Product Support approaches its renewal date.
-   Product Support requires renewal.
-   A license file appears to be corrupt.

## License Types

[SMA Technologies]{.GeneralCompanyName} provides the following license types:

-   **Maximum Number of Machines by Platform**: This license type
    determines how many machines of the same OS Type can be
    communicating simultaneously with the SAM. An unlimited number of
    tasks are allowed in this license.
-   **Maximum Number of Tasks by Platform**: This license type
    determines how many tasks on the same OS Type can be run during a
    month. Customers using this license type must send a task report for
    the previous month on the first day of each month. Customers can use
    one of the following options to send the task report:
    -   Allow the SAM to automatically send the task report to [SMA         Technologies]{.GeneralCompanyName} at the beginning of each
        month. For information on configuring this option, refer to
        [Change the ocadm Password and Configure SAM         Options](../Installation/OpCon-Server-Configuration.md#Change_the_ocadm_Password_and_Configure_SAM_Options){.MCXref
        .xref} in the **OpCon Installation** online help.
    -   Manually send the SAM log to [SMA         Technologies]{.GeneralCompanyName} at the beginning of each
        month. The first log file for SAM on the first day of each month
        contains the task report. For steps to send the log file, follow
        the procedure below.

[]{#Manually_Send_the_Task_Report}[Manually Send the Task Report]{.ul} 
On the first day of each month, find the first SAM.log for that day.

+----------------------------------+----------------------------------+
| ![White pencil/paper icon on     | **NOTE:** [If the log has not    | | gray circular                    | yet been archived, the file will |
| background](../.                 | be in the \<Output               |
| ./Resources/Images/note-icon(48x | Directory\>\\SAM\\Log\\          |
| 48).png "Note icon") | directory. If the file has been  |
|                                  | archived, look in the archives   |
|                                  | for the file. For more           |
|                                  | information, refer to [Log       | |                                  | Arc                              |
|                                  | hiving](Logging.md#Log){.MCXref |
|                                  | .xref}.]             |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [ The Output Directory was       | |                                  | configured during installation.  |
|                                  | For more information, refer to   |
|                                  | [File                            | |                                  | Locations](../Concep             |
|                                  | ts/File-Locations.md){.MCXref |
|                                  | .xref} in the **Concepts**       |
|                                  | online help.]        |
+----------------------------------+----------------------------------+

Open the SAM.log file and confirm that the following line appears in the
file:\
**Task Report for** *Licence Key Information* **Period =** *Month Name*.

If the log file does not contain the task report, contact [SMA Technologies]{.GeneralCompanyName} Support for assistance.

If the log file does contain the task report, create a new email:

In the **To**: line, enter the license address for your [SMA Technologies]{.GeneralCompanyName} sales and support office.

i.  For [SMA Technologies]{.GeneralCompanyName} Europe, use     <license-eu@smatechnologies.com>.
ii. For [SMA Technologies]{.GeneralCompanyName} France, use     <license-fr@smatechnologies.com>.
iii. For [SMA Technologies]{.GeneralCompanyName} USA, use      <license@smatechnologies.com>.

In the **Cc**: line, copy any address in your organization that should
receive a copy.

Attach the SAM.log file to the email.

Send the email.
:::

 

