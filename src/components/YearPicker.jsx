// import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { signal } from "@preact/signals-react";
import { Typography } from "@mui/material";


export const Year = signal(0);

export default function YearPicker() {
  // Handling when year chnged
  const handleChange = (newYear) => {
    const currentDate = dayjs(newYear);
    const formattedYear = parseInt(currentDate.format("YYYY"));

    Year.value = formattedYear;
  };

  const typographyStyle = {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '5px',
    fontFamily: 'cairo',
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        {/* <Typography style={typographyStyle}>
          السنة
        </Typography> */}
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

