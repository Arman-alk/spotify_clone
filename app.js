const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

let playlists = [];

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/playlist", (req, res) => {
    const playlistName = req.body.playlistName;

    if (playlistName && playlistName.trim() !== "") {
        playlists.push(playlistName.trim());
    }

    res.redirect("/playlist");
});

app.get("/playlist", (req, res) => {
    res.render("playlist", { playlists });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});