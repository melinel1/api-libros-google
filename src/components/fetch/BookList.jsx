import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Input,
  CircularProgress,
  Chip
} from "@nextui-org/react";
import { SearchIcon } from "../Icons/SearchIcon";
import { Pagination } from "@nextui-org/react";

/**
 *
 * @returns Muestra una lista de todos
 * los libros con su título y autor.
 */
const BookList = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("harry potter");  // Valor por defecto
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorBuscador, setErrorBuscador] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);  // Página actual
  const [totalPages, setTotalPages] = useState(0);    // Total de páginas
  const [totalItems, setTotalItems] = useState(0);  // Estado para totalItems

  const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
  const ITEMS_PER_PAGE = 10;
  
  // Actualiza los resultados mientras el usuario escribe, con debounce.
  const handleSearchChange = (value) => {
    setSearch(value);
    
    if (!value.trim()) {
      setBooks([]);
      setErrorBuscador(true);
      return;
    }
  
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
  
    const timeout = setTimeout(() => {
      setCurrentPage(1);  // Reiniciar la página al buscar
      fetchBooks(value, 1);
    }, 500);
    setDebounceTimeout(timeout);
  };

  useEffect(() => {
    fetchBooks(search, currentPage);
  }, [search, currentPage]);
  
  useEffect(() => {
    if (totalItems > 0) {
      setTotalPages(Math.ceil(totalItems / ITEMS_PER_PAGE));
    }
  }, [totalItems]);

  const fetchBooks = async (search, page = 1) => {
    setLoading(true);
    setError(false);
    setErrorBuscador(false);
  
    try {
      const startIndex = (page - 1) * ITEMS_PER_PAGE;
      const response = await fetch(`${BASE_URL}?q=${search}&startIndex=${startIndex}&maxResults=${ITEMS_PER_PAGE}`);
      const result = await response.json();
  
      console.log(result); // Verificar la respuesta de la API
  
      if (result.items?.length) {
        setBooks(result.items);
        setTotalItems(result.totalItems);  // Verifica que totalItems esté disponible
        setTotalPages(Math.ceil(result.totalItems / ITEMS_PER_PAGE)); // Calcula el total de páginas correctamente
      }  else {
        setBooks([]);
        setErrorBuscador(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);  // Actualizar la página actual
  };

  return (
    <div>
      <div className="min-h-screen w-100 px-8 flex justify-center items-center flex-col bg-gradient-to-tr from-green-400 to-blue-600 text-white shadow-l py-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
          El mejor <span className="text-cyan-200">Buscador</span> de libros.
        </h1>
        <Input
          onClear={() => setSearch("")}
          onChange={(e) => handleSearchChange(e.target.value)}
          value={search}
          label="Search"
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
              "mb-8",
              "container",
              "mx-auto",
            ],
          }}
          placeholder="Escribe un título para buscar..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />

        {loading && <CircularProgress label="Cargando resultados..." />}
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
              <span className="font-medium">¡Ups...!</span> Hubo un error en la
              búsqueda.
            </div>
          </div>
        )}
        {errorBuscador && !loading && !error && (
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
              <span className="font-medium">¡Ups...!</span> No se encontraron
              resultados. Por favor, intenta con otra búsqueda.
            </div>
          </div>
        )}

        {/* La grilla de las cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {books.map((book) => (
            <Card
              isBlurred
              className="bg-background/60 border-none max-w-[250px]"
              key={book.id}
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <Image
                    alt={book.volumeInfo.title}
                    className="object-cover rounded-xl"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    width={200}
                  />
                )}
              </CardHeader>
              <CardBody>
                <h2 className="text-xl font-semibold text-white truncate">
                  {book.volumeInfo.title}
                </h2>
                <small className="text-sm text-white/70">
                  {book.volumeInfo.authors?.join(", ") || "Sin autores."}
                </small>
                <Chip variant="flat">{book.volumeInfo.categories?.join(", ") || "Sin categorías."}</Chip>
              </CardBody>
              <CardFooter className="pt-0 pb-4 px-4 flex-col items-center justify-center ">
                <Link to={`/book/${book.id}`} className="font-medium text-md text-white from-green-400 to-blue-600 bg-gradient-to-tr w-full text-center rounded-md py-2 hover:from-blue-600 hover:to-green-400">
                  Más info
                </Link>
              </CardFooter>
            </Card>
          ))}
        </ul>

        <Pagination
          total={totalPages}
          page={currentPage}
          onChange={handlePageChange}  // Asegúrate de que la página se actualiza correctamente
          color="primary"
          shadow
          className="mt-6"
        />
      </div>
    </div>
  );
};

export default BookList;
