import axios from "axios";
import React, { useState } from "react";
import TableData from "./TableData";
import Spiner from "./Spiner";

function Weather(props) {
  const [searchParam, setSearchParam] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?appid=15ca787f2d191cf1f09525804a2ce85d&q=${searchParam}`
      );
      const forecastList = response.data.list;

      const today = new Date().toISOString().split("T")[0];

      const uniqueDays = [];
      const filteredData = forecastList.filter((item) => {
        const date = item.dt_txt.split(" ")[0];
        const time = item.dt_txt.split(" ")[1];

        if (date === today && uniqueDays.length === 0) {
          uniqueDays.push(date);
          return true;
        }

        if (
          time === "12:00:00" &&
          uniqueDays.length < 5 &&
          !uniqueDays.includes(date)
        ) {
          uniqueDays.push(date);
          return true;
        }

        return false;
      });

      setWeatherData(filteredData);
      setError(null);
    } catch (error) {
      alert("City not found, please try again.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 w-full py-4">
      <div className="sm:flex sm:ml-24 sm:space-x-24 space-y-2 pt-4 w-full ">
        <div className="font-bold text-3xl text-[#F28C28] flex justify-center">
          Weather in your City
        </div>
        <div className="sm:flex space-x-4 sm:pl-32 justify-center sm:space-y-0 space-y-4">
          <div className="flex justify-center">
            <input
              type="text"
              value={searchParam}
              placeholder="Enter City Name ..."
              onChange={(e) => setSearchParam(e.target.value)}
              className="border-2 rounded-md border-[#F28C28] px-2 h-10"
            />
          </div>
          <div className="flex justify-center cursor-pointer">
            <div
              className="bg-[#F28C28] px-8 py-2 rounded-md font-medium text-white"
              onClick={fetchWeather}
            >
              {"Search"}
            </div>
          </div>
          <div>{loading && <Spiner />}</div>
        </div>
      </div>
      {/* table data */}
      <div className="w-full sm:flex justify-center sm:space-x-3 px-2 sm:space-y-0 space-y-4 sm:space-x-2">
        {weatherData?.map((item) => (
          <div className="flex justify-center">
            <TableData item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;
