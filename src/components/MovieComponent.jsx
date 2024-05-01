// import React from "react";
import MovieCard from "./MovieCard";

const MovieComponent = ({ movieInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          {movieInfo.map((curVal, id) => {
            return <MovieCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
