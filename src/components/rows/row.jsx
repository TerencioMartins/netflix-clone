import axios from "axios";
import React, { useState, useEffect } from "react";
import Axios from "../../api/requests/axios";
import "./row.css";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie?.name || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };
  function handleLeft() {
    // let x = scrollX + Math.round(window.innerWidth / 2);
    let x = scrollX + 500
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function handleRight() {
    let x = scrollX - 500;
    // let x = scrollX - Math.round(window.innerWidth / 2);
    // let listW = movies.length * 280;
    // if((window.innerWidth - listW) > x){
    //   x = (window.innerWidth - listW) - 60;
    // }
    setScrollX(x);
  }

  // console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters" style={{ marginLeft: scrollX }}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title || movie.name}
          />
        ))}
        <div
          className={`row__left ${isLargeRow && "row__leftLarge"}`}
          onClick={handleLeft}
        >
          <AiOutlineLeft />
        </div>
        <div
          className={`row__right ${isLargeRow && "row__rightLarge"}`}
          onClick={handleRight}
        >
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
}

export default Row;
