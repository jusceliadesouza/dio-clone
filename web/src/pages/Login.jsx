import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";


export default function Login() {
  const navigate = useNavigate();
  
  function handleBackToHome() {
    navigate("/");
  }
  return (
    <Button
      onClick={handleBackToHome}
      title={"Home"}
      className={"button none"}
    />
  );
}
