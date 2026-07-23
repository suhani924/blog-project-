# Admin Panel — Student Management System

A simple **Node.js + Express + EJS + MongoDB** based Admin Panel to manage student records (Create, Read, Update, Delete), with basic Signup/Signin authentication using cookies.

---

## ✨ Features

- User Signup & Signin (cookie-based auth)
- Protected Dashboard (redirects to Signin if not logged in)
- Add / Edit / Delete Student records
- View all students in a table
- Clean, modern, responsive UI

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Templating:** EJS
- **Database:** MongoDB (via Mongoose)
- **Other:** cookie-parser

---

## 📂 Project Structure

```
Blog project/
├── app.js                     # Entry point, DB connection, server config
├── config/
│   └── db.js
├── controllers/
│   ├── userController.js      # Signup / Signin / Logout logic
│   └── dataController.js      # Student CRUD logic
├── middlewares/
│   └── auth.js                # Protects routes using cookie check
├── models/
│   ├── User.js
│   ├── Data.js
│   └── Student.js
├── routes/
│   ├── userRoutes.js
│   └── dataRoutes.js
├── public/
│   └── css/
│       └── style.css          # UI styling
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── dashboard.ejs
│   ├── form.ejs
│   ├── edit.ejs
│   ├── table.ejs
│   ├── signin.ejs
│   └── signup.ejs
└── package.json
```

## screenshots
<img width="1919" height="936" alt="Screenshot 2026-07-23 080303" src="https://github.com/user-attachments/assets/68707f41-a3f6-44fc-b7a1-4eff02fb4b99" />
<img width="279" height="120" alt="Screenshot 2026-07-23 080325" src="https://github.com/user-attachments/assets/8a032f30-4db7-44bd-a38c-eef36b823a4c" />
<img width="1919" height="946" alt="Screenshot 2026-07-23 080353" src="https://github.com/user-attachments/assets/5c16d49a-41ad-41a9-8fc3-e5b7a3553389" />
<img width="1174" height="798" alt="Screenshot 2026-07-23 080412" src="https://github.com/user-attachments/assets/ce0dccfa-59c0-42d1-bddd-91b11537fd32" />


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd "Blog project"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

Make sure MongoDB is running locally on:

```
mongodb://127.0.0.1:27017/adminpanel
```

(You can change this connection string in `app.js` if using MongoDB Atlas or a different DB name.)

### 4. Run the app

```bash
node app.js
```

You should see:

```
Server Started...
Database Connected...
```

### 5. Open in browser

```
http://localhost:8000
```

---

## 🧭 Usage Flow

1. Go to `/signup` and create an account.
2. Go to `/signin` and log in with the same credentials.
3. You'll be redirected to the Dashboard.
4. Use `/form` to add a new student.
5. Use `/table` to view, edit, or delete student records.

---

## 🔗 Routes

| Method | Route              | Description              |
|--------|---------------------|---------------------------|
| GET    | `/`                 | Dashboard (protected)    |
| GET    | `/signup`           | Signup page               |
| POST   | `/signup`           | Create new user           |
| GET    | `/signin`           | Signin page                |
| POST   | `/signin`           | Login user                 |
| GET    | `/logout`           | Logout user                |
| GET    | `/form`             | Add student form           |
| POST   | `/insertData`       | Save new student           |
| GET    | `/table`            | View all students          |
| GET    | `/edit/:id`         | Edit student form          |
| POST   | `/update/:id`       | Update student record      |
| GET    | `/delete/:id`       | Delete student record      |

---

## 📌 Notes

- The database is empty by default — data (users/students) appears only after you use the Signup and Add Student forms.
- Authentication is basic and cookie-based; not intended for production use as-is.

---

## 📄 License

ISC
