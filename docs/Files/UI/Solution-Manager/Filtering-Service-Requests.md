---
lang: en-us
title: Filtering Service Requests
viewport: width=device-width, initial-scale=1.0
---

#  Filtering Service Requests

Use the Filter bar on top to filter Service Requests by «Category»,
«OpCon Role», and/or «Service Request name».

Self Service Filtering Options

![Self Service Filtering Options](../../../Resources/Images/SM/Filtering-Service-Requests_new.png "Self Service Filtering Options"){.dropshadow}

## Querying with Wildcards

For advanced querying, the Search/Filter bar accepts the wildcard
characters, asterisk (\*) and question mark (?).

-   The asterisk wildcard can be used to match zero to many characters.
-   The question mark wildcard must match a single (one) character.
-   By default, the search/filter will perform a CONTAINS operation
    against the dataset with the given text query.
-   If the search/filter query begins with an equal sign (=), the query
    becomes strict instead of performing a CONTAINS operation.

## Filter Query Examples

Suppose, we have the following dataset: \"toto\", \"atotob\", \"titi\",
\"tata\", \"atotobtata\", \"atotobbtata\", \"tototiti\".

 

We could then query the dataset using both simple and complex search
methods. Take a look at the table below which shows the query result
against the dataset using a given text query.

  Text Query   Returns
  ------------ ---------------------------------------------------------------------
  toto         \"toto\", \"atotob\", \"atotobtata\", \"atotobbtata\", \"tototiti\"
  toto\*tata   \"atotobtata\", \"atotobbtata\"
  toto?tata    \"atotobtata\"
  =toto        \"toto\"
  =toto\*      \"tototiti\"
  =\*toto      \"toto\"
  =\*toto\*    \"toto\", \"atotob\", \"atotobtata\", \"atotobbtata\", \"tototiti\"
  =\*titi      \"titi\", \"tototiti\"

 

 

![White \"person reading\" icon on blue circular background](../../../Resources/Images/moreinfo-icon(48x48).png "More Info icon")
Related Topics

-   [Creating Categories](Creating-Categories.md)
:::

 

