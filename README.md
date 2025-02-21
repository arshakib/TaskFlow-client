# TaskFlow: Task Management Application

## Short Description

TaskFlow is a modern, responsive task management application that enables users to add, edit, delete, and reorder tasks with a drag-and-drop interface. Tasks are categorized into To-Do, In Progress, and Done, and all changes are saved in real time to a MongoDB database. User authentication is handled via Firebase Google Sign-In, ensuring that only authenticated users can access the application.

## Live Links

- **Client:** [https://harmonious-pudding-049454.netlify.app/](https://harmonious-pudding-049454.netlify.app/)
- **Server:** [https://taskflow-server-ra21.onrender.com/](https://taskflow-server-ra21.onrender.com/)

## Dependencies

### Client-Side

- **React:** UI library for building dynamic user interfaces.
- **Vite:** Fast build tool with hot module replacement for rapid development.
- **react-beautiful-dnd:** Library to implement drag-and-drop functionality.
- **Axios:** For handling HTTP requests.
- **Firebase:** For user authentication (Google Sign-In).

### Server-Side

- **Express.js:** Web framework for building the API.
- **MongoDB & Mongoose:** Database and ODM for storing tasks and user details.
- **Socket.IO:** (Optional) For enabling real-time updates via WebSockets.
- **Cors:** Middleware to enable Cross-Origin Resource Sharing.

## Installation Steps

### Prerequisites

- Node.js (v12 or above)
- npm or yarn package manager
- A MongoDB instance (local or cloud-hosted)
- Firebase project with Authentication enabled

### Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/taskflow.git
   cd taskflow
   ```
