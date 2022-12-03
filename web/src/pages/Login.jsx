import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

export default function Login() {
  const navigate = useNavigate();
  
  function handleBackToHome() {
    navigate("/");
  }
  return (
    <div className="mx-auto min-h-screen w-full">
      <Header />
    </div>

    // <Button
    //   onClick={handleBackToHome}
    //   title={"Home"}
    //   className={"button none"}
    // />
  );
}
