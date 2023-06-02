import { Box } from "@mui/material";
import { useCast } from "../../context/useCast";
import { useParams } from "react-router-dom";
import Card from "../../shared/Card";

const SearchPage = () => {
  const { data } = useCast();
  const { trackName } = useParams();
  const casts = data.filter((p) =>
    p.trackName.toLowerCase().startsWith(trackName.toLowerCase())
  );
  return (
    <Box
      width={{xs:'90%', lg:"70%"}}
      margin={"4em auto"}
      gap={2}
      display={"grid"}
      gridTemplateColumns={
        casts.length <= 2 ? '1fr'
        :{ xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }
    }
    >
      {casts.map((cast) => {
        return (
          <Card
            title={cast.trackName}
            genre={cast.genres[0]}
            media={cast.artworkUrl600}
            id={cast.id}
          />
        );
      })}
    </Box>
  );
};

export default SearchPage;
