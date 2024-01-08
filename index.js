const app = require("express")();
const con = require("./connection")

app.get("/insert", (req, res) => {
   con.query("INSERT INTO test(timestamp) VALUES(CURRENT_TIMESTAMP())", [], (err, val) => {
    if(err) return res.send(err);
    res.send(val)
   })
})

app.get("/all", (req, res) => {
    con.query("SELECT * FROM test", [], (err, val) => {
        if(err) return res.send(err);
        res.send(val)
       }) 
})

app.listen(3000, () => {
    console.log("server started")
})