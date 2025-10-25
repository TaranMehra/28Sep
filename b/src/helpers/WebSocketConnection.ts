import type { Server } from "socket.io";
import { SocketChatLogicFunc } from "./chat/SocketChatLogic.js";

// type AllConnectedUsersType = { socketId: string };

const AllConnectedUsers = new Map();

//socketServer = io
export const WebSocketConnection = (socketServer: Server) => {
  socketServer.on("connection", (socket) => {
    AllConnectedUsers.set(socket.id, socket.handshake.auth.username);
    console.log(`${socket.handshake.auth.username} is Connected , below is all connected users`);
    console.log(`${socket.id} settled id`);

    AllConnectedUsers.forEach((value, index) => {
      console.log(`${value} : ${index}`);
    });
    SocketChatLogicFunc(socket);
  });
};
