import Image from "next/image";

type ProdutoProps = {
  id?: number;
  titulo: string;
  autor: string;
  valor: string;
  img: string;
};
export default function Produto({ id, titulo, autor, valor, img }: ProdutoProps) {
  return (
    <div>
    <div className="hidden md:block">
      <Image
        className="ml-5 rounded-lg"
        src={img}
        width={100}
        height={270}
        alt="capa"
      />
      <div className="flex -mt-24 h-28 w-[280px] flex-col bg-cinza bg-opacity-45 rounded-3xl p-4">
        <div className="flex flex-col flex-wrap justify-end pl-[120px]">
          <h2 className="font-semibold text-lg">{titulo}</h2>
          <h3 className="font-medium -mt-[6px] text-cinzatxt text-sm">
            {autor}
          </h3>
          <p className="self-end mt-4">{valor}</p>
        </div>
      </div>
    </div>
    <div className="block md:hidden">
      <Image
        className="ml-5 rounded-lg"
        src={img}
        width={60}
        height={150}
        alt="capa"
      />
      <div className="flex -mt-[66px] h-fit w-fit flex-col bg-cinza bg-opacity-45 rounded-3xl p-4">
        <div className="flex flex-col flex-wrap justify-end pl-[70px]">
          <h2 className="font-semibold text-sm">{titulo}</h2>
          <h3 className="font-medium -mt-[6px] text-cinzatxt text-sm">
            {autor}
          </h3>
          <p className="self-end mt-1">{valor}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
