import axios from 'axios';

export const getToken = () => {
  return axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        btoa(
          process.env.REACT_APP_CLIENT_ID +
            ':' +
            process.env.REACT_APP_CLIENT_SECRET
        ),
    },
    data: 'grant_type=client_credentials',
    method: 'POST',
  })
    .then((token) => token.data.access_token)
    .catch(() => console.log('erro no token'));
};

export const getAlbum = (search, token) => {
  return axios(
    `https://api.spotify.com/v1/search?q=${search}&type=album&limit=12`,
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    }
  )
    .then((albums) => albums.data.albums.items)
    .catch(() => console.log('erro na requisição'));
};
