import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";



import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const Header = ({minimum}) => {
  const theme = useTheme();



  return (
    <Box
      width={"100%"}
      minHeight={"6em"}
      bgcolor={{ xs: "transparent", sm: theme.palette.primary.main }}
      display={"flex"}
      justifyContent={"center"}
      zIndex={5}

    >
      <LeftSide minimum={minimum} />
      <RightSide />

    </Box>
  );
};

export default Header;
