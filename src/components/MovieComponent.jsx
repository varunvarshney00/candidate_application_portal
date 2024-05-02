import React from "react";
import MovieCard from "./MovieCard";

const MovieComponent = ({ movieInfo }) => {
  // Filter out null or undefined values from movieInfo
  const validMovieInfo = movieInfo.filter(curVal => curVal !== null && curVal !== undefined);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          {validMovieInfo.map((curVal, id) => {
            return <MovieCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
