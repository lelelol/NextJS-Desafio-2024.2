import Tabela from '@/components/tabela';
import React from 'react';

const dados = [
  { nome: 'Livro A', autor: 'Autor A', genero: 'Ficção', valor: 'R$ 30,00' },
  { nome: 'Livro B', autor: 'Autor B', genero: 'Romance', valor: 'R$ 25,00' },
  // Adicione mais dados conforme necessário
];

export default function PaginaTabela() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tabela de Livros</h1>
      <Tabela dados={dados} />
    </div>
  );
}