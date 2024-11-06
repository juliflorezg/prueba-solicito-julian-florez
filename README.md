
# Proyecto Fullstack con NestJS y React

Este es un proyecto fullstack que incluye un backend construido con NestJS y un frontend con React. El proyecto utiliza Docker Compose para gestionar la base de datos y Prisma como ORM.

## Estructura del Proyecto

- `api-nest/`: Directorio del backend en NestJS
- `client-react/`: Directorio del frontend en React

## Requisitos

- [Node.js](https://nodejs.org/) (v16 o superior)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)
- [Prisma CLI](https://www.prisma.io/docs/concepts/components/prisma-cli) (Opcional, pero recomendado para manejar migraciones y generar modelos)

## Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/juliflorezg/prueba-solicito-julian-florez.git
cd prueba-solicito-julian-florez
```

### 2. Configurar variables de entorno

Usualmente el archivo `.env` con variables de entorno no se comparte, sin embargo para hacer el proceso de evaluación más simple para los calificadores, he incluido el archivo  `.env` dentro del directorio `api-nest/` con las variables necesarias para la ejecución del proyecto.

En cualquier otro caso estas variables deberían configurarse debidamente con algún gestor de secretos o variables en el entorno de despliegue.

## Instalación

### 1. Instalar dependencias del backend

```bash
cd api-nest
npm install
```

### 2. Instalar dependencias del frontend

```bash
cd ../client-react
npm install
```

## Base de Datos

### 1. Iniciar la base de datos con Docker Compose

Desde el directorio raíz del proyecto, ejecuta:

```bash
docker-compose up -d
```

Esto iniciará el contenedor definido en `docker-compose.yml`, para la base de datos PostgreSQL.

### 2. Configurar la base de datos con Prisma

#### Generar el cliente Prisma

Dentro del directorio `api-nest/`, ejecuta:

```bash
npx prisma generate
```

#### Aplicar migraciones

Si tienes migraciones configuradas, puedes aplicarlas ejecutando:

```bash
npx prisma migrate deploy
```

> **Nota**: Si necesitas crear una nueva migración, usa `npx prisma migrate dev`.

## Ejecución del Proyecto

### 1. Iniciar el backend

Desde el directorio `api-nest/`, ejecuta:

```bash
npm run start:dev
```

Esto iniciará el servidor NestJS en modo de desarrollo.

### 2. Iniciar el frontend

Desde el directorio `client-react/`, ejecuta:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite para el frontend React.

## Scripts Disponibles

### Backend (NestJS)

- `npm run start`: Inicia el servidor en modo de producción
- `npm run start:dev`: Inicia el servidor en modo de desarrollo
- `npm run build`: Compila el proyecto
- `npx prisma studio`: Abre Prisma Studio para gestionar la base de datos visualmente

### Frontend (React)

- `npm run dev`: Inicia el servidor de desarrollo de Vite
- `npm run build`: Compila la aplicación para producción
- `npm run preview`: Previsualiza la aplicación compilada

## Notas

- Asegúrate de que el contenedor de Docker esté corriendo antes de iniciar el backend, ya que el servidor NestJS se conecta a la base de datos PostgreSQL.
- Puedes detener los contenedores de Docker en cualquier momento con `docker-compose down`.

