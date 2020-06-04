import styled from 'styled-components';

const Color = styled.div`
  height: 70px;
  width: 5px;
  background-color: ${props => props.color || 'none'};
`;

export default Color;
