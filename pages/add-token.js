import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'
import { ethers } from "ethers";

export default function Home() {
  const router = useRouter()
  const {name, symbol, decimals, imgUrl, address} = router.query
  const [haveMetamask, setHaveMetamask] = useState(false)

  const [metamaskAddTokenErrorMsg, setMetamaskAddTokenErrorMsg] = useState("")

  useEffect(() => {

    if (window.ethereum) {
      setHaveMetamask(true)
      if( validateParameters() == false ) return;
      if( validateTokenAddress() == false ) return;
      addTokenToMetamask()
    }

  }, [router.query])



  async function addTokenToMetamask() {
    setMetamaskAddTokenErrorMsg("")
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

  async function validateTokenAddress(){
    try {
      const contractAbi = ["function totalSupply() view returns (uint256)"];
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send("eth_requestAccounts", []);

      const tokenContract = new ethers.Contract(address, contractAbi, provider);
      let totalSupply = await tokenContract.totalSupply();
      console.log(totalSupply)
    }catch(e){
      setMetamaskAddTokenErrorMsg("Contract isn't ERC20 Token Or Chain Wrong :(")
      return false;
    }

    return true;
  }

  function validateParameters() {
    if (name == undefined || symbol == undefined || decimals == undefined || imgUrl == undefined || address == undefined) {
      setMetamaskAddTokenErrorMsg("Some Query Parameters Are Missing :(")
      return false;
    }
    return true;
  }

  function renderView(){
    if(haveMetamask == false){
      return (  <h1 className={styles.title}>No Metamask Detected :( </h1> )
    }

    if(metamaskAddTokenErrorMsg !== ""){
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
