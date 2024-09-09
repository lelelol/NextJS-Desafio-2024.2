import Link from "next/link";

export default function Generos() {
  const generos = ["Ação", "Aventura", "Drama", "Misterio", "Romance", "Fantasia"];

  return (
    <div>
      <div className="pl-6 mt-10 mb-4 m-[2%]">
        <h1 className="font-semibold text-lg mb-0 xs:text-2xl">
          Embarque a sua próxima aventura
        </h1>
        <h3 className="font-normal text-cinzatxt mt-0 text-base xs:text-lg">
          Gêneros populares
        </h3>
      </div>
      <div>
        <div className="flex justify-center flex-wrap gap-14 m-4">
          {generos.map((genero) => (
            <div
              key={genero}
              className="bg-cinza w-24 h-16 sm:w-36 sm:h-20 flex justify-center items-center rounded-xl"
            >
              <Link 
                className="font-semibold text-sm xs:text-lg" 
                href={"/pesquisa?query=" + genero}
              >
                {(genero === "Misterio" ? "Mistério" : genero)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
