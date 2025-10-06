const apiKey = "7058f59dbcef5936689eed5f68fe8aa0"; // tera key

document.getElementById("checkBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  const result = document.getElementById("result");

  if(!city) {
    result.innerHTML = "😅 Please enter a city name!";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if(!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const weather = data.weather[0].description;
      result.innerHTML = `🌤️ It's ${temp}°C with ${weather} in ${city}.<br>👉 Check outside the window 😎`;
    })
    .catch(() => {
      result.innerHTML = "💀 City not found. Try another city!";
    });
});