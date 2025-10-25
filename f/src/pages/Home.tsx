import ChatBox from "@/components/ChatBox";
import "../styles/Home.css";
import { useEffect } from "react";
import {
  createSocketConnection,
  SocketOperations,
} from "./chat/SocketLogic";
import { useName } from "@/context/createContext";

function Home() {
  const { name } = useName();
  useEffect(() => {
    SocketOperations(name);
  });
  return (
    <div className="home-container">
      <div className="header-backside-container"></div>
      <div className="chat-heading-container">
        <h1>Welcome {name}</h1>
      </div>
      <div className="chat-container">
        {/* chat container */}
        <ChatBox />
      </div>
    </div>
  );
}

export default Home;
