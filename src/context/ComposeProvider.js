import React from 'react';
import PropTypes from 'prop-types';

import { CalendarProvider } from './Calendar';
import { ProjectProvider } from './Project';
import { ResourceProvider } from './Resource';

const ComposeProvider = ({ children }) => (
  <ResourceProvider>
    <ProjectProvider>
      <CalendarProvider>{children}</CalendarProvider>
    </ProjectProvider>
  </ResourceProvider>
);

ComposeProvider.propTypes = {
  children: PropTypes.node,
};

export default ComposeProvider;
