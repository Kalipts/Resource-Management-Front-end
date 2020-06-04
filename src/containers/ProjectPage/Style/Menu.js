import styled from 'styled-components';
import Select from '@material-ui/core/Select';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  color: #000000;
  font-size: 14px;
  line-height: 18px;
  padding: 13px auto;
  margin: 25px 0 15px;
`;

export const MenuItem = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
  font-size: 15px;
  line-height: 18px;
  border-bottom: 2px solid #ced3d7;
  width: ${props => (props.width ? props.width : '144px')};
`;

export const DropDownIcon = styled.img`
  transform: ${props => (props.select ? 'rotate(180deg)' : 'none')};
  cursor: pointer;
`;

export const StyledSelect = styled(Select)`
  color: #ffffff;
`;
