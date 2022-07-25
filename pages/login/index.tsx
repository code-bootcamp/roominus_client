import useLogged from "../../src/components/commons/hooks/useLogged";
import Login from "../../src/components/units/login/Login.container";

export default function LoginPage() {
  useLogged();
  return <Login />;
}
