---
lang: en-us
title: Creating Data Input Files
viewport: width=device-width, initial-scale=1.0
---

#  Creating Data Input Files

Input files containing dynamic transactions for processing by SMADDI
must be in a specific format. The file should be a string of ASCII text
in the form of an XML document and be less than two megabytes (MB). No
in-depth knowledge of XML is required in order to create a working input
file.

 

  ------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White triangle icon on yellow circlular background](../../../Resources/Images/caution-icon(48x48).png "Caution icon")   **CAUTION:** [If a data input file is larger than two megabytes (MB), the SMADDI service cannot process the file. [SMA Technologies]{.GeneralCompanyName} recommends the administrator delete data input files larger than two MB.]
  ------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Understanding Terms and Structure

Familiarization with the following terms is helpful in creating input
files:

-   **Element**: An input file component consisting of a start tag,
    data, and an end tag.
-   **Start Tag**: The first component of an element. The format is the
    less than character (\<), the element name, and the greater than
    character (\>). For example: \<element\>.
-   **Element Data**: The second component of an element. This is the
    data that is entered in the OpCon
    database. In some cases the data is optional.
-   **End Tag**: The last component of an element. The format is the
    less than character (\<), a slash character (/), the element name,
    and the greater than character (\>). For example: \</element\>.
-   **Nesting**: The placement of one element inside another. A parent
    element requires one or more child elements placed in its data.
-   **Parent Element**: An element requiring one or more nested elements
    in its data.
-   **Child Element**: An element placed within the data of another
    element. If a child element is not placed within the parent element,
    the data is invalid.

  -------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Some elements can be both parent and child elements.]
  -------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** [The following is   | | circular                         | an example of nested elements in |
| background](../../../Reso        | a parent/child                   |
| urces/Images/example-icon(48x48) | relationship:]{.statement2}      |
| .png "Example icon") |                                  |
|                                  | \<job\>\                         |
|                                  | \<jname\>Job1\</jname\>\         |
|                                  | \<                               |
|                                  | pmname\>WindowsMachA\</pmname\>\ |
|                                  | \</job\>                         |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | The **jname** and **pmname**     |
|                                  | child elements are nested in the |
|                                  | **Job** parent element.          |
+----------------------------------+----------------------------------+

## Formatting the Input File

The SMADDI service requires that all elements be nested as described in
[Data Input Message Elements](Data-Input-Message-Elements.md). The
formatting of elements is not important to the service; however, [SMA Technologies]{.GeneralCompanyName} recommends the indentation for
easiest readability. Carriage returns, line feeds, and non-significant
spaces are optional and are ignored. Use two forward slash characters
(//) to \"comment out\" a line.

 

  -------------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![White pencil/paper icon on gray circular background](../../../Resources/Images/note-icon(48x48).png "Note icon")   **NOTE:** [Spaces in the data portion of an element are important and are considered part of the data for input to the OpCon database.]
  -------------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** [The SMADDI service | | circular                         | would interpret the following    |
| background](../../../Reso        | sets of elements in the same     |
| urces/Images/example-icon(48x48) | way:]{.statement2}               |
| .png "Example icon") |                                  |
|                                  | \<id1\>\<elt1\>a\</              |
|                                  | elt1\>\<elt2\>b\</elt2\>\</id1\> |
|                                  |                                  |
|                                  | \                                |
|                                  |                                  |
|                                  | OR                               |
|                                  |                                  |
|                                  | \<id1\>\                         |
|                                  | \<elt1\>a\</elt1\>\              |
|                                  | \<elt2\>b\</elt2\>\              |
|                                  | \</id1\>                         |
|                                  |                                  |
|                                  |                                  |
|                                  |                                  |
|                                  | // This is an example for        |
|                                  | formatting elements.             |
+----------------------------------+----------------------------------+
:::

 

