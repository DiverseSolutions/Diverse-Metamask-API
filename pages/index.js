import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://www.dsolutions.mn/">Diverse</a> Metamask API SDK!
        </h1>

        <p className={styles.endpointQuery}>Add Token Endpoint</p>

        <p className={styles.query}>
          <code className={styles.endpointCode}>{"/add-token?"}</code>
        </p>

        <p className={styles.query}>
          <code className={styles.code}>{"name=<TOKEN_NAME>"}</code>
        </p>
        <p className={styles.query}>
          <code className={styles.code}>{"decimals=<TOKEN_DECIMAL>"}</code>
        </p>
        <p className={styles.query}>
          <code className={styles.code}>{"symbol=<TOKEN_SYMBOL>"}</code>
        </p>
        <p className={styles.query}>
          <code className={styles.code}>{"address=<TOKEN_ADDRESS>"}</code>
        </p>
        <p className={styles.query}>
          <code className={styles.code}>{"imgUrl=<TOKEN_IMG>"}</code>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.dsolutions.mn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Diverse Solutions
        </a>
      </footer>
    </div>
  )
}
