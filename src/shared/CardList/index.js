import { Grid } from "@mui/material"
import Card from "../Card"
const sizes = [4, 4, 4, 8, 4, 4, 8]

/**
 * 
 * @param {{items:[{to:String, title:String, media:String, genre:String}]}} props 
 * @returns 
 */

const CardList = props => {
    return <Grid container width={{xs:'100%', lg:'80%'}} spacing={2} >
        {sizes.map((i, index) =>
            <Grid item sm={i} xs={12}  key={index} >
                <Card
                    to={props.items[index].to}
                    title={props.items[index].title}
                    media={props.items[index].media}
                    genre={props.items[index].genre} />
            </Grid>
        )}
    </Grid >
}

export default CardList