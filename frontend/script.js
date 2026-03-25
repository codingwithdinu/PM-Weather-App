async function getWeather() {

  console.log("Button clicked");

  let city = document.getElementById("city").value;
  let apiKey = "d405bf2904145c707aebc49ed12c406b";

  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    if (data.cod === "404") {
      document.getElementById("result").innerText = "City not found ❌";
      return;
    }




    //Forecast UI
    let forecast = data.list.slice(0, 5).map((item) => {
      return `<p>${item.dt_txt} - 🌡 ${item.main.temp} °C</p>`;
    }).join("");

    document.getElementById("result").innerHTML = `
      <h3>${data.city.name}</h3>
      ${forecast}
    `;




    //Save to backend
    await fetch("http://localhost:3000/api/weather/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        city: data.city.name,
        temperature: data.list[0].main.temp
      })
    });



    console.log("Data saved to DB");

  } catch (error) {
    console.log(error);
    document.getElementById("result").innerText = "Error fetching data";
  }
}