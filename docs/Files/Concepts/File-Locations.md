---
lang: en-us
title: File Locations
viewport: width=device-width, initial-scale=1.0
---

#  File Locations

During the installation, someone chose where the
OpCon programs were installed and where they
would write output files.

 

The configuration file location is based on where the programs were
installed.

-   If the programs were installed anywhere on the system drive (e.g.,
    C:\\), the configuration files will be in the \<system
    drive\>:\\ProgramData\\OpConxps directory.
-   If the programs were installed to a non-system drive (e.g., D:\\),
    the configuration files will be in the same folder as the programs.

The output files and folders can be configured for any local hard drive
location, but their default location is based on where the programs were
installed.

-   If the programs were installed anywhere on the system drive (e.g.,
    C:\\), the output files will default to the \<system
    drive\>:\\ProgramData\\OpConxps directory.
-   If the programs were installed to a non-system drive (e.g., D:\\),
    the output files will default to the same folder as the programs.
-   If a custom path was defined, the SMACommon.ini configuration file
    will indicate the path to the output files.

The subsequent examples show different possible installation directory
structures.

## Installed to System Drive using Default Path

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** [This example shows | | circular                         | where you will find your         |
| background](../../Reso           | programs and files if they were  |
| urces/Images/example-icon(48x48) | installed to a system drive      |
| .png "Example icon") | using the default                |
|                                  | paths.]{.statement2}             |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [**Programs:** C:\\Program       | |                                  | Files\\OpConxps\\\<program       |
|                                  | folder\>]{.statement2}           |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [**Configuration files:**        | |                                  | C:\\                             |
|                                  | ProgramData\\OpConxps\\\<program |
|                                  | folder\>]{.statement2}           |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [**Output files:**               | |                                  | C:\\                             |
|                                  | ProgramData\\OpConxps\\\<program |
|                                  | folder\>]{.statement2}           |
+----------------------------------+----------------------------------+

 

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note Icon")   **NOTE:** [The root OpConxps data folder is likely hidden. To access this directory, type C:\\ProgramData in your File Explorer address bar.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------

## Installed to System Drive using Custom Path

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** [This example shows | | circular                         | where you would find your        |
| background](../../Reso           | programs and files if they were  |
| urces/Images/example-icon(48x48) | installed to a custom system     |
| .png "Example icon") | path of [C:\\My                  | |                                  | OpCon\\OpConxps\\]{.ul} and      |
|                                  | accepted the default output      |
|                                  | path.]{.statement2}              |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [**Programs:** C:\\My            | |                                  | OpCon\\\<program                 |
|                                  | folder\>]{.statement2}           |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [**Configuration files:**        | |                                  | C:\\ProgramData\\OpConxps\\My    |
|                                  | OpCon\\\<program                 |
|                                  | folder\>]{.statement2}           |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [**Output files:**               | |                                  | C:\\ProgramData\\OpConxps\\My    |
|                                  | OpCon\\\<program                 |
|                                  | folder\>]{.statement2}           |
+----------------------------------+----------------------------------+

## Installed to Non-System Drive using Custom Path

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** [This example shows | | circular                         | where you would find your        |
| background](../../Reso           | programs and files if they were  |
| urces/Images/example-icon(48x48) | installed to a custom path on a  |
| .png "Example icon") | non-system drive of [D:\\My      | |                                  | Programs\\OpConxps\\]{.ul} and   |
|                                  | accepted the default output      |
|                                  | path.]{.statement2}              |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [**Programs:** D:\\My            | |                                  | Programs\\OpConxps\\\<program    |
|                                  | folder\>]{.statement2}           |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [**Configuration files:** D:\\My | |                                  | Programs\\OpConxps\\\<program    |
|                                  | folder\>]{.statement2}           |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [**Output files:** D:\\My        | |                                  | Programs\\OpConxps\\\<program    |
|                                  | folder\>]{.statement2}           |
+----------------------------------+----------------------------------+

## Installed Output Files using Custom Path

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** [This example shows | | circular                         | where you would find your output |
| background](../../Reso           | files if you chose a custom      |
| urces/Images/example-icon(48x48) | path. No matter where the        |
| .png "Example icon") | programs were installed, the     |
|                                  | output files could have been     |
|                                  | configured for a custom location |
|                                  | on any local hard                |
|                                  | drive.]{.statement2}             |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [In this example, the default    | |                                  | path was accepted for the        |
|                                  | program files and a custom path  |
|                                  | of [E:\\Logs\\OpConxps\\]{.ul}   | |                                  | was defined for the output       |
|                                  | files.]{.statement2}             |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [**Programs:** C:\\Program       | |                                  | Files\\OpConxps\\\<program       |
|                                  | folder\>]{.statement2}           |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [**Configuration files:**        | |                                  | C:\\                             |
|                                  | ProgramData\\OpConxps\\\<program |
|                                  | folder\>]{.statement2}           |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | **Note:** The SMACommon.ini file |
|                                  | in this folder contains the      |
|                                  | location for the output files.   |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | [**Output files:**               | |                                  | E:\\Logs\\OpConxps\\\<program    |
|                                  | folder\>]{.statement2}           |
+----------------------------------+----------------------------------+
:::

 

