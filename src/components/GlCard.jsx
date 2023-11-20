import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Grid, createTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
import "../assets/fonts/font.css";

export default function GlCard(props) {
  // const theme = useTheme();

  const theme2 = createTheme();

  theme2.typography.h3 = {
    fontSize: "1.5rem",
    [theme2.breakpoints.up("md")]: {
      fontSize: "2.2rem",
    },
  };

  //   Expand more
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Card
      sx={{
        marginY: 1,
        // minWidth: 275,
        // maxWidth: 300,
        // maxHeight: 200,
        overflow: "hidden",
      }}
    >
      <div className="container">
        <CardContent sx={{ overflow: "hidden" }}>
          <section className="row flex flex-row">
            <div className=" col-6  d-flex justify-content-center align-items-center ">
              <Typography
                theme={theme2}
                variant="h3"
                align="center"
                fontWeight={"bold"}
                fontFamily={"cairo"}
              >
                {props.balance} $
              </Typography>
            </div>
            <div className=" col-6">
              <div className="col bg-warning rounded-circle">
                {/* Icon */}
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  className="icon"
                  // height={60}
                  // width={100}
                >
                  {props.icon}
                </Typography>
              </div>
              <div className="col">
                {/* Title */}
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  className="title text-secondary"
                  fontSize={"15px"}
                  fontFamily={"cairo"}
                >
                  {props.title}
                </Typography>
              </div>
            </div>
          </section>
          <section className="row ">
            <div className="col-4">
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </div>
          </section>
          {/*Expanded data */}
          <section className=" row">
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Divider flexItem />
              <CardContent>
                <section className="row">
                  <div className="col">
                    <Typography fontFamily={"cairo"}>
                      {props.boxesDtlName} :
                    </Typography>
                  </div>
                  <div className="col text-bold">
                    <Typography fontFamily={"cairo"}>
                      {props.boxesDtlBalance} $
                    </Typography>
                  </div>
                </section>
                <section className="row">
                  <div className="col">
                    <Typography fontFamily={"cairo"}>
                      {props.banksDtlName} :
                    </Typography>
                  </div>
                  <div className="col text-bold">
                    <Typography fontFamily={"cairo"}>
                      {props.banksDtlBalance} $
                    </Typography>
                  </div>
                </section>
              </CardContent>
            </Collapse>
          </section>
        </CardContent>
      </div>
    </Card>
  );
}
