---
lang: en-us
title: Automatic License Notifications
viewport: width=device-width, initial-scale=1.0
---

#  Automatic License Notifications

The Automatic License Notifications category contains settings to
determine if and how the SAM will send automatic license notifications.

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [[SMA Technologies]{.GeneralCompanyName} [strongly recommends]{.ul} enabling automatic license notifications. If for any reason the license is compromised and this feature is not enabled, only SAM Critical log will report the problem. Notifying [SMA Technologies]{.GeneralCompanyName} and local OpCon administrators automatically will ensure action can be taken before the license expires.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

+-------------------+-----------+---------------+-------------------+
| Option Parameter  | Default   | Dynamic (Y/N) | Description       |
+===================+:=========:+:=============:+===================+
| [Send Email to    | Disabled  | Yes           | -   This          | | SMA               |           |               |     parameter     |
| Off               |           |               |     determines if |
| ice]{.GeneralSend |           |               |     SAM will      |
| EmailtoSMAOffice} |           |               |     automatically |
|                   |           |               |     send email    |
|                   |           |               |     notifications |
|                   |           |               |     to            |
|                   |           |               |     [(Undefined   | |                   |           |               |     variable:     |
|                   |           |               |     General.Comp  |
|                   |           |               | anyNameFullNameAn |
|                   |           |               | Lowercase)]{.Gene |
|                   |           |               | ralCompanyNameFul |
|                   |           |               | lNameAnLowercase} |
|                   |           |               |     office when:  |
|                   |           |               |     -   The       |
|                   |           |               |         license   |
|                   |           |               |         is        |
|                   |           |               |         expiring  |
|                   |           |               |     -   At the    |
|                   |           |               |         beginning |
|                   |           |               |         of the    |
|                   |           |               |         month,    |
|                   |           |               |         the task  |
|                   |           |               |         count     |
|                   |           |               |         report is |
|                   |           |               |         due for   |
|                   |           |               |         Task      |
|                   |           |               |         Based     |
|                   |           |               |         licensed  |
|                   |           |               |                   |
|                   |           |               |        customers. |
|                   |           |               | -   The value of  |
|                   |           |               |     Disabled will |
|                   |           |               |     disable the   |
|                   |           |               |     SAM from      |
|                   |           |               |     automatically |
|                   |           |               |     sending email |
|                   |           |               |     to [SMA       | |                   |           |               |     T             |
|                   |           |               | echnologies]{.Gen |
|                   |           |               | eralCompanyName}. |
|                   |           |               |     Instead, the  |
|                   |           |               |     SAM will      |
|                   |           |               |     write the     |
|                   |           |               |     information   |
|                   |           |               |     to the        |
|                   |           |               |     SAM.log and   |
|                   |           |               |     Critical.log  |
|                   |           |               |     files.        |
|                   |           |               | -   To enable     |
|                   |           |               |     this option,  |
|                   |           |               |     choose the    |
|                   |           |               |     [SMA          | |                   |           |               |                   |
|                   |           |               | Technologies]{.Ge |
|                   |           |               | neralCompanyName} |
|                   |           |               |     Office that   |
|                   |           |               |     provides      |
|                   |           |               |     sales and     |
|                   |           |               |     support for   |
|                   |           |               |     this site.    |
|                   |           |               | -   Valid values  |
|                   |           |               |     include:      |
|                   |           |               |     -   Disabled  |
|                   |           |               |     -   [SMA      | |                   |           |               |                   |
|                   |           |               |   France]{.Genera |
|                   |           |               | lSMAOfficeFrance} |
|                   |           |               |     -   [SMA      | |                   |           |               |                   |
|                   |           |               |   Europe]{.Genera |
|                   |           |               | lSMAOfficeEurope} |
|                   |           |               |     -   [SMA      | |                   |           |               |         USA]{.Gen |
|                   |           |               | eralSMAOfficeUSA} |
+-------------------+-----------+---------------+-------------------+
| Send Email Cc     | \<Blank\> | Yes           | -   For all       |
|                   |           |               |     customers,    |
|                   |           |               |     this          |
|                   |           |               |     parameter     |
|                   |           |               |     configures    |
|                   |           |               |     the list of   |
|                   |           |               |     email         |
|                   |           |               |     addresses     |
|                   |           |               |     that will be  |
|                   |           |               |     copied when   |
|                   |           |               |     the SAM       |
|                   |           |               |     automatically |
|                   |           |               |     sends license |
|                   |           |               |     expiration    |
|                   |           |               |     notices.      |
|                   |           |               | -   For customers |
|                   |           |               |     with a        |
|                   |           |               |     Task-based    |
|                   |           |               |     license, this |
|                   |           |               |     parameter     |
|                   |           |               |     also          |
|                   |           |               |     configures    |
|                   |           |               |     the list of   |
|                   |           |               |     email         |
|                   |           |               |     addresses     |
|                   |           |               |     that will be  |
|                   |           |               |     copied when   |
|                   |           |               |     SAM           |
|                   |           |               |     automatically |
|                   |           |               |     sends the     |
|                   |           |               |     license       |
|                   |           |               |     notification  |
|                   |           |               |     at the        |
|                   |           |               |     beginning of  |
|                   |           |               |     each month to |
|                   |           |               |     [SMA          | |                   |           |               |     T             |
|                   |           |               | echnologies]{.Gen |
|                   |           |               | eralCompanyName}. |
|                   |           |               | -   Enter one or  |
|                   |           |               |     more SMTP     |
|                   |           |               |     email         |
|                   |           |               |     addresses     |
|                   |           |               |     separated by  |
|                   |           |               |     semicolons    |
|                   |           |               |     (;).          |
+-------------------+-----------+---------------+-------------------+
| Encrypt Task      | False     | Yes           | -   For customers |
| License Report    |           |               |     with a        |
|                   |           |               |     Task-based    |
|                   |           |               |     license, this |
|                   |           |               |     parameter     |
|                   |           |               |     determines if |
|                   |           |               |     the SAM will  |
|                   |           |               |     encrypt the   |
|                   |           |               |     data for the  |
|                   |           |               |     license       |
|                   |           |               |     reports.      |
|                   |           |               | -   Valid values  |
|                   |           |               |     include       |
|                   |           |               |     True and      |
|                   |           |               |     False.        |
|                   |           |               |     -   If False, |
|                   |           |               |         the SAM   |
|                   |           |               |         will      |
|                   |           |               |         write the |
|                   |           |               |         Task      |
|                   |           |               |         License   |
|                   |           |               |                   |
|                   |           |               |       information |
|                   |           |               |         in clear  |
|                   |           |               |         text.     |
|                   |           |               |     -   If True,  |
|                   |           |               |         the SAM   |
|                   |           |               |         will      |
|                   |           |               |         write the |
|                   |           |               |         Task      |
|                   |           |               |         License   |
|                   |           |               |         Report    |
|                   |           |               |                   |
|                   |           |               |       information |
|                   |           |               |         with      |
|                   |           |               |                   |
|                   |           |               |       encryption. |
|                   |           |               |         Only [SMA | |                   |           |               |                   |
|                   |           |               | Technologies]{.Ge |
|                   |           |               | neralCompanyName} |
|                   |           |               |         will be   |
|                   |           |               |         able to   |
|                   |           |               |         decrypt   |
|                   |           |               |         and read  |
|                   |           |               |         the       |
|                   |           |               |                   |
|                   |           |               |      information. |
+-------------------+-----------+---------------+-------------------+

: Option Parameters: Automatic License Notifications
:::

 

