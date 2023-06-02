import { Box } from "@mui/material";
import style from "./style.module.css";
import { Link } from "react-router-dom";
const Suggustion = (props) => {
  return (
    <Box
      position={"absolute"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gridTemplateColumns={"1fr"}
      width={"100%"}
      maxHeight={'14em'}
      overflow={'hidden'}
      top={"3em"}
      borderRadius={4}
      gap={1}
      padding={"1em 0"}
      className={style.box}

    >
      {props.items &&
        props.items.map((item, index) => {
          return (
            <Box
              key={index}
              width={"100%"}
              boxSizing={"border-box"}
              padding={1}
              className={style.item}
            
            >
              <Link to={"/search/" + item.trackName} color="black" >
                {item.trackName}
              </Link>
            </Box>
          );
        })}
    </Box>
  );
};

export default Suggustion;
