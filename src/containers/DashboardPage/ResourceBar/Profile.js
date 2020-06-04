import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

import StyledProfile from './Style/StyledProfile';
import ResourceItem from './Style/ResourceItem';
import Name from './Style/Name';
import { CalendarContext } from '../../../context/Calendar';

const Profile = props => {
  const { src, name, resourceId } = props;
  const calendarContext = useContext(CalendarContext);
  const { getMaxTotalOverlapBooking } = calendarContext;

  return (
    <ResourceItem>
      <StyledProfile
        id={resourceId}
        numberBookingOverlap={getMaxTotalOverlapBooking(resourceId)}
      >
        <Avatar alt="profile" src={src} />
        <Name>{name}</Name>
      </StyledProfile>{' '}
    </ResourceItem>
  );
};
Profile.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  resourceId: PropTypes.string,
};

export default Profile;
