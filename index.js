const express = require("express");
var fetch_ = require("node-fetch");

const app = express();

const pop = require("@mrbeastprolevel/popcat-api-wrapper-v2");
app.use("/", express.static("./public"));


app.all("/OLD/r", async (req, res) => {
    var joke = await pop.joke();
    console.log(joke);

    /**res.redirect("/res.html?j=" + new URLSearchParams({
        joke
    }),);*/
    res.json({
        success: true,
        joke
    });
});

app.all("/r", async (req, res) => {
    var serverRes = await fetch_("https://api.popcat.xyz/pickuplines");
    var res_ = await serverRes.json();
    res.json({
        success: true,
        joke: res_.pickupline
    })
});


app.listen(process.env.PORT || 3000);