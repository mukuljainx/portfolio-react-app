module.exports = {
    'secretKey': process.env.SECRET_KEY,
    'facebookAuth' : {
        'clientID'      : process.env.FB_CLIENT_ID, // your App ID
        'clientSecret'  : process.env.FB_CLIENT_SECRET, // your App Secret
        'callbackURL'   : process.env.FB_CALLBACK
    },
    'googleAuth' : {
        'clientID'      : process.env.GOOGLE_CLIENT_ID,
        'clientSecret'  : process.env.GOOGLE_CLIENT_SECRET,
        'callbackURL'   : process.env.GOOGLE_CALLBACK
    },
};
