import { Box, Typography } from "@mui/material";
import MaskedText from "../../../shared/MaskedText";
import Slider from "../../../shared/Slider";
import Card from "../../../shared/Card";
import { useCast } from "../../../context/useCast";
const Discover = () => {
  const casts = useCast();
  let trending = casts.data.slice(1, 20);
  let top = casts.data.slice(10, 30);
  let mostRecent = casts.data.slice(20, 40);

  return (
    <Box
      width={{xs:'100%', lg:"90%"}}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}

      gap={4}
    >
      <MaskedText width="8em">Discover</MaskedText>

      <Typography
        color={"secondary"}
        textAlign={"right"}
        bgcolor={"#F19989"}
        width={"8em"}
        variant="h4"
      >
        Trending
      </Typography>
      <Slider>
        {trending.map((p) => {
          return <Card title={p.trackName} id={p.id} media={p.artworkUrl600} />;
        })}
      </Slider>
      <Typography
        color={"secondary"}
        textAlign={"right"}
        bgcolor={"#F19989"}
        width={"8em"}
        variant="h4"
      >
        Top
      </Typography>
      <Slider>
        {top.map((p) => {
          return <Card title={p.trackName} id={p.id} media={p.artworkUrl600} />;
        })}
      </Slider>

      <Typography
        color={"secondary"}
        textAlign={"right"}
        bgcolor={"#F19989"}
        width={"8em"}
        variant="h4"
      >
        Most Recent
      </Typography>
      <Slider>
        {mostRecent.map((p) => {
          return <Card title={p.trackName}  id={p.id} media={p.artworkUrl600} />;
        })}
      </Slider>
    </Box>
  );
};

export default Discover;
