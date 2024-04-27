
import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import FontAwesome search icon

function CountrySelector({ countries, onChange }) {
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(false);  // New state to control dropdown visibility
  const ref = useRef(null);  // Ref for the wrapper div to handle clicks outside

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  // Update to handle selection
  const handleSelection = (country) => {
    setSearch(country.name); // Set search input to the country name instead of clearing it
    onChange(country.code);  // Call the onChange function with the country code
    setShowResults(false);    // Hide the dropdown
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="country-selector">
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search Country"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          className="search-input"
        />
      </div>
      {showResults && (
        <ul className="results">
          {filteredCountries.length > 0 ? filteredCountries.map(country => (
            <li key={country.code} onClick={() => handleSelection(country)}>
              {country.name}
            </li>
          )) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default CountrySelector;
