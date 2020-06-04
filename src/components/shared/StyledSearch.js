import styled from 'styled-components';

const StyledSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  line-height: 18px;
  border-bottom: 2px solid #ced3d7;
  width: ${props => (props.width ? props.width : '100%')};
  input {
    width: 90%;
    box-sizing: border-box;
    border: none;
    outline: none;
    ::placeholder {
      opacity: 1;
    }
  }
  padding-bottom: 15px;
`;

export default StyledSearch;
