import { Box, Typography } from "@mui/material";
import MarkedText from "../../shared/MaskedText";
import SearchField from "../../shared/SearchField";
import MainContent from "./MainContent";
const Dashboard = () => {
  return (
    <Box
      width={{ xs: "100%", lg: "80%" }}
      display={"flex"}
      flexDirection={"column"}
      gap={8}
      alignItems={"center"}
      justifyContent={"center"}
      margin={"0 auto"}
    >
      <Box
        width={{ xs: "90%", lg: "50%" }}
        display={"flex"}
        flexDirection={"column"}
        gap={4}
        alignItems={"center"}
      >
        <Typography variant="h5">
          search for what you like the
          <MarkedText>most</MarkedText>
        </Typography>
        <SearchField />
        <Box width={{xs:"100%",lg:'auto'}} display={"flex"} gap={2} overflow={"auto"}>
          <span>#rock</span>
          <span>#architecture</span>
          <span>#news</span>
          <span>#art</span>
          <span>#space</span>
          <span>#comedy</span>
        </Box>
      </Box>
      <MainContent />
      <Box></Box>

      <Box>Dsicover</Box>
      <Box>some cards here</Box>
    </Box>
  );
};

export default Dashboard;
