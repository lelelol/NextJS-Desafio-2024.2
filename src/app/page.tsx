
import Landing from "@/components/landing";
import Generos from "@/components/generos/indes";
import ListaProdutos from "@/components/listaProdutos";
import MVV from "@/components/MVV";
import Cookies from 'js-cookie';

export default function Home() {

  return (
    <>
      <Landing />
      <Generos />
      <ListaProdutos filtro="Fantasia" indice={"0"} />
      <ListaProdutos filtro="Romance" indice={"1"} />
      <ListaProdutos filtro="Romance" indice={"2"} />
      <MVV />
    </>
  );
}
