## 1. `AuthController`

### **Description**  
The `AuthController` manages the core functionalities related to user authentication and authorization in the Mentorship Platform API. It provides endpoints for user registration, secure login, and JWT token generation to manage user sessions effectively.

---

### **Key Endpoints:**

- **`POST /api/Auth/register`**  
  Registers a new user by accepting user details such as username, email, role (mentor or mentee), and password. It first checks if the email already exists, ensuring no duplicates in the system.
  
- **`POST /api/Auth/login`**  
  Authenticates a user using their email and password. Upon successful login, a JWT token is generated along with the user's details (username, role, and ID), which can be used for subsequent requests.

---

### **Features:**

- **Secure Authentication with JWT Tokens**  
  Ensures secure authentication by generating a JWT token upon successful login, which is used for verifying the user's identity for authorized actions.

- **Input Validation & Error Handling**  
  Handles scenarios like duplicate email registration or incorrect login credentials by providing detailed error messages and responses.

- **Token Expiration & Security**  
  JWT tokens are configured with an expiration time, enforcing periodic re-authentication and maintaining secure access.

---

### **Security Considerations:**

- **Password Storage**  
  Currently, passwords are stored as plain text. It's highly recommended to implement password hashing (such as bcrypt or SHA-256) for better security.

- **JWT Token Expiry**  
  JWT tokens include an expiration time to limit the duration of the session, ensuring secure access and requiring users to reauthenticate after the token expires.

---

### **How It Works:**

1. **User Registration (`/register`):**  
   A user sends a `POST` request with their registration details. The system checks for existing emails and then stores the new user in the database.

2. **User Login (`/login`):**  
   After registration, users can log in by sending their credentials. If correct, the system returns a JWT token for the user’s session.

---

This controller is essential for handling user authentication, ensuring that only authorized users can access sensitive resources within the platform.


## 2. `DeleteController`

### **Description**  
The `DeleteController` handles the functionality to delete a user account, removing the user’s data from both the `Registers` and `Profiles` tables in the Mentorship Platform API. This ensures that all user-related information is fully deleted from the system when a user requests account deletion.

---

### **Key Endpoints:**

- **`DELETE /api/delete/delete-account/{id}`**  
  Deletes a user account by removing the user data from both the `Registers` and `Profiles` tables based on the provided user ID.  
  - **Input**: `id` (the unique user identifier in the system).
  - **Process**: 
    1. First, it attempts to find the user in the `Registers` table.
    2. If found, the user is deleted from the `Registers` table.
    3. It then checks the `Profiles` table and deletes the associated profile if it exists.
  - **Output**: 
    - Returns `200 OK` if the user is successfully deleted from both tables.
    - Returns `404 Not Found` if the user is not found in the `Registers` table.
    - Returns a `500 Internal Server Error` if an exception occurs during the deletion process.

---

### **Features:**

- **Full Account Deletion**  
  Ensures that both user registration details and profile information are removed from the database when a user requests account deletion.

- **Error Handling**  
  Provides appropriate responses for scenarios where the user does not exist in the system or when an unexpected error occurs during the deletion process.

- **Database Integrity**  
  Ensures that the user’s data is fully cleaned up from all relevant tables, avoiding orphaned records in the database.

---

### **Error Handling:**

- **User Not Found**: If the user is not found in the `Registers` table, a `404 Not Found` response is returned with a relevant message.
- **Server Error**: In case of any issues during the deletion process (e.g., database errors), a `500 Internal Server Error` is returned with the error details.

---

### **How It Works:**

1. **User Deletion (`/delete-account/{id}`)**:  
   - A `DELETE` request with the user's `id` is sent to the API.
   - The controller first searches for the user in the `Registers` table.
   - If the user is found, the account is deleted from the `Registers` table, followed by the deletion of any associated profile data in the `Profiles` table.
   - Success or error messages are returned based on the outcome of the process.

---

This controller ensures that user accounts are completely deleted from the platform, removing all associated data and maintaining database integrity.


## 3. `MentorController`

### **Description**  
The `MentorController` manages functionalities related to mentors in the Mentorship Platform API. It provides endpoints to retrieve all mentors and match mentors based on specific user skills. This controller is designed to help mentees find mentors with relevant expertise.

---

### **Key Endpoints:**

- **`GET /api/mentor/getmentors`**  
  Retrieves all mentors available in the system by filtering profiles with the role "Mentor".  
  - **Output**: Returns a list of mentors with details such as name, skills, and role.

