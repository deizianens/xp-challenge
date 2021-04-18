import React from 'react';
import './styles/Media.scss';

function Media({
  cover = 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081',
  title = 'Nome do álbum',
  artist = 'Nome do artista',
}) {
  return (
    <div className='Media-container'>
      <img src={cover} className='Media-cover' alt={title} />
      <p className='Media-title'>{title}</p>
      <p className='Media-artist'>{artist}</p>
    </div>
  );
}

export default Media;
