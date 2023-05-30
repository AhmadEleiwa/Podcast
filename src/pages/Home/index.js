import { useCast } from "../../context/useCast";
import CardList from "../../shared/CardList";
import PlayerSticker from "../../shared/PlayerSticker";
import ThinkingSection from "../../shared/ThinkingSection";
import  { Box } from "@mui/material"
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
      {data.length !== 0 && <CardList items={data} />}
      <ThinkingSection />
      <PlayerSticker />
    </Box>
  );
};

export default Home;
