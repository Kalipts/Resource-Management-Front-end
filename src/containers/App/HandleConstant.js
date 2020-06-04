import {WEEK_WIDTH, WEEK_WIDTH_ZOOM, WIDTH_CELL_IN_TABLE_CALENDAR, WIDTH_CELL_ZOOMED_TABLE_CALENDAR} from "./constant";

// handle width cell calendar
const  handleWidth = (isZoom=false) => {
    if (!isZoom)
        return WIDTH_CELL_IN_TABLE_CALENDAR;
    return WIDTH_CELL_ZOOMED_TABLE_CALENDAR;
};

// handle week
export const handleWidthWeek = (isZoom=false) => {
    if(!isZoom)
        return WEEK_WIDTH;
    return WEEK_WIDTH_ZOOM;
};

export default handleWidth;
