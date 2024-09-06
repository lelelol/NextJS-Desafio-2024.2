'use client';

import Pesquisa from "@/components/pesquisa";
import Produto from "@/components/Produto";
import { SetStateAction, useState } from "react";

export default function Produtos() {

  const produtos = [
    { nome: "Livro A", autor: "Autor A", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro B", autor: "Autor B", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro C", autor: "Autor C", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro D", autor: "Autor D", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro A", autor: "Autor A", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro B", autor: "Autor B", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro C", autor: "Autor C", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro D", autor: "Autor D", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro A", autor: "Autor A", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro B", autor: "Autor B", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro C", autor: "Autor C", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro D", autor: "Autor D", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro A", autor: "Autor A", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro B", autor: "Autor B", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro C", autor: "Autor C", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro D", autor: "Autor D", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro A", autor: "Autor A", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro B", autor: "Autor B", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro C", autor: "Autor C", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro D", autor: "Autor D", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro A", autor: "Autor A", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro B", autor: "Autor B", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro C", autor: "Autor C", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro D", autor: "Autor D", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro A", autor: "Autor A", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro B", autor: "Autor B", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    { nome: "Livro C", autor: "Autor C", img: "/assets/ex.jpg", valor: "R$ 30,00" },
    { nome: "Livro D", autor: "Autor D", img: "/assets/ex.jpg", valor: "R$ 25,00" },
    // Continue a lista conforme necessário
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(produtos.length / itemsPerPage);

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const displayedProducts = produtos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Pesquisa />
      <div className="m-10">
        <div className="pl-6 mt-10 mb-[2%]">
          <h1 className="font-semibold text-2xl mb-0">
            Encontre a sua próxima obsessão
          </h1>
          <h3 className="font-normal text-cinzatxt mt-0 text-xl">
            Nossos livros
          </h3>
        </div>
        <div className="flex gap-6 justify-center flex-col items-center">
          <div className="flex gap-14 flex-wrap items-center justify-center">
            {displayedProducts.map((livro, index) => (
              <Produto
                key={index}
                id={index}
                titulo={livro.nome}
                autor={livro.autor}
                valor={livro.valor}
                img={livro.img}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 my-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`text-white px-4 py-2 rounded-md font-semibold text-lg transition duration-300 ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-300 hover:bg-blue-400'}`}
          >
            Anterior
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-4 py-2 rounded-md font-semibold text-lg transition duration-300 ${pageNumber === currentPage ? 'bg-blue-500 text-white' : 'bg-blue-300 text-white hover:bg-blue-400'}`}
            >
              {pageNumber}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`text-white px-4 py-2 rounded-md font-semibold text-lg transition duration-300 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-300 hover:bg-blue-400'}`}
          >
            Próximo
          </button>
        </div>
      </div>
    </>
  );
}
