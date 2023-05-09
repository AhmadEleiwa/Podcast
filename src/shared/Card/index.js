import { CardContent, CardMedia, Card as MUICard, Typography } from "@mui/material"

import style from './style.module.css'

const Card = props => {
    return <MUICard className={style.card} >
        <CardMedia component={'img'} src="https://picsum.photos/200/300" />
        <CardContent className={style.cardContent}>
            <Typography varint='h2'  component={'h2'}  >
                {props.title}
            </Typography>
            <Typography component={'p'} variant="p" >
                {props.genre}
            </Typography>
        </CardContent>
    </MUICard>

}

export default Card