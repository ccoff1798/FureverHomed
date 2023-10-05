const axios = require('axios');
require('dotenv').config();
const token = ''

class TokenFetcher {
  constructor() {
    console.log('token working');
  }
    fetcher(){
    const clientId = process.env.API_KEY;
    const clientSecret = process.env.API_SECRET;

    const tokenUrl = "https://api.petfinder.com/v2/oauth2/token";

    const data = new URLSearchParams();
    data.append("grant_type", "client_credentials");
    data.append("client_id", clientId);
    data.append("client_secret", clientSecret);

    axios.post(tokenUrl, data)
      .then((response) => {
        if (response.status === 200) {
          const newAccessToken = response.data.access_token;
          token =newAccessToken
          console.log(newAccessToken);
        } else {
          console.error(`Failed to refresh access token. Status code: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("An error occurred while refreshing the token:", error);
      });
  }
}
module.exports = TokenFetcher, token;