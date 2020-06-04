import React from 'react';
import styled from 'styled-components';
import pre from '../../../images/pre.png';

const Box = styled.div`
  box-sizing: border-box;
  height: 27px;
  width: 27px;
  border: 1px solid #f95b27;
  border-radius: 1px;
  background-color: ${props => (props.focus ? '#F95B27' : '#FFFFFF')};
  margin-right: 5px;
  cursor: pointer;
`;

const Pre = styled.img`
  display: block;
  height: 13px;
  width: 8px;
  margin-top: 5px;
  margin-right: 10px;
  padding-left: 10px;
`;

const Next = styled.img`
  display: block;
  height: 13px;
  width: 8px;
  margin-top: 5px;
  transform: scaleX(-1);
  margin-right: 10px;
  padding-right: 10px;
`;

const Number = styled.div`
  height: 18px;
  width: 9px;
  color: ${props => (props.focus ? '#FFFFFF' : '#F95B27')};
  font-family: Muli;
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.div`
  display: flex;
  margin-left: 50%;
  margin-top: 30px;
`;

export const PaginationResource = ({
  resourcesPerPage,
  totalResources,
  paginate,
  prep,
  nextp,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalResources / resourcesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <Box onClick={prep}>
        <Pre src={pre} />
      </Box>
      {pageNumbers.map(number => {
        if (number === currentPage)
          return (
            <Box key={number} focus onClick={() => paginate(number)}>
              <Number key={number} focus>
                {number}
              </Number>
            </Box>
          );
        return (
          <Box key={number} focus={false} onClick={() => paginate(number)}>
            <Number forcus={false}>{number}</Number>
          </Box>
        );
      })}
      <Box onClick={nextp}>
        <Next src={pre} />
      </Box>
    </Container>
  );
};
