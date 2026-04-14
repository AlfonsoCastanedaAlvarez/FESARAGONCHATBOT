export function getResponse(input) {
  const text = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (text.includes("cambio de grupo")) {
    return "Para realizar un cambio de grupo debes consultar las fechas oficiales en tu coordinación y verificar disponibilidad en el sistema SIAE.";
  }

  if (text.includes("ubicacion de servicios")) {
    return "Los servicios principales de la FES Aragón se encuentran distribuidos en el campus. Puedes ubicar biblioteca, control escolar y servicios escolares en el mapa oficial o módulos de información.";
  }

  if (text.includes("como me inscribo")) {
    return "Debes ingresar al sistema SIAE con tu número de cuenta, seleccionar tus materias y confirmar tu inscripción en las fechas indicadas.";
  }

  if (text.includes("cuando son las inscripciones")) {
    return "Las inscripciones se realizan en fechas establecidas por la UNAM, generalmente antes del inicio de cada semestre. Consulta el calendario escolar oficial.";
  }

  if (text.includes("donde veo mi horario")) {
    return "Puedes consultar tu horario directamente en el sistema SIAE después de completar tu inscripción.";
  }

  if (text.includes("como cambio grupo")) {
    return "El cambio de grupo se realiza durante el periodo autorizado por tu facultad, a través del sistema SIAE o en coordinación académica.";
  }

  if (text.includes("donde esta la biblioteca")) {
    return "La biblioteca de FES Aragón se encuentra dentro del campus y ofrece préstamo de libros, salas de estudio y acceso digital.";
  }

  if (text.includes("que servicios ofrece")) {
    return "La FES Aragón ofrece biblioteca, laboratorios, servicios escolares, asesorías académicas, actividades deportivas y culturales.";
  }

  if (text.includes("horario")) {
    return "Puedes consultar tus horarios en el SIAE o en la coordinación de tu carrera.";
  }

  if (text.includes("inscrip")) {
    return "Las inscripciones se realizan a través del sistema SIAE en las fechas establecidas por la UNAM.";
  }

  if (text.includes("carrera")) {
    return "En FES Aragón puedes estudiar ingenierías, derecho, arquitectura, economía, entre otras.";
  }

  if (text.includes("biblioteca")) {
    return "La biblioteca ofrece múltiples servicios académicos y espacios de estudio.";
  }

  if (text.includes("donde") || text.includes("ubicacion")) {
    return "La FES Aragón está ubicada en Nezahualcóyotl, Estado de México.";
  }

  return "Puedo ayudarte con inscripciones, horarios, servicios y más sobre FES Aragón 🎓";
}