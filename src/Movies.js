import React, { useState, useEffect } from "react";
import logo from "./starwars.svg";

const Movies = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/films`)
      .then((response) => {
        if (response.ok !== true) {
          alert(`check your URL`);
          throw new Error(
            `This is an HTTP Error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.results);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="logo-div">
        <img src={logo} alt="star wars logo" className="logo" />
      </div>
      {loading && 
        <div>
          Data is loading. Please wait...
          <div className="logo-display">
            <img src={logo} alt="logo" />
          </div>
        </div>
      }
      {error && <div>{`There is a problem fetching your data - ${error}`}</div>}
      <div className="movie-grid">
        {data &&
          data.map((items) => {
            return (
              <div key={items.title} className="movie">
                <a href="/#" className="title-link">
                  {items.title}
                </a>
                <p className="date">
                  {new Date(items.release_date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className="opening-crawl">
                  {items.opening_crawl.split(" ").splice(0, 33).join(" ")}...
                </p>
                <a className="more-info" href="/#">
                  More Info
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Movies;

// git remote add origin https://github.com/Marycynthia2020/Movie-Application.git