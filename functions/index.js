const functions = require('firebase-functions')

exports.imageUrl = functions.https.onRequest((req, res) => {
    res.json({filename:'hoge'})
})
