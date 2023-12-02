// import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { signal } from "@preact/signals-react";
import { getExpensesData, getRevenuesData } from "../js/calcBalance.js";
import { ApiData } from "../data/glData.js";
import { expensesData, revenuesData } from "../js/calcBalance.js";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export const Year = signal(0);


const data = ApiData.value;

export default function YearPicker() {
  const [showAlert, setShowAlert] = useState(false);
  const [open, setOpen] = useState(false);

  // Handling when year chnged year
  const handleChange = (newYear) => {


    Year.value = dayjs(newYear).$y; // YYYY

    if (data.find((item) => item.year_id === Year.value)) {
      // Hide "invlid year" alert
      setShowAlert(false);
      setOpen(false);

      expensesData.value = getExpensesData(data, Year.value);
      revenuesData.value = getRevenuesData(data, Year.value);
    } else {

      // Show "invlid year" alert
      setShowAlert(true);
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };


  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label={"السنة"}
            views={["year"]}
            onChange={handleChange}
            sx={{ direction: "ltr" }}
          />
        </DemoContainer>
      </LocalizationProvider>
      {showAlert && (
        <Stack
          spacing={2}
        // sx={{ width: "100%" }}
        >
          <Snackbar open={open} autoHideDuration={6000} onClick={handleClose}>
            <Alert
              severity="error"
              // sx={{ width: "100%" }}
              onClick={handleClose}
            >
              لا توجد بيانات للسنة المدخلة
            </Alert>
          </Snackbar>
        </Stack>
      )}
    </>
  );
}
