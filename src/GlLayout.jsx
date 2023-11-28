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
import { PieChart } from "./components/PieChart";
import GlCard from "./components/GlCard";
import "../src/App.css";
import { subSysId } from "../src/data/subsytems.js";
import { expensesData, revenuesData, Year } from "./components/YearPicker";
import { sumArrays } from "./js/calcBalance.js";
import { iconsBgStyle } from "./assets/icons/icons.js"


export default function GlLayout() {

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

      {/*================================== Cards =========================================*/}
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
          iconColor={iconsBgStyle.revenues}
          title={cardsData.revenues.name}
          balance={sumArrays(revenuesData.value)}
          dialogTitle={cardsData.revenues.name}
          monthBalance={revenuesData.value}
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
          iconColor={iconsBgStyle.expenses}
          title={cardsData.expenses.name}
          balance={sumArrays(expensesData.value)}
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
          iconColor={iconsBgStyle.profits}
          title={cardsData.profit.name}
          balance={
            sumArrays(revenuesData.value) - sumArrays(expensesData.value)
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
          iconColor={iconsBgStyle.cashIn}
          title={cardsData.cashIn.name}
          balance={sumArrays(revenuesData.value)}
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
