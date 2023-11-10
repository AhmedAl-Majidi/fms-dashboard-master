import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Visibility } from "@mui/icons-material";
// import CardContent from "@mui/material/CardContent";
import "./BasicCard.css";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function BasicCard(props) {
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
        borderRadius: 5,
        boxShadow: 2,
        minWidth: 275,
        maxWidth: 300,
        transition: "transform 0.3s ease-in-out", // Add transition property for transform
        "&:hover": {
          backgroundColor: "#f0f0f0",
          transform: "translateY(-5px)",
          animation: "hoverAnimation 0.3s ease-in-out",
          cursor: "pointer",
        },
      }}
      className="card"
    >
      <CardContent>
        {/*<Typography variant="h5" component="div" align="center">
          {props.title}
          {props.icon}
    </Typography>*/}
        <box>
          <Typography
            variant="h5"
            component="div"
            align="center"
            className="title"
            visibility={"hidden"}
          >
            {props.title}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            align="center"
            className="icon"
          >
            {props.icon}
          </Typography>
        </box>
        {/*<Typography
          variant="h5"
          component="div"
          align="center"
          className="title"
        >
          {props.title}
          {props.icon}
  </Typography>*/}
        <br />
        <Typography variant="h3" align="center" fontWeight={"bold"}>
          {props.balance} $
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardContent>
      <CardActions></CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}>
          <Box>
            {props.boxesDtlName} :{props.boxesDtlBalance}
          </Box>
          <Box>
            {props.banksDtlName} :{props.banksDtlBalance}
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
