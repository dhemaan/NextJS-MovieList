import React from "react";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";


const Movie = async () => {
 
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPIHOST,
      "X-RapidAPI-Host": process.env.RAPIDAPIKEY,
    },
  };

  let titles = []

  const res = await fetch(url, options).then((res) => res.json()).then((data) => titles = data.titles);

  //const data = await res.json();
  const main_data = titles;

  return (
    <>
    
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1 data-testid="heading">Series & Movie</h1>
          
          <div className={styles.card_section}>
            {main_data.length > 0 && main_data.map((curElem, index) => {
              return <MovieCard key={index} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
