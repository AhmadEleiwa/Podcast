import { Box } from "@mui/material";
import Card from "../../../shared/Card";

const Catgeories = (props) => {
  return (
    <Box
      width={{xs:"95%", lg:'90%'}}
      display="grid"
      gridTemplateColumns={{ xs: "1fr ", sm:"1fr 1fr",  lg: "1fr 1fr 1fr" }}
      gap={1}
    >
      <Card media={"assets/categoriesImages/Music.png"} title="Music" />
      <Card media={"assets/categoriesImages/Chill.png"} title="Chill" />
      <Card media={"assets/categoriesImages/Food.png"} title="Food" />

      <Card media={"assets/categoriesImages/Business.png"} title="Business" />
      <Card media={"assets/categoriesImages/Nature.png"} title="Nature" />
      <Card media={"assets/categoriesImages/Home.png"} title="Home" />
    </Box>
  );
};

export default Catgeories;
