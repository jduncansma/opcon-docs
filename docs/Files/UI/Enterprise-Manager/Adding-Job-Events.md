---
lang: en-us
title: Adding Job Events
viewport: width=device-width, initial-scale=1.0
---

#  Adding Job Events

## Setting Job-Related Events

To add a new job event:

Double-click on **Job Master** under the **Administration** topic. The
**Job Master** screen displays.

Select the **schedule** in the **Schedule** drop-down list.

Select the **job** in the **Job** drop-down list.

Click on the **Events** tab in the **Job Properties** frame.

Select the **Job Related** radio button to set a job-related event.

Click the **Add** button. The **Event Definition Wizard** displays.

Select the **Job Status**, **LSAM Feedback**, **Exit Description** or
**Job Completion Complex Expression** radio button on the **Event
Trigger** screen of the wizard.

Click the **Next** button to proceed to **Trigger Details** screen of
the wizard.

Do one of the following depending on your selection in [Step 7]{.ul}.

a.  [(If Job Status was selected)]{.optional-text} Select the **job     status** in the **Job Status** drop-down list and proceed to [Step
    10]{.ul}.
b.  [(If LSAM Feedback was selected)]{.optional-text} Select the     **Feedback name** in the **LSAM Feedback** drop-down list. Next,
    enter in the **String to match** field any *string to match the
    feedback value* that will trigger the
    OpCon event. Then, proceed to [Step
    10]{.ul}.
c.  [(If Exit Description was selected)]{.optional-text} Select the     **Operator** in the **Comparison Operator** drop-down list . Next,
    enter in the **Value** field the proper value based on the selected
    **Operator** and enter in the **End Value** field the value for the
    end of the Range. Then, proceed to [Step 10]{.ul}.
d.  [(If Job Completion Complex Expression was     selected)]{.optional-text} Enter the *expression* in the
    **Expression** text box and proceed to [Step 10]{.ul}. For more
    information, refer to [Property Expressions API     Syntax](../../Concepts/Property-Expressions-API-Syntax.md){.MCXref
    .xref} in the **Concepts** online help.

Click the **Next** button to advance to the **Event Definition** screen
of the wizard.

Select an [OpCon]{.GeneralOpConGlobalName style="font-weight: bold;"} **event template** from the **Event Template** drop-down list. For more
information, refer to the [OpCon Events](../../OpCon-Events/Introduction.md)??online help.

  --------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------
  ![White pencil icon on green circular background](../../../Resources/Images/example-icon(48x48).png "Example icon")   **EXAMPLE:** [\$JOB:ADD,\<schedule date\>,\<schedule name\>,\<job name\>,\<frequency name\>]{.statement2}
  --------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------

[]{#Place_your_mouse_cursor}Place your mouse cursor at the beginning of a **\<syntax placeholder\>** displayed in the **Event Parameters** text
box then drag the cursor to the right to select the entire syntax
placeholder, excluding any surrounding commas. For example: ,[\<schedule name\>]{style="background-color: #1e90ff; color: #ffffff;"}, .

Replace the selected syntax placeholder with valid
OpCon event information.

??

If you wish to replace the syntax placeholder with a token, then do the
following:

Follow [Step 12]{.ul} to select the syntax placeholder.

Click the ![Insert Token buton](../../../Resources/Images/EM/EMinserttoken.png "Insert Token button")
**Insert token** button or press **Ctrl/t** on the keyboard to list
available global properties.

Locate the global property in the selector by:

i.  Scrolling to it.
ii. Using the search field and filter criteria to find it. You can use
    Windows wildcard characters in the search field to expand the search
    and filter the search by property name, property value, or both
    (default).

Double-click on the **global property** (e.g., \$SCHEDULE DATE).

  -------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Double brackets will automatically be placed around the placeholder for the token that is defined.]
  -------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------
  ![White pencil icon on green circular background](../../../Resources/Images/example-icon(48x48).png "Example icon")   **EXAMPLE:** [\$JOB:ADD,\[\[\$SCHEDULE DATE\]\],Payroll,Emp1,15thofMonth]{.statement2}
  --------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------

