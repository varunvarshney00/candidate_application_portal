import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieComponent from "./MovieComponent";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "limit": 10,
      "offset": (page - 1) * 10
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      const data = await response.json();
      console.log(data);
      if (data && data.jdList) {
        setCard((prev) => [...prev, ...data.jdList]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handleInfiniteScroll = () => {
    try {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
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

  return (
    <>
      <MovieComponent movieInfo={card} />
      {loading && <Loading />}
    </>
  );
};

export default Home;
