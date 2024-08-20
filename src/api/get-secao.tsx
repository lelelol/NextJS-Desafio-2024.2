import axios from "axios";

type MVVProps = {
  id: number;
  title: string;
  text: string;
};
type GetCards = {
  identities: MVVProps[];
  status: number;
};
const getApi = async (): Promise<GetCards> => {
  const response = await axios.get(
    "https://treinamentoapi.codejr.com.br/api/identities"
  );
  return response.data;
};

export default getApi;
