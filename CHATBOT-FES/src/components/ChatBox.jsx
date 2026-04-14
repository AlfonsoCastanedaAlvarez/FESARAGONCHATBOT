import { useState, forwardRef, useImperativeHandle } from "react";
import Message from "./Message";
import InputBar from "./InputBar";
import { getResponse } from "../utils/fakeAI";

const ChatBox = forwardRef((props, ref) => {
  const [messages, setMessages] = useState([
    { text: "Hola 👋, soy tu asistente de FES Aragón", sender: "bot" }
  ]);

  const sendMessage = (text) => {
    setMessages((prev) => [...prev, { text, sender: "user" }]);

    setTimeout(() => {
      const response = getResponse(text);

      setMessages((prev) => [
        ...prev,
        { text: response, sender: "bot" }
      ]);
    }, 800);
  };

  useImperativeHandle(ref, () => ({
    sendFromSidebar(text) {
      sendMessage(text);
    }
  }));

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} {...msg} />
        ))}
      </div>

      <InputBar onSend={sendMessage} />
    </div>
  );
});

export default ChatBox;