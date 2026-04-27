export function getResponse(input) {

  const normalize = (str) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[¿?]/g, "")
      .trim();

  const text = normalize(input);

  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const has = (words) => words.some(w => text.includes(w));

  // ================= INSCRIPCIONES =================

  if (has(["inscripcion","inscribirme"])) {
    return random([
      "Para realizar tu inscripción debes ingresar al portal oficial de alumnos de la FES Aragón. Ahí podrás seleccionar tus materias, revisar disponibilidad de grupos y confirmar tu carga académica.\n\nAccede aquí:\nhttps://portalalumnos.aragon.unam.mx/inscripciones/login",

      "El proceso de inscripción se lleva a cabo en línea mediante el sistema institucional. Es importante que entres en las fechas asignadas y completes todos los pasos para asegurar tu lugar.\n\nIngresa en:\nhttps://portalalumnos.aragon.unam.mx/inscripciones/login",

      "Debes utilizar el sistema de inscripciones de la FES Aragón para elegir tus materias y completar tu registro académico del semestre.\n\nAccede directamente desde:\nhttps://portalalumnos.aragon.unam.mx/inscripciones/login"
    ]);
  }

  if (has(["datos necesito","cuenta","contrasena"])) {
    return random([
      "Para ingresar a la plataforma necesitas tu número de cuenta UNAM y la contraseña de tu correo institucional (@aragon.unam.mx). Estos datos son obligatorios para validar tu identidad.",

      "El acceso al sistema se realiza utilizando tu número de cuenta y la contraseña asociada a tu correo institucional. Sin estos datos no podrás ingresar.",

      "Debes contar con tu número de cuenta y tu contraseña institucional, ya que son los datos que permiten acceder a los servicios digitales de la FES Aragón."
    ]);
  }

  // ================= SIAE =================

  if (has(["siae","calificaciones","historial"])) {
    return random([
      "El SIAE es el sistema oficial de la UNAM donde puedes consultar tu historial académico, calificaciones, avance en la carrera y otros datos importantes.\n\nAccede aquí:\nhttps://www.dgae-siae.unam.mx/www_gate.php",

      "A través del SIAE puedes revisar tus materias cursadas, calificaciones finales y tu situación académica general dentro de la UNAM.\n\nConsulta el sistema en:\nhttps://www.dgae-siae.unam.mx/www_gate.php",

      "El SIAE te permite acceder a información clave como historial académico, seguro social y datos escolares.\n\nIngresa desde:\nhttps://www.dgae-siae.unam.mx/www_gate.php"
    ]);
  }

  // ================= HORARIOS =================

  if (has(["horario","clases"])) {
    return random([
      "Puedes consultar los horarios del semestre en el portal oficial de FES Aragón, donde encontrarás los grupos disponibles por carrera y materia.\n\nLink:\nhttps://www.aragon.unam.mx/horarios/horarios/horarios/",

      "Los horarios de clases se publican en línea y puedes revisarlos por semestre, carrera y grupo.\n\nConsulta aquí:\nhttps://www.aragon.unam.mx/horarios/horarios/horarios/",

      "Para conocer tus horarios debes revisar el sistema de horarios de la FES Aragón, donde se muestran todas las opciones disponibles.\n\nAccede en:\nhttps://www.aragon.unam.mx/horarios/horarios/horarios/"
    ]);
  }

  if (has(["extraordinarios"])) {
    return random([
      "Los horarios de exámenes extraordinarios se publican en un apartado específico del sistema de horarios.\n\nConsulta aquí:\nhttps://www.aragon.unam.mx/horarios/horarios/horarios/extras.php",

      "Puedes revisar las fechas y horarios de extraordinarios en el portal oficial.\n\nAccede en:\nhttps://www.aragon.unam.mx/horarios/horarios/horarios/extras.php",

      "Para presentar extraordinarios debes consultar los horarios disponibles en el siguiente enlace:\nhttps://www.aragon.unam.mx/horarios/horarios/horarios/extras.php"
    ]);
  }

  if (has(["finales"])) {
    return random([
      "Los horarios de exámenes finales están disponibles en el sistema de horarios oficial.\n\nConsulta aquí:\nhttps://www.aragon.unam.mx/horarios/horarios/horarios/finales.php",

      "Puedes verificar las fechas de tus exámenes finales en el portal institucional.\n\nAccede en:\nhttps://www.aragon.unam.mx/horarios/horarios/horarios/finales.php",

      "Para conocer cuándo presentarás tus exámenes finales revisa el siguiente enlace:\nhttps://www.aragon.unam.mx/horarios/horarios/horarios/finales.php"
    ]);
  }

  // ================= TRAMIFES =================

  if (has(["tramifes","tramites"])) {
    return random([
      "TramiFES es la plataforma donde puedes realizar trámites escolares como inscripciones, altas, bajas y cambios de grupo.\n\nAccede aquí:\nhttps://tramifes.aragon.unam.mx/",

      "En TramiFES puedes gestionar procesos administrativos relacionados con tu trayectoria académica.\n\nIngresa en:\nhttps://tramifes.aragon.unam.mx/",

      "La plataforma TramiFES centraliza diversos trámites escolares para facilitar tu gestión académica.\n\nConsulta en:\nhttps://tramifes.aragon.unam.mx/"
    ]);
  }

  // ================= INTEGRA =================

  if (has(["integra","becas"])) {
    return random([
      "Integra UNAM es el sistema donde puedes solicitar becas, subir documentos y dar seguimiento a tus apoyos académicos.\n\nAccede aquí:\nhttps://www.integra.unam.mx/",

      "En Integra puedes gestionar becas, consultar pagos y revisar solicitudes activas.\n\nIngresa en:\nhttps://www.integra.unam.mx/",

      "Integra UNAM permite administrar apoyos económicos y académicos desde un solo sistema.\n\nConsulta en:\nhttps://www.integra.unam.mx/"
    ]);
  }

  // ================= PAGINA =================

  if (has(["pagina","sitio"])) {
    return random([
      "La página oficial de la FES Aragón contiene avisos, convocatorias, noticias y servicios académicos.\n\nAccede aquí:\nhttps://www.aragon.unam.mx/fes-aragon/#!/inicio",

      "En el sitio oficial puedes encontrar información actualizada sobre la facultad.\n\nConsulta en:\nhttps://www.aragon.unam.mx/fes-aragon/#!/inicio",

      "La página oficial es el principal medio de comunicación institucional.\n\nVisítala en:\nhttps://www.aragon.unam.mx/fes-aragon/#!/inicio"
    ]);
  }

  // ================= REDES =================

  if (has(["redes","facebook","instagram"])) {
    return random([
      "Puedes seguir a FES Aragón en sus redes oficiales:\n\nFacebook: https://www.facebook.com/FESAragonUNAM/\nInstagram: https://www.instagram.com/fesaragonunam/\nX: https://x.com/fesaragonunam\nYouTube: https://www.youtube.com/user/UNAMFESAragon\nTikTok: https://www.tiktok.com/@fesaragonunam\nWhatsApp: https://www.whatsapp.com/channel/0029VawMMSu6rsQnzqyai52X",

      "Las redes sociales son el medio donde se publican avisos importantes y eventos.\n\nConsulta todas aquí:\nFacebook, Instagram, X, YouTube, TikTok y WhatsApp oficiales.",

      "Mantente informado siguiendo las redes oficiales de FES Aragón en todas sus plataformas digitales."
    ]);
  }

  // ================= EXTRA =================

  if (has(["fundacion","historia"])) {
    return random([
      "La FES Aragón fue fundada en 1976 como parte de la expansión de la UNAM para ofrecer educación superior a más estudiantes.",
      "Desde su creación en 1976, FES Aragón ha crecido hasta convertirse en una de las facultades más importantes de la UNAM."
    ]);
  }

  if (has(["carreras"])) {
    return random([
      "En FES Aragón puedes estudiar carreras en áreas como ingeniería, derecho, economía y arquitectura.",
      "La facultad ofrece una amplia variedad de programas académicos en distintas áreas del conocimiento."
    ]);
  }

  if (has(["biblioteca"])) {
    return random([
      "La biblioteca ofrece acceso a libros, salas de estudio y recursos digitales para apoyar tu aprendizaje.",
      "Puedes utilizar la biblioteca para estudiar, investigar y acceder a materiales académicos."
    ]);
  }

  if (has(["ayuda"])) {
    return random([
      "Puedo ayudarte con información sobre inscripciones, horarios, plataformas y servicios de la FES Aragón.",
      "Puedes preguntarme sobre procesos académicos, servicios y herramientas disponibles para estudiantes."
    ]);
  }

  return "Puedo ayudarte con servicios de FES Aragón 🎓";
}