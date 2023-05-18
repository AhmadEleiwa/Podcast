import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import Link from "../Link";
import Button from "../Button";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { Link as RouteLink } from "react-router-dom";
import {
  Explore,
  ArrowRightAltOutlined,
  CreditCard,
  Help,
  Menu as MenuIcon,
} from "@mui/icons-material";
const Header = (props) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      width={"100%"}
      minHeight={"6em"}
      bgcolor={{ xs: "transparent", sm: theme.palette.primary.main }}
      display={"flex"}
      justifyContent={"center"}
    >
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
            <img src="assets/Logo.png" alt="logo" />
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
      <Box
        display={"flex"}
        alignContent={"center"}
        width={"60%"}
        zIndex={0}
        maxHeight={"6em"}
        justifyContent={"space-around"}
      >
        <Box
          width={"100%"}
          display={{ xs: "flex", md: "none" }}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <IconButton
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color={"black"}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <RouteLink>
              <MenuItem onClick={handleClose}>
                <Explore />
                Explore
              </MenuItem>
            </RouteLink>
            <RouteLink>
              <MenuItem onClick={handleClose}>
                <ArrowRightAltOutlined />
                Why eVOZ
              </MenuItem>
            </RouteLink>
            <RouteLink to={"/gg"}>
              <MenuItem onClick={handleClose}>
                <CreditCard />
                Pricing
              </MenuItem>
            </RouteLink>
            <RouteLink to={"/gg"}>
              <MenuItem onClick={handleClose}>
                <Help />
                Help
              </MenuItem>
            </RouteLink>
          </Menu>
        </Box>
        <Box
          display={{ xs: "none", md: "flex" }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
        >
          <Link active to="/">
            Home
          </Link>
          <Link to="/">Explore</Link>
          <Link to="/">Pricing</Link>
        </Box>
        <Box display={{ xs: "none", md: "flex" }} alignItems={"center"} gap={5}>
          <Link
            style={{
              backgroundColor: theme.palette.white.main,
              color: theme.palette.white.contrastText,
              padding: ".5em   1em",
              borderRadius: "3px",
            }}
            variant="contained"
            disableElevation
            color="white"
          >
            Sign up
          </Link>
          <Link disableElevation color="white">
            Log in
          </Link>
          <select
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "none",
            }}
          >
            <option style={{ color: "black" }} value={"EN"}>
              EN
            </option>
            <option style={{ color: "black" }} value={"AR"}>
              AR
            </option>
          </select>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
