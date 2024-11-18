# Aplicación de Lista de Libros con React

¡Bienvenido a mi proyecto de lista de libros! Esta es una aplicación construida con **React**, que utiliza la **API de Google Books** para mostrar una lista de libros y sus detalles. La aplicación fue creada usando **Vite** como herramienta de construcción y con las librerías **Flowbite**, **NextUI** y **Tailwind** para los estilos y la interfaz de usuario.

![Libro](public/logo.svg)

## 🛠️ Tecnologías Usadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos en React.
- **Flowbite**: Librería de componentes de interfaz de usuario con diseño moderno.
- **NextUI**: Librería de componentes de interfaz para React con un diseño limpio.
- **Tailwind CSS**: Framework de CSS para estilos personalizables y responsivos.

## 📚 Requisitos y Funcionalidades

### 1. **Consumo de la API Pública de Google Books**
La aplicación hace uso de la [Google Books API](https://www.googleapis.com/books/v1/volumes) para obtener los datos de los libros. La API permite buscar libros por título, autor o tema.

- Ejemplo de búsqueda:  
  [Buscar "Harry Potter"](https://www.googleapis.com/books/v1/volumes?q=harry+potter)  
  [Buscar "El Señor de los Anillos"](https://www.googleapis.com/books/v1/volumes?q=el+se%C3%B1or+de+los+anillos)

### 2. **Rutas de la Aplicación en React**

- **Ruta principal (`/`)**: Muestra una lista de todos los libros con su título y autor.
- **Ruta de detalles (`/book/:id`)**: Muestra el título, autor, año de publicación y calificación de un libro específico seleccionado de la lista.

### 3. **Estado y Consumo de API**
- Al cargar la aplicación, realiza una solicitud a la API de Google Books para obtener el listado de libros.
- Los datos obtenidos se almacenan en el estado de la aplicación usando el hook `useState` de React.
- Los libros se muestran en la ruta principal y se almacenan en el estado.

### 4. **Navegación entre Vistas**
- Utilizando **React Router DOM**, la navegación entre las vistas se gestiona de manera sencilla y eficaz.
- Al hacer clic en un libro de la lista, el usuario es redirigido a la ruta de detalles del libro donde se muestra información adicional sobre el mismo.

### 5. **Funcionalidades Futuras**
- Implementar un sistema de búsqueda más avanzado con filtros por categorías.
- Añadir opciones de clasificación de libros (por año, autor, calificación, etc.).
- Guardar los libros favoritos del usuario en el localStorage para que se mantengan entre sesiones.

## 📝 Notas Importantes

- Se utilizaron componentes funcionales y hooks (`useState`, `useEffect`, `useParams`) para gestionar el estado y realizar la llamada a la API.
- El diseño es totalmente responsivo gracias al uso de **Tailwind CSS**, que asegura que la aplicación se vea bien en dispositivos de cualquier tamaño.
- **Flowbite** y **NextUI** fueron utilizados para mejorar la experiencia del usuario con una interfaz limpia y moderna.
- La **Paginación** no funciona correctamente, hay error de aumento de `totalPages` para corregir.

## ⚙️ Instalación

Para ejecutar esta aplicación en tu máquina local, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
