import type { Server } from "socket.io";
import { SocketChatLogicFunc } from "./chat/SocketChatLogic.js";

export const WebSocketConnection = (
  socketServer: Server
) => {
  socketServer.on("conection", (socket) => {
    console.log("WebSocket Connection is Estalished");
    SocketChatLogicFunc(socket);
  });
};
