/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useContext,
} from 'react';
import moment from 'moment';

import { getBooking, deleteBooking, updateBooking } from '../api/bookingApi';
import {
  compareByDay,
  getNumberOfDay,
  isIncludeWeekend,
  isWeekend,
  generationDuration,
} from '../utils/Date';
import { useRank } from '../utils/useRank';
import { checkOvertimeNewBooking } from '../utils/Booking';
import { ResourceContext } from './Resource';

const CalendarContext = createContext();

const CalendarProvider = ({ children }) => {
  const [month, setMonth] = useState(moment().months());
  const [year, setYear] = useState(moment().years());
  const { searchResult } = useContext(ResourceContext);
  const [isDragLoading, setIsDragLoading] = useState(false);
  const [, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDay, setStartDay] = useState(moment());
  const [disabled, setDisabled] = useState(false);
  const [endDay, setEndDay] = useState(moment());
  const [content, setContent] = useState({
    resource: [],
    booking: undefined,
    startDate: moment(),
    endDate: moment(),
  });
  const [overTime, setOverTime] = useState({
    isOver: false,
    newBooking: {},
  });
  const [shouldHover, setShouldHover] = useState(true);
  const [rowHover, setRowHover] = useState(-1);
  const [bookingId, setBookingId] = useState(null);
  const [ranks, , getMarginTopBooking] = useRank(bookings);
  const [isZoom, setIsZoom] = useState(false);
  const contentGlobal = () => content;
  const setContentGlobal = newContent => {
    setContent(newContent);
  };

  const handleOnChangeYear = newYear => {
    setYear(newYear);
  };
  const handleOnChangeMonth = newMonth => {
    setMonth(newMonth);
  };

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleHover = indexResource => {
    setShouldHover(!shouldHover);
    setRowHover(indexResource);
  };

  const fetchBooking = useCallback(async () => {
    setIsLoading(true);
    const res = await getBooking(startDay, endDay);
    const result = res.data.bookings;
    const mapObjectToBooking = booking => {
      const schedule = {
        ...booking,
        project: booking.project,
        startDay: moment(booking.startDay),
        endDay: moment(booking.endDay),
      };
      return schedule;
    };
    const bookingsConvert = result.map(mapObjectToBooking);
    setBookings([...bookingsConvert]);
    setIsLoading(false);
  }, [startDay, endDay]);
  const removeBooking = async id => {
    setIsDragLoading(true);
    await deleteBooking(id);
    setIsDragLoading(false);
    const filterBookingById = booking => booking._id !== id;
    const newBookings = bookings.filter(filterBookingById);
    setBookings([...newBookings]);
  };

  const handleSetBookings = booking => {
    if (Array.isArray(booking)) {
      setBookings([...bookings, ...booking]);
    } else {
      const filterBooking = bookings.filter(e => e._id !== booking._id);
      setBookings([...filterBooking, booking]);
    }
  };
  const updateOnOvertime = async newBooking => {
    setOverTime({ ...overTime, isOver: false });
    setIsDragLoading(true);
    await updateBooking(newBooking);
    const findBookingById = booking => booking._id === newBooking._id;
    const indexBooking = bookings.findIndex(findBookingById);
    setIsDragLoading(false);
    bookings[indexBooking] = newBooking;
    setOverTime({ newBooking: {}, isOver: false });
  };
  const handleOnCloseAlert = async () => {
    setOverTime({ ...overTime, isOver: false });

    const { newBooking } = overTime;
    if (newBooking.startDay.isoWeekday() === 7) {
      await updateBooking({
        ...newBooking,
        startDay: newBooking.startDay.add(-2, 'days'),
        endDay: newBooking.endDay.add(0, 'days'),
      });
      const findBookingById = booking => booking._id === newBooking._id;
      const indexBooking = bookings.findIndex(findBookingById);
      bookings[indexBooking] = newBooking;
    }
    setIsDragLoading(true);
    setOverTime({ newBooking: {}, isOver: false });
    setIsDragLoading(false);
  };
  const updateOnDidDragBooking = async (booking, resourceId, newStartDay) => {
    setIsDragLoading(true);
    setBookingId(booking._id);
    const length = compareByDay(booking.endDay, booking.startDay) + 1;
    const startDayFormat = moment(newStartDay)
      .format('ddd')
      .toString();
    const newEndDay = moment(newStartDay)
      .clone()
      .add(length - 1, 'days');
    const endDayFormat = moment(newEndDay)
      .clone()
      .format('ddd')
      .toString();
    const checkWeekendBooking = isIncludeWeekend(
      booking.startDay,
      booking.endDay,
    );
    const checkWeekendNewBooking = isIncludeWeekend(newStartDay, newEndDay);

    let newBooking = {
      ...booking,
      resourceId,
      startDay: newStartDay,
      endDay: newEndDay,
    };
    const compareWeekend = startDayFormat === 'Sat' || startDayFormat === 'Sun';
    const objectBooking = (startDay_, endDay_) => {
      newBooking = {
        ...booking,
        resourceId,
        startDay: startDay_,
        endDay: endDay_,
      };
      return newBooking;
    };
    let isOvertime = await checkOvertimeNewBooking(newBooking, bookings);
    if (isOvertime) {
      setIsDragLoading(false);
      setOverTime({ isOver: true, newBooking });
      return;
    }
    if (length === 1 && compareWeekend) return;
    if (checkWeekendBooking) {
      if (
        isIncludeWeekend(newStartDay, newEndDay) ||
        isWeekend(booking.startDay)
      ) {
        newBooking = objectBooking(newStartDay, newEndDay);
      } else if (!checkWeekendNewBooking) {
        newBooking = objectBooking(
          newStartDay,
          newEndDay.clone().add(-2, 'days'),
        );
      }
    } else if (startDayFormat === 'Sun') {
      newBooking = objectBooking(
        newStartDay.clone().add(-2, 'days'),
        newEndDay.clone().add(0, 'days'),
      );
    } else if (startDayFormat === 'Sat') {
      if (length === 2) {
        newBooking = objectBooking(
          newStartDay.clone().add(-1, 'days'),
          newEndDay.clone().add(1, 'days'),
        );
      } else {
        newBooking = objectBooking(
          newStartDay.clone().add(2, 'days'),
          newEndDay.clone().add(0, 'days'),
        );
      }
    } else if (endDayFormat === 'Sat' || endDayFormat === 'Sun') {
      if (endDayFormat === 'Sat') {
        newBooking = objectBooking(
          newStartDay.clone().add(-1, 'days'),
          newEndDay.clone().add(-1, 'days'),
        );
      } else {
        newBooking = objectBooking(
          newStartDay.clone().add(-2, 'days'),
          newEndDay.clone().add(-2, 'days'),
        );
      }
    } else {
      const distanceStartDay = getNumberOfDay(booking.startDay, newStartDay);
      newBooking = {
        ...booking,
        resourceId,
        startDay: booking.startDay.clone().add(distanceStartDay, 'days'),
        endDay: booking.endDay.clone().add(distanceStartDay, 'days'),
      };
    }

    const indexResource = searchResult.findIndex(
      resource => resource._id === resourceId,
    );
    const schedules = getBookingWithResource(
      newBooking.startDay,
      indexResource,
    );
    if (schedules.length === 0) {
      ranks[booking._id] = 0;
    } else {
      ranks[booking._id] = ranks[schedules.length - 1] + 1;
    }

    const newBookings = bookings.map(schedule => {
      if (schedule._id === booking._id) {
        return newBooking;
      }
      return schedule;
    });
    isOvertime = await checkOvertimeNewBooking(newBooking, bookings);
    if (isOvertime) {
      setIsDragLoading(false);
      setOverTime({ isOver: true, newBooking });
      return;
    }
    await updateBooking(newBooking)
      // eslint-disable-next-line no-unused-vars
      .then(response => {
        setIsDragLoading(false);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));

    setBookings([...newBookings]);
  };

  const getMaxTotalOverlapBooking = resourceId => {
    let maxNumberOfBookingOverlap = 0;
    bookings.forEach(val => {
      if (resourceId !== val.resourceId) {
        return;
      }
      const filterBookingByDateAndResource = booking => {
        const isOverlapBooking =
          compareByDay(booking.startDay, val.startDay) <= 0 &&
          compareByDay(booking.endDay, val.startDay) >= 0 &&
          resourceId === booking.resourceId &&
          resourceId === val.resourceId;
        return isOverlapBooking;
      };
      const bookingOverlap = bookings.filter(filterBookingByDateAndResource);
      const numberBookingOverlap = bookingOverlap.length - 1;
      maxNumberOfBookingOverlap =
        numberBookingOverlap >= maxNumberOfBookingOverlap
          ? numberBookingOverlap
          : maxNumberOfBookingOverlap;
    });
    return maxNumberOfBookingOverlap;
  };
  const getBookingWithResource = useCallback(
    (date, indexResource) => {
      const filterResource = booking => {
        if (booking.resourceId !== searchResult[indexResource]._id) {
          return false;
        }
        const isBookingBelongResource = booking.startDay.isSame(date, 'day');
        const isBookingOutDuration =
          compareByDay(date, booking.startDay) > 0 &&
          compareByDay(date, startDay) === 0;
        return isBookingBelongResource || isBookingOutDuration;
      };
      const bookingsWithResource = bookings
        .filter(filterResource)
        // eslint-disable-next-line no-shadow
        .sort((first, second) => compareByDay(second.endDay, first.endDay));
      // Initial rank for booking
      const initiveRankForBooking = (booking, index) => {
        ranks[booking._id] = index;
        const { isDuration, isOvertime, __v, ...newBookings } = booking;
        return newBookings;
      };
      const result = bookingsWithResource.map(initiveRankForBooking);
      return result;
    },
    [bookings, searchResult, overTime.newBooking, overTime.isOver, ranks],
  );
  useEffect(() => {
    fetchBooking();
  }, [startDay, endDay]);

  useEffect(() => {
    const duration = generationDuration(month, year);
    setStartDay(duration.startDay);
    setEndDay(duration.endDay);
  }, [month, year]);

  return (
    <CalendarContext.Provider
      value={{
        bookings,
        setBookings,
        fetchBooking,
        handleSetBookings,
        getMaxTotalOverlapBooking,
        getBookingWithResource,
        getMarginTopBooking,
        isModalOpen,
        disabled,
        setDisabled,
        handleCloseModal,
        setStartDay,
        setEndDay,
        startDay,
        endDay,
        removeBooking,
        updateOnDidDragBooking,
        contentGlobal,
        setContentGlobal,
        shouldHover,
        rowHover,
        handleHover,
        isDragLoading,
        setIsDragLoading,
        bookingId,
        overTime,
        updateOnOvertime,
        handleOnCloseAlert,
        handleOnChangeMonth,
        handleOnChangeYear,
        month,
        year,
        isZoom,
        setIsZoom,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
export { CalendarProvider, CalendarContext };
