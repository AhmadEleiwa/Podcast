import { Button as MUIButton } from "@mui/material";
/**
 *
 * @param {{color:String, variant: "outlined" | "contained", type:'button' | 'submit', fullWidth:boolean}} props
 * @returns
 */
const Button = (props) => {
  return (
    <MUIButton
      variant={props.variant ? props.variant : `outlined`}
      sx={{ borderRadius: "50em" }}
      color={props.color ? props.color : "primary"}
      onClick={props.onClick}
      type={props.type}
      fullWidth={props.fullWidth}
      startIcon={props.startIcon}
    >
      {props.children}
    </MUIButton>
  );
};

export default Button;
