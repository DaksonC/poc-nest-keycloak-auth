import s from "./styles.module.css";

export function FormLogin() {
  return (
    <div className={s.login}>
      <form className={s.form}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id={s.email}
          placeholder="E-mail"
          autoFocus
        />
        <input
          type="password"
          name="password"
          id={s.password}
          placeholder="Senha"
        />
        <div className={s.button}>
          <button
            type="submit"
            id={s.button_submit}
          >
            Entrar
          </button>

          <a href="/" id={s.link_register}>
            não sou cadastrado
          </a>
        </div>
      </form>
    </div>
  )
}