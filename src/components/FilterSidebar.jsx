import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle the sidebar */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </button>

      {/* Sidebar */}
      <aside className={`filters ${isOpen ? 'open' : ''}`}>
        <h3>Filter By</h3>
        
        {/* Price Filter */}
        <div className="filter-group">
          <label>Price</label>
          <select>
            <option value="">All</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
        </div>
        
        {/* Cuisine Filter */}
        <div className="filter-group">
          <label>Cuisine</label>
          <select>
            <option value="">All</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div className="filter-group">
          <label>Rating</label>
          <select>
            <option value="">All</option>
            <option value="4.0">4.0+</option>
            <option value="5.0">5.0</option>
          </select>
        </div>

        <h3>Sort By</h3>
        
        {/* Sort by Price */}
        <div className="filter-group">
          <label>Price</label>
          <select>
            <option value="">All</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
        </div>

        {/* Sort by Rating */}
        <div className="filter-group">
          <label>Rating</label>
          <select>
            <option value="4.0">4.0+</option>
            <option value="5.0">5.0</option>
          </select>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
