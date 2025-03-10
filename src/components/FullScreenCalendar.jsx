import React, { useState } from "react";
import "../assets/css/FullScreenCalendar.css";

const FullScreenCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  
  const today = new Date();
  const isToday = (day) => {
    return (
      day === today.getDate() &&
      year === today.getFullYear() &&
      month === today.getMonth()
    );
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div key={day} className={`calendar-day ${isToday(day) ? "today" : ""}`}>
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="fullscreen-calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>◀</button>
        <h2>{year}년 {month + 1}월</h2>
        <button onClick={handleNextMonth}>▶</button>
      </div>
      <div className="calendar-grid">
        {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
          <div key={index} className="calendar-day-header">{day}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default FullScreenCalendar;