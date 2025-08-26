import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../avatar/Avatar'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=50&w=260&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <div className={styles.profile}>
        <Avatar hasBorder={true} src='https://github.com/janderff.png' />
        <strong>Guilherme</strong>
        <span>Web Developer</span>
        <footer>
          <a href='#'>
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  )
}
