---
lang: en-us
title: Pingman
viewport: width=device-width, initial-scale=1.0
---

#  Pingman

Pingman is a utility designed to constantly ping a machine to determine
network stability. The Pingman utility resides in the \<Target
Directory\>\\OpConxps\\Utilities\\ directory.

## Configuration

To configure Pingman, modify the pingman.ini file located in the
\<Target Directory\>\\OpConxps\\Utilities\\ directory.

+------------------+------------+------------------------------------+
| Setting          | Default    | Description                        |
+==================+:==========:+====================================+
| Cycle Time       | 30 Seconds | Number of seconds Pingman waits    |
|                  |            | before pinging.                    |
+------------------+------------+------------------------------------+
| SendTo           | 1 second   | Seconds to wait before the ping is |
|                  |            | considered \"lost\" on the way to  |
|                  |            | the host.                          |
+------------------+------------+------------------------------------+
| RecvFrom         | 1 second   | Seconds to wait before the ping is |
|                  |            | considered \"lost\" on the way     |
|                  |            | back from the host.                |
+------------------+------------+------------------------------------+
| Show Every Error | TRUE       | -   Pingman logs errors to the     |
|                  |            |     pingman.log file in the same   |
|                  |            |     directory where pingman.exe    |
|                  |            |     exists.                        |
|                  |            | -   Valid values include:          |
|                  |            |     -   **TRUE**: Each time        |
|                  |            |         Pingman receives an error, |
|                  |            |         it is logged.              |
|                  |            |     -   **FALSE**: Pingman only    |
|                  |            |         logs changes in response   |
|                  |            |         from a machine.            |
+------------------+------------+------------------------------------+
| Show Every Ping  | TRUE       | -   Pingman logs ping information  |
|                  |            |     to the pingman.log file in the |
|                  |            |     same directory where           |
|                  |            |     pingman.exe exists.            |
|                  |            | -   Valid values include:          |
|                  |            |     -   **TRUE**: Each time a ping |
|                  |            |         is sent, the information   |
|                  |            |         is logged.                 |
|                  |            |     -   **FALSE**: No ping         |
|                  |            |         information is logged.     |
+------------------+------------+------------------------------------+
| Machine_1        | \<None\>   | -   The host name of the machine   |
|                  |            |     to be monitored.               |
| Machine_2        |            | -   Multiple machines can be       |
|                  |            |     monitored by adding up to 250  |
| Machine_3\....   |            |     (maximum) additional machine   |
|                  |            |     lines.                         |
+------------------+------------+------------------------------------+

: Pingman.ini Settings

??

+----------------------------------+----------------------------------+
| ![White pencil icon on green     | **EXAMPLE:** The following       | | circular                         | example shows multiple machine   |
| background](../../../Reso        | lines added:                     |
| urces/Images/example-icon(48x48) |                                  |
| .png "Example icon") | Machine_1=Host1\                 |
|                                  | Machine_2=Host2 Machine_3=Host3  |
+----------------------------------+----------------------------------+

??

Running Pingman

To run the program:

1.  Browse to the **Pingman.exe** file.
2.  Double-click **pingman.exe**.
3.  Click **Close ???** to stop Pingman.

??

Capturing Output from Pingman

To capture output:

1.  Open a **Dos prompt**.
2.  Type in: **cd C:\\Program Files\\OpConxps\\Utilities**
3.  Press **Enter**.
4.  Type in **Pingman.exe \> PingmanOutput.txt**
5.  Press **Enter**.
6.  Enter **Exit**.
:::

??

