import React from 'react';
import PropTypes from 'prop-types';

import './filter.scss';

function Filters({ value, handleChange, location }) {
  return (
    <div className="filter-container">
      <div className="input-filter">
        <input value={value} onChange={handleChange} name={location} />
      </div>
    </div>
  );
}

Filters.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
};
export default Filters;
