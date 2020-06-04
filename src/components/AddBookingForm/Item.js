/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';

import SelecteItemModal from './SelectItemModal';
import { Body, Color, Name } from './Style/Item';
import ChipPersons from './ChipPersons';
import ThreeDots from '../shared/ThreeDots';

const Item = props => {
  const { persons, project, type, onChangeItem, onDeletePerson, edit } = props;
  const [onShow, setOnShow] = useState(false);
  const addProject = project && project.name === '';

  const handleOnShow = () => {
    setOnShow(!onShow);
  };

  const Icon = () => {
    if (addProject) return <AddIcon color="secondary" />;
    return <Color color={project.color} />;
  };

  return (
    <Body>
      {project ? (
        <>
          <Icon />
          <Name onClick={handleOnShow}>
            {!addProject ? props.children : 'Add Project'}
          </Name>
        </>
      ) : (
        <>
          <ChipPersons
            edit={edit}
            onDelete={onDeletePerson}
            persons={persons}
            onShow={handleOnShow}
          />
          {!edit && (
            <div id="show-item" onClick={handleOnShow}>
              <ThreeDots />
            </div>
          )}
        </>
      )}
      {onShow && (
        <SelecteItemModal
          edit={edit}
          onShow={handleOnShow}
          onChangeItem={onChangeItem}
          type={type}
          src={persons || project}
        />
      )}
    </Body>
  );
};

Item.propTypes = {
  edit: PropTypes.bool,
  persons: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
  ]),
  project: PropTypes.objectOf(PropTypes.any),
  type: PropTypes.string,
  onChangeItem: PropTypes.func.isRequired,
  onDeletePerson: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
export default Item;
