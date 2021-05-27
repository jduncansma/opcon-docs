---
lang: en-us
title: OpCon Release Notes
viewport: width=device-width, initial-scale=1.0
---

+----------------------------------+----------------------------------+
| ![OpCon                          |                                  | | Logo](..                         |                                  |
| /../../Resources/Images/company- |                                  |
| rebrandlogo_colorSM_cropped.png) |                                  |
+----------------------------------+----------------------------------+
| # OpCon Rele                     |                                  |
| ase Notes {#opcon-release-notes} |                                  |
+----------------------------------+----------------------------------+
|                                  |                                  |
+----------------------------------+----------------------------------+
| ## []{#Version20.4.0}            |                                  | | Version 20.4.0 {#version-20.4.0} |                                  |
+----------------------------------+----------------------------------+
| ### 2021 May {#may}              |                                  |
+----------------------------------+----------------------------------+
| #### Enterpri                    |                                  |
| se Manager {#enterprise-manager} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15079**: Fixed an issue  | | background](../../../Resource    | where the \"Number of Days to    |
| s/Images/rn-fixed.png "Fixed ico | Keep a Service Request           |
| n for release notes"){.relnotes} | Execution\" Server Option was    |
|                                  | unable to be changed.            |
+----------------------------------+----------------------------------+
| #### REST API {#rest-api}        |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14790**: Added a new     | | backgroun                        | endpoint for adding a job        |
| d](../../../Resources/Images/rn- | dependency to a daily job, POST  |
| enhancement.png "Enhancement ico | api/dail                         |
| n for release notes"){.relnotes} | yjobs/{dailyJobId}/dependencies. |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14788**: Added a new     | | backgroun                        | endpoint for deleting a job      |
| d](../../../Resources/Images/rn- | dependency on a daily job,       |
| enhancement.png "Enhancement ico | DELETE                           |
| n for release notes"){.relnotes} | api/dailyjobs                    |
|                                  | /{dailyJobId}/dependencies/{id}. |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14784**: The API now     | | backgroun                        | supports adding, updating and    |
| d](../../../Resources/Images/rn- | deleting daily job dependencies  |
| enhancement.png "Enhancement ico | alone on a daily job.            |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| #### ImpEx2 W                    |                                  |
| eb Service {#impex2-web-service} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15146**: Fixed issue     | | background](../../../Resource    | where partial-match              |
| s/Images/rn-fixed.png "Fixed ico | transformation rules only        |
| n for release notes"){.relnotes} | applied to the first occurrence  |
|                                  | in a string                      |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15136**: Fixed an issue  | | background](../../../Resource    | where SAM reused an id for a job |
| s/Images/rn-fixed.png "Fixed ico | instance due to a race condition |
| n for release notes"){.relnotes} | with Deploy                      |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15089**: Fixed an issue  | | background](../../../Resource    | where wildcard named job and     |
| s/Images/rn-fixed.png "Fixed ico | schedule transformation rules    |
| n for release notes"){.relnotes} | that have the same \"current     |
|                                  | value\" caused incorrect         |
|                                  | transformation rules to be       |
|                                  | applied to them. Also, added     |
|                                  | suffix wildcard. \"\*job\" will  |
|                                  | match if job/schedule ends with  |
|                                  | \"job\". \"j\*ob\" and \"job\*\" |
|                                  | will continue behaving as normal |
|                                  | and will match if the            |
|                                  | job/schedule starts with \"job\" |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15036**: Fixed an issue  | | background](../../../Resource    | where                            |
| s/Images/rn-fixed.png "Fixed ico | Thresholds/Resources/Global      |
| n for release notes"){.relnotes} | Properties could sometimes get   |
|                                  | duplicate entries in the target  |
|                                  | environment when transformation  |
|                                  | rules converted source names of  |
|                                  | those entities to the same       |
|                                  | target names.                    |
+----------------------------------+----------------------------------+
|                                  |                                  |
+----------------------------------+----------------------------------+
| ## []{#Version20.3.0}            |                                  | | Version 20.3.0 {#version-20.3.0} |                                  |
+----------------------------------+----------------------------------+
| ### 2021 April {#april}          |                                  |
+----------------------------------+----------------------------------+
| #### Enterprise                  |                                  |
|  Manager {#enterprise-manager-1} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15008**: Fixed an issue  | | background](../../../Resource    | that prevented creating or       |
| s/Images/rn-fixed.png "Fixed ico | opening a job using the          |
| n for release notes"){.relnotes} | Corelation sub-type when using   |
|                                  | Global Properties.               |
+----------------------------------+----------------------------------+
| #### REST API {#rest-api-1}      |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14789**: Added the       | | backgroun                        | ability to modify job            |
| d](../../../Resources/Images/rn- | dependencies as part of the      |
| enhancement.png "Enhancement ico | daily jobs endpoint. Added an    |
| n for release notes"){.relnotes} | endpoint to update an individual |
|                                  | job dependencies.                |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15011**: Fixed an issue  | | background](../../../Resource    | where Self Service would display |
| s/Images/rn-fixed.png "Fixed ico | a \"Cannot load Service Request  |
| n for release notes"){.relnotes} | Executions\" error for several   |
|                                  | days after upgrading to OpCon 20 |
|                                  | or higher.                       |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14843**: Fixed an issue  | | background](../../../Resource    | where the user\'s role was       |
| s/Images/rn-fixed.png "Fixed ico | removed and the password was     |
| n for release notes"){.relnotes} | changed after attempting to      |
|                                  | retrieve a token.                |
+----------------------------------+----------------------------------+
| #### Server {#server}            |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14929**: Fixed an issue  | | background](../../../Resource    | in Netcom where under heavy      |
| s/Images/rn-fixed.png "Fixed ico | communication load with agents,  |
| n for release notes"){.relnotes} | if a message acknowledgement is  |
|                                  | lost or delayed, Netcom created  |
|                                  | a bad \'resend\' message, which  |
|                                  | caused issues on the agent side  |
|                                  | in the tracking file.            |
+----------------------------------+----------------------------------+
| #### ImpEx2 Web                  |                                  |
|  Service {#impex2-web-service-1} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15049**: Fixed an issue  | | background](../../../Resource    | in ImpEx2 where blank batch      |
| s/Images/rn-fixed.png "Fixed ico | users were \"missing\" in        |
| n for release notes"){.relnotes} | simulations.                     |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15030**: Fixed an issue  | | background](../../../Resource    | in ImpEx2 where obsolete job     |
| s/Images/rn-fixed.png "Fixed ico | dependencies in an existing      |
| n for release notes"){.relnotes} | schedule on target system were   |
|                                  | not getting removed.             |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15023**: Fixed an issue  | | background](../../../Resource    | that allows Deploy to correctly  |
| s/Images/rn-fixed.png "Fixed ico | prefix a schedule with the       |
| n for release notes"){.relnotes} | environment code in events.      |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15010**: Fixed an issue  | | background](../../../Resource    | where scheduling options of the  |
| s/Images/rn-fixed.png "Fixed ico | frequencies were not updated     |
| n for release notes"){.relnotes} | correctly if there was changes   |
|                                  | to them in the schedule that was |
|                                  | deployed.                        |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15001**: Fixed an issue  | | background](../../../Resource    | where deploying a schedule with  |
| s/Images/rn-fixed.png "Fixed ico | no documentation would not       |
| n for release notes"){.relnotes} | remove any existing              |
|                                  | documentation.                   |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-15000**: Fixed an issue  | | background](../../../Resource    | in ImpEx2 service where checking |
| s/Images/rn-fixed.png "Fixed ico | available machine features       |
| n for release notes"){.relnotes} | sometimes resulted in a null     |
|                                  | pointer exception.               |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14839**: Fixed an issue  | | background](../../../Resource    | in ImpEx2 to prevent unexpected  |
| s/Images/rn-fixed.png "Fixed ico | data loss when job               |
| n for release notes"){.relnotes} | threshold/resource dependencies  |
|                                  | or events were modified in the   |
|                                  | schedule that was deployed.      |
+----------------------------------+----------------------------------+
|                                  |                                  |
+----------------------------------+----------------------------------+
| ## []{#Version20.2.0}            |                                  | | Version 20.2.0 {#version-20.2.0} |                                  |
+----------------------------------+----------------------------------+
| ### 2021 February {#february}    |                                  |
+----------------------------------+----------------------------------+
| ###                              |                                  |
| # Documentation {#documentation} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14481**: Added Overview  | | backgroun                        | chapter to the OpCon             |
| d](../../../Resources/Images/rn- | Installation section of          |
| enhancement.png "Enhancement ico | documentation. The new chapter   |
| n for release notes"){.relnotes} | contains updates to the          |
|                                  | installation and update process  |
|                                  | and highlights any breaking      |
|                                  | changes requiring action as part |
|                                  | of upgrading.                    |
+----------------------------------+----------------------------------+
| #### Enterprise                  |                                  |
|  Manager {#enterprise-manager-2} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14816**: Fixed an issue  | | background](../../../Resource    | where a SQL job using the SQL    |
| s/Images/rn-fixed.png "Fixed ico | DTExec job action did not        |
| n for release notes"){.relnotes} | display the batch user that the  |
|                                  | job ran as.                      |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14777**: Fixed an issue  | | background](../../../Resource    | where the machine options \"Use  |
| s/Images/rn-fixed.png "Fixed ico | Schedule Instance Machine\" and  |
| n for release notes"){.relnotes} | \"Run on Least Tasked Machine\"  |
|                                  | were not save-able on Windows    |
|                                  | and UNIX jobs.                   |
+----------------------------------+----------------------------------+
| #### General {#general}          |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14583**: Updated the SMA | | background](../../../Resource    | Customer Community link in the   |
| s/Images/rn-fixed.png "Fixed ico | user interfaces.                 |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| #                                |                                  |
| ### Installation {#installation} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14847**: Added           | | background](../../../Resource    | validation during the REST API   |
| s/Images/rn-fixed.png "Fixed ico | startup routine to ensure the    |
| n for release notes"){.relnotes} | database has been properly       |
|                                  | updated.                         |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14889**: OpCon is now    | | backgroun                        | self-contained with .Net Core    |
| d](../../../Resources/Images/rn- | dependencies, so the system does |
| enhancement.png "Enhancement ico | not require .Net Core installed  |
| n for release notes"){.relnotes} | on it to install and run OpCon   |
|                                  | Core services.                   |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14824**: OpCon Deploy\'s | | backgroun                        | ImpEx2 server component now has  |
| d](../../../Resources/Images/rn- | its own installer and will be    |
| enhancement.png "Enhancement ico | available with the OpCon package |
| n for release notes"){.relnotes} | with the same release cadence.   |
|                                  | This makes it easy to upgrade    |
|                                  | ImpEx2 only when needed without  |
|                                  | having to upgrade OpCon or       |
|                                  | Deploy client. It also makes it  |
|                                  | easy to upgrade Deploy client    |
|                                  | without upgrading ImpEx2 or      |
|                                  | OpCon.                           |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14120**: Fixed an issue  | | background](../../../Resource    | in job dependencies for the      |
| s/Images/rn-fixed.png "Fixed ico | automatically installed SMA      |
| n for release notes"){.relnotes} | Utility schedule if jobs were    |
|                                  | converted to multi-instance      |
|                                  | jobs.                            |
+----------------------------------+----------------------------------+
| #### REST API {#rest-api-2}      |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14785**: Added a new     | | backgroun                        | endpoint for retrieving daily    |
| d](../../../Resources/Images/rn- | job dependencies.                |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14886**: Fixed an issue  | | background](../../../Resource    | in self signed certificate       |
| s/Images/rn-fixed.png "Fixed ico | generation where hostname did    |
| n for release notes"){.relnotes} | not match with the name on the   |
|                                  | certificate and it gave          |
|                                  | N                                |
|                                  | ET::ERR_CERT_COMMON_NAME_INVALID |
|                                  | error when trying to browse      |
|                                  | Solution Manager.                |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14871**: Fixed           | | background](../../../Resource    | NullReference exception with     |
| s/Images/rn-fixed.png "Fixed ico | 20.0 migration when Service      |
| n for release notes"){.relnotes} | Requests were missing            |
|                                  | information.                     |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14808**: Fixed an issue  | | background](../../../Resource    | where acknowledging a collection |
| s/Images/rn-fixed.png "Fixed ico | of escalating notifications with |
| n for release notes"){.relnotes} | multiple notifications already   |
|                                  | acknowledged gave a 500 response |
|                                  | code.                            |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14800**: Fixed an issue  | | background](../../../Resource    | in OpCon API where a user could  |
| s/Images/rn-fixed.png "Fixed ico | not add instance properties on a |
| n for release notes"){.relnotes} | file transfer job and any        |
|                                  | existing ones were removed.      |
+----------------------------------+----------------------------------+
| #### Solu                        |                                  |
| tion Manager {#solution-manager} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14906**: Added a         | | backgroun                        | Property Selector Dialog for     |
| d](../../../Resources/Images/rn- | easily searching and selecting a |
| enhancement.png "Enhancement ico | property.                        |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14851**: Add Button to   | | backgroun                        | navigate in context on the       |
| d](../../../Resources/Images/rn- | Processes Page to quickly        |
| enhancement.png "Enhancement ico | consult the Active Jobs          |
| n for release notes"){.relnotes} | associated to an Agent.          |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14818**: Buttons like    | | backgroun                        | Save and Cancel are now always   |
| d](../../../Resources/Images/rn- | visible. Avoid to force the user |
| enhancement.png "Enhancement ico | to scroll down to perform an     |
| n for release notes"){.relnotes} | action.                          |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14774**: DailyJob        | | backgroun                        | Definition Page section menu     |
| d](../../../Resources/Images/rn- | redesigned. It was moved on the  |
| enhancement.png "Enhancement ico | left, is always visible and can  |
| n for release notes"){.relnotes} | be reduced                       |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14770**: Added the       | | backgroun                        | number of pending and exhausted  |
| d](../../../Resources/Images/rn- | notifications to the escalation  |
| enhancement.png "Enhancement ico | indicator. Escalated             |
| n for release notes"){.relnotes} | notifications may now be         |
|                                  | acknowledged even if any of the  |
|                                  | selected notifications were      |
|                                  | already acknowledged.            |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14752**: Updated the     | | backgroun                        | Property Selector to show all    |
| d](../../../Resources/Images/rn- | properties, Global, Job          |
| enhancement.png "Enhancement ico | Instance, Schedule Instance, and |
| n for release notes"){.relnotes} | Machine Instance. An icon was    |
|                                  | added to differentiate the type. |
|                                  | Properties may also be filtered  |
|                                  | by value in addition to name.    |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14605**: Added Filter    | | backgroun                        | Profiles to the Operation        |
| d](../../../Resources/Images/rn- | Summary page for viewing         |
| enhancement.png "Enhancement ico | statistics directly in the       |
| n for release notes"){.relnotes} | dashboard. Added the ability to  |
|                                  | navigate to the processes page   |
|                                  | with the selected Filter Profile |
|                                  | already applied.                 |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12005**: Added Resource  | | backgroun                        | Update and Threshold Update      |
| d](../../../Resources/Images/rn- | sections to the Daily Job        |
| enhancement.png "Enhancement ico | Definition page.                 |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14949**: Fixed an issue  | | background](../../../Resource    | where a Schedule Build request   |
| s/Images/rn-fixed.png "Fixed ico | could be submitted for the       |
| n for release notes"){.relnotes} | incorrect day if opening the     |
|                                  | date picker but selecting no     |
|                                  | values.                          |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14903**: Fixed an issue  | | background](../../../Resource    | in Agents page where right panel |
| s/Images/rn-fixed.png "Fixed ico | actions weren\'t enabled after a |
| n for release notes"){.relnotes} | page refresh.                    |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14875**: Fixed an issue  | | background](../../../Resource    | where environment variable       |
| s/Images/rn-fixed.png "Fixed ico | should not contain \"=\"         |
| n for release notes"){.relnotes} | character.                       |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14864**: Fixed an issue  | | background](../../../Resource    | in Resource Dependency read only |
| s/Images/rn-fixed.png "Fixed ico | mode where condition was         |
| n for release notes"){.relnotes} | displayed in red instead of      |
|                                  | green when total resource number |
|                                  | was equal to required resource.  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14860**: Fixed an issue  | | background](../../../Resource    | in Schedule/ Resource right      |
| s/Images/rn-fixed.png "Fixed ico | panel in PERT, where dependent / |
| n for release notes"){.relnotes} | update job list was not filtered |
|                                  | by the selected Schedule /       |
|                                  | Resource.                        |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14791**: Fixed an issue  | | background](../../../Resource    | where clicking on a Vision Card  |
| s/Images/rn-fixed.png "Fixed ico | with an offset redirects on the  |
| n for release notes"){.relnotes} | wrong Date in the Operation      |
|                                  | Processes Page.                  |
+----------------------------------+----------------------------------+
| #### ImpEx2 Web                  |                                  |
|  Service {#impex2-web-service-2} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14859**: Updated ImpEx2  | | backgroun                        | service (used by Deploy) to      |
| d](../../../Resources/Images/rn- | include SQL agent job            |
| enhancement.png "Enhancement ico | enhancements - using Win Auth    |
| n for release notes"){.relnotes} | for package execution (DTExec)   |
|                                  | and running Integration Services |
|                                  | Server packages - as part of the |
|                                  | deployment to OpCon              |
|                                  | environments.                    |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14898**: Fixed an issue  | | background](../../../Resource    | in ImpEx2 where deploying a      |
| s/Images/rn-fixed.png "Fixed ico | schedule with a department that  |
| n for release notes"){.relnotes} | has no role assigned threw an    |
|                                  | exception.                       |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14830**: Improved error  | | background](../../../Resource    | message content returned to      |
| s/Images/rn-fixed.png "Fixed ico | Deploy when the OpCon API is     |
| n for release notes"){.relnotes} | unreachable.                     |
+----------------------------------+----------------------------------+
|                                  |                                  |
+----------------------------------+----------------------------------+
| ## []{#Version20.01.00}Vers      |                                  | | ion 20.01.00 {#version-20.01.00} |                                  |
+----------------------------------+----------------------------------+
| ### 2021 January {#january}      |                                  |
+----------------------------------+----------------------------------+
| #### Enterprise                  |                                  |
|  Manager {#enterprise-manager-3} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14658**: Fixed an issue  | | background](../../../Resource    | where the Self Service           |
| s/Images/rn-fixed.png "Fixed ico | navigation item would not        |
| n for release notes"){.relnotes} | display for some users.          |
+----------------------------------+----------------------------------+
| ###                              |                                  |
| # Installation {#installation-1} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14761**: Added a         | | backgroun                        | verification step to the SMA     |
| d](../../../Resources/Images/rn- | OpCon Install that validates SMA |
| enhancement.png "Enhancement ico | OpCon Database Scripts, SMA      |
| n for release notes"){.relnotes} | OpCon Documentation, SMA OpCon   |
|                                  | SAM, and SMA OpCon Solution      |
|                                  | Manager have been uninstalled    |
|                                  | before proceeding.               |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14750**: The OpCon       | | background](../../../Resource    | installer now checks to see if   |
| s/Images/rn-fixed.png "Fixed ico | .Net Core 3.1 is installed on    |
| n for release notes"){.relnotes} | the system, required by the core |
|                                  | services, and if not, installs   |
|                                  | it.                              |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14732**: Fixed an issue  | | background](../../../Resource    | where the database connection    |
| s/Images/rn-fixed.png "Fixed ico | information was not editable     |
| n for release notes"){.relnotes} | when doing a Repair/Modify.      |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14684**: Fixed an issue  | | background](../../../Resource    | where database scripting         |
| s/Images/rn-fixed.png "Fixed ico | variables would be reset to      |
| n for release notes"){.relnotes} | default values when performing   |
|                                  | an upgrade.                      |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14657**: Updated the     | | background](../../../Resource    | database connection screen to    |
| s/Images/rn-fixed.png "Fixed ico | re-use the database server and   |
| n for release notes"){.relnotes} | database name entered in the     |
|                                  | database set-up screen during    |
|                                  | new installations.               |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14600**: Fixed an issue  | | background](../../../Resource    | where the SMA OpCon install      |
| s/Images/rn-fixed.png "Fixed ico | would not remember SQL           |
| n for release notes"){.relnotes} | authentication selections when   |
|                                  | an attempt to modify the         |
|                                  | installation was made.           |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14576**: Fixed an issue  | | background](../../../Resource    | where the SMA OpCon install      |
| s/Images/rn-fixed.png "Fixed ico | would use an incorrect directory |
| n for release notes"){.relnotes} | for data files when installing   |
|                                  | on a non-system drive.           |
+----------------------------------+----------------------------------+
| #### REST API {#rest-api-3}      |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14680**: Added the       | | backgroun                        | ability for the OpCon API to     |
| d](../../../Resources/Images/rn- | filter machines by file transfer |
| enhancement.png "Enhancement ico | role. The criterial              |
| n for release notes"){.relnotes} | \"fileTransferRole\"accepts      |
|                                  | values of \"both\", \"none\",    |
|                                  | \"source\", \"destination\", and |
|                                  | \"any\".                         |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14670**: The OpCon API   | | backgroun                        | can now create new incident      |
| d](../../../Resources/Images/rn- | tickets in the Daily Job         |
| enhancement.png "Enhancement ico | Definitions.                     |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14655**: The OpCon API   | | backgroun                        | now provides functionality to    |
| d](../../../Resources/Images/rn- | edit file transfer job details   |
| enhancement.png "Enhancement ico | for a daily job having           |
| n for release notes"){.relnotes} | Windows/UNIX machines.           |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14557**: The OpCon API   | | backgroun                        | now provides functionality to    |
| d](../../../Resources/Images/rn- | view file transfer job details   |
| enhancement.png "Enhancement ico | for a daily job.                 |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14713**: Fixed an issue  | | background](../../../Resource    | where Service Request event      |
| s/Images/rn-fixed.png "Fixed ico | definitions would be incorrect   |
| n for release notes"){.relnotes} | when using a system variable     |
|                                  | more than once in the            |
|                                  | definition.                      |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14663**: Fixed an issue  | | background](../../../Resource    | where changing daily job         |
| s/Images/rn-fixed.png "Fixed ico | statuses as a user with no       |
| n for release notes"){.relnotes} | defined external token would     |
|                                  | throw a                          |
|                                  | System.NullReferenceException    |
|                                  | error.                           |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14649**: Fixed an issue  | | background](../../../Resource    | where a user without user        |
| s/Images/rn-fixed.png "Fixed ico | management privileges would      |
| n for release notes"){.relnotes} | receive a \"The user specified   |
|                                  | in the request does not exist.\" |
|                                  | error when executing a service   |
|                                  | request defined with the Submit  |
|                                  | events as ocadm option enabled.  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14611**: Fixed an issue  | | background](../../../Resource    | where retrieving job summary     |
| s/Images/rn-fixed.png "Fixed ico | information for a job with a     |
| n for release notes"){.relnotes} | machine group would fail with a  |
|                                  | \"\'TRIM\' is not a recognized   |
|                                  | built-in function name\" error   |
|                                  | on SQL Server versions lower     |
|                                  | than SQL Server 2017.            |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14587**: Fixed an issue  | | background](../../../Resource    | where retrieving Job Output for  |
| s/Images/rn-fixed.png "Fixed ico | a previous run of a job would    |
| n for release notes"){.relnotes} | generate an error when the job   |
|                                  | was recurring and currently in a |
|                                  | waiting status.                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14238**: Removed the     | | background](../../../Resource    | name of a role when it is        |
| s/Images/rn-fixed.png "Fixed ico | displayed in Vision Cards or     |
| n for release notes"){.relnotes} | Service Requests when the user   |
|                                  | does not have permission to that |
|                                  | role.                            |
+----------------------------------+----------------------------------+
| #### Server {#server-1}          |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14516**: Fixed a         | | background](../../../Resource    | performance issue with schedule  |
| s/Images/rn-fixed.png "Fixed ico | builds that contain large        |
| n for release notes"){.relnotes} | amounts of sub-schedules.        |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14464**: Fixed an issue  | | background](../../../Resource    | where an embedded script with a  |
| s/Images/rn-fixed.png "Fixed ico | line ending in backslash gave    |
| n for release notes"){.relnotes} | syntax errors when running it on |
|                                  | agent.                           |
+----------------------------------+----------------------------------+
| #### Soluti                      |                                  |
| on Manager {#solution-manager-1} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14654**: The Operations  | | backgroun                        | Processes and Agents grids can   |
| d](../../../Resources/Images/rn- | be modified to only display the  |
| enhancement.png "Enhancement ico | desired columns for Schedules,   |
| n for release notes"){.relnotes} | Jobs, or Machines. This          |
|                                  | selection is automatically saved |
|                                  | in the user\'s profile.          |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14575**: Escalated       | | backgroun                        | notifications can now be         |
| d](../../../Resources/Images/rn- | acknowledged from Solution       |
| enhancement.png "Enhancement ico | Manager or through the OpCon     |
| n for release notes"){.relnotes} | API. A pop-up notification will  |
|                                  | appear within Solution Manager   |
|                                  | when new notifications enter     |
|                                  | escalation. An indicator was     |
|                                  | added to the bar at the bottom   |
|                                  | of the screen by the Agent       |
|                                  | Status icon when there are       |
|                                  | escalating notifications which   |
|                                  | need to be acknowledge. Finally  |
|                                  | a dialog was added allowing      |
|                                  | users to acknowledge the         |
|                                  | escalated notifications.         |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14574**: File Transfer   | | backgroun                        | Jobs can now be consulted /      |
| d](../../../Resources/Images/rn- | changed from the DailyJob        |
| enhancement.png "Enhancement ico | Definition screen.               |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12004**: Expression      | | backgroun                        | Dependencies can now be          |
| d](../../../Resources/Images/rn- | consulted / changed from the     |
| enhancement.png "Enhancement ico | DailyJob Definition screen.      |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12003**: Threshold and   | | backgroun                        | Resource Dependencies can now be |
| d](../../../Resources/Images/rn- | consulted / changed from the     |
| enhancement.png "Enhancement ico | DailyJob Definition screen.      |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-11031**: UNIX Jobs can   | | backgroun                        | now be consulted / changed from  |
| d](../../../Resources/Images/rn- | the DailyJob Definition screen.  |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14674**: Fixed a         | | background](../../../Resource    | cosmetic issue where NumberField |
| s/Images/rn-fixed.png "Fixed ico | doesn\'t appear correcty in some |
| n for release notes"){.relnotes} | situations                       |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14597**: Fixed an issue  | | background](../../../Resource    | in Schedule Build where the      |
| s/Images/rn-fixed.png "Fixed ico | schedules would not build \"On   |
| n for release notes"){.relnotes} | Hold\" even when the option was  |
|                                  | selected.                        |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14584**: Fixed an issue  | | background](../../../Resource    | where validation was not         |
| s/Images/rn-fixed.png "Fixed ico | case-insensitive and allowed the |
| n for release notes"){.relnotes} | same name to be used for Vision  |
|                                  | actions, frequencies, and remote |
|                                  | instances.                       |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14567**: Fixed an issue  | | background](../../../Resource    | in Schedule Build where the      |
| s/Images/rn-fixed.png "Fixed ico | pre-defined properties on a      |
| n for release notes"){.relnotes} | Named Instance schedule were not |
|                                  | able to be updated.              |
+----------------------------------+----------------------------------+
|                                  |                                  |
+----------------------------------+----------------------------------+
| ## []{#Version20.00.00}Vers      |                                  | | ion 20.00.00 {#version-20.00.00} |                                  |
+----------------------------------+----------------------------------+
| ### 2020 November {#november}    |                                  |
+----------------------------------+----------------------------------+
| #### Docker {#docker}            |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14366**: The SMASynchSAP | | backgroun                        | utility is now available in the  |
| d](../../../Resources/Images/rn- | \"opcon-server\" image.          |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14189**: The SMAHoliday  | | backgroun                        | utility is now available in the  |
| d](../../../Resources/Images/rn- | \"opcon-server\" image.          |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14186**: The Chronoman   | | backgroun                        | utility is now available in the  |
| d](../../../Resources/Images/rn- | \"opcon-server\" image.          |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13578**: The             | | backgroun                        | \"opcon-server\" image supports  |
| d](../../../Resources/Images/rn- | four new environmental variables |
| enhancement.png "Enhancement ico | for changing regional settings.  |
| n for release notes"){.relnotes} | You can find out more in the     |
|                                  | Configuration section at         |
|                                  | https://hub.docker.com           |
|                                  | /r/smatechnologies/opcon-server. |
|                                  | The new variables are:           |
|                                  |                                  |
|                                  | -   LANG_CULTURE                 |
|                                  | -   NUMERIC_CULTURE              |
|                                  | -   MONETARY_CULTURE             |
|                                  | -   DATEFORMAT_CULTURE           |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12671**: The Windows     | | backgroun                        | Event Log, Network Message, SNMP |
| d](../../../Resources/Images/rn- | Trap, SPO Event Report, and Run  |
| enhancement.png "Enhancement ico | Command notification types are   |
| n for release notes"){.relnotes} | now correctly disabled when      |
|                                  | running in Docker. Existing      |
|                                  | notifications of these types     |
|                                  | will be disabled if upgrading    |
|                                  | from Windows to Docker.          |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14485**: The following   | | background](../../../Resource    | environment variables have been  |
| s/Images/rn-fixed.png "Fixed ico | deprecated for the               |
| n for release notes"){.relnotes} | \"opcon-server\" image:          |
|                                  |                                  |
|                                  | -   API_USES_TLS                 |
|                                  | -   SM_WEB_SSL                   |
|                                  | -   SM_WEB_PORT                  |
|                                  | -   SM_DOC_DIR_PATH              |
|                                  | -   SM_SYSTEM_DEBUG              |
|                                  | -   SM_SYSTEM_DEBUG_API          |
|                                  | -   SM_THEME                     |
|                                  | -   SM_ENVIRONMENT_NAME          |
|                                  | -   SM_SYSTEM_LOG_MAXHISTORY     |
|                                  | -   SM_SETUP                     |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13307**: The             | | background](../../../Resource    | \"opcon-server\" image was       |
| s/Images/rn-fixed.png "Fixed ico | updated to Ubuntu 18.04.         |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| #### Enterprise                  |                                  |
|  Manager {#enterprise-manager-4} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13597**: Updated the SAP | | backgroun                        | Login dialog for SAP jobs to be  |
| d](../../../Resources/Images/rn- | resizable.                       |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13576**: Added \"Terms   | | backgroun                        | of Use\" link to the Login       |
| d](../../../Resources/Images/rn- | Window.                          |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13032**: Added the       | | backgroun                        | ability to open Solution Manager |
| d](../../../Resources/Images/rn- | pages from Enterprise Manager. A |
| enhancement.png "Enhancement ico | new General Server Option,       |
| n for release notes"){.relnotes} | Solution Manager URL, enables    |
|                                  | this functionality.              |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12679**: SQL Agent jobs  | | backgroun                        | using the MS SQL DTExec job      |
| d](../../../Resources/Images/rn- | action can now run SSIS packages |
| enhancement.png "Enhancement ico | on the Integration Services      |
| n for release notes"){.relnotes} | Server (ISSERVER).               |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12678**: SQL Agent jobs  | | backgroun                        | can now run SSIS packages with   |
| d](../../../Resources/Images/rn- | MS SQL DTExec job action using   |
| enhancement.png "Enhancement ico | Windows Authentication.          |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14227**: Fixed an issue  | | background](../../../Resource    | where an exception would be      |
| s/Images/rn-fixed.png "Fixed ico | thrown if users attempted to log |
| n for release notes"){.relnotes} | out after their session timed    |
|                                  | out.                             |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14013**: Fixed an issue  | | background](../../../Resource    | where added properties would     |
| s/Images/rn-fixed.png "Fixed ico | incorrectly duplicate when       |
| n for release notes"){.relnotes} | defining instance properties on  |
|                                  | a named instance schedule.       |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13607**: Fixed an issue  | | background](../../../Resource    | where a java.sql.SQLException    |
| s/Images/rn-fixed.png "Fixed ico | could be thrown after a user     |
| n for release notes"){.relnotes} | session was logged out or timed  |
|                                  | out.                             |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13150**: Added a warning | | background](../../../Resource    | to the SAP Query dialog          |
| s/Images/rn-fixed.png "Fixed ico | informing users that when Search |
| n for release notes"){.relnotes} | Criteria only contains a         |
|                                  | wildcard (\*), additional text   |
|                                  | should be used (e.g., XBP\*) in  |
|                                  | order to limit results.          |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13054**: Fixed an issue  | | background](../../../Resource    | where values were not being      |
| s/Images/rn-fixed.png "Fixed ico | updated and saved correctly on   |
| n for release notes"){.relnotes} | MCP Run Job definitions when     |
|                                  | using System Properties.         |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13051**: Fixed an issue  | | background](../../../Resource    | with the UNIX Job Sub-Type       |
| s/Images/rn-fixed.png "Fixed ico | Episys: Find Report from RSJ     |
| n for release notes"){.relnotes} | Output where using an \'         |
|                                  | (apostrophe/single quote) in the |
|                                  | Report Name would cause a job    |
|                                  | failure.                         |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12779**: Fixed an issue  | | background](../../../Resource    | where forecasting Even Weeks or  |
| s/Images/rn-fixed.png "Fixed ico | Odd Weeks frequencies in the     |
| n for release notes"){.relnotes} | Enterprise Manager would         |
|                                  | incorrectly show the wrong day   |
|                                  | as the start of the week.        |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12766**: Fixed an issue  | | background](../../../Resource    | with Escalation Acknowledgement  |
| s/Images/rn-fixed.png "Fixed ico | where sometimes the wrong year   |
| n for release notes"){.relnotes} | was displayed.                   |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12674**: The Arguments   | | background](../../../Resource    | field in MCP Job Details now     |
| s/Images/rn-fixed.png "Fixed ico | allows multiple commas.          |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12050**: Fixed an issue  | | background](../../../Resource    | where the View JCL function on   |
| s/Images/rn-fixed.png "Fixed ico | z/OS jobs was using the          |
| n for release notes"){.relnotes} | incorrect port.                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-11625**: Fixed an issue  | | background](../../../Resource    | in Workflow Designer where       |
| s/Images/rn-fixed.png "Fixed ico | adding a dependency to a job     |
| n for release notes"){.relnotes} | with \"Use Schedule Instance     |
|                                  | Machine\" as the machine         |
|                                  | selection incorrectly required   |
|                                  | the Role_ocadm role.             |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-11608**: Fixed an issue  | | background](../../../Resource    | when extracting Audit data to a  |
| s/Images/rn-fixed.png "Fixed ico | csv file where the Name, Old     |
| n for release notes"){.relnotes} | Value, and New Value fields were |
|                                  | not properly escaping quotes.    |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-11256**: Updated the     | | background](../../../Resource    | path to the correct location for |
| s/Images/rn-fixed.png "Fixed ico | the embedded Java Runtime        |
| n for release notes"){.relnotes} | Environment with Schedule        |
|                                  | Extract.                         |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-10815**: Fixed an issue  | | background](../../../Resource    | where the Escalation Add/Edit    |
| s/Images/rn-fixed.png "Fixed ico | Rule dialog would not display    |
| n for release notes"){.relnotes} | all fields properly.             |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-10280**: Fixed an issue  | | background](../../../Resource    | where renaming a UNIX Batch User |
| s/Images/rn-fixed.png "Fixed ico | would incorrectly update all     |
| n for release notes"){.relnotes} | jobs that used the old group to  |
|                                  | the new group value.             |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-10275**: Fixed an issue  | | background](../../../Resource    | where resetting the password of  |
| s/Images/rn-fixed.png "Fixed ico | a user with XML characters in it |
| n for release notes"){.relnotes} | would cause exceptions in        |
|                                  | SMANotifyHandler.                |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-10049**: Fixed an issue  | | background](../../../Resource    | where OS 2200 jobs could not be  |
| s/Images/rn-fixed.png "Fixed ico | saved without providing an       |
| n for release notes"){.relnotes} | Element Name, even when ECL was  |
|                                  | stored in a file.                |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-9699**: Fixed an issue   | | background](../../../Resource    | where Schedule Extract could not |
| s/Images/rn-fixed.png "Fixed ico | extract the following event      |
| n for release notes"){.relnotes} | types: \$CALENDAR:ADD,           |
|                                  | \$CALENDAR:DEL,                  |
|                                  | \$JOBMASTER:TAGDEL,              |
|                                  | \$JOBMASTER:TAGADD, and          |
|                                  | \$JOBMASTER:BUILDSTATE.          |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-9163**: Fixed an issue   | | background](../../../Resource    | where the \"SAP Machine\" menu   |
| s/Images/rn-fixed.png "Fixed ico | option in the Machines editor    |
| n for release notes"){.relnotes} | would not display correctly or   |
|                                  | would be disabled for SAP        |
|                                  | machine types.                   |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-9122**: Fixed an issue   | | background](../../../Resource    | where a Conflict message was     |
| s/Images/rn-fixed.png "Fixed ico | logged when right-clicking a     |
| n for release notes"){.relnotes} | schedule in an Operations view.  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-8429**: Fixed an issue   | | background](../../../Resource    | where Windows Command: File Copy |
| s/Images/rn-fixed.png "Fixed ico | and Command: File Delete jobs    |
| n for release notes"){.relnotes} | would not save the Other Options |
|                                  | value correctly.                 |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-8428**: Fixed an issue   | | background](../../../Resource    | where changing a job sub-type    |
| s/Images/rn-fixed.png "Fixed ico | would retain hidden settings     |
| n for release notes"){.relnotes} | from a prior job definition.     |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-6194**: Fixed an issue   | | background](../../../Resource    | where the \"Delete Source File\" |
| s/Images/rn-fixed.png "Fixed ico | option was incorrectly made      |
| n for release notes"){.relnotes} | available for File Transfer jobs |
|                                  | running on machines that did not |
|                                  | support that functionality.      |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-6118**: Fixed an issue   | | background](../../../Resource    | where the \"Modify Jobs in Daily |
| s/Images/rn-fixed.png "Fixed ico | Schedules\" Departmental         |
| n for release notes"){.relnotes} | Function Privilege did not allow |
|                                  | users to Edit Daily Schedules as |
|                                  | described in the documentation.  |
+----------------------------------+----------------------------------+
| #### General {#general-1}        |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14315**: OpCon server    | | backgroun                        | components are now able to run   |
| d](../../../Resources/Images/rn- | on a FIPS enabled server.        |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13472**: Added three new | | backgroun                        | Password Requirements Server     |
| d](../../../Resources/Images/rn- | Options:                         |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} | -   Minimum number of lower-case |
|                                  |     characters required          |
|                                  | -   Minimum number of upper-case |
|                                  |     characters required          |
|                                  | -   Minimum number of days       |
|                                  |     between password changes     |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13445**: Updated the     | | backgroun                        | Unique Task Counts report to     |
| d](../../../Resources/Images/rn- | include job counts regardless of |
| enhancement.png "Enhancement ico | whether or not a task-based      |
| n for release notes"){.relnotes} | license is in place.             |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12954**: Added a new     | | backgroun                        | General Server Option, Number of |
| d](../../../Resources/Images/rn- | Days to Keep a Service Request   |
| enhancement.png "Enhancement ico | Execution, which defines the     |
| n for release notes"){.relnotes} | number of days to retain service |
|                                  | request execution history. SMA   |
|                                  | Request Router was updated to    |
|                                  | handle deleting Service Request  |
|                                  | Executions based on the new      |
|                                  | Server Option and delete any     |
|                                  | OPCONRSP records that do not     |
|                                  | have a matching associated       |
|                                  | Service Request Execution.       |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-11028**: The default     | | backgroun                        | password policy for new          |
| d](../../../Resources/Images/rn- | installations has been modified  |
| enhancement.png "Enhancement ico | to be more secure. The following |
| n for release notes"){.relnotes} | default values were changed:     |
|                                  |                                  |
|                                  | -   Number of passwords to       |
|                                  |     retain in history. 0 to 10.  |
|                                  | -   Requires numeric characters. |
|                                  |     False to True.               |
|                                  | -   Requires alpha characters.   |
|                                  |     False to True.               |
|                                  | -   Requires special characters. |
|                                  |     False to True.               |
|                                  | -   Number of days a password is |
|                                  |     valid. 0 to 365.             |
|                                  | -   Number of failed logon       |
|                                  |     attempts before account      |
|                                  |     lockout. 0 to 5.             |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13165**: External Event  | | backgroun                        | Passwords have been rebranded to |
| d](../../../Resources/Images/rn- | External Tokens. Additionally,   |
| enhancement.png "Enhancement ico | several large updates have been  |
| n for release notes"){.relnotes} | made:                            |
|                                  |                                  |
|                                  | -   External Token values will   |
|                                  |     now be salted and hashed for |
|                                  |     storage in the database.     |
|                                  | -   The ability to use External  |
|                                  |     Tokens may now be disabled.  |
|                                  |     By default, this will be     |
|                                  |     disabled for all new users.  |
|                                  | -   External Tokens are now      |
|                                  |     system-generated values.     |
|                                  |     Pre-existing users will not  |
|                                  |     have their existing token    |
|                                  |     values updated, but if the   |
|                                  |     value needs to be changed or |
|                                  |     for any new user this will   |
|                                  |     no longer be a user provided |
|                                  |     value.                       |
|                                  | -   The new system-generated     |
|                                  |     External Tokens will be      |
|                                  |     unique identifiers. When     |
|                                  |     this option is selected, the |
|                                  |     External Token may be used   |
|                                  |     as a token for the SMA OpCon |
|                                  |     RestAPI and no longer        |
|                                  |     require authentication with  |
|                                  |     an interactive username and  |
|                                  |     password.                    |
|                                  | -   The ability to generate a    |
|                                  |     fixed-length password has    |
|                                  |     been provided for backwards  |
|                                  |     compatibility on Agents that |
|                                  |     do not support unique        |
|                                  |     identifiers as a value. The  |
|                                  |     value will still be          |
|                                  |     system-generated.            |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14490**: Fixed an issue  | | background](../../../Resource    | where Start Time Calculator      |
| s/Images/rn-fixed.png "Fixed ico | would incorrectly produce audit  |
| n for release notes"){.relnotes} | records when updating estimated  |
|                                  | start times. Database upgrades   |
|                                  | will no longer attempt to remove |
|                                  | these invalid records.           |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12030**: Fixed an issue  | | background](../../../Resource    | where dependencies could point   |
| s/Images/rn-fixed.png "Fixed ico | to an incorrect instance when    |
| n for release notes"){.relnotes} | converting between a regular     |
|                                  | schedule and a multi-instance    |
|                                  | schedule.                        |
+----------------------------------+----------------------------------+
| ###                              |                                  |
| # Installation {#installation-2} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14245**: There is a new  | | backgroun                        | installer, SMA OpCon. This       |
| d](../../../Resources/Images/rn- | installer takes the place of SMA |
| enhancement.png "Enhancement ico | OpCon Database Scripts, SMA      |
| n for release notes"){.relnotes} | OpCon SAM, and SMA OpCon         |
|                                  | Solution Manager. These three    |
|                                  | components should be uninstalled |
|                                  | during an upgrade prior to       |
|                                  | installing SMA OpCon. The SMA    |
|                                  | OpCon Documentation install has  |
|                                  | also been decommissioned and     |
|                                  | should be uninstalled during     |
|                                  | upgrade.                         |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13924**: Updated the     | | backgroun                        | default Maximum SQL Transaction  |
| d](../../../Resources/Images/rn- | Log file size from 1 GB to 10    |
| enhancement.png "Enhancement ico | GB.                              |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12981**: The SMAUtility  | | backgroun                        | Schedule is now installed during |
| d](../../../Resources/Images/rn- | new OpCon database               |
| enhancement.png "Enhancement ico | installations. Pre-existing      |
| n for release notes"){.relnotes} | databases will not contain any   |
|                                  | modifications. Updates include:  |
|                                  |                                  |
|                                  | -   Embedded the SMAUtility      |
|                                  |     scripts in the database      |
|                                  | -   Moved the user name and      |
|                                  |     password for SMAUtility SQL  |
|                                  |     scripts from the scripts to  |
|                                  |     job arguments                |
|                                  | -   Moved the SQL script output  |
|                                  |     to the job output file       |
|                                  | -   Added the following global   |
|                                  |     properties: DB_SERVER_NAME,  |
|                                  |     SqlMaintUser,                |
|                                  |     SqlMaintPassword,            |
|                                  |     DatabaseName,                |
|                                  |     PathToFullBackupFile, and    |
|                                  |     PathToTranLogBackupFile. The |
|                                  |     value of these global        |
|                                  |     properties must be updated   |
|                                  |     prior to running the         |
|                                  |     schedule.                    |
|                                  | -   The Report File Cleanup job  |
|                                  |     has been updated to have a   |
|                                  |     Job Build Status of Do Not   |
|                                  |     Schedule                     |
|                                  | -   SMA DBCC Index Defrag job    |
|                                  |     frequency has been updated   |
|                                  |     to run every Sunday          |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14033**: Fixed an issue  | | background](../../../Resource    | caused in the database upgrade   |
| s/Images/rn-fixed.png "Fixed ico | due to a rare duplicate          |
| n for release notes"){.relnotes} | dependency of a multi-instance   |
|                                  | schedule or sub-schedule.        |
+----------------------------------+----------------------------------+
| #### Operations {#operations}    |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14542**: The database    | | backgroun                        | scripts for SMAUtility           |
| d](../../../Resources/Images/rn- | maintenance jobs will no longer  |
| enhancement.png "Enhancement ico | be distributed beginning with    |
| n for release notes"){.relnotes} | the OpCon 21.00.00 (LTS)         |
|                                  | release. The scripts will be     |
|                                  | added as embedded scripts on new |
|                                  | installations and will be        |
|                                  | available at                     |
|                                  | https://github.com/smatec        |
|                                  | hnologies/smautility-sql-scripts |
|                                  | for upgrades.                    |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14541**: Documentation   | | backgroun                        | is now available on our online   |
| d](../../../Resources/Images/rn- | site                             |
| enhancement.png "Enhancement ico | h                                |
| n for release notes"){.relnotes} | ttps://help.smatechnologies.com. |
|                                  | Solution Manager and Enterprise  |
|                                  | Manager have been updated to     |
|                                  | point to their version of the    |
|                                  | OpCon documentation. Web         |
|                                  | documentation will no longer be  |
|                                  | distributed as part of a release |
|                                  | distribution. PDFs will continue |
|                                  | to be available as part of the   |
|                                  | release distribution.            |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14195**: zVSE Agent is   | | backgroun                        | now officially decommissioned    |
| d](../../../Resources/Images/rn- | and is no longer distributed.    |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| #### REST API {#rest-api-4}      |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14389**: Added session   | | backgroun                        | log file rotation based on size  |
| d](../../../Resources/Images/rn- | and date.                        |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14240**: The OpCon API   | | backgroun                        | now exposes a new end point to   |
| d](../../../Resources/Images/rn- | fetch, update and delete         |
| enhancement.png "Enhancement ico | incident ticket information on a |
| n for release notes"){.relnotes} | daily job.                       |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14164**: Updated the SMA | | backgroun                        | OpCon RestAPI configuration file |
| d](../../../Resources/Images/rn- | to accept log levels 0 - 4 and   |
| enhancement.png "Enhancement ico | removed superfluous logging      |
| n for release notes"){.relnotes} | messages from Vision.            |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14147**: The SMA OpCon   | | backgroun                        | RestAPI only accepts HTTPS       |
| d](../../../Resources/Images/rn- | connections. The default port    |
| enhancement.png "Enhancement ico | for new installations is now     |
| n for release notes"){.relnotes} | 443.                             |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14127**: Added a new     | | backgroun                        | endpoint, GET                    |
| d](../../../Resources/Images/rn- | api/dailyjobs/{id}/status, that  |
| enhancement.png "Enhancement ico | returns the status of the        |
| n for release notes"){.relnotes} | specified job.                   |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14059**: Return a new    | | backgroun                        | property, uid, when doing a GET  |
| d](../../../Resources/Images/rn- | api/scheduleactions/{id} for     |
| enhancement.png "Enhancement ico | jobs successfuly added when      |
| n for release notes"){.relnotes} | doing a POST api/scheduleactions |
|                                  | and where {id} is the id         |
|                                  | returned in the POST.            |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13894**: Added a new     | | backgroun                        | endpoint, POST                   |
| d](../../../Resources/Images/rn- | api/serviceRequestExecutions,    |
| enhancement.png "Enhancement ico | for submitting service requests. |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13529**: Added the       | | backgroun                        | version number to the SMA OpCon  |
| d](../../../Resources/Images/rn- | RestAPI log at startup.          |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13331**: A license is no | | backgroun                        | longer required to use the REST  |
| d](../../../Resources/Images/rn- | API.                             |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14135**: Added new       | | backgroun                        | internal endpoints for session   |
| d](../../../Resources/Images/rn- | logs with GET/POST methods used  |
| enhancement.png "Enhancement ico | to create log files, get a list  |
| n for release notes"){.relnotes} | of log files, and get log file   |
|                                  | content.                         |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13585**: Added new       | | backgroun                        | endpoint for vision cards with   |
| d](../../../Resources/Images/rn- | PUT/POST/DELETE methods          |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14415**: Users with no   | | background](../../../Resource    | roles are allowed to PUT on      |
| s/Images/rn-fixed.png "Fixed ico | their own user object with an    |
| n for release notes"){.relnotes} | empty roles collection.          |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14368**: SMA OpCon       | | background](../../../Resource    | RestAPI setcertificate command   |
| s/Images/rn-fixed.png "Fixed ico | now works correctly with using a |
| n for release notes"){.relnotes} | custom certificate.              |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14243**: Modified the    | | background](../../../Resource    | GET api/remoteInstances endpoint |
| s/Images/rn-fixed.png "Fixed ico | to hide the database connection  |
| n for release notes"){.relnotes} | password in the response.        |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14132**: Fixed an issue  | | background](../../../Resource    | with the SMA OpCon RestAPI where |
| s/Images/rn-fixed.png "Fixed ico | it would throw an exception when |
| n for release notes"){.relnotes} | pulling a high volume of jobs    |
|                                  | with a specified status for a    |
|                                  | specified date.                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13882**: Fixed an issue  | | background](../../../Resource    | with the REST SMA OpCon RestAPI  |
| s/Images/rn-fixed.png "Fixed ico | Vision service where gathering   |
| n for release notes"){.relnotes} | daily job statistics would cause |
|                                  | performance issues.              |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13594**: Fixed an issue  | | background](../../../Resource    | where a user with Role_ocadm     |
| s/Images/rn-fixed.png "Fixed ico | could not update another user    |
| n for release notes"){.relnotes} | with Role_ocadm privileges.      |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13393**: TLS 1.0 will no | | background](../../../Resource    | longer be supported with the SMA |
| s/Images/rn-fixed.png "Fixed ico | OpCon RestAPI.                   |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13317**: Fixed an issue  | | background](../../../Resource    | where unknown user records       |
| s/Images/rn-fixed.png "Fixed ico | appeared in audit when an        |
| n for release notes"){.relnotes} | expired account has been used to |
|                                  | log in to the API. Expired users |
|                                  | are now prevented from           |
|                                  | performing any other action but  |
|                                  | GET/PUT on their respective      |
|                                  | user.                            |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12965**: Fixed an issue  | | background](../../../Resource    | in the SMA OpCon RestAPI where   |
| s/Images/rn-fixed.png "Fixed ico | updating embedded script jobs    |
| n for release notes"){.relnotes} | with certain users caused the    |
|                                  | incorrect error message of \"Job |
|                                  | with Id {id} is not an embedded  |
|                                  | script job\".                    |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12925**: Fixed an issue  | | background](../../../Resource    | in the SMA OpCon RestAPI when    |
| s/Images/rn-fixed.png "Fixed ico | requesting job output on a job   |
| n for release notes"){.relnotes} | that had run multiple times and  |
|                                  | was currently in a waiting       |
|                                  | status caused an error message   |
|                                  | of \"Job not yet running\".      |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12904**: Fixed the       | | background](../../../Resource    | ordering of jobHistories queries |
| s/Images/rn-fixed.png "Fixed ico | when using offset parameter.     |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12737**: Fixed an issue  | | background](../../../Resource    | in the SMA OpCon RestAPI where   |
| s/Images/rn-fixed.png "Fixed ico | updating the advanced failure    |
| n for release notes"){.relnotes} | criteria of a daily job would    |
|                                  | not show the correct error when  |
|                                  | the \"EQ\" operator is preceded  |
|                                  | by a value other than \"OR\".    |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12709**: Fixed an issue  | | background](../../../Resource    | in the SMA OpCon RestAPI where   |
| s/Images/rn-fixed.png "Fixed ico | updating a daily job would       |
| n for release notes"){.relnotes} | incorrectly allow no machine to  |
|                                  | be provided for the job.         |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12653**: Fixed an issue  | | background](../../../Resource    | where Embedded Script Jobs could |
| s/Images/rn-fixed.png "Fixed ico | be updated to run on a Machine   |
| n for release notes"){.relnotes} | Group containing Machines        |
|                                  | without Embedded Script          |
|                                  | Privileges.                      |
+----------------------------------+----------------------------------+
| #### Server {#server-2}          |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14204**: Updated         | | backgroun                        | prioritization of unprocessed    |
| d](../../../Resources/Images/rn- | work for SMA Request Router. Job |
| enhancement.png "Enhancement ico | output requests and manual       |
| n for release notes"){.relnotes} | schedule builds will now take    |
|                                  | priority over automated tasks    |
|                                  | such as scheduled builds.        |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14063**: Added more      | | backgroun                        | clarity to the error message if  |
| d](../../../Resources/Images/rn- | SMALDAPMon is unable to access   |
| enhancement.png "Enhancement ico | user account information.        |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13927**: Added the       | | backgroun                        | UniqueId property of daily jobs  |
| d](../../../Resources/Images/rn- | to the records stored in history |
| enhancement.png "Enhancement ico | after jobs complete.             |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12983**: The Maintain    | | backgroun                        | UNIX Ouptut Files job has been   |
| d](../../../Resources/Images/rn- | removed from the SMAUtility      |
| enhancement.png "Enhancement ico | Schedule.                        |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12982**: The Schedule    | | backgroun                        | Log Cleanup job has been removed |
| d](../../../Resources/Images/rn- | from the SMAUtility Schedule.    |
| enhancement.png "Enhancement ico | The removal of schedule build    |
| n for release notes"){.relnotes} | logs is now controlled by a new  |
|                                  | Logging Server Option: Maximum   |
|                                  | number of days Schedule Build    |
|                                  | logs should be kept.             |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12245**: Updated the     | | backgroun                        | maximum machines allowed per     |
| d](../../../Resources/Images/rn- | SMANetCom instance to 2048 and   |
| enhancement.png "Enhancement ico | no longer allow this value to be |
| n for release notes"){.relnotes} | exceeded.                        |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12001**: Updated SMADDI  | | backgroun                        | to add two new job status        |
| d](../../../Resources/Images/rn- | events, \$JOB:FIXED and          |
| enhancement.png "Enhancement ico | \$JOB:REVIEW.                    |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12685**: SQL Server 2019 | | backgroun                        | is now supported for the OpCon   |
| d](../../../Resources/Images/rn- | database.                        |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14341**: Fixed an issue  | | background](../../../Resource    | where schedule permission        |
| s/Images/rn-fixed.png "Fixed ico | validation for schedule builds   |
| n for release notes"){.relnotes} | and deletes could cause slowness |
|                                  | or database errors.              |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14163**: Fixed an issue  | | background](../../../Resource    | where the SMTP setting\'s user   |
| s/Images/rn-fixed.png "Fixed ico | was being impersonated to attach |
| n for release notes"){.relnotes} | local file attachments to the    |
|                                  | notification email instead of    |
|                                  | only impersonating for UNC       |
|                                  | files.                           |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14097**: Fixed an issue  | | background](../../../Resource    | in SMADDI where the validation   |
| s/Images/rn-fixed.png "Fixed ico | of the predecessor job name when |
| n for release notes"){.relnotes} | a job dependency was added       |
|                                  | included the \"Job Name Like\"   |
|                                  | option.                          |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14038**: Fixed an issue  | | background](../../../Resource    | in SMANetCom where log file      |
| s/Images/rn-fixed.png "Fixed ico | locks sometimes are never        |
| n for release notes"){.relnotes} | acquired in an agent             |
|                                  | communication thread and no      |
|                                  | further messages are processed   |
|                                  | for that agent.                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14003**: Fixed an issue  | | background](../../../Resource    | in SAM where incorrect syntax in |
| s/Images/rn-fixed.png "Fixed ico | schedule/job instance properties |
| n for release notes"){.relnotes} | in a property add event          |
|                                  | prevented SAM from checking user |
|                                  | privileges, instead creating a   |
|                                  | global property.                 |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-14001**: Fixed an issue  | | background](../../../Resource    | with SMALDAPMon where it would   |
| s/Images/rn-fixed.png "Fixed ico | produce concurrency errors when  |
| n for release notes"){.relnotes} | updating users.                  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13993**: Fixed a bug     | | background](../../../Resource    | where the Exclude Id parameter   |
| s/Images/rn-fixed.png "Fixed ico | in \$NOTIFY events was being     |
| n for release notes"){.relnotes} | treated as \"N\" when the value  |
|                                  | sent was \"Y\" with one or more  |
|                                  | trailing spaces.                 |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13943**: Fixed an issue  | | background](../../../Resource    | with SAM where OS 2200 job start |
| s/Images/rn-fixed.png "Fixed ico | messages were sent with          |
| n for release notes"){.relnotes} | incorrect non-XML job            |
|                                  | information.                     |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13906**: Fixed an issue  | | background](../../../Resource    | with SMASchedMan where logging   |
| s/Images/rn-fixed.png "Fixed ico | was causing significant          |
| n for release notes"){.relnotes} | performance issues.              |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13658**: Fixed an issue  | | background](../../../Resource    | in Start Time Calculator, where  |
| s/Images/rn-fixed.png "Fixed ico | if an error happened when adding |
| n for release notes"){.relnotes} | multiple predecessors with the   |
|                                  | same name, all other jobs had    |
|                                  | invalid estimated start times.   |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13621**: Fixed an issue  | | background](../../../Resource    | with SMASchedMan where named     |
| s/Images/rn-fixed.png "Fixed ico | instance schedules were built    |
| n for release notes"){.relnotes} | once for each property defined.  |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13466**: Fixed an issue  | | background](../../../Resource    | in SMANetCom where sometimes     |
| s/Images/rn-fixed.png "Fixed ico | data sent by an agent failed to  |
| n for release notes"){.relnotes} | be received by SMANetCom in a    |
|                                  | timely manner and caused delays  |
|                                  | in job status updates.           |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13379**: Fixed an issue  | | background](../../../Resource    | where Remote Instance properties |
| s/Images/rn-fixed.png "Fixed ico | would resolve property values    |
| n for release notes"){.relnotes} | from the local instance of       |
|                                  | OpCon.                           |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13200**: Fixed an issue  | | background](../../../Resource    | in SMALDAPMon where the          |
| s/Images/rn-fixed.png "Fixed ico | configuration option             |
| n for release notes"){.relnotes} | \'EnableSsl\' would not work     |
|                                  | correctly.                       |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13163**: Fixed an issue  | | background](../../../Resource    | with SMALDAPMon where the Domain |
| s/Images/rn-fixed.png "Fixed ico | setting would return an          |
| n for release notes"){.relnotes} | \"Invalid Credentials\" error.   |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13139**: Fixed an issue  | | background](../../../Resource    | in SMALDAPMon where users with   |
| s/Images/rn-fixed.png "Fixed ico | commas in their display name and |
| n for release notes"){.relnotes} | other un-escaped characters      |
|                                  | would cause errors during        |
|                                  | synchronization.                 |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13130**: Fixed an issue  | | background](../../../Resource    | where SMA Notify Hander would    |
| s/Images/rn-fixed.png "Fixed ico | shut down if a database error    |
| n for release notes"){.relnotes} | happened at startup.             |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13081**: Fixed an issue  | | background](../../../Resource    | where SMALDAPMon could not find  |
| s/Images/rn-fixed.png "Fixed ico | groups that contained escape     |
| n for release notes"){.relnotes} | characters. Additionally         |
|                                  | enhanced log messaging to remove |
|                                  | duplicate messages when adding   |
|                                  | new users and always writing a   |
|                                  | shutdown requested message.      |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-13042**: Fixed an issue  | | background](../../../Resource    | in SMA Notify Handler where      |
| s/Images/rn-fixed.png "Fixed ico | Short Text Message notifications |
| n for release notes"){.relnotes} | were generating an encoding      |
|                                  | error.                           |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12998**: Fixed an issue  | | background](../../../Resource    | in SMA Notify Handler where the  |
| s/Images/rn-fixed.png "Fixed ico | user\'s profile was not loaded   |
| n for release notes"){.relnotes} | correctly after impersonation to |
|                                  | run command.                     |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12952**: Fixed an issue  | | background](../../../Resource    | with SAM where the displayed     |
| s/Images/rn-fixed.png "Fixed ico | number of restarts on a job was  |
| n for release notes"){.relnotes} | incorrect.                       |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12920**: Fixed an issue  | | background](../../../Resource    | where an unclear error message   |
| s/Images/rn-fixed.png "Fixed ico | was thrown by BIRTPROCESSOR when |
| n for release notes"){.relnotes} | passing a value other than 0     |
|                                  | when a parameter was used with   |
|                                  | \"\>\".                          |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12900**: Fixed an issue  | | background](../../../Resource    | where frequency priority was     |
| s/Images/rn-fixed.png "Fixed ico | incorrectly set during a job     |
| n for release notes"){.relnotes} | copy or job move to a schedule   |
|                                  | with frequencies.                |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12899**: Fixed an issue  | | background](../../../Resource    | where agent-specific fields were |
| s/Images/rn-fixed.png "Fixed ico | incorrectly copied during a      |
| n for release notes"){.relnotes} | Machine copy.                    |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12898**: Fixed an issue  | | background](../../../Resource    | in SMASchedMan where             |
| s/Images/rn-fixed.png "Fixed ico | \$SCHEDULE:BUILD events with a   |
| n for release notes"){.relnotes} | \[\[\$NOW\]\] schedule date      | |                                  | parameter would sometimes build  |
|                                  | on an incorrect date.            |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12763**: Fixed an issue  | | background](../../../Resource    | in SMALSAMDataRetriever where it |
| s/Images/rn-fixed.png "Fixed ico | sometimes kept running in memory |
| n for release notes"){.relnotes} | after completing work.           |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12668**: Fixed an issue  | | background](../../../Resource    | where a multi-instance schedule  |
| s/Images/rn-fixed.png "Fixed ico | would not get built if it        |
| n for release notes"){.relnotes} | contained special characters in  |
|                                  | the named instance definition.   |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12573**: Fixed an issue  | | background](../../../Resource    | where user credentials were      |
| s/Images/rn-fixed.png "Fixed ico | logged when an event was         |
| n for release notes"){.relnotes} | submitted with XML characters in |
|                                  | a field.                         |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-12388**: Fixed an issue  | | background](../../../Resource    | with SMA Notify Handler          |
| s/Images/rn-fixed.png "Fixed ico | notifications where \"\\r\",     |
| n for release notes"){.relnotes} | \"\\n\", and \"\\t\" were        |
|                                  | treated as additional text       |
|                                  | instead of formatting.           |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-11337**: Fixed an issue  | | background](../../../Resource    | with SMA Dynamic Data Input      |
| s/Images/rn-fixed.png "Fixed ico | where schedules could not be     |
| n for release notes"){.relnotes} | created after a SKDID of 32770   |
|                                  | had been reached.                |
+----------------------------------+----------------------------------+
| ![Black text on green            | **OPCON-9246**: Fixed an issue   | | background](../../../Resource    | with the Property Expressions    |
| s/Images/rn-fixed.png "Fixed ico | API Syntax where the Replace     |
| n for release notes"){.relnotes} | function could not replace a     |
|                                  | backslash (\\) unless another    |
|                                  | character was specified with the |
|                                  | backslash. A new property        |
|                                  | expression function,             |
|                                  | ReplaceBackslashes, has been     |
|                                  | created with two arguments, the  |
|                                  | string to search and the         |
|                                  | replacement character.           |
+----------------------------------+----------------------------------+
| #### Soluti                      |                                  |
| on Manager {#solution-manager-2} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14286**: The Vision      | | backgroun                        | Settings page and all of its     |
| d](../../../Resources/Images/rn- | functionality has been replaced  |
| enhancement.png "Enhancement ico | with \"Admin Mode\" in Vision    |
| n for release notes"){.relnotes} | Live. The ability to edit an     |
|                                  | individual card and its children |
|                                  | is now available rather than     |
|                                  | having to update the entire      |
|                                  | Vision Workspace with each       |
|                                  | change.                          |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14141**: Added a new     | | backgroun                        | Server Option, Enable Windows    |
| d](../../../Resources/Images/rn- | Authentication, that controls if |
| enhancement.png "Enhancement ico | the ability to log in with       |
| n for release notes"){.relnotes} | windows authentication to        |
|                                  | Solution Manager is available.   |
|                                  | This setting needs to be updated |
|                                  | to true to continue using after  |
|                                  | upgrading to 20.00.              |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-14036**: Solution        | | backgroun                        | Manager will now be installed as |
| d](../../../Resources/Images/rn- | part of the SMA OpCon RestAPI.   |
| enhancement.png "Enhancement ico | The SMA OpCon RestAPI web server |
| n for release notes"){.relnotes} | will also act as the web server  |
|                                  | for Solution Manager. The two    |
|                                  | components will share a port and |
|                                  | TLS settings, meaning that       |
|                                  | either the address for either    |
|                                  | Solution Manager or the RestAPI  |
|                                  | must change and be updated where |
|                                  | it is in use. Solution Manager   |
|                                  | will be available at             |
|                                  | https://{hostname}:{port} and    |
|                                  | the RestAPI at                   |
|                                  | https://{hostname}:{port}/api    |
|                                  | where port is what was selected  |
|                                  | as part of the installation.     |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13577**: Added \"Terms   | | backgroun                        | of Use\" link to the Login       |
| d](../../../Resources/Images/rn- | Screen.                          |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13371**: A migration     | | backgroun                        | page was added for first login   |
| d](../../../Resources/Images/rn- | after an upgrade. Custom date    |
| enhancement.png "Enhancement ico | patterns for service request     |
| n for release notes"){.relnotes} | inputs, RegEx patterns for       |
|                                  | service request inputs, or an    |
|                                  | Operation filter profile that    |
|                                  | cannot be parsed may all require |
|                                  | migration. The migration action  |
|                                  | must be performed by the ocadm   |
|                                  | user.                            |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13251**: Revamped the    | | backgroun                        | Named Instances form on the      |
| d](../../../Resources/Images/rn- | Instance Definition step of      |
| enhancement.png "Enhancement ico | Schedule Build.                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13249**: Job             | | backgroun                        | Configuration has been renamed   |
| d](../../../Resources/Images/rn- | to Daily Job definition. The     |
| enhancement.png "Enhancement ico | following updates were made to   |
| n for release notes"){.relnotes} | Daily Job definition:            |
|                                  |                                  |
|                                  | -   On Windows, the Execute      |
|                                  |     Program: Prerun input is     |
|                                  |     hidden when not defined.     |
|                                  | -   Added additional form        |
|                                  |     validation.                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13247**: Job Output      | | backgroun                        | Viewer is now a dialog.          |
| d](../../../Resources/Images/rn- |                                  |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13242**: Documentation   | | backgroun                        | is no longer provided            |
| d](../../../Resources/Images/rn- | internally. It is now directly   |
| enhancement.png "Enhancement ico | accessible from the internet as  |
| n for release notes"){.relnotes} | online help.                     |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13241**: A new button is | | backgroun                        | available to select Windows      |
| d](../../../Resources/Images/rn- | Authentication on the login page |
| enhancement.png "Enhancement ico | when it is enabled.              |
| n for release notes"){.relnotes} |                                  |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13237**: The setup page  | | backgroun                        | has been removed due to the      |
| d](../../../Resources/Images/rn- | combining Solution Manager with  |
| enhancement.png "Enhancement ico | the SMA OpCon RestAPI. The       |
| n for release notes"){.relnotes} | remaining setup and              |
|                                  | configuration options are now    |
|                                  | handled in the Application       |
|                                  | Settings area by a user with     |
|                                  | Role_ocadm privileges.           |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13224**: Users now have  | | backgroun                        | the ability to edit Vision cards |
| d](../../../Resources/Images/rn- | that do not contain a role they  |
| enhancement.png "Enhancement ico | possess. The Role_ocadm role has |
| n for release notes"){.relnotes} | been removed from the role       |
|                                  | selection because it is          |
|                                  | automatically included on all    |
|                                  | Vision cards.                    |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13223**: Vision Health   | | backgroun                        | has an updated layout on smaller |
| d](../../../Resources/Images/rn- | displays. A breadcrumb was added |
| enhancement.png "Enhancement ico | to the bottom-left of the page   |
| n for release notes"){.relnotes} | to show selected cards. Vision   |
|                                  | Health Diagnostic page is now    |
|                                  | visible for users with the       |
|                                  | \"View Vision Workspace\"        |
|                                  | functional privilege.            |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13221**: Cross instance  | | backgroun                        | navigation using Vision cards    |
| d](../../../Resources/Images/rn- | requires each OpCon environment  |
| enhancement.png "Enhancement ico | to be running OpCon 20 or        |
| n for release notes"){.relnotes} | higher.                          |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13208**: The Service     | | backgroun                        | Request OpCon Event Editor and   |
| d](../../../Resources/Images/rn- | Input Variable editors are now   |
| enhancement.png "Enhancement ico | dialogs instead of dedicated     |
| n for release notes"){.relnotes} | pages. The dialog appears with   |
|                                  | the rest of the button\'s        |
|                                  | content in the background. This  |
|                                  | is helpful when updating these   |
|                                  | fields and is quicker as you     |
|                                  | navigate between events or       |
|                                  | inputs. SelfServiceRequest Date  |
|                                  | Input Variable: Date Output      |
|                                  | Formatting changed from Java     |
|                                  | Date Pattern to Javascript       |
|                                  | Moment Date Pattern.             |
|                                  | SelfServiceRequest               |
|                                  | Text/TextCollection Input        |
|                                  | Variable: Validation Regex       |
|                                  | changed from Java Regex Pattern  |
|                                  | to Javascript Regex Pattern.     |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13205**: The URL has     | | backgroun                        | changed for Service Request      |
| d](../../../Resources/Images/rn- | Executions. A Service Request    |
| enhancement.png "Enhancement ico | may be executed by directly      |
| n for release notes"){.relnotes} | accessing this URL.              |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-13002**: The URL for     | | backgroun                        | Operation Processes has been     |
| d](../../../Resources/Images/rn- | changed. All selections are      |
| enhancement.png "Enhancement ico | represented in the address and   |
| n for release notes"){.relnotes} | providing an address with        |
|                                  | selections will automatically    |
|                                  | apply them when the page loads.  |
|                                  | The syntax for providing filter  |
|                                  | profiles has changed but         |
|                                  | operates in the same way as      |
|                                  | other selections.                |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12837**: Self Service    | | backgroun                        | added a few features simplifying |
| d](../../../Resources/Images/rn- | the creation of button:          |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} | -   A preview button was added   |
|                                  |     to the edit screen which     |
|                                  |     displays the Custom HTML     |
|                                  |     entered. This preview button |
|                                  |     dynamically updates as the   |
|                                  |     HTML string is modified.     |
|                                  |     This allows you to verify    |
|                                  |     the button appearance before |
|                                  |     saving the changes.          |
|                                  | -   A date pattern checker was   |
|                                  |     added to the user input      |
|                                  |     field\'s date type. This     |
|                                  |     helps validate the date      |
|                                  |     format entered resolves to   |
|                                  |     the expected value.          |
|                                  | -   A regex pattern checker was  |
|                                  |     added the input fields where |
|                                  |     regex is allowed. This helps |
|                                  |     validate the regex entered   |
|                                  |     resolves to the expected     |
|                                  |     value.                       |
|                                  | -   The ocadm role is hidden     |
|                                  |     from the granted/revoked     |
|                                  |     screen and is granted by     |
|                                  |     default.                     |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12836**: Right-clicking  | | backgroun                        | a row in an Operations Process   |
| d](../../../Resources/Images/rn- | grid will select the row and     |
| enhancement.png "Enhancement ico | open or close the side panel.    |
| n for release notes"){.relnotes} | The ability to hide and show     |
|                                  | columns in the grid has been     |
|                                  | removed.                         |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12834**: The Profile     | | backgroun                        | screen has been expanded to      |
| d](../../../Resources/Images/rn- | contain application and user     |
| enhancement.png "Enhancement ico | settings making these settings   |
| n for release notes"){.relnotes} | more accessible. A few of the    |
|                                  | parameters which are now         |
|                                  | configurable within these screes |
|                                  | are: language, date/time         |
|                                  | formats, refresh intervals,      |
|                                  | debug settings, environment      |
|                                  | name, theme, windows             |
|                                  | authentication, and Vision\'s    |
|                                  | warning settings.                |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12833**: When the User   | | backgroun                        | Account\'s session expires, a    |
| d](../../../Resources/Images/rn- | login dialog is displayed which  |
| enhancement.png "Enhancement ico | allows the user to log back in.  |
| n for release notes"){.relnotes} | The behavior in previous         |
|                                  | releases was to exit the current |
|                                  | screen moving back to the login  |
|                                  | screen.                          |
+----------------------------------+----------------------------------+
| ![Black text on blue             | **OPCON-12649**: As a part of    | | backgroun                        | the Solution Manager rewrite, we |
| d](../../../Resources/Images/rn- | made several general updates:    |
| enhancement.png "Enhancement ico |                                  |
| n for release notes"){.relnotes} | -   Visual components such as    |
|                                  |     Forms, EditLists and         |
|                                  |     Switches have been           |
|                                  |     redesigned.                  |
|                                  | -   The Solution Manager URL is  |
|                                  |     now updated as you select    |
|                                  |     certain items in the screen  |
|                                  |     (filters in Operation or     |
|                                  |     expanding specific fields in |
|                                  |     the Daily Job Definition).   |
|                                  |     This allows users to share   |
|                                  |     the URL with others showing  |
|                                  |     the exact screen they are    |
|                                  |     viewing. It also allows      |
|                                  |     users to bookmark the screen |
|                                  |     to save a common view.       |
|                                  | -   The Notification Center has  |
|                                  |     been removed due to lack of  |
|                                  |     use.                         |
|                                  | -   Internet Explorer 11 is no   |
|                                  |     longer supported.            |
+----------------------------------+----------------------------------+
:::

 

