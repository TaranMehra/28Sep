import ChatBox from "@/components/ChatBox";
import "../styles/Home.css";
import { useEffect } from "react";
import { createSocketConnection, SocketOperations } from "./chatLogic/SocketLogic";
import { useName } from "@/context/createContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { userInfo, logedIn } = useName();
  const navigate = useNavigate();

  useEffect(() => {
    if (logedIn && userInfo?.username) {
      SocketOperations(userInfo.username);
    } else {
      navigate("/login");
    }
  }, [logedIn]);
  return (
    <div className="home-container">
      <div className="header-backside-container"></div>
      <div className="chat-heading-container">
        <h1>Welcome {userInfo?.username}</h1>
      </div>
      <div className="chat-container">
        {/* chat container */}
        <ChatBox />
      </div>
    </div>
  );
}

export default Home;
