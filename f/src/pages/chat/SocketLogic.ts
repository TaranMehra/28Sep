import { io } from "socket.io-client";

//creating connection + send in handshake auth obj a username(for identity)
export const createSocketConnection = (username: string) =>
  io("http://localhost:3000/", {
    auth: {
      username,
    },
  });

  
export const SocketOperations = (username: string) => {
  console.log("connection status", createSocketConnection(username));
};
