import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { toMonth } from "./Period";

export default function ToMonthYear() {
  const handleChange = (newDate) => {
    const dateObject = new Date(newDate);
    // const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Month is zero-based, so we add 1

    toMonth.value = month;
    // toYear.value = year;
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        {/*<DatePicker
          label={'"year", "month" and "day"'}
          views={["year", "month", "day"]}
        />
        <DatePicker label={'"day"'} views={["day"]} />*/}
        <DatePicker
          // label={'"month" and "year"'}
          views={["month"]}
          onChange={handleChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
