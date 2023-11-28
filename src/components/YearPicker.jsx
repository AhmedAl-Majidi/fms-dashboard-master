// import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { signal } from "@preact/signals-react";
import { getExpensesData, getRevenuesData } from "../js/calcBalance.js"
import { ApiData } from "../data/glData.js";


export const Year = signal(0);
export const expensesData = signal([]);
export const revenuesData = signal([]);

const data = ApiData.value;

export default function YearPicker() {

  // Handling when year chnged
  const handleChange = (newYear) => {
    const currentDate = dayjs(newYear);
    const formattedYear = parseInt(currentDate.format("YYYY"));
    Year.value = formattedYear;

    expensesData.value = getExpensesData(data, Year.value);
    revenuesData.value = getRevenuesData(data, Year.value);

  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>

        <DatePicker
          label={'السنة'}
          views={["year"]}
          onChange={handleChange}
          sx={{ direction: "ltr" }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

