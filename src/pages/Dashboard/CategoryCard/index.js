import { Box, Typography } from "@mui/material";

const CategoryCard = ({ src, title }) => {
  return (
    <Box height={"auto"} borderRadius={5} position={"relative"} >
      <Typography>{title}</Typography>
      <Box width={"100%"} height={"100%"} position={"absolute"}>
        <img width={"100%"} height={"100%"} src={src} alt={title} />
      </Box>
    </Box>
  );
};

export default CategoryCard;
