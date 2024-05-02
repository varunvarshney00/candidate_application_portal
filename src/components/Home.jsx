import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieComponent from "./MovieComponent";
import SearchBar from "./SearchBar"; // Import SearchBar component

// Home component to display movies with filtering options
const Home = () => {
  // State variables
  const [card, setCard] = useState([]); // State for movie data
  const [page, setPage] = useState(1); // State for current page
  const [loading, setLoading] = useState(true); // State for loading status
  const [filters, setFilters] = useState({ // State for filter options
    role: null,
    numberOfEmployees: "",
    experience: null,
    remote: null,
    minSalary: "",
    search: "",
  });

  // Function to fetch movie data based on filters
  const getCardData = async () => {
    // Define request headers
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Construct request body with pagination and filters
    let requestBody = {
      limit: 10,
      offset: (page - 1) * 10,
      filters: {},
    };

    // Include filters if role is selected
    if (filters.role) {
      requestBody.filters.role = filters.role.toLowerCase();
    }

    // Include experience filter if selected
    if (filters.experience) {
      requestBody.filters.minExp = filters.experience;
    }

    // Include remote filter if selected
    if (filters.remote) {
      if (filters.remote.toLowerCase() === "remote") {
        requestBody.filters.location = "remote";
      } else {
        requestBody.filters.location_ne = "remote";
      }
    }

    // Include minimum base pay salary filter if selected
    if (filters.minSalary) {
      requestBody.filters.minJdSalary_gt = 0; // Exclude null values
      requestBody.filters.maxJdSalary_gt = 0; // Exclude null values
      requestBody.filters.minJdSalary_lte = parseInt(filters.minSalary);
      requestBody.filters.maxJdSalary_gte = parseInt(filters.minSalary);
    }

    // Include search filter if search keyword is provided
    if (filters.search) {
      requestBody.filters.$or = [
        { jobDetailsFromCompany: { $regex: filters.search, $options: "i" } },
        { jobRole: { $regex: filters.search, $options: "i" } },
        { location: { $regex: filters.search, $options: "i" } },
        { maxExp: { $regex: filters.search, $options: "i" } },
        { minExp: { $regex: filters.search, $options: "i" } },
        { maxJdSalary: { $regex: filters.search, $options: "i" } },
        { minJdSalary: { $regex: filters.search, $options: "i" } },
        { salaryCurrencyCode: { $regex: filters.search, $options: "i" } },
      ];
    }

    // Define request options
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(requestBody), // Send the filters in the request body
    };

    try {
      // Fetch movie data from API
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      if (data && data.jdList) {
        // If filters are applied, filter the cards based on the selected filters
        let filteredCards = data.jdList;
        if (
          requestBody.filters.role ||
          requestBody.filters.minExp ||
          requestBody.filters.location ||
          requestBody.filters.location_ne ||
          requestBody.filters.minJdSalary_gt ||
          requestBody.filters.maxJdSalary_gt ||
          requestBody.filters.minJdSalary_lte ||
          requestBody.filters.maxJdSalary_gte
        ) {
          filteredCards = data.jdList.filter((card) => {
            const roleMatch =
              !requestBody.filters.role ||
              card.jobRole.toLowerCase() === requestBody.filters.role;
            const experienceMatch =
              !requestBody.filters.minExp ||
              parseInt(card.minExp) <=
                parseInt(requestBody.filters.minExp);
            const locationMatch =
              !requestBody.filters.location ||
              card.location.toLowerCase() === requestBody.filters.location;
            const notRemoteMatch =
              !requestBody.filters.location_ne ||
              card.location.toLowerCase() !== "remote";
            const minSalaryMatch =
              !requestBody.filters.minJdSalary_lte ||
              !card.minJdSalary ||
              parseInt(card.minJdSalary) <=
                parseInt(requestBody.filters.minJdSalary_lte);
            const maxSalaryMatch =
              !requestBody.filters.maxJdSalary_gte ||
              !card.maxJdSalary ||
              parseInt(card.maxJdSalary) >=
                parseInt(requestBody.filters.maxJdSalary_gte);
            return (
              roleMatch &&
              experienceMatch &&
              locationMatch &&
              notRemoteMatch &&
              minSalaryMatch &&
              maxSalaryMatch
            );
          });
        }
        // Concatenate new cards with existing ones
        setCard((prev) => [...prev, ...filteredCards]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  // Fetch movie data when page or filters change
  useEffect(() => {
    getCardData();
  }, [page, filters]);

  // Function to handle infinite scrolling
  const handleInfiniteScroll = () => {
    try {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      // If scrolled to the bottom of the page, load more data
      if (window.innerHeight + scrollTop + 1 >= scrollHeight) {
        setLoading(true); // Set loading to true while fetching data
        setPage((prev) => prev + 1); // Increment page number
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Add event listener for infinite scrolling when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    // Remove event listener when component unmounts
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  // Function to handle filter changes
  const handleFilterChange = (filterName, value) => {
    // Update filters state with new value
    setFilters({ ...filters, [filterName]: value });
    // Reset page to 1 when filters change
    setPage(1);
    // Clear previous cards when filters change
    setCard([]);
  };

  // Render SearchBar, MovieComponent, and Loading components
  return (
    <>
      <SearchBar onFilterChange={handleFilterChange} />{" "}
      {/* Pass filter change handler to SearchBar */}
      <MovieComponent movieInfo={card} /> {/* Pass movie data to MovieComponent */}
      {loading && <Loading />} {/* Display loading indicator if data is loading */}
    </>
  );
};

export default Home; // Export Home component
