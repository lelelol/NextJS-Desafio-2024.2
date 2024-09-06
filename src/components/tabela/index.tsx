import React from 'react';

const Tabela = ({ dados }: { dados: Array<any> }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
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
              <td className="py-2 px-4 border-b">{item.valor}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">Ação</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;