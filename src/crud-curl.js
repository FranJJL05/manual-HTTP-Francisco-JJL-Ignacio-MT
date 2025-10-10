import dotenv from 'dotenv';
dotenv.config();
import { exec } from 'child_process';
import { CLIENT_RENEG_LIMIT } from 'tls';

const API_URL = process.env.API_URL || 'http://localhost';
const PORT = process.env.PORT || 4000;
const BASE_URL = `${API_URL}:${PORT}`

// Funciones CRUD requeridas

// Funcion createStudent()//

/**
 * Genera e imprime el comando cURL para crear un nuevo estudiante (POST).
 * * Esta función toma los datos de un estudiante, los convierte a JSON
 * e imprime el comando cURL necesario para enviar una petición POST
 * a la colección /students del json-server.
 * * @param {object} studentData - Objeto con los datos del estudiante a crear.
 * Ejemplo: { firstName: "Ana", lastName: "Pérez", level: "Básico", active: true }
 * @returns {void}
 */
function createStudent(studentData) {
    // 1. Definir el endpoint usando la variable global BASE_URL
    const endpoint = `${BASE_URL}/students`;

    // 2. Convertir el objeto de datos a una cadena JSON para el cuerpo de la petición
    const dataJson = JSON.stringify(studentData);

    // 3. Construir el comando cURL
    // -i: Muestra los headers de la respuesta.
    // -X POST: Especifica el método HTTP.
    // -H 'Content-Type: application/json': Header que indica que el cuerpo es JSON.
    // -d '${dataJson}': El cuerpo de la petición (la data JSON).
    const curlCommand = `curl -i -X POST \\
    -H 'Content-Type: application/json' \\
    -d '${dataJson}' \\
    ${endpoint}`;

    console.log('----------------------------------------------------');
    console.log('COMANDO C R E A T E (POST): Crear Nuevo Estudiante');
    console.log('----------------------------------------------------');
    console.log(curlCommand);
    console.log('----------------------------------------------------');
}

// -----------------------------------------------------------------------
// EJEMPLO DE USO (para incluir en la sección de ejecución de tu script)
// -----------------------------------------------------------------------

/*
const newStudent = {
    firstName: "Laura",
    lastName: "Gómez",
    level: "Avanzado",
    active: true,
    email: "laura.gomez@example.com"
};

createStudent(newStudent);
*/

//---------------------------------------------------------------------

// Función readAllStudents()//

/**
 * Genera e imprime el comando cURL para leer todos los estudiantes (GET).
 * * Esta función imprime el comando cURL necesario para enviar una petición GET
 * a la colección /students del json-server, recuperando todos los registros
 * almacenados.
 * * @returns {void}
 */
function readAllStudents() {
    // 1. Definir el endpoint (ruta base de la colección)
    const endpoint = `${BASE_URL}/students`;

    // 2. Construir el comando cURL
    // -i: Muestra los headers de la respuesta.
    // -X GET: Especifica el método HTTP.
    // Nota: No se requiere -H 'Content-Type' ni -d ya que no se envía cuerpo de datos.
    const curlCommand = `curl -i -X GET \\
    ${endpoint}`;

    console.log('----------------------------------------------------');
    console.log('COMANDO R E A D (GET): Leer Todos los Estudiantes');
    console.log('----------------------------------------------------');
    console.log(curlCommand);
    console.log('----------------------------------------------------');
}

// -----------------------------------------------------------------------
// EJEMPLO DE USO (para incluir en la sección de ejecución de tu script)
// -----------------------------------------------------------------------

/*
readAllStudents();
*/

// Función readStudentById(id)

/**
 * Genera e imprime el comando cURL para leer un estudiante por su ID (GET).
 * * Esta función recibe un ID, e imprime el comando cURL necesario para enviar 
 * una petición GET al recurso específico /students/:id del json-server.
 * * @param {(string|number)} id - El ID del estudiante que se desea buscar.
 * @returns {void}
 */
function readStudentById(id) {
    // 1. Definir el endpoint. ¡CRUCIAL!: se añade el ID al final de la URL
    const endpoint = `${BASE_URL}/students/${id}`;

    // 2. Construir el comando cURL
    // -i: Muestra los headers de la respuesta.
    // -X GET: Especifica el método HTTP.
    const curlCommand = `curl -i -X GET \\
    ${endpoint}`;

    console.log('----------------------------------------------------');
    console.log(`COMANDO R E A D (GET): Leer Estudiante con ID ${id}`);
    console.log('----------------------------------------------------');
    console.log(curlCommand);
    console.log('----------------------------------------------------');
}

// -----------------------------------------------------------------------
// EJEMPLO DE USO (para la sección de ejecución de tu script)
// -----------------------------------------------------------------------

/*
// Asumiendo que el ID 3 existe en tu db.json
readStudentById(3); 
*/

//---------------------------------------------------------------------

// Funcion updateStudent()

/**
 * Genera e imprime el comando cURL para actualizar completamente un estudiante (PUT).
 * * Esta función toma un objeto con todos los datos del estudiante y construye
 * un comando cURL que realiza una petición PUT al endpoint /students/{id}.
 * * Todos los campos del estudiante serán reemplazados por los del objeto studentData.
 * @param {string|number} id - ID del estudiante a actualizar.
 * @param {object} studentData - Objeto con los datos completos del estudiante.
 * Ejemplo: { id: 3, name: "Francisco José", email: "fran.jose@email.com", 
 * enrollmentDate: "2024-07-10", active: true, level: "beginner" }
 * @returns {void}
 */
