import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Item, SmallAvatar } from './Style/DropDown';
import { ESC_KEY } from '../../constants/keyTypes';

const DropDown = props => {
  const { onCloseSelected, onSelectedItem, persons, list, status } = props;
  const [onClose, setOnClose] = useState(false);
  const ref = useRef(null);
  const toggleClose = () => {
    setOnClose(!onClose);
    onCloseSelected();
  };
  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);
    return () => {
      document.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, []);

  function handleKeyUp(e) {
    e.preventDefault();
    if (e.keyCode === ESC_KEY) {
      toggleClose();
    }
  }

  function handleOutsideClick(e) {
    const { current } = ref;
    if (current && !current.contains(e.target)) {
      toggleClose();
      document.removeEventListener('click', handleOutsideClick, false);
    }
  }

  if (status)
    return (
      <>
        {!onClose && (
          <Wrapper ref={ref}>
            <Item key="select-active" onClick={() => onSelectedItem(true)}>
              Active
            </Item>
            <Item key="select-archive" onClick={() => onSelectedItem(false)}>
              Archive
            </Item>
          </Wrapper>
        )}
      </>
    );
  if (persons)
    return (
      <>
        {!onClose && (
          <Wrapper ref={ref}>
            {persons.map(person => (
              <Item key={person._id} name={person._id} onClick={onSelectedItem}>
                <SmallAvatar src={person.avatar} alt={person.name} />
                {person.name}
              </Item>
            ))}
          </Wrapper>
        )}
      </>
    );
  return (
    <>
      {!onClose && (
        <Wrapper ref={ref}>
          {list.map(e => (
            <Item key={e._id} name={e.name} onClick={onSelectedItem}>
              {e.name}
            </Item>
          ))}
        </Wrapper>
      )}
    </>
  );
};

DropDown.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object),
  onSelectedItem: PropTypes.func.isRequired,
  onCloseSelected: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
  status: PropTypes.string,
};

export default DropDown;
