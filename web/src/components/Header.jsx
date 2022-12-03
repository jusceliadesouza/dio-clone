import { useNavigate } from "react-router-dom";

import { Button } from "./Button";

import logo from "../assets/dio.svg";

export function Header() {
  const navigate = useNavigate();

  function handleSignIn() {
    navigate("/login");
  }

  return (
    <header className="bg-zinc-900">
      <div className="w-full max-w-[80%] h-12 my-0 mx-auto flex justify-between items-center">
        <img src={logo} alt="logo da DIO" />
        <div className="flex gap-4">
          <span>Home</span>

          <Button
            onClick={navigate(handleSignIn)}
            title={"Entrar"}
            className={"button primary"}
          />
          <Button
            onClick={navigate("#")}
            title={"Cadastrar"}
            className={"button primary"}
          />
        </div>
      </div>
    </header>
  );
}
