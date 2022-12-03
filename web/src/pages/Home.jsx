import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { Button } from "../components/Button";

import banner from "../assets/banner.svg";

export default function Home() {
  const navigate = useNavigate();

  function handleLoginIn() {
    navigate('/login')
  }

  return (
    <div className="mx-auto min-h-screen w-full">
      <Header />

      <main className="flex justify-center w-full py-16">
        <div className="max-w-[80%]  flex justify-between w-full">
          <div className="flex justify-between items-center w-full">
            <div className="max-w-sm">
              <h1 className="focus">Implemente</h1>
              <h1 className="">o seu futuro global agora!</h1>

              <p>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras
                do mundo e encare seu novo desafio profissional, evoluindo em
                comunidade com os melhores experts.
              </p>

              <Button
                onClick={handleLoginIn}
                title={"Começar agora"}
                className={"button secondary "}
              />
            </div>

            <div>
              <img src={banner} alt="banner" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
