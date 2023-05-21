import { Box } from "@mui/material";

const CircalurCard = (props) => {
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
        src="https://picsum.photos/200/300"
      />
    </Box>
  );
};

export default CircalurCard;
