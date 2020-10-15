# Prueba de Backend en NodeJS

## TodoList

### Prerequisitos

```
NodeJs = v10.19.0
Mongodb = v3.6.8
VueJs2 = v4.5.7
```

### Instalación

* Clona el repositorio por medio de git
```bash
$ git clone https://gitlab.com/IndieLevelStudio/lina-test.git
```

#### Backend *(nodejs, morgan, express, mongoose, nodemon)*

1. Ingresar al directorio clonado `lina-test/backend`

```bash
$ cd backend
```

2. Instalar las dependencias para correr el server

```bash
$ npm install
```

3. Inicie el servidor de desarrollo:
```bash
$ npm run dev
```

4. Abra el sitio de desarrollo yendo a `http://localhost:3000/api/todolist` en su navegador.

  > Nota: la base de datos del proyecto se llama `todolist` esta se crea automaticamente y no contiene password

#### Frontend *(vuejs2, vuetify, axios)*

1. Ingresar al directorio clonado `lina-test/frontend`

```bash
$ cd frontend
```

2. Instalar las dependencias para correr el server

```bash
$ yarn install
```

3. Inicie el servidor de desarrollo:
```bash
$ yarn serve
```

4. Abra el sitio de desarrollo yendo a `http://localhost:8080` en su navegador.

### Rutas utilizadas con postam
|  Entrada   |     URL    |
| ---------- | ---------- |
| GET   | `http://localhost:3000/api/todolist`   |
| POST   | `http://localhost:3000/api/todolist/create`   |
| POST   | `http://localhost:3000/api/todolist/update/<id>`   |
| GET   | `http://localhost:3000/api/todolist/<id>`   |
| DELETE   | `http://localhost:3000/api/todolist/delete/<id>`   |

## Criterios de aceptacion
- [x] Agregar tarea
- [x] Solucionar tarea (checkear)
- [x] Borrar tarea
- [x] Filtrar tareas completadas
- [x] Filtrar tareas pendientes
- [x] Mostrar todas las tareas
- [x] Mostrar tareas completadas vs total tareas

## Construido con

* Ubuntu Server 20
* Vim
* AWS
* Postman

## Contribuyendo

Contribuya usando GitHub Flow. Cree una rama, agregue confirmaciones y abra una solicitud de extracción .

## Versionado

v1

## Autores

* **Lina María Montaño Ramírez** - *Backend Developer* - [calypsobronte](https://github.com/calypsobronte)


## Licencia

 MIT License 

