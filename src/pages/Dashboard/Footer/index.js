import { useTheme } from "@emotion/react";
import { ArrowDropUp } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box marginY={6}>
            <a href="#">
      <IconButton
        color="primary"
        disableRipple
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <ArrowDropUp fontSize="large" color="white" />
      </IconButton>
    </a>
    </Box>
  );
};

export default Footer;
