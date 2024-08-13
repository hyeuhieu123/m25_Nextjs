'use client';

import React, { useState } from 'react';
import styles from './Pagination.module.css';

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <ul className={styles.pagination}>
        <b>B8</b>
      <li className={styles.pageItem}>
        <button className={styles.pageButton} onClick={handlePrevClick} disabled={currentPage === 1}>
          Prev
        </button>
      </li>
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <li key={page} className={styles.pageItem}>
            <button
              className={`${styles.pageButton} ${currentPage === page ? styles.active : ''}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          </li>
        );
      })}
      <li className={styles.pageItem}>
        <button className={styles.pageButton} onClick={handleNextClick} disabled={currentPage === totalPages}>
          Next
        </button>
      </li>
    </ul>
  );
}
