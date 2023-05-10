import { Typography } from "@mui/material"
import { CSSProperties } from "react"

/**
 * 
 * @param {{
 * className:String,
 * style: CSSProperties
 * color: "primary" | "secondary"
 * }} props 
 * @returns 
 */

const Title = props => {
    return <Typography style={props.style} color={props.color} variant="h1">{props.children}</Typography>
}

export default Title