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
<img width="1047" height="686" alt="Screenshot 2026-07-23 080531" src="https://github.com/user-attachments/assets/22c475c6-ae97-435c-8ef3-cbc5e05519ab" />
<img width="1075" height="763" alt="Screenshot 2026-07-23 080545" src="https://github.com/user-attachments/assets/ddb95b20-1c1f-40e0-9b6b-5ee0ef76005d" />
<img width="1162" height="737" alt="Screenshot 2026-07-23 080602" src="https://github.com/user-attachments/assets/b1f82b80-6479-4593-b912-d1eea6213a6b" />
<img width="1073" height="654" alt="Screenshot 2026-07-23 080618" src="https://github.com/user-attachments/assets/10a8ee93-aa1a-476e-84a3-87c9a87257b1" />
<img width="1919" height="936" alt="Screenshot 2026-07-23 080303" src="https://github.com/user-attachments/assets/522df56c-a453-4662-a54a-cf622bea76c1" />
<img width="279" height="120" alt="Screenshot 2026-07-23 080325" src="https://github.com/user-attachments/assets/8a8f204e-70c3-4092-a3ba-6996ef9ddddc" />
<img width="1919" height="946" alt="Screenshot 2026-07-23 080353" src="https://github.com/user-attachments/assets/ac3fe3dc-d55b-4355-a40d-61a072082eca" />
<img width="1174" height="798" alt="Screenshot 2026-07-23 080412" src="https://github.com/user-attachments/assets/ef69895c-2527-4633-83ad-49b0e099e43f" />
<img width="1115" height="541" alt="Screenshot 2026-07-23 080422" src="https://github.com/user-attachments/assets/798ce29c-107f-4e64-bc13-c150f78f67a5" />
<img width="1127" height="782" alt="Screenshot 2026-07-23 080437" src="https://github.com/user-attachments/assets/03db3c4b-c0ca-4f4c-9670-ab5c091f9891" />
<img width="1098" height="628" alt="Screenshot 2026-07-23 080451" src="https://github.com/user-attachments/assets/948e505b-4338-4cc1-ac62-d7e23ea09759" />

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
