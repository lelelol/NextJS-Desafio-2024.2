import React, { useState } from 'react';
import { Livros } from '../../../types/home/home';
import { AddLivro, DeleteLivro, EditLivro } from '../../../actions/home/actions';
import AddLivroModal from '../modalAD';
import EditLivroModal from '../modalED'; // Importe o EditLivroModal

const Tabela = ({ dados }: { dados: Livros[] }) => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedLivro, setSelectedLivro] = useState<Livros | null>(null);

  const handleAddLivro = async (livro: { nome: string, autor: string, genero: string, price: string, img: string }) => {
    try {
      await AddLivro(livro);
      console.log("Livro adicionado com sucesso");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao adicionar o livro:", error);
    }
  };

  const handleEditLivro = async (livro: { id: number; nome: string; autor: string; genero: string; price: string; img: string }) => {
    try {
      await EditLivro(livro);
      console.log("Livro editado com sucesso");
      window.location.reload(); // Ou atualize a tabela de outra forma
    } catch (error) {
      console.error("Erro ao editar o livro:", error);
    }
    setEditModalOpen(false);
  };

  return (
    <div className="overflow-x-auto p-10">
      <button onClick={() => setAddModalOpen(true)} className="bg-green-500 text-white px-4 py-2 rounded">
        Adicionar Livro
      </button>

      <AddLivroModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSubmit={handleAddLivro}
      />

      {selectedLivro && (
        <EditLivroModal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          onSubmit={handleEditLivro}
          initialData={selectedLivro}
        />
      )}

      <table className="min-w-full bg-white text-justify">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nome</th>
            <th className="py-2 px-4 border-b">Autor</th>
            <th className="py-2 px-4 border-b">Gênero</th>
            <th className="py-2 px-4 border-b">Valor</th>
            <th className="py-2 px-4 border-b">Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item.nome}</td>
              <td className="py-2 px-4 border-b">{item.autor}</td>
              <td className="py-2 px-4 border-b">{item.genero}</td>
              <td className="py-2 px-4 border-b">{item.price}</td>
              <td className="py-2 px-4 border-b flex justify-center gap-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    setSelectedLivro(item);
                    setEditModalOpen(true);
                  }}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    DeleteLivro(item.id);
                    window.location.reload();
                  }}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
