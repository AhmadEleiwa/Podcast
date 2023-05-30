import { Box, Typography } from "@mui/material";

const PlayerSticker = (props) => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", lg: "row" }}
      alignItems={"flex-start"}
      gap={"1em"}
      width={{ xs: "100%", lg: "80%" }}
    >
      <img src="assets/Group 35.png" width={"100%"} alt="group 35" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={{ xs: "center", lg: "flex-start" }}
        textAlign={{ xs: "center", lg: "left" }}
        gap={"1em"}
      >
        <Typography fontSize={"40px"}>LISTEN</Typography>
        <Typography color={"primary"} fontSize={{ xs: "40px", lg: "58px" }}>
          EVERYWHERE
        </Typography>
        <Typography fontSize={"18px"} variant="p">
          Et omnis aut id. Aut eaque est quaerat. Doloribus omnis fugit et sit
          ducimus expedita. Et iure minima enim est earum voluptas occaecati.
        </Typography>
        <Typography fontSize={"18px"} variant="p">
          Connect with all your devices like Alexa, Google Home or your car.
        </Typography>
        <Box
          width={"100%"}
          display={"flex"}
          gap={"1em"}
          justifyContent={{ xs: "center", lg: "flex-start" }}
        >
          <Box>
            <img src="assets/appStore.png" alt="group 35" />
          </Box>
          <Box>
            <img src="assets/googlePlay.png" alt="group 35" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PlayerSticker;
