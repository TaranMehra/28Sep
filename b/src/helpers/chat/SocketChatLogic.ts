import type { Socket } from "socket.io";

export const SocketChatLogicFunc = (socket: Socket) => {
  console.log(socket.id);
};
