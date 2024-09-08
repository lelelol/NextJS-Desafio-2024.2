import Landing from "@/components/landing";
import Generos from "@/components/generos/indes";
import ListaProdutos from "@/components/listaProdutos";
import MVV from "@/components/MVV";
import { GetLivros, GetLivrosAcao, GetLivrosDrama, GetLivrosMisterio } from "../../actions/home/actions";

export default async function Home() {
  const acao = await GetLivrosAcao();
  const drama = await GetLivrosDrama();
  const misterio = await GetLivrosMisterio();
  const livros = await GetLivros();


  return (
    <>
      <Landing posts={livros} />
      <Generos />
      <ListaProdutos posts={acao} />
      <ListaProdutos posts={drama} />
      <ListaProdutos posts={misterio} />
      <MVV />
    </>
  );
}
