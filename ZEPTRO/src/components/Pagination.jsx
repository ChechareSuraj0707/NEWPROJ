import React from "react";

const getPages = (current, total) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  }
};

const Pagination = (page, pageHandler, dynamicPage) => {
  return (
    <div className="mt-10 space-x-4">
      <button
        disabled={page === 1}
        className={`${
          page === 1 ? "bg-red-400" : "bg-red-500"
        } text-white px-3 py-1 rounded-xl cursor-pointer`}
      >
        Prev
      </button>

      <button
        disabled={page === dynamicPage}
        className={`${
          page === dynamicPage ? "bg-red-400" : "bg-red-500"
        } text-white px-3 py-1 rounded-xl cursor-pointer`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
