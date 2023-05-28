import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { CSSProperties } from "react";

/**
 *
 * @param {{
 * className:String,
 * style: CSSProperties
 * }} props
 * @returns
 */

const MaskedText = (props) => {
    const theme = useTheme()
  return (
    <Typography
      style={props.style}
      bgcolor={"primary"}
      sx={{ backgroundColor: theme.palette.primary.main}}
      color="secondary"
      variant="h1"
      component={"span"}
      fontSize={"inherit"}
    >
      {props.children}
    </Typography>
  );
};

export default MaskedText;
