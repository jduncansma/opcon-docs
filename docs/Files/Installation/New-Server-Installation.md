---
lang: en-us
title: New Server Installation
viewport: width=device-width, initial-scale=1.0
---

#  New Server Installation

  ---------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [Before beginning the installation, complete [Getting Started](Getting-Started.md).]
  ---------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [If installing the SAM and supporting services (SAM-SS) on a machine with a Windows Regional locale setting other than English (US), please contact [SMA Technologies]{.GeneralCompanyName} before installation.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To install the OpCon Server on a server for the first time, use the
procedures in this chapter. To successfully complete a new installation
of an OpCon Server, it is important to complete all of the procedures in
this chapter from beginning to end.

-   To install the OpCon Server interactively, refer to the next
    section.
-   To install the OpCon Server in silent mode, refer to [Silent     Mode](Component-Installations.md#Silent).

## Interactive OpCon Server Installation

[Install the OpCon Server]{.ul} 
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The SAM installation configures the SMA Service Manager as a stand-alone service. If manual or hot failover is desired, refer to [Failover Scenarios](../Database-Information/Failover-Scenarios.md) in the **Database Information** online help.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [When high numbers of LSAMs are in the database, multiple SMANetCom instances can improve performance. To set up multiple SMANetComs, add another section for SMAServMan and give it a unique name. For more information, refer to [TLS Security](../Server-Programs/SMA-Network-Communications-Module.md#TLS) in the **Server Programs** online help.]
  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

On the OpCon Server:

Log in as a *Windows user with Local Administrative Rights*.

Exit all running applications on the desktop.

Download the OpCon Web Installer (OWI) zip file from
<https://github.com/smatechnologies/opcon-web-installer>.

Extract the files and run the OWI to download and launch the installers
for the desired components. SMA OpCon runs before any other component
installer, if selected.

+----------------------------------+----------------------------------+
| ![White pencil/paper icon on     | **NOTE:** [The OpCon Server      | | gray circular                    | should include the following     |
| background](../.                 | components at a                  |
| ./Resources/Images/note-icon(48x | minimum:]            |
| 48).png "Note icon") |                                  |
|                                  | -   [SMA OpCon Enterprise        | |                                  |     Manager](Compone             |
|                                  | nt-Installations.md#Enterpri) |
|                                  | -   [SMA OpCon Agent for         | |                                  |     Microsoft](https://h         |
|                                  | elp.smatechnologies.com/opcon/ag |
|                                  | ents/windows/latest/Files/Agents |
|                                  | /Microsoft/Installation.md#New) |
|                                  | -   [SMA OpCon Database          | |                                  |     Scripts](Component-I       |
|                                  | nstallations.md#SMA_OpCon_Core) |
|                                  | -   [SMA OpCon                   | |                                  |     SAM](Component-I           |
|                                  | nstallations.md#SMA_OpCon_Core) |
+----------------------------------+----------------------------------+

Complete the installer wizard for each component you selected in the
OWI. For details about the specific installers, refer to [Component Installations](Component-Installations.md).

  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Installation of the SMA OpCon Database Scripts, SMA OpCon SAM, and SMA OpCon Solution Manager components have been consolidated into a single installer. The **SMA OpCon Install.exe** file installs and configures all three components.]
  ----------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

[Configure the Server]{.ul} 
For information on configuring the server, refer to [OpCon Server Configuration](OpCon-Server-Configuration.md).

 

[Configure the Enterprise Manager]{.ul} 
For information on setting preferences for the Enterprise Manager, refer
to [Setting Preferences](../UI/Enterprise-Manager/Setting-Preferences.md){.MCXref
.xref} in the **Enterprise Manager** online help.
:::

 

