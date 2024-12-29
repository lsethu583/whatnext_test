import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Bell, Menu } from 'lucide-react';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

export default function BookingPage() {

    const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Generate dates for the week
  const getDatesForWeek = (date) => {
    const week = [];
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay()); // Start from Sunday

    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      week.push(day);
    }
    return week;
  };

  // Generate time slots
  const timeSlots = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    status: Math.random() > 0.7 
      ? 'unavailable' 
      : Math.random() > 0.5 
        ? 'booked' 
        : 'available'
  }));

  const getStatusColor = (status) => {
    switch (status) {
      case 'unavailable':
        return 'bg-gray-300 cursor-not-allowed';
      case 'booked':
        return 'bg-red-500 cursor-not-allowed';
      case 'available':
        return 'bg-white hover:bg-green-100 cursor-pointer';
      case 'selected':
        return 'bg-green-500 text-white';
      default:
        return 'bg-white';
    }
  };

  const handleSlotClick = (slot) => {
    if (slot.status === 'available') {
      setSelectedSlot(slot.id === selectedSlot ? null : slot.id);
    }
  };

  const handlePayment = () => {
    if (selectedSlot) {
      navigate('/payment');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
     <Navbar />
      {/* Booking Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Mentor Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Sethulakshmi</h2>
          <p className="text-gray-400">Software-developer</p>
        </div>

        {/* Calendar Navigation */}
        <div className="flex items-center justify-between mb-8 bg-gray-900 p-4 rounded-lg">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <div className="flex gap-4">
            {getDatesForWeek(selectedDate).map((date, index) => (
              <div
                key={index}
                className={`text-center cursor-pointer p-2 rounded ${
                  date.toDateString() === selectedDate.toDateString()
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800'
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <div className="text-sm">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                <div className="font-bold">{date.getDate()}</div>
                <div className="text-sm">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
              </div>
            ))}
          </div>

          <button className="p-2 hover:bg-gray-800 rounded-full">
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Time Slots Grid */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => handleSlotClick(slot)}
              disabled={slot.status !== 'available'}
              className={`
                p-4 rounded-lg text-center font-medium transition-colors
                ${getStatusColor(slot.id === selectedSlot ? 'selected' : slot.status)}
              `}
            >
              {slot.id}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span className="text-gray-400">Unavailable</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-gray-400">Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded"></div>
            <span className="text-gray-400">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-gray-400">Selected</span>
          </div>
        </div>

        {/* Pay Now Button */}
        <div className="text-center">
        <button
            onClick={handlePayment}
            disabled={!selectedSlot}
            className={`
              px-8 py-3 rounded-lg font-medium
              ${
                selectedSlot
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
}

