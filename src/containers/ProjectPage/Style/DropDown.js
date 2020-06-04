import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 120%;
  right: 0;
  z-index: 2;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
  max-height: 150px;
  scroll-behavior: smooth;
  overflow-y: auto;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%-5px;
  height: 30px;
  padding-left: 5px;
  align-items: center;
  &:hover {
    background-color: #f2f2f2;
  }
  transition: linear 0.1s;
  border-right: inherit;
`;

export const WrapperItem = styled.div``;
export const SmallAvatar = styled(Avatar)`
  && {
    width: 25px;
    height: 25px;
  }
  margin-right: 10px;
`;
