import React, { useState, useEffect } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (livro: { id: number }) => void;
}

export default function DeleteModal({ isOpen, onClose, onSubmit }: ModalProps) {
    const [id, setId] = useState<number | null>(null);

    const handle = (e: React.FormEvent) => {
        e.preventDefault();

        if (id !== null) {
            onSubmit({ id });
        }

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="z-50 fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl mb-4">Excluir Livro</h2>
                <form onSubmit={handle}>
                    {/* Você pode adicionar campos adicionais aqui para coletar o ID ou outros dados */}
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Excluir</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
