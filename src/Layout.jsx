import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import YearMonthCalendar from "./YearMonthCalendar";
import MonthPicker from "@mui/lab/MonthPicker";
// import MonthPicker from "@mui/lab/DateRangePicker/MonthPicker";
// import { MonthPickerComponent } from "@mui/lab";
// import { MonthPickerComponent } from "@mui/lab";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={4}>
          <Box height boxShadow={4} borderRadius={8} p={2}>
            <PieChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box height boxShadow={4} borderRadius={8} p={2}>
            <LineChart />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
