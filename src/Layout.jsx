import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import PieChart from "./PieChart2";
// import LineChart from "./LineChart";
// import { fromMonth, fromYear } from "./Period";
import YearPicker from "./components/YearPicker";
import cardsTitles from "./data/cardsTitles.json";
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
import { data1 } from "./data/ApiData";
import GlCard from "./components/GlCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
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
    <div className="container">
      {/*------------------------------------Year Picker------------------------------------ */}
      <section className="row col mb-2">
        <div className="d-flex justify-content-center align-items-center">
          <span className="mx-2">السنة</span>
          <YearPicker />
        </div>
      </section>

      {/*==================================Cards=========================================*/}
      <section className="row">
        {/*---------------------------------------Revenues-------------------------------------*/}
        <div className="col-sm-12 col-md-3 ">
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
        </div>

        {/*----------------------------------Expense------------------------------------------*/}
        <div className="col-sm-12 col-md-3">
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
        </div>

        {/*-----------------------------------Profit-----------------------------------------*/}
        <div className="col-sm-12 col-md-3">
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
        </div>

        {/*----------------------------------Cash In------------------------------------------*/}
        <div className="col-sm-12 col-md-3">
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
        </div>
      </section>

      {/* =================================Charts=======================================*/}

      <section className="row mt-3">
        {/*----------------------------------PieChart------------------------------------------*/}

        <div className="col-sm-12 col-md-5 mb-4">
          <PieChart year={Year.value} />
        </div>
        {/*---------------------------------ChartMonth-------------------------------------------*/}

        <div className="col-sm-12 col-md-7">
          <ChartMonth year={Year.value} />
        </div>
      </section>
    </div>
  );
}
