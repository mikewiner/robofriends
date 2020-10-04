import React from "react";

const SearchBox = ({searchChange}) => {
  return (
    <div className="p-2">
      <input
        className="p-1 rounded bg-blue-100 border-b border-gray-600 shadow-inner"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
