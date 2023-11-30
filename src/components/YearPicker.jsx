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
import { useState } from "react";

export const Year = signal(0);
export const showGlLayout = signal(true);
// export const expensesData = signal([]);
// export const revenuesData = signal([]);

const data = ApiData.value;

export default function YearPicker() {
  const [showAlert, setShowAlert] = useState(false);

  // Handling when year chnged year

  const handleChange = (newYear) => {
    const currentDate = dayjs(newYear);
    const formattedYear = parseInt(currentDate.format("YYYY"));
    Year.value = formattedYear;
    if (data.find((item) => item.year_id === formattedYear)) {
      // alert(1);
      setShowAlert(false);
      showGlLayout.value = true;

      expensesData.value = getExpensesData(data, Year.value);
      revenuesData.value = getRevenuesData(data, Year.value);
    } else {
      // alert(2);
      setShowAlert(true);
      showGlLayout.value = false;
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
        <Alert
          variant="outlined"
          severity="error"
          sx={{ marginTop: 1, marginRight: 1 }}
        >
          لا توجد بيانات للسنة المدخلة
        </Alert>
      )}
    </>
  );
}
