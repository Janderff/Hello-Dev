import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comment/comment'
import styles from './Post.module.css'
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src='https://github.com/janderff.png' />
          <div className={styles.authorInfo}>
            <strong>Guilherme</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='19 de agosto as 06:14' datetime='2025-08-19 06:14:00'>
          Publicado ha 1h
        </time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa, beleza? </p>
        <p>
          Acabei de subir mais um porjeto no meu portifolio. É um porjeto qeu
          utlizei para aprender alguns fundamentos basicos de React{' '}
        </p>
        <p>
          <a href='#'>guilherme.design/doctorrcare</a>
        </p>
        <p>
          <a href=''>#novoprojeto</a>
          <a> #react</a>
          <a> #dev</a>
        </p>
      </div>
      <div className={styles.line} />
      <div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder='Deixe um comentario' />
          <button>Publicar</button>
        </form>
      </div>
      <Comment />
    </article>
  )
}
