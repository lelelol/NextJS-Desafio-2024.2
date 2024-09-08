'use client';

import Produto from "@/components/Produto";
import { SetStateAction, useState, useEffect, Suspense } from "react";
import { Livros } from "../../../types/home/home";
import GetLivrosHome from "../../../actions/home/actions";
import Searchmain from "@/components/pesquisa-main";
import Paginacao from "@/components/paginacao";
import { useSearchParams } from 'next/navigation';

export default function Produtos() {
  const Fallback = () => <div>Carregando!</div>;
  return (
    <Suspense fallback={<Fallback />}>
      <ProdutosContent />
    </Suspense>
  );
}

function ProdutosContent() {
  const [posts, setPosts] = useState<Livros[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    const page = searchParams.get('page');
    const currentPage = page ? parseInt(page, 15) : 1;

    GetLivrosHome(currentPage).then(data => {
      setPosts(data.posts);
      setTotalItems(data.totalItems);
    });
  }, [searchParams]);

  const totalPages = Math.ceil(totalItems / 15);

  return (
    <>
      <Searchmain />
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
            {posts.map((post) => (
              <Produto key={post.id} post={post} />
            ))}
          </div>
        </div>
        <Paginacao totalPages={totalPages} />
      </div>
    </>
  );
}
