import { signIn } from 'next-auth/react'
import s from './styles.module.css'

export function Login() {
  return (
    <form className={s.form_register}>
      <div className={s.button}>
        <button
          type="button"
          className={s.button_keycloak}
          onClick={() => signIn('keycloak', { callbackUrl: '/welcome' })}
        >
          Login with Keycloak
        </button>
      </div>
    </form>
  )
}