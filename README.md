````markdown
# Task Management App

A simple full-stack task management application built with FastAPI, SQLAlchemy, and React. This application allows users to create, update, delete, and filter tasks, with a user-friendly interface.

## Table of Contents

- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Assumptions and Design Decisions](#assumptions-and-design-decisions)

## Setup Instructions

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd backend
   ```
````

2. **Create a virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**

   ```bash
   pip install fastapi[all] sqlalchemy psycopg2-binary
   ```

4. **Run the database migrations:**
   Ensure your database is set up and update your connection string in `database.py` if necessary. Run:

   ```bash
   uvicorn main:app --reload
   ```

5. **Access the API:**
   The backend will be available at `http://localhost:8000/api`.

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the frontend application:**

   ```bash
   npm start
   ```

4. **Access the app:**
   The frontend will be available at `http://localhost:3000`.

## Assumptions and Design Decisions

- **Data Structure:** Each task consists of a title, description, status (`todo`, `in_progress`, `done`), and creation date.
- **CRUD Operations:** Implemented basic CRUD functionality using RESTful API principles with FastAPI for the backend.
- **User Interface:** Used Bootstrap for basic styling and layout. The app uses small cards for task display with color-coded status indicators.
- **State Management:** Utilized React's hooks (`useState`, `useEffect`) for state management and side effects.
- **Error Handling:** Basic error handling is included for API calls, displaying messages to users on loading states and errors.

### Additional Features

- **Sorting and Filtering:** Users can filter tasks by status and sort by title or creation date.
- **Modal for Task Creation:** A modal dialog is used for creating new tasks, enhancing user experience.