function updateStudent(id, studentData) {
    const endpoint = `${BASE_URL}/students/${id}`;
    const dataJson = JSON.stringify(studentData, null, 2);

    const curlCommand = `curl -i -X PUT \\ 
-H 'Content-Type: application/json' \\ 
-d '${dataJson}' \\ 
${endpoint}`;

    console.log('----------------------------------------------------');
    console.log(`UPDATE COMMAND: Actualizar completamente estudiante ID=${id}`);
    console.log('----------------------------------------------------');
    console.log(curlCommand);
    console.log('----------------------------------------------------');
}

// -----------------------------------------------------------------------
// EJEMPLO DE USO
// -----------------------------------------------------------------------
/*updateStudent(3, {
    id: 3,
    name: "Francisco José",
    email: "fran.jose@email.com",
    enrollmentDate: "2024-07-10",
    active: true,
    level: "beginner"
});*/


//---------------------------------------------------------------------


// Funcion patchStudent()

/**
 * Genera e imprime el comando cURL para modificar parcialmente un estudiante (PATCH).
 * * Esta función toma los campos que se desean actualizar de un estudiante y construye
 * un comando cURL que realiza una petición PATCH al endpoint /students/{id}.
 * * Solo se modificarán los campos incluidos en el objeto partialData.
 * @param {string|number} id - ID del estudiante que se desea modificar.
 * @param {object} partialData - Objeto con los campos a actualizar.
 * Ejemplo: { active: false, level: "advanced" }
 * @returns {void}
 */
function patchStudent(id, partialData) {
    const endpoint = `${BASE_URL}/students/${id}`;
    const dataJson = JSON.stringify(partialData, null, 2);

    const curlCommand = `curl -i -X PATCH \\ 
-H 'Content-Type: application/json' \\ 
-d '${dataJson}' \\ 
${endpoint}`;

    console.log('----------------------------------------------------');
    console.log(`PATCH COMMAND: Modificar campos del estudiante ID=${id}`);
    console.log('----------------------------------------------------');
    console.log(curlCommand);
    console.log('----------------------------------------------------');
}

// -----------------------------------------------------------------------
// EJEMPLO DE USO
// -----------------------------------------------------------------------
/*patchStudent(3, {
    active: false,
    level: "advanced"
}); */

//---------------------------------------------------------------------

// Funcion deleteStudent()

/**
 * Genera e imprime el comando cURL para eliminar un estudiante (DELETE).
 * * Esta función construye un comando cURL que realiza una petición DELETE
 * al endpoint /students/{id}, eliminando al estudiante indicado.
 * @param {string|number} id - ID del estudiante a eliminar.
 * @returns {void}
 */
function deleteStudent(id) {
    const endpoint = `${BASE_URL}/students/${id}`;
    const curlCommand = `curl -i -X DELETE \\ 
${endpoint}`;

    console.log('----------------------------------------------------');
    console.log(`DELETE COMMAND: Eliminar estudiante ID=${id}`);
    console.log('----------------------------------------------------');
    console.log(curlCommand);
    console.log('----------------------------------------------------');
}

// -----------------------------------------------------------------------
// EJEMPLO DE USO
// -----------------------------------------------------------------------
//deleteStudent(3);

//------------------------------------------------------------------------
//------------------------------------------------------------------------
// 2.3 EJECUCIÓN DEL SCRIPT Y GENERACIÓN DE COMANDOS cURL
//------------------------------------------------------------------------

// --- DATOS DE PRUEBA ---
// Usaremos el ID 3 para las operaciones que lo requieran, asumiendo que ya existe en db.json.
const TEST_ID = 3;

// Datos para el nuevo estudiante (CREATE)
const newStudent = {
    // Se mantiene el ID 8 y los datos del ejemplo proporcionado:
    id: 8,
    name: "Juan José",
    email: "juan.jose@email.com",
    enrollmentDate: "2023-07-10",
    active: true,
    level: "intermediate"
};

<<<<<<< HEAD
// Datos para la actualización completa (PUT)
const fullUpdateData = {
    id: TEST_ID,
=======
createStudent(newStudent);

//---------------------------------------

readAllStudents();

//---------------------------------------

// Asumiendo que el ID 3 existe en tu db.json
readStudentById(3);

//---------------------------------------

updateStudent(3, {
    id: 3,
>>>>>>> 6eb52f60951599bc4e5dd4a9d2ee5b38e7f309be
    name: "Francisco José",
    email: "fran.jose@email.com",
    enrollmentDate: "2024-07-10",
    active: true,
    level: "beginner"
};

// Datos para la modificación parcial (PATCH)
const partialUpdateData = {
    active: false,
    level: "advanced"
};

<<<<<<< HEAD
=======
patchStudent(3, {
    active: false,
    level: "advanced"
});
>>>>>>> 6eb52f60951599bc4e5dd4a9d2ee5b38e7f309be

// --- INICIO DE EJECUCIÓN ---

console.log('\n================================================================');
console.log('       INICIO DEL SCRIPT CRUD H T T P (COMANDOS C U R L)');
console.log(`  -> BASE URL: ${BASE_URL}`);
console.log('  -> ID de Prueba para UPD/DEL/GET: ${TEST_ID}');
console.log('================================================================\n');

// 1. C R E A T E (POST)
createStudent(newStudent);

// 2. R E A D - ALL (GET)
readAllStudents();

// 3. R E A D - BY ID (GET)
readStudentById(TEST_ID);

// 4. U P D A T E - FULL (PUT)
updateStudent(TEST_ID, fullUpdateData);

// 5. U P D A T E - PARTIAL (PATCH)
patchStudent(TEST_ID, partialUpdateData);

// 6. D E L E T E (DELETE)
deleteStudent(TEST_ID);


console.log('\n================================================================');
console.log('FIN DEL SCRIPT: Comandos cURL generados con éxito.');
console.log('================================================================\n');