import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@mui/material";

import Button from "../../../shared/Button";
import { useCast } from "../../../context/useCast";
let colors = ["#D5F7FD", "#DAD8FB", "#FDF5D0"];
const CastCard = ({ title, avatar, description, genres, id }) => {
  const theme = useTheme();
  const {playtingCastHandler} = useCast()
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: 4,
        border: "2px solid" + theme.palette.primary.main,
      }}
    >
      <CardHeader
        avatar={
          <Avatar>
            <img src={avatar} />
          </Avatar>
        }
        title={title}
      />
      <CardContent>
        <Box marginY={4} display={"flex"} gap={1} flexWrap={"wrap"}>
          {genres.map((item, index) => {
            return (
              <Chip
                key={item}
                label={item}
                sx={{ bgcolor: colors[index % 3] }}
              />
            );
          })}
        </Box>
        <Typography variant="p">
          Exercitationem accusamus qui nemo sit rerum molestias suscipit
          voluptatem. Esse optio aspernatur voluptas unde commodi nihil.
          Pariatur perspiciatis quo voluptatibus repellat praesentium optio
          tempora. Sint dolor facilis iste eaque. Nobis quos sed ipsum placeat
          reiciendis ex molestias.
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "2em" }}>
        <Button fullWidth variant="contained" onClick={()=>playtingCastHandler(id)}>
          Listen now
        </Button>
      </CardActions>
    </Card>
  );
};

export default CastCard;
