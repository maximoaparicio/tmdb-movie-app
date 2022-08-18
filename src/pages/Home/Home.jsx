import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./Home.module.css";

export function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  // recibo los datos de la api mediante fetch y los resultados los guardo en setPopularMovies
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    // creo los poster con Carousel
    <>
      <div className={styles.poster}>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          // transitionTime={1}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            // recorro las peliculas y creo el poster
            <>
              <div className={styles.posterImage}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    movie && movie.backdrop_path
                  }`}
                  alt="movie_carousel_img"
                  key={movie}
                ></img>
              </div>
              <div className={styles.posterImage_overlay}>
                <div className={styles.posterImage_title}>
                  {movie ? movie.original_title : ""}
                </div>
                <div className={styles.posterImage_runtime}>
                  {movie ? movie.release_date : ""}
                  <span className={styles.posterImage_rating}>
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className={styles.posterImage_description}>
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </div>
    </>
  );
}
