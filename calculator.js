const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended: true })) //bodyparser using with express

const port = 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result is " + result)

})

app.listen(port, () => {
    console.log("server is started at port 3000");
})

//bmi

app.get("/bmi-calculator", (req, res) => {
    res.sendFile(__dirname + "/bmi-calculator.html")
})

app.post("/bmi-calculator", (req, res) => {
    
    var height = Number(req.body.height);
    var weight = Number(req.body.weight)

    var bmiResult = weight / (height * height);

    res.send("Your bmi is " + bmiResult)
})