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

# How to use this app
- Ensure you have a mongoDB set up
    - In your env file, you will need:
      ```
      MONGO_URI=<your mongo connection here>
      JWT_SECRET=<your secret key here>
      PORT=<port of your choosing>
      ```
- after your file is properly configured, you can visit `http://localhost:<yourport>/api/users/register` with a username, email, and password of your choosing, in the format: `{username: <your username>, email: <your email>, password: <your password>`.  After you've registered, you can login and receive a token via `.../api/users/login`, upon which entering your email and password `{email: <your email>, password: <your password>`, you will receive a jwebtoken.
- ## creating a project
  - By sending a post request to `.../api/projects`, with a body containing a name and description in a json body as such: `{name: name, description: description}`, a new project will be added to the database based on this object.
- ## Getting all projects
  - By sending a get request to `.../api/projects`, you can retrieve all projects listed under your logged in user.
- ## Get one, edit, delete projects
  - All of these are made on the same url: `.../api/projects/<your project id>`.
  - By sending a get request to this url ending, you can retrieve the project with that ID.  If there are no projects, the server will send back a message saying you are not authorized to view a project.  This is intentional to prevent deduction of projectIds.
  - as above, sending a put request with new items pertaining to name or description, you can update the project in the database
  - Sending a delete request will delete the project from the database

- ## Creating a task
  - These work similar to project, with the caveat being a longer url, and tasks are related to the project they are created under.  By running a post request to `.../api/projects/<project id>/tasks`, you can create a new task under the project you're currently working with.  The structure for task is `{title: title, description: description, status: status]` where status can be one of three: "To Do", "In Progress", "Done", defaulting to "To Do" if status is left out of the json body.
- ## Getting all tasks
  - Send a get request to `.../api/projects/<project id>/tasks` to retrieve all tasks tied to your project
- ## get one, edit, delete tasks
  - as with projects, these are all made on the same url: `...api/projects/<project id>/tasks/<task id>`.
  - a get request to this url will grab the task with the id if it exists under that project, or return unauthorized.
  - a put request will allow you to change any of the items within task, being name, description, or status (do keep in mind this is limited to one of three options listed above)
  - A delete request will delete the task from the database, if the user has access.

# Improvements I could make
I could transform model returns to be along the lines of `task : {}`, `project: {}`, instead of `model: {}`.  While I think this would be better for less ambiguity for the front end, I don't see it a necessary change here due to the purpose of this project.  This server is not inteded to be used by a front end at this time, and is only meant to demonstrate backend principles.
