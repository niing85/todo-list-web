# To-Do List

A simple, client-side to-do list built with HTML, CSS, and JavaScript. Tasks are saved in the browser using `localStorage`, so they persist across page refreshes.

## Features

- **Add tasks** — Type a task and click **ADD** or **ENTER**.
- **Complete tasks** — Click a task to toggle its completed state (strikethrough + checkmark).
- **Delete tasks** — Click the **×** on the right to remove a task.
- **Persistence** — All tasks are stored in `localStorage` and restored on load.

## Project structure

```
practice002/
├── index.html      # App markup
├── script.js       # Task logic and localStorage
├── styles.css      # Layout and styling
├── images/
│   ├── iconChecklist.png
│   ├── circle.png    # Unchecked task indicator
│   └── checked.png   # Checked task indicator
└── README.md
```

## Getting started

No build step or dependencies are required.

1. Clone or download this repository.
2. Open `index.html` in a web browser.

You can also serve the folder with any static file server, for example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## How it works

- **`addTask()`** — Validates input, creates a list item with a delete button, appends it to the list, and saves to `localStorage`.
- **Click handler** — Toggles the `checked` class on list items, or removes the item when the delete span is clicked.
- **`saveData()` / `showTask()`** — Writes and reads the list HTML from `localStorage` under the key `data`.

## Tech stack

- HTML5
- CSS3 (flexbox, gradients, pseudo-elements)
- Vanilla JavaScript (DOM API, `localStorage`)
