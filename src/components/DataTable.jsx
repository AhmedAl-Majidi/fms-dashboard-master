// import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { expensesData } from "../js/calcBalance";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "month", headerName: "الشهر", width: 120 },
  { field: "balance", headerName: "الرصيد", width: 120 },
];

const rows = [
  { id: 1, month: "يناير", balance: 55 },
  { id: 2, month: "فبراير", balance: 6 },
  { id: 3, month: "مارس", balance: 2 },
  { id: 4, month: "ابريل", balance: 3 },
  { id: 5, month: "مايو", balance: 55 },
  { id: 6, month: "يونيو", balance: 6 },
  { id: 7, month: "يوليو", balance: 2 },
  { id: 8, month: "اغسطس", balance: 3 },
  { id: 9, month: "سبتمبر", balance: 55 },
  { id: 10, month: "اكتوبر", balance: 6 },
  { id: 11, month: "نوفمبر", balance: 2 },
  { id: 12, month: "ديسمبر", balance: 3 },
];

// let rows2 = [];

export default function DataTable() {
  // expensesData.value.map(element => {
  //   rows2.push({ id: element, month: "يناير", balance: 55 })
  // });

  // console.log(rows2);
  // console.log(expensesData.value);

  return (
    <div style={{ height: 425, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 6 },
          },
        }}
        pageSizeOptions={[6, 12]}
        // checkboxSelection
        style={{ fontFamily: "cairo" }}
      />
    </div>
  );
}
