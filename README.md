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
   git clone https://github.com/AtharvaJoshi12/Task-Management-App
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   pip install fastapi sqlalchemy uvicorn pydantic
   ```

3. **Run the backend:**
   ```bash
   uvicorn main:app --reload
   ```


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
