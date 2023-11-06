import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

const Calendar = ({ onDateRangeChange }) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleRangeChange = (ranges) => {
    setDateRange([ranges.selection]);
    if (onDateRangeChange) {
      onDateRangeChange(ranges.selection);
    }
  };

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={handleRangeChange}
        moveRangeOnFirstSelection={false}
        ranges={dateRange}
      />
    </div>
  );
};

export default Calendar;
