import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../requests";

const base_url = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const data =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ];
      setMovie(data);
      //   console.log(data);
      return request;
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContent">
        {/* title */}
        <h1 className="bannerTitle">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>

        {/* div > 2 buttons */}
        <div className="bannerButtons">
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        {/* description */}
        <h1 className="bannerDescription">{movie?.overview}</h1>
      </div>
      <div className="bannerFadeBottom">
          
      </div>
    </header>
  );
};

export default Banner;
