---
lang: en-us
title: General
viewport: width=device-width, initial-scale=1.0
---


The General category contains default behavior settings for the SAM.

+-----------------+---------------+---------------+-----------------+
| Option          | Default       | Dynamic (Y/N) | Description     |
| Parameter       |               |               |                 |
+=================+:=============:+:=============:+=================+
| Job Dependency  | Calendar Days | Y             | -   This        |
| Offset Type     |               |               |     parameter   |
|                 |               |               |     determines  |
|                 |               |               |     if the Job  |
|                 |               |               |                 |
|                 |               |               |    Dependencies |
|                 |               |               |     with Offset |
|                 |               |               |     values are  |
|                 |               |               |     calculated  |
|                 |               |               |     with        |
|                 |               |               |     calendar    |
|                 |               |               |     days or     |
|                 |               |               |     with        |
|                 |               |               |     occurrence  |
|                 |               |               |     of the job. |
|                 |               |               |     -   If      |
|                 |               |               |                 |
|                 |               |               |        Calendar |
|                 |               |               |         Days is |
|                 |               |               |                 |
|                 |               |               |       selected, |
|                 |               |               |         [O      | |                 |               |               | pCon]{.GeneralO |
|                 |               |               | pConGlobalName} |
|                 |               |               |         will    |
|                 |               |               |         look    |
|                 |               |               |         for the |
|                 |               |               |         job on  |
|                 |               |               |         the     |
|                 |               |               |                 |
|                 |               |               |       specified |
|                 |               |               |         number  |
|                 |               |               |         of      |
|                 |               |               |                 |
|                 |               |               |        calendar |
|                 |               |               |         days    |
|                 |               |               |         offset  |
|                 |               |               |         from    |
|                 |               |               |         the     |
|                 |               |               |         current |
|                 |               |               |                 |
|                 |               |               |        schedule |
|                 |               |               |         date.   |
|                 |               |               |     -   If      |
|                 |               |               |                 |
|                 |               |               |      Occurrence |
|                 |               |               |         is      |
|                 |               |               |                 |
|                 |               |               |       selected, |
|                 |               |               |         [O      | |                 |               |               | pCon]{.GeneralO |
|                 |               |               | pConGlobalName} |
|                 |               |               |         will    |
|                 |               |               |         look    |
|                 |               |               |         for the |
|                 |               |               |         job on  |
|                 |               |               |         the     |
|                 |               |               |                 |
|                 |               |               |        numbered |
|                 |               |               |                 |
|                 |               |               |      occurrence |
|                 |               |               |         of the  |
|                 |               |               |                 |
|                 |               |               |       schedule. |
|                 |               |               | -   JobB        |
|                 |               |               |     depends on  |
|                 |               |               |     JobA from   |
|                 |               |               |                 |
|                 |               |               |    yesterday\'s |
|                 |               |               |     schedule,   |
|                 |               |               |     or if there |
|                 |               |               |     were        |
|                 |               |               |     holidays in |
|                 |               |               |     between -   |
|                 |               |               |     the last    |
|                 |               |               |     time Job A  |
|                 |               |               |     was on the  |
|                 |               |               |     schedule).  |
|                 |               |               |     -   The     |
|                 |               |               |                 |
|                 |               |               |        Calendar |
|                 |               |               |         Days    |
|                 |               |               |         option  |
|                 |               |               |         would   |
|                 |               |               |         not     |
|                 |               |               |         meet    |
|                 |               |               |         this    |
|                 |               |               |         need    |
|                 |               |               |         because |
|                 |               |               |         of the  |
|                 |               |               |         holiday |
|                 |               |               |                 |
|                 |               |               |    requirement. |
|                 |               |               |         With    |
|                 |               |               |                 |
|                 |               |               |        calendar |
|                 |               |               |         days on |
|                 |               |               |         a 5-day |
|                 |               |               |         work    |
|                 |               |               |         week,   |
|                 |               |               |         the     |
|                 |               |               |         Tuesday |
|                 |               |               |         through |
|                 |               |               |         Friday  |
|                 |               |               |         jobs    |
|                 |               |               |         would   |
|                 |               |               |         resolve |
|                 |               |               |                 |
|                 |               |               |        properly |
|                 |               |               |         to the  |
|                 |               |               |                 |
|                 |               |               |        previous |
|                 |               |               |                 |
|                 |               |               |        calendar |
|                 |               |               |         day.    |
|                 |               |               |                 |
|                 |               |               |        However, |
|                 |               |               |         the job |
|                 |               |               |         on      |
|                 |               |               |         Monday  |
|                 |               |               |         would   |
|                 |               |               |         be      |
|                 |               |               |         looking |
|                 |               |               |         for     |
|                 |               |               |         JobA on |
|                 |               |               |         Sunday  |
|                 |               |               |         because |
|                 |               |               |         it is   |
|                 |               |               |         one     |
|                 |               |               |                 |
|                 |               |               |        Calendar |
|                 |               |               |         Day     |
|                 |               |               |         back.   |
|                 |               |               |     -   This    |
|                 |               |               |                 |
|                 |               |               |        customer |
|                 |               |               |         should  |
|                 |               |               |         choose  |
|                 |               |               |         to use  |
|                 |               |               |         the     |
|                 |               |               |                 |
|                 |               |               |      Occurrence |
|                 |               |               |         option  |
|                 |               |               |         for job |
|                 |               |               |                 |
|                 |               |               |      dependency |
|                 |               |               |         offset  |
|                 |               |               |                 |
|                 |               |               |    calculation. |
|                 |               |               |         [O      | |                 |               |               | pCon]{.GeneralO |
|                 |               |               | pConGlobalName} |
|                 |               |               |         will    |
|                 |               |               |         look    |
|                 |               |               |         back to |
|                 |               |               |         the     |
|                 |               |               |         last    |
|                 |               |               |                 |
|                 |               |               |      occurrence |
|                 |               |               |         of Job  |
|                 |               |               |         A       |
|                 |               |               |         before  |
|                 |               |               |                 |
|                 |               |               |      \"today\", |
|                 |               |               |         thus    |
|                 |               |               |                 |
|                 |               |               |       resolving |
|                 |               |               |                 |
|                 |               |               |        properly |
|                 |               |               |         for     |
|                 |               |               |         Monday  |
|                 |               |               |         through |
|                 |               |               |         Friday  |
|                 |               |               |         on a    |
|                 |               |               |         5-day   |
|                 |               |               |                 |
|                 |               |               |       schedule. |
|                 |               |               | -   Valid       |
|                 |               |               |     values are  |
|                 |               |               |     Calendar    |
|                 |               |               |     Days and    |
|                 |               |               |     Occurrence. |
+-----------------+---------------+---------------+-----------------+
| Alternate Odd   | False         | Y             | The alternate   |
| and Even Weeks  |               |               | to the Odd/Even |
|                 |               |               | Weeks frequency |
|                 |               |               | is Every Other  |
|                 |               |               | Week. By        |
|                 |               |               | setting the     |
|                 |               |               | Server Option   |
|                 |               |               | \"Alternate Odd |
|                 |               |               | and Even        |
|                 |               |               | Weeks\" to      |
|                 |               |               | \"True,\" jobs  |
|                 |               |               | using the       |
|                 |               |               | Odd/Even Weeks  |
|                 |               |               | frequency will  |
|                 |               |               | be treated as   |
|                 |               |               | Every Other     |
|                 |               |               | Week frequency. |
+-----------------+---------------+---------------+-----------------+
| Number of Runs  | 10            | Y             | -   Defines the |
| Included in Job |               |               |     number of   |
| Average         |               |               |     most recent |
| Calculations    |               |               |     job history |
|                 |               |               |     records to  |
|                 |               |               |     use when    |
|                 |               |               |     SAM         |
|                 |               |               |     Calculates  |
|                 |               |               |     Job         |
|                 |               |               |     Averages.   |
|                 |               |               | -   Valid       |
|                 |               |               |     values      |
|                 |               |               |     range from  |
|                 |               |               |     1 to 999.   |
+-----------------+---------------+---------------+-----------------+
| []{#S           | False         | Y             | -   Determines  | | AM_Calculates_J |               |               |     if SAM      |
| ob_Averages}SAM |               |               |     calculates  |
| Calculates Job  |               |               |     job start   |
| Averages        |               |               |     and run     |
|                 |               |               |     time        |
|                 |               |               |     averages    |
|                 |               |               |     after each  |
|                 |               |               |     job run.    |
|                 |               |               | -   If this     |
|                 |               |               |     value is    |
|                 |               |               |     set to      |
|                 |               |               |     True:       |
|                 |               |               |     -   SAM     |
|                 |               |               |                 |
|                 |               |               |      calculates |
|                 |               |               |         the     |
|                 |               |               |         average |
|                 |               |               |         times   |
|                 |               |               |         the way |
|                 |               |               |         the     |
|                 |               |               |                 |
|                 |               |               |      SMA_JOBAVG |
|                 |               |               |         stored  |
|                 |               |               |                 |
|                 |               |               |       procedure |
|                 |               |               |         does.   |
|                 |               |               |         For     |
|                 |               |               |         more    |
|                 |               |               |                 |
|                 |               |               |    information, |
|                 |               |               |         refer   |
|                 |               |               |         to      |
|                 |               |               |                 |
|                 |               |               |    [SMA_JOBAVG] | |                 |               |               | (../Database- |
|                 |               |               | Information/OpC |
|                 |               |               | on-Data-Mai |
|                 |               |               | ntenance.md#SM |
|                 |               |               | A_JOBA){.MCXref |
|                 |               |               |         .xref}  |
|                 |               |               |         in the  |
|                 |               |               |                 |
|                 |               |               |      **Database |
|                 |               |               |                 |
|                 |               |               |   Information** |
|                 |               |               |         online  |
|                 |               |               |         help.   |
|                 |               |               |         SAM     |
|                 |               |               |         passes  |
|                 |               |               |         the     |
|                 |               |               |                 |
|                 |               |               |       following |
|                 |               |               |                 |
|                 |               |               |      parameters |
|                 |               |               |         for the |
|                 |               |               |                 |
|                 |               |               |    calculation: |
|                 |               |               |                 |
|                 |               |               |        -   SW1: |
|                 |               |               |             The |
|                 |               |               |                 |
|                 |               |               |           value |
|                 |               |               |                 |
|                 |               |               |            from |
|                 |               |               |                 |
|                 |               |               |          Server |
|                 |               |               |                 |
|                 |               |               |         Options |
|                 |               |               |             for |
|                 |               |               |                 |
|                 |               |               |          Number |
|                 |               |               |             of  |
|                 |               |               |                 |
|                 |               |               |            Runs |
|                 |               |               |                 |
|                 |               |               |        Included |
|                 |               |               |             in  |
|                 |               |               |             Job |
|                 |               |               |                 |
|                 |               |               |         Average |
|                 |               |               |                 |
|                 |               |               |   Calculations. |
|                 |               |               |                 |
|                 |               |               |        -   SW2: |
|                 |               |               |             1   |
|                 |               |               |                 |
|                 |               |               |        -   SW3: |
|                 |               |               |             2   |
|                 |               |               |                 |
|                 |               |               |        -   SW4: |
|                 |               |               |             The |
|                 |               |               |                 |
|                 |               |               |        Schedule |
|                 |               |               |                 |
|                 |               |               |            Name |
|                 |               |               |             for |
|                 |               |               |             the |
|                 |               |               |             job |
|                 |               |               |                 |
|                 |               |               |            that |
|                 |               |               |                 |
|                 |               |               |            just |
|                 |               |               |                 |
|                 |               |               |            ran. |
|                 |               |               |                 |
|                 |               |               |        -   SW5: |
|                 |               |               |             The |
|                 |               |               |             Job |
|                 |               |               |                 |
|                 |               |               |            Name |
|                 |               |               |                 |
|                 |               |               |            that |
|                 |               |               |                 |
|                 |               |               |            just |
|                 |               |               |             ran |
|                 |               |               |                 |
|                 |               |               |    -   Special: |
|                 |               |               |             SAM |
|                 |               |               |                 |
|                 |               |               |          passes |
|                 |               |               |             a   |
|                 |               |               |                 |
|                 |               |               |         special |
|                 |               |               |                 |
|                 |               |               |       parameter |
|                 |               |               |             for |
|                 |               |               |             the |
|                 |               |               |                 |
|                 |               |               |       Frequency |
|                 |               |               |             of  |
|                 |               |               |             the |
|                 |               |               |             job |
|                 |               |               |                 |
|                 |               |               |            that |
|                 |               |               |                 |
|                 |               |               |            just |
|                 |               |               |                 |
|                 |               |               |            ran. |
|                 |               |               |     -   The job |
|                 |               |               |         start   |
|                 |               |               |         and run |
|                 |               |               |         time    |
|                 |               |               |                 |
|                 |               |               |        averages |
|                 |               |               |         will    |
|                 |               |               |         only be |
|                 |               |               |                 |
|                 |               |               |    recalculated |
|                 |               |               |         for     |
|                 |               |               |         jobs    |
|                 |               |               |         that    |
|                 |               |               |         are in  |
|                 |               |               |         use in  |
|                 |               |               |         the     |
|                 |               |               |         Daily.  |
|                 |               |               |         This    |
|                 |               |               |         will    |
|                 |               |               |         keep    |
|                 |               |               |         the     |
|                 |               |               |         times   |
|                 |               |               |         more    |
|                 |               |               |                 |
|                 |               |               |        current, |
|                 |               |               |         but may |
|                 |               |               |         cause   |
|                 |               |               |         slight  |
|                 |               |               |                 |
|                 |               |               |      processing |
|                 |               |               |         delays  |
|                 |               |               |         in SAM  |
|                 |               |               |                 |
|                 |               |               |       depending |
|                 |               |               |         on the  |
|                 |               |               |         job     |
|                 |               |               |                 |
|                 |               |               |      processing |
|                 |               |               |         load.   |
|                 |               |               | -   If this     |
|                 |               |               |     value is    |
|                 |               |               |     set to      |
|                 |               |               |     False, set  |
|                 |               |               |     up the job  |
|                 |               |               |     SMA JOB     |
|                 |               |               |     AVERAGE on  |
|                 |               |               |     the         |
|                 |               |               |     SMAUtility  |
|                 |               |               |     schedule to |
|                 |               |               |     run once    |
|                 |               |               |     per day.    |
|                 |               |               |     For more    |
|                 |               |               |                 |
|                 |               |               |    information, |
|                 |               |               |     refer to    |
|                 |               |               |     [SMA Job    | |                 |               |               |     Av          |
|                 |               |               | erage](SMAUtili |
|                 |               |               | ty-Schedule.h |
|                 |               |               | tm#SMA){.MCXref |
|                 |               |               |     .xref}.     |
|                 |               |               | -   Valid       |
|                 |               |               |     values are  |
|                 |               |               |     True and    |
|                 |               |               |     False.      |
+-----------------+---------------+---------------+-----------------+
| Remove Period   | False         | Y             | -   SAM will    |
| in Abbreviated  |               |               |     check this  |
| Months and Days |               |               |     setting for |
|                 |               |               |     resolving   |
|                 |               |               |     Tokens that |
|                 |               |               |     contain     |
|                 |               |               |     abbreviated |
|                 |               |               |     months and  |
|                 |               |               |     abbreviated |
|                 |               |               |     days.       |
|                 |               |               | -   Valid       |
|                 |               |               |     values are  |
|                 |               |               |     True and    |
|                 |               |               |     False.      |
|                 |               |               |     -   If      |
|                 |               |               |         True,   |
|                 |               |               |         SAM     |
|                 |               |               |         strips  |
|                 |               |               |         the     |
|                 |               |               |         period  |
|                 |               |               |         from    |
|                 |               |               |                 |
|                 |               |               |     abbreviated |
|                 |               |               |         months  |
|                 |               |               |         and     |
|                 |               |               |         days.   |
|                 |               |               |     -   If      |
|                 |               |               |         False,  |
|                 |               |               |         SAM     |
|                 |               |               |         leaves  |
|                 |               |               |         the     |
|                 |               |               |         period  |
|                 |               |               |         on      |
|                 |               |               |                 |
|                 |               |               |     abbreviated |
|                 |               |               |         months  |
|                 |               |               |         and     |
|                 |               |               |         days.   |
|                 |               |               |                 |
|                 |               |               | **Note:** This  |
|                 |               |               | setting should  |
|                 |               |               | only be set to  |
|                 |               |               | True for        |
|                 |               |               | customers       |
|                 |               |               | requiring       |
|                 |               |               | backward        |
|                 |               |               | compatibility   |
|                 |               |               | to older        |
|                 |               |               | versions of SAM |
|                 |               |               | used in the few |
|                 |               |               | locales where   |
|                 |               |               | periods are now |
|                 |               |               | included by     |
|                 |               |               | default with    |
|                 |               |               | some            |
|                 |               |               | abbreviations.  |
+-----------------+---------------+---------------+-----------------+
| Allow Wild      | False         | Y             | This parameter  |
| Cards in Events |               |               | indicates       |
|                 |               |               | whether or not  |
|                 |               |               | \* (asterisk)   |
|                 |               |               | and ? (question |
|                 |               |               | mark) are       |
|                 |               |               | treated as wild |
|                 |               |               | cards in        |
|                 |               |               | Schedule, Job,  |
|                 |               |               | and Machine     |
|                 |               |               | Names within    |
|                 |               |               | Events.         |
|                 |               |               |                 |
|                 |               |               | -   If True, \* |
|                 |               |               |     (asterisk)  |
|                 |               |               |     and ?       |
|                 |               |               |     (question   |
|                 |               |               |     mark) are   |
|                 |               |               |     treated as  |
|                 |               |               |     wild cards. |
|                 |               |               | -   If          |
|                 |               |               |     False, \*   |
|                 |               |               |     (asterisk)  |
|                 |               |               |     and ?       |
|                 |               |               |     (question   |
|                 |               |               |     mark) are   |
|                 |               |               |     not treated |
|                 |               |               |     as wild.    |
+-----------------+---------------+---------------+-----------------+
| TLS Certificate | \<blank\>     | Y             | -   This        |
| Serial Number   |               |               |     parameter   |
|                 |               |               |     is an       |
|                 |               |               |     identifier  |
|                 |               |               |     of the      |
|                 |               |               |     digital     |
|                 |               |               |     certificate |
|                 |               |               |     that is     |
|                 |               |               |     optionally  |
|                 |               |               |     assigned to |
|                 |               |               |     the         |
|                 |               |               |     [O          | |                 |               |               | pCon]{.GeneralO |
|                 |               |               | pConGlobalName} |
|                 |               |               |     server\'s   |
|                 |               |               |     SMANetCom   |
|                 |               |               |     program,    |
|                 |               |               |     required    |
|                 |               |               |     only when   |
|                 |               |               |     TLS Client  |
|                 |               |               |     Validation  |
|                 |               |               |     has been    |
|                 |               |               |     selected by |
|                 |               |               |     one or more |
|                 |               |               |     [LSAM]{     | |                 |               |               | .GeneralLSAM}s. |
|                 |               |               | -   This number |
|                 |               |               |     can be      |
|                 |               |               |     found in    |
|                 |               |               |     the         |
|                 |               |               |     certificate |
|                 |               |               |     store of    |
|                 |               |               |     the machine |
|                 |               |               |     where the   |
|                 |               |               |     [O          | |                 |               |               | pCon]{.GeneralO |
|                 |               |               | pConGlobalName} |
|                 |               |               |     server is   |
|                 |               |               |     installed.  |
|                 |               |               | -   When blank, |
|                 |               |               |     the         |
|                 |               |               |     [O          | |                 |               |               | pCon]{.GeneralO |
|                 |               |               | pConGlobalName} |
|                 |               |               |     server\'s   |
|                 |               |               |     SMANetCom   |
|                 |               |               |     program     |
|                 |               |               |     will not    |
|                 |               |               |     supply a    |
|                 |               |               |     TLS Client  |
|                 |               |               |     certificate |
|                 |               |               |     to any      |
|                 |               |               |     [LSAM]      | |                 |               |               | {.GeneralLSAM}. |
|                 |               |               |                 |
|                 |               |               | **Note:** If an |
|                 |               |               | [LSAM           | |                 |               |               | ]{.GeneralLSAM} |
|                 |               |               | requires TLS    |
|                 |               |               | Client          |
|                 |               |               | validation, but |
|                 |               |               | SMANetCom does  |
|                 |               |               | not provide its |
|                 |               |               | certificate,    |
|                 |               |               | then the        |
|                 |               |               | communication   |
|                 |               |               | link with that  |
|                 |               |               | [LSAM           | |                 |               |               | ]{.GeneralLSAM} |
|                 |               |               | will fail to    |
|                 |               |               | connect.        |
+-----------------+---------------+---------------+-----------------+
| []              | \<blank\>     | Y             | This parameter  | | {#Login_Securit |               |               | configures a    |
| y_Message}Login |               |               | security        |
| Security        |               |               | message to      |
| Message         |               |               | display to      |
|                 |               |               | users after     |
|                 |               |               | logging into    |
|                 |               |               | the             |
|                 |               |               | application.    |
|                 |               |               |                 |
|                 |               |               | -   If a value  |
|                 |               |               |     is not      |
|                 |               |               |     specified,  |
|                 |               |               |     then no     |
|                 |               |               |     security    |
|                 |               |               |     message is  |
|                 |               |               |     configured. |
|                 |               |               | -   If a value  |
|                 |               |               |     is          |
|                 |               |               |     specified,  |
|                 |               |               |     then this   |
|                 |               |               |     value is    |
|                 |               |               |     shown in    |
|                 |               |               |     the         |
|                 |               |               |     security    |
|                 |               |               |     message     |
|                 |               |               |     that is     |
|                 |               |               |     displayed   |
|                 |               |               |     to users    |
|                 |               |               |     after       |
|                 |               |               |     login.      |
|                 |               |               |                 |
|                 |               |               | **Note:** This  |
|                 |               |               | parameter       |
|                 |               |               | configures the  |
|                 |               |               | security        |
|                 |               |               | message to      |
|                 |               |               | display in both |
|                 |               |               | the Enterprise  |
|                 |               |               | Manager and     |
|                 |               |               | Solution        |
|                 |               |               | Manager         |
|                 |               |               | applications.   |
+-----------------+---------------+---------------+-----------------+
| []{#Incid       | \<blank\>     | Y             | -   This        | | ent_Management_ |               |               |     parameter   |
| System}Incident |               |               |     identifies  |
| Management      |               |               |     the name of |
| System          |               |               |     the         |
|                 |               |               |     ticketing   |
|                 |               |               |     system that |
|                 |               |               |     is used for |
|                 |               |               |     incident    |
|                 |               |               |     management. |
|                 |               |               | -   If a value  |
|                 |               |               |     is          |
|                 |               |               |     specified,  |
|                 |               |               |     then this   |
|                 |               |               |     value is    |
|                 |               |               |     used as a   |
|                 |               |               |     label to    |
|                 |               |               |     replace the |
|                 |               |               |     \"Incident  |
|                 |               |               |     Ticket ID\" |
|                 |               |               |     label in    |
|                 |               |               |     the Daily   |
|                 |               |               |     Job         |
|                 |               |               |     Information |
|                 |               |               |     dialog.     |
+-----------------+---------------+---------------+-----------------+
| Allow Job       | False         | Y             | -   This        |
| Events to       |               |               |     parameter   |
| Restart         |               |               |     configures  |
| Schedules       |               |               |     the SAM to  |
|                 |               |               |     allow an    |
|                 |               |               |     event to    |
|                 |               |               |     start a     |
|                 |               |               |     completed   |
|                 |               |               |     schedule.   |
|                 |               |               | -   If this     |
|                 |               |               |     option is   |
|                 |               |               |     activated,  |
|                 |               |               |     the         |
|                 |               |               |     following   |
|                 |               |               |     events      |
|                 |               |               |     cause the   |
|                 |               |               |     restart of  |
|                 |               |               |     a completed |
|                 |               |               |     schedule:   |
|                 |               |               |                 |
|                 |               |               |   -   \$JOB:ADD |
|                 |               |               |     -           |
|                 |               |               |   \$JOB:RESTART |
|                 |               |               |     -   \       |
|                 |               |               | $JOB:RESCHEDULE |
|                 |               |               | -   By default, |
|                 |               |               |     the SAM     |
|                 |               |               |     does not    |
|                 |               |               |     restart a   |
|                 |               |               |     completed   |
|                 |               |               |     schedule    |
|                 |               |               |     and logs    |
|                 |               |               |     the event   |
|                 |               |               |     as an error |
|                 |               |               |     in the      |
|                 |               |               |                 |
|                 |               |               |   Critical.log. |
|                 |               |               | -   When this   |
|                 |               |               |     option is   |
|                 |               |               |     activated,  |
|                 |               |               |     the SAM     |
|                 |               |               |     restarts a  |
|                 |               |               |     schedule to |
|                 |               |               |     allow       |
|                 |               |               |     events to   |
|                 |               |               |     process if  |
|                 |               |               |     they are    |
|                 |               |               |     received    |
|                 |               |               |     after a     |
|                 |               |               |     schedule is |
|                 |               |               |     completed.  |
|                 |               |               | -   Valid       |
|                 |               |               |     values are  |
|                 |               |               |     True and    |
|                 |               |               |     False.      |
+-----------------+---------------+---------------+-----------------+
| Failed jobs     | False         | Y             | -   This        |
| should keep the |               |               |     parameter   |
| Schedule \"In   |               |               |     configures  |
| Process\"       |               |               |     the SAM to  |
|                 |               |               |     keep        |
|                 |               |               |     schedules   |
|                 |               |               |     In Process  |
|                 |               |               |     that        |
|                 |               |               |     contain     |
|                 |               |               |     Failed jobs |
|                 |               |               |     and Marked  |
|                 |               |               |     Failed      |
|                 |               |               |     jobs.       |
|                 |               |               | -   By default, |
|                 |               |               |     the SAM     |
|                 |               |               |     closes a    |
|                 |               |               |     schedule    |
|                 |               |               |     when all    |
|                 |               |               |     jobs are in |
|                 |               |               |     one of the  |
|                 |               |               |     following   |
|                 |               |               |     job status  |
|                 |               |               |     categories: |
|                 |               |               |     Cancelled,  |
|                 |               |               |     Skipped,    |
|                 |               |               |     Finished    |
|                 |               |               |     OK, or      |
|                 |               |               |     Failed.     |
|                 |               |               |     Refer to    |
|                 |               |               |     [Jobs       | |                 |               |               |     Status      |
|                 |               |               |     Change      |
|                 |               |               |     Co          |
|                 |               |               | mmands](Schedul |
|                 |               |               | e-and-Job%2 |
|                 |               |               | 0Status-Chang |
|                 |               |               | e-Commands.ht |
|                 |               |               | m#Jobs){.MCXref |
|                 |               |               |     .xref}.     |
|                 |               |               | -   Valid       |
|                 |               |               |     values are  |
|                 |               |               |     True and    |
|                 |               |               |     False.      |
+-----------------+---------------+---------------+-----------------+
| Number of Days  | 7             | Y             | This parameter  |
| to Keep a       |               |               | defines the     |
| Service Request |               |               | number of days  |
| Execution       |               |               | to retain       |
|                 |               |               | service request |
|                 |               |               | execution       |
|                 |               |               | history.        |
+-----------------+---------------+---------------+-----------------+
| []{             | \<blank\>     | N             | -   This        | | #Solution_Manag |               |               |     parameter   |
| er_URL}Solution |               |               |     defines the |
| Manager URL     |               |               |     Solution    |
|                 |               |               |     Manager URL |
|                 |               |               |     to allow    |
|                 |               |               |     opening     |
|                 |               |               |     Solution    |
|                 |               |               |     Manager     |
|                 |               |               |     within the  |
|                 |               |               |     Enterprise  |
|                 |               |               |     Manager.    |
|                 |               |               | -   If a value  |
|                 |               |               |     is          |
|                 |               |               |     specified,  |
|                 |               |               |     a Solution  |
|                 |               |               |     Manager     |
|                 |               |               |     option will |
|                 |               |               |     appear in   |
|                 |               |               |     the         |
|                 |               |               |     Navigation  |
|                 |               |               |     frame.      |
|                 |               |               |                 |
|                 |               |               | **Note**: After |
|                 |               |               | defining a URL  |
|                 |               |               | and saving the  |
|                 |               |               | value, you must |
|                 |               |               | log out then    |
|                 |               |               | log in to the   |
|                 |               |               | Enterprise      |
|                 |               |               | Manager for the |
|                 |               |               | Solution        |
|                 |               |               | Manager option  |
|                 |               |               | to appear in    |
|                 |               |               | the Navigation  |
|                 |               |               | frame.          |
+-----------------+---------------+---------------+-----------------+

: Option Parameters: General
:::

 

