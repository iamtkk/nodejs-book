const axios = require('axios').default;

const getPosts = () => {
  return axios
    .get('https://medium.com/feed/massivegaming/tagged/Blackjack')
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error));
};
getPosts();
