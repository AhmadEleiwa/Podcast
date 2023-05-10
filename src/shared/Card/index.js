import { CardContent, CardMedia, Card as MUICard, Typography } from "@mui/material"

import style from './style.module.css'
import { Link } from "react-router-dom"

/**
 * Custom Card using MUI Card component. Allow the card to be a link
 * @param {{
 * to: String,
 * media: String,
 * title: String,
 * genre: String}} props 
 * @returns Link / MUICard
 */
const Card = props => {
    return <>
        {props.to
            ? <Link to={props.to}>
                <MUICard className={style.card} >
                    <CardMedia component={'img'} src={props.media} />
                    <CardContent className={style.cardContent}>
                        <Typography varint='h2' component={'h2'}  >
                            {props.title}
                        </Typography>
                        <Typography component={'p'} variant="p" >
                            {props.genre}
                        </Typography>
                    </CardContent>
                </MUICard>
            </Link > // when to property not null 

            : <MUICard className={style.card} >
                <CardMedia component={'img'} src={"https://picsum.photos/200/300"} />
                <CardContent className={style.cardContent}>
                    <Typography varint='h2' component={'h2'}  >
                        {props.title}
                    </Typography>
                    <Typography component={'p'} variant="p" >
                        {props.genre}
                    </Typography>
                </CardContent>
            </MUICard>
        }
    </>
}

export default Card