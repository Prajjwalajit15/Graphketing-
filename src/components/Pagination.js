import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={number === currentPage ? 'active' : ''}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
