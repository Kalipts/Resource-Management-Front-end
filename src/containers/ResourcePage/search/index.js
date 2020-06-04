import React, {useState} from "react";
import styled from "styled-components";
import searchIcon from '../../../images/search .png';
const SearchContainer = styled.div`
  height: 27px;
  width: 160px;
  margin-left: auto;
  display: flex;
  border-bottom: 1px solid #CED3D7;
`;

 const SearchInput = styled.input`
  width: 140px;
  height: 25px;
  outline: 0;
  border-width: 0;
  border-color: #CED3D7;
`;
 const SearchImg = styled.img`
  height: 18px;
  width: 18px;
`;






export const Search = (props) => {

  const [resourceFilter, setResourceFilter] = useState('');
  const handleChange = (event) => {
        setResourceFilter(event.target.value);
        props.setFilter(event.target.value);
  };

  return (
      <SearchContainer>
          <SearchInput type='text' value={resourceFilter} onChange={handleChange}/>
          <SearchImg src={searchIcon}/>
      </SearchContainer>
  );
};
