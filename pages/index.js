import Link from 'next/link'
import Meta from '../components/Meta'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Meta title={'Ninja List | Home'} keywords={'ninjas'} />
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
