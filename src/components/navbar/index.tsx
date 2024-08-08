export default function Navbar() {
    return (
      <div className="flex justify-center items-center h-12 bg-cinza">
        <div className="flex items-center justify-end space-x-5 w-full">
          <a>Produtos</a>
          <a>Contato</a>
        </div>
          <a className="w-fit text-2xl font-semibold whitespace-nowrap pl-4 pr-4">next reading</a>
        <div className="w-full flex items-center justify-between space-x-5">
          <div className="space-x-5">
            <a >Login</a>
            <a >Gerenciamento</a>
          </div>
          
          <div className="flex flex-col text-sm justify-center items-center pr-4">
            <a>Carrinho</a>
            <a className="text-cinzatxt">R$ 0,00</a>
          </div>
        </div>
        
      </div> 
           
    );
}

        