- **`POST /api/mentor/matchmentors`**  
  Matches mentors based on the user's skills by filtering available mentors whose skills overlap with the user’s input.  
  - **Input**: A comma-separated string of user skills (e.g., `"Java, Machine Learning, Python"`).
  - **Process**: The skills are compared with each mentor’s skills, and mentors with matching expertise are returned.
  - **Output**: Returns a list of matched mentors based on the user’s skills.

---

### **Features:**

- **Retrieve All Mentors**  
  Allows users to fetch a list of all mentors available in the platform.

- **Skill-Based Mentor Matching**  
  Matches mentors to mentees based on the user’s specified skills. This ensures that mentees are paired with mentors who have relevant expertise.

- **Flexible Skill Matching**  
  The system allows mentees to specify multiple skills, which are matched against the mentors' skill sets.

---

### **How It Works:**

1. **Get All Mentors (`/getmentors`)**  
   - A `GET` request retrieves all profiles with the role "Mentor", returning mentor details such as name, role, and skills.

2. **Match Mentors (`/matchmentors`)**  
   - A `POST` request accepts a list of user skills and compares them against mentors’ skills stored in the platform.
   - Mentors whose skills match the user’s input are returned as potential matches.

---

### **Error Handling:**

- If no mentors are found for a given skill set, the response will return an empty list.
- The system ensures that only mentors with matching skills are returned, improving the matching quality.

---

This controller plays an important role in providing mentorship matching functionality, allowing mentees to connect with mentors based on their specific skills and requirements.
****


## 4. `MentorshipRequestController`

### **Description**  
The `MentorshipRequestController` handles the functionality related to mentorship requests. This controller enables mentors to view mentee requests and update the status of these requests (accept or reject). It also ensures that mentees' requests are handled efficiently and mentors are able to manage their mentee relationships effectively.

---

### **Key Endpoints:**

- **`GET /api/mentorshiprequest/mentor/{mentorId}`**  
  Fetches the mentee requests for a specific mentor. Only the latest request per mentee is returned, based on the most recent request.
  - **Input**: Mentor ID (mentorId)
  - **Output**: List of mentee requests (with `Id`, `MenteeId`, and `Status`) for the specified mentor.

- **`PUT /api/mentorshiprequest/mentor/accept-reject/{requestId}`**  
  Allows a mentor to accept or reject a mentee's request.
  - **Input**: Request ID (requestId) and action (either "accept" or "reject").
  - **Output**: Confirmation message on request status update.

---

### **Features:**

- **View Mentee Requests**  
  Enables mentors to view all the mentee requests made to them, displaying the latest request for each mentee.

- **Accept or Reject Requests**  
  Mentors can update the status of each request to either "Accepted" or "Rejected" based on their decision.

- **Input Validation and Error Handling**  
  Proper input validation and error handling ensure that requests are managed effectively and any issues are reported with clear messages.

---

### **How It Works:**

1. **Fetching Mentee Requests (`/mentor/{mentorId}`)**  
   - A `GET` request retrieves all mentee requests for a specific mentor. Only the latest request per mentee is returned based on the most recent submission.

2. **Updating Request Status (`/mentor/accept-reject/{requestId}`)**  
   - A `PUT` request allows mentors to accept or reject a mentee's request. The action can be either "accept" or "reject", and it updates the status of the request accordingly.

---

### **Error Handling:**

- **No Requests Found**: If no mentee requests exist for the given mentor, a `404 Not Found` response is returned.
- **Invalid Action**: If the action provided is not "accept" or "reject", a `400 Bad Request` response is returned.
- **Server Errors**: In case of any server errors (e.g., database issues), a `500 Internal Server Error` response is returned with detailed error information.

---

This controller is essential for managing mentorship requests and streamlining the process of pairing mentors with mentees, providing an easy way for mentors to review and respond to requests.


## 5. `NotifyController`

### **Description**  
The `NotifyController` is responsible for managing the notifications related to mentorship requests. It allows for sending notifications, updating the status of requests (e.g., Pending, Accepted, Rejected), and fetching notifications for both mentors and mentees. This controller streamlines the communication process between mentors and mentees, ensuring timely updates on mentorship request statuses.

---

### **Key Endpoints:**

- **`POST /api/notify/send`**  
  Sends a notification by creating a new mentorship request with a "Pending" status. 
  - **Input**: A JSON object with `MentorId` and `MenteeId`.
  - **Output**: Confirmation message with the new mentorship request details.

- **`PUT /api/notify/updatestatus/{id}`**  
  Updates the status of a mentorship request (e.g., Pending, Accepted, Rejected).
  - **Input**: Request ID (`id`) and a new status (`Pending`, `Accepted`, or `Rejected`).
  - **Output**: Confirmation message with the updated request.

