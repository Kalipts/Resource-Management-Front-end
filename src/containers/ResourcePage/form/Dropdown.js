import React, { useEffect, useState } from 'react';
import {
  Container,
  SelectList,
  SelectTitle,
  OptionCustom,
  SelectInput,
  SelectItem,
  Title,
} from '../Style/DropDownStyle';
import { showPermission } from '../Kit';
const SelectCustom = props => {
  // eslint-disable-next-line react/prop-types
  const { role, setRole, haveId, idItem } = props;
  // eslint-disable-next-line no-unused-vars,react/prop-types
  const { data, titleTag } = props;
  const [defaultTitle, setDefaultTitle] = useState(role);
  const [idTag, setIdTag] = useState(idItem);
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line react/prop-types

  useEffect(() => {
    setDefaultTitle(role);
    setIdTag(idItem);
  }, [role]);

  useEffect(() => {
    if (haveId) {
      setRole(idTag);
    } else {
      setRole(defaultTitle.toLowerCase());
    }
  });
  const handleSelect = (title, index) => {
    if (!isOpen) {
      document.addEventListener('click', handleOutsideClick, false);
    } else {
      document.removeEventListener('click', handleOutsideClick, false);
    }

    setIsOpen(!isOpen);
    setDefaultTitle(title[index].name);
    setIdTag(title[index]._id);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = () => {
    handleSelect();
  };

  return (
    <Container>
      <Title>{titleTag}</Title>
      <OptionCustom>
        <SelectInput onClick={handleOpen}>
          <span>{defaultTitle}</span>
        </SelectInput>
        {isOpen ? (
          <SelectList>
            {data.map((item, index) => (
              <SelectItem
                key={index}
                onClick={() => handleSelect(data, index)}
              >
                <SelectTitle className="select-title">{item.name}</SelectTitle>
              </SelectItem>
            ))}
          </SelectList>
        ) : (
          ''
        )}
      </OptionCustom>
    </Container>
  );
};

export default SelectCustom;
