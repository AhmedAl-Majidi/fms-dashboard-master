import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Year } from "./Period";
import dayjs from "dayjs";

export default function YearPicker() {
  // const initialYear = 2023;
  // const [selectedDate, setSelectedDate] = useState(
  //   dayjs(new Date(`${initialYear}-01-01`)).format("YYYY")
  // );
  // console.log("select date:  " + selectedDate);
  const handleChange = (newDate) => {
    const dateObject = new Date(newDate);
    // setSelectedDate(dateObject.getFullYear());

    console.log((Year.value = dateObject.getFullYear()));
    // console.log(selectedDate);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          // label={'"month" and "year"'}
          views={["year"]}
          // defaultValue={2023}
          onChange={handleChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
