import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const {name, symbol, decimals, imgUrl, address} = router.query
  const [haveMetamask, setHaveMetamask] = useState(false)
  const [haveAllParameters, setHaveAllParameters] = useState(false)

  const [metamaskAddTokenErrorMsg, setMetamaskAddTokenErrorMsg] = useState("")

  useEffect(() => {

    if (window.ethereum) {
      setHaveMetamask(true)
      validateParameters()
    }

  }, [router.query])



  async function addTokenToMetamask() {
    try {
      await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: address,
            symbol: symbol,
            decimals: decimals,
            image: imgUrl,
          },
        },
      })
    }catch(e){
      setMetamaskAddTokenErrorMsg(e.message)
    }
  }

  function validateParameters() {
    if (name == undefined || symbol == undefined || decimals == undefined || imgUrl == undefined || address == undefined) {
      return
    }

    setHaveAllParameters(true)

    addTokenToMetamask()
  }

  function renderView(){
    if(haveMetamask == false){
      return (  <h1 className={styles.title}>No Metamask Detected :( </h1> )
    }

    if(haveAllParameters == false){
      return (  <h1 className={styles.title}>Some Query Parameters Are Missing :(</h1> )
    }

    if(metamaskAddTokenErrorMsg != ""){
      return (  <h1 className={styles.errorMsg}>{metamaskAddTokenErrorMsg}</h1> )
    }

    return ( <h1 className={styles.title}> Thank you for using Diverse Metamask <a href="https://www.dsolutions.mn/">SDK</a> </h1>)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        { renderView() }
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
