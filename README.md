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

---

## ⚙️ **System Configuration**

### **Prerequisites**

- **Node.js** (for frontend)  
  Download: [https://nodejs.org/](https://nodejs.org/)

- **.NET 6 SDK** (for backend)  
  Download: [https://dotnet.microsoft.com/download/dotnet/6.0](https://dotnet.microsoft.com/download/dotnet/6.0)

- **MySQL Server**  
  Download: [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)

### **Frontend Installation**

1. Navigate to the frontend folder:
   ```bash
   cd MENTORSHIP-PLATFORM-FRONTEND
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the frontend application:
   ```bash
   npm start
   ```

### **Backend Installation**

1. Navigate to the backend folder:
   ```bash
   cd MentorshipPlatformAPI
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Update the database:
   ```bash
   dotnet ef database update
   ```

4. Run the backend API:
   ```bash
   dotnet run
   ```

### **MySQL Configuration**

Update the database connection string in `appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER;Database=YOUR_DB;User=YOUR_USER;Password=YOUR_PASSWORD;"
}
```

---

## 📸 **Screenshots**

1. **Landing Page**  
   ![Landing Page](link-to-landing-page-screenshot)

2. **Mentee Dashboard**  
   ![Mentee Dashboard](link-to-mentee-dashboard-screenshot)

3. **Mentor Dashboard**  
   ![Mentor Dashboard](link-to-mentor-dashboard-screenshot)

4. **Notifications**  
   ![Notifications](link-to-notifications-screenshot)

---

## 🤝 **Contributing**

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push the branch: `git push origin feature/your-feature`.
5. Open a pull request.

---

## 📜 **License**

This project is licensed under the [MIT License](LICENSE).

---

## 📞 **Contact**

For any inquiries or feedback, please reach out via:

- **Email**: your-email@example.com
- **LinkedIn**: [Your LinkedIn Profile](link-to-your-linkedin-profile)
