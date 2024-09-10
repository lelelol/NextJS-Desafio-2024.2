import React from 'react';

interface ViewModalProps {
    isOpen: boolean;
    onClose: () => void;
    livro: { id: number; nome: string; autor: string; genero: string; price: string; img: string };
}

export default function ViewLivroModal({ isOpen, onClose, livro }: ViewModalProps) {
    if (!isOpen) return null;

    return (
        <div className="z-50 fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl mb-4">Visualizar Livro</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Título</label>
                    <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100">{livro.nome}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Autor</label>
                    <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100">{livro.autor}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Preço</label>
                    <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100">{livro.price}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Caminho da Imagem</label>
                    <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100 whitespace-pre-line break-words">
                        {livro.img}
                    </p>

                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Gênero</label>
                    <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100">{livro.genero}</p>
                </div>

                <div className="flex justify-end">
                    <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Fechar</button>
                </div>
            </div>
        </div>
    );
}
