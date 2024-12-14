Mentorship Platform API Controllers
This API facilitates core functionalities like user authentication, mentor-mentee interactions, profile management, and notifications. Below is a detailed description of the controllers included in this API.

1. AuthController
Purpose:
The AuthController handles user registration, login, and JWT token generation for authentication.

Endpoints:
Register a New User

Endpoint: POST /api/Auth/register
Description: Registers a new user (mentor or mentee) with email, username, role, and password.
Request Body:
json
Copy code
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "mentor/mentee"
}
Response: Success message or conflict if the email already exists.
Login User

Endpoint: POST /api/Auth/login
Description: Authenticates a user and returns a JWT token along with user details (username, role, and ID).
Request Body:
json
Copy code
{
  "email": "string",
  "password": "string"
}
Response: JWT token, username, role, and user ID or an unauthorized message for invalid credentials.
2. DeleteController
Purpose:
The DeleteController handles the deletion of user accounts.

Endpoints:
Delete User Account
Endpoint: DELETE /api/delete/delete-account/{id}
Description: Deletes a user account from both the Registers and Profiles tables.
Response: Success message or not found if the user ID does not exist.
3. MentorController
Purpose:
The MentorController retrieves mentors and matches mentors based on user skills.

Endpoints:
Get All Mentors

Endpoint: GET /api/Mentor/getmentors
Description: Retrieves all profiles with the role "mentor".
Response: List of mentors.
Match Mentors by Skills

Endpoint: POST /api/Mentor/matchmentors
Description: Matches mentors based on user-provided skills.
Request Body: A string of comma-separated skills.
json
Copy code
"skill1, skill2, skill3"
Response: List of matched mentors based on skills.
4. MentorshipRequestController
Purpose:
The MentorshipRequestController manages mentorship requests, including fetching, accepting, or rejecting mentee requests.

Endpoints:
Get Mentee Requests for a Mentor

Endpoint: GET /api/MentorshipRequest/mentor/{mentorId}
Description: Retrieves the latest mentee requests for a specific mentor.
Response: List of requests or a not found message if no requests exist.
Accept or Reject a Mentorship Request

Endpoint: PUT /api/MentorshipRequest/mentor/accept-reject/{requestId}
Description: Accepts or rejects a mentorship request based on the provided action.
Request Body:
json
Copy code
{
  "action": "accept/reject"
}
Response: Success message or not found if the request does not exist.
5. NotifyController
Purpose:
The NotifyController manages notifications related to mentorship requests.

Endpoints:
Send a Mentorship Request Notification

Endpoint: POST /api/Notify/send
Description: Sends a mentorship request notification.
Request Body:
json
Copy code
{
  "mentorId": 1,
  "menteeId": 2
}
Response: Success message with request details.
Update Request Status

Endpoint: PUT /api/Notify/updatestatus/{id}
Description: Updates the status of a mentorship request (Pending, Accepted, Rejected).
Request Body: Status string.
json
Copy code
"Accepted"
Response: Success message or error for invalid status.
Get Notifications for Mentee

Endpoint: GET /api/Notify/mentee/{menteeId}
Description: Fetches notifications for a specific mentee.
Response: List of notifications or a not found message.
Get Notifications for Mentor

Endpoint: GET /api/Notify/mentor/{mentorId}
Description: Fetches notifications for a specific mentor.
Response: List of notifications or a not found message.
General Notes:
Authentication: Protected endpoints use JWT authentication.
Error Handling: Appropriate error messages and HTTP status codes are returned for failed operations.
Database: The ApplicationDbContext handles interactions with the database, including tables like Registers, Profiles, and MentorshipRequests.
This API is designed to streamline mentorship matching and interaction processes, ensuring secure and efficient communication between mentors and mentees.
