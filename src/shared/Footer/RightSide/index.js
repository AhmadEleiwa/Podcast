import { Box } from "@mui/material";
import Link from "../../Link";

import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const links = [
  [
    "Product",
    "Download",
    "Pricing",
    "Locations",
    "Server",
    "Countries",
    "Blog",
  ],
  [
    "Company",
    "Brand",
    "FAQ",
    "Tutorials",
    "About Us",
    "We're Hirding!",
    "Support",
  ],
  ["Privacy", "Privacy", "Term of Use", "Site Map"],
];
const RightSide = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={{ xs: "center", lg: "flex-end" }}
      alignItems={"flex-start"}
      width={"100%"}
      height="50%"
      gap={{ xs: "10%", md: "15%", lg: "10em" }}
      position={"relative"}
      flexWrap={"wrap"}
    >
      {links.map((item, i) => {
        return (
          <Box
            key={Math.random().toString(25)}
            display={"flex"}
            flexDirection={"column"}
          >
            {item.map((text, j) => {
              return (
                <Link
                  to=""
                  key={Math.random().toString(25)}
                  active={j === 0}
                  style={{ marginBottom: j === 0 ? "1em" : "0.8em" }}
                >
                  {text}
                </Link>
              );
            })}
          </Box>
        );
      })}
      <Box
        display={"flex"}
        position={"absolute"}
        gap="2em"
        right={{ xs: "45%", lg: "-2em" }}
        bottom={"20%"}
      >
        <Facebook color="white" fontSize="large" />
        <Instagram color="white" fontSize="large" />
        <Twitter color="white" fontSize="large" />
      </Box>
    </Box>
  );
};

export default RightSide;
