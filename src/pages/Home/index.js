import CardList from "../../shared/CardList";
import PlayerSticker from "../../shared/PlayerSticker";
import ThinkingSection from "../../shared/ThinkingSection";
const { Box } = require("@mui/material");
const Home = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      marginY={8}
      gap={8}
    >
      <CardList
        items={[
          {
            title: "name",
            to: "/",
            media: "https://picsum.photos/200/300",
            genre: "Music",
          },
          {
            title: "name",
            to: "/",
            media: "https://picsum.photos/200/300",
            genre: "Music",
          },
          {
            title: "name",
            to: "/",
            media: "https://picsum.photos/200/300",
            genre: "Music",
          },
          {
            title: "name",
            to: "/",
            media: "https://picsum.photos/200/300",
            genre: "Music",
          },
          {
            title: "name",
            to: "/",
            media: "https://picsum.photos/200/300",
            genre: "Music",
          },
          {
            title: "name",
            to: "/",
            media: "https://picsum.photos/200/300",
            genre: "Music",
          },
          {
            title: "name",
            to: "/",
            media: "https://picsum.photos/200/300",
            genre: "Music",
          },
          {
            title: "name",
            to: "/",
            media: "https://picsum.photos/200/300",
            genre: "Music",
          },
          {
            title: "name",
            to: "/",
            media: "https://picsum.photos/200/300",
            genre: "Music",
          },
        ]}
      />
      <ThinkingSection />
      <PlayerSticker />
    </Box>
  );
};

export default Home;
