---
lang: en-us
title: Database Mirroring Checklist
viewport: width=device-width, initial-scale=1.0
---

#  Database Mirroring Checklist

The SQL scripts provided by [SMA Technologies]{.GeneralCompanyName} for mirroring the OpCon database require several scripting variables to
execute successfully. The following sections describe these SQL
scripting variables as defined within the
SMA_SetDBMirroringScriptingVariables.cmd file. Installed with the SAM
and supporting services (SAM-SS), the script is in the \<Configuration
Directory\>\\Utilities\\Database\\ directory. For information on
variables, refer to [Mirroring Tab](../Utilities/Graphical-Utilities/SMA-OpCon-Configuration-Utility.md#Mirrorin){.MCXref
.xref} under the **SMA OpCon Configuration Utility** section in the
**Utilities** online help.

 

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Configuration Directory location is based on where you installed your programs. For more information, refer to [File Locations](../Concepts/File-Locations.md) in the **Concepts** online help.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Mirroring Information Worksheet

Before configuring mirroring in [Setup for Automatic Microsoft SQL Mirroring](Setup-for-Automatic-Microsoft-SQL-Mirroring.md){.MCXref
.xref}, print the form below and fill in the values.

  Scripting Variable                    Value
  ------------------------------------- -------
  PrincipalServerName                    
  PrincipalEndpointPort                  
  FullyQualifiedPrincipalComputerName    
  LoginForPrincipalService               
  PrincipalSQLInstance                   
  FullBackupShareOnMirror                
  TranLogBackupShareOnMirror             
  MirrorServerName                       
  MirrorEndpointPort                     
  FullyQualifiedMirrorComputerName       
  LoginForMirrorService                  
  MirrorSQLInstance                      
  WitnessServerName                      
  WitnessEndpointPort                    
  FullyQualifiedWitnessComputerName      
  LoginForWitnessService                 
  WitnessSQLInstance                     
  DatabaseName                           
  PathToFullBackupFile                   
  PathToTranLogBackupFile                
  FullBackupFilename                     
  TranLogBackupFilename                  
  DBMirroringScriptsDirectory            
  SQLScriptOutputDirectory               
  DBMirroringMonitorUpdatePeriod         

  : Scripting Variables Worksheet for
  SMA_SetDBMirroringScriptingVariables.cmd
:::

 

