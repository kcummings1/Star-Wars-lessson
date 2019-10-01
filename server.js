//=======DEPENDENCIES==================
var express = require("express");

var app = express();
var PORT = 3000;

var path = require("path");

var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

// parse various different custom JSON types as JSON
app.use(bodyParser.json({
    type: 'application/*+json'
}))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({
    type: 'application/vnd.custom-type'
}))

// parse an HTML body into a string
app.use(bodyParser.text({
    type: 'text/html'
}))

//==================DATA===============================

var yoda = {
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
};

var darthmaul = {
    name: "darthmaul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
};

var obiwankenobi = {
    name: "Obi Wan Kenobi",
    role: "Jedi Knight",
    age: 60,
    forcePoints: 1350
};

//===============Routes=========================

app.get("/", function (req, res) {
    res.send(path.join(__dirname, "view.html"));
});

app.get("/add", function (req, res) {
    res.send(path.join(__dirname, "add.html"));
});

app.get("/api/:characters?", function (req, res) {

    var chosen = req.params.characters;

    if (chosen) {
        console.log(chosen);
        for (var i = 0; i < characters.length; i++) {
            if (chosen === characters[i].routeName) {
                res.json(characters[i]);
                return;
            }
        }

        res.send("No character found");
    } else {
        res.json(characters);
    }
});

app.post("/api/new", function (req, res) {
    var newcharacter = req.body;
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowercase();

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
})


