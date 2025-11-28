/**
=========================================================
* Attendance Calendar Component
=========================================================
* 
* Replaces the Academic Performance chart with an attendance calendar
* Displays monthly attendance with present/absent indicators
*/

import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import "./attendance-calendar.css";

function AttendanceCalendar({ studentId }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  
  // Default to current month
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // DEV-MOCK: Temporary mock data for development
  // Remove this when API is integrated
  const mockAttendanceData = useMemo(() => {
    if (process.env.NODE_ENV === "development") {
      const today = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const mockData = {};
      
      // Generate mock data: 80% present rate
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        // Skip future dates
        if (date > today) continue;
        // Skip weekends (optional - adjust as needed)
        const dayOfWeek = date.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) continue;
        
        // 80% chance of being present
        mockData[day] = Math.random() > 0.2 ? "present" : "absent";
      }
      return mockData;
    }
    return {};
  }, [currentDate]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // Convert Sunday (0) to 7 for Monday-first week
  const firstDayMonday = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;
  
  // Check if current month is present or future
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const isCurrentOrFutureMonth = year > currentYear || (year === currentYear && month >= currentMonth);
  
  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };
  
  const goToNextMonth = () => {
    if (!isCurrentOrFutureMonth) {
      setCurrentDate(new Date(year, month + 1, 1));
    }
  };
  
  // Get attendance status for a day
  const getAttendanceStatus = (day) => {
    // TODO: Replace with actual API call
    // const attendance = await fetchAttendance(studentId, year, month, day);
    return mockAttendanceData[day] || null;
  };
  
  // Render week headers
  const renderWeekHeaders = () => {
    const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return dayNames.map((dayName) => (
      <div key={`header-${dayName}`} className="apa-weekhead">
        {dayName}
      </div>
    ));
  };
  
  // Render calendar grid - only days 1..N for the month
  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells at the start to align first day of month with Monday
    for (let i = 1; i < firstDayMonday; i++) {
      days.push(
        <div key={`empty-${i}`} className="apa-day" />
      );
    }
    
    // Days of the month (1..daysInMonth)
    for (let day = 1; day <= daysInMonth; day++) {
      const status = getAttendanceStatus(day);
      const date = new Date(year, month, day);
      const dateStr = date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      
      let statusText = "No data";
      if (status === "present") {
        statusText = "Present";
      } else if (status === "absent") {
        statusText = "Absent";
      }
      
      const ariaLabel = `${dateStr}, ${statusText}`;
      
      days.push(
        <div
          key={`day-${day}`}
          role="gridcell"
          aria-label={ariaLabel}
          className={`apa-day ${
            status === "present" ? "apa-present" :
            status === "absent" ? "apa-absent" :
            "apa-nodata"
          }`}
        >
          <div className="apa-dot">
            <span className="apa-daynum">{day}</span>
          </div>
        </div>
      );
    }
    
    // Calculate empty cells at the end to complete the grid (optional, for visual balance)
    const totalCells = firstDayMonday - 1 + daysInMonth;
    const remainingCells = totalCells % 7;
    const emptyEndCells = remainingCells === 0 ? 0 : 7 - remainingCells;
    for (let i = 0; i < emptyEndCells; i++) {
      days.push(
        <div key={`empty-end-${i}`} className="apa-day" />
      );
    }
    
    return days;
  };
  
  return (
    <SoftBox className="academic-performance-attendance" role="grid" aria-label={`Attendance calendar for ${monthNames[month]} ${year}`} data-dark-mode={isDarkMode}>
      <SoftBox className="apa-header">
        <button
          type="button"
          className="apa-nav"
          onClick={goToPreviousMonth}
          aria-label="Previous month"
        >
          <Icon fontSize="small">chevron_left</Icon>
        </button>
        <SoftTypography className="apa-title">
          {monthNames[month]} {year}
        </SoftTypography>
        <button
          type="button"
          className={`apa-nav ${isCurrentOrFutureMonth ? "disabled" : ""}`}
          onClick={goToNextMonth}
          disabled={isCurrentOrFutureMonth}
          aria-label="Next month"
          aria-disabled={isCurrentOrFutureMonth}
        >
          <Icon fontSize="small">chevron_right</Icon>
        </button>
      </SoftBox>
      
      <SoftBox className="apa-weekhead">
        {renderWeekHeaders()}
      </SoftBox>
      <SoftBox className="apa-days">
        {renderCalendarDays()}
      </SoftBox>
    </SoftBox>
  );
}

AttendanceCalendar.defaultProps = {
  studentId: null,
};

AttendanceCalendar.propTypes = {
  studentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AttendanceCalendar;
