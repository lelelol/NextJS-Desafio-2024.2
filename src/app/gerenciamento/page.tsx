'use client'
import Tabela from '@/components/tabela';
import React, { useEffect, useState } from 'react';
import GetLivrosHome, { GetLivrosAdm } from '../../../actions/home/actions';
import { useSearchParams } from 'next/navigation';
import { Livros } from '../../../types/home/home';
import Paginacao from '@/components/paginacao';
import { Suspense } from 'react';



export default function PaginaTabela() {
  return (
    <Suspense fallback={<div>Carregando!</div>}>
      <PaginaTabelaContent />
    </Suspense>
  );
}

function PaginaTabelaContent() {
  const [posts, setPosts] = useState<Livros[]>([]);
  const [totalPages, settotalPages] = useState(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    const page = searchParams.get('page');
    const currentPage = page ? parseInt(page, 10) : 1;

    GetLivrosAdm(currentPage).then(data => {
      setPosts(data.posts);
      settotalPages(data.totalPages);
    });
  }, [searchParams]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tabela de Livros</h1>
      <Tabela dados={posts} />
      <Paginacao totalPages={totalPages} />
    </div>
  );
}