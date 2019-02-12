require('dotenv').config();
const util = require('util')
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
  jwksUri: `${process.env.DOMAIN}.well-known/jwks.json`
});

const getKey = (header, cb) => {
  client.getSigningKey(header.kid, (err, key) => {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
};

jwt.verify(process.env.TOKEN, getKey, {}, function(err, decoded) {
  const payload = err || decoded;
  console.log(util.inspect(payload, {showHidden: false, depth: null}));
  process.exit(0);
});
