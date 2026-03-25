const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const weatherRoutes = require("./routes/weatherRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());



// DB connection
connectDB();




// Routes
app.use("/api/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});