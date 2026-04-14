function Message({ text, sender }) {
  const isTyping = text === "Escribiendo...";

  return (
    <div className={`message ${sender}`}>
      {isTyping ? <span className="typing">...</span> : <span>{text}</span>}
    </div>
  );
}

export default Message;