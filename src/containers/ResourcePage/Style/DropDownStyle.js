import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  box-sizing: border-box;
  font-family: Muli;
  position: relative;
`;

export const Title = styled.div`
  margin-top: 10px;
  margin-left: 15px;
  font-size: 14px;
  width: 80px;
  letter-spacing: 0;
  line-height: 18px;
`;

export const OptionCustom = styled.div`
  height: 41px;
  width: 271px;
`;

export const SelectInput = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 0 10px;
  position: relative;
  height: 42px;
  font-size: 12px;
  &:before {
    position: absolute;
    content: '';
    right: 8px;
    top: 18px;
    border-top: 5px solid #252525;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }
`;

export const SelectList = styled.div`
  border: 1px solid #ccc;
  border-top: none;
  background-color: white;
  position: relative;
  z-index: 10;
`;

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background: #eee;
  }
`;

export const SelectTitle = styled.div`
  color: #252525;
  font-size: 12px;
`;
