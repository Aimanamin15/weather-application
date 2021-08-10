import React, { useState, useEffect } from "react";
import "./Layout.css";
const Layout = () => {
  const [city, setCity] = useState(" ");
  const [search, setSearch] = useState("karachi");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e1d56696f64a038629c25b70b132ca67`;
      const response = await fetch(url);
      const resJson = await response.json();
      //   console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <div className="mainBox">
      <>
        <div className="box">
          <div className="inputData">
            <input
              type="search"
              className="inputField"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          {!city ? (
            <p>No Data Found!!!</p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <i className="fas fa-cloud"></i>
                  {search}
                </h2>
                <h1 className="temp">{city.temp}&#8451; </h1>
                <h3 className="tempin_max">
                  {city.temp_min}&#8451; | {city.temp_max}&#8451;
                </h3>
                <h4>{city.description}</h4>
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default Layout;
