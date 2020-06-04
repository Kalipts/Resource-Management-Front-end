import React from 'react';
import PropTypes from 'prop-types';

import SelectedItem from './SelectedItem';
import Item from './Item';
import icon from '../../images/icon-user.svg';
const ResourceItem = props => {
  const { onChangeItem, edit, persons, onDeletePerson } = props;
  const type = 'Resource';
  return (
    <SelectedItem title={type} src={icon}>
      <Item
        type={type}
        persons={persons}
        onChangeItem={onChangeItem}
        onDeletePerson={onDeletePerson}
        edit={edit}
      />
    </SelectedItem>
  );
};

ResourceItem.propTypes = {
  edit: PropTypes.bool,
  onChangeItem: PropTypes.func,
  persons: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
  ]),
  onDeletePerson: PropTypes.func,
};

export default ResourceItem;
