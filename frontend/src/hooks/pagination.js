
import { useState } from "react";

export const usePagination = (items = [] , itemsPerPage = 10 ) => {
  const [currentPage , setCurrentPage] = useState(1);

  // page perpost 
  const totalPages = Math.ceil(items.length / itemsPerPage + 1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem,indexOfLastItem)


  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  }

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  }

  return{
    currentPage,
    currentItems,
    totalPages,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
  }


}