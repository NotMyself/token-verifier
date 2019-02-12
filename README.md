# Token Verifier

This is an example to illustrate how to verify a token via a jwks endpoint. To ensure you have a valid token to use, go to APIs > Your API > Test. A test token will be generated for you.

## To Use

1. Copy `.env_example` to `.env`: `cp .env_example .env`
2. Update the DOMAIN value to your Auth0 Tenant
3. Get a test token from your [management dashboard](https://manage.auth0.com)
    - go to APIs
    - Select your API
    - Select the Test tab
4. Update the TOKEN value in the `.env` file
5. Run `node index.js`