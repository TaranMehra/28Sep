import { createServer } from "http";
import express from "express";
import { Server } from "socket.io";
import { WebSocketConnection } from "./helpers/WebSocketConnection.js";
const port = process.env.PORT || 3000;

const app = express();
const MainServer = createServer(app);
const socketServer = new Server(MainServer);
WebSocketConnection(socketServer);
console.log("nothing");
MainServer.listen(port, () => {
  console.log(`Server Listen on = ${port}`);
});
