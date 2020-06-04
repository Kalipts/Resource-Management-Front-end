/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, MenuItem, DropDownIcon } from './Style/Menu';
import { listAm, listPm, nameOfPerson } from '../../utils/Project';
import DropDown from './DropDown';
import Search from '../../components/shared/Search';
import icon from '../../images/drop-down.png';

const Menu = ({ projects, onFilter }) => {
  const [item, setItem] = useState(projects);
  const [isOpenPm, setIsOpenPm] = useState(false);
  const [isOpenAm, setIsOpenAm] = useState(false);
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [selectedPm, setSelectedPm] = useState();
  const [selectedAm, setSelectedAm] = useState();
  const [selectedStatus, setSelectedStatus] = useState();

  const onFilterItem = items => {
    onFilter(items);
    setItem(items);
  };
  const handleOpenPm = () => {
    if (selectedPm) {
      setIsOpenPm(false);
      setSelectedPm(undefined);
      handleUndoFilter(false, selectedAm, selectedStatus);
    } else setIsOpenPm(!isOpenPm);
  };
  const handleOpenAm = () => {
    if (selectedAm) {
      setIsOpenAm(false);
      setSelectedAm(undefined);
      handleUndoFilter(selectedPm, false, selectedStatus);
    } else setIsOpenAm(!isOpenAm);
  };
  const handleOpenStatus = () => {
    if (selectedStatus) {
      setIsOpenStatus(false);
      setSelectedStatus(undefined);
      handleUndoFilter(selectedPm, selectedAm, false);
    } else setIsOpenStatus(!isOpenStatus);
  };

  const handleSelectedPm = event => {
    const selected = event.target.getAttribute('name');
    const filterItem = (item.length === 0 ? projects : item).filter(
      project => nameOfPerson(project.pm) === selected,
    );
    setItem(filterItem);
    onFilter(filterItem);
    setSelectedPm(selected);
  };
  const handleSelectedAm = event => {
    const selected = event.target.getAttribute('name');
    const filterItem = (item.length === 0 ? projects : item).filter(
      project => nameOfPerson(project.am) === selected,
    );
    setItem(filterItem);
    onFilter(filterItem);
    setSelectedAm(selected);
  };

  const handleSelectedStatus = status => {
    const filterItem = (item.length === 0 ? projects : item).filter(
      project => project.active === status,
    );
    if (status) setSelectedStatus('Active');
    else setSelectedStatus('Archive');
    setItem(filterItem);
    onFilter(filterItem);
  };

  const handleUndoFilter = (pm, am, status) => {
    let filterItem = projects;
    if (pm)
      filterItem = filterItem.filter(
        project => nameOfPerson(project.pm) === selectedPm,
      );
    if (am)
      filterItem = filterItem.filter(
        project => nameOfPerson(project.am) === selectedPm,
      );
    if (status)
      filterItem = filterItem.filter(
        project => project.active === (selectedStatus === 'Active'),
      );
    onFilter(filterItem);
    setItem(filterItem);
  };

  return (
    <Wrapper>
      <Search items={projects} onFilterItem={onFilterItem} width="144px" />
      <MenuItem>
        {selectedPm || 'Selected PM'}
        <DropDownIcon
          alt="Select PM"
          src={icon}
          select={selectedPm}
          onClick={handleOpenPm}
        />
        {isOpenPm && !selectedPm && (
          <DropDown
            list={item.length !== 0 ? listPm(item) : listPm(projects)}
            onSelectedItem={handleSelectedPm}
            onCloseSelected={handleOpenPm}
          ></DropDown>
        )}
      </MenuItem>
      <MenuItem>
        {selectedAm || 'Selected AM'}
        <DropDownIcon
          alt="Select AM"
          src={icon}
          select={selectedAm}
          onClick={handleOpenAm}
        />
        {isOpenAm && !selectedAm && (
          <DropDown
            list={item.length !== 0 ? listAm(item) : listAm(projects)}
            onSelectedItem={handleSelectedAm}
            onCloseSelected={handleOpenAm}
          ></DropDown>
        )}
      </MenuItem>
      <MenuItem>
        {selectedStatus || 'Status'}
        <DropDownIcon
          alt="Select Status"
          src={icon}
          select={selectedStatus}
          onClick={handleOpenStatus}
        />
        {isOpenStatus && !selectedStatus && (
          <DropDown
            status="true"
            onSelectedItem={handleSelectedStatus}
            onCloseSelected={handleOpenStatus}
          ></DropDown>
        )}
      </MenuItem>
    </Wrapper>
  );
};

Menu.propTypes = {
  onFilter: PropTypes.func,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
