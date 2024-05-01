// import React from "react";

const MovieCard = ({ myData }) => {
  const { title, body, id } = myData;
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-14 mb-4 mt-10">
      <div className="bg-white border border-gray-200 rounded-3xl shadow-md flex flex-col h-full transform transition-transform duration-300 hover:scale-105 transition-timing-function ease-in-out">
        {/* Added transition-timing-function */}
        <div className="p-4 flex-grow">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-500 text-sm">ID: {id}</p>
          </div>
          <div className="flex items-center mb-4">
            <div>
              <h3 className="font-semibold">{title.substr(0, 10)}</h3>
              <p className="text-sm text-gray-500">
                Description: {body.substr(0, 20)}
              </p>
              <p>Location</p>
            </div>
          </div>
          <div className="flex items-center justify-start mb-4">
            <p className="font-semibold">Estimated Salary: ₹18 - 35 LPA</p>
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
          <div className="mb-4">
            <h4>About Company:</h4>
            <h4 className="font-bold mb-2">About us</h4>
            <p className="text-sm">
              Flex Wash is an operating system for the car wash industry. Our
              solutions help owners manage their operations and grow revenue. Our
              POS has a built-in CRM, allowing car washes to take advantage of
              their customer transaction history in order to funnel customers
              into subscriptions and higher margin wash packages..
            </p>
            <div className="flex items-center justify-center mt-2">
              <a href="#" className="text-blue-600">
                View job
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm">Minimum Experience</p>
            <p className="font-semibold">{id} years</p>
          </div>
        </div>
        <div className="pl-4 pr-4 pb-4">
          <button className="w-full bg-green-500 text-white  py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center">
            <img
              src="https://img.icons8.com/fluency/48/flash-on.png"
              alt="Flash On"
              className="mr-2 w-4 h-4"
            />
            Easy Apply
          </button>
          <button className="w-full bg-blue-500 text-white mt-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Unlock referral asks
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
