import { Box, Typography } from "@mui/material";

import Card from "../../../shared/Card";
import { useCast } from "../../../context/useCast";
import PopularList from "../../../shared/PopularList";
import CastCard from "../CastCard";
const MainContent = () => {
  const casts = useCast();
  let cast = casts.data.slice(0, 3);
  let maincast = casts.data[6];
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent={"space-between"}
      width={"90%"}
      gap={2}
    >
      {maincast && (
        <Box
          width={{ xs: "100%", lg: "30%" }}
          display={"flex"}
          gap={2}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Card
            height={"16em"}
            media={maincast.artworkUrl600}
            title={maincast.trackName}
            id={maincast.id}
            genre={maincast.genres[0]}
          />
          <CastCard
            title={maincast.trackName}
            avatar={maincast.artworkUrl100}
            genres={maincast.genres}
            id={maincast.id}
          />
        </Box>
      )}
      <Box
        width={{ xs: "100%", lg: "60%" }}
        display="flex"
        gap={2}
        flexDirection={"column"}
      >
        <Typography variant="h4">Saved for later</Typography>
        <Box display={"flex"} gap={1} overflow={"auto"}>
          {cast.map((item, index) => {
            return (
              <Card
                key={index}
                media={item.artworkUrl600}
                title=""
                id={item.id}
                genre=""
              />
            );
          })}
        </Box>
        <PopularList />
      </Box>
    </Box>
  );
};

export default MainContent;
