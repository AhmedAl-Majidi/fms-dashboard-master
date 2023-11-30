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
import Button from "@mui/material/Button";
import { useState } from "react";

export const Year = signal(0);
export const showGlLayout = signal(true);
// export const expensesData = signal([]);
// export const revenuesData = signal([]);

const data = ApiData.value;

export default function YearPicker() {
  const [showAlert, setShowAlert] = useState(false);
  const [open, setOpen] = useState(false);
  // Handling when year chnged year

  const handleChange = (newYear) => {
    const currentDate = dayjs(newYear);
    const formattedYear = parseInt(currentDate.format("YYYY"));
    Year.value = formattedYear;
    if (data.find((item) => item.year_id === formattedYear)) {
      // alert(1);
      setShowAlert(false);
      showGlLayout.value = true;
      setOpen(false);

      expensesData.value = getExpensesData(data, Year.value);
      revenuesData.value = getRevenuesData(data, Year.value);
    } else {
      // alert(2);
      setShowAlert(true);
      setOpen(true);
      showGlLayout.value = false;
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
