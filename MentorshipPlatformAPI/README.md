Mentorship Platform API Controllers
This document provides a comprehensive description of the controllers used in the Mentorship Platform API. These controllers handle various functionalities such as user authentication, mentorship matching, request management, and notifications.

1. AuthController
Purpose
The AuthController manages user registration, login, and JWT-based authentication.

Endpoints
Register a New User

Endpoint: POST /api/Auth/register
Description: Registers a new user (mentor or mentee).
Request Body:
json
Copy code
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "mentor/mentee"
}
Response: Success message or an error if the email already exists.
Login User

Endpoint: POST /api/Auth/login
Description: Authenticates a user and provides a JWT token.
Request Body:
json
Copy code
{
  "email": "string",
  "password": "string"
}
Response: JWT token, username, role, and user ID.
2. DeleteController
Purpose
The DeleteController handles the deletion of user accounts.

Endpoints
Delete User Account
Endpoint: DELETE /api/delete/delete-account/{id}
Description: Deletes a user account from the database.
Response: Success message or an error if the user ID is not found.
3. MentorController
Purpose
The MentorController provides functionalities for retrieving mentors and matching them based on user skills.

Endpoints
Get All Mentors

Endpoint: GET /api/Mentor/getmentors
Description: Retrieves a list of all mentors.
Response: List of mentor profiles.
Match Mentors by Skills

Endpoint: POST /api/Mentor/matchmentors
Description: Matches mentors based on the user's provided skills.
Request Body:
json
Copy code
"skill1, skill2, skill3"
Response: List of mentors matching the given skills.
4. MentorshipRequestController
Purpose
The MentorshipRequestController manages mentorship requests, including viewing, accepting, and rejecting requests.

Endpoints
Get Mentee Requests for a Mentor

Endpoint: GET /api/MentorshipRequest/mentor/{mentorId}
Description: Retrieves the latest mentorship requests for a mentor.
Response: List of mentee requests.
Accept or Reject a Request

Endpoint: PUT /api/MentorshipRequest/mentor/accept-reject/{requestId}
Description: Allows a mentor to accept or reject a mentorship request.
Request Body:
json
Copy code
{
  "action": "accept/reject"
}
Response: Success message or error if the request ID is invalid.
5. NotifyController
Purpose
The NotifyController handles notifications related to mentorship requests and status updates.

Endpoints
Send a Mentorship Request Notification

Endpoint: POST /api/Notify/send
Description: Sends a notification for a new mentorship request.
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
Description: Updates the status of a mentorship request (e.g., Pending, Accepted, Rejected).
Request Body:
json
Copy code
"Accepted"
Response: Success message or error for invalid status.
Get Notifications for Mentee

Endpoint: GET /api/Notify/mentee/{menteeId}
Description: Retrieves notifications for a specific mentee.
Response: List of notifications or an error if no notifications exist.
Get Notifications for Mentor

Endpoint: GET /api/Notify/mentor/{mentorId}
Description: Retrieves notifications for a specific mentor.
Response: List of notifications or an error if no notifications exist.
General Notes
Authentication: Protected endpoints use JWT authentication.
Error Handling: The API returns appropriate HTTP status codes and error messages for failed operations.
Database: The ApplicationDbContext manages database interactions, including tables such as Registers, Profiles, and MentorshipRequests.
This API is designed to streamline mentorship matching and ensure efficient communication between mentors and mentees.

