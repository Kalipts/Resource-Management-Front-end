import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  & > span {
    margin-bottom: 5px;
  }
`;
export const ContainerRatio = styled.div`
  width: 136px;
  display: flex;
  height: 40px;
`;
export const Utilization = styled(ContainerRatio)`
  flex-direction: column;
  input {
    line-height: 18px;
    color: black;
    border: none;
    outline: none;
    width: 100%;
    padding: 3px;
  }
`;
export const InputDuration = styled(Utilization)`
  width: 50%;
  margin-right: 10px;
`;
