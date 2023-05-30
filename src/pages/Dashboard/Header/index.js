import {
  Add,
  ArrowDropDown,
  BookmarkAddOutlined,
  Logout,
  NotificationsOutlined,
} from "@mui/icons-material";

import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Button as MUIButton,
  Typography,
} from "@mui/material";
import Header from "../../../shared/Header";
import Button from "../../../shared/Button";
const SubHeader = () => {
  return (
    <>
      <Box
        width={"90%"}
        margin={"0 auto"}
        display={{ xs: "none", lg: "flex" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        height={"5em"}
        marginBottom={14}
      >
        <Box>
          <img src="assets/LogoPurple.png" />
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={4}>
          <Button startIcon={<Add />}>Publish</Button>
          <MUIButton startIcon={<BookmarkAddOutlined />}>
            My Collections
          </MUIButton>
          <Box display={"flex"} c alignItems={"center"} gap={3}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Typography color={"#2f2f2f"}>Title</Typography>
              <Typography color={"#5f5f5f"}>Premuim</Typography>
            </Box>
            <Avatar>A</Avatar>
            <IconButton>
              <ArrowDropDown />
            </IconButton>
          </Box>
          <Divider variant="middle" orientation={"vertical"} flexItem />
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <IconButton>
            <Logout />
          </IconButton>
        </Box>
      </Box>
      <Box display={{xs:'block', lg:'none'}}>
        <Header minimum />
      </Box>
    </>
  );
};

export default SubHeader;
