import { Typography } from "@mui/material";
import { Box } from "@mui/material";
/**
 *
 * @param {{src:string, title:string,description:string}} props
 * @returns
 */
const Item = (props) => {
  return (
    <Box width={"100%"} display={"flex"} alignItems={"center"} gap={1}>
      <Box borderRadius={3} overflow={"hidden"} minWidth={70} height={70}>
        <img
          width={"100%"}
          height={"100%"}
          src={props.src}
          alt={props.title}
        />
      </Box>
      <Box>
        <Typography variant="h5" fontSize={"18px"} fontWeight={"700"}>
         {props.title}
        </Typography>
        <Typography variant="p" fontSize={"18px"}>
        {props.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Item;
