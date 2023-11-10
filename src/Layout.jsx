import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import FromMonthYear from "./FromMonthYear";
import ToMonthYear from "./ToMonthYear";
// import { fromMonth, fromYear } from "./Period";
import Refresh from "./Refresh";
import YearPicker from "./YearPicker";
import BasicCard from "./BasicCard";
import cardsTitles from "./data/cardsTitles.json";
// Icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import DoneIcon from "@mui/icons-material/Done";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faMoneyBillAlt,
  faReceipt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

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
        {/*<Grid item xs={12} md={4}>
          <Box height boxShadow={4} borderRadius={8} p={2}>
            <PieChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box height boxShadow={4} borderRadius={8} p={2}>
            <LineChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box height>
            <YearPicker />
            <FromMonthYear />
            <ToMonthYear />
            <Refresh />
          </Box>
      </Grid>*/}
        <Grid item xs={8} md={3}>
          <Box>
            <BasicCard
              title={cardsTitles.revenues.name}
              // icon={<CallReceivedIcon sx={{ color: "#77DD77 " }} />}
              icon={
                <FontAwesomeIcon
                  icon={faMoneyBillAlt}
                  style={{ color: "#77DD77" }}
                  size="2x"
                />
              }
              balance={cardsTitles.cashIn.balance}
            />
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box>
            <BasicCard
              title={cardsTitles.expenses.name}
              // icon={<CallMadeIcon sx={{ color: "#FF6961" }} />}
              icon={
                <FontAwesomeIcon
                  icon={faReceipt}
                  style={{ color: "#FF6961" }}
                  size="2x"
                />
              }
              balance={cardsTitles.expenses.balance}
            />
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box>
            <BasicCard
              title={cardsTitles.profit.name}
              // icon={<DoneIcon sx={{ color: "#FFD700" }} />}
              icon={
                <FontAwesomeIcon
                  icon={faChartLine}
                  style={{ color: "#FFD700" }}
                  size="2x"
                />
              }
              balance={cardsTitles.profit.balance}
            />
          </Box>
        </Grid>
        <Grid item xs={8} md={3}>
          <Box>
            <BasicCard
              title={cardsTitles.cashIn.name}
              // icon={<AttachMoneyIcon sx={{ color: "#87CEEB" }} />}
              icon={
                <FontAwesomeIcon
                  icon={faSackDollar}
                  style={{ color: "#704700" }}
                  size="2x"
                />
              }
              balance={cardsTitles.cashIn.balance}
              boxesDtlName={cardsTitles.cashIn.details.boxes.name}
              boxesDtlBalance={cardsTitles.cashIn.details.boxes.balance}
              banksDtlName={cardsTitles.cashIn.details.banks.name}
              banksDtlBalance={cardsTitles.cashIn.details.banks.balance}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
