import { Link as RouteLink, useResolvedPath } from "react-router-dom";
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
import { useCookies } from "react-cookie";

const RightSide = (props) => {
  const theme = useTheme();
  const [cookies] = useCookies();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const path = useResolvedPath()

  let token = cookies.auth?.token;

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
              <Explore to="/explore" />
              Explore
            </MenuItem>
          </RouteLink>
          <RouteLink to={"/"}>
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
        <Link active ={path.pathname == '/'} to="/">
          Home
        </Link>
        <Link active ={path.pathname == '/explore'} to="/explore">Explore</Link>
        <Link active ={path.pathname == '/pricing'} to="/pricing">Pricing</Link>
      </Box>
      <Box display={{ xs: "none", md: "flex" }} alignItems={"center"} gap={5}>
        {token ? (
          <>
          <RouteLink
            to={"/logout"}
            style={{
              backgroundColor: theme.palette.white.main,
              color: theme.palette.white.contrastText,
              padding: ".5em   1em",
              borderRadius: "3px",
            }}
            variant="contained"
            color="white"
          >
            logout
          </RouteLink>
          <Link  to={'/dashboard'} >Dashboard</Link>
          </>
        ) : (
          <>
            {" "}
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
            <Link to="/login" >
              Log in
            </Link>
          </>
        )}
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
