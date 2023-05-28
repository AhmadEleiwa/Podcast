import { Search, Cancel } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/material";
import style from "./style.module.css";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import Suggustion from "./Suggustion";

const SearchField = (props) => {
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState();
  const inputHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const cancelHandler = (e) => {
    setSearchValue("");
  };

  useEffect(() => {
    // fake api fetching
    if (searchValue === "") setItems(null);
    else
      setItems([
        { title: "search value items", id:'4'},
        { title: "search value items", id:'4'},
        { title: "search value items", id:'4'},
        { title: "search value items", id:'4'},
        { title: "search value items", id:'4'},
      ]);
  }, [searchValue]);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      border={"1px solid black"}
      width={{xs:'100%', lg:"30em"}}
      borderRadius={8}
      justifyContent={"space-between"}
      borderColor={theme.palette.primary.main}
      position={"relative"}
      margin={"0 auto"}
    >
      <input
        className={style.searchInput}
        onInput={inputHandler}
        value={searchValue}
      />
      {searchValue === "" ? (
        <IconButton color="primary">
          <Search />
        </IconButton>
      ) : (
        <IconButton color="primary" onClick={cancelHandler}>
          <Cancel />
        </IconButton>
      )}
      {items && <Suggustion items={items} />}
    </Box>
  );
};

export default SearchField;
