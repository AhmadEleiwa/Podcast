import Button from "../../shared/Button";
import MaskedText from "../../shared/MaskedText";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Check } from "@mui/icons-material";
const Pricing = () => {
  const theme = useTheme();
  return (
    <Box
      width={{ xs: "100%", lg: "90%", xl: "70%" }}
      display={"flex"}
      flexDirection={"column"}
      gap={8}
      alignItems={"center"}
      margin={"8em auto"}
    >
      <Box
        position={"absolute"}
        left={"10%"}
        top={"34%"}
        display={{ xs: "none", lg: "block" }}
      >
        <img src="assets/dots.png" alt="dots" />
      </Box>
      <Typography variant="h3" textAlign={"center"}>
        Try eVoz for <MaskedText>free</MaskedText> with no time limits!
      </Typography>
      <Typography variant="h5" textAlign={"center"}>
        FULL EXPERIENCE WITHOUT ADS DURING 30 DAYS. LISTEN FOR MORE THAN 8K
        AUDIO STATIONS NOW!
      </Typography>
      <Button>Start listening for free</Button>

      <Box
        display={"grid"}
        gridTemplateColumns={{ sm: "1fr 1fr", lg: "1fr 2fr" }}
        gap={3}
      >
        <Box>
          <Typography variant="h3">Free</Typography>
          <Box
            sx={{ border: `2px solid ${theme.palette.primary.main}` }}
            borderRadius={4}
            display={"flex"}
            padding={4}
            gap={3}
            flexDirection={"column"}
          >
            <Typography variant="h4">
              $0<sub>/mo</sub>
            </Typography>
            <Typography fontSize={"0,8em"} color="gray" variant="p">
              Try it as long as you like
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Check color="primary" />
              listen to your favorite artists
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Check color="primary" />
              Unlimited searching
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Check color="primary" />
              Publish 3 podcasts
            </Box>
            <Button>Start listening for free</Button>
          </Box>
        </Box>
        <Box>
          <Typography variant="h3">Unlimited</Typography>
          <Box
            sx={{ border: `2px solid ${theme.palette.primary.main}` }}
            bgcolor={theme.palette.primary.main}
            color={"#efefef"}
            borderRadius={4}
            display={"flex"}
            padding={4}
            gap={3}
            flexDirection={"column"}
          >
            <Typography variant="h4" color={"#fff"}>
              $25<sub>/mo</sub>
            </Typography>
            <Typography fontSize={"0,8em"} color="secondary" variant="p">
              Unlimited features
            </Typography>
            <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={3}>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Check />
                listen to your favorite artists
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Check />
                Unlimited searching
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Check />
                Publish unlimited podcasts
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Check />
                Save your favorites
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Check />
                Create collections
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Check />
                Contact with other users
              </Box>
            </Box>
            <Button color="white">Buy</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Pricing;
