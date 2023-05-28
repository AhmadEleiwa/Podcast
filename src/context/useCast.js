import { createContext, useContext, useEffect, useState } from "react";
import api, { getAudioByFeed } from "./api";

const CastContext = createContext({
  data: [],
});

export const useCast = () => useContext(CastContext);

export const CastProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api()
      .then((res) => {
        let result = res.data.results;
       
        let apiData = result.map((cast) => {

          return {
            artistName: cast.artistName,
            artworkUrl600: cast.artworkUrl600,
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
      }}
    >
      {children}
    </CastContext.Provider>
  );
};