- **`GET /api/notify/mentee/{menteeId}`**  
  Fetches all mentorship requests for a specific mentee, showing the mentor's ID and the current request status.
  - **Input**: Mentee ID (`menteeId`).
  - **Output**: A list of mentorship requests (with `Id`, `MentorId`, and `Status`).

- **`GET /api/notify/mentor/{mentorId}`**  
  Fetches all mentorship requests for a specific mentor, showing the mentee's ID and the current request status.
  - **Input**: Mentor ID (`mentorId`).
  - **Output**: A list of mentorship requests (with `Id`, `MenteeId`, and `Status`).

---

### **Features:**

- **Send Notifications**  
  Mentorship requests can be created, which will automatically notify mentors and mentees with a "Pending" status. This is the first step in the mentorship matching process.

- **Update Request Status**  
  Mentors or system administrators can update the status of the mentorship request. Valid status values include "Pending", "Accepted", and "Rejected". 

- **Fetch Notifications for Mentee**  
  Mentees can check the status of their mentorship requests with mentors. This endpoint returns all requests related to a specific mentee.

- **Fetch Notifications for Mentor**  
  Mentors can check the status of all mentorship requests they have received from mentees. This endpoint returns all requests related to a specific mentor.

- **Error Handling**  
  Each endpoint includes error handling for cases like invalid input, request not found, or server errors, ensuring clear communication of issues.

---

### **How It Works:**

1. **Sending a Notification (`/send`)**  
   - A `POST` request creates a new mentorship request and sends a notification to the mentor. The request is initially set to "Pending".

2. **Updating the Request Status (`/updatestatus/{id}`)**  
   - A `PUT` request updates the status of the mentorship request to "Accepted" or "Rejected". The status update is reflected in the database.

3. **Fetching Mentee Notifications (`/mentee/{menteeId}`)**  
   - A `GET` request allows mentees to view the status of their requests. It returns a list of mentorship requests associated with a specific mentee.

4. **Fetching Mentor Notifications (`/mentor/{mentorId}`)**  
   - A `GET` request allows mentors to view the requests they have received from mentees. It returns a list of mentorship requests associated with a specific mentor.

---

### **Error Handling:**

- **Invalid IDs**: If the `MentorId` or `MenteeId` is invalid or missing, a `400 Bad Request` response is returned.
- **Request Not Found**: If the mentorship request does not exist in the database, a `404 Not Found` response is returned.
- **Invalid Status**: If an invalid status is provided (other than "Pending", "Accepted", or "Rejected"), a `400 Bad Request` response is returned.
- **Server Errors**: If an error occurs during database operations, a `500 Internal Server Error` response is returned with detailed error information.

---

This controller plays a key role in enabling efficient and timely communication between mentors and mentees, making sure that both parties are aware of the status of their requests.


## 6. `ProfileController`

### **Description**  
The `ProfileController` is responsible for managing user profiles within the mentorship platform. It allows users to create or update their profiles, which include essential details such as username, role, phone number, bio, skills, and location. The controller handles both creating new profiles and updating existing ones.

---

### **Key Endpoints:**

- **`POST /api/profile/saveprofile`**  
  Creates or updates a user's profile. If the profile already exists, it updates the profile with the new data; otherwise, it creates a new profile.
  - **Input**: A JSON object representing the profile (`Id`, `Username`, `Role`, `Phone`, `Bio`, `Skills`, `Location`).
  - **Output**: Confirmation message indicating whether the profile was created or updated successfully.

---

### **Features:**

- **Create New Profile**  
  If a profile does not already exist, a new profile will be created. The user provides the necessary information such as username, role, phone, bio, skills, and location.

- **Update Existing Profile**  
  If a profile with the given `Id` exists, the existing profile is updated with the new data. This includes updating all provided fields like username, phone number, bio, skills, etc.

- **Error Handling**  
  If the profile data is `null` or missing, a `400 Bad Request` response is returned with an appropriate error message.

---

### **How It Works:**

1. **Updating or Creating a Profile (`/saveprofile`)**  
   - A `POST` request is used to either create a new profile or update an existing one. If the profile with the given `Id` is found in the database, the data is updated with the new values. If no existing profile is found, a new one is created and added to the database.

2. **Handling Missing Profile Data**  
   - If the `profile` object is `null` in the request, a `400 Bad Request` response is returned with a message indicating that the profile data is missing.

---

### **Example Request Body:**

```json
{
  "Id": 1,
  "Username": "mentor123",
  "Role": "Mentor",
  "Phone": "123-456-7890",
  "Bio": "Experienced mentor in software development.",
  "Skills": "C#, .NET, React",
  "Location": "San Francisco, CA"
}

