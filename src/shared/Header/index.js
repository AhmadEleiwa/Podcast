import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";



import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const Header = (props) => {
  const theme = useTheme();



  return (
    <Box
      width={"100%"}
      minHeight={"6em"}
      bgcolor={{ xs: "transparent", sm: theme.palette.primary.main }}
      display={"flex"}
      justifyContent={"center"}
    >
      <LeftSide />
      <RightSide />

    </Box>
  );
};

export default Header;
