import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { InconsistentHtmlRender } from '@/components/InconsistentHtmlRender'

export const getServerSideProps = async () => ({props: {}})

export default function Page() {
  return (
    <>
      <Head>
        <title>Inconsistent HTML Render</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.description}>
          <p>Your code, or a 3rd party library, might parse invalid user HTML differently on client vs server.</p>
        </div>

        <div className={styles.center}>
          <InconsistentHtmlRender />
        </div>
      </main>
    </>
  )
}
