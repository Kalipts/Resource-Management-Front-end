import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';

import { WrapperColor, WrapperSelectColor } from '../Style/ProjectForm';

const SwitchActive = React.memo(function SelectColor(props) {
  const { active, onChangeActive } = props;
  return (
    <WrapperColor>
      <div>Active</div>
      <WrapperSelectColor>
        <Switch color="primary" checked={active} onClick={onChangeActive} />
      </WrapperSelectColor>
    </WrapperColor>
  );
});

SwitchActive.propTypes = {
  active: PropTypes.bool,
  onChangeActive: PropTypes.func,
};

export default SwitchActive;
