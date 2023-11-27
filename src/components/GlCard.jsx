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
import { ApiData } from "../data/glData";
import cardsData from "../data/cardsData.json";
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
import numeral from 'numeral';
import ListAltSharpIcon from '@mui/icons-material/ListAltSharp';
import Card from '@mui/material/Card';

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
    return numeral(props.balance).format('0.0a');
  }

  return (
    // <Grid xs={12} sm={6} md={3} marginTop={1} item>
    //   <Box>
    <div className="col-sm-6 col-md-6 col-lg-3 mb-2">
      <React.Fragment>
        <Card sx={{ boxShadow: 5 }} >
          <section
            className="container row p-3"
            style={{ fontFamily: "cairo" }}
          >
            {/*------------------------------ balance ------------------------------*/}
            <div className="col-7 d-flex flex-column m-auto" style={{ fontFamily: "oswald" }}>
              <div className="col text-bold numbersFont text-center">
                {formattedBalance()}
              </div>

              {/* ----------------------- Show Details Button ------------------------- */}
              <div className="col text-center mt-3">
                <Button size="medium" variant="outlined" sx={{ fontFamily: "cairo", padding: "2px", paddingRight: "5px" }}
                  endIcon={<ListAltSharpIcon sx={{ marginRight: "8px" }} />}
                  onClick={handleClickOpen}>
                  عرض التفاصيل</Button>
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
              {/*------------------------------ Title ------------------------------  */}
              <div className="col fs-6  text-black-50">{props.title}</div>
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
          <DialogTitle style={{ cursor: "move", textAlign: "center", fontFamily: "cairo" }} id="draggable-dialog-title">
            {props.dialogTitle} تفصيلي
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText> */}
            <DataTable monthBalance={props.monthBalance} />
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
    </div >
    //   </Box>
    // </Grid>
  );
}
