import React from 'react';
import PropTypes from 'prop-types';

import {
  WrapperItem,
  SelectItem,
  InputName,
  Alert,
} from '../Style/ProjectForm';

const InputNameProject = React.memo(function InputNameProject(props) {
  const { onChangeName, name, err } = props;

  return (
    <>
      {(name === '' || name === undefined) && <Alert name="true">{err}</Alert>}
      <WrapperItem>
        <div>Name</div>
        <SelectItem>
          <InputName
            onChange={onChangeName}
            defaultValue={name}
            placeholder="-- Name --"
          />
        </SelectItem>
      </WrapperItem>
    </>
  );
});

InputNameProject.propTypes = {
  onChangeName: PropTypes.func,
  name: PropTypes.string,
  err: PropTypes.oneOfType(PropTypes.bool, PropTypes.string),
};

export default InputNameProject;
