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
let colors = ["#D5F7FD", "#DAD8FB", "#FDF5D0"];
const CastCard = ({ title, avatar, description, genres }) => {
  const theme = useTheme();
  return (
    <Card
    
      sx={{
        maxWidth: "100%",
        height:'100%',
        border: "1px solid" + theme.palette.primary.main,
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
            return <Chip key={item} label={item} sx={{ bgcolor: colors[index % 3] }} />;
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
      <CardActions sx={{marginTop:'6em'}}>
        <Button fullWidth variant="contained">
          Listen now
        </Button>
      </CardActions>
    </Card>
  );
};

export default CastCard;
