import React from "react";
import movies from "./movies.json";

function Movies() {
  const [allmovies, setAllMovies] = React.useState(movies);
  const [pageSize, setPageSize] = React.useState(5); // default page size
  const [currentPage, setCurrentPage] = React.useState(1);

  function sortByYear() {
    const sorted = [...allmovies].sort((a, b) => a.year - b.year);
    setAllMovies(sorted);
  }

  const totalPages = Math.ceil(allmovies.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const moviesToShow = allmovies.slice(startIndex, endIndex);

  function handlePageChange(newPage) {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  }

  function handlePageSizeChange(e) {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); // reset to first page when size changes
  }

  return (
    <div className="border border-2 border-danger p-2 m-3">
      <h1>Movies</h1>

      <button onClick={sortByYear}>Sort By Year</button>

      <div className="my-2">
        <label className="me-2">Movies per page: </label>
        <select value={pageSize} onChange={handlePageSizeChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

      <ul className="d-flex flex-wrap list-unstyled">
        {moviesToShow.map((movie, index) => (
          <li key={index} className="w-20 p-2">
            <b>
              {movie.title.slice(0, 20)} ({movie.year})
            </b>
            <br />
            <img src={movie.imageUrl} className="w-75" alt={movie.title} />
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-center mt-3">
        <button
          className="mx-1"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`mx-1 ${currentPage === i + 1 ? "btn btn-primary" : "btn btn-light"}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="mx-1"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Movies;