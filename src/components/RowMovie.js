import React, { useEffect, useState } from "react";
import "./RowMovie.css";
import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original/";
const RowMovie = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const data = request.data.results;

      setMovies(data);
    //   console.log(data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="rowMovie">
      {/* title */}
      <h3>{title}</h3>
      <div className="rowPosters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`poster ${isLargeRow && "posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container -> posters */}
    </div>
  );
};

export default RowMovie;
