// import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { signal } from "@preact/signals-react";
import { getExpensesData, getRevenuesData, subtractArrays } from "../js/calcBalance.js";
import { ApiData } from "../data/glData.js";
import { expensesData, revenuesData, profitsData } from "../js/calcBalance.js";
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
      profitsData.value = subtractArrays(revenuesData.value, expensesData.value)
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

  // Calculating min and max year id coming from API
  const yearIds = ApiData.value.map(item => item.year_id); // [2020,2021,2022,2023,...]
  const maxYearIdApi = Math.max(...yearIds); // 2020,2021,2022,2023 => max is: 2023
  const minYearIdApi = Math.min(...yearIds); // 2020,2021,2022,2023 => min is: 2020


  // https://mui.com/x/react-date-pickers/validation/
  const minYearId = dayjs(`${minYearIdApi}-01-01T00:00:00.000`);
  const maxYearId = dayjs(`${maxYearIdApi}-01-01T00:00:00.000`);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]} >
          <DatePicker
            label={"السنة"}
            views={["year"]}
            onChange={handleChange}
            sx={{ direction: "ltr" }}
            minDate={minYearId}
            maxDate={maxYearId}
          />
        </DemoContainer>
      </LocalizationProvider>

      {/* "invalid year" alert component */}
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
