Todo List App

A simple Todo List web application built with HTML, CSS, and JavaScript.
Add tasks, mark them as completed, and filter tasks by status (All, Active, Completed).

Features

Add Tasks – Type a task in the input box and click Add.

Mark Completed – Click the checkbox to mark a task as completed (adds a line-through).

Filter Tasks – View All, Active, or Completed tasks.

Dynamic Updates – Tasks automatically update on the page when added, completed, or filtered.

Technologies Used

HTML

CSS

JavaScript (vanilla JS, no frameworks)

How It Works

Storing Tasks

Tasks are stored in a JavaScript array of objects:

{ text: "Task Name", completed: false }


Adding Tasks

The input field takes the task name.

Clicking Add pushes the task object to the array and refreshes the list.

Rendering Tasks

renderTasks() clears the task container and displays tasks according to the current filter.

Each task has a checkbox and text. Completed tasks are displayed with a line-through.

Updating Task Status

Checking/unchecking a task updates its completed property in the array and refreshes the display.

Filtering Tasks

Clicking All, Active, or Completed sets the currentFilter variable and refreshes the task list based on status.

Usage

Open index.html in a browser.

Type a task in the input box.

Click + Add Button to add the task.

Use the All / Active / Completed buttons to filter tasks.

Click the checkbox to mark tasks as completed or not completed.

File Structure
todo-list/
│
├── index.html       # HTML structure
├── css/
│   └── style.css    # Styles for the app
└── JS/
    └── index.js     # JavaScript logic

Example

Adding Tasks:

Input: Cooking → Click Add → Task appears in the list.

Input: Cleaning → Click Add → Both tasks appear.

Filtering:

Click Active → Shows only tasks not completed.

Click Completed → Shows only tasks marked completed.

Click All → Shows all tasks.

Author

Created by [Farhat Chowdhary] – 2025