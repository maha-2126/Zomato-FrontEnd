import React, { useState, useEffect } from 'react';

function Pagination(props) {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(props.totalPages);

  useEffect(() => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    setPages(pageNumbers);
  }, [totalPages]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    props.onChange(pageNumber);
  };

  return (
    <div className="col-12 pagination d-flex justify-content-center">
      <ul className="pages">
        {currentPage > 1 && (
          <li onClick={() => handlePageChange(currentPage - 1)}>
            {"<"}
          </li>
        )}
        {pages.map((pageNumber) => (
          <li
            key={pageNumber}
            className={currentPage === pageNumber ? "active" : ""}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
        {currentPage < totalPages && (
          <li onClick={() => handlePageChange(currentPage + 1)}>
            {">"}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;