import React, { useEffect, useState } from "react";
import "./RowMovie.css";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
const RowMovie = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailer] = useState("");

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

  const opts = {
    height: "390",
    width: "50%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailer("");
    } else {
      console.log(movie);
      movieTrailer(movie?.title || movie?.original_title || movie?.original_name )
        .then((url) => {
          console.log(url)
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <div className="rowMovie">
      {/* title */}
      <h3>{title}</h3>
      {/* container -> posters */}
      <div className="rowPosters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`poster ${isLargeRow && "posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* trailer */}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default RowMovie;
