import React from 'react';
import { Room } from '../data/data';

interface RoomListProps {
  rooms: Room[];
}

const RoomList: React.FC<RoomListProps> = ({ rooms }) => {
  return (
    <div>
      <h2>Available Rooms</h2>
      {rooms.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Capacity</th>
              <th>Available Time Slots</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.roomNumber}>
                <td>{room.roomNumber}</td>
                <td>{room.capacity}</td>
                <td>
                  <ul>
                    {room.availableTimeSlots.map((timeSlot) => (
                      <li key={timeSlot}>{timeSlot}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No available rooms.</p>
      )}
    </div>
  );
};

export default RoomList;
