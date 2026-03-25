const express = require("express");
const router = express.Router();

const {
  saveWeather,
  getWeather,
  deleteWeather,
} = require("../controllers/weatherController");

// Routes
router.post("/save", saveWeather);
router.get("/all", getWeather);
router.delete("/delete/:id", deleteWeather);

module.exports = router;