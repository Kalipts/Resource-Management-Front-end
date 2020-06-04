import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  min-height: 36px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #dedede;
  border-radius: 3px;
  background-color: #ffffff;
  padding: 5px 5px;
  margin-bottom: 5px;
  /* :hover {
    border: 1px solid ${props => props.theme.color.primary};
  } */
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;

const ProjectSpan = styled.span`
  height: 15px;
  width: 45px;
  opacity: 0.6;
  color: #000000;
  margin-left: 10px;
`;

const SelectedItem = props => {
  const [isShowItem, setIsShowItem] = useState(true);

  const toggleShowItem = () => {
    setIsShowItem(!isShowItem);
  };

  return (
    <Wrapper>
      <Title onClick={toggleShowItem}>
        <img alt="project-icon" src={props.src} />
        <ProjectSpan>{props.title}</ProjectSpan>
      </Title>
      {isShowItem && props.children}
    </Wrapper>
  );
};

SelectedItem.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  children: PropTypes.node,
};

export default SelectedItem;
