import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Layout from "./Layout";
import Stores from "./stores";
export default function TabPanel(props) {
    const { children, value, index, ...other } = props;

   if(value==0){
     return <Layout/>  
   }
    else{
      // console.log(value)
      return(<Stores/>)
    }
  }