import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: Muli;
    letter-spacing: 0;
  }
`;
export const theme = {
  color: {
    primary: '#F95B27',
    line: '#E7ECF1',
    weekendBackground: '#FEFAF8',
    background: '#FFFFFF',
    fontDefault: '#000',
    none: '#FFFFFF',
    borderBookingView: '#e9e9e9',
    borderCellCalendar: '#e1e7ed',
  },
};
