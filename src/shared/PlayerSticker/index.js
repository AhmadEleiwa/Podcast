import { Box, Typography } from "@mui/material";
import Button from "../Button";
const PlayerSticker = (props) => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignContent={"center"}>
      <Box display={"flex"} alignContent={"cneter"} justifyContent={"center"}>
        <Typography
          color={"primary"}
          fontSize={{ xs: "30px", lg: "50px" }}
          component={"span"}
        >
          Customize
        </Typography>
        <Typography fontSize={{ xs: "30px", lg: "50px" }} component={"span"}>
          your skins!
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={{ xs: "500px",  sm:'800px',md:'800px'}}
      >
        <Box
          margin={"0 auto"}
          width={{ xs: "100%", md: "100%" }}
          height={"80%"}
          flexDirection={"column"}
          position={"relative"}
          display={"flex"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Box
            position={{ xs: "static", md: "absolute" }}
            width={{ xs: "50%", md: "auto" }}
            right={"4em"}
          >
            <img src="assets/Group 42.png" alt="player" width={"100%"} />
          </Box>
          <Box
            position={{ xs: "absolute", md: "absolute" }}
            width={{ xs: "100%", md: "auto" }}
            top={{ xs: "60%", md: "8em" }}
            right={{ xs: "0%", md: "10%" }}
          >
            <img src="assets/Player.png" alt="player" width={"100%"} />
          </Box>
          <Box
            position={{ xs: "absolute", md: "absolute" }}
            top={{ xs: "50%", md: "0em" }}
            width={{ xs: "100%", md: "auto" }}
          >
            <img src="assets/Light.png" alt="player" width={"100%"} />
          </Box>
        </Box>
        <Button>Start listening for free</Button>
      </Box>
    </Box>
  );
};

export default PlayerSticker;
