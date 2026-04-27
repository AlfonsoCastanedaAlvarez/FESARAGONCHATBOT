function Message({ text, sender }) {
  const isTyping = text === "Escribiendo...";

  const formatText = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0b1f3a",
              fontWeight: "bold",
              textDecoration: "underline"
            }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className={`message ${sender}`}>
      {isTyping ? <span className="typing">...</span> : formatText(text)}
    </div>
  );
}

export default Message;