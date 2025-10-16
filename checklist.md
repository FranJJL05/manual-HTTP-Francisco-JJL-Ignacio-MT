# ✅ Checklist de Progreso: CRUD HTTP Manual

Este documento sirve como control de progreso para el Ejercicio de CRUD HTTP Manual con cURL y Herramientas Visuales.

---

## 🏗 Fase I: Configuración Inicial del Proyecto (Parte 1)

Tareas esenciales para establecer la estructura base y las dependencias.

### 1. Inicialización y dependencias
- [X] Crear la carpeta del proyecto: `manual-http-[nombre-iniciales-apellidos]`.
- [X] Inicializar proyecto Node.js con `npm init` (datos de Nombre, Versión, Descripción, Autor completados).
- [X] Instalar `json-server` (para la API REST).
- [X] Instalar `dotenv` (para variables de entorno).
- [X] Configurar `package.json` para usar ESM (`"type": "module"`).
- [X] Añadir script `server:up` (debe levantar `json-server` en puerto 4000 vigilando `db.json`).
- [X] Añadir script `crud:curl`.
- [X] Añadir script `validate`.

### 2. Estructura y Archivos de Configuración
- [X] Crear la estructura de carpetas requerida (`src/`, `src/db/`, `scripts/`, `images/`).
- [X] Crear archivo `.env` con las variables PORT (4000), API\_BASE\_URL (http://localhost), y NODE\_ENV (development).
- [X] Crear archivo `.env.example`.
- [X] Crear archivo `.gitignore` (debe ignorar al menos `node_modules/` y `.env`).
- [X] Crear archivo `src/db/db.json` con las colecciones: `students` (7 estudiantes), `courses` (4 cursos), y `enrollments` (4 inscripciones).

---

## 💻 Fase II: Lógica y Scripting (Parte 2 y 6)

Desarrollo del código JavaScript para generar los comandos cURL y el script de validación.

### 3. Script CRUD (`src/crud-curl.js`)
- [X] Crear `src/crud-curl.js` e importar y configurar `dotenv`.
- [X] Construir la `BASE_URL` completa.
- [X] Implementar la función `createStudent(studentData)` (imprime comando POST).
- [X] Implementar la función `readAllStudents()` (imprime comando GET All).
- [X] Implementar la función `readStudentById(id)` (imprime comando GET by ID).
- [X] Implementar la función `updateStudent(id, studentData)` (imprime comando PUT).
- [X] Implementar la función `patchStudent(id, partialData)` (imprime comando PATCH).
- [X] Implementar la función `deleteStudent(id)` (imprime comando DELETE).
- [X] Asegurar que todas las funciones incluyan comentarios JSDoc y parámetros apropiados.
- [X] Ejecutar todas las funciones al final del script, pasando los parámetros apropiados.

### 4. Script de Validación (`scripts/validate.sh`)
- [X] Crear el script `scripts/validate.sh`.
- [X] Implementar la validación de la existencia de al menos 10 archivos y carpetas clave (ej. `package.json`, `db.json`, `peticiones-crud.http`, `README.md`).
- [X] Verificar en `package.json`: `type: module`, y que `dotenv` y `json-server` estén instalados.
- [X] Verificar la existencia de al menos 6 capturas de Thunder Client en la carpeta `images/`.
- [X] Dar permisos de ejecución al script.
- [X] Verificar que el script funciona correctamente desde la terminal.

---

## 📚 Fase III: Documentación y Herramientas Visuales (Partes 3, 4 y 5)

Ejecución manual de comandos, uso de herramientas visuales y documentación completa en `README.md`.

### 5. Documentación cURL (Parte 3)
- [ ] Levantar el servidor `json-server`.
- [ ] Ejecutar los comandos cURL generados y capturar las respuestas reales.
- [ ] Documentar el **CREATE** en `README.md` (Comando, explicación de flags/headers, método, respuesta real y código de estado).
- [ ] Documentar el **READ ALL** en `README.md`.
- [ ] Documentar el **READ BY ID** en `README.md`.
- [ ] Documentar el **UPDATE (PUT)** en `README.md`.
- [ ] Documentar el **PATCH** en `README.md`.
- [ ] Documentar el **DELETE** en `README.md`.

### 6. Thunder Client (Parte 4)
- [ ] Crear las 6 peticiones CRUD en Thunder Client.
- [ ] Realizar una captura de pantalla por cada petición (mostrando Request y Response completos).
- [ ] Guardar las 6+ capturas en la carpeta `images/` con nombres descriptivos.
- [ ] Incluir y documentar las capturas en `README.md`.

### 7. REST Client (Parte 5)
- [ ] Crear el archivo `peticiones-crud.http` en la raíz.
- [ ] Definir variables al inicio (`@baseUrl`, `@port`, `@apiUrl`).
- [ ] Implementar la petición **CREATE** (POST).
- [ ] Implementar la petición **READ All** (GET).
- [ ] Implementar la petición **READ by ID** (GET).
- [ ] Implementar petición **READ** para filtrar estudiantes activos (GET).
- [ ] Implementar petición **READ** para filtrar estudiantes por nivel (GET).
- [ ] Implementar la petición **UPDATE** completo (PUT).
- [ ] Implementar la petición **PATCH** de campo específico.
- [ ] Implementar la petición **DELETE**.
- [ ] Separar cada petición con `###` y añadir comentarios descriptivos.
- [ ] Probar todas las peticiones desde VS Code.

---

## 🌿 Fase IV: Git y Entrega (Parte 8)

Tareas finales de control de versiones y el proceso de entrega.

### 8. Git Workflow
- [ ] Crear repositorio en GitHub y añadir al profesor como colaborador.
- [ ] Inicializar Git local y conectar con el remoto.
- [ ] Crear y subir la rama principal `main`.
- [ ] Crear y cambiar a la rama de desarrollo `m1/http-request-response`.
- [ ] Realizar *commits* incrementales y descriptivos (usando convenciones `feat:`, `docs:`, etc.).
- [ ] **Asegurar que `.env` no haya sido versionado**.
- [ ] Subir la rama al repositorio remoto.

### 9. Entrega
- [ ] Crear el *Pull Request* (PR) hacia `main`.
- [ ] Asegurar que la descripción del PR sea detallada.
- [ ] Si el trabajo es en pareja: La descripción del PR detalla la división del trabajo.
- [ ] **Importante:** El script de validación debe pasar sin errores.
- [ ] Tras la aprobación y *merge* del PR, actualizar la rama `main` local.
- [ ] Crear el *tag* `M1/http-request-response`.
- [ ] Subir el *tag* al repositorio remoto.