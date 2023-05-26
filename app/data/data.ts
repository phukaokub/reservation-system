export interface Room {
    roomNumber: string;
    capacity: number;
    availableTimeSlots: string[]; // You can use an array of strings to represent time slots
  }

  
  export const availableRooms: Room[] = [
    {
      roomNumber: 'Room 1',
      capacity: 5,
      availableTimeSlots: ['09:00 AM - 10:00 AM', '10:30 AM - 11:30 AM', '02:00 PM - 03:00 PM'],
    },
    {
      roomNumber: 'Room 2',
      capacity: 10,
      availableTimeSlots: ['09:00 AM - 10:00 AM', '10:30 AM - 11:30 AM', '01:00 PM - 02:00 PM'],
    },
    { roomNumber: 'Room 3', capacity: 15, availableTimeSlots: ['09:00 AM - 10:00 AM', '10:30 AM - 11:30 AM'] },
    { roomNumber: 'Room 4', capacity: 20, availableTimeSlots: ['09:00 AM - 10:00 AM', '10:30 AM - 11:30 AM'] },
    { roomNumber: 'Room 5', capacity: 25, availableTimeSlots: ['09:00 AM - 10:00 AM', '10:30 AM - 11:30 AM'] },
    { roomNumber: 'Room 6', capacity: 30, availableTimeSlots: ['09:00 AM - 10:00 AM', '10:30 AM - 11:30 AM'] },
  ];
  
  export interface Reservation {
    roomNumber: string;
    date: string;
    startTime: string;
    endTime: string;
    person: string;
  }

  export const reservations: Reservation[] = [
    {
      roomNumber: 'Room 1',
      date: '2023-05-25',
      startTime: '09:00 AM',
      endTime: '10:00 AM',
      person: 'John Doe',
    },
    {
      roomNumber: 'Room 2',
      date: '2023-05-26',
      startTime: '10:30 AM',
      endTime: '11:30 AM',
      person: 'Jane Smith',
    },
    // Add more reservations as needed
  ];
  