import styles from './Header.module.css'
import HelloDevLogo from '../../assets/HelloDevLogo.png'
export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={HelloDevLogo}
        title='HelloDevLogo'
        alt='Logotipo do Hello Dev'
      />
    </header>
  )
}
