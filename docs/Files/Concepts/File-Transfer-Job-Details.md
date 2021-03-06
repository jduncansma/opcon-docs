---
lang: en-us
title: File Transfer Job Details
viewport: width=device-width, initial-scale=1.0
---

#  []{#top}File Transfer Job Details 
The information in this section applies to defining a File Transfer job.
The text fields in the graphical interfaces support
OpCon token replacement.
[Properties](Properties.md#Tokens) are resolved as the
SAM prepares to send the job to the [LSAM]{.GeneralLSAM}. For additional information about the SMA File Transfer process, refer to [File Transfer
Jobs](File-Transfer-Jobs.md).

 

  --------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White \"X\" icon on red circular background](../../Resources/Images/warning-icon(48x48).png "Warning icon")   **WARNING:** [If the [LSAM]{.GeneralLSAM}s and the machines involved in the file transfer are not properly configured, the file transfer job fails. For more information, refer to [File Transfer Settings](Machines.md#File). These settings are commingled with the [LSAM]{.GeneralLSAM}\'s Job Output Retrieval System (JORS) parameters. For additional information, refer to the [LSAM]{.GeneralLSAM} online help for the desired platform. For more information on the JORS Port Number and viewing job output, refer to [Viewing a Job Output File](Viewing-a-Job-Output-File.md).]
  --------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [ Machine definition for Primary and Alternate machines and Machine Groups is not available for File Transfer Job Details.]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------

## File Information

-   **Machine (Source)**: Defines the machine with the source file to
    transfer. Only the machines enabled for file transfer can be defined
    for this value. Refer to [File Transfer     Settings](Machines.md#File).
-   **User (Source)**: Defines the Batch User ID with access to the file
    on the Source machine. Define \"N/A\" if the platform does not
    require a user. OpCon Users can only
    specify Batch User IDs they have privileges to that are defined in
    [Batch User Privileges](Batch-User-Privileges.md){.MCXref
    .xref}.
-   **Source File**: Defines the full path and file name to transfer.

```{=html}
<!-- -->
```
-   To achieve a multiple file transfer:

```{=html}
<!-- -->
```
-   Use asterisk (\*) as a wildcard to match zero or more characters in
    the source file name.
-   Use question mark (?) as a wildcard to match any single character in
    the source file name.
-   Do not use wildcards in the path leading to the group of files to
    transfer.

```{=html}
<!-- -->
```
-   If you use wildcards for the source file and the source machine does
    not support the feature, the job will fail.

```{=html}
<!-- -->
```
-   **Machine (Destination)**: Defines the machine that will receive the
    file. Only the machines enabled for file transfer can be defined for
    this value. Refer to [File Transfer     Settings](Machines.md#File).

**User (Destination)**: Defines the Batch User ID with access to the
location on the Destination machine that will receive the file. Define
\"N/A\" if the platform does not require a user.
OpCon Users can only specify Batch User IDs
they have privileges to that are defined in [Batch User Privileges](Batch-User-Privileges.md).

**Destination File**: Defines the full path and file name for the
destination.

  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [To use Machine Instance properties, always fully qualify the property so OpCon resolves the correct values (e.g., \[\[MI.LSAMPath.Windows1\]\]). For more information, refer to [Properties](Properties.md#Fully).]
  ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   To achieve a multiple file transfer between two machines that
    support the feature:

Do not use wildcards in the path leading to the group of files to
transfer.

For Windows as destination:

-   Name the destination file with the same wildcard pattern as the
    source file.
-   Use asterisk (\*) as a wildcard to match zero or more characters in
    the file name.
-   Use question mark (?) as a wildcard to match any single character in
    the file name.

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **Examples when Windows is the   | | circular                         | Destination:**                   |
| background](../../Reso           |                                  |
| urces/Images/example-icon(48x48) |                                  |
| .png "Example icon") |                                  |
|                                  | When transferring from Windows   |
|                                  | or UNIX to a [destination        | |                                  | Windows]{.ul} machine, the       |
|                                  | following combinations of Source |
|                                  | and Destination wildcard file    |
|                                  | names are supported:             |
|                                  |                                  |
|                                  | -   [FILE\*.TXT]{styl            | |                                  | e="font-family: 'Courier New';"} |
|                                  |     may be changed to            |
|                                  |     [ANY\*.RTF]{styl             | |                                  | e="font-family: 'Courier New';"} |
|                                  | -   [?FILE\*.TXT]{styl           | |                                  | e="font-family: 'Courier New';"} |
|                                  |     may be changed to            |
|                                  |     [?ANY\*.RTF]{styl            | |                                  | e="font-family: 'Courier New';"} |
|                                  | -   [FIL?XX.TXT]{styl            | |                                  | e="font-family: 'Courier New';"} |
|                                  |     may be changed to            |
|                                  |     [FILE?YYY.RTF]{styl          | |                                  | e="font-family: 'Courier New';"} |
|                                  |                                  |
|                                  | The non-wildcard characters may  |
|                                  | be changed in content and        |
|                                  | length, as long as the wild card |
|                                  | character appears in the same    |
|                                  | relative position. Also, the     |
|                                  | suffix may be changed.           |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | The following combinations of    |
|                                  | Source and Destination wildcard  |
|                                  | file names are not supported by  |
|                                  | the [destination Windows]{.ul}   | |                                  | agent:                           |
|                                  |                                  |
|                                  | -   [C:\\path\\\*today.\*]{styl  | |                                  | e="font-family: 'Courier New';"} |
|                                  |     may not be changed to        |
|                                  |                                  |
|                                  |    [C:\\new\\path\\\*back]{style | |                                  | ="font-family: 'Courier New';"}\ |
|                                  |     (the number of wildcard      |
|                                  |     characters do not match)     |
|                                  | -   [FIL\*XX.TXT]{styl           | |                                  | e="font-family: 'Courier New';"} |
|                                  |     may not be changed to        |
|                                  |     [FIL?XX.TXT]{style           | |                                  | ="font-family: 'Courier New';"}\ |
|                                  |     (the type of wildcard        |
|                                  |     character used does not      |
|                                  |     match)                       |
+----------------------------------+----------------------------------+

For UNIX as destination:

-   Set the destination as the directory for the files to be transferred
    to.
-   Do not define a destination file.

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **Examples when UNIX is the      | | circular                         | Destination:**                   |
| background](../../Reso           |                                  |
| urces/Images/example-icon(48x48) |                                  |
| .png "Example icon") |                                  |
|                                  | The following example is         |
|                                  | supported:                       |
|                                  |                                  |
|                                  | -   Source: /tmp/text\*          |
|                                  | -   Destination: /usr            |
|                                  |                                  |
|                                  | The following example is not     |
|                                  | supported:                       |
|                                  |                                  |
|                                  | -   Source: /tmp/text\*          |
|                                  | -   Destination: /usr/text\*     |
|                                  |     (destination must be a       |
|                                  |     directory)                   |
|                                  |                                  |
|                                  | **Note:** Wildcard file transfer |
|                                  | only supports the Overwrite      |
|                                  | option for \"When File Exists\". |
+----------------------------------+----------------------------------+

-   If you use wildcards for the destination file and the destination
    machine does not support the feature, the job will fail.
-   You can transfer multiple files from a source that supports multiple
    file transfer to a destination that does not. To do this, specify a
    single file name in the destination. The single file created is a
    gzip file; therefore, [SMA Technologies]{.GeneralCompanyName}     recommends naming the file with an extension of \".tar.gz\" (e.g.,
    \"myfiles.tar.gz\").

  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [On File Transfer jobs where an MCP or IBM i machine is the destination machine and the data type is text, the record length of the destination file may be specified. Specify record length by appending a comma to the destination file title, and then the constant \"REC=nnnnn\" (without quotation marks), where nnnnn is the desired record length.]
  ----------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [When a specific blocking factor is required on an MCP destination file, the blocking factor will be identified by the string, \",BLK=nnnnnnnn\", where nnnnnnnn represents the number of records per block to be declared for the destination file. Currently, the customer indicates the record length by the string, \",REC=nnnnnnnn\". The BLK and REC mnemonics are to follow the file title of the destination file, but need not be in any particular order.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [When UNIX is involved in a wildcard transfer, If **File Exists** must be set to **Overwrite**. Also, **Encryption** and **Compression** must be **set to None**.]
  ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Source Data Type**: Defines the data type of the file on the source
machine. The following are valid options:

  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If anything other than Binary is defined as the Source Data Type, the integrity of the file is maintained but the file structure will likely be altered. This is done in an effort to present the transferred file in a user-friendly structure for the given platform.]
  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   **ASCII**: Indicates the file is a simple text file in ASCII format.
    Set this option when the file should explicitly be treated as an
    ASCII file.
-   **Binary**: Indicates the file\'s structure should be left intact
    during the transfer process. This option must be set for all
    non-text files. Additionally, this option should be set for text
    files being transferred between platforms with different text types
    when the file structure should be left in the original form.
-   **Default text**: Indicates that the SMA File Transfer Agent and
    Server should use the default text data type for the platform when
    working with the file. Set this option when the file is a known text
    file, but it is unknown if the file is ASCII or EBCDIC.
-   **EBCDIC**: Indicates a text file that uses the Extended Binary
    Coded Decimal Interchange Code format. (For example, the MCP and IBM
    i platforms use this text type.) Set this option when the file
    should explicitly be treated as an EBCDIC file.

**Destination Data Type**: Defines the final data type of the file that
will be transferred to the destination machine. This data type is
available to support cross-platform file transfers that may require
translation from one text type to another.

-   **ASCII**: Indicates the file should be written to the Destination
    Machine as a simple text file in ASCII format. Set this option when
    the file should explicitly be written as an ASCII file.
-   **Binary**: Indicates the file\'s structure should be left intact
    during the transfer process. This option must be set if the Source
    Data Type is set to Binary, but this option is invalid if the Source
    Data Type is anything other than Binary.
-   **Default text**: Indicates that the SMA File Transfer Agent and
    Server should use the default text data type for the platform when
    working with the file. Set this option when the file is a known text
    file, but it is unknown if the file is ASCII or EBCDIC and must be
    readable on the Destination Machine.
-   **EBCDIC**: Indicates the file should be written to the Destination
    Machine as a text file that uses the Extended Binary Coded Decimal
    Interchange Code format (e.g., the MCP and IBM i platforms use this
    text type). Set this option when the file should explicitly be
    written as an EBCDIC file.

**If File Exists**: Determines how the SMAFT Agent behaves when a target
file exists. The following are valid options:

-   **Do Not Overwrite**: Indicates the SMAFT Agent checks for the
    existence of the file on the destination machine before starting the
    transfer. The job fails if the file exists; otherwise, the job
    proceeds.
-   **Overwrite**: Indicates the SMAFT Agent transfers the file while
    overwriting any existing file on the destination machine.
-   **Backup then Overwrite**: Indicates the SMAFT Agent checks for the
    existence of the file on the destination machine before starting
    transfer. If it exists, the file is copied as \<filename\>.bak (in
    the same directory) and the original file is then overwritten. If
    the file does not exist on the destination machine, a new file is
    created.
-   **Append**: Indicates the SMAFT Agent will append the source file to
    the destination file. If the destination file does not exist, a new
    file is created with destination filename.
-   **Backup then Append**: Indicates the SMAFT Agent checks for
    existence of the file on the destination machine before starting
    transfer. If it exists, the file is copied as \<filename\>.bak (in
    the same directory) and the source file is appended to the original
    destination file. If the file does not exist on the destination
    machine, a new file is created.

**Delete Source File**: Determines if the deletion of the Source File is
disabled, required, or preferred. Only the Windows agent supports this
feature at this time (other platforms will follow). The following are
valid options:

-   **No**: Indicates the Source File will not be deleted upon
    successful completion of the file transfer.
-   **Required**: Indicates the SMAFT job will fail if the Source file
    is not deleted upon successful completion of the file transfer.
-   **Preferred**: Indicates the deletion of the Source File is
    attempted upon successful completion of the file transfer. The
    result of the attempt to delete the source file does not affect the
    final status of the job.

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [z/OS does support the \"delete source file\" option when z/OS is the destination. It is not supported when z/OS is the source.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------

**Maximum Transfer Rate (kbits/second)**: Defines the transfer rate for
the job. Valid values include 64, 128, 256, 512, 1024, 2048, and \>2048
kbits/second.

**Compression**: Determines if compression is disabled, required, or
preferred. Supported compression types are tar, gzip, and zip. The
following are valid options:

-   **\<None\>**: Indicates the transfer does not use compression.
-   **Required**: Indicates the transfer job fails if compression does
    not occur.
-   **Preferred**: Indicates compression is attempted during the
    transfer. The result of the compression attempt does not affect the
    final status of the job.

  ---------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [Both the agent and the server must both support the same compression type for compression to succeed.]
  ---------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------

**Encryption**: Determines if encryption is disabled, required, or
preferred. Supported encryption types are 3DES, AES, and DES. The
following are valid options:

-   **\<None\>**: Indicates the transfer does not use encryption.
-   **Required**: Indicates the job fails if encryption does not occur.
-   **Preferred**: Indicates encryption is attempted during the
    transfer. The result of the encryption attempt does not affect the
    final status of the job.

  ---------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [Both the agent and the server must both support the same encryption type for the encryption to succeed.]
  ---------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------

**Start Transfer On**: Determines where the job will start. This is
important for sites where one machine may be on the outside of a
firewall. File transfers across a firewall should start on the Source
machine if possible. Contact your firewall administrator to open the
required File Transfer Ports. No matter which machine the job starts on,
the file transfer port for that machine must be open on the firewall.
For more information, refer to [File Transfer Settings](Machines.md#File).

This field is enabled only if both machines in the File Transfer
Information have upgraded LSAMs that support starting the transfer on
the Source machine.

  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Each upgraded LSAM must communicate with the OpCon server to send a message indicating it has the capability to start the transfer on the Source machine.]
  ----------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If the LSAMs are not yet upgraded, this field is disabled and the job
will start on the Destination machine.

The valid options include:

-   **Source Machine**: Choose this option to start the job on the
    Source machine.
-   **Destination Machine** (Default selection): Choose this option to
    start the job on the Destination machine.

**TLS Security Override**: Determines if TLS Security for file transfers
is disabled, required, or preferred. The following are valid options:

-   **\<None\>**: Indicates that TLS Security [should not]{.ul} be used     by the SMAFT Agent when connecting to the SMAFT Server.
-   **Required**: Indicates that the SMAFT Agent [must]{.ul} use TLS     Security; otherwise, the job will be failed.
-   **Preferred** (Default): Indicates that the OpCon job request
    assembly routine uses the SMAFT Server Port numbers and the SMAFT
    Server/Agent TLS Capability flags to decide what value to send in
    the TLS Security Mode field.

## Options

The following table lists the LSAM platforms supporting SMA File
Transfer and the options each platform supports as of the publication of
this online help:

+----------+-----------------------+----------------------------+
| Platform | Supported Options     | Supported Values           |
+==========+=======================+============================+
| IBM i    | Source Data Type      | ASCII                      |
|          |                       |                            |
|          |                       | EBCDIC                     |
|          |                       |                            |
|          | **- and -**           | Default Text               |
|          |                       |                            |
|          |                       | Binary                     |
|          |                       |                            |
|          | Destination Data Type |                            |
+----------+-----------------------+----------------------------+
|          | If File Exists        | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Delete Source File    | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Maximum Transfer Rate | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Start Transfer On     | \<All Values\>             |
+----------+-----------------------+----------------------------+
| MCP      | Source Data Type      | ASCII                      |
|          |                       |                            |
|          |                       | EBCDIC                     |
|          |                       |                            |
|          | **- and -**           | Default Text               |
|          |                       |                            |
|          |                       | Binary                     |
|          |                       |                            |
|          | Destination Data Type |                            |
+----------+-----------------------+----------------------------+
|          | If File Exists        | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Maximum Transfer Rate | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Start Transfer On     | Source or Destination      |
|          |                       |                            |
|          |                       | MCP LSAM 04.17 and prior   |
|          |                       | versions support only      |
|          |                       | Destination                |
+----------+-----------------------+----------------------------+
| OS 2200  | Source Data Type      | ASCII                      |
|          |                       |                            |
|          |                       | Default Text               |
|          |                       |                            |
|          | **- and -**           |                            |
|          |                       |                            |
|          |                       |                            |
|          |                       |                            |
|          | Destination Data Type |                            |
+----------+-----------------------+----------------------------+
|          | If File Exists        | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Maximum Transfer Rate | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Start Transfer On     | Destination                |
+----------+-----------------------+----------------------------+
| UNIX     | Source Data Type      | ASCII                      |
|          |                       |                            |
|          |                       | Default Text               |
|          |                       |                            |
|          | *- and -*             | Binary                     |
|          |                       |                            |
|          |                       |                            |
|          |                       |                            |
|          | Destination Data Type |                            |
+----------+-----------------------+----------------------------+
|          | If File Exists        | Single File Transfer       |
|          |                       |                            |
|          |                       | \<All Values\>             |
|          |                       |                            |
|          |                       | Wild Card Transfer         |
|          |                       |                            |
|          |                       | Overwrite                  |
+----------+-----------------------+----------------------------+
|          | Maximum Transfer Rate | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Compression           | Single File Transfer       |
|          |                       |                            |
|          |                       | \<All Values\>             |
|          |                       |                            |
|          |                       | Wild Card Transfer         |
|          |                       |                            |
|          |                       | None                       |
+----------+-----------------------+----------------------------+
|          | Encryption            | Single File Transfer       |
|          |                       |                            |
|          |                       | \<All Values\>             |
|          |                       |                            |
|          |                       | Wild Card Transfer         |
|          |                       |                            |
|          |                       | None                       |
+----------+-----------------------+----------------------------+
|          | Start Transfer On     | \<All Values\>             |
+----------+-----------------------+----------------------------+
| Windows  | Source Data Type      | ASCII                      |
|          |                       |                            |
|          |                       | Default Text               |
|          |                       |                            |
|          | **- and -**           | Binary                     |
|          |                       |                            |
|          |                       |                            |
|          |                       |                            |
|          | Destination Data Type |                            |
+----------+-----------------------+----------------------------+
|          | If File Exists        | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Delete Source File    | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Maximum Transfer Rate | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Compression           | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Encryption            | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Start Transfer On     | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | TLS Security Override | \<All Values\>             |
+----------+-----------------------+----------------------------+
| z/OS     | Source Data Type      | ASCII                      |
|          |                       |                            |
|          |                       | EBCDIC                     |
|          |                       |                            |
|          | **- and -**           | Default Text               |
|          |                       |                            |
|          |                       | Binary                     |
|          |                       |                            |
|          | Destination Data Type |                            |
+----------+-----------------------+----------------------------+
|          | If File Exists        | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Maximum Transfer Rate | \<All Values\>             |
+----------+-----------------------+----------------------------+
|          | Start Transfer On     | Destination                |
+----------+-----------------------+----------------------------+

## Failure Criteria

-   **Fails if \"Preferred\" settings not satisfied**: Determines if the
    job should fail when the file transfer itself succeeds, but the
    transfer did not comply with the preferred settings for Delete
    Source File, Compression, and Encryption.
:::

 

