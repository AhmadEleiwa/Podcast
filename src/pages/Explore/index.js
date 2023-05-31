import { Box, Typography } from "@mui/material";
import MarkedText from "../../shared/MaskedText";
import SearchField from "../../shared/SearchField";
import Slider from "../../shared/Slider";
import { useCast } from "../../context/useCast";
import Card from "../../shared/Card";
import Item from "../../shared/PopularList/Item";
import PopularList from "../../shared/PopularList";

const Explore = () => {
  const { data } = useCast();
  let comedy = data.filter((p) => {
    for (let g of p.genres) {
      if (g === "Comedy") return true;
    }
    return false;
  });

  let technology = data.filter((p) => {
    for (let g of p.genres) {
      if (g === "Technology") return true;
    }
    return false;
  });

  let trueCrime = data.filter((p) => {
    for (let g of p.genres) {
      if (g === "True Crime") return true;
    }
    return false;
  });

  return (
    <Box
      width={{ xs: "100%", lg: "90%", xl: "70%" }}
      display={"flex"}
      flexDirection={"column"}
      gap={8}
      alignItems={"center"}
      margin={"8em auto"}
    >
      <Box
        position={"absolute"}
        left={"10%"}
        top={"34%"}
        display={{ xs: "none", lg: "block" }}
      >
        <img src="assets/dots.png" />
      </Box>
      <Box
        position={"absolute"}
        left={"0%"}
        top={"50%"}
        display={{ xs: "none", lg: "block" }}
      >
        <img src="assets/ball.png" />
      </Box>
      <Box
        position={"absolute"}
        right={"0%"}
        top={"72em"}
        display={{ xs: "none", lg: "block" }}
      >
        <img src="assets/lamp.png" />
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
      <Typography width={"100%"} variant="h4" component={"div"}>
        Comedy
      </Typography>
      <Slider>
        {comedy.map((item, index) => {
          return (
            <Card
              width={"400px"}
              key={item.id}
              id={item.id}
              title={item.trackName}
              genre={Item.artistName}
              media={item.artworkUrl600}
            />
          );
        })}
      </Slider>

      <Typography width={"100%"} variant="h4" component={"div"}>
        Technology
      </Typography>
      <Slider>
        {technology.map((item, index) => {
          return (
            <Card
              width={"400px"}
              key={item.id}
              title={item.trackName}
              genre={Item.artistName}
              media={item.artworkUrl600}
            />
          );
        })}
      </Slider>

      <Typography width={"100%"} variant="h4" component={"div"}>
        True Crime
      </Typography>
      <Slider>
        {trueCrime.map((item, index) => {
          return (
            <Card
              width={"400px"}
              key={item.id}
              title={item.trackName}
              genre={Item.artistName}
              media={item.artworkUrl600}
            />
          );
        })}
      </Slider>

      <Box width={{ xs: "100%", lg: "50%" }} alignSelf={"flex-start"}>
        <PopularList />
      </Box>
    </Box>
  );
};
export default Explore;
