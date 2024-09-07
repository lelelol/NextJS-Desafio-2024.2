import Searchmain from "@/components/pesquisa-main";
import { SearchOutlined } from "@mui/icons-material";
import { GetPesquisa } from "../../../actions/home/actions";
import Produto from "@/components/Produto";

export default async function Pesquisa({
    searchParams,
}: {
    searchParams: {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || "";
    const page = searchParams?.page || 1;

    // GetPesquisa returns an array of books, not an object with posts
    const posts = await GetPesquisa(query);

    return (
        <div >
            <Searchmain />
            <div className="flex gap-14 flex-wrap items-center justify-center">
                {posts.map((post) => (
                    <Produto key={post.id} post={post} />
                ))}
            </div>

        </div>
    );
}
