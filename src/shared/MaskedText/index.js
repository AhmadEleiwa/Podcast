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
      variant="h4"
      component={props.width ? "div" :"span"}
      fontSize={props.width ? 'auto' :"inherit"}
      textAlign={'center'}
      width={props.width ? props.width: "auto"}
      margin={'0 auto'}
      paddingY={1}
      paddingX={'0.1em'}
    >
      {props.children}
    </Typography>
  );
};

export default MaskedText;
