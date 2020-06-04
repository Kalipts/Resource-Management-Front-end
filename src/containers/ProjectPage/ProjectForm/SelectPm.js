import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

import {
  WrapperItem,
  SelectItem,
  Person,
  Name,
  Alert,
} from '../Style/ProjectForm';
import DropDown from '../DropDown';
import icon from '../../../images/drop-down.png';

const SelectPm = React.memo(function SelectPm(props) {
  const { pm, onOpenPm, isOpen, persons, onSelectPm = () => {}, err } = props;

  const handleChoosePm = event => {
    const _id = event.target.getAttribute('name');
    const selectedPerson = persons.find(person => person._id === _id);
    onSelectPm(selectedPerson);
  };

  return (
    <WrapperItem>
      <div>PM</div>
      <SelectItem onClick={onOpenPm}>
        {!pm && err && <Alert>{err}</Alert>}
        {pm ? (
          <Person>
            <Avatar src={pm.avatar} alt="PM" />
            <Name>{pm.name}</Name>
          </Person>
        ) : (
          !err && <span> -- Choose People -- </span>
        )}
        <img alt="Choose PM" src={icon} />
        {isOpen && (
          <DropDown
            persons={persons}
            onSelectedItem={handleChoosePm}
            onCloseSelected={onOpenPm}
          />
        )}
      </SelectItem>
    </WrapperItem>
  );
});

SelectPm.propTypes = {
  pm: PropTypes.objectOf(PropTypes.string),
  persons: PropTypes.arrayOf(PropTypes.object),
  onOpenPm: PropTypes.func,
  onSelectPm: PropTypes.func,
  isOpen: PropTypes.bool,
  err: PropTypes.string,
};

export default SelectPm;
