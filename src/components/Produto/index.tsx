import Image from "next/image";
import { Livros } from "../../../types/home/home";

type ProdutoProps = {
  post: Livros;
};

export default function Produto({ post }: ProdutoProps) {
  const maxCaracteres = 10;

  const truncarTexto = (texto: string, limite: number) => {
    return texto.length > limite ? `${texto.substring(0, limite)}...` : texto;
  };

  return (
    <div>
      <div className="hidden md:block">
        <Image
          className="ml-5 rounded-lg"
          src={post.img}
          width={100}
          height={270}
          alt="capa"
        />
        <div className="flex -mt-24 h-28 w-[280px] flex-col bg-cinza bg-opacity-45 rounded-3xl p-4">
          <div className="flex flex-col flex-wrap justify-end pl-[120px]">
            <h2 className="font-semibold text-lg">
              {truncarTexto(post.nome, maxCaracteres)}
            </h2>
            <h3 className="font-medium -mt-[6px] text-cinzatxt text-sm">
              {truncarTexto(post.autor, maxCaracteres)}
            </h3>
            <p className="self-end mt-4">{post.price}</p>
          </div>
        </div>
      </div>


      <div className="hidden xs:block md:hidden">
  <Image
    className="ml-5 rounded-lg"
    src={post.img}
    width={60}
    height={140}
    alt="capa"
  />
  <div className="flex -mt-[66px] h-fit w-fit flex-col bg-cinza bg-opacity-45 rounded-3xl p-4">
    <div className="flex flex-col flex-wrap justify-end pl-[70px]">
      <h2 className="font-semibold text-sm">
        {truncarTexto(post.nome, maxCaracteres)}
      </h2>
      <h3 className="font-medium -mt-[6px] text-cinzatxt text-sm">
        {truncarTexto(post.autor, maxCaracteres)}
      </h3>
      <p className="self-end mt-1">{post.price}</p>
    </div>
  </div>
</div>


      <div className="block xs:hidden">
        <div className="flex  bg-cinza bg-opacity-45 rounded-3xl p-2">
        <Image
          className="ml-2 rounded-lg"
          src={post.img}
          width={50}
          height={150}
          alt="capa"
        />
        <div className="flex h-fit min-w-32 w-fit flex-colp-2">
          <div className="flex flex-col flex-wrap justify-end pl-2">
            <h2 className="font-semibold text-sm">
              {truncarTexto(post.nome, 14)}
            </h2>
            <h3 className="font-medium -mt-[6px] text-cinzatxt text-sm">
              {truncarTexto(post.autor, maxCaracteres)}
            </h3>
            <p className="self-end text-sm mt-1">{post.price}</p>
          </div>
        </div>
        </div>
        
      </div>

    </div>
  );
}
