import React, { useState, useEffect } from "react";
import logo from "./starwars.svg";
import CardGrid from "./components/CardGrid";

const Movies = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(null);
  const [data, setData] = useState([]); // you know the type of data you are expecting which is an array

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
      {loading ? 
        <div>
          <div className="logo-display">
            <img src={logo} alt="logo" />
          </div>
        </div> : data.length > 0 ? <CardGrid data={data}/> : "No movies"
      }
      {error && <div>{`There is a problem fetching your data - ${error}`}</div>}
   
    </div>
  );
};

export default Movies;

// git remote add origin https://github.com/Marycynthia2020/Movie-Application.git