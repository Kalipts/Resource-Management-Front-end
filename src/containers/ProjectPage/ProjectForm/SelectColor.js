import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';

import {
  WrapperColor,
  WrapperSelectColor,
  CircleColor,
  SelectedColor,
} from '../Style/ProjectForm';
import icon from '../../../images/drop-down.png';
import { ProjectContext } from '../../../context/Project';
import { getRandomColor } from '../../../utils/Project';

const SelectColor = React.memo(function SelectColor(props) {
  const { color, onChangeColor, onOpenColor, isOpen } = props;
  const { projects } = useContext(ProjectContext);
  const defaultColor = color || getRandomColor(projects);
  onChangeColor(defaultColor);
  const handleChangeComplete = selectColor => {
    onChangeColor(selectColor.hex);
  };
  return (
    <WrapperColor>
      <div>Color</div>
      <WrapperSelectColor name="color" onClick={onOpenColor}>
        <CircleColor name="color" color={defaultColor} />
        <img alt="Choose Color" src={icon} />
        {isOpen && (
          <SelectedColor>
            <SketchPicker
              disableAlpha
              color={defaultColor}
              onChangeComplete={handleChangeComplete}
              name="color"
            />
          </SelectedColor>
        )}
      </WrapperSelectColor>
    </WrapperColor>
  );
});

SelectColor.propTypes = {
  color: PropTypes.string,
  onChangeColor: PropTypes.func,
  onOpenColor: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default SelectColor;
