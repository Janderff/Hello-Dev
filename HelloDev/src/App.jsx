import { Header } from './components/header/Header'
import { Post } from './Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/sidebar/Sidebar'
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
