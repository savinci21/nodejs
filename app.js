"use strict";

//module
const express = require('express');
const app = express();

//routing
const home = require("./routes/home");



// setting app
app.set("views", "./views");
app.set("view engine", "ejs");

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



