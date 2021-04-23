import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import Media from './Media';
import { getToken, getAlbum } from './services/spotifyService';

function App() {
  const [media, setMedia] = useState([]);
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    if (!token) {
      getToken().then((accessToken) => {
        setToken(accessToken);
        getAlbum(accessToken).then((response) => setMedia(response));
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        <SearchForm token={token} setMedia={setMedia} />
        <section>
          <h3>Álbuns buscados recentemente</h3>
          <div className='media'>
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
    </>
  );
}

export default App;
