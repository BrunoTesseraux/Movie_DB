import React, { useState, useEffect } from "react";

const YourComponent = () => {
  // Zustand, um die Daten und den Link für die nächste Abfrage zu speichern
  const [allMovies, setAllMovies] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    const fetchDataFromApi = (pageIndex) => {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?page=${pageIndex}&language=en`,
        options
      ).then((response) => response.json());
      setAllMovies((prevData) => [...prevData, ...data.results]);
      if (data.page !== data.total_pages) {
        setPageIndex(pageIndex + 1);
      } else {
        setPageIndex(null);
      }
    };

    fetchDataFromApi(pageIndex);
  }, [pageIndex]);

  return <></>;
};

export default YourComponent;
