import React from 'react';
import PropTypes from 'prop-types';

import GridProject from './GridProject';

const ListProjects = ({ projects }) => (
  <>
    {projects.map(project => (
      <GridProject key={project._id} project={project} />
    ))}
  </>
);

ListProjects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

export default ListProjects;
