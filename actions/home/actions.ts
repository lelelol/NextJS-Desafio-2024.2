"use server"

import prisma from "@/lib/db"
import { count } from "console"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


// model Product {
//     id          Int       @id @default(autoincrement())
//     nome        String
//     autor       String
//     img         String
//     genero      String
//     price       String
//     createdAt   DateTime  @default(now())
//   }


export default async function GetLivrosHome(currentPage: number) {

    const offset = (currentPage - 1) * 15;
    const posts = await prisma.product.findMany({
        select: {
            id: true,
            nome: true,
            img: true,
            autor: true,
            genero: true,
            price: true
        },
        take: 15,
        skip: offset
    });

    const count = await prisma.product.count();

    return {
        posts,
        totalItems: count
    };
}
export async function GetLivros() {
    const posts = await prisma.product.findMany({
        select: {
            id: true,
            nome: true,
            img: true,
            autor: true,
            genero: true,
            price: true
        },
        orderBy: {
            id: 'desc'
        }
    })
    return posts
}

export async function GetPesquisa(query: string, currentPage: number) {
    const offset = (currentPage - 1) * 15
    const posts = await prisma.product.findMany({
        where: {
            OR: [
                { nome: { contains: query, mode: "insensitive" } },
                { genero: { contains: query, mode: "insensitive" } },
            ],
        },
        select: {
            id: true,
            nome: true,
            img: true,
            autor: true,
            genero: true,
            price: true
        },
        take: 15,
        skip: offset,
        orderBy: {
            id: 'desc'
        }
    })
    const count = await prisma.product.count({
        where: {
            OR: [
                { nome: { contains: query, mode: "insensitive" } },
                { genero: { contains: query, mode: "insensitive" } },
            ],
        },
    });
    const totalPages = Math.ceil(count / 15);

    return { posts, count, totalPages }
}

export async function GetLivrosAcao() {
    const posts = await prisma.product.findMany({
        where: {
            genero: "ação"
        },
        select: {
            id: true,
            nome: true,
            img: true,
            autor: true,
            genero: true,
            price: true
        },
        orderBy: {
            id: 'desc'
        }
    })
    return posts
}

export async function GetLivrosFantasia() {
    const posts = await prisma.product.findMany({
        where: {
            genero: "fantasia"
        },
        select: {
            id: true,
            nome: true,
            img: true,
            autor: true,
            genero: true,
            price: true
        },
        orderBy: {
            id: 'desc'
        }
    })
    return posts
}

export async function GetLivrosFiccao() {
    const posts = await prisma.product.findMany({
        where: {
            genero: "ficção científica"
        },
        select: {
            id: true,
            nome: true,
            img: true,
            autor: true,
            genero: true,
            price: true
        },
        orderBy: {
            id: 'desc'
        }
    })
    return posts
}

export async function GetLivrosAventura() {
    const posts = await prisma.product.findMany({
        where: {
            genero: "aventura"
        },
        select: {
            id: true,
            nome: true,
            img: true,
            autor: true,
            genero: true,
            price: true
        },
        orderBy: {
            id: 'desc'
        }
    })
    return posts
}

export async function GetLivrosDrama() {
    const posts = await prisma.product.findMany({
        where: {
            genero: "drama"
        },
        select: {
            id: true,
            nome: true,
            img: true,
            autor: true,
            genero: true,
            price: true
        },
        orderBy: {
            id: 'desc'
        }
    })
    return posts
}

export async function GetLivrosMisterio() {
    const posts = await prisma.product.findMany({
        where: {
            genero: "mistério"
        },
        select: {
            id: true,
            nome: true,
            img: true,
            autor: true,
            genero: true,
            price: true
        },
        orderBy: {
            id: 'desc'
        }
    })
    return posts
}

export async function GetLivrosAdm(currentPage: number) {
    const offset = (currentPage - 1) * 15
    const posts = await prisma.product.findMany({
        select: {
            id: true,
            nome: true,
            img: true,
            autor: true,
            genero: true,
            price: true,
            createdAt: true
        },
        take: 8,
        skip: offset,
        orderBy: {
            createdAt: 'desc'
        }
    })
    const count = await prisma.product.count();
    const totalPages = Math.ceil(count / 15);

    return { posts, count, totalPages }
}


export async function DeleteLivro(id: number | undefined) {
    await prisma.product.delete({
        where: {
            id: id
        }
    })
    revalidatePath("/gerenciamento")
}

export async function AddLivro(livro: { nome: string, autor: string, genero: string, price: string, img: string }) {
    await prisma.product.create({
        data: {
            nome: livro.nome,
            autor: livro.autor,
            genero: livro.genero,
            price: livro.price,
            img: livro.img
        }
    })
    revalidatePath("/gerenciamento")
}
export async function EditLivro(livro: { id: number, nome: string, autor: string, genero: string, price: string, img: string }) {
    await prisma.product.update({
        where: {
            id: livro.id
        },
        data: {
            nome: livro.nome,
            autor: livro.autor,
            genero: livro.genero,
            price: livro.price,
            img: livro.img
        }
    });
}