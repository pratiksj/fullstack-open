import { useState, useEffect } from "react";
import axios from "axios";

const CountryDetails = ({ x }) => {
  const [showWeather, setWeather] = useState({
    temperature: "",
    wind: "",
    weatherIcon: "",
  });
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=6e9ca429441d4350b2731537220508&q=${x.capital[0]}&aqi=no`
      )
      .then((result) => {
        console.log(result);
        setWeather({
          temperature: result.data.current.temp_c,
          wind: result.data.current.wind_mph,
          weatherIcon: result.data.current.condition.icon,
        });
        //console.log(result.data);
      });
  }, []);

  return (
    <div key={x.tld}>
      <h3>Country: {x.name.common}</h3>
      <p>Capital: {x.capital[0]}</p>
      <>Area: {x.area}</>
      <h4>languages:</h4>
      <ul>
        {Object.keys(x.languages).map((language, index) => (
          <li key={index}>{x.languages[language]}</li>
        ))}
      </ul>
      {/* <p>{x.flag}</p> */}
      <p>Flag:</p>
      <img
        style={{ height: "300px", width: "300px" }}
        alt="Country Flag"
        src={x.flags.svg}
      />
      <h2>
        Weather in{""} {x.name.common}
      </h2>
      <p>Temperature{showWeather.temperature}</p>
      <img
        style={{ height: "150px", width: "150px" }}
        src={showWeather.weatherIcon}
      />

      <p>Wind:{showWeather.wind}</p>
    </div>
  );
};
export default CountryDetails;
