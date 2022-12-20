import React from "react";

const FilterDropdown = ({ items }) => {
  const dropdownClickHandler = (item) => {
    items.dropdownClickHandler(item, items.filterClick);
  };
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-funnel-fill"></i>
      </button>
      <ul className="dropdown-menu">
        {items.dropdownValues.map((item, i) => (
          <li key={i} onClick={() => dropdownClickHandler(item)}>
            <a className="dropdown-item" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterDropdown;
