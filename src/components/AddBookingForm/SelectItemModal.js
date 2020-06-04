import React, { useState, useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import { ESC_KEY } from '../../constants/keyTypes';
import LabelItem from './Style/LabelItem';
import Search from '../shared/Search';
import ListPerson from './ListPerson';
import ListProject from './ListProject';
import { Wrapper, Padding } from './Style/SelectedItem';
import { CalendarContext } from '../../context/Calendar';
import { ProjectContext } from '../../context/Project';
import { ResourceContext } from '../../context/Resource';

const SelectItemModal = props => {
  const { type, onChangeItem, onShow, edit, src } = props;
  const [onClose, setOnClose] = useState(false);
  const [item, setItem] = useState([]);
  const isResource = type === 'Resource';
  const modal = useRef(null);
  const { projectsActive } = useContext(ProjectContext);
  const { persons } = useContext(ResourceContext);
  const { setDisabled } = useContext(CalendarContext);
  const toggleClose = () => {
    onShow();
    setOnClose(!onClose);
  };

  const onFilterItem = items => {
    setItem(items);
  };

  useEffect(() => {
    setDisabled(true);
    document.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);
    if (isResource) setItem(persons);
    else setItem(projectsActive);
    return () => {
      setDisabled(false);
      document.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, []);

  function handleKeyUp(e) {
    const keys = {};
    keys[`${ESC_KEY}`] = () => {
      e.preventDefault();
      toggleClose();
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  function handleOutsideClick(e) {
    const { current } = modal;
    if (current && !current.contains(e.target)) {
      toggleClose();
      document.removeEventListener('click', handleOutsideClick, false);
    }
  }

  return (
    <>
      {!onClose && (
        <Wrapper ref={modal}>
          <Padding>
            <LabelItem label={type} />
            <Search
              onFilterItem={onFilterItem}
              items={isResource ? persons : projectsActive}
            />
            {isResource ? (
              <ListPerson
                persons={item}
                onChange={onChangeItem}
                edit={edit}
                checkedPersons={src}
              />
            ) : (
              <ListProject
                projects={item}
                onChange={onChangeItem}
                checkedProject={src}
              />
            )}
          </Padding>
        </Wrapper>
      )}
    </>
  );
};
SelectItemModal.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ]),
  edit: PropTypes.bool,
  type: PropTypes.string.isRequired,
  onChangeItem: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default SelectItemModal;
