import Landing from "@/components/landing";
import Generos from "@/components/generos/indes";
import ListaProdutos from "@/components/listaProdutos";
import MVV from "@/components/MVV";
import GetLivrosHome from "../../actions/home/actions";

export default async function Home() {
  const livros = await GetLivrosHome();
  return (
    <>
      <Landing posts={livros} />
      <Generos />
      <ListaProdutos posts={livros} />

      <MVV />
    </>
  );
}
