---
lang: en-us
title: Password Requirements
viewport: width=device-width, initial-scale=1.0
---

#  Password Requirements

The Password Requirements category contains the requirements for
OpCon Login passwords.

+--------------------+---------+---------------+--------------------+
| Option Parameter   | Default | Dynamic (Y/N) | Description        |
+====================+:=======:+:=============:+====================+
| (Password cannot   | True    | N             | -   This parameter |
| be the same as the |         |               |     is a hidden,   |
| User Login ID)     |         |               |     static         |
|                    |         |               |     password       |
|                    |         |               |     requirement.   |
|                    |         |               | -   You may not    |
|                    |         |               |     set your       |
|                    |         |               |     password to    |
|                    |         |               |     match your     |
|                    |         |               |     login ID.      |
+--------------------+---------+---------------+--------------------+
| Minimum number of  | 0       | Y             | This parameter     |
| lower-case         |         |               | defines the        |
| characters         |         |               | minimum number of  |
| required           |         |               | lower-case         |
|                    |         |               | characters         |
|                    |         |               | required in a      |
|                    |         |               | password.          |
+--------------------+---------+---------------+--------------------+
| Minimum number of  | 0       | Y             | This parameter     |
| upper-case         |         |               | defines the        |
| characters         |         |               | minimum number of  |
| required           |         |               | upper-case         |
|                    |         |               | characters         |
|                    |         |               | required in a      |
|                    |         |               | password.          |
+--------------------+---------+---------------+--------------------+
| Minimum number of  | 0       | Y             | This parameter     |
| days between       |         |               | defines the        |
| password changes   |         |               | minimum number of  |
|                    |         |               | days before a user |
|                    |         |               | can change a       |
|                    |         |               | password.          |
|                    |         |               |                    |
|                    |         |               |                    |
|                    |         |               |                    |
|                    |         |               | **Note**: If the   |
|                    |         |               | value is set to 0, |
|                    |         |               | this parameter is  |
|                    |         |               | disabled.          |
+--------------------+---------+---------------+--------------------+
| Requires numeric   | False   | Y             | -   This parameter |
| characters         |         |               |     determines if  |
|                    |         |               |     the password   |
|                    |         |               |     must contain   |
|                    |         |               |     numeric        |
|                    |         |               |     characters.    |
|                    |         |               | -   Valid values   |
|                    |         |               |     are True and   |
|                    |         |               |     False.         |
+--------------------+---------+---------------+--------------------+
| Requires alpha     | False   | Y             | -   This parameter |
| characters         |         |               |     determines if  |
|                    |         |               |     the password   |
|                    |         |               |     must contain   |
|                    |         |               |     alphabetical   |
|                    |         |               |     characters.    |
|                    |         |               | -   Valid values   |
|                    |         |               |     are True and   |
|                    |         |               |     False.         |
+--------------------+---------+---------------+--------------------+
| Requires special   | False   | Y             | -   This parameter |
| characters         |         |               |     determines if  |
|                    |         |               |     the password   |
|                    |         |               |     must contain   |
|                    |         |               |     special        |
|                    |         |               |     characters.    |
|                    |         |               | -   Valid values   |
|                    |         |               |     are True and   |
|                    |         |               |     False.         |
+--------------------+---------+---------------+--------------------+
| Number of times a  | 2       | Y             | -   This parameter |
| character can      |         |               |     determines the |
| repeat             |         |               |     number of      |
| consecutively      |         |               |     times a        |
|                    |         |               |     character can  |
|                    |         |               |     repeat         |
|                    |         |               |     consecutively  |
|                    |         |               |     in a password. |
|                    |         |               |     For example,   |
|                    |         |               |     if set to 2,   |
|                    |         |               |     the password   |
|                    |         |               |     \"jjj\" would  |
|                    |         |               |     be invalid.    |
|                    |         |               | -   Setting the    |
|                    |         |               |     value to 0     |
|                    |         |               |     disables the   |
|                    |         |               |     setting.       |
|                    |         |               | -   Valid values   |
|                    |         |               |     range from 1   |
|                    |         |               |     to 12.         |
+--------------------+---------+---------------+--------------------+
| Number of days a   | 0       | Y             | -   This parameter |
| password is valid  |         |               |     determines the |
|                    |         |               |     number of days |
|                    |         |               |     a password is  |
|                    |         |               |     valid from the |
|                    |         |               |     time users     |
|                    |         |               |     changes their  |
|                    |         |               |     password.      |
|                    |         |               | -   Valid values   |
|                    |         |               |     range from 0   |
|                    |         |               |     to 365.        |
|                    |         |               | -   Setting the    |
|                    |         |               |     value to 0     |
|                    |         |               |     disables the   |
|                    |         |               |     setting.       |
+--------------------+---------+---------------+--------------------+
| Number of days     | 0       | Y             | -   This parameter |
| before password    |         |               |     determines the |
| expiration to warn |         |               |     number of days |
| user               |         |               |     in advance of  |
|                    |         |               |     password       |
|                    |         |               |     expiration     |
|                    |         |               |     that the       |
|                    |         |               |     primary        |
|                    |         |               |     graphical user |
|                    |         |               |     interfaces     |
|                    |         |               |     will warn      |
|                    |         |               |     users that     |
|                    |         |               |     their password |
|                    |         |               |     is about to    |
|                    |         |               |     expire.        |
|                    |         |               | -   Valid values   |
|                    |         |               |     range from 0   |
|                    |         |               |     to 30.         |
|                    |         |               | -   Setting the    |
|                    |         |               |     value to 0     |
|                    |         |               |     disables the   |
|                    |         |               |     setting.       |
+--------------------+---------+---------------+--------------------+
| Minimum number of  | 8       | Y             | -   This parameter |
| characters         |         |               |     defines the    |
|                    |         |               |     minimum number |
|                    |         |               |     of characters  |
|                    |         |               |     allowed for    |
|                    |         |               |     every user\'s  |
|                    |         |               |     password in    |
|                    |         |               |                    |
|                    |         |               |    [OpCon]{.Genera | |                    |         |               | lOpConGlobalName}. |
|                    |         |               | -   Valid values   |
|                    |         |               |     range from 1   |
|                    |         |               |     to 12.         |
+--------------------+---------+---------------+--------------------+
| Number of          | 0       | Y             | -   This parameter |
| passwords to       |         |               |     determines the |
| retain in history  |         |               |     number of      |
|                    |         |               |     passwords for  |
|                    |         |               |     [OpCon]{.Gener | |                    |         |               | alOpConGlobalName} |
|                    |         |               |     to retain in   |
|                    |         |               |     history. When  |
|                    |         |               |     a user changes |
|                    |         |               |     their          |
|                    |         |               |     password, they |
|                    |         |               |     will not be    |
|                    |         |               |     able to reuse  |
|                    |         |               |     any of the in  |
|                    |         |               |     the history.   |
|                    |         |               | -   Valid values   |
|                    |         |               |     range from 0   |
|                    |         |               |     to 20.         |
|                    |         |               | -   Setting the    |
|                    |         |               |     value to 0     |
|                    |         |               |     disables the   |
|                    |         |               |     setting.       |
+--------------------+---------+---------------+--------------------+
| Number of failed   | 0       | Y             | -   This parameter |
| logon attempts     |         |               |     determines the |
| before account     |         |               |     number of      |
| lockout            |         |               |     password       |
|                    |         |               |     attempts       |
|                    |         |               |     before the     |
|                    |         |               |     account is     |
|                    |         |               |     locked.        |
|                    |         |               | -   Valid values   |
|                    |         |               |     range from 0   |
|                    |         |               |     to 10.         |
|                    |         |               | -   Setting the    |
|                    |         |               |     value to 0     |
|                    |         |               |     disables the   |
|                    |         |               |     setting.       |
+--------------------+---------+---------------+--------------------+

: Option Parameters: Password Requirements
:::

 

