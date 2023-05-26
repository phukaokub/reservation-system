import React, { useState } from 'react';
import { Room } from '../data/data';

interface ReservationFormProps {
  rooms: Room[];
  onTimeSlotSelect: (startTime: Date, endTime: Date) => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ rooms, onTimeSlotSelect }) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedStartTime, setSelectedStartTime] = useState<Date | null>(null);
  const [selectedEndTime, setSelectedEndTime] = useState<Date | null>(null);

  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const roomNumber = event.target.value;
    const room = rooms.find((room) => room.roomNumber === roomNumber) || null;
    setSelectedRoom(room);
  };

  const handleStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const startTime = new Date(event.target.value);
    setSelectedStartTime(startTime);
  };

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const endTime = new Date(event.target.value);
    setSelectedEndTime(endTime);
  };

  const handleCreateReservation = (): void => {
    if (selectedRoom && selectedStartTime && selectedEndTime) {
      onTimeSlotSelect(selectedStartTime, selectedEndTime);
    }
  };

  return (
    <div>
      <h2>Create Reservation</h2>
      <label htmlFor="room">Room:</label>
      <select id="room" value={selectedRoom?.roomNumber || ''} onChange={handleRoomChange}>
        <option value="">Select a room</option>
        {rooms.map((room) => (
          <option key={room.roomNumber} value={room.roomNumber}>
            {room.roomNumber}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="startTime">Start Time:</label>
      <input type="datetime-local" id="startTime" onChange={handleStartTimeChange} />
      <br />
      <label htmlFor="endTime">End Time:</label>
      <input type="datetime-local" id="endTime" onChange={handleEndTimeChange} />
      <br />
      <label htmlFor="person">Person:</label>
      <input type="text" id="person" />
      <br />
      <button onClick={handleCreateReservation}>Create Reservation</button>
    </div>
  );
};

export default ReservationForm;
