import { Link as RouteLink } from "react-router-dom";
import Link from "../../Link";
import { IconButton, Box, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";

import {
  Explore,
  ArrowRightAltOutlined,
  CreditCard,
  Help,
  Menu as MenuIcon,
} from "@mui/icons-material";

const RightSide = (props) => {
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
              <Explore to='/' />
              Explore
            </MenuItem>
          </RouteLink>
          <RouteLink to={'/'}>
            <MenuItem onClick={handleClose}>
              <ArrowRightAltOutlined />
              Why eVOZ
            </MenuItem>
          </RouteLink>
          <RouteLink to={"/"}>
            <MenuItem onClick={handleClose}>
              <CreditCard />
              Pricing
            </MenuItem>
          </RouteLink>
          <RouteLink to={"/"}>
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
        <RouteLink
          to={"/signup"}
          style={{
            backgroundColor: theme.palette.white.main,
            color: theme.palette.white.contrastText,
            padding: ".5em   1em",
            borderRadius: "3px",
          }}
          variant="contained"
          color="white"
        >
          Sign up
        </RouteLink>
        <RouteLink to="/login" color="white">
          Log in
        </RouteLink>
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
  );
};
export default RightSide;
