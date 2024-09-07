'use client';

import Pesquisa from "@/components/pesquisa";
import Produto from "@/components/Produto";
import { SetStateAction, useState, useEffect } from "react";
import { Livros } from "../../../types/home/home";
import GetLivrosHome from "../../../actions/home/actions";

export default function Produtos() {
  const [posts, setPosts] = useState<Livros[]>([]);
  useEffect(() => {
    GetLivrosHome().then(setPosts);
  }, []);


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const displayedProducts = posts.slice(
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
            {displayedProducts.map((post) => (
              <Produto key={post.id} post={post} />
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
