import { FormRegister } from "../Forms/FormRegister";
import s from "./styles.module.css";

export function Register() {
  return (
    <div className={s.register}>
      <h1 className={s.title}>Tela de Cadastro</h1>
      <p>Seja bem-vindo! Cadastre-se para acessar o aplicativo.</p>
      <FormRegister />
    </div>
  )
}