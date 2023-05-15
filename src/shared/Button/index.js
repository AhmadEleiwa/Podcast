import { Button as MUIButton } from "@mui/material";
/**
 *
 * @param {{color:String, onClick:()=>{}}} props
 * @returns
 */
const Button = (props) => {
  return (
    <MUIButton
        
      variant="outlined"
      onClick={props.onClick}
      sx={{ borderRadius: "50em !important" }}
      color={props.color ? props.color : "primary"}
    >
      {props.children}
    </MUIButton>
  );
};

export default Button;
