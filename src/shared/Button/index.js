import { Button as MUIButton } from "@mui/material";
/**
 *
 * @param {{color:String, variant: "outlined" | "contained"}} props
 * @returns
 */
const Button = (props) => {
  return (
    <MUIButton
      variant={props.variant ? props.variant : `outlined`}
      sx={{ borderRadius: "50em" }}
      color={props.color ? props.color : "primary"}
      onClick={props.onClick}
    >
      {props.children}
    </MUIButton>
  );
};

export default Button;
