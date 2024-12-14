## 5. `AuthController`

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
