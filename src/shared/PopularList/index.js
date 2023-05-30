import { Box, Typography } from "@mui/material";
import Item from "./Item";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import MaskedText from "../MaskedText";
import { useCast } from "../../context/useCast";

const PopularList = (props) => {
  const casts = useCast();
  let data = casts.data.slice(5, 10);
  return (
    <Box display={"grid"} gap={4}>
      <Typography variant="h3" fontSize={"32px"}>
        Popular at the
        <MaskedText>moment</MaskedText>
      </Typography>
      {data.map((item) => {
        return (
          <Item
            key={item.id}
            title={item.trackName}
            description={
              "ata is often output without line breaks to save space, it can be extremely difficult to actually read and make sense o"
            }
            src={item.artworkUrl600}
          />
        );
      })}
    </Box>
  );
};

export default PopularList;
