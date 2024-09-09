import React, { useState, useEffect } from 'react';

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (livro: { id: number; nome: string; autor: string; genero: string; price: string; img: string }) => void;
    initialData: { id: number; nome: string; autor: string; genero: string; price: string; img: string };
}

export default function EditLivroModal({ isOpen, onClose, onSubmit, initialData }: EditModalProps) {
    const [nome, setNome] = useState(initialData.nome);
    const [autor, setAutor] = useState(initialData.autor);
    const [genero, setGenero] = useState(initialData.genero);
    const [price, setPrice] = useState(initialData.price);
    const [img, setImg] = useState(initialData.img);

    useEffect(() => {
        setNome(initialData.nome);
        setAutor(initialData.autor);
        setGenero(initialData.genero);
        setPrice(initialData.price);
        setImg(initialData.img);
    }, [initialData]);

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            id: initialData.id,
            nome,
            autor,
            genero,
            price,
            img,
        });

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="z-50 fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl mb-4">Editar Livro</h2>
                <form onSubmit={handleEditSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Título</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Autor</label>
                        <input
                            type="text"
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Preço</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Caminho da Imagem</label>
                        <input
                            type="text"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Gênero</label>
                        <select
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        >
                            <option value="">Selecione um gênero</option>
                            <option value="fantasia">Fantasia</option>
                            <option value="drama">Drama</option>
                            <option value="romance">Romance</option>
                            <option value="misterio">Mistério</option>
                            <option value="ação">Ação</option>
                            <option value="aventura">Aventura</option>
                        </select>
                    </div>

                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
