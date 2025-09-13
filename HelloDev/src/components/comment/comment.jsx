import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../avatar/Avatar'
import styles from './Comment.module.css'

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/janderff.png' />
      <div className={styles.commentContent}>
        <div className={styles.commentBox}>
          <div>
            <header>
              <div className={styles.author}>
                <strong>Guilherme</strong>
                <time
                  title='24 de agosto as 06:14'
                  dateTime='2025-08-24 06:14:00'
                >
                  Cerca de 1 dia atras
                </time>
              </div>
              <button>
                <Trash color='#b7051aff' size={24} />
              </button>
            </header>
          </div>

          <footer>
            <strong>{content}</strong>
          </footer>
        </div>
        <button className={styles.likeButton}>
          <ThumbsUp /> Aplaudir
          <span>20</span>
        </button>
      </div>
    </div>
  )
}
