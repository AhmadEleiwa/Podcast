import Button from "../../Button";
import { Box, Typography } from "@mui/material";

/**
 *
 * @param {{minimum:Boolean}} props
 * @returns
 */
const LeftSide = (props) => {
  return (
    <>
      <Box width={"40%"} display={{ xs: "none", md: "block" }}>
        {props.minimum ? (
          <Box
            width={"100%"}
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
            position={"relative"}
          >
            <Box position={"absolute"} top={".8em"}>
              <img src="assets/Logo.png" alt="logo" />
            </Box>
          </Box>
        ) : (
          <Box
            width={"100%"}
            display="flex"
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            gap={5}
            margin={"4em"}
            position={"realtive"}
          >
            <Box>
              <img src="assets/Logo.png" alt="logo" />
            </Box>
            <Box>
              <Typography
                textTransform={"uppercase"}
                variant="h4"
                color={"#fff"}
              >
                Listening And Speaking
              </Typography>
              <Typography
                textTransform={"uppercase"}
                variant="h4"
                color={"secondary"}
              >
                At the same place
              </Typography>
            </Box>
            <Button variant={"contained"} color="white">
              Start listening for free
            </Button>
            <Box position={"absolute"} left={"50%"}>
              <img
                src="assets/open-doodles-dancing 1.png"
                alt="dancing person"
              />
            </Box>
          </Box>
        )}
      </Box>
      <Box width={"40%"} display={{ xs: "block", md: "none" }}>
        <Box
          width={"100%"}
          height={"4em"}
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          padding={"2em"}
          gap={5}
          position={"relative"}
        >
          <img src="assets/LogoPurple.png" alt="logo" />
        </Box>
      </Box>
    </>
  );
};

export default LeftSide;
