import React, { useState, useContext } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { Wrapper, GridItem, Status } from './Style/GridItemProject';

import StyledGridProject from './Style/StyledGridProject';
import Color from './Style/Color';
import { Button, StyledActionButton } from './Style/StyledActionButton';
import ProjectForm from './ProjectForm';
import { ProjectContext } from '../../context/Project';
import { CalendarContext } from '../../context/Calendar';
import { updateProject, deleteProject } from '../../api/projectApi';
import AlertDialog from '../../components/Diaglog/AlertDiaglog';
import { dialog } from '../../utils/Project';
import iconDelete from '../../images/delete.svg';
import iconRefresh from '../../images/refresh.png';

const GridProject = props => {
  const { handleDeleteProject, handleSetProject } = useContext(ProjectContext);
  const { bookings } = useContext(CalendarContext);
  const { project, title } = props;
  const [active, setActive] = useState(project ? project.active : undefined);
  const [isDelete, setIsDelete] = useState(false);
  const elevation = title ? 0 : 3;
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleOnClick = () => {
    if (title) return;
    setIsOpenForm(!isOpenForm);
  };

  const handleOnDelete = event => {
    event.preventDefault();
    event.stopPropagation();
    setIsDelete(!isDelete);
  };

  const handleOnDisagreeDelete = () => {
    setIsDelete(!isDelete);
  };

  const handleDelete = () => {
    handleDeleteProject(project._id);
    deleteProject(project._id);
  };

  const handleArchive = async event => {
    event.preventDefault();
    event.stopPropagation();
    const checkBooking = bookings.some(
      booking => booking.project._id === project._id,
    );
    if (checkBooking && active) return;
    const newProject = {
      ...project,
      active: !active,
      pm: project.pm._id,
      am: project.am._id,
    };
    await updateProject(newProject);
    handleSetProject({ ...project, active: !active }, true);
    setActive(!active);
  };

  return (
    <StyledGridProject>
      {isOpenForm && (
        <ProjectForm edit project={project} onClose={handleOnClick} />
      )}
      <Wrapper onClick={handleOnClick} elevation={elevation} title={title}>
        <GridItem container>
          <GridItem item xs={1}>
            <GridItem container>
              <GridItem item xs={3}>
                {project && <Color color={project.color} />}
              </GridItem>
              <GridItem item xs={7}>
                {/* <CheckboxItem /> */}
              </GridItem>
            </GridItem>
          </GridItem>
          <GridItem item xs={6}>
            <GridItem container>
              <GridItem item xs={5} bold="true">
                {project ? project.name : 'Project Name'}
              </GridItem>
              <GridItem item xs={7}>
                <GridItem container>
                  <GridItem item xs={6}>
                    {project
                      ? `${project.pm.name.first} ${project.pm.name.last}`
                      : 'PM'}
                  </GridItem>
                  <GridItem item xs={6}>
                    {project
                      ? `${project.am.name.first} ${project.am.name.last}`
                      : 'AM'}
                  </GridItem>
                </GridItem>
              </GridItem>
            </GridItem>
          </GridItem>

          <GridItem item xs={5}>
            <GridItem container spacing={2}>
              <GridItem item xs={3}>
                {project
                  ? moment(project.created).format('DD/MM/YYYY')
                  : 'Created'}
              </GridItem>
              <GridItem item xs={2}>
                {project ? (
                  <Status archive={!active}>
                    {active ? 'Active' : 'Archive'}
                  </Status>
                ) : (
                  'Status'
                )}
              </GridItem>
              <GridItem item xs={7}>
                {project && (
                  <StyledActionButton>
                    <Button aria-label="archive" onClick={handleArchive}>
                      <img
                        alt="Archive"
                        src={active ? iconDelete : iconRefresh}
                      />
                    </Button>
                    Archive
                    <Button aria-label="delete" onClick={handleOnDelete}>
                      <img alt="Delete" src={iconDelete} />
                    </Button>
                    Delete
                  </StyledActionButton>
                )}
                {!project && 'Active'}
              </GridItem>
            </GridItem>
          </GridItem>
        </GridItem>
      </Wrapper>
      <AlertDialog
        title="Delete Project"
        diaglog={active ? dialog.active : dialog.question}
        open={isDelete}
        alert={active}
        handleOnAccept={handleDelete}
        handleOnDisagree={handleOnDisagreeDelete}
      />
    </StyledGridProject>
  );
};

GridProject.propTypes = {
  project: PropTypes.objectOf(PropTypes.any),
  title: PropTypes.string,
};

export default GridProject;
