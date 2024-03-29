const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));

app.get("/register", (req, res) => {
    res.send("standard GET response");
});

app.post("/register", (req, res) => {
    let{user, password} = req.body;

    res.send(`standard POST response. Welcome ${user}`);    
});
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});