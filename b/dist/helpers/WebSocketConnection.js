import { SocketChatLogicFunc } from "./chat/SocketChatLogic.js";
export const WebSocketConnection = (socketServer) => {
    socketServer.on("conection", (socket) => {
        console.log("WebSocket Connection is Estalished");
        SocketChatLogicFunc(socket);
    });
};
//# sourceMappingURL=WebSocketConnection.js.map