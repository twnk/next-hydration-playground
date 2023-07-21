import { useEffect, useState } from "react";
import Head from "next/head";
import { Ugly } from "./ugly-html";

export const EffectfulScriptIncluder = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <></>
  } else {
    return <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: 'console.log("script added effectfully!")' }}></script>
      </Head>
    </>
  }
}


export const StyleIncluder = () => (
  <>
    <Head>
      <script src="/inject-styles.js" async></script>
    </Head>
    <div className="video-js">
      <Ugly />
    </div>
  </>)