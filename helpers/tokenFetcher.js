//tokenFetcher.js
require('dotenv').config()
class TokenFetcher {
    constructor() {
        console.log('token working');

    }

    async fetcher() {
        const clientId = process.env.API_KEY;
        const clientSecret = process.env.API_SECRET
        const params = new URLSearchParams();

        params.append("grant_type", "client_credentials");
        params.append("client_id", clientId);
        params.append("client_secret", clientSecret);

        const petfinderRes = await fetch(
            "https://api.petfinder.com/v2/oauth2/token",
            {
                method: "POST",
                body: params,
            }
        );
        const data = await petfinderRes.json();
        // console.log(data.access_token)
        return data.access_token
    }
}
module.exports = TokenFetcher;