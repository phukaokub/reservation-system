"use client";
import React, { useState, useEffect } from 'react';
import { Room, Reservation, availableRooms, reservations } from '../data/data';
import RoomList from './RoomList';
import ReservationForm from './ReservationForm';

const ReservationApp: React.FC = () => {
  const [selectedStartTime, setSelectedStartTime] = useState<Date | null>(null);
  const [selectedEndTime, setSelectedEndTime] = useState<Date | null>(null);
  const [availableRooms, setAvailableRooms] = useState<Room[]>([]);

  useEffect(() => {
    setAvailableRooms(availableRooms);
  }, []);

  const isRoomAvailable = (room: Room, startTime: Date, endTime: Date): boolean => {
    const conflictingReservation = reservations.find(
      (reservation) =>
        reservation.roomNumber === room.roomNumber &&
        startTime < new Date(reservation.endTime) &&
        endTime > new Date(reservation.startTime)
    );
    return !conflictingReservation;
  };

  const handleTimeSlotSelect = (startTime: Date, endTime: Date): void => {
    setSelectedStartTime(startTime);
    setSelectedEndTime(endTime);
    const availableRooms = availableRooms.filter((room) => isRoomAvailable(room, startTime, endTime));
    setAvailableRooms(availableRooms);
  };

  return (
    <div>
      <h1>Reservation System</h1>
      <ReservationForm rooms={availableRooms} onTimeSlotSelect={handleTimeSlotSelect} />
      <RoomList rooms={availableRooms} />
    </div>
  );
};

export default ReservationApp;


  
  
  
