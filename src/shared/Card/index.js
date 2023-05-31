import {
  CardContent,
  CardMedia,
  Card as MUICard,
  Typography,
} from "@mui/material";

import style from "./style.module.css";
import { useCast } from "../../context/useCast";

/**
 * Custom Card using MUI Card component. Allow the card to be a link
 * @param {{
 * to: String,
 * media: String,
 * title: String,
 * height: String | number,
 * width : string | number.
 * genre: String}} props
 * @returns MUICard
 */
const Card = (props) => {
    const{ playtingCastHandler} = useCast()
  return (
    <MUICard
      onClick={()=>playtingCastHandler(props.id)}
      className={style.card}
      sx={{ height: props.height ? props.height : "200px", cursor:'pointer', width:props.width }}
    >
      <CardMedia component={"img"} src={props.media} />
      <CardContent className={style.cardContent}>
        <Typography varint="h2" component={"h2"}>
          {props.title}
        </Typography>
        <Typography component={"p"} variant="p">
          {props.genre}
        </Typography>
      </CardContent>
    </MUICard>
  );
};

export default Card;
