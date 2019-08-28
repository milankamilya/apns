var express = require('express');
var apn = require('apn');

var router = express.Router();
var options = {
    token: {
        key: './keys/AuthKey_XXXXXXXXXX.p8',
        keyId: "XXXXXXXXXX",
        teamId: "XXXXXXXXXX"
    },
    production: false
};

var apnProvider = new apn.Provider(options);

router.post('/', function(req, res, next){
    console.log('Hit post ', req.body.deviceToken);

    var note = new apn.Notification();

    note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
    note.badge = 3;
    note.sound = "ping.aiff";
    note.alert = "\uD83D\uDCE7 \u2709 You have a new message";
    note.payload = {'messageFrom': 'John Appleseed'};
    note.topic = "<Bundle Identifier of your iOS Project>";

    apnProvider.send(note, req.body.deviceToken).then( (result) => {
        console.log('APNS Response : \n', result);
        res.send('POST App Push Notification');
    });
});

module.exports = router;
