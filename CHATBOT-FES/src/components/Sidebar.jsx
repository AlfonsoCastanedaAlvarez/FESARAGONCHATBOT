function Sidebar({ onSelectQuestion }) {
  const chatsRecientes = [
    "Cambio de grupo",
    "Ubicación de servicios"
  ];

  const temas = [
    {
      titulo: "Inscripciones",
      preguntas: [
        "¿Cómo me inscribo?",
        "¿Cuándo son las inscripciones?"
      ]
    },
    {
      titulo: "Horarios",
      preguntas: [
        "¿Dónde veo mi horario?",
        "¿Cómo cambio grupo?"
      ]
    },
    {
      titulo: "Servicios",
      preguntas: [
        "¿Dónde está la biblioteca?",
        "¿Qué servicios ofrece la FES?"
      ]
    }
  ];

  return (
    <aside className="sidebar">
      <div className="section">
        <h3>Bienvenido Usuario</h3>
      </div>

      <div className="section">
        <button className="new-chat">+ Nuevo chat</button>
      </div>

      <div className="section">
        <h4>Chats recientes</h4>
        {chatsRecientes.map((chat, index) => (
          <p key={index} onClick={() => onSelectQuestion(chat)}>
            {chat}
          </p>
        ))}
      </div>

      <div className="section">
        {temas.map((tema, index) => (
          <div key={index}>
            <h4>{tema.titulo}</h4>
            {tema.preguntas.map((pregunta, i) => (
              <p key={i} onClick={() => onSelectQuestion(pregunta)}>
                {pregunta}
              </p>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;