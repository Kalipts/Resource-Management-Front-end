import styled from 'styled-components';
const ResourceItem = styled.div`
  border-right: 1px solid ${props => props.theme.color.borderCellCalendar};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 5px !important;
  font-size: '14px';
  font-weight: '500';
`;
export default ResourceItem;
