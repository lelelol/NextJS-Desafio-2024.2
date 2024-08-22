import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

const useCor = () => {
  const [cor, setCor] = useState<string>("red"); // Agora usando "cor" em vez de "theme"

  useEffect(() => {
    const cookies = parseCookies();
    const savedCor = cookies.cor || "red"; // Valor padrão é 'light'
    setCor(savedCor);
  }, []);

  const toggleCor = () => {
    const newCor = cor === "light" ? "dark" : "light";
    setCor(newCor);
    setCookie(null, "cor", newCor, {
      maxAge: 30 * 24 * 60 * 60, // Expira em 30 dias
      path: "/",
    });
  };

  return { cor, toggleCor };
};

export default useCor;
