
import { Login } from "../Login";
import s from "./styles.module.css";

export function Register() {
  return (
    <div className={s.container}>
      <div className={s.register}>
        <h1 className={s.title}>Enter welcome!</h1>
        <Login />
      </div>
      <img src="/5.webp" alt="meme simples" />
    </div>
  )
}