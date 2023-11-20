import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../assets/fonts/font.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "accName", headerName: "اسم الحساب", width: 130 },
  { field: "balance", headerName: "الرصيد", width: 130, type: "number" },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     width: 90,
  //   },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
];

const rows = [
  { id: 1, accName: "المعاينات", balance: 96 },
  { id: 2, accName: "الأشعة", balance: 55 },
  { id: 3, accName: "المختبر", balance: 25 },
  { id: 4, accName: "الاجرائات", balance: 33 },
  { id: 5, accName: "العمليات", balance: 99 },
  { id: 6, accName: "الادوية والمستلزمات", balance: 25 },
  { id: 7, accName: "أخرى", balance: 48 },
];

export default function RevenuesTable() {
  return (
    <div style={{ height: 400, width: "100%", fontFamily: "cairo" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
