import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { ExampleContentWithInjection } from '@/components/ContentWithInjection'


export const getServerSideProps = async ({query}) => {
  const safeInjection = query?.safeInjection === 'true';

  return { props: { safeInjection } };
}

export default function Page({safeInjection}) {
  return (
    <>
      <Head>
        <title>Inconsistent HTML Render</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.description}>
          <p>Your code, or a 3rd party library, might diverge between client and server because 
            it expects the names of components not to vary. Minification only applies to the client
            bundle, not to the code running server side, which means components can get renamed.</p>
        </div>

        <div className={styles.center}>
          <ExampleContentWithInjection safeInjection={safeInjection} />
        </div>
      </main>
    </>
  )
}
