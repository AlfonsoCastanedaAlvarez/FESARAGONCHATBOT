function Sidebar({ onSelectQuestion }) {
  const temas = [
    {
      titulo: "Inscripciones",
      preguntas: [
        "¿Dónde debo realizar mi inscripción?",
        "¿Qué datos necesito para ingresar a la plataforma?"
      ]
    },
    {
      titulo: "SIAE",
      preguntas: [
        "¿Qué es el SIAE?",
        "¿Cómo uso el SIAE (historial, seguro social, etc.)?"
      ]
    },
    {
      titulo: "Horarios",
      preguntas: [
        "¿Dónde consulto los horarios del semestre?",
        "¿Dónde veo los horarios de extraordinarios?",
        "¿Dónde reviso los horarios de finales?"
      ]
    },
    {
      titulo: "TramiFES",
      preguntas: [
        "¿Qué es TramiFES?",
        "¿Dónde entro a TramiFES?",
        "¿Qué trámites puedo hacer en TramiFES?"
      ]
    },
    {
      titulo: "Integra",
      preguntas: [
        "¿Qué es Integra UNAM?",
        "¿Dónde entro a Integra?",
        "¿Qué puedo hacer en Integra UNAM?"
      ]
    },
    {
      titulo: "Página Oficial",
      preguntas: [
        "¿Cuál es la página oficial de FES Aragón?",
        "¿Qué información puedo encontrar en la página oficial?"
      ]
    },
    {
      titulo: "Redes Sociales",
      preguntas: [
        "¿Cuáles son las redes sociales de FES Aragón?"
      ]
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Bienvenido</h3>
      </div>

      <div className="sidebar-content">
        {temas.map((tema, index) => (
          <div key={index} className="categoria">
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