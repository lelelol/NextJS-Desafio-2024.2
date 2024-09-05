export default function Contato() {
  return (
    <>
      <div className="flex flex-col items-center m-5 p-5">
        <div className="w-full max-w-md bg-cinza p-8 rounded-xl shadow-lg">
          <h1 className="font-semibold text-2xl text-center mb-6">Olá novamente!</h1>
          <form className="w-full flex flex-col">
            <label className="font-semibold text-lg mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-slate-300 h-12 rounded-lg p-3 mb-4"
              required
            />
            <label className="font-semibold text-lg mb-2" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-slate-300 h-12 rounded-lg p-3 mb-6"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-slate-300 font-semibold text-lg rounded-lg hover:bg-slate-400 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
