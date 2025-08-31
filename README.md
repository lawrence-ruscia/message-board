# Mini Message Board

A simple message board built with Express and EJS.
Users can view existing messages, add new ones through a form, and view details of each message.

## 📚 Features

- **Homepage (/) that lists all messages with:**

  - Author name

  - Message text

  - Date the message was added

  - Link to view the message details

- **“New Message” page (/new) with a form to:**

  - Enter your name

  - Enter your message text

- **POST route that handles new message submissions**

- **In-memory message storage using an array (no database yet)**

## 🛠 Tech Stack

- Node.js (runtime)

- Express (server + routes)

- EJS (templating engine)

- HTML/CSS (views styling)

## 📝 Routes

- GET / → renders all messages

- GET /new → renders the new message form

- POST /new → handles form submission, pushes a new message into messages array, redirects to /

- GET /message/:id → shows a single message detail page

## Screenshots

[!Dashboard](/public/msg-board-01.png)
[!Message Form](/public/msg-board-02.png)
[!Message Details](/public/msg-board-03.png)
