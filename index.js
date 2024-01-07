const app = require("express")();

app.get("/", (req, res) => {
    res.send("Hi Success");
})

app.listen(2023, () => {
    console.log("server started")
})