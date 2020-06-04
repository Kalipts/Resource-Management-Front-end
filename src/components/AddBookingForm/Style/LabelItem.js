import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import portfolio from '../../../images/portfolio-1.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  opacity: 0.6;
  font-size: 17px;
  img {
    margin-right: 7px;
  }
`;

const Label = props => (
  <Wrapper>
    <img alt="icon-item" src={portfolio} />
    {props.label}
  </Wrapper>
);

Label.propTypes = {
  label: PropTypes.string,
};
export default Label;
