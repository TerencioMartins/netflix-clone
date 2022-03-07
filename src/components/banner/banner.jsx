import React, { useEffect, useState } from "react";
import Axios from "../../api/requests/axios";
import requests from "../../api/requests/requests";
import './banner.css'

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
      return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
  )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Assistir</button>
          <button className="banner__button">Minha lista</button>
        </div>
        <h1 className="banner__description">
            {truncate(movie?.overview, 151)}    
        </h1>
      </div>
      <div className="banner__fadeBottom"/>
    </header>
  );
}

export default Banner;
