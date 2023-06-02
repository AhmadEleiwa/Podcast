import { createContext, useContext, useEffect, useState } from "react";
import api, { getAudioByFeed } from "./api";
import { useCookies } from "react-cookie";

const CastContext = createContext({
  data: [],
  playingCast: { title: "", cover: "", url: "" },
  playtingCastHandler: () => {},
  resetPlayingcastHandler: () => {},
});

export const useCast = () => useContext(CastContext);

export const CastProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cookies] = useCookies();
  const [playingCast, setPlayingCast] = useState({
    title: "",
    cover: "",
    url: "",
  });
  const resetPlayingcastHandler = () =>{
    setPlayingCast({
      title: "",
      cover: "",
      url: "",
    })
  }
  const playtingCastHandler = (id) => {
    if (!cookies.auth ) return;
    const cast = data.find((p) => p.id === id);
    getAudioByFeed(cast.feed)
      .then((res) =>
        setPlayingCast({
          title: cast.trackName,
          cover: cast.artworkUrl600,
          url: res,
        })
      )
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    api()
      .then((res) => {
        let result = res.data.results;

        let apiData = result.map((cast) => {
          return {
            id: cast.trackId,
            artistName: cast.artistName,
            artworkUrl600: cast.artworkUrl600,
            artworkUrl100: cast.artworkUrl100,
            trackName: cast.trackName,
            feed: cast.feedUrl,
            genres: cast.genres,
          };
        });
        setData(apiData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CastContext.Provider
      value={{
        data,
        playingCast,
        playtingCastHandler,
        resetPlayingcastHandler
      }}
    >
      {children}
    </CastContext.Provider>
  );
};
