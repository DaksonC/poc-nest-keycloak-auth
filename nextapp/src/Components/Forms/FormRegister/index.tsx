import s from './styles.module.css'

export function FormRegister() {
  return (
    <form className={s.form_register}>
      <input
        type="text"
        name="name"
        placeholder='Nome'
        id={s.name}
      />
      <input
        type="email"
        name="email"
        placeholder='E-mail'
        id={s.email}
      />
      <input
        type="password"
        name="password"
        placeholder='Senha'
        id={s.password}
      />
      <input
        type="password"
        name="password_confirm"
        placeholder='Confirmar Senha'
        id={s.password_confirm}
      />
      <div className={s.button}>
        <button
          type="submit"
          id={s.button_submit}
        >
          Cadastrar
        </button>
        <a href="/Login" id={s.link_login}>
          sou cadastrado
        </a>
      </div>
    </form>
  )
}