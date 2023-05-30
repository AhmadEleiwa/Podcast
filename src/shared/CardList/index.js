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
                    id={props.items[index].id}
                    title={props.items[index].trackName}
                    media={props.items[index].artworkUrl600}
                    genre={props.items[index].genres[0]} />
            </Grid>
        )}
    </Grid >
}

export default CardList