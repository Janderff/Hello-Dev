import { Header } from './components/header/Header'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/sidebar/Sidebar'
import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/janderff.png',
      name: 'Guilherme',
      role: 'Web Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa, beleza?',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um porjeto no meu portifolio. É um porjeto qeu utlizei para aprender alguns fundamentos basicos de React',
      },
      {
        type: 'link',
        content: 'guilherme.design/doctorrcare',
      },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/brunogoncalvesferreira.png',
      name: 'Bruno',
      role: 'Educator',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa, beleza?',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um porjeto no meu portifolio. É um porjeto qeu utlizei para aprender alguns fundamentos basicos de React',
      },
      {
        type: 'link',
        content: 'guilherme.design/doctorrcare',
      },
    ],
    publishedAt: new Date('2025-09-12 20:00:00'),
  },
]
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
