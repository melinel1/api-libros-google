import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Image,
  Chip,
  CardFooter,
} from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";

/**
 *
 * @returns Muestra el título, autor,
 * año de publicación y calificación de
 * un libro específico seleccionado de la lista.
 */
const BookDetail = () => {
  const { id } = useParams(); // Obtener el ID del libro desde la URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Cambiado a null para mejorar el manejo de errores

  const BASE_URL = "https://www.googleapis.com/books/v1/volumes/";

  useEffect(() => {
    // Fetch details of the book when the component mounts
    const fetchBookDetail = async () => {
      try {
        const response = await fetch(`${BASE_URL}${id}`);
        if (!response.ok) {
          // Verificar si la respuesta es correcta
          throw new Error("No se pudo obtener el libro");
        }
        const result = await response.json();
        console.log(result);
        if (result.volumeInfo) {
          setBook(result.volumeInfo);
        } else {
          setError("No se encontraron detalles para este libro.");
        }
      } catch (err) {
        setError(err.message || "Hubo un error inesperado.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetail();
  }, [id]);

  return (
    <section className="min-h-screen px-8 py-24 bg-gradient-to-tr from-green-400 to-blue-600 text-white flex">
      
      <Card className="max-w-6xl mx-auto bg-background/30 md:flex md:justify-between md:gap-8 md:flex-row py-3">
        {loading && <CircularProgress label="Cargando libro..." />}
        {error && (
        <div
          className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-800 rounded-lg bg-background/30 shadow-2xl"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">¡Ups...!</span> {error}
          </div>
        </div>
      )}
        {/* Card Body */}
        <CardBody className="md:w-1/2">
          {/* Verifica que book y book.imageLinks existan antes de intentar acceder a imageLinks.thumbnail */}
          {book && book.imageLinks && book.imageLinks.thumbnail ? (
            <Image
              src={book.imageLinks.thumbnail}
              alt={book.title}
              className="object-cover rounded-xl"
              width={200}
            />
          ) : (
            <Image
              src="ruta-a-imagen-default.jpg" // Imagen por defecto si no hay thumbnail
              alt="Imagen no disponible"
              className="object-cover rounded-xl"
              width={200}
            />
          )}

          <div className="mt-3 flex gap-3 flex-wrap mb-3">
            {book && book.categories
              ? book.categories.map((category) => (
                  <Chip variant="flat" key={category}>
                    {category}
                  </Chip>
                ))
              : <Chip variant="flat">Sin categorías</Chip>}
          </div>
                      {/* Clasificación */}
                      {book && book.averageRating ? (
              <Chip variant="flat" color="secondary">
                {`Clasificación: ${book.averageRating}`}
              </Chip>
            ) : (
              <Chip variant="flat" color="warning">
                Clasificación: No disponible
              </Chip>
            )}
                      {/* Año de publicación y clasificación */}
          <div className="mt-4 flex gap-4">
            {/* Año de publicación */}
            {book && book.publishedDate ? (
              <Chip variant="flat" color="primary">
                {`Año: ${book.publishedDate.split("-")[0]}`}
              </Chip>
            ) : (
              <Chip variant="flat" color="warning">
                Año: No disponible
              </Chip>
            )}
          </div>
        </CardBody>

        {/* Card Footer */}
        <CardFooter className="md:w-1/2 flex flex-col gap-1 items-start">
          <h1 className="text-2xl font-semibold text-cyan-200">
            {book && book.title ? book.title : "Sin título"}
          </h1>
          <p className="text-sm text-white">
            {book && book.authors ? book.authors?.join(", ") : "Sin autores."}
          </p>
          {book && book.description ? (
            <p
              className="mt-4 text-white"
              dangerouslySetInnerHTML={{
                __html: book.description || "No hay descripción disponible.",
              }}
            />
          ) : (
            "No hay descripción disponible."
          )}

          {/* Botones */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-start w-full">
            {book && book.previewLink ? (
              <a
                className="font-medium text-md text-white from-green-400 to-blue-600 bg-gradient-to-tr block text-center rounded-md px-5 py-2.5 hover:from-blue-600 hover:to-green-400 w-full md:w-auto"
                href={book.previewLink || "Sin dirección disponible"}
                target="_blank"
              >
                Comprar
              </a>
            ) : null}

            <Link
              to={"/"}
              className="font-medium text-md text-gray-900 border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 bg-white/30 w-full md:w-auto text-center"
            >
              Volver al buscador
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default BookDetail;
