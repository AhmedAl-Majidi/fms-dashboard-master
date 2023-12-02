import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import DataTable from "./DataTable";
import "./component.css";
import Slide from "@mui/material/Slide";
import numeral from "numeral";
import ListAltSharpIcon from "@mui/icons-material/ListAltSharp";
import Card from "@mui/material/Card";
import AnimatedNumbers from "react-animated-numbers";
import { expensesData, sumArrays } from "../js/calcBalance";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
// ------------------- Data Table Transaction-----------------
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// --------------------------GlCard----------------------------------
export default function GlCard(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formattedBalance = () => {
    return numeral(props.balance).format("0.00a");
  };

  return (
    <div className="col-sm-6 col-md-6 col-lg-3 mb-2">
      <React.Fragment>
        <Card sx={{ boxShadow: 5 }}>
          <section
            className="row p-3"
            style={{ fontFamily: "cairo" }}
          >
            {/*------------------------------ balance ------------------------------*/}
            <div
              className="col-7 d-flex flex-column m-auto"
              style={{ fontFamily: "oswald" }}
            >
              <div
                className="col text-bold numbersFont text-center d-flex justify-content-center"
                style={{ direction: "ltr" }}
              >
                {/* {formattedBalance()} */}
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.2,
                  })}
                  animateToNumber={parseFloat(formattedBalance())}
                />
                <span>{formattedBalance().match(/[kKmMbB]$/)}</span>
              </div>

              {/* ----------------------- Show Details Button ------------------------- */}
              <div className="col text-center mt-3">
                <Button
                  size="medium"
                  variant="outlined"
                  sx={{
                    fontFamily: "cairo",
                    padding: "2px",
                    paddingRight: "5px",
                  }}
                  endIcon={<ListAltSharpIcon sx={{ marginRight: "8px" }} />}
                  onClick={handleClickOpen}
                >
                  عرض التفاصيل
                </Button>
              </div>
            </div>

            <div className="col-5 d-flex flex-column justify-content-center align-items-center">
              {/*------------------------------ Icon ------------------------------ */}
              <div
                className="col-10 rounded-circle d-flex icon justify-content-center align-items-center"
                style={props.iconColor}
              >
                <div>{props.icon}</div>
              </div>
              {/*------------------------------ Name ------------------------------  */}
              <div className="col fs-6  text-black-50 py-1">{props.title}</div>
            </div>
          </section>
        </Card>

        {/* ------------------------Data Table Dialog------------------------- */}
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
          // Trasnaction
          TransitionComponent={Transition}
          keepMounted
        // -------
        >
          <DialogTitle
            style={{ cursor: "move", textAlign: "center", fontFamily: "cairo" }}
            id="draggable-dialog-title"
          >
            {props.dialogTitle} تفصيلي
          </DialogTitle>
          <DialogContent>
            <DataTable balanceDtl={props.monthBalance} />
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
              style={{ fontFamily: "cairo" }}
            >
              خروج
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
}
