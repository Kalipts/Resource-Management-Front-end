import styled from 'styled-components';

const StyledHeader = styled.ul`
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 65px;
  background-color: #f95b27;
  &:first-child {
  }
  li {
    float: left;
    font-size: 19px;
    font-weight: bold;
    a {
      display: block;
      color: white;
      text-align: center;
      padding: 20px 20px;
      text-decoration: none;
    }
    &:first-child {
      img {
        margin-left: 5px;
        margin-top: -5px;
      }
    }
    &:last-child {
      float: right;
      margin-top: 0;
      img {
        margin-right: 15px;
        margin-top: -5px;
      }
    }
  }
`;

export default StyledHeader;
