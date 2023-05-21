import { Box } from "@mui/material";

/**
 * 
 * @param {{src:string}} props 
 * @returns 
 */
const CircularCard = (props) => {
  return (
    <Box
      width={100}
      height={100}
      borderRadius={"50%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "#F19989" }}
    >
      <img
        width={"85%"}
        height={"85%"}
        style={{ borderRadius: "50%" }}
        src={props.src}
      />
    </Box>
  );
};

export default CircularCard;
