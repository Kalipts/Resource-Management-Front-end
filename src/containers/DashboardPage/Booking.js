import React from 'react'
import BookingCard from '../../components/TableCalendar/BookingCard'
import BookingText from '../../components/TableCalendar/BookingContent'
import BookingTime from '../../components/TableCalendar/BookingTime'
import moment from 'moment';

export default function Booking(props) {
    const {startDay,endDay,detail,color,top,isDuration} = props;
    const start = moment(startDay);
    const end = moment(endDay);
    const length = end.diff(start,"days")+1;
    const duration= moment.duration(end.diff(start));
    const hours = duration.asHours();
    return (
        <BookingCard length={length} color={color} top={top}>
            <BookingText>{detail}</BookingText>
            {isDuration && (<BookingTime>{`${hours}h`}</BookingTime>)}
        </BookingCard>
    )
}
