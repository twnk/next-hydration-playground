import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { EffectfulScriptIncluder, StyleIncluder } from '@/components/EffectfulCollision'

export const getServerSideProps = async () => ({props: {}})

export default function Page() {
  return (
    <>
      <Head>
        <title>Effectful Collision</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.description}>
          <p>This is not a hydration error. It is the result of styles injected outside the
            react lifecycle getting clobbered by Next.js <code>{'<Head>'}</code> manager
            during a rerender.
          </p>
        </div>

        <div className={styles.center}>
          <StyleIncluder />
          <EffectfulScriptIncluder />
        </div>
      </main>
    </>
  )
}
