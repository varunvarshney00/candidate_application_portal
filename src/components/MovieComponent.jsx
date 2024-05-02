import React from "react";
import MovieCard from "./MovieCard";

const MovieComponent = ({ movieInfo }) => {
  // Filter out null or undefined values from movieInfo
  const validMovieInfo = movieInfo.filter((curVal) => curVal !== null && curVal !== undefined);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          {validMovieInfo.map((curVal, id) => {
            // Check if any required field in curVal is null or undefined
            if (
              curVal.jobDetailsFromCompany === null ||
              curVal.jobRole === null ||
              curVal.location === null ||
              curVal.maxExp === null ||
              curVal.minExp === null ||
              curVal.maxJdSalary === null ||
              curVal.minJdSalary === null ||
              curVal.salaryCurrencyCode === null
            ) {
              return null; // Skip rendering this job card if any required field is null
            }
            return <MovieCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
