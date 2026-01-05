import { createServer } from "http";
import express, { Router, type NextFunction, type Request, type Response } from "express";
import { Server } from "socket.io";
import { WebSocketConnection } from "./helpers/WebSocketConnection.js";
import cors from "cors";
import { ExpressAuth } from "@auth/express";
import { checkConnection } from "./lib/connection.js";
import { route } from "./routers/routes.js";
import { authenticationFunc } from "./routers/auth.route.js";
// import { ProidersCredentials } from "./routers/auth.route.js";

const port = process.env.PORT || 4000;

const app = express();
app.use(
  cors({
    // origin: "*", does not work
    origin: [
      "http://192.168.1.19:5173",
      "http://localhost:5173",
      "http://localhost:3000",
      "http://chatf.taranmehra.com",
      "http://chatb.taranmehra.com",
      "http://dock.taranmehra.com",
    ],
    credentials: true,
  })
);

app.use("/auth/", authenticationFunc);
// app.use(/^\/auth\/.*$/, authenticationFunc);
app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", route);
app.get("/seee", (req: Request, res: Response) => {
  // return res.send("hello");
  return res.redirect("/chat");
});
const MainServer = createServer(app);

//i have must allow request via cors in socket server also
const socketServer = new Server(MainServer, {
  cors: {
    // origin: "*",
    origin: "http://localhost:5173",
    credentials: true,
  },
});

//all socket logic ( io = is passed as argument )
WebSocketConnection(socketServer);

//calling auth.route.ts (for authentication)
// app.use("/auth/*", ExpressAuth({ providers: authenticationFunc as any }));
// app.use("/auth", authenticationFunc);

//connecting the db
// await checkConnection();
// await checkConnection();

//all routes directed to
//create users schema's and db, and make sign-up working
MainServer.listen(port, () => {
  console.log(`Server Listen on = ${port}`);
});
