import express from "express";
import os from 'os'; 
import dotenv from "dotenv";
dotenv.config();

import router from "./src/router";

const nodePort: string = process.env.PORT || "8080"; 
const app: express.Application = express();

app.set("view engine", "ejs");
app.set("views", "views");

//app.use(express.static('views'));
app.use(express.static("public"));

app.use(router);

app.listen(nodePort, () => console.log('Server listenning on http://' + os.hostname() + ':' + nodePort + '/'));