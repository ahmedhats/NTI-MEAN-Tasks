//fs,os,http > modules

// const fs = require("fs");
// fs.writeFileSync('./demo.txt',"Created by fs module")
// res.setHeader("content-type", "text/html")
// const htmlContent = fs.readFileSync("./index.html")
// res.end(htmlContent)



//create server:

import http from "http"
import posts from "./posts.js";
import users from "./users.js";
import CRUD from "./CRUD.js"

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    if (req.url === "/users") {
        CRUD(req, res, users, "user")
    }
    else if (req.url === "/posts") {
        CRUD(req, res, posts, "post")
    }
    else {
        res.end("NO such an endpoint")
    }
});

server.listen(3000, () => {
    console.log("listening on port 3000")
});


