/* eslint-disable indent */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';

import Modal from './Modal';

import {
  WrapperProjectForm,
  WrapperItem,
  SelectItem,
  Button,
} from '../Style/ProjectForm';
import { ModalWrapper } from '../Style/Modal';
import SelectPm from './SelectPm';
import SelectAm from './SelectAm';
import InputNameProject from './InputNameProject';
import TextAreaNote from './TextAreaNote';
import SelectColor from './SelectColor';
import SwitchActive from './SwitchActive';
import IconLoading from '../../../components/shared/IconLoading';
import { ResourceContext } from '../../../context/Resource';
import { ProjectContext } from '../../../context/Project';
import { addProject, updateProject } from '../../../api/projectApi';
import { validate } from '../../../utils/Project';
const ProjectForm = props => {
  const { persons } = useContext(ResourceContext);
  const { handleSetProject } = useContext(ProjectContext);
  const {
    project = {
      _id: undefined,
      pm: undefined,
      am: undefined,
      name: undefined,
      color: undefined,
      notes: undefined,
      active: true,
      created: moment(),
    },
    onClose,
    edit,
  } = props;
  const initialPm = project.pm
    ? {
        _id: project.pm._id,
        name: `${project.pm.name.first} ${project.pm.name.last}`,
        avatar: project.pm.avatar,
      }
    : undefined;
  const initialAm = project.am
    ? {
        _id: project.am._id,
        name: `${project.am.name.first} ${project.am.name.last}`,
        avatar: project.am.avatar,
      }
    : undefined;

  const [pm, setPm] = useState(initialPm);
  const [am, setAm] = useState(initialAm);
  const [name, setName] = useState(project.name);
  const [color, setColor] = useState(project.color);
  const [notes, setNotes] = useState(project.notes);
  const [active, setActive] = useState(project.active);
  const [isOpenPm, setIsOpenPm] = useState(false);
  const [isOpenAm, setIsOpenAm] = useState(false);
  const [isOpenColor, setIsOpenColor] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [errors, setErrors] = useState({});
  const handleOpenPm = () => {
    setIsOpenPm(!isOpenPm);
  };
  const handleOpenAm = () => {
    setIsOpenAm(!isOpenAm);
  };
  const handleOpenColor = () => {
    setIsOpenColor(!isOpenColor);
  };
  const handleChoosePm = person => {
    setPm(person);
  };
  const handleChooseAm = person => {
    setAm(person);
  };
  const handleChangeName = event => {
    const { value } = event.target;
    setName(value);
  };
  const handleChangeColor = selectedColor => {
    setColor(selectedColor);
  };
  const handleChangeNote = event => {
    const { value } = event.target;
    setNotes(value);
  };
  const handleChangeActive = event => {
    setActive(event.target.checked);
  };
  const handleSubmit = async () => {
    const err = validate(name, pm, am, notes);
    if (!_.isEmpty(err)) {
      setErrors(err);
      return;
    }
    const newProject = {
      name,
      pm: pm._id,
      am: am._id,
      notes,
      color,
      active,
      created: project.created,
    };
    setIsloading(true);
    if (!edit) {
      const req = await addProject(newProject);
      newProject._id = req.data.project._id;
      const projectDetails = { ...newProject, pm, am };
      handleSetProject(projectDetails);
      onClose();
    } else {
      const editProject = { _id: project._id, ...newProject };
      await updateProject(editProject);
      handleSetProject({ ...editProject, pm, am }, true);
    }
    setIsloading(false);
    onClose();
  };

  return (
    <>
      <Modal onCloseForm={onClose}>
        <WrapperProjectForm disabled={isLoading}>
          <h2>New Project</h2>
          <InputNameProject
            name={name}
            onChangeName={handleChangeName}
            err={errors.name}
          />
          <SelectPm
            persons={persons}
            pm={pm}
            onOpenPm={handleOpenPm}
            isOpen={isOpenPm}
            onSelectPm={handleChoosePm}
            err={errors.pm}
          />
          <SelectAm
            persons={persons}
            am={am}
            onOpenAm={handleOpenAm}
            isOpen={isOpenAm}
            onSelectAm={handleChooseAm}
            err={errors.am}
          />
          <SelectColor
            color={color}
            onOpenColor={handleOpenColor}
            isOpen={isOpenColor}
            onChangeColor={handleChangeColor}
          />
          <SwitchActive active={active} onChangeActive={handleChangeActive} />
          <TextAreaNote
            notes={notes}
            onChangeNote={handleChangeNote}
            err={errors.notes}
          />
          <WrapperItem>
            <div></div>
            <SelectItem button="true">
              <Button primary onClick={handleSubmit}>
                {edit ? 'Update Project' : 'Add Project'}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </SelectItem>
          </WrapperItem>
          {isLoading && <IconLoading size="35" />}
        </WrapperProjectForm>
      </Modal>
      <ModalWrapper />
    </>
  );
};

ProjectForm.propTypes = {
  project: PropTypes.objectOf(PropTypes.any),
  onClose: PropTypes.func,
  edit: PropTypes.bool,
};

export default ProjectForm;
