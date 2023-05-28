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
      justifyContent={"space-around"}
      width={"90%"}
      gap={2}
    >
      {maincast && (
        <Box
          marginTop={6}
          width={{ xs: "100%", lg: "40%" }}
          display={"flex"}
          gap={2}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Card media={maincast.artworkUrl600} title="" to="" genre="" />
          <CastCard
            title={maincast.trackName}
            avatar={maincast.artworkUrl100}
            genres={maincast.genres}
          />
        </Box>
      )}
      <Box
        width={{ xs: "100%", lg: "auto" }}
        display="flex"
        gap={2}
        flexDirection={"column"}
      >
        <Typography variant="h5">Saved for later</Typography>
        <Box display={"flex"} gap={1} overflow={"auto"}>
          {cast.map((item, index) => {
            return (
              <Card
                key={index}
                media={item.artworkUrl100}
                title=""
                to=""
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
