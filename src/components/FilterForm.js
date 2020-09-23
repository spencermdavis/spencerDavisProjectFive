import React from "react";

const FilterForm = (props) => {
  return (
    <select
      name="mana color"
      id="mana color"
      autoComplete="off"
      onChange={props.handleFilter}
      aria-label="select mana color to filter collection"
      className="filterList"
    >
      <option value="0">Select color to filter collection</option>
      <option value="w">White</option>
      <option value="u">Blue</option>
      <option value="b">Black</option>
      <option value="r">Red</option>
      <option value="g">Green</option>
    </select>
  );
};

export default FilterForm;
