import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import _ from 'lodash';
import PropTypes from 'prop-types';

import Header from './Style/HeaderBooking';
import {
  BookingTime,
  TotalTime,
  InputDetail,
  Wrapper,
  Opacity,
} from './Style/BodyBooking';
import TimeRatio from './TimeRatio';
import Label from './Style/Label';
import SelectedItem from './SelectedItem';
import ResourceItem from './ResourceItem';
import ProjectItem from './ProjectItem';
import { ContainButton, FooterBooking } from './Style/FooterBooking';
import InputDate from './InputDate';
import Button from './Button';
import IconLoading from '../shared/IconLoading';
import AlertDetails from './Style/Alert';
import iconDetail from '../../images/files-and-folders.svg';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import Modal from '../Dashboard/Modal';
import { ModalWrapper } from '../Dashboard/StyledModal';
import { CalendarContext } from '../../context/Calendar';
import { ResourceContext } from '../../context/Resource';
import { ProjectContext } from '../../context/Project';
import { compareByDay } from '../../utils/Date';
import InputTimeRatio from './InputTimeRatio';
import { MAX_UTILIZE } from '../../containers/App/constant';
import { validate } from './validate';
import { addBooking, updateBooking } from '../../api/bookingApi';
import { getHours, getHoursFromUtilize } from '../../utils/Utilize';

const AddBookingForm = props => {
  const {
    resource,
    booking = {
      _id: undefined,
      project: { name: '', color: '' },
      utilize: MAX_UTILIZE,
      details: '',
    },
    startDate,
    endDate,
  } = props.content;
  const [startDay, setStartDay] = useState(moment());
  const [endDay, setEndDay] = useState(moment());
  const [details, setDetails] = useState('');
  const [person, setPerson] = useState([]);
  const [utilize, setUtilize] = useState(booking.utilize);
  const [duration, setDuration] = useState(getHours(booking.utilize));
  const [project, setProject] = useState(booking.project);
  const [isModify, setIsModify] = useState(false);
  const [errors, setErrors] = useState({});
  const [isDuration, setIsDuration] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleCloseModal,
    handleSetBookings,
    disabled,
    isModalOpen,
  } = useContext(CalendarContext);
  const { persons } = useContext(ResourceContext);
  const { projectsActive } = useContext(ProjectContext);

  useEffect(() => {
    setPerson([resource]);
    setProject(booking.project);
    setDetails(booking.details);
    setUtilize(booking.utilize);
    setDuration(getHours(booking.utilize));
    setIsDuration(false);
    setStartDay(moment(startDate.toString()));
    setEndDay(moment(endDate.toString()));
    if (booking._id) {
      setIsModify(true);
    } else {
      setIsModify(false);
    }
  }, [resource, booking._id, startDate, endDate]);

  const handleClickCancel = () => {
    setErrors({});
    handleCloseModal();
  };
  const changeEndDay = newDate => {
    if (compareByDay(newDate, startDay) < 0) setStartDay(moment(newDate));
    setEndDay(newDate);
  };
  const changeStartDay = newDate => {
    if (compareByDay(newDate, endDay) > 0) setEndDay(newDate);
    setStartDay(newDate);
  };

  const handleChangeRatio = () => {
    setIsDuration(!isDuration);
  };
  const handleChangeUtilize = (percent, hours, minutes, rawHours) => {
    setUtilize(percent);
    setDuration({ hours, minutes, rawHours });
  };
  const handleChangeDetail = event => {
    if (errors.details) setErrors({});
    setDetails(event.target.value);
  };
  const handleDeletePerson = _id => {
    const selectedPerson = person.filter(e => e._id !== _id);
    setPerson(selectedPerson);
  };
  const handleChangePerson = event => {
    const _id = event.target.value;
    const selectedPerson = persons.find(e => e._id === _id);
    if (isModify) {
      setPerson([selectedPerson]);
      return;
    }
    if (event.target.checked) {
      setPerson(prePerson => [...prePerson, selectedPerson]);
    } else {
      const newPersons = person.filter(e => e._id !== _id);
      setPerson(newPersons);
    }
  };

  const handleChangeProject = event => {
    const _id = event.target.value;
    const selectedProject = projectsActive.find(e => e._id === _id);
    setProject(selectedProject);
    if (errors.project) setErrors({});
    return selectedProject;
  };

  const handleSummit = async () => {
    const newBooking = {
      utilize,
      startDay,
      endDay,
      details,
      project,
    };
    const err = validate(startDay, endDay, project, details);

    if (!_.isEmpty(err)) {
      setErrors(err);
      return;
    }
    setIsLoading(true);
    if (!isModify) {
      const bookings = await Promise.all(
        person.map(async e => {
          const editBooking = {
            ...newBooking,
            resourceId: e._id,
          };
          const req = await addBooking(editBooking);
          return {
            _id: req.data.booking._id,
            ...editBooking,
          };
        }),
      );
      handleSetBookings(bookings);
    } else {
      newBooking.resourceId = person[0]._id;
      newBooking._id = booking._id;
      await updateBooking(newBooking);
      handleSetBookings(newBooking);
    }
    setIsLoading(false);
    handleClickCancel();
  };
  const { hours, minutes } = getHoursFromUtilize(startDay, endDay, utilize);
  const value = {
    percent: utilize,
    hours: duration.hours,
    minutes: duration.minutes,
    rawHours: duration.rawHours,
  };
  return (
    <>
      <Modal>
        <Wrapper disabled={isLoading || disabled}>
          <Header />
          <TimeRatio active={isDuration} onChange={handleChangeRatio} />
          <BookingTime>
            <InputDate
              label="Start"
              handleChange={changeStartDay}
              day={startDay}
              errors={errors.startDay}
            ></InputDate>
            <InputDate
              label="End"
              handleChange={changeEndDay}
              day={endDay}
              errors={errors.endDay}
            ></InputDate>
          </BookingTime>
          <InputTimeRatio
            inDay={compareByDay(endDay, startDay) === 0}
            isDuration={isDuration}
            value={value}
            onChangeUtilize={handleChangeUtilize}
          />
          <TotalTime>
            <Label>
              Total: {hours}h {minutes}m
            </Label>
          </TotalTime>
          <ProjectItem
            onChangeItem={handleChangeProject}
            errors={errors.project}
            project={project}
          >
            {project.name}
          </ProjectItem>
          <SelectedItem title="Details" src={iconDetail}>
            {errors.details && <AlertDetails>! {errors.details}</AlertDetails>}
            <InputDetail onChange={handleChangeDetail} value={details} />
          </SelectedItem>
          <ResourceItem
            edit={isModify}
            onChangeItem={handleChangePerson}
            onDeletePerson={handleDeletePerson}
            persons={person}
          />
          <FooterBooking>
            <ContainButton>
              <Button primary onClick={handleSummit}>
                <span>{isModify ? 'Save Booking' : 'Add Booking'}</span>
              </Button>
              <Button onClick={handleClickCancel}>
                <span>Cancel</span>
              </Button>
            </ContainButton>
          </FooterBooking>
          <Opacity disabled={isLoading || disabled} />
        </Wrapper>
        {isLoading && <IconLoading size="35" />}
      </Modal>
      {isModalOpen && <ModalWrapper />}
    </>
  );
};

AddBookingForm.propTypes = {
  content: PropTypes.shape({
    resource: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    booking: PropTypes.object,
    startDate: PropTypes.instanceOf(moment),
    endDate: PropTypes.instanceOf(moment),
  }),
};
export default AddBookingForm;
