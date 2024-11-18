# Aplicación de Lista de Libros con React

Crea una aplicación en React que permita visualizar un listado de libros y ver detalles de cada libro usando una API pública. La aplicación debe cumplir con los siguientes requisitos:

## Requisitos

### 1. API Pública
   [Google Books API](https://www.googleapis.com/books/v1/volumes): permite buscar libros por título, autor o tema.

   Para buscar en la api le pasan el nombre por query:
   
   https://www.googleapis.com/books/v1/volumes?q=harry+potter
   
   https://www.googleapis.com/books/v1/volumes?q=el+se%C3%B1or+de+los+anillos
   

### 2. Rutas en React
   - **Ruta principal (`/`)**: Muestra una lista de todos los libros con su título y autor.
   - **Ruta de detalles (`/book/:id`)**: Muestra el título, autor, año de publicación y calificación de un libro específico seleccionado de la lista.

### 3. Estado y Consumo de API
   - Al cargar la aplicación, realiza una petición a la API para obtener el listado de libros y almacena los datos en el estado.
   - Usa el estado para mostrar los libros en la ruta principal.

### 4. Navegación entre Vistas
   - Al hacer clic en un libro de la lista, se debe navegar a la ruta de detalles para mostrar la información completa de ese libro.

## Notas
- Usa `React Router DOM` para manejar las rutas.
- Utiliza componentes funcionales y hooks (`useState`, `useEffect`, `useParams` ) para gestionar el estado y realizar la llamada a la API.
- Elige una API de tu preferencia de las sugeridas para el consumo de datos.