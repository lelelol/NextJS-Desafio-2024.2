'use client';

import { SearchOutlined } from "@mui/icons-material";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";




export default function Searchmain() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '');

    const handleSearch = (query: string) => {
        if (!query) {
            return
        }

        const params = new URLSearchParams();
        params.set('query', query)
        router.push(`/pesquisa/?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(searchTerm)
    }

    return (
        <div className="w-full">
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="flex lg:w-2/6  justify-between items-center w-5/6 bg-cinza rounded-xl m-5 text-2xl p-2">
                    <input
                        type="text"
                        className="bg-cinza w-full focus:outline-none"
                        placeholder=" Pesquise por nome ou gênero"
                        name="search"
                        id="search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <SearchOutlined />
                </form>
            </div>

        </div>

    );
}
