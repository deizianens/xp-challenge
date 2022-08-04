import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import Media from "./Media";
import { getToken, getAlbum } from "./services/spotifyService";
import "./styles/Home.scss";

const Home = () => {
  const [media, setMedia] = useState([]);
  const [token, setToken] = useState(undefined);
  const [isSearching, setIsSearching] = useState(false);
  const search = useRef();

  useEffect(() => {
    if (!token) {
      getToken().then((accessToken) => {
        setToken(accessToken);
        getAlbum(accessToken).then((response) => setMedia(response));
      });
    }
  }, []);

  const onSearch = (searchedMedia, isSearching) => {
    search.current = searchedMedia;
    setIsSearching(isSearching);
  };

  return (
    <div className="content">
      <Navbar />
      <div className="content-wrapper">
        <div className="container">
          <SearchForm token={token} setMedia={setMedia} onSearch={onSearch} />
          <section>
            <h3>
              {isSearching
                ? `Resultados encontrados para "${search.current}"`
                : "Álbuns buscados recentemente"}
            </h3>
            <div className="media">
              {media &&
                media.map((item) => (
                  <Media
                    cover={item.images[1].url}
                    title={item.name}
                    artist={item.artists[0].name}
                  />
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
