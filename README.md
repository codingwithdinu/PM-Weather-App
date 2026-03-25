# 🌤️ Full Stack Weather App + ML Forecast

## 🚀 Overview

This project is a **Full Stack Weather Application** integrated with a **Machine Learning Forecast System**.

It allows users to:

* Fetch real-time weather data
* View short-term forecasts
* Store search history in a database
* Predict future temperature using ML models

---

## 🌐 Features

### 🔹 Weather Web App

* Search weather by city name
* Real-time data using OpenWeather API
* 5-day forecast display
* Clean and simple UI

### 🔹 Backend (Node.js + Express)

* REST API development
* Data storage in MongoDB Atlas
* Save and retrieve user search history

### 🔹 Machine Learning Module

* Data preprocessing & cleaning
* Feature engineering (date → day extraction)
* Models used:

  * Linear Regression
  * Random Forest Regressor
* Model evaluation using Mean Absolute Error (MAE)
* Best model selection for prediction

---

## 🛠️ Tech Stack

| Layer    | Technology                               |
| -------- | ---------------------------------------- |
| Frontend | HTML, CSS, JavaScript                    |
| Backend  | Node.js, Express                         |
| Database | MongoDB Atlas                            |
| ML       | Python, Pandas, Scikit-learn, Matplotlib |
| API      | OpenWeatherMap                           |

---

## 📁 Project Structure

```
PM-Weather-App/
│
├── frontend/        # UI (HTML, CSS, JS)
├── backend/         # Node.js server & APIs
├── ml-project/      # Machine Learning module
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/codingwithdinu/PM-Weather-App.git
cd PM-Weather-App
```

---

### 2️⃣ Run Backend

```
cd backend
npm install
node server.js
```

---

### 3️⃣ Run Frontend

Open:

```
frontend/index.html
```

---

### 4️⃣ Run ML Project

```
cd ml-project
pip install pandas numpy matplotlib scikit-learn
python main.py
```

---

## 🌐 API Endpoints

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/weather/all  |
| POST   | /api/weather/save |

---

## 📊 Results

* Real-time weather data fetched from API
* User data stored in MongoDB
* ML model predicts temperature trends
* Best model selected using performance metrics

---

## 🎥 Demo

👉 Add your demo video link here (YouTube / Drive)

---

## 🧠 Learning Outcomes

* Full Stack Development (Frontend + Backend)
* REST API Integration
* Database Management (MongoDB)
* Machine Learning Workflow
* Data Cleaning & Feature Engineering

---

## 👨‍💻 Author

**Dinesh Patel**

---

## ⭐ Future Improvements

* Add user authentication (Login/Signup)
* Improve UI/UX with modern frameworks
* Deploy app online (Render / Vercel)
* Enhance ML model accuracy

---
