const Weather = require("../models/Weather");

// CREATE
exports.saveWeather = async (req, res) => {
  try {
    const data = new Weather(req.body);
    await data.save();
    res.json({ message: "Data saved" });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
};

// READ
exports.getWeather = async (req, res) => {
  try {
    const data = await Weather.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
};

// DELETE
exports.deleteWeather = async (req, res) => {
  try {
    await Weather.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting data" });
  }
};