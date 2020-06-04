import React from 'react';
import styled from 'styled-components';

const RowBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const RowTitle = styled.div`
  height: 18px;
  color: #000000;
  font-size: 14px;
  line-height: 18px;
  margin-left: 15px;
  margin-top: 10px;
  width: 80px;
`;

const RowContent = styled.input`
  box-sizing: border-box;
  height: 41px;
  width: 271px;
  border: 1px solid #dadada;
  background-color: #ffffff;
  padding-left: 10px;
`;

const row = (title, name, value, onChange, type = 'text') => (
  <RowBody>
    <RowTitle>{title}</RowTitle>

    <RowContent type={type} name={name} value={value} onChange={onChange} />
  </RowBody>
);

export default row;
