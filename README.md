# Mentorship Matching Platform

The **Mentorship Matching Platform** is a full-stack web application that helps users connect with mentors or mentees based on their skills and interests. This platform provides secure user authentication, profile management, mentorship matching, notifications, and more.

---

## 🚀 **Project Overview**

The platform enables users to:

- **Register** as a mentor or mentee.
- **Set up profiles** with their skills, interests, and goals.
- **Find mentors/mentees** based on matching skills and interests.
- **Send and receive mentorship requests** and manage connections.
- **Receive notifications** for important updates.

This project uses **.NET Core 6 Web API** for the backend, **ReactJS** for the frontend, and **MySQL** for the database.

---

## 🛠️ **Technologies Used**

### **Frontend**
- ReactJS
- Bootstrap
- CSS

### **Backend**
- ASP.NET Core 6 Web API
- C#

### **Database**
- MySQL

### **Other Tools**
- JWT (JSON Web Token) Authentication
- Visual Studio / VS Code
- Postman (for API testing)

---

## 📂 **Project Structure**

### **Backend (MentorshipPlatformAPI)**

```
MentorshipPlatformAPI/
│-- Controllers/
│   ├── AuthController.cs
│   ├── DeleteController.cs
│   ├── MentorController.cs
│   ├── MentorshipRequestController.cs
│   ├── NotifyController.cs
│   └── ProfileController.cs
│
│-- Data/
│   └── ApplicationDbContext.cs
│
│-- Migrations/
│   ├── [Migration Files]
│   └── ApplicationDbContextModelSnapshot.cs
│
│-- Models/
│   ├── Login.cs
│   ├── MentorshipRequest.cs
│   ├── Profile.cs
│   └── Register.cs
│
├── appsettings.json
├── appsettings.Development.json
└── Program.cs
```

### **Frontend (MENTORSHIP-PLATFORM-FRONTEND)**

```
MENTORSHIP-PLATFORM-FRONTEND/
│-- src/
│   ├── components/
│   │   ├── main/
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   ├── Footer.js
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Profile.js
│   │   │   └── Register.js
│   │   │
│   │   ├── mentee/
│   │   │   ├── MenteePage.js
│   │   │   ├── MentorSuggestions.js
│   │   │   ├── NavbarMentee.js
│   │   │   ├── Notes.js
│   │   │   └── NotifyMentee.js
│   │   │
│   │   └── mentor/
│   │       ├── ClassSchedule.js
│   │       ├── MenteeRequestsForMentor.js
│   │       ├── MentorPage.js
│   │       ├── NavbarMentor.js
│   │       ├── NotifyMentor.js
│   │       └── ToDoWork.js
│   │
│   ├── services/
│   ├── App.css
│   └── App.js
```

---

## 💡 **Key Features**

### 1. **Landing Page**
- Home page with navigation to **Register**, **Login**, **About Us**, and **Contact Us**.

### 2. **User Authentication**
- **Register** and **Login** pages for user authentication.
- Secure JWT-based authentication.

### 3. **Profile Management**
- Users can create, view, update, and delete their profiles.

### 4. **Matching Algorithm**
- Suggests potential mentors or mentees based on skills and interests.

### 5. **Mentorship Requests**
- Users can send, receive, accept, or decline mentorship requests.

### 6. **Dashboard**
- Tailored dashboards for **mentors** and **mentees** with:
  - **Mentor Suggestions** for mentees.
  - **Mentee Requests** for mentors.
  - **Notifications** for updates.
  - **To-Do List** for task management.

### 7. **Notifications**
- Real-time notifications for mentorship requests and updates.




 





## 📞 **Contact**

For any inquiries or feedback, please reach out via:

- **Email**: your-email@example.com
- **LinkedIn**: [Your LinkedIn Profile](link-to-your-linkedin-profile)
