# manual-HTTP-Francisco-JJL-Ignacio-MT

## Documentación cURL

Este documento describe los comandos cURL generados para las operaciones CRUD sobre la colección `students` en el servidor JSON.

**BASE URL:** `http://localhost:4000`  
**ID de prueba para UPDATE/PATCH/DELETE/GET:** `3`  

---

## CREATE (POST)

**Descripción:** Crea un nuevo estudiante en la colección `/students`.  

**Método HTTP:** `POST`  
**Endpoint:** `/students`  
**Flags/Headers:**
- `-i` → Muestra headers de la respuesta.
- `-X POST` → Indica que es un POST.
- `-H 'Content-Type: application/json'` → Se envía un cuerpo en JSON.
- `-d '{...}'` → Cuerpo de la petición (datos del estudiante).  

**Comando ejecutado:**

```bash
curl -i -X POST \
    -H 'Content-Type: application/json' \
    -d '{"id":8,"name":"Juan José","email":"juan.jose@email.com","enrollmentDate":"2023-07-10","active":true,"level":"intermediate"}' \
    http://localhost:4000/students
```

HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8
Respuesta esperada:
{
  "id": 8,
  "name": "Juan José",
  "email": "juan.jose@email.com",
  "enrollmentDate": "2023-07-10",
  "active": true,
  "level": "intermediate"
}

Código de estado: 201 Created


## READ ALL (GET)

**Descripción:** Recupera todos los estudiantes de la colección `/students`.  
Esta función corresponde al comando cURL generado por `readAllStudents()`.

**Método HTTP:** `GET`  
**Endpoint:** `/students`  
**Flags/Headers:**
- `-i` → Muestra los headers de la respuesta.
- `-X GET` → Indica que es un GET.
- No se requiere `-H 'Content-Type'` ni `-d` ya que no se envía cuerpo de datos.

**Comando ejecutado:**

```bash
curl -i -X GET \
    http://localhost:4000/students
```
Respuesta esperada:
[
  {
    "id": 1,
    "name": "Ana Fernández Silva",
    "email": "ana.fernandez@email.com",
    "enrollmentDate": "2024-08-20",
    "active": false,
    "level": "advanced"
  },
  {
    "id": 8,
    "name": "Juan José",
    "email": "juan.jose@email.com",
    "enrollmentDate": "2023-07-10",
    "active": true,
    "level": "intermediate"
  }
]

Código de estado: 200 OK

## READ BY ID (GET)

**Descripción:** Recupera un estudiante específico por su ID de la colección `/students`.  
Esta función corresponde al comando cURL generado por `readStudentById()`.

**Método HTTP:** `GET`  
**Endpoint:** `/students/3`  
**Flags/Headers:**
- `-i` → Muestra headers de la respuesta.
- `-X GET` → Indica que es un GET.
- No se requiere `-H 'Content-Type'` ni `-d` ya que no se envía cuerpo de datos.

**Comando ejecutado:**

```bash
curl -i -X GET \
    http://localhost:4000/students/3
```
Respuesta esperada:
{
  "id": 3,
  "name": "Francisco José",
  "email": "fran.jose@email.com",
  "enrollmentDate": "2024-07-10",
  "active": true,
  "level": "beginner"
}

Código de estado: 200 OK

## UPDATE FULL (PUT)

**Descripción:** Actualiza completamente los datos de un estudiante.  
Todos los campos existentes serán reemplazados por los proporcionados.  
Esta función corresponde al comando cURL generado por `updateStudent()`.

**Método HTTP:** `PUT`  
**Endpoint:** `/students/3`  
**Flags/Headers:**
- `-i` → Muestra headers de la respuesta.
- `-X PUT` → Método PUT.
- `-H 'Content-Type: application/json'` → Indica que se envía JSON.
- `-d '{...}'` → Datos completos del estudiante.

**Comando ejecutado:**

```bash
curl -i -X PUT \
-H 'Content-Type: application/json' \
-d '{
  "id": 3,
  "name": "Francisco José",
  "email": "fran.jose@email.com",
  "enrollmentDate": "2024-07-10",
  "active": true,
  "level": "beginner"
}' \
http://localhost:4000/students/3
```

Respuesta esperada:
{
  "id": 3,
  "name": "Francisco José",
  "email": "fran.jose@email.com",
  "enrollmentDate": "2024-07-10",
  "active": true,
  "level": "beginner"
}

Código de estado: 200 OK

## PATCH (Modificación parcial)

**Descripción:** Modifica solo ciertos campos de un estudiante existente.  
Solo se actualizarán los campos incluidos en el objeto enviado.  
Esta función corresponde al comando cURL generado por `patchStudent()`.

**Método HTTP:** `PATCH`  
**Endpoint:** `/students/3`  
**Flags/Headers:**
- `-i` → Muestra headers de la respuesta.
- `-X PATCH` → Método PATCH.
- `-H 'Content-Type: application/json'` → Indica que se envía JSON.
- `-d '{...}'` → Campos a actualizar.

**Comando ejecutado:**

```bash
curl -i -X PATCH \
-H 'Content-Type: application/json' \
-d '{
  "active": false,
  "level": "advanced"
}' \
http://localhost:4000/students/3
```

Respuesta esperada:
{
  "id": 3,
  "name": "Francisco José",
  "email": "fran.jose@email.com",
  "enrollmentDate": "2024-07-10",
  "active": false,
  "level": "advanced"
}

Código de estado: 200 OK

## DELETE

**Descripción:** Elimina un estudiante por su ID de la colección `/students`.  
Esta función corresponde al comando cURL generado por `deleteStudent()`.

**Método HTTP:** `DELETE`  
**Endpoint:** `/students/3`  
**Flags/Headers:**
- `-i` → Muestra headers de la respuesta.
- `-X DELETE` → Método DELETE.

**Comando ejecutado:**

```bash
curl -i -X DELETE \
http://localhost:4000/students/3
```
Respuesta esperada:
HTTP/1.1 200 OK

Código de estado: 200 OK
