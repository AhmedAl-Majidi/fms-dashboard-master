import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import PieChart from "./PieChart2";
// import LineChart from "./LineChart";
import YearPicker from "./components/YearPicker";
import cardsData from "./data/cardsData.json";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faMoneyBillAlt,
  faReceipt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import ChartMonth from "./components/ChartMonth";
import { Year } from "./components/YearPicker";
import { PieChart } from "./components/PieChart";
import { ApiData } from "./data/glData";
import GlCard from "./components/GlCard";
// import { RevenuesIcon } from "../src/assets/icons/RevenuesIcon.svg"
import Draggable from "react-draggable";
import Globe from "./components/Globe";
import "../src/App.css";
import DataTable from "./components/DataTable";
import { Container, Grid } from "@mui/material";
import { subSystems, subSysId } from "../src/data/subsytems.js"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function GlLayout() {
  // abood
  const data = ApiData.value;
  const getRevenuesData = (propData, id) => {
    const object = propData.find((item) => item.year_id === id);
    return object ? object.dataE : [];
  };

  const getExpensesData = (propData, id) => {
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

  // Icon Colores
  const revenuesBgColor = {
    backgroundColor: "rgb(203 255 203)",
    height: "82px",
  };
  const expenseBgColor = {
    backgroundColor: "rgb(255 202 199)",
    height: "82px",
  };
  const profitsBgColor = {
    backgroundColor: "rgb(255 245 193)",
    height: "82px",
  };
  const cashInBgColor = {
    backgroundColor: "rgb(204, 189, 165)",
    height: "82px",
  };

  return (
    <div
      className={subSysId.value == 1 ? "container" : "d-none"}
    >
      {/*------------------------------------Year Picker------------------------------------ */}
      <section className="row col mb-2">
        <div className="d-flex justify-content-center align-items-center">
          {/* <span className="mx-2">السنة</span> */}
          <YearPicker />
        </div>
      </section>

      {/*==================================Cards2=========================================*/}
      <section className="row mb-4">
        {/*---------------------------------------Revenues-------------------------------------*/}
        <GlCard
          icon={
            <FontAwesomeIcon
              icon={faMoneyBillAlt}
              style={{ color: "#77DD77", fontSize: "55px" }}
            // size="3x"
            />
          }
          iconColor={revenuesBgColor}
          title={cardsData.revenues.name}
          balance={sumArrays(getRevenuesData(data, Year.value))}
          dialogTitle={cardsData.revenues.name}
          monthBalance={getRevenuesData(data, Year.value)}
        />
        {/*----------------------------------Expense------------------------------------------*/}
        <GlCard
          icon={
            <FontAwesomeIcon
              icon={faReceipt}
              style={{ color: "#FF6961", fontSize: "55px" }}
            // size="3x"
            />
          }
          iconColor={expenseBgColor}
          title={cardsData.expenses.name}
          balance={sumArrays(getExpensesData(data, Year.value))}
          dialogTitle={cardsData.expenses.name}
        />

        {/*-----------------------------------Profit-----------------------------------------*/}
        <GlCard
          icon={
            <FontAwesomeIcon
              icon={faChartLine}
              style={{ color: "#FFD700", fontSize: "55px" }}
            // size="3x"
            />
          }
          iconColor={profitsBgColor}
          title={cardsData.profit.name}
          balance={
            sumArrays(getRevenuesData(data, Year.value)) -
            sumArrays(getExpensesData(data, Year.value))
          }
          dialogTitle={cardsData.profit.name}
        />
        {/*----------------------------------Cash In------------------------------------------*/}
        <GlCard
          icon={
            <FontAwesomeIcon
              icon={faSackDollar}
              style={{ color: "#704700", fontSize: "55px" }}
            // size="3x"
            />
          }
          iconColor={cashInBgColor}
          title={cardsData.cashIn.name}
          balance={sumArrays(getRevenuesData(data, Year.value))}
          dialogTitle={cardsData.cashIn.name}
        />
      </section>


      {/* =================================Charts=======================================*/}

      <section className="row mt-3">
        {/*----------------------------------PieChart------------------------------------------*/}

        <div className="col-sm-12 col-lg-5 mb-4">
          <PieChart year={Year.value} />
        </div>
        {/*---------------------------------ChartMonth-------------------------------------------*/}

        <div className="col-sm-12 col-lg-7">
          <ChartMonth year={Year.value} />
        </div>
      </section>
    </div>
  );
}
