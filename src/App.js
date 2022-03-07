import React, { useEffect } from "react";
import "./App.css";
import Row from "./components/rows/row";
import requests from "./api/requests/requests";
import Banner from "./components/banner/banner";
import Nav from "./components/nav/nav";

function App() {
  useEffect(() => {
    let el = document.querySelector(".app");
    el.classList.add("fade-in");
  });

  return (
    <div className="appbackground">
      <div className="app">
        <Nav />
        <Banner />
        <Row
          title="Só na Netflix"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Em alta" fetchUrl={requests.fetchTrending} />
        <Row
          title="Ação e aventura empolgantes para TV"
          fetchUrl={requests.fetchActionMovies}
        />
        <Row title="Comédia" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Romances" fetchUrl={requests.fetchRomanceMovies} />
        <Row
          title="Terror assustador para TV"
          fetchUrl={requests.fetchHorrorMovies}
        />
        <Row title="Documentários" fetchUrl={requests.fetchDocumantaries} />
        <Row title="Mais votados" fetchUrl={requests.fetchTopRated} />
      </div>
    </div>
  );
}

export default App;
