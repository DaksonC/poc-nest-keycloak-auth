import ConfettiExplosion from "react-confetti-explosion";
import s from './styles.module.css'

function Welcome() {
  return (
    <div className={s.welcome}>
      <ConfettiExplosion duration={10000} />
      <ConfettiExplosion duration={10000} particleCount={200} />
      <ConfettiExplosion duration={10000} particleCount={300} />
      <h1>Welcome!</h1>
    </div>
  )
}

export default Welcome;