import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { ExampleContentWithInjection } from '@/components/ContentWithInjection'

export const getServerSideProps = async () => ({props: {}})

export default function Page() {
  return (
    <>
      <Head>
        <title>3rd Party Element Injection</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src='/inject-an-ad.js' defer></script>
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.description}>
          <p>A 3rd party script may inject elements into your DOM before React finishes hydration.</p>
        </div>

        <div className={styles.center}>
          <ExampleContentWithInjection safeInjection={true} />
        </div>
      </main>
    </>
  )
}
