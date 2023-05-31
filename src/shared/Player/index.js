import { useEffect, useRef,  } from "react";

import { IconButton, Box } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import "./style.css";
import Body from "./Body";
import { useCast } from "../../context/useCast";
import { useResolvedPath } from "react-router-dom";
/**
 *
 * @param {{
 * audio:String,
 * cover:String,
 * title:String
 * }} props
 * @returns
 */
const Player = (props) => {
  const audioCard = useRef(null);
  const dragInd = useRef(null);
  const path = useResolvedPath();
  const cast = useCast();
  let show = path.pathname !== '/login' && path.pathname !== '/signup' && path.pathname !== '/pricing'
  const moveHandler = (e) => {
    // This handler for move the card by the mouse position
    if (e.clientX - dragInd.current.offsetWidth * 0.5 >= 0)
      // check whatever the card out of the page or not
      audioCard.current.style.left =
        e.clientX - audioCard.current.offsetWidth * 0.5 + "px";
    if (e.clientY - dragInd.current.offsetHeight * 0.5 >= 0)
      // check whatever the card out of the page or not
      audioCard.current.style.top =
        window.scrollY +
        e.clientY -
        audioCard.current.offsetHeight * 0.5 +
        "px";
  };

  useEffect(() => {
    // This useEffect it just for remove the event when we out from this page

    audioCard.current.style.top = "50%";
    audioCard.current.style.left = "70%";
    window.addEventListener('resize', (e)=>{
      if(window.innerWidth < 600)
      audioCard.current.style.left ='0%';
    })
    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  const onMousedownHandler = (e) => {
    // to add the listener when the mouse button down to the audio card
    window.addEventListener("mousemove", moveHandler);
  };
  const onMouseupHandler = (e) => {
    // to remove the listener when the mouse button up from the audio card
    window.removeEventListener("mousemove", moveHandler);
  };

  return (
    <Box
      className={"audioCard"}
      onMouseUp={onMouseupHandler}
      display={  show ? "flex": 'none'}
      alignItems={"center"}
      justifyContent={"space-around"}
      top={0}
      left={0}
      zIndex={50}
      position={"absolute"}
      overflow={"hidden"}
      borderRadius={"16px"}
      width={"400px"}
      height={"7em"}
      ref={audioCard}
  
    >
      <div className={"back"}></div>
      <div className={"left"}>
        <IconButton
          sx={{ position: "absolute" }}
          color="primary"
          ref={dragInd}
          onMouseDown={onMousedownHandler}
          onMouseUp={onMouseupHandler}
        >
          <DragIndicatorIcon />
        </IconButton>
       {cast.playingCast.cover && <img src={cast.playingCast.cover} alt={cast.playingCast.title} />}
      </div>
      <Body audio={cast.playingCast.url} title={cast.playingCast.title} />
    </Box>
  );
};

export default Player;
