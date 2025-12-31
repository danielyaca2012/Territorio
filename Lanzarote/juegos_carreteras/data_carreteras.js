// ================================
// CONOCIMIENTO DE CARRETERAS
// ================================

const dataCarreteras = {

  "LZ-1": {
    nombre: "LZ-1",
    tipo: "primaria",
    municipios: ["Arrecife", "Teguise", "Haría"],
    pasaPor: ["Arrecife","Polígono Industrial de Tahíche", "Tahíche", "Exterior de Guatiza", "Exterior de Mala", "Arrieta", "Punta Mujeres", "Orzola"],
    conecta: ["LZ-3", "LZ-34", "LZ-10", "LZ-404","LZ-42","LZ-207","LZ-208","LZ-201","LZ-205","LZ-204"],
    inicio: "Arrecife",
    final: "Haría (Orzola)",
    descripcion: "Eje norte de Lanzarote"
  },

  "LZ-2": {
    nombre: "LZ-2",
    tipo: "primaria",
    municipios: ["Arrecife", "San Bartolomé", "Tías", "Yaiza"],
    pasaPor: ["Arrecife", "El Cable","Playa Honda","Aeropuerto", "Tías","Mácher", "Uga", "Yaiza", "Playa Blanca"],
    conecta: ["LZ-3","LZ-301","LZ-40", "LZ-35", "LZ-505", "LZ-501", "LZ-502", "LZ-504", "LZ-706", "LZ-702", "LZ-30", "LZ-701", "LZ-703"],
    inicio: "Arrecife",
    final: "Playa Blanca",
    descripcion: "Eje sur de la isla"
  },

  "LZ-3": {
    nombre: "LZ-3",
    tipo: "primaria",
    municipios: ["Arrecife"],
    pasaPor: ["Arrecife"],
    conecta: ["LZ-2","LZ-20","LZ-1",  "LZ-18", "LZ-101"],
    inicio: "LZ-2",
    final: "Rotonda LZ-18 / LZ-101",
    descripcion: "Circunvalación que rodea Arrecife"
  },

  "LZ-20": {
    nombre: "LZ-20",
    tipo: "secundaria",
    municipios: ["Arrecife", "San Bartolomé", "Tinajo"],
    pasaPor: ["Arrecife", "Argana Baja", "Argana Alta", "San Bartolomé", "Mozaga", "Tao", "Tiagua", "Yuco", "Tinajo"],
    conecta: ["LZ-3", "LZ-303", "LZ-34", "LZ-30", "LZ-409", "LZ-407", "LZ-46", "LZ-401"],
    inicio: "LZ-3",
    final: "Tinajo",
    descripcion: "Arrecife-Tinajo"
  }

};
