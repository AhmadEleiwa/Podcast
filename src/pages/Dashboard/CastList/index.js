import { Box } from "@mui/material";
import CastCard from "../CastCard";
import { useCast } from "../../../context/useCast";
const CastList = () => {
  const casts = useCast();
  let data = casts.data.slice(5, 8);
  return (
    <Box
      width={"90%"}
      display={"grid"}
      gridTemplateColumns={{xs:'1fr', sm:'1fr 1fr' ,lg:"1fr 1fr 1fr"}}
      gap={2}
    >
      {data.map((item, index) => {
        return (
          <CastCard
            title={item.trackName}
            avatar={item.artworkUrl600}
            genres={item.genres}
            id={item.id}
          />
        );
      })}
    </Box>
  );
};

export default CastList;
