import React from 'react';
import PropTypes from 'prop-types';
import { FaMinus, FaPlus } from 'react-icons/fa';
import ToggleZoom from './style/ToggleZoom';
import ButtonToggle from './style/ButtonToggle';
import TextButtonToggle from './style/TextButtonToggle';
import BarToggle from './style/BarToggle';
import Bar from './style/Bar';
import Ball from './style/Ball';

export default function Zoom({ changeZoom = () => {}, isZoomed = false }) {
  const handleOnClickBall = e => {
    e.stopPropagation();
  };
  return (
    <ToggleZoom>
      <ButtonToggle onClick={changeZoom}>
        <TextButtonToggle>
          <FaMinus />
        </TextButtonToggle>
      </ButtonToggle>
      <BarToggle onClick={changeZoom}>
        <Bar></Bar>
        <Ball isZoomed={isZoomed} onClick={handleOnClickBall}></Ball>
      </BarToggle>
      <ButtonToggle onClick={changeZoom}>
        <TextButtonToggle>
          <FaPlus />
        </TextButtonToggle>
      </ButtonToggle>
    </ToggleZoom>
  );
}
Zoom.propTypes = {
  isZoomed: PropTypes.bool,
  changeZoom: PropTypes.func,
};
