import React from 'react';
import styled from 'styled-components';
import iconDelete from '../../images/delete.svg';
import iconRefresh from '../../images/refresh.png';

const ActResource = styled.div`
  display: flex;
  cursor: pointer;
`;

const Archive = styled.div`
  margin-left: 7px;
  height: 18px;
  width: 49px;
  color: #f8465c;
  font-size: 14px;
  line-height: 18px;
`;

const IconArchive = styled.img`
  padding-bottom: 22px;
`;

function Act(props) {
  return (
    <ActResource onClick={props.onDelete}>
      <IconArchive alt="Archive" src={iconDelete} />
      <Archive>Archive</Archive>
    </ActResource>
  );
}

export default Act;
