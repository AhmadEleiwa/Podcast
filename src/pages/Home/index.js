import { useCast } from "../../context/useCast";
import CardList from "../../shared/CardList";
import MaskedText from "../../shared/MaskedText";
import PlayerSticker from "../../shared/PlayerSticker";
import ThinkingSection from "../../shared/ThinkingSection";
import { Box, Typography } from "@mui/material";
const Home = () => {
  const { data } = useCast();

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      marginY={8}
      gap={8}
    >
      <Box
        position={"absolute"}
        left={"10%"}
        top={"75%"}
        display={{ xs: "none", lg: "block" }}
      >
        <img src="assets/dots.png" alt="dots" />
      </Box>
      <Box
        marginY={8}
        width={{ xs: "100%", lg: "60%" }}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={4}
      >
        <Typography textAlign={"center"} variant="h2">
          Hear what matters <MaskedText>most to you!</MaskedText>
        </Typography>
        <Typography textAlign={"center"} fontSize={"2em"} variant="p">
          eVOZ brings together live sports, music, news, trainning and many
          more!
        </Typography>
      </Box>
      {data.length !== 0 && <CardList items={data} />}
      <ThinkingSection />
      <PlayerSticker />
    </Box>
  );
};

export default Home;
