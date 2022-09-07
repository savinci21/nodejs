"use strict";

//module
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//routing
const home = require("./src/routes/home");



// setting app
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //URL을 통해 전달되는 데이터에 한글, 공백 등이 포함돌 경우 제대로 인식되지 않는 문제 해결


app.use("/", home); // use -> 미들 웨어를 등록해주는 메소드

module.exports = app;

// app.get("/",  (req, res) => {
//     res.send(
// `<!DOCTYPE html>
// <html lang="ko">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Login</title>
// </head>
// <body>
//    This is Login!
// </body>
// </html>`); 
// });



