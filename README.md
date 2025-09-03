# Purpose of this project
This project is intended to display proficiency in
  - Using express and express router to implement middleware and routes
  - setting up a MongoDB connection through the mongoose library
  - app security
    - stateless session management using jsonwebtokens library
    - hashing passwords before storage and comparison using bcrypt
    - authentication and authorization using a mix of bcrypt hashing, mongodb relations, and using middleware to authorize and pass data
  - CRUD operations
    - users are able to create, edit, and delete their own projects and tasks.
  - Using mongoDB to nest documents, allowing for access to nested documents only through the parent document, authorized only for the user who created said document.
  - logical file organization and setup, keeping separation of concerns

# Improvements I could make
- I could transform model returns to be along the lines of `task : {}`, `project: {}`, instead of `model: {}`.  While I think this would be better for less ambiguity for the front end, I don't see it a necessary change here due to the purpose of this project.  This server is not inteded to be used by a front end at this time, and is only meant to demonstrate backend principles.
