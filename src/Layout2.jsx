import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import PieChart from "./PieChart2";
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
import ChartMonth from "./ChartMonth";
import { Year } from "./Period";
import { PieChart } from "./PieChart";
import { data1 } from "./data/ApiData";
import { Divider } from "@mui/material";
import GlCard from "./GlCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
}));

export default function Layout() {
  // abood
  const data = data1.value;
  const getDataByEirad = (propData, id) => {
    const object = propData.find((item) => item.year_id === id);
    return object ? object.dataE : [];
  };

  const getDataByMasrof = (propData, id) => {
    const object = propData.find((item) => item.year_id === id);
    return object ? object.dataM : [];
  };

  const sumArrays = (arr) => {
    const sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  };

  // end abood
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        // spacing={2}
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        {/*------------------------------------Year Picker------------------------------------ */}
        <Grid item xs={12} md={2}>
          <Box>
            <YearPicker />
          </Box>
        </Grid>
      </Grid>
      {/*==================================Cards=========================================*/}
      <Grid
        container
        // spacing={2}
        mt={1}
      >
        {/*---------------------------------------Revenues-------------------------------------*/}
        <Grid item xs={12} md={3}>
          <Box>
            {" "}
            <GlCard
              title={cardsTitles.revenues.name}
              icon={
                <FontAwesomeIcon
                  icon={faMoneyBillAlt}
                  style={{ color: "#77DD77" }}
                  size="2x"
                />
              }
              balance={sumArrays(getDataByEirad(data, Year.value))}
            />
          </Box>
        </Grid>
        {/*----------------------------------Expense------------------------------------------*/}
        <Grid item xs={12} md={3}>
          <Box>
            <GlCard
              title={cardsTitles.expenses.name}
              icon={
                <FontAwesomeIcon
                  icon={faReceipt}
                  style={{ color: "#FF6961" }}
                  size="2x"
                />
              }
              balance={sumArrays(getDataByMasrof(data, Year.value))}
            />
          </Box>
        </Grid>
        {/*-----------------------------------Profit-----------------------------------------*/}
        <Grid item xs={12} md={3}>
          <Box>
            <GlCard
              title={cardsTitles.profit.name}
              icon={
                <FontAwesomeIcon
                  icon={faChartLine}
                  style={{ color: "#FFD700" }}
                  size="2x"
                />
              }
              balance={
                sumArrays(getDataByEirad(data, Year.value)) -
                sumArrays(getDataByMasrof(data, Year.value))
              }
            />
          </Box>
        </Grid>
        {/*----------------------------------Cash In------------------------------------------*/}
        <Grid item xs={12} md={3}>
          <Box>
            <GlCard
              title={cardsTitles.cashIn.name}
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

      {/* =================================Charts=======================================*/}
      <Grid
        container
        // spacing={2}
        mt={2}
        // sx={{
        //   //   flexGrow: 1,
        //   display: "flex",
        //   //   justifyContent: "center",
        // }}
        boxShadow={4}
        borderRadius={8}
        p={2}
      >
        {/*----------------------------------PieChart------------------------------------------*/}
        <Grid height item xs={12} md={3}>
          <Box height>
            <PieChart year={Year.value} />
          </Box>
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem />
        {/*---------------------------------ChartMonth-------------------------------------------*/}
        <Grid item xs={12} md={8} mt={8}>
          <Box>
            <ChartMonth year={Year.value} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
