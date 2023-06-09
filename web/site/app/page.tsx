"use client";

import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  // Fetch data from url http://localhost:3001
  const [uri, setUri] = React.useState<string>('')
  const [datas, setDatas] = React.useState<any>([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/" + uri, {
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
  }, [uri])

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <p>
            http://localhost:3001/
            <input
              className={styles.input}
              type="text"
              value={uri}
              onChange={(e) => setUri(e.target.value)}
            />
            <br />
            <br />
            Try `/`, `/hello`, `/users`
          </p>

          <br />
          <br />
          <br />

          <code>
            <pre>
              {JSON.stringify(datas, null, 2)}
            </pre>
          </code>
        </div>
      </div>
    </main>
  )
}
