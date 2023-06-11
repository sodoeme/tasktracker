# Task Tracker application
1. routes
2. models
3. controllers
4. middlewares

## Routes
After setting up the basics of the server file (imports and server starting) routes were defined to direct designated endpoints

## Models
Data is stored in Mongodb Atlas therefore the schema for the collections users and tasks are defined

## Controllers
getUserLogin: This controller handles a GET request and renders a login view/template. It is typically used to display the login page to the user.

login: This controller handles a POST request sent when a user submits the login form. It retrieves the user's email and password from the request body, queries the database to find a user with a matching email, and then compares the provided password with the hashed password stored in the database. If the login is successful, it sets the user's session and redirects to the "/tasks" route. If the login fails, it displays an alert and redirects back to the home page.

getSignUp: This controller handles a GET request and renders a sign-up view/template. It is responsible for displaying the sign-up page to the user.

signUp: This controller handles a POST request sent when a user submits the sign-up form. It creates a new User instance with the data provided in the request body, saves the user to the database, and redirects to the home page ("/") if successful.

getAllTasks: This controller retrieves all tasks associated with the logged-in user. It queries the database for tasks where the author matches the current user's session ID. It then renders a view/template called "task" and passes the tasks and the user's name as variables to the view.

editTask: This controller handles a POST request sent when a user updates a task. It retrieves the task ID and new description from the request body, finds the task in the database, and updates the description. It then redirects back to the "/tasks" route.

changeEdit: This controller handles a GET request and renders the task view/template in edit mode. It retrieves the task ID from the URL parameters, fetches the tasks associated with the logged-in user, and renders the view/template with the edit mode enabled for the specific task.

createTask: This controller handles a POST request sent when a user creates a new task. It creates a new Task instance with the data provided in the request body, sets the author as the current user's session ID, saves the task to the database, and redirects to the "/tasks" route.

delete: This controller handles a POST request sent when a user deletes a task. It retrieves the task ID from the URL parameters, finds the task in the database, and deletes it. Then, it redirects back to the "/tasks" route.

## Middleware
One custom middleware function is being used to ensure user has logged in
before accessing task page, if not, request is redirected to login page