import { useRef } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";

function Home() {
  const chatRef = useRef(null);

  const handleQuestion = (question) => {
    chatRef.current?.sendFromSidebar(question);
  };

  return (
    <div className="main-layout fade-in-app">
      <Header />

      <div className="app-container">
        <Sidebar onSelectQuestion={handleQuestion} />
        <ChatBox ref={chatRef} />
      </div>
    </div>
  );
}

export default Home;