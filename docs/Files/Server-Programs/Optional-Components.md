---
lang: en-us
title: Optional Components
viewport: width=device-width, initial-scale=1.0
---

# Optional Components

The optional components available with the SMA Service Manager include:

-   [SMA LDAP Monitor](#SMA)

  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [All of the optional components must be enabled in the SMAServMan.ini file. For more information, refer to [SMA Service Manager (SMAServMan)](SMA-Service-Manager.md).]
  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## SMA LDAP Monitor

[]{#aanchor82} The SMA LDAP Monitor (SMALDAPMon) component periodically checks the LDAP server to synchronize Lightweight Directory Access
Protocol (LDAP) users with OpCon users. These users can exist in Active
Directory or OpenLDAP.

 

  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [SMA LDAP Monitor currently does not support using Organizational Units in Active Directory. Organizational Unit users must be put in a Group in order to be found and synced.]
  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

OpCon administrators can define the LDAP Group name for synchronization
with OpCon as well as a default OpCon Role for new OpCon User Accounts.

 

SMA LDAP Monitor will look at the Group and Role in each Sync section
specified in SMALDAPMon.ini and then the following action:

  Exists in LDAP Group   Exists in OpCon   Member of OpCon Role   Enabled in LDAP Group\*   Enabled in OpCon   Action Taken
  ---------------------- ----------------- ---------------------- ------------------------- ------------------ ------------------------------------------------------------
  Y                      Y                 Y                      Y                         Y                  No action
  Y                      N                 N/A                    Y                         N/A                User created and added to role
  Y                      Y                 N                      Y                         Y                  User added to role
  Y                      Y                 Y                      Y                         N                  User enabled in OpCon
  Y                      Y                 Y                      N                         Y                  User is disabled if they are not in any other mapped roles
  Y                      Y                 Y                      N                         N                  No action
  N                      Y                 Y                      N/A                       Y                  User is removed from the role and disabled
  N                      Y                 Y                      N/A                       N                  User is removed from the role
  N                      N                 N/A                    N/A                       N/A                No action

\*Enabled does not apply to OpenLDAP.

 

  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If multiple groups in SMA LDAP Monitor have the same name, by default, all users within those groups will be imported into OpCon and assigned to the specified role. If you only want users from one particular SMA LDAP Monitor group to be imported into OpCon, then the group name must be fully qualified in the SMALDAPMon.ini file.]
  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

The program name is SMALDAPMon.exe and it is installed with the SAM to
the same directory of \<Target Directory\>\\OpConxps\\SAM\\.
SMALDAPMon.exe is managed by the SMA Service Manager. For more
information, refer to [SMA Service Manager (SMAServMan)](SMA-Service-Manager.md).

### SMA LDAP Monitor Configuration

The SMA LDAP Monitor configuration determines basic application and
logging behavior. The SMALDAPMon.ini file resides in the \<Configuration
Directory\>\\SAM\\folder. The tables contain the definitions of each
configuration parameter. All changes to the configuration are dynamic.

 

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [ The Configuration Directory location is based on where you installed your programs. For more information, refer to [File Locations](../Concepts/File-Locations.md) in the **Concepts** online help.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Sample Configuration File



\[General Settings\] 
DirectoryType=ADS

Host=hostname

Port=389

Domain=DC=smausa,DC=com

UserName=\<EncryptedAdministrator\>

Password=\<EncryptedAdministratorPassword\>

RefreshInterval=300

DefaultUserPassword=\<EncryptedDefaultUserPassword\>

UseDefaultUserPassword=false

UserNamePrefix=\<UsernamePrefix\>\\\<UserName\>

EnableTls=false

EnableSsl=false

 

\[Debug Options\] 
ArchiveDaysToKeep=10

MaximumLogFileSize=150000

TraceLevel=4

 

\[Sync1\] 
Group= Administrators

Role=Role_ocadm

 

\[Sync2\] 
Group=Operators

Role=Role_Operator



### SMALDAPMon.ini

The SMALDAPMon.ini file contains the following major sections:

-   [General Settings](#General)
-   [Debug Options](#Debug)
-   [Sync Options](#Sync)

#### General Settings

The General Settings contain basic information for SMA LDAP Monitor
processing.

+-----------------+----------+-----------+---------+-----------------+
| General         | Required | Default   | Dynamic | Definition      |
| Settings        |          |           |         |                 |
+=================+==========+===========+=========+=================+
| DirectoryType   | Y        | ADS       | Y       | -   The type of |
|                 |          |           |         |     LDAP Server |
|                 |          |           |         |     on the      |
|                 |          |           |         |     network.    |
|                 |          |           |         | -   Valid       |
|                 |          |           |         |     Values:     |
|                 |          |           |         |     ADS,        |
|                 |          |           |         |     OpenLDAP    |
+-----------------+----------+-----------+---------+-----------------+
| Host            | Y        | \<blank\> | Y       | Host name or IP |
|                 |          |           |         | address of the  |
|                 |          |           |         | LDAP server.    |
+-----------------+----------+-----------+---------+-----------------+
| Port            | Y        | 389       | Y       | Port number of  |
|                 |          |           |         | the LDAP        |
|                 |          |           |         | server.         |
+-----------------+----------+-----------+---------+-----------------+
| Domain          | N        | \<blank\> | Y       | -   Defines the |
|                 |          |           |         |                 |
|                 |          |           |         |   distinguished |
|                 |          |           |         |     name.       |
|                 |          |           |         | -   If it is    |
|                 |          |           |         |     not         |
|                 |          |           |         |     specified,  |
|                 |          |           |         |     SMA LDAP    |
|                 |          |           |         |     Monitor     |
|                 |          |           |         |     will        |
|                 |          |           |         |     connect to  |
|                 |          |           |         |     the first   |
|                 |          |           |         |     or default  |
|                 |          |           |         |                 |
|                 |          |           |         |   distinguished |
|                 |          |           |         |     name.       |
+-----------------+----------+-----------+---------+-----------------+
| UserName\*      | Y        | \<blank\> | Y       | Encrypted login |
|                 |          |           |         | name for the    |
|                 |          |           |         | LDAP directory. |
|                 |          |           |         | Must have       |
|                 |          |           |         | permissions to  |
|                 |          |           |         | connect to and  |
|                 |          |           |         | query LDAP      |
|                 |          |           |         | information     |
|                 |          |           |         | from the        |
|                 |          |           |         | network.        |
+-----------------+----------+-----------+---------+-----------------+
| Password\*      | Y        | \<blank\> | Y       | Encrypted LDAP  |
|                 |          |           |         | Password for    |
|                 |          |           |         | the user        |
|                 |          |           |         | specified in    |
|                 |          |           |         | UserName.       |
+-----------------+----------+-----------+---------+-----------------+
| RefreshInterval | N        | 60        | Y       | Time interval   |
|                 |          |           |         | (in seconds) at |
|                 |          |           |         | which the       |
|                 |          |           |         | service         |
|                 |          |           |         | re-synchronizes |
|                 |          |           |         | users\'         |
|                 |          |           |         | accounts        |
|                 |          |           |         | between the     |
|                 |          |           |         | LSAP server and |
|                 |          |           |         | the OpCon       |
|                 |          |           |         | database.       |
+-----------------+----------+-----------+---------+-----------------+
| Defaul          | N        | \<blank\> | Y       | Encrypted       |
| tUserPassword\* |          |           |         | default         |
|                 |          |           |         | password        |
|                 |          |           |         | assigned to     |
|                 |          |           |         | newly-created   |
|                 |          |           |         | OpCon users.    |
|                 |          |           |         |                 |
|                 |          |           |         |                 |
|                 |          |           |         |                 |
|                 |          |           |         | **Note:** This  |
|                 |          |           |         | parameter is    |
|                 |          |           |         | required only   |
|                 |          |           |         | when the        |
|                 |          |           |         | UseDefa         |
|                 |          |           |         | ultUserPassword |
|                 |          |           |         | parameter is    |
|                 |          |           |         | set to True.    |
|                 |          |           |         |                 |
|                 |          |           |         |                 |
|                 |          |           |         |                 |
|                 |          |           |         | **Note:** If    |
|                 |          |           |         | users specify   |
|                 |          |           |         | UseDefaultUse   |
|                 |          |           |         | rPassword=true, |
|                 |          |           |         | but do not      |
|                 |          |           |         | specify a       |
|                 |          |           |         | password, then  |
|                 |          |           |         | SMA LDAP        |
|                 |          |           |         | Monitor will    |
|                 |          |           |         | give an error   |
|                 |          |           |         | in the log and  |
|                 |          |           |         | exit.           |
+-----------------+----------+-----------+---------+-----------------+
| UseDefa         | N        | False     | N       | An optional     |
| ultUserPassword |          |           |         | parameter that  |
|                 |          |           |         | when added to   |
|                 |          |           |         | the             |
|                 |          |           |         | configuration   |
|                 |          |           |         | file and set to |
|                 |          |           |         | True, assigns   |
|                 |          |           |         | the value       |
|                 |          |           |         | specified in    |
|                 |          |           |         | the             |
|                 |          |           |         | Defa            |
|                 |          |           |         | ultUserPassword |
|                 |          |           |         | parameter to    |
|                 |          |           |         | newly-created   |
|                 |          |           |         | OpCon users.    |
+-----------------+----------+-----------+---------+-----------------+
| UserNamePrefix  | N        | \<blank\> | Y       | -   Defines the |
|                 |          |           |         |     text or     |
|                 |          |           |         |     domain name |
|                 |          |           |         |     to prepend  |
|                 |          |           |         |     to OpCon    |
|                 |          |           |         |     user names  |
|                 |          |           |         |     with a      |
|                 |          |           |         |     backslash   |
|                 |          |           |         |     in between, |
|                 |          |           |         |     e.g.,       |
|                 |          |           |         |     \<U         |
|                 |          |           |         | sernamePrefix\> |
|                 |          |           |         | \\\<UserName\>. |
|                 |          |           |         | -   Applies to  |
|                 |          |           |         |     ADS only.   |
+-----------------+----------+-----------+---------+-----------------+
| EnableTls       | N        | False     | Y       | TLS encryption  |
|                 |          |           |         | will be used    |
|                 |          |           |         | for the         |
|                 |          |           |         | connection when |
|                 |          |           |         | set to True. If |
|                 |          |           |         | set to True,    |
|                 |          |           |         | the EnableSsl   |
|                 |          |           |         | parameter will  |
|                 |          |           |         | be ignored.     |
+-----------------+----------+-----------+---------+-----------------+
| Enable SSl      | N        | False     | Y       | SSL encryption  |
|                 |          |           |         | will be used    |
|                 |          |           |         | for the         |
|                 |          |           |         | connection when |
|                 |          |           |         | set to True. If |
|                 |          |           |         | set to True,    |
|                 |          |           |         | the EnableTls   |
|                 |          |           |         | parameter will  |
|                 |          |           |         | be ignored.     |
+-----------------+----------+-----------+---------+-----------------+

: SMA LDAP Monitor Configuration: General Settings

 

\*To encrypt the password manually, use the Password Encryption Tool in
the Enterprise Manager. Then, copy and paste the encrypted password for
the value of this setting. For more information, refer to [Encrypting Passwords](../UI/Enterprise-Manager/Encrypting-Passwords.md){.MCXref
.xref} in the **Enterprise Manager** online help. To encrypt the values
using SMALDAPMon, refer to [Command Line Arguments](#Command){.MCXref
.xref}.

 

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [SMA LDAP Monitor passwords can be longer than 12 characters; however, the Enterprise Manager and Solution Manager have a 12-character limit for passwords. If the password is longer than 12 characters, you cannot use the SMA LDAP Monitor user name and password to log in interactively.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [For OpenLDAP, UserName must contain the encrypted string of common name and domain name(s) separated by a comma. For example: UserName=cn=admin,dc=ldap,dc=smausa,dc=com.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Debug Options

The Debug Options configure the SMA LDAP Monitor\'s logging behavior.

+---------------+----------+---------------+---------+---------------+
| Debug Options | Required | Default       | Dynamic | Definition    |
+===============+==========+===============+=========+===============+
| Arch          | N        | 10            | Y       | -             |
| iveDaysToKeep |          |               |         |    Determines |
|               |          |               |         |     the       |
|               |          |               |         |     number of |
|               |          |               |         |     days the  |
|               |          |               |         |     archive   |
|               |          |               |         |     log       |
|               |          |               |         |     folders   |
|               |          |               |         |     are       |
|               |          |               |         |     retained. |
|               |          |               |         | -   Each time |
|               |          |               |         |     it        |
|               |          |               |         |     archives  |
|               |          |               |         |     a log,    |
|               |          |               |         |     the       |
|               |          |               |         |     service   |
|               |          |               |         |     checks    |
|               |          |               |         |     for       |
|               |          |               |         |     expired   |
|               |          |               |         |     archive   |
|               |          |               |         |     folders   |
|               |          |               |         |     to        |
|               |          |               |         |     delete.   |
+---------------+----------+---------------+---------+---------------+
| Maxim         | N        | 150000        | Y       | -   Defines   |
| umLogFileSize |          | (bytes)       |         |     the       |
|               |          |               |         |     maximum   |
|               |          |               |         |     size in   |
|               |          |               |         |     bytes for |
|               |          |               |         |     each log  |
|               |          |               |         |     file.     |
|               |          |               |         | -             |
|               |          |               |         |    Determines |
|               |          |               |         |     when the  |
|               |          |               |         |     current   |
|               |          |               |         |     log file  |
|               |          |               |         |     is closed |
|               |          |               |         |     and a new |
|               |          |               |         |     file is   |
|               |          |               |         |     started.  |
|               |          |               |         |     When the  |
|               |          |               |         |     file      |
|               |          |               |         |     reaches   |
|               |          |               |         |     this      |
|               |          |               |         |     maximum   |
|               |          |               |         |     size, it  |
|               |          |               |         |     is        |
|               |          |               |         |     \"rolled  |
|               |          |               |         |     over.\"   |
|               |          |               |         | -   This      |
|               |          |               |         |     setting   |
|               |          |               |         |     creates   |
|               |          |               |         |     small,    |
|               |          |               |         |               |
|               |          |               |         |    manageable |
|               |          |               |         |     log       |
|               |          |               |         |     files.    |
|               |          |               |         | -   S         |
|               |          |               |         | MALDAPMon.log |
|               |          |               |         |     resides   |
|               |          |               |         |     in the    |
|               |          |               |         |     \<Output  |
|               |          |               |         |     Director  |
|               |          |               |         | y\>\\SAM\\Log |
|               |          |               |         |               |
|               |          |               |         |    directory. |
|               |          |               |         | -   When the  |
|               |          |               |         |     log file  |
|               |          |               |         |     reaches   |
|               |          |               |         |     the       |
|               |          |               |         |     maximum   |
|               |          |               |         |     size, SMA |
|               |          |               |         |     LDAP      |
|               |          |               |         |     Monitor   |
|               |          |               |         |     archives  |
|               |          |               |         |     the log   |
|               |          |               |         |     file. The |
|               |          |               |         |     SAM then  |
|               |          |               |         |     maintains |
|               |          |               |         |     the       |
|               |          |               |         |     archive   |
|               |          |               |         |     folders.  |
|               |          |               |         | -   Minimum   |
|               |          |               |         |     Value =   |
|               |          |               |         |     10000     |
|               |          |               |         |     bytes     |
|               |          |               |         | -   Maximum   |
|               |          |               |         |     Value =   |
|               |          |               |         |               |
|               |          |               |         |    2147483647 |
|               |          |               |         |     bytes     |
+---------------+----------+---------------+---------+---------------+
| TraceLevel    | N        | 4             | Y       | -             |
|               |          |               |         |    Determines |
|               |          |               |         |     the       |
|               |          |               |         |     detail of |
|               |          |               |         |     logging.  |
|               |          |               |         | -   Valid     |
|               |          |               |         |     Entries:  |
|               |          |               |         |     0-5. 0 is |
|               |          |               |         |     off and 5 |
|               |          |               |         |     is        |
|               |          |               |         |     detailed. |
|               |          |               |         |     -   0 =   |
|               |          |               |         |         Off   |
|               |          |               |         |     -   1 =   |
|               |          |               |         |               |
|               |          |               |         |      Critical |
|               |          |               |         |     -   2 =   |
|               |          |               |         |         Error |
|               |          |               |         |     -   3 =   |
|               |          |               |         |               |
|               |          |               |         |       Warning |
|               |          |               |         |     -   4 =   |
|               |          |               |         |               |
|               |          |               |         |   Information |
|               |          |               |         |     -   5 =   |
|               |          |               |         |         Debug |
+---------------+----------+---------------+---------+---------------+

: SMA LDAP Monitor Configuration: Debug Options

#### Sync Options

The Sync Option contains the mapping of each LDAP group to an OpCon
role. Multiple Sync Options are allowed. To use multiple syncs, name
them \[Sync\#\], where \# is a numerical value. 
 

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [SMA LDAP Monitor does not assign users in the LDAP groups or e-mail distribution groups inside the LDAP group that is being monitored. This means there is a one-to-one (1:1) correspondence between LDAP groups and OpCon roles.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

+-------+----------+-----------+---------+----------------------------+
| Sync  | Required | Default   | Dynamic | Definition                 |
+=======+==========+===========+=========+============================+
| Group | Y        | \<blank\> | Y       | Name of the LDAP group     |
|       |          |           |         | used for managing OpCon    |
|       |          |           |         | users (e.g., OpConUsers)   |
+-------+----------+-----------+---------+----------------------------+
| Role  | Y        | \<blank\> | Y       | Name of the OpCon Role to  |
|       |          |           |         | grant to the new OpCon     |
|       |          |           |         | users added by the SMA     |
|       |          |           |         | LDAP Monitor               |
+-------+----------+-----------+---------+----------------------------+

: SMA LDAP Monitor Configuration: Sync Parameter Settings

### Command Line Arguments

The SMA LDAP Monitor supports the following arguments which should be
specified with \--\[argument\]=\[value\] or \--\[argument\] \[value\] or -\[argument\] \[value\] except -c, \--credentials, -s, \--standalone and
\--help which do not have a value.

+------------------------+----------+----------------------------+
| Argument               | Required | Value                      |
+========================+==========+============================+
| -c, \--credentials     | N        | This parameter sets the    |
|                        |          | credentials and encrypts   |
|                        |          | the user name and          |
|                        |          | passwords in the           |
|                        |          | configuration file. The    |
|                        |          | program can be run the     |
|                        |          | first time only in order   |
|                        |          | to complete the            |
|                        |          | configuration.             |
+------------------------+----------+----------------------------+
| -u, \--user            | N        | This parameter is used in  |
|                        |          | conjunction with -c or     |
|                        |          | \--credentials. It defines |
|                        |          | the user name to connect   |
|                        |          | to the LDAP server.        |
+------------------------+----------+----------------------------+
| -p, \--password        | N        | This parameter is used in  |
|                        |          | conjunction with -c or     |
|                        |          | \--credentials. It defines |
|                        |          | the password to connect to |
|                        |          | the LDAP server.           |
|                        |          |                            |
|                        |          |                            |
+------------------------+----------+----------------------------+
| -d, \--defaultpassword | N        | This parameter is used in  |
|                        |          | conjunction with -c or     |
|                        |          | \--credentials. It defines |
|                        |          | the OpCon user password to |
|                        |          | log in Enterprise Manager. |
+------------------------+----------+----------------------------+
| -i, \--inifile         | N        | Name of the existing INI   |
|                        |          | file to encrypt the        |
|                        |          | credentials.               |
+------------------------+----------+----------------------------+
| -s, \--standalone      | N        | Runs SMALDAPMon.exe in     |
|                        |          | standalone mode without    |
|                        |          | SMAServMan. SMALDAPMon.exe |
|                        |          | will run once, and then    |
|                        |          | the program will exit.     |
+------------------------+----------+----------------------------+
| \--help                | N        | Displays the help screen.  |
+------------------------+----------+----------------------------+

: SMA LDAP Monitor Configuration: Command Line Arguments

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** [The following      | | circular                         | commands will encrypt UserName,  |
| background](../../Reso           | Password, and                    |
| urces/Images/example-icon(48x48) | DefaultUserPassword in the       |
| .png "Example icon") | existing SMALDAPMon.ini          |
|                                  | file:]{.statement2}              |
|                                  |                                  |
|                                  | SMALDAPMon.exe -c -u admin -p    |
|                                  | adminpassword -d opconxps -x     |
|                                  | \*\*\*\*                         |
|                                  | \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* |
|                                  | -i SMALDAPMon.ini                |
|                                  |                                  |
|                                  | SMALDAPMon.exe \--credentials    |
|                                  | \--user admin \--password        |
|                                  | adminpassword \--defaultpassword |
|                                  | opconxps \--inifile              |
|                                  | SMALDAPMon.ini                   |
|                                  |                                  |
|                                  | SMALDAPMon.exe \--credentials    |
|                                  | \--user=admin                    |
|                                  | \--password=adminpassword        |
|                                  | \--defaultpassword=opconxps      |
+----------------------------------+----------------------------------+
:::

 

