import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { fromMonth } from "./Period";

// import { from } from "stylis";
// const fromMonth = signal();

export default function FromMonthYear() {
  const handleChange = (newDate) => {
    const dateObject = new Date(newDate);
    // const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Month is zero-based, so we add 1

    fromMonth.value = month;
    // fromYear.value = year;
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
