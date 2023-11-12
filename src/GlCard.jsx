import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";

export default function GlCard(props) {
  const theme = useTheme();

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
      sx={{ minWidth: 275, maxWidth: 300, maxHeight: 200, overflow: "hidden" }}
    >
      <div className="container  flex-shrink-0">
        <CardContent sx={{ overflow: "hidden" }}>
          <section className="row flex flex-row  flex-shrink-0">
            <div className=" col-6   ">
              <Typography variant="h3" align="center" fontWeight={"bold"}>
                {props.balance} $
              </Typography>
            </div>
            <div className=" col-6   ">
              <div className="col">
                {/* Icon */}
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  className="icon"
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
        </CardContent>
        {/*Expanded data */}
        <section className="row bg-light">
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Box>
                {props.boxesDtlName} :{props.boxesDtlBalance}
              </Box>
              <Box>
                {props.banksDtlName} :{props.banksDtlBalance}
              </Box>
            </CardContent>
          </Collapse>
        </section>
      </div>
    </Card>
  );
}