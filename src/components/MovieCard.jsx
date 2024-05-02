import React from "react";
import { Badge } from "@/components/ui/badge"; // Import Badge component
import { CloudLightningIcon } from "lucide-react"; // Import CloudLightningIcon from lucide-react

// MovieCard component to display information about a movie
const MovieCard = ({ myData }) => {
  // Destructuring movie data
  const {
    jdLink,
    jdUid,
    jobDetailsFromCompany,
    jobRole,
    location,
    maxExp,
    maxJdSalary,
    minExp,
    minJdSalary,
    salaryCurrencyCode,
  } = myData;

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-14 mb-4 mt-10 relative">
      {/* Container for movie card */}
      <div className="bg-white border border-gray-200 rounded-3xl shadow-md flex flex-col h-full transform transition-transform duration-300 hover:scale-105 transition-timing-function ease-in-out">
        {/* Main content of movie card */}
        <div className="p-4 flex-grow">
          {/* Badge indicating when the movie was posted */}
          <div className="flex items-center justify-between mb-4">
            <Badge variant="variant">Posted 12 days ago</Badge>
          </div>
          {/* Movie details */}
          <div className="flex items-center mb-4">
            {/* Icon representing company */}
            <CloudLightningIcon className="h-10 w-10 text-orange-500 mr-2" />
            <div>
              {/* Company name, job role, and location */}
              <p className="text-gray-500 text-sm">Company Name</p>
              <h3 className="font-semibold">
                {/* Capitalize the first letter of job role */}
                {jobRole && jobRole.charAt(0).toUpperCase() + jobRole.slice(1)}
              </h3>
              <p className="text-sm text-gray-500">
                {/* Capitalize the first letter of location */}
                {location &&
                  location.charAt(0).toUpperCase() + location.slice(1)}
              </p>
            </div>
          </div>
          {/* Estimated salary */}
          <div className="flex items-center justify-start mb-4">
            <p className="text-sm font-medium text-green-600">
              Estimated Salary: ₹{minJdSalary} - {maxJdSalary} LPA
            </p>
            {/* Icon indicating salary */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a1 1 0 01-.74-.32l-4.5-4.75a1 1 0 111.48-1.32L10 15.18l7.22-7.57a1 1 0 111.49 1.32l-8 8.5a1 1 0 01-.74.34z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* About company */}
          <div className="mb-4 relative">
            <h4>About Company:</h4>
            <h4 className="font-bold mb-2">About us</h4>
            {/* Description of the company */}
            <p className="text-sm">{jobDetailsFromCompany}</p>
            {/* Overlay for fade effect */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent dark:from-gray-950 dark:to-transparent" />
          </div>
          {/* Button to view job details */}
          <div className="pl-4 pr-4 pb-4">
            <div className="flex items-center justify-center">
              <a href={jdLink} className="text-blue-600">
                View job
              </a>
            </div>
          </div>
          {/* Minimum experience */}
          <div>
            <p className="text-sm">Minimum Experience</p>
            <p className="font-semibold">{minExp}</p>
          </div>
        </div>
        {/* Action buttons */}
        <div className="pl-4 pr-4 pb-4">
          {/* Button for easy apply */}
          <button className="w-full bg-green-500 text-white  py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center">
            <img
              src="https://img.icons8.com/fluency/48/flash-on.png"
              alt="Flash On"
              className="mr-2 w-4 h-4"
            />
            Easy Apply
          </button>
          {/* Button to unlock referral asks */}
          <button className="w-full bg-blue-500 text-white mt-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Unlock referral asks
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard; // Export MovieCard component
