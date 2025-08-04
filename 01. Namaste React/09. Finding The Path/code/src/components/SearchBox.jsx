import { useState } from "react";

const SearchBox = ({searchtext, setsearchText}) => {

  const onChangeInput = (e) => {
    setsearchText(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="search"
        value={searchtext}
        onChange={(e) => onChangeInput(e)}
      />
    </div>
  );
};

export default SearchBox;
