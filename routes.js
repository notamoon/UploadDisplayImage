let path = require("path");
let express = require("express");
var formidable = require('formidable');
var mv = require('mv');

let router = express.Router();

router.get("/",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/index.html"));
});

router.post('/fileupload', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.image.path;
        var newpath = __dirname + '/public/images/' + files.image.name;

        console.log('Received image: ' + files.image.name);

        mv(oldpath, newpath, function (err) {
            if (err) throw err;

            res.json({ name: files.image.name });
        });
    });
});

module.exports = router;
