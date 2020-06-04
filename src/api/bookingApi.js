import moment from 'moment';
import { getData, updateData, deleteData, addData } from './axiosService';

const url = `${process.env.REACT_APP_API_URL}/api/booking`;

export const getBooking = (startDay, endDay) => {
  const formatedStart = moment(startDay.toString()).format('YYYY-MM-DD');
  const formatedEnd = moment(endDay.toString()).format('YYYY-MM-DD');

  return getData(`${url}/get/${formatedStart}/${formatedEnd}`, {});
};

export const deleteBooking = bookingId =>
  deleteData({ url: `${url}/delete/${bookingId}`, bookingId });

export const updateBooking = booking => {
  const { _id, project, ...body } = booking;
  const req = updateData({
    url: `${url}/update/${_id}`,
    data: { ...body, project: { _id: project._id } },
  });
  return req;
};

export const addBooking = newBooking => {
  const { project, ...booking } = newBooking;
  const req = addData(`${url}/add`, {
    ...booking,
    project: { _id: project._id },
  });
  return req;
};
