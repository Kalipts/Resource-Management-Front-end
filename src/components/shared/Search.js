import React from 'react';
import PropTypes from 'prop-types';

import StyledSearch from './StyledSearch';
import portfolio from '../../images/search.ico';

const Search = props => {
  const { width, items, onFilterItem } = props;

  const handleInputChange = event => {
    const querry = event.target.value;
    const filterItem = items.filter(
      item => item.name.toLowerCase().indexOf(querry) !== -1,
    );
    onFilterItem(filterItem);
  };
  return (
    <StyledSearch width={width}>
      <input type="text" placeholder="Search" onChange={handleInputChange} />
      <img alt="search-icon" src={portfolio} />
    </StyledSearch>
  );
};

Search.propTypes = {
  width: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  onFilterItem: PropTypes.func,
};

export default Search;
