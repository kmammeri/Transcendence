"use client";

import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  // Fetch data from url http://localhost:3001
  const [datas, setDatas] = React.useState<any>([]);
  const url = 'http://localhost:3001/'

  React.useEffect(() => {
    fetch(url, {
      headers: {
        mode: 'cors'
      }
    })
      .then((response: Response) => response.text())
      .then((data: any) => {
        setDatas(JSON.parse(data))
      })
      .catch((error: Error) => {
        setDatas(error)
      }
    )
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          Fetching datas from : <em>{url}</em>

          <br />
          <br />
          <br />

          {/* Return json format with 2 tabs */}
          <code>
            <pre>
              {JSON.stringify(datas, null, 2)}
            </pre>
          </code>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
    </main>
  )
}
