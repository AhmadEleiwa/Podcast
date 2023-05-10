import { Typography } from "@mui/material"
import { CSSProperties } from "react"

/**
 * 
 * @param {{
 * className:String,
 * style: CSSProperties
 * }} props 
 * @returns 
 */

const MaskedText = props => {
    return <Typography style={props.style} bgcolor={'primary'} color='secondary' variant="h1" component={"span"} >{props.children}</Typography>
}

export default MaskedText