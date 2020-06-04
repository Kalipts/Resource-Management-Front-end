import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, CustomRadio, Item, Color } from './Style/SelectedItem';
const ListProject = props => {
  const { projects, onChange, checkedProject } = props;
  return (
    <ListItem>
      {projects &&
        projects.map(project => {
          const checked =
            project._id === checkedProject._id ? 'checked' : undefined;
          return (
            <li key={project._id}>
              <label>
                <input
                  type="radio"
                  name="radio"
                  defaultChecked={checked}
                  value={project._id}
                  onChange={onChange}
                />

                <Item>
                  <Color color={project.color} />
                  {project.name}
                </Item>
                <CustomRadio id="radio" />
              </label>
            </li>
          );
        })}
    </ListItem>
  );
};

ListProject.propTypes = {
  onChange: PropTypes.func,
  projects: PropTypes.arrayOf(PropTypes.object),
  checkedProject: PropTypes.objectOf(PropTypes.any),
};

export default ListProject;
