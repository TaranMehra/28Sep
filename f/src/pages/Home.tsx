import ChatBox from "@/components/ChatBox";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home-container">
      <div className="header-backside-container"></div>
      <div className="chat-heading-container">
        <h1>Chat With Privacy</h1>
      </div>
      <div className="chat-container">
        {/* chat container */}
        <ChatBox />
      </div>
    </div>
  );
}

export default Home;
