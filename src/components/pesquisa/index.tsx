import { SearchOutlined } from "@mui/icons-material";

export default function Pesquisa() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center w-2/6 bg-cinza rounded-xl m-5 text-2xl p-2">
        <input
          type="text"
          className="bg-cinza w-full focus:outline-none"
          placeholder=" Pesquise por nome ou gênero"
          name="name"
        />
        <SearchOutlined />
      </div>
    </div>
  );
}
