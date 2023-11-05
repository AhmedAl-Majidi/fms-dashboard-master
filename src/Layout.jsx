import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import RefreshBtn from "./RefreshBtn";
import Counter from "./Counter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
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
          <Item>
            <PieChart />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <LineChart />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item></Item>
        </Grid>
        {/*<Grid item xs={12} md={4}>
          <Item>
            <RefreshBtn />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Counter />
          </Item>
      </Grid>*/}
      </Grid>
    </Box>
  );
}
