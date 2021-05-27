---
lang: en-us
title: SMTP Server Settings
viewport: width=device-width, initial-scale=1.0
---

#  SMTP Server Settings

The SMTP Server Settings category contains configuration options the SMA
Notify Handler will use to send email and/or SMS notifications.

+-------------------+-----------+---------------+-------------------+
| Option Parameter  | Default   | Dynamic (Y/N) | Description       |
+===================+:=========:+:=============:+===================+
| JORS Attachment   | 120       | Y             | -   Defines the   |
| Timeout           |           |               |     number of     |
|                   |           |               |     seconds the   |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler       |
|                   |           |               |     should wait   |
|                   |           |               |     for an        |
|                   |           |               |     attachment to |
|                   |           |               |     return from a |
|                   |           |               |     JORS request. |
|                   |           |               | -   Valid values  |
|                   |           |               |     range from 60 |
|                   |           |               |     to 3600       |
|                   |           |               |     seconds.      |
+-------------------+-----------+---------------+-------------------+
| []{#Authenticatio | \<blank\> | Y             | -   Defines the   | | n_User_(UNC_Acces |           |               |     Windows user  |
| s)}Authentication |           |               |     account the   |
| User (UNC Access) |           |               |     SMA Notify    |
|                   |           |               |     Handler will  |
|                   |           |               |     use to gain   |
|                   |           |               |     access to     |
|                   |           |               |     machines and  |
|                   |           |               |     UNC paths on  |
|                   |           |               |     the network.  |
|                   |           |               | -   This user is  |
|                   |           |               |     required if   |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler has   |
|                   |           |               |     to send Email |
|                   |           |               |     attachments   |
|                   |           |               |     from network  |
|                   |           |               |     shares.       |
|                   |           |               | -   This user is  |
|                   |           |               |     required if   |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler will  |
|                   |           |               |     send Network  |
|                   |           |               |     Message       |
|                   |           |               |                   |
|                   |           |               |    notifications. |
|                   |           |               |     Refer to      |
|                   |           |               |     [Sending      | |                   |           |               |     Network       |
|                   |           |               |     Messages](    |
|                   |           |               | ../UI/Enterprise% |
|                   |           |               | 20Manager/Sending |
|                   |           |               | -Network-Mess |
|                   |           |               | ages.md){.MCXref |
|                   |           |               |     .xref} in the |
|                   |           |               |     **Enterprise  |
|                   |           |               |     Manager**     |
|                   |           |               |     online help.  |
|                   |           |               | -   The user must |
|                   |           |               |     have          |
|                   |           |               |     privileges to |
|                   |           |               |     \"Read\" all  |
|                   |           |               |     network       |
|                   |           |               |     shares from   |
|                   |           |               |     which the SMA |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     pick up       |
|                   |           |               |     files. The    |
|                   |           |               |     user must     |
|                   |           |               |     also have     |
|                   |           |               |     \"Write\"     |
|                   |           |               |     privileges to |
|                   |           |               |     the \<Output  |
|                   |           |               |     Dire          |
|                   |           |               | ctory\>\\SAM\\Log |
|                   |           |               |     folder.       |
|                   |           |               |                   |
|                   |           |               | **Note:** The     |
|                   |           |               | Output Directory  |
|                   |           |               | was configured    |
|                   |           |               | during            |
|                   |           |               | installation. For |
|                   |           |               | more information, |
|                   |           |               | refer to [File    | |                   |           |               | Locati            |
|                   |           |               | ons](File-Locat |
|                   |           |               | ions.md){.MCXref |
|                   |           |               | .xref} in this    |
|                   |           |               | online help.      |
+-------------------+-----------+---------------+-------------------+
| []{#Authentica    | \<blank\> | Y             | -   Defines the   | | tion_Encrypted_Pa |           |               |     encrypted     |
| ssword_(UNC_Acces |           |               |     password for  |
| s)}Authentication |           |               |     the Windows   |
| Encrypted         |           |               |     user the SMA  |
| Password (UNC     |           |               |     Notify        |
| Access)           |           |               |     Handler will  |
|                   |           |               |     use to gain   |
|                   |           |               |     access to     |
|                   |           |               |     machines and  |
|                   |           |               |     UNC paths on  |
|                   |           |               |     the network.  |
|                   |           |               | -   This user is  |
|                   |           |               |     required if   |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler has   |
|                   |           |               |     to send Email |
|                   |           |               |     attachments   |
|                   |           |               |     from network  |
|                   |           |               |     shares.       |
|                   |           |               | -   This user is  |
|                   |           |               |     required if   |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler will  |
|                   |           |               |     send Network  |
|                   |           |               |     Message       |
|                   |           |               |                   |
|                   |           |               |    notifications. |
|                   |           |               |     Refer to      |
|                   |           |               |     [Sending      | |                   |           |               |     Network       |
|                   |           |               |     Messages](    |
|                   |           |               | ../UI/Enterprise% |
|                   |           |               | 20Manager/Sending |
|                   |           |               | -Network-Mess |
|                   |           |               | ages.md){.MCXref |
|                   |           |               |     .xref} in the |
|                   |           |               |     **Enterprise  |
|                   |           |               |     Manager**     |
|                   |           |               |     online help.  |
|                   |           |               | -   To encrypt    |
|                   |           |               |     the password  |
|                   |           |               |     manually, use |
|                   |           |               |     the Password  |
|                   |           |               |     encryption    |
|                   |           |               |     tool in the   |
|                   |           |               |     Enterprise    |
|                   |           |               |     Manager. Then |
|                   |           |               |     copy and      |
|                   |           |               |     paste the     |
|                   |           |               |     encrypted     |
|                   |           |               |     password for  |
|                   |           |               |     the value of  |
|                   |           |               |     this setting. |
|                   |           |               |     For more      |
|                   |           |               |     information,  |
|                   |           |               |     refer to      |
|                   |           |               |     [Encrypting   | |                   |           |               |                   |
|                   |           |               |    Passwords](../ |
|                   |           |               | UI/Enterprise-M |
|                   |           |               | anager/Menus.md# |
|                   |           |               | Encrypti){.MCXref |
|                   |           |               |     .xref} in the |
|                   |           |               |     **Enterprise  |
|                   |           |               |     Manager**     |
|                   |           |               |     online help.  |
+-------------------+-----------+---------------+-------------------+
| SMTP Server Name  | \<blank\> | Y             | -   Defines the   |
| (Primary Email)   |           |               |     name of the   |
|                   |           |               |     Primary SMTP  |
|                   |           |               |     server for    |
|                   |           |               |     sending       |
|                   |           |               |     email. If no  |
|                   |           |               |     SMS servers   |
|                   |           |               |     are defined,  |
|                   |           |               |     this server   |
|                   |           |               |     will also     |
|                   |           |               |     send SMS text |
|                   |           |               |     messages.     |
|                   |           |               | -   If the value  |
|                   |           |               |     is blank, the |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler       |
|                   |           |               |     cannot send   |
|                   |           |               |     email or text |
|                   |           |               |                   |
|                   |           |               |    notifications. |
|                   |           |               | -   Default:      |
|                   |           |               |     Blank         |
+-------------------+-----------+---------------+-------------------+
| SMTP Server Port  | 25        | Y             | -   Defines the   |
| (Primary Email)   |           |               |     server port   |
|                   |           |               |     that SMA      |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     use when      |
|                   |           |               |     sending email |
|                   |           |               |     through the   |
|                   |           |               |     Primary SMTP  |
|                   |           |               |     server.       |
|                   |           |               | -   The user can  |
|                   |           |               |     set the value |
|                   |           |               |     for this      |
|                   |           |               |     option.       |
|                   |           |               |     -   Valid     |
|                   |           |               |         values    |
|                   |           |               |         range     |
|                   |           |               |         from 0 to |
|                   |           |               |         9999, and |
|                   |           |               |         must be   |
|                   |           |               |         positive. |
|                   |           |               |     -   If no     |
|                   |           |               |                   |
|                   |           |               |      user-defined |
|                   |           |               |         value is  |
|                   |           |               |                   |
|                   |           |               |        specified, |
|                   |           |               |         then the  |
|                   |           |               |         default   |
|                   |           |               |         port (25) |
|                   |           |               |         will be   |
|                   |           |               |         used.     |
+-------------------+-----------+---------------+-------------------+
| SMTP Notification | noreply   | Y             | -   Defines the   |
| Address (Primary  |           |               |     email address |
| Email)            |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     use as the    |
|                   |           |               |     \"From\"      |
|                   |           |               |     address when  |
|                   |           |               |     sending       |
|                   |           |               |     E-mail or     |
|                   |           |               |     Text Messages |
|                   |           |               |     through the   |
|                   |           |               |     Primary Email |
|                   |           |               |     server.       |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires      |
|                   |           |               |                   |
|                   |           |               |   authentication, |
|                   |           |               |     this setting  |
|                   |           |               |     is ignored    |
|                   |           |               |     and the       |
|                   |           |               |     administrator |
|                   |           |               |     must          |
|                   |           |               |     configure the |
|                   |           |               |     SMTP          |
|                   |           |               |                   |
|                   |           |               |    Authentication |
|                   |           |               |     User and      |
|                   |           |               |     Password for  |
|                   |           |               |     the Primary   |
|                   |           |               |     Email server. |
|                   |           |               | -   If a value is |
|                   |           |               |     not           |
|                   |           |               |     specified,    |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     default to    |
|                   |           |               |     noreply.      |
|                   |           |               | -   Customers     |
|                   |           |               |     should        |
|                   |           |               |     specify an    |
|                   |           |               |     email address |
|                   |           |               |     consistent    |
|                   |           |               |     with their    |
|                   |           |               |     domain name.  |
|                   |           |               | -   The SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     not validate  |
|                   |           |               |     the email     |
|                   |           |               |     address       |
|                   |           |               |     specified; it |
|                   |           |               |     will only     |
|                   |           |               |     send the      |
|                   |           |               |     message with  |
|                   |           |               |     that \"From\" |
|                   |           |               |     address,      |
|                   |           |               |     leaving the   |
|                   |           |               |     validation up |
|                   |           |               |     to the SMTP   |
|                   |           |               |     server.       |
+-------------------+-----------+---------------+-------------------+
| SMTP              | \<blank\> | Y             | -   Defines an    |
| Authentication    |           |               |     email address |
| User (Primary     |           |               |     for           |
| Email)            |           |               |                   |
|                   |           |               |    authentication |
|                   |           |               |     to the        |
|                   |           |               |     Primary Email |
|                   |           |               |     SMTP server.  |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires      |
|                   |           |               |                   |
|                   |           |               |   authentication, |
|                   |           |               |     a value must  |
|                   |           |               |     specified     |
|                   |           |               |     here.         |
|                   |           |               | -   If a value is |
|                   |           |               |     not specified |
|                   |           |               |     when required |
|                   |           |               |     by the SMTP   |
|                   |           |               |     server, the   |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler will  |
|                   |           |               |     not be able   |
|                   |           |               |     to send       |
|                   |           |               |     emails or     |
|                   |           |               |     text          |
|                   |           |               |     messages.     |
|                   |           |               | -   Customers     |
|                   |           |               |     should        |
|                   |           |               |     specify an    |
|                   |           |               |     email address |
|                   |           |               |     consistent    |
|                   |           |               |     with their    |
|                   |           |               |     domain name.  |
|                   |           |               | -   The SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     not validate  |
|                   |           |               |     the email     |
|                   |           |               |     address       |
|                   |           |               |     specified; it |
|                   |           |               |     will only     |
|                   |           |               |     send the      |
|                   |           |               |     message with  |
|                   |           |               |     the user and  |
|                   |           |               |     password      |
|                   |           |               |     specified,    |
|                   |           |               |     leaving the   |
|                   |           |               |     validation up |
|                   |           |               |     to the SMTP   |
|                   |           |               |     server.       |
+-------------------+-----------+---------------+-------------------+
| SMTP              | \<blank\> | Y             | -   Defines the   |
| Authentication    |           |               |     password for  |
| Encrypted         |           |               |     the SMTP      |
| Password (Primary |           |               |                   |
| Email)            |           |               |    Authentication |
|                   |           |               |     User for the  |
|                   |           |               |     Primary Email |
|                   |           |               |     server.       |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires      |
|                   |           |               |                   |
|                   |           |               |   authentication, |
|                   |           |               |     a value must  |
|                   |           |               |     specified     |
|                   |           |               |     here that     |
|                   |           |               |     provides the  |
|                   |           |               |     encrypted     |
|                   |           |               |     password for  |
|                   |           |               |     the user.     |
|                   |           |               | -   To encrypt    |
|                   |           |               |     the password  |
|                   |           |               |     manually, use |
|                   |           |               |     the Password  |
|                   |           |               |     encryption    |
|                   |           |               |     tool in the   |
|                   |           |               |     Enterprise    |
|                   |           |               |     Manager. Then |
|                   |           |               |     copy and      |
|                   |           |               |     paste the     |
|                   |           |               |     encrypted     |
|                   |           |               |     password for  |
|                   |           |               |     the value of  |
|                   |           |               |     this setting. |
|                   |           |               |     For more      |
|                   |           |               |     information,  |
|                   |           |               |     refer to      |
|                   |           |               |     [Encrypting   | |                   |           |               |                   |
|                   |           |               |    Passwords](../ |
|                   |           |               | UI/Enterprise-M |
|                   |           |               | anager/Menus.md# |
|                   |           |               | Encrypti){.MCXref |
|                   |           |               |     .xref} in the |
|                   |           |               |     **Enterprise  |
|                   |           |               |     Manager**     |
|                   |           |               |     online help.  |
+-------------------+-----------+---------------+-------------------+
| SMTP              | False     | Y             | -   Determines if |
| Authentication    |           |               |     the SMA       |
| -Enable SSL       |           |               |     Notify        |
| (Primary Email)   |           |               |     Handler will  |
|                   |           |               |     use SSL       |
|                   |           |               |     encryption    |
|                   |           |               |     when          |
|                   |           |               |     connecting to |
|                   |           |               |     the Primary   |
|                   |           |               |     Email SMTP    |
|                   |           |               |     server.       |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires SSL  |
|                   |           |               |     Encryption,   |
|                   |           |               |     the value     |
|                   |           |               |     must be set   |
|                   |           |               |     to True.      |
+-------------------+-----------+---------------+-------------------+
| SMTP Total        | 10        | Y             | -   Determines    |
| Attachment Size   |           |               |     the maximum   |
| in MB (Primary    |           |               |     total of MB   |
| Email)            |           |               |     in the        |
|                   |           |               |     attachments   |
|                   |           |               |     for an email  |
|                   |           |               |     attachments   |
|                   |           |               |     notification  |
|                   |           |               |     from the      |
|                   |           |               |     Primary Email |
|                   |           |               |     SMTP server.  |
|                   |           |               | -   This value    |
|                   |           |               |     should match  |
|                   |           |               |     the limit set |
|                   |           |               |     by the SMTP   |
|                   |           |               |     server.       |
+-------------------+-----------+---------------+-------------------+
| SMTP Maximum      | 50        | Y             | -   Determines    |
| Number of         |           |               |     the maximum   |
| Attachments       |           |               |     number of     |
| (Primary Email)   |           |               |     attachments   |
|                   |           |               |     allowed per   |
|                   |           |               |     email on a    |
|                   |           |               |     notification  |
|                   |           |               |     from the      |
|                   |           |               |     Primary Email |
|                   |           |               |     SMTP server.  |
|                   |           |               | -   This value    |
|                   |           |               |     should match  |
|                   |           |               |     the limit set |
|                   |           |               |     by the SMTP   |
|                   |           |               |     server.       |
+-------------------+-----------+---------------+-------------------+
| SMTP Server Name  | \<blank\> | Y             | -   Defines the   |
| (Secondary Email) |           |               |     name of the   |
|                   |           |               |     Secondary     |
|                   |           |               |     SMTP server   |
|                   |           |               |     for sending   |
|                   |           |               |     email. If     |
|                   |           |               |     messages fail |
|                   |           |               |     to send       |
|                   |           |               |     through the   |
|                   |           |               |     Primary Email |
|                   |           |               |     server, the   |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler will  |
|                   |           |               |     attempt to    |
|                   |           |               |     send the      |
|                   |           |               |     message again |
|                   |           |               |     through the   |
|                   |           |               |     Secondary     |
|                   |           |               |     Email server. |
|                   |           |               |     If no SMS     |
|                   |           |               |     servers are   |
|                   |           |               |     defined, this |
|                   |           |               |     server will   |
|                   |           |               |     also serve as |
|                   |           |               |     a Secondary   |
|                   |           |               |     server to     |
|                   |           |               |     send SMS text |
|                   |           |               |     messages.     |
|                   |           |               | -   If the value  |
|                   |           |               |     is blank, the |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler will  |
|                   |           |               |     not attempt   |
|                   |           |               |     messages      |
|                   |           |               |     through a     |
|                   |           |               |     Secondary     |
|                   |           |               |     server.       |
|                   |           |               | -   Default:      |
|                   |           |               |     Blank         |
+-------------------+-----------+---------------+-------------------+
| SMTP Server Port  | 25        | Y             | -   Defines the   |
| (Secondary Email) |           |               |     server port   |
|                   |           |               |     that SMA      |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     use when      |
|                   |           |               |     sending email |
|                   |           |               |     through the   |
|                   |           |               |     Secondary     |
|                   |           |               |     SMTP server.  |
|                   |           |               | -   The user can  |
|                   |           |               |     set the value |
|                   |           |               |     for this      |
|                   |           |               |     option.       |
|                   |           |               |     -   Valid     |
|                   |           |               |         values    |
|                   |           |               |         range     |
|                   |           |               |         from 0 to |
|                   |           |               |         9999, and |
|                   |           |               |         must be   |
|                   |           |               |         positive. |
|                   |           |               |     -   If no     |
|                   |           |               |                   |
|                   |           |               |      user-defined |
|                   |           |               |         value is  |
|                   |           |               |                   |
|                   |           |               |        specified, |
|                   |           |               |         then the  |
|                   |           |               |         default   |
|                   |           |               |         port (25) |
|                   |           |               |         will be   |
|                   |           |               |         used.     |
+-------------------+-----------+---------------+-------------------+
| SMTP Notification | noreply   | Y             | -   Defines the   |
| Address           |           |               |     email address |
| (Secondary Email) |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     use as the    |
|                   |           |               |     \"From\"      |
|                   |           |               |     address when  |
|                   |           |               |     sending       |
|                   |           |               |     E-mail or     |
|                   |           |               |     Text Messages |
|                   |           |               |     through the   |
|                   |           |               |     Secondary     |
|                   |           |               |     Email server. |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires      |
|                   |           |               |                   |
|                   |           |               |   authentication, |
|                   |           |               |     this setting  |
|                   |           |               |     is ignored    |
|                   |           |               |     and the       |
|                   |           |               |     administrator |
|                   |           |               |     must          |
|                   |           |               |     configure the |
|                   |           |               |     SMTP          |
|                   |           |               |                   |
|                   |           |               |    Authentication |
|                   |           |               |     User and      |
|                   |           |               |     Password for  |
|                   |           |               |     the Secondary |
|                   |           |               |     Email server. |
|                   |           |               | -   If a value is |
|                   |           |               |     not           |
|                   |           |               |     specified,    |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     default to    |
|                   |           |               |     noreply.      |
|                   |           |               | -   Customers     |
|                   |           |               |     should        |
|                   |           |               |     specify an    |
|                   |           |               |     email address |
|                   |           |               |     consistent    |
|                   |           |               |     with their    |
|                   |           |               |     domain name.  |
|                   |           |               | -   The SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     not validate  |
|                   |           |               |     the email     |
|                   |           |               |     address       |
|                   |           |               |     specified; it |
|                   |           |               |     will only     |
|                   |           |               |     send the      |
|                   |           |               |     message with  |
|                   |           |               |     that \"From\" |
|                   |           |               |     address,      |
|                   |           |               |     leaving the   |
|                   |           |               |     validation up |
|                   |           |               |     to the SMTP   |
|                   |           |               |     server.       |
+-------------------+-----------+---------------+-------------------+
| SMTP              | \<blank\> | Y             | -   Defines an    |
| Authentication    |           |               |     email address |
| User (Secondary   |           |               |     for           |
| Email)            |           |               |                   |
|                   |           |               |    authentication |
|                   |           |               |     to the        |
|                   |           |               |     Secondary     |
|                   |           |               |     Email SMTP    |
|                   |           |               |     server.       |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires      |
|                   |           |               |                   |
|                   |           |               |   authentication, |
|                   |           |               |     a value must  |
|                   |           |               |     specified     |
|                   |           |               |     here.         |
|                   |           |               | -   If a value is |
|                   |           |               |     not specified |
|                   |           |               |     when required |
|                   |           |               |     by the SMTP   |
|                   |           |               |     server, the   |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler will  |
|                   |           |               |     not be able   |
|                   |           |               |     to send       |
|                   |           |               |     emails or     |
|                   |           |               |     text messages |
|                   |           |               |     through the   |
|                   |           |               |     Secondary     |
|                   |           |               |     server.       |
|                   |           |               | -   Customers     |
|                   |           |               |     should        |
|                   |           |               |     specify an    |
|                   |           |               |     email address |
|                   |           |               |     consistent    |
|                   |           |               |     with their    |
|                   |           |               |     domain name.  |
|                   |           |               | -   The SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     not validate  |
|                   |           |               |     the email     |
|                   |           |               |     address       |
|                   |           |               |     specified; it |
|                   |           |               |     will only     |
|                   |           |               |     send the      |
|                   |           |               |     message with  |
|                   |           |               |     the user and  |
|                   |           |               |     password      |
|                   |           |               |     specified,    |
|                   |           |               |     leaving the   |
|                   |           |               |     validation up |
|                   |           |               |     to the SMTP   |
|                   |           |               |     server.       |
+-------------------+-----------+---------------+-------------------+
| SMTP              | \<blank\> | Y             | -   Defines the   |
| Authentication    |           |               |     password for  |
| Encrypted         |           |               |     the SMTP      |
| Password          |           |               |                   |
| (Secondary Email) |           |               |    Authentication |
|                   |           |               |     User for the  |
|                   |           |               |     Secondary     |
|                   |           |               |     Email server. |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires      |
|                   |           |               |                   |
|                   |           |               |   authentication, |
|                   |           |               |     a value must  |
|                   |           |               |     specified     |
|                   |           |               |     here that     |
|                   |           |               |     provides the  |
|                   |           |               |     encrypted     |
|                   |           |               |     password for  |
|                   |           |               |     the user.     |
|                   |           |               | -   To encrypt    |
|                   |           |               |     the password  |
|                   |           |               |     manually, use |
|                   |           |               |     the Password  |
|                   |           |               |     encryption    |
|                   |           |               |     tool in the   |
|                   |           |               |     Enterprise    |
|                   |           |               |     Manager. Then |
|                   |           |               |     copy and      |
|                   |           |               |     paste the     |
|                   |           |               |     encrypted     |
|                   |           |               |     password for  |
|                   |           |               |     the value of  |
|                   |           |               |     this setting. |
|                   |           |               |     For more      |
|                   |           |               |     information,  |
|                   |           |               |     refer to      |
|                   |           |               |     [Encrypting   | |                   |           |               |                   |
|                   |           |               |    Passwords](../ |
|                   |           |               | UI/Enterprise-M |
|                   |           |               | anager/Menus.md# |
|                   |           |               | Encrypti){.MCXref |
|                   |           |               |     .xref} in the |
|                   |           |               |     **Enterprise  |
|                   |           |               |     Manager**     |
|                   |           |               |     online help.  |
+-------------------+-----------+---------------+-------------------+
| SMTP              | False     | Y             | -   Determines if |
| Authentication    |           |               |     the SMA       |
| -Enable SSL       |           |               |     Notify        |
| (Secondary Email) |           |               |     Handler will  |
|                   |           |               |     use SSL       |
|                   |           |               |     encryption    |
|                   |           |               |     when          |
|                   |           |               |     connecting to |
|                   |           |               |     the Secondary |
|                   |           |               |     Email SMTP    |
|                   |           |               |     server.       |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires SSL  |
|                   |           |               |     Encryption,   |
|                   |           |               |     the value     |
|                   |           |               |     must be set   |
|                   |           |               |     to True.      |
+-------------------+-----------+---------------+-------------------+
| SMTP Total        | 10        | Y             | -   Determines    |
| Attachment Size   |           |               |     the maximum   |
| in MB (Secondary  |           |               |     total of MB   |
| Email)            |           |               |     in the        |
|                   |           |               |     attachments   |
|                   |           |               |     for an email  |
|                   |           |               |     attachments   |
|                   |           |               |     notification  |
|                   |           |               |     from the      |
|                   |           |               |     Secondary     |
|                   |           |               |     Email SMTP    |
|                   |           |               |     server.       |
|                   |           |               | -   This value    |
|                   |           |               |     should match  |
|                   |           |               |     the limit set |
|                   |           |               |     by the SMTP   |
|                   |           |               |     Server.       |
+-------------------+-----------+---------------+-------------------+
| SMTP Maximum      | 50        | Y             | -   Determines    |
| Number of         |           |               |     the maximum   |
| Attachments       |           |               |     number of     |
| (Secondary Email) |           |               |     attachments   |
|                   |           |               |     allowed per   |
|                   |           |               |     email on a    |
|                   |           |               |     notification  |
|                   |           |               |     from the      |
|                   |           |               |     Secondary     |
|                   |           |               |     Email SMTP    |
|                   |           |               |     server.       |
|                   |           |               | -   This value    |
|                   |           |               |     should match  |
|                   |           |               |     the limit set |
|                   |           |               |     by the SMTP   |
|                   |           |               |     server.       |
+-------------------+-----------+---------------+-------------------+
| SMTP Server Name  | \<blank\> | Y             | -   Defines the   |
| (Primary SMS)     |           |               |     name of the   |
|                   |           |               |     Primary SMTP  |
|                   |           |               |     server for    |
|                   |           |               |     sending SMS   |
|                   |           |               |     text          |
|                   |           |               |     messages. If  |
|                   |           |               |     this server   |
|                   |           |               |     is defined,   |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     not only      |
|                   |           |               |     attempt SMS   |
|                   |           |               |     messages      |
|                   |           |               |     through the   |
|                   |           |               |     defined SMS   |
|                   |           |               |     server(s)     |
|                   |           |               |     (the email    |
|                   |           |               |     servers will  |
|                   |           |               |     only be used  |
|                   |           |               |     for email     |
|                   |           |               |     messages).    |
|                   |           |               | -   If the value  |
|                   |           |               |     is blank, the |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler will  |
|                   |           |               |     try to use    |
|                   |           |               |     the Primary   |
|                   |           |               |     Email SMTP    |
|                   |           |               |     server for    |
|                   |           |               |     SMS text      |
|                   |           |               |     messages.     |
|                   |           |               | -   Default:      |
|                   |           |               |     Blank         |
+-------------------+-----------+---------------+-------------------+
| SMTP Server Port  | 20        | Y             | -   Defines the   |
| (Primary SMS)     |           |               |     server port   |
|                   |           |               |     that SMA      |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     use when      |
|                   |           |               |     sending SMS   |
|                   |           |               |     text messages |
|                   |           |               |     through the   |
|                   |           |               |     Primary SMS   |
|                   |           |               |     server.       |
|                   |           |               | -   The user can  |
|                   |           |               |     set the value |
|                   |           |               |     for this      |
|                   |           |               |     option.       |
|                   |           |               |     -   Valid     |
|                   |           |               |         values    |
|                   |           |               |         range     |
|                   |           |               |         from 0 to |
|                   |           |               |         9999, and |
|                   |           |               |         must be   |
|                   |           |               |         positive. |
|                   |           |               |     -   If no     |
|                   |           |               |                   |
|                   |           |               |      user-defined |
|                   |           |               |         value is  |
|                   |           |               |                   |
|                   |           |               |        specified, |
|                   |           |               |         then the  |
|                   |           |               |         default   |
|                   |           |               |         port (20) |
|                   |           |               |         will be   |
|                   |           |               |         used.     |
+-------------------+-----------+---------------+-------------------+
| SMTP Notification | noreply   | Y             | -   Defines the   |
| Address (Primary  |           |               |     email address |
| SMS)              |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     use as the    |
|                   |           |               |     \"From\"      |
|                   |           |               |     address when  |
|                   |           |               |     sending SMS   |
|                   |           |               |     Text Messages |
|                   |           |               |     through the   |
|                   |           |               |     Primary SMS   |
|                   |           |               |     server.       |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires      |
|                   |           |               |                   |
|                   |           |               |   authentication, |
|                   |           |               |     this setting  |
|                   |           |               |     is ignored    |
|                   |           |               |     and the       |
|                   |           |               |     administrator |
|                   |           |               |     must          |
|                   |           |               |     configure the |
|                   |           |               |     SMTP          |
|                   |           |               |                   |
|                   |           |               |    Authentication |
|                   |           |               |     User and      |
|                   |           |               |     Password for  |
|                   |           |               |     the Primary   |
|                   |           |               |     SMS server.   |
|                   |           |               | -   If a value is |
|                   |           |               |     not           |
|                   |           |               |     specified,    |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     default to    |
|                   |           |               |     noreply.      |
|                   |           |               | -   Customers     |
|                   |           |               |     should        |
|                   |           |               |     specify an    |
|                   |           |               |     email address |
|                   |           |               |     consistent    |
|                   |           |               |     with their    |
|                   |           |               |     domain name.  |
|                   |           |               | -   The SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     not validate  |
|                   |           |               |     the email     |
|                   |           |               |     address       |
|                   |           |               |     specified; it |
|                   |           |               |     will only     |
|                   |           |               |     send the      |
|                   |           |               |     message with  |
|                   |           |               |     that \"From\" |
|                   |           |               |     address,      |
|                   |           |               |     leaving the   |
|                   |           |               |     validation up |
|                   |           |               |     to the SMTP   |
|                   |           |               |     server.       |
+-------------------+-----------+---------------+-------------------+
| SMTP              | \<blank\> | Y             | -   Defines an    |
| Authentication    |           |               |     email address |
| User (Primary     |           |               |     for           |
| SMS)              |           |               |                   |
|                   |           |               |    authentication |
|                   |           |               |     to the        |
|                   |           |               |     Primary SMS   |
|                   |           |               |     SMTP server.  |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires      |
|                   |           |               |                   |
|                   |           |               |   authentication, |
|                   |           |               |     a value must  |
|                   |           |               |     specified     |
|                   |           |               |     here.         |
|                   |           |               | -   If a value is |
|                   |           |               |     not specified |
|                   |           |               |     when required |
|                   |           |               |     by the SMTP   |
|                   |           |               |     server, the   |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler will  |
|                   |           |               |     not be able   |
|                   |           |               |     to send SMS   |
|                   |           |               |     text          |
|                   |           |               |     messages.     |
|                   |           |               | -   Customers     |
|                   |           |               |     should        |
|                   |           |               |     specify an    |
|                   |           |               |     email address |
|                   |           |               |     consistent    |
|                   |           |               |     with their    |
|                   |           |               |     domain name.  |
|                   |           |               | -   The SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     not validate  |
|                   |           |               |     the email     |
|                   |           |               |     address       |
|                   |           |               |     specified; it |
|                   |           |               |     will only     |
|                   |           |               |     send the      |
|                   |           |               |     message with  |
|                   |           |               |     the user and  |
|                   |           |               |     password      |
|                   |           |               |     specified,    |
|                   |           |               |     leaving the   |
|                   |           |               |     validation up |
|                   |           |               |     to the SMTP   |
|                   |           |               |     server.       |
+-------------------+-----------+---------------+-------------------+
| SMTP              | \<blank\> | Y             | -   Defines the   |
| Authentication    |           |               |     password for  |
| Encrypted         |           |               |     the SMTP      |
| Password (Primary |           |               |                   |
| SMS)              |           |               |    Authentication |
|                   |           |               |     User for the  |
|                   |           |               |     Primary SMS   |
|                   |           |               |     server.       |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires      |
|                   |           |               |                   |
|                   |           |               |   authentication, |
|                   |           |               |     a value must  |
|                   |           |               |     specified     |
|                   |           |               |     here that     |
|                   |           |               |     provides the  |
|                   |           |               |     encrypted     |
|                   |           |               |     password for  |
|                   |           |               |     the user.     |
|                   |           |               | -   To encrypt    |
|                   |           |               |     the password  |
|                   |           |               |     manually, use |
|                   |           |               |     the Password  |
|                   |           |               |     encryption    |
|                   |           |               |     tool in the   |
|                   |           |               |     Enterprise    |
|                   |           |               |     Manager. Then |
|                   |           |               |     copy and      |
|                   |           |               |     paste the     |
|                   |           |               |     encrypted     |
|                   |           |               |     password for  |
|                   |           |               |     the value of  |
|                   |           |               |     this setting. |
|                   |           |               |     For more      |
|                   |           |               |     information,  |
|                   |           |               |     refer         |
|                   |           |               |     [Encrypting   | |                   |           |               |                   |
|                   |           |               |    Passwords](../ |
|                   |           |               | UI/Enterprise-M |
|                   |           |               | anager/Menus.md# |
|                   |           |               | Encrypti){.MCXref |
|                   |           |               |     .xref} in the |
|                   |           |               |     **Enterprise  |
|                   |           |               |     Manager**     |
|                   |           |               |     online help.  |
+-------------------+-----------+---------------+-------------------+
| SMTP              | False     | Y             | -   Determines if |
| Authentication    |           |               |     the SMA       |
| -Enable SSL       |           |               |     Notify        |
| (Primary SMS)     |           |               |     Handler will  |
|                   |           |               |     use SSL       |
|                   |           |               |     encryption    |
|                   |           |               |     when          |
|                   |           |               |     connecting to |
|                   |           |               |     the Primary   |
|                   |           |               |     SMS SMTP      |
|                   |           |               |     server.       |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires SSL  |
|                   |           |               |     Encryption,   |
|                   |           |               |     the value     |
|                   |           |               |     must be set   |
|                   |           |               |     to True.      |
+-------------------+-----------+---------------+-------------------+
| SMTP Server Name  | \<blank\> | Y             | -   Defines the   |
| (Secondary SMS)   |           |               |     name of the   |
|                   |           |               |     Secondary     |
|                   |           |               |     SMTP server   |
|                   |           |               |     for sending   |
|                   |           |               |     SMS text      |
|                   |           |               |     messages. If  |
|                   |           |               |     messages fail |
|                   |           |               |     to send       |
|                   |           |               |     through the   |
|                   |           |               |     Primary SMS   |
|                   |           |               |     server, the   |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler will  |
|                   |           |               |     attempt to    |
|                   |           |               |     send the      |
|                   |           |               |     message again |
|                   |           |               |     through the   |
|                   |           |               |     Secondary SMS |
|                   |           |               |     server. If    |
|                   |           |               |     the Primary   |
|                   |           |               |     SMS server is |
|                   |           |               |     not defined,  |
|                   |           |               |     this server   |
|                   |           |               |     will send SMS |
|                   |           |               |     text          |
|                   |           |               |     messages.     |
|                   |           |               | -   If the value  |
|                   |           |               |     is blank, the |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler will  |
|                   |           |               |     not attempt   |
|                   |           |               |     messages      |
|                   |           |               |     through a     |
|                   |           |               |     Secondary     |
|                   |           |               |     server.       |
|                   |           |               | -   Default:      |
|                   |           |               |     Blank         |
+-------------------+-----------+---------------+-------------------+
| SMTP Server Port  | 20        | Y             | -   Defines the   |
| (Secondary SMS)   |           |               |     server port   |
|                   |           |               |     that SMA      |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     use when      |
|                   |           |               |     sending SMS   |
|                   |           |               |     text messages |
|                   |           |               |     through the   |
|                   |           |               |     Secondary SMS |
|                   |           |               |     server.       |
|                   |           |               | -   The user can  |
|                   |           |               |     set the value |
|                   |           |               |     for this      |
|                   |           |               |     option.       |
|                   |           |               |     -   Valid     |
|                   |           |               |         values    |
|                   |           |               |         range     |
|                   |           |               |         from 0 to |
|                   |           |               |         9999, and |
|                   |           |               |         must be   |
|                   |           |               |         positive. |
|                   |           |               |     -   If no     |
|                   |           |               |                   |
|                   |           |               |      user-defined |
|                   |           |               |         value is  |
|                   |           |               |                   |
|                   |           |               |        specified, |
|                   |           |               |         then the  |
|                   |           |               |         default   |
|                   |           |               |         port (20) |
|                   |           |               |         will be   |
|                   |           |               |         used.     |
+-------------------+-----------+---------------+-------------------+
| SMTP Notification | noreply   | Y             | -   Defines the   |
| Address           |           |               |     email address |
| (Secondary SMS)   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     use as the    |
|                   |           |               |     \"From\"      |
|                   |           |               |     address when  |
|                   |           |               |     sending Text  |
|                   |           |               |     Messages      |
|                   |           |               |     through the   |
|                   |           |               |     Secondary SMS |
|                   |           |               |     server.       |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires      |
|                   |           |               |                   |
|                   |           |               |   authentication, |
|                   |           |               |     this setting  |
|                   |           |               |     is ignored    |
|                   |           |               |     and the       |
|                   |           |               |     administrator |
|                   |           |               |     must          |
|                   |           |               |     configure the |
|                   |           |               |     SMTP          |
|                   |           |               |                   |
|                   |           |               |    Authentication |
|                   |           |               |     User and      |
|                   |           |               |     Password for  |
|                   |           |               |     the Secondary |
|                   |           |               |     SMS server.   |
|                   |           |               | -   If a value is |
|                   |           |               |     not           |
|                   |           |               |     specified,    |
|                   |           |               |     the SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     default to    |
|                   |           |               |     noreply.      |
|                   |           |               | -   Customers     |
|                   |           |               |     should        |
|                   |           |               |     specify an    |
|                   |           |               |     email address |
|                   |           |               |     consistent    |
|                   |           |               |     with their    |
|                   |           |               |     domain name.  |
|                   |           |               | -   The SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     not validate  |
|                   |           |               |     the email     |
|                   |           |               |     address       |
|                   |           |               |     specified; it |
|                   |           |               |     will only     |
|                   |           |               |     send the      |
|                   |           |               |     message with  |
|                   |           |               |     that \"From\" |
|                   |           |               |     address,      |
|                   |           |               |     leaving the   |
|                   |           |               |     validation up |
|                   |           |               |     to the SMTP   |
|                   |           |               |     server.       |
+-------------------+-----------+---------------+-------------------+
| SMTP              | \<blank\> | Y             | -   Defines an    |
| Authentication    |           |               |     email address |
| User (Secondary   |           |               |     for           |
| SMS)              |           |               |                   |
|                   |           |               |    authentication |
|                   |           |               |     to the        |
|                   |           |               |     Secondary SMS |
|                   |           |               |     SMTP server.  |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires      |
|                   |           |               |                   |
|                   |           |               |   authentication, |
|                   |           |               |     a value must  |
|                   |           |               |     specified     |
|                   |           |               |     here.         |
|                   |           |               | -   If a value is |
|                   |           |               |     not specified |
|                   |           |               |     when required |
|                   |           |               |     by the SMTP   |
|                   |           |               |     server, the   |
|                   |           |               |     SMA Notify    |
|                   |           |               |     Handler will  |
|                   |           |               |     not be able   |
|                   |           |               |     to send text  |
|                   |           |               |     messages      |
|                   |           |               |     through a     |
|                   |           |               |     secondary     |
|                   |           |               |     server.       |
|                   |           |               | -   Customers     |
|                   |           |               |     should        |
|                   |           |               |     specify an    |
|                   |           |               |     email address |
|                   |           |               |     consistent    |
|                   |           |               |     with their    |
|                   |           |               |     domain name.  |
|                   |           |               | -   The SMA       |
|                   |           |               |     Notify        |
|                   |           |               |     Handler will  |
|                   |           |               |     not validate  |
|                   |           |               |     the email     |
|                   |           |               |     address       |
|                   |           |               |     specified; it |
|                   |           |               |     will only     |
|                   |           |               |     send the      |
|                   |           |               |     message with  |
|                   |           |               |     the user and  |
|                   |           |               |     password      |
|                   |           |               |     specified,    |
|                   |           |               |     leaving the   |
|                   |           |               |     validation up |
|                   |           |               |     to the SMTP   |
|                   |           |               |     server.       |
+-------------------+-----------+---------------+-------------------+
| SMTP              | \<blank\> | Y             | -   Defines the   |
| Authentication    |           |               |     password for  |
| Encrypted         |           |               |     the SMTP      |
| Password          |           |               |                   |
| (Secondary SMS)   |           |               |    Authentication |
|                   |           |               |     User for the  |
|                   |           |               |     Secondary SMS |
|                   |           |               |     server.       |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires      |
|                   |           |               |                   |
|                   |           |               |   authentication, |
|                   |           |               |     a value must  |
|                   |           |               |     specified     |
|                   |           |               |     here that     |
|                   |           |               |     provides the  |
|                   |           |               |     encrypted     |
|                   |           |               |     password for  |
|                   |           |               |     the user.     |
|                   |           |               | -   To encrypt    |
|                   |           |               |     the password  |
|                   |           |               |     manually, use |
|                   |           |               |     the Password  |
|                   |           |               |     encryption    |
|                   |           |               |     tool in the   |
|                   |           |               |     Enterprise    |
|                   |           |               |     Manager. Then |
|                   |           |               |     copy and      |
|                   |           |               |     paste the     |
|                   |           |               |     encrypted     |
|                   |           |               |     password for  |
|                   |           |               |     the value of  |
|                   |           |               |     this setting. |
|                   |           |               |     For more      |
|                   |           |               |     information,  |
|                   |           |               |     refer to      |
|                   |           |               |     [Encrypting   | |                   |           |               |                   |
|                   |           |               |    Passwords](../ |
|                   |           |               | UI/Enterprise-M |
|                   |           |               | anager/Menus.md# |
|                   |           |               | Encrypti){.MCXref |
|                   |           |               |     .xref} in the |
|                   |           |               |     **Enterprise  |
|                   |           |               |     Manager**     |
|                   |           |               |     online help.  |
+-------------------+-----------+---------------+-------------------+
| SMTP              | False     | Y             | -   Determines if |
| Authentication    |           |               |     the SMA       |
| -Enable SSL       |           |               |     Notify        |
| (Secondary SMS)   |           |               |     Handler will  |
|                   |           |               |     use SSL       |
|                   |           |               |     encryption    |
|                   |           |               |     when          |
|                   |           |               |     connecting to |
|                   |           |               |     the Secondary |
|                   |           |               |     SMS SMTP      |
|                   |           |               |     server.       |
|                   |           |               | -   If the SMTP   |
|                   |           |               |     server        |
|                   |           |               |     requires SSL  |
|                   |           |               |     Encryption,   |
|                   |           |               |     the value     |
|                   |           |               |     must be set   |
|                   |           |               |     to True.      |
+-------------------+-----------+---------------+-------------------+

: Option Parameters: SMTP Server Settings
:::

 

