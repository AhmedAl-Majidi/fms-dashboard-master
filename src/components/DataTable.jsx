import { DataGrid } from "@mui/x-data-grid";
import { getMonthName } from "../js/helpers.js";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "month", headerName: "الشهر", width: 120 },
  { field: "balance", headerName: "الرصيد", width: 120 },
];

export default function DataTable(props) {
  // Populating rows array from expensesData signal
  let rows = [];
  if (props.balanceDtl != null) {
    let id = 0;
    rows = props.balanceDtl.map((i) => {
      id += 1;
      return { id: id, month: getMonthName(id), balance: i };
    });

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
}
