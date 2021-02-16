import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique velit obcaecati, non optio nemo iste modi, sed, ullam vero aliquid corporis aut perspiciatis temporibus suscipit accusamus laudantium eius ab fugiat!</p>
        <Link href="/ninjas">
          <a className={styles.btn}>All ninjas</a>
        </Link>
      </div>
    </>
  )
}
