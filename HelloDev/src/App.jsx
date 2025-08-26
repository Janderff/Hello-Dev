import { Header } from './components/header/Header'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/sidebar/Sidebar'
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            title='Primeiro Post'
            author='Jander'
            content='Criação de aplicações web com React'
          />
        </main>
      </div>
    </div>
  )
}
