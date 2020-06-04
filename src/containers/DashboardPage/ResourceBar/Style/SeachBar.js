import styled from 'styled-components';
const SearchBar = styled.div`
  overflow: hidden;
  border: 1px solid #e1e7ed;
  top: 0;
  position: sticky;
  z-index: 10;
  background: #fff;
  & > input {
    height: 60px;
    font-size: 18px;
    border: none;
    outline: none;
    width: 100px;
    padding: 5px 20px;
  }
`;
export default SearchBar;
