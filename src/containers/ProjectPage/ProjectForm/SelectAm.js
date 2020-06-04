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

const SelectAm = React.memo(function SelectAm(props) {
  const { am, onOpenAm, isOpen, persons, onSelectAm, err } = props;

  const handleChooseAm = event => {
    const _id = event.target.getAttribute('name');
    const selectedPerson = persons.find(person => person._id === _id);
    onSelectAm(selectedPerson);
  };

  return (
    <WrapperItem>
      <div>Am</div>
      <SelectItem onClick={onOpenAm}>
        {!am && err && <Alert>{err}</Alert>}
        {am ? (
          <Person>
            <Avatar src={am.avatar} alt="Am" />
            <Name>{am.name}</Name>
          </Person>
        ) : (
          !err && <span> -- Choose People -- </span>
        )}
        <img alt="Choose Am" src={icon} />
        {isOpen && (
          <DropDown
            persons={persons}
            onSelectedItem={handleChooseAm}
            onCloseSelected={onOpenAm}
          />
        )}
      </SelectItem>
    </WrapperItem>
  );
});

SelectAm.propTypes = {
  am: PropTypes.objectOf(PropTypes.string),
  persons: PropTypes.arrayOf(PropTypes.object),
  onOpenAm: PropTypes.func,
  onSelectAm: PropTypes.func,
  isOpen: PropTypes.bool,
  err: PropTypes.string,
};

export default SelectAm;
