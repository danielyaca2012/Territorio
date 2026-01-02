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

    "LZ-10": {
    nombre: "LZ-10",
    tipo: "secundaria",
    municipios: ["Teguise", "Haría"],
    pasaPor: ["Tahiche", "Nazaret", "Teguise", "Los Valles", "Haría"],
    conecta: ["LZ-1","LZ-408","LZ-404",  "LZ-207", "LZ-208"],
    inicio: "Tahiche",
    final: "Haría",
    descripcion: "Tahiche - Haría"
  },



    "LZ-14": {
    nombre: "LZ-14",
    tipo: "secundaria",
    municipios: ["Arrecife", "Teguise"],
    pasaPor: ["Exterior Arrecife", "Costa de Teguise"],
    conecta: ["LZ-3","LZ-101"],
    inicio: "Rotonda LZ-3",
    final: "Costa de Teguise",
    descripcion: "Arrecife - Costa de Teguise"
  },


  "LZ-20": {
    nombre: "LZ-20",
    tipo: "secundaria",
    municipios: ["Arrecife", "San Bartolomé", "Tinajo"],
    pasaPor: ["Arrecife", "Argana Baja", "Argana Alta", "San Bartolomé", "Mozaga", "Tao", "Tiagua", "Yuco", "Tinajo"],
    conecta: ["LZ-3", "LZ-303", "LZ-34", "LZ-30", "LZ-409", "LZ-407", "LZ-46", "LZ-401"],
    inicio: "LZ-3",
    final: "Tinajo",
    descripcion: "Arrecife - Tinajo"
  },



"LZ-30": {
    nombre: "LZ-30",
    tipo: "secundaria",
    municipios: ["Teguise", "San Bartolomé", "Tías", "Yaiza"],
    pasaPor: ["Teguise", "Mozaga", "Exterior de El Islote", "Masdache","Uga"],
    conecta: ["LZ-402", "LZ-408", "LZ-20", "LZ-58", "LZ-503", "LZ-56", "LZ-501", "LZ-2"],
    inicio: "Teguise",
    final: "Uga(LZ-2)",
    descripcion: "Teguise - Uga"
  },
"LZ-34": {
    nombre: "LZ-34",
    tipo: "secundaria",
    municipios: ["Arrecife", "Teguise", "San Bartolomé"],
    pasaPor: ["Tahiche", "San Bartolomé"],
    conecta: ["LZ-1", "LZ-20", "LZ-35"],
    inicio: "LZ-1, Tahiche",
    final: "San Bartolomé",
    descripcion: "Tahiche - San Bartolomé"
  },

"LZ-35": {
    nombre: "LZ-35",
    tipo: "secundaria",
    municipios: ["San Bartolomé", "Tías"],
    pasaPor: ["San Bartolomé", "Exterior de Montaña Blanza","Tías"],
    conecta: ["LZ-34", "LZ-301"],
    inicio: "San Bartolomé",
    final: "Tías",
    descripcion: "San Bartolomé - Tías"
  },

"LZ-40": {
    nombre: "LZ-40",
    tipo: "secundaria",
    municipios: ["San Bartolomé", "Tías"],
    pasaPor: ["Exterior Aeropuerto","Puerto del Carmen"],
    conecta: ["LZ-2", "LZ-505", "LZ-504", "LZ-506"],
    inicio: "LZ-2 (Aeropuerto)",
    final: "Puerto del Carmen",
    descripcion: "Aeropuerto - Puerto del Carmen"
  },

"LZ-42": {
    nombre: "LZ-42",
    tipo: "secundaria",
    municipios: ["Teguise", "Haría"],
    pasaPor: ["Guatiza","Mala"],
    conecta: ["LZ-1", "LZ-404", "LZ-406"],
    inicio: "Guatiza",
    final: "Mala",
    descripcion: " Conexión LZ-1 Guatiza - Conexión LZ-1 Mala "
  },

"LZ-46": {
    nombre: "LZ-46",
    tipo: "secundaria",
    municipios: ["Tinajo", "Teguise"],
    pasaPor: ["Tiagua","La Vegueta", "Mancha Blanca"],
    conecta: ["LZ-20", "LZ-58", "LZ-56"],
    inicio: "Tiagua",
    final: "Mancha Blanca",
    descripcion: " Tiagua - Mancha Blanca"
  },

"LZ-56": { 
    nombre: "LZ-56",
    tipo: "secundaria",
    municipios: ["Tinajo", "Tías"],
    pasaPor: ["Mancha Blanca","Tinguatón"],
    conecta: ["LZ-67", "LZ-46", "LZ-30"],
    inicio: "Mancha Blanca",
    final: "LZ-30",
    descripcion: " Mancha Blanca - LZ-30"
},


"LZ-58": { 
    nombre: "LZ-58",
    tipo: "secundaria",
    municipios: ["Tinajo", "Tías"],
    pasaPor: ["Masdache","La Vegueta"],
    conecta: ["LZ-30", "LZ-409", "LZ-46"],
    inicio: "Masdache",
    final: "La Vegueta",
    descripcion: " Masdache - La Vegueta"
},

  "LZ-67": { 
    nombre: "LZ-67",
    tipo: "secundaria",
    municipios: ["Tinajo", "Yaiza"],
    pasaPor: ["Urbanización la Santa","La Santa","Exterior El Cuchillo","Tinajo","Mancha Blanca","Yaiza"],
    conecta: ["LZ-20", "LZ-56", "LZ-2"],
    inicio: "Urbanización la Santa",
    final: "Yaiza",
    descripcion: " Urbanización la Santa -  Yaiza"
},

    "LZ-101": { 
    nombre: "LZ-101",
    tipo: "terciaria",
    municipios: ["Arrecife"],
    pasaPor: ["Avenida Pérez Galdós","Polígono Industrial Los Mármoles","LZ-3"],
    conecta: ["LZ-102", "LZ-3"],
    inicio: "Avenida Pérez Galdós",
    final: "LZ-3",
    descripcion: "Avenida Pérez Galdós - LZ-3"
},

    "LZ-102": { 
    nombre: "LZ-102",
    tipo: "terciaria",
    municipios: ["Arrecife"],
    pasaPor: ["Puerto de Arrecife","Polígono Industrial Los Mármoles", "Playa de la Arena","LZ-101"],
    conecta: ["LZ-101"],
    inicio: "Puerto de Arrecife",
    final: "LZ-101",
    descripcion: "Puerto de Arrecife - LZ-101"
},

      "LZ-201": { 
    nombre: "LZ-201",
    tipo: "terciaria",
    municipios: ["Haría"],
    pasaPor: ["Maguez","Ye", "Arrieta"],
    conecta: ["LZ-202","LZ-203","LZ-204","LZ-205" ],
    inicio: "Maguez",
    final: "Arrieta",
    descripcion: "Maguez - Arrieta"
},

        "LZ-202": { 
    nombre: "LZ-202",
    tipo: "terciaria",
    municipios: ["Haría"],
    pasaPor: ["LZ-201","Mirador del Río"],
    conecta: ["LZ-201","LZ-203"],
    inicio: "LZ-201",
    final: "Mirador del Río",
    descripcion: "LZ-201 - Mirador del Río"
},

          "LZ-203": { 
    nombre: "LZ-203",
    tipo: "terciaria",
    municipios: ["Haría"],
    pasaPor: ["Mirador del Río","Ye"],
    conecta: ["LZ-201","LZ-203"],
    inicio: "Mirador del Río",
    final: "Ye",
    descripcion: "Mirador del Río - Ye"
}



};
