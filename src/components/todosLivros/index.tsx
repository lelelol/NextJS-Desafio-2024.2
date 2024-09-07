import GetLivrosHome from "../../../actions/home/actions";
import Produto from "../Produto";

export default async function todosOsLivros() {
    const livros = await GetLivrosHome();
    return (
        <>
            {livros.map((post) => (
                <Produto key={post.id} post={post} />
            ))}
        </>
    )
}