**Feedback Form System – Build, Break & Explain**

A simple full-stack Feedback Form application built using React (frontend) and Node.js + Express (backend).
This project focuses on building a working feature, testing edge cases, identifying issues, and improving the system step by step.

🚀 Live Links
Frontend (Vercel):
https://feedback-form-spectent-services.vercel.app/

🛠️ Tech Stack
Frontend
React.js
Axios
CSS
Backend
Node.js
Express.js
CORS middleware

✨ Features
User can submit Name, Email, and Feedback
Form validation on both frontend and backend
Success and error messages display
Loading state during submission
Temporary in-memory storage on backend

🔧 How to Run Locally
1. Clone Repository
git clone https://github.com/sidd-singh04/Feedback-Form_Spectent_Services

2. Backend Setup
cd backend
npm install
node server.js

Backend runs on:
http://localhost:5000

3. Frontend Setup
cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

⚠️ Known Limitations
Data is stored in memory (resets on server restart)
Basic email validation
No authentication system
No rate limiting for spam protection
No database integration

🧠 Key Improvements Made
Input validation added (trim + required checks)
Loading state added during submission
Better success/error handling UI
Improved email validation
Cleaner UX with disabled submit during request

📊 Scalability Considerations

If used by large number of users:
Backend may face high load
Memory storage will not scale
Need database like MongoDB
Add load balancing and caching
Implement rate limiting
👨‍💻 Author

Built as part of Spectent Services Private Limited Internship Assignment
