import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Year } from "./Period";

export default function YearPicker() {
  const handleChange = (newDate) => {
    const dateObject = new Date(newDate);
    Year.value = dateObject.getFullYear();
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          // label={'"month" and "year"'}
          views={["year"]}
          onChange={handleChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
