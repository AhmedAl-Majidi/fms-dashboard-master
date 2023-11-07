import {
  fromMonth,
  //   fromYear,
  Year,
  toMonth,
  //   toYear,
  calculateMonthDifference,
  monthSeries,
  updateZ,
} from "./Period";
import Button from "@mui/material/Button";

export default function Refresh() {
  return (
    <div>
      <Button
        variant="contained"
        onDoubleClick={() => monthSeries()}
        onClick={() =>
          console.log(calculateMonthDifference(Year, fromMonth, toMonth))
        }
      >
        Refrsh
      </Button>
      <Button variant="contained" onClick={() => monthSeries()}>
        x
      </Button>
      <Button variant="contained" onClick={() => updateZ()}>
        z
      </Button>
    </div>
  );
}
