import React, { useContext } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import ToolbarCalendar from './ToolbarCalendar';
import { CalendarContext } from '../../context/Calendar';
import TableCalendar from './TableCalendar';
function DashboardPage() {
  const {
    month = 0,
    year = 2020,
    handleOnChangeMonth = () => {},
    handleOnChangeYear = () => {},
  } = useContext(CalendarContext);
  return (
    <div>
      <ToolbarCalendar
        month={month}
        year={year}
        handleOnChangeMonth={handleOnChangeMonth}
        handleOnChangeYear={handleOnChangeYear}
      />
      <DndProvider backend={Backend}>
        <TableCalendar
          month={month}
          year={year}
          handleOnChangeMonth={handleOnChangeMonth}
          handleOnChangeYear={handleOnChangeYear}
        />
      </DndProvider>
    </div>
  );
}

export default DashboardPage;
