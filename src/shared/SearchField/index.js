import { Search, Cancel } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/material";
import style from "./style.module.css";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import Suggustion from "./Suggustion";
import { useNavigate } from "react-router-dom";
import { useCast } from "../../context/useCast";

const SearchField = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState();

  const { data } = useCast();
  const theme = useTheme();
  const navigate = useNavigate();
  const inputHandler = (event) => {
    setSearchValue(event.target.value);
    if (event.target.value === "") setItems(undefined);
    else {
      let itemsData = data.filter((p) =>
        p.trackName.toLowerCase().startsWith(event.target.value)
      );
      if (itemsData.length !== 0) setItems(itemsData);
      else setItems(undefined);
    }
  };

  const cancelHandler = (e) => {
    setSearchValue("");
    setItems(undefined);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <Box
        display={"flex"}
        alignItems={"center"}
        border={"1px solid black"}
        width={{ xs: "100%", lg: "30em" }}
        borderRadius={8}
        justifyContent={"space-between"}
        borderColor={theme.palette.primary.main}
        position={"relative"}
        margin={"0 auto"}
        zIndex={50}
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
    </form>
  );
};

export default SearchField;
