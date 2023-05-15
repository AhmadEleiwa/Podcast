import { Button as MUIButton } from "@mui/material"
/**
 * 
 * @param {{color:String}} props 
 * @returns 
 */
const Button = props=>{
    return <MUIButton variant="outlined" sx={{borderRadius:'50em'}} color={props.color?props.color:'primary'}>test</MUIButton>
}

export default Button