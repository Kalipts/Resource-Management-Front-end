import React, { Component } from "react";

import "./Calendar.css";
import "./Sidebar.css";
import TableCalendar from "../../components/TableCalendar/index";
class Calendar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="sidebar">asdfasdf</div>
          <TableCalendar />
        </div>
      </>
    );
  }
}

export default Calendar;
