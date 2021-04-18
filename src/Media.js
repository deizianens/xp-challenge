import React from 'react';
import './styles/Media.scss';

function Media() {
  return (
    <div className='Media-container'>
      <img
        src='https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081'
        className='Media-cover'
        alt=''
      />
      <p className='Media-title'>Nome do albúm</p>
      <p className='Media-artist'>Nome do artista</p>
    </div>
  );
}

export default Media;