Click **Reset** to reset the parameters to their original states.

Click **Finish** to save the job event or click **Cancel** to discard
the changes made in the wizard.

Click **Close ???** (to the right of the **Job Master** tab) to close the
**Job Master** screen.

## Setting Frequency-Related Events

To add a new job event:

Double-click on **Job Master** under the **Administration** topic. The
**Job Master** screen displays.

Select the **schedule** in the **Schedule** drop-down list.

Select the **job** in the **Job** drop-down list.

Click on the **Events** tab in the **Job Properties** frame.

Select the **Frequency Related** radio button to set a frequency-related
event.

Click on the **frequency** in the **Frequency list** to apply the event.

Click the **Add** button. The **Event Definition Wizard** displays.

Select the **Job Status**, **LSAM Feedback**, **Exit Description** or
**Job Completion Complex Expression** radio button on the **Event
Trigger** screen of the wizard.

Click the **Next** button to proceed to **Trigger Details** screen of
the wizard.

Do one of the following depending on your selection in [Step 8]{.ul}.

a.  [(If Job Status was selected)]{.optional-text}Select the **job     status** in the **Job Status** drop-down list and proceed to [Step
    11]{.ul}.
b.  [(If LSAM Feedback was selected)]{.optional-text} Select the     **Feedback name** in the **LSAM Feedback** drop-down list. Next,
    enter in the **String to match** field any *string to match the
    feedback value* that will trigger the
    OpCon event. Then, proceed to [Step
    11]{.ul}.
c.  [(If Exit Description was selected)]{.optional-text} Select the     **Operator** in the **Comparison Operator** drop-down list . Next,
    enter in the **Value** field the proper value based on the selected
    **Operator** and enter in the **End Value** field the value for the
    end of the Range. Then, proceed to [Step 11]{.ul}.
d.  [(If Job Completion Complex Expression was     selected)]{.optional-text} Enter the *expression* in the
    **Expression** text box and proceed to [Step 11]{.ul}. For more
    information, refer to [Property Expressions API     Syntax](../../Concepts/Property-Expressions-API-Syntax.md){.MCXref
    .xref} in the **Concepts** online help.

Click the **Next** button to advance to the **Event Definition** screen
of the wizard.

Select an [OpCon]{.GeneralOpConGlobalName style="font-weight: bold;"} **event template** from the **Event Template** drop-down list. For more
information, refer to the [OpCon Events](../../OpCon-Events/Introduction.md)??online help.

  --------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------
  ![White pencil icon on green circular background](../../../Resources/Images/example-icon(48x48).png "Example icon")   **EXAMPLE:** [\$JOB:ADD,\<schedule date\>,\<schedule name\>,\<job name\>,\<frequency name\>]{.statement2}
  --------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------

[]{#Place_your_mouse_cursor}Place your mouse cursor at the beginning of a **\<syntax placeholder\>** displayed in the **Event Parameters** text
box then drag the cursor to the right to select the entire syntax
placeholder, excluding any surrounding commas. For example: ,[\<schedule name\>]{style="background-color: #1e90ff; color: #ffffff;"}, .

Replace the selected syntax placeholder with valid
OpCon event information.

??

If you wish to replace the syntax placeholder with a Token, then do the
following:

a.  Follow [Step 13]{.ul} to select the syntax placeholder.
b.  Click the ![Insert Token     buton](../../../Resources/Images/EM/EMinserttoken.png "Insert Token button")
    **Insert token** button or press **Ctrl/t** on the keyboard to list
    available global properties.
c.  Scroll down and double-click on the **Global Property** (e.g.,
    \$SCHEDULE DATE).

Click the **Reset** button to reset the parameters to their original
states.

Click **Finish** to save the job event or click **Cancel** to discard
the changes made in the wizard.

Click **Close ???** (to the right of the **Job Master** tab) to close the
**Job Master** screen.
:::

??

