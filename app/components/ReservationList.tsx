import { Reservation } from '../data/data';

interface ReservationListProps {
  reservations: Reservation[];
}

const ReservationList: React.FC<ReservationListProps> = ({ reservations }) => {
  return (
    <div>
      <h2>Existing Reservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.roomNumber + reservation.startTime}>
            <strong>Room Number:</strong> {reservation.roomNumber}
            <br />
            <strong>Date:</strong> {reservation.date}
            <br />
            <strong>Start Time:</strong> {reservation.startTime}
            <br />
            <strong>End Time:</strong> {reservation.endTime}
            <br />
            <strong>Person:</strong> {reservation.person}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
