import React from 'react';
import PropTypes from 'prop-types';

import SelectedItem from './SelectedItem';
import Item from './Item';
import AlertProject from './Style/Alert';
import icon from '../../images/bag.svg';
const ProjectItem = props => {
  const { project = {}, onChangeItem = () => {}, errors = '' } = props;
  return (
    <SelectedItem title="Project" src={icon}>
      <Item type="Project" onChangeItem={onChangeItem} project={project}>
        {props.children}
      </Item>
      {errors && <AlertProject>! {errors}</AlertProject>}
    </SelectedItem>
  );
};

ProjectItem.propTypes = {
  errors: PropTypes.string,
  project: PropTypes.objectOf(PropTypes.any),
  onChangeItem: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default ProjectItem;
