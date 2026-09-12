# Project 5 — Search + Debouncing

This project is a JavaScript-based search application that allows users to search for information by typing a query into a search box.

The application connects the user's input to an external API and displays the matching results on the webpage.

## How the Project Works

When the user starts typing in the search box, the application detects the change in the input.

For example, if the user searches for:

```text
cat
```

the application receives `"cat"` as the search query.

Instead of immediately sending an API request for every character typed, the application uses **debouncing**.

The debounce mechanism waits for a short period after the user's last keystroke.

For example:

```text
User types:

c
ca
cat

        ↓

Wait for the user to stop typing

        ↓

User stops typing

        ↓

API request for "cat"

        ↓

API sends search results

        ↓

Results are displayed on the webpage
```

If the user continues typing before the waiting period finishes, the previous waiting timer is cancelled and a new one starts.

For example:

```text
c       → start timer
ca      → cancel previous timer → start new timer
cat     → cancel previous timer → start new timer

User stops typing
        ↓
Timer finishes
        ↓
API request for "cat"
```

This prevents unnecessary API requests while the user is still typing.

## Main Flow

```text
Search Input
     ↓
Detect User Input
     ↓
Debounce the Input
     ↓
Get Final Search Query
     ↓
Send API Request
     ↓
Receive API Response
     ↓
Process the Results
     ↓
Display Results
```

## Purpose of the Project

The main purpose of this project is to understand how a real-world search feature works and how JavaScript can control frequent user interactions efficiently.

The project combines:

* DOM events
* User input
* API requests using `fetch()`
* Asynchronous JavaScript
* `setTimeout()`
* `clearTimeout()`
* Debouncing
* Dynamic DOM updates
