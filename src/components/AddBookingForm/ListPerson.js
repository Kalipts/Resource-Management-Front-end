import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

import { ListItem, CustomRadio, Item, SmallAvatar } from './Style/SelectedItem';
const ListPerson = props => {
  const { persons, onChange, edit, checkedPersons } = props;
  if (edit) {
    return (
      <ListItem>
        {persons &&
          persons.map(person => {
            const checked =
              person._id === checkedPersons[0]._id ? 'checked' : undefined;
            return (
              <li key={person._id}>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    checked={checked}
                    value={person._id}
                    onChange={onChange}
                  />
                  <Item>
                    <SmallAvatar src={person.avatar} alt="icon-person" />
                    {person.name}
                  </Item>
                  <CustomRadio id="radio" />
                </label>
              </li>
            );
          })}
      </ListItem>
    );
  }
  return (
    <ListItem>
      {persons &&
        persons.map(person => {
          const checked =
            checkedPersons.find(e => e._id === person._id) !== undefined;
          return (
            <li key={person._id}>
              <Checkbox
                color="primary"
                onChange={onChange}
                value={person._id || ''}
                name="checked"
                defaultChecked={checked}
              />
              <Item>
                <SmallAvatar src={person.avatar} alt="icon-person" />
                {person.name}
              </Item>
            </li>
          );
        })}
    </ListItem>
  );
};

ListPerson.propTypes = {
  edit: PropTypes.bool,
  onChange: PropTypes.func,
  persons: PropTypes.arrayOf(PropTypes.object),
  checkedPersons: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
  ]),
};

export default ListPerson;
