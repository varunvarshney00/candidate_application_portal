import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieComponent from "./MovieComponent";
import SearchBar from "./SearchBar"; // Import SearchBar component

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    role: null,
    numberOfEmployees: "",
    experience: "",
    remote: "",
    minSalary: "",
    search: "",
  });

  const getCardData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestBody = {
        limit: 10,
        offset: (page - 1) * 10,
      };
  
      // Include filters if role is selected
      if (filters.role) {
        requestBody.filters = { ...filters, role: filters.role.toLowerCase() };
      }

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(requestBody), // Send the filters in the request body
    };

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      if (data && data.jdList) {
        // If role filter is applied, filter the cards based on role
        let filteredCards = data.jdList;
        if (requestBody.filters && requestBody.filters.role) {
          filteredCards = data.jdList.filter(
            (card) => card.jobRole.toLowerCase() === requestBody.filters.role.toLowerCase()
          );
        }
        // Concatenate new cards with existing ones
        setCard((prev) => [...prev, ...filteredCards]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCardData();
  }, [page, filters]);

  const handleInfiniteScroll = () => {
    try {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (window.innerHeight + scrollTop + 1 >= scrollHeight) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
    // Reset page to 1 when filters change
    setPage(1);
    // Reset card state to clear previous cards
    setCard([]);
  };

  return (
    <>
      <SearchBar onFilterChange={handleFilterChange} />{" "}
      {/* Pass filter change handler */}
      <MovieComponent movieInfo={card} />
      {loading && <Loading />}
    </>
  );
};

export default Home;
