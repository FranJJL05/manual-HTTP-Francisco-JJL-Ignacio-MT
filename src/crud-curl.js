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
    console.log('➡️ COMANDO C R E A T E (POST): Crear Nuevo Estudiante');
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
    console.log('➡️ COMANDO R E A D (GET): Leer Todos los Estudiantes');
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
    console.log(`➡️ COMANDO R E A D (GET): Leer Estudiante con ID ${id}`);
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