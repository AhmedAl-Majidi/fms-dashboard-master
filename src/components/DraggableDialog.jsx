import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import DataTable from "./DataTable";
import GlCard from "./GlCard";
import { data1 } from "../data/ApiData";
import cardsTitles from "../data/cardsTitles.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faMoneyBillAlt,
  faReceipt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { Year } from "./YearPicker";
import { Height } from "@mui/icons-material";
import "./component.css";
import { Grid, Box } from "@mui/material";
import Slide from '@mui/material/Slide';


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
// -------------------Transaction-----------------
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// -----------------------------------------
export default function DraggableDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Icon Colores
  //   const cashInBgColor = {
  //     backgroundColor: "rgb(204, 189, 165)"
  //   };
  //     const expenseBgColor = {
  //         backgroundColor: "rgb(255 202 199)"
  //     };


  return (
    <Grid xs={12} sm={6} md={3} marginTop={1} item>
      <Box>
        <React.Fragment>
          <Button
            variant=""
            onClick={handleClickOpen}
            sx={{ height: "130px", width: 300, boxShadow: 5 }}
          >
            <section
              className="container row  justify-content-between"
              style={{ fontFamily: "cairo" }}
            >
              <div className="col-5  d-flex justify-content-center align-items-center fs-1  mb-4 ">
                {props.balance}$
              </div>

              {/* Icon */}
              <div className="col-6">
                <div
                  className="col rounded-circle d-flex justify-content-center align-items-center"
                  style={props.iconColor}
                >
                  <div>{props.icon}</div>
                </div>
                {/* Title */}
                <div className="col fs-6 fw-light">{props.title}</div>
              </div>
            </section>
          </Button>
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
            <DialogTitle style={{ cursor: "move", textAlign: "center", fontFamily: "cairo" }} id="draggable-dialog-title">
              {props.dialogTitle} تفصيلي
            </DialogTitle>
            <DialogContent>
              {/* <DialogContentText> */}
              <DataTable />
              {/* </DialogContentText> */}
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} style={{ fontFamily: "cairo" }}>
                خروج
              </Button>
              {/* <Button onClick={handleClose}>Subscribe</Button> */}
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </Box>
    </Grid>
  );
}
