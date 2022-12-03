import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

// import { MdLock, MdEmail } from "react-icons/md";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const navigate = useNavigate();

  function handleBackToHome() {
    navigate("/");
  }

  return (
    <div className="mx-auto min-h-screen w-full">
      <Header />

      <main className="flex justify-center w-full py-16">
        <div className="max-w-[80%]  flex justify-between w-full">
          <div className="flex justify-between items-center w-full">
            <div className="max-w-xl">
              <h1>
                A plataforma para você aprender com experts, dominar as
                principais tecnologias e entrar mais rápido nas empresas mais
                desejadas.
              </h1>
            </div>

            <div className="">
              <h1>Faça seu cadastro</h1>
              <span className="text-lg">
                Faça seu login e make the change._
              </span>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className={"mt-9 flex flex-col gap-5"}
              >
                <label htmlFor="">
                  {/* <MdEmail size={32}/> */}
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-purple-800 p-1 focus:outline-none focus:border-pink-700 placeholder:text-white"
                    placeholder="E-mail"
                  />
                </label>

                <label htmlFor="">
                  {/* <MdLock size={32}/> */}
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-purple-800 p-1 focus:outline-none focus:border-pink-700 placeholder:text-white"
                    placeholder="Senha"
                  />
                </label>

                <Button title={"Entrar"} className={"button secondary"} />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
