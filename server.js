//=======DEPENDENCIES==================

var express = require("express");

var app = express();
var PORT = 3000;

//==================DATA===============

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

app.get("/", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
});


app.get("/api/:characters?", function(req, res) {
    var chosen = req.params.characters;

    if (chosen) {
        console.log(chosen);
        for (var i = 0; i < characters.length; i++) {
            if (chosen ===characters[i].routeName) {
                res.json(characters[i]);
                return;
            }
        }

        res.send("No character found");
    }
});












app.get("/yoda", function(req,res) {
    res.json(yoda);
});
app.get("/darthmaul", function(req,res) {
    res.json(darthmaul);
});







app.get("/obiwankenobi", function(req,res) {
    res.json(obiwankenobi);
});

//==============Listener==========================

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})