import { Box, Typography } from "@mui/material";
import MarkedText from "../../shared/MaskedText";
import SearchField from "../../shared/SearchField";
import MainContent from "./MainContent";
import Categeories from "./Categeories";
import Discover from "./Discover";
import CastList from "./CastList";
import Footer from "./Footer";
import SubHeader from "./Header";

const Dashboard = () => {
  return (
    <>
      <SubHeader />
      <Box
        width={{ xs: "100%", lg: "90%", xl: "70%" }}
        display={"flex"}
        flexDirection={"column"}
        gap={8}
        alignItems={"center"}
        justifyContent={"center"}
        margin={"0 auto"}
      >
        <Box
          position={"absolute"}
          left={"10%"}
          top={"28%"}
          display={{ xs: "none", lg: "block" }}
        >
          <img src="assets/dots.png" alt="dots" />
        </Box>
        <Box
          position={"absolute"}
          right={"0%"}
          top={"150em"}
          zIndex={-1}
          display={{ xs: "none", lg: "block" }}
        >
          <img src="assets/1217.png" alt="torch" />
        </Box>

        <Box
          position={"absolute"}
          left={"0%"}
          top={"190em"}
          zIndex={-1}
          display={{ xs: "none", lg: "block" }}
        >
          <img src="assets/1241.png" alt="footer" />
        </Box>
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
          <Box
            width={{ xs: "100%", lg: "auto" }}
            display={"flex"}
            gap={2}
            overflow={"auto"}
          >
            <span>#rock</span>
            <span>#architecture</span>
            <span>#news</span>
            <span>#art</span>
            <span>#space</span>
            <span>#comedy</span>
          </Box>
        </Box>
        <MainContent />
        <Categeories />

        <Discover />
        <CastList />

        <Footer />
      </Box>
    </>
  );
};

export default Dashboard;
