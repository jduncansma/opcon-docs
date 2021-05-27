---
lang: en-us
title: Database Replication Checklist
viewport: width=device-width, initial-scale=1.0
---

#  Database Replication Checklist

The SQL scripts provided by [SMA Technologies]{.GeneralCompanyName} for replicating the OpCon/xps database require several scripting variables
to execute successfully. The following sections describe these SQL
scripting variables as defined within the
SMA_SetDBReplicationScriptingVariables.cmd file. Installed with the SAM
and supporting services (SAM-SS), the script is in the \<Configuration
Directory\>\\Utilities\\Database\\ directory. For information on
variables, refer to [Replication Tab](../Utilities/Graphical-Utilities/SMA-OpCon-Configuration-Utility.md#Replicat){.MCXref
.xref} under the **SMA OpCon Configuration Utility** section in the
**Utilities** online help.

 

  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [The Configuration Directory location is based on where you installed your programs. For more information, refer to [File Locations](../Concepts/File-Locations.md) in the **Concepts** online help.]
  ----------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Replication Information Worksheet

Before configuring mirroring in [Setup for Automatic Microsoft SQL Replication](Setup-for-Automatic-Microsoft-SQL-Replication.md){.MCXref
.xref}, print the form below and fill in the values.

  Scripting Variable              Value
  ------------------------------- -------
  DistributorServerName            
  DistributorSQLInstance           
  LoginForDistributorService       
  REPLDATAFolder                   
  PathToDistributionDataFile       
  PathToDistributionLogFile        
  PublisherServerName              
  PublisherSQLInstance             
  LoginForPublisherService         
  PublicationDatabaseName          
  PublicationName                  
  SubscriberServerName             
  SubscriberSQLInstance            
  LoginForSubscriberService        
  SubscriptionDatabaseName         
  OpConxpsServerName               
  DBReplicationScriptsDirectory    
  SQLScriptOutputDirectory         
  RunSnapshotAgentAs               
  RunLogReaderAgentAs              
  RunDistributionAgentAs           
  DomainUser                       
  ReplicationProxyKey              
  DistributorKey                   
  SubscriptionType                 

  : Scripting Variables Worksheet for
  SMA_SetDBReplicationScriptingVariables.cmd
:::

 

