"use server"

import prisma from "@/lib/db"
import { count } from "console"


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
        }, take: 15, skip: offset
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
    })
    return posts
}

