import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          VL starter Nextjs App
        </h1>
        <div>
          HRM
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by{' @VL '}
      </footer>
    </div>
  )
}
