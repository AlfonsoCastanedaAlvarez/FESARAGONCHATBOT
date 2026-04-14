import { useState } from "react";

function InputBar({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    onSend(text);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="input-bar">
      <input
        type="text"
        placeholder="Escribe tu duda sobre FES Aragón..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSend} className="send-btn">
        ➤
      </button>
    </div>
  );
}

export default InputBar;