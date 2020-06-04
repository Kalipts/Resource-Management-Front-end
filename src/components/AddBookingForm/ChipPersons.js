import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

import { Name } from './Style/Item';
const CustomChip = styled(Chip)`
  margin: 0 5px;
`;

const ChipPersons = props => {
  const { edit, onShow, onDelete, persons = [] } = props;
  const handleDelete = person => {
    if (persons.length === 1) return;
    onDelete(person._id);
  };
  if (edit)
    return (
      <>
        <Avatar alt={persons[0].name} src={persons[0].avatar} />
        <Name onClick={onShow}>{persons[0].name}</Name>
      </>
    );
  return (
    <>
      {persons.map(person => (
        <CustomChip
          key={`chip${person._id}`}
          variant="outlined"
          avatar={<Avatar alt={person.name} src={person.avatar} />}
          label={person.name}
          onDelete={() => {
            handleDelete(person);
          }}
        />
      ))}
    </>
  );
};
ChipPersons.propTypes = {
  edit: PropTypes.bool,
  persons: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
  ]),
  onShow: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
};

export default ChipPersons;
