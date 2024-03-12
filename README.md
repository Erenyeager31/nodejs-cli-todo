# Node.js TODO CLI

## Description:

_This is a command-line interface (CLI) application built in Node.js that helps you manage your TODO tasks efficiently. It provides features for listing existing tasks, adding new ones, marking them as done, and removing unwanted tasks._

## Features:

- List Tasks: View all your current TODO items.
- Add Tasks: Add new tasks to your list.
- Mark Done: Mark completed tasks as done. You can specify individual tasks or mark all as done.
- Remove Tasks: Remove tasks from your list. You can select specific tasks or remove all at once.

## Installation

_Clone this repository:_
`git clone https://github.com/<your-username>/<repository-name>.git`

_Install dependencies:_
- `cd <repository-name>`
- `npm install`

## Usage

_An entry point is defined in the `package.json` file where using `todos` at the start of the command executes `index.js`_

- ### Adding a task
  `todos add "<Task>"`
- ### List all the tasks
  `todos list`
- ### Mark tasks as done
  `todos mark-done` or `todos mark-done -t <task list>`
- ### Remove tasks from list
  `todos remove` or `todos remove -t <task list>`
