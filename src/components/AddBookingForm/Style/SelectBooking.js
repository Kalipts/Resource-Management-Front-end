import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 0 0 auto;
  height: 20px;
  width: 90px;
  color: ${props => (props.isActive ? props.theme.color.primary : "black")};
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.7)};
  margin-top: 17px;
  margin-right: 10px;
`;

const SelectBooking = props => {
  const { isActive } = props;
  return <Wrapper isActive={isActive}>{props.children}</Wrapper>;
};

export default SelectBooking;
