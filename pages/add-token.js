import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {ethers} from "ethers";

export default function Home() {
  const router = useRouter()
  const {name, symbol, decimals, imgUrl, address} = router.query
  const [haveMetamask, setHaveMetamask] = useState(false)

  const [metamaskAddTokenErrorMsg, setMetamaskAddTokenErrorMsg] = useState("")

  useEffect(() => {

    if (window.ethereum) {
      setHaveMetamask(true)
      if (validateParameters() == false) return;
      validateTokenAddress()
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
      setMetamaskAddTokenErrorMsg("")
    } catch (e) {
      setMetamaskAddTokenErrorMsg(e.message)
    }
  }

  async function validateTokenAddress() {
    try {
      const contractAbi = ["function totalSupply() view returns (uint256)"];
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send("eth_requestAccounts", []);

      const tokenContract = new ethers.Contract(address, contractAbi, provider);
      let totalSupply = await tokenContract.totalSupply();
      console.log(totalSupply)

      addTokenToMetamask()
    } catch (e) {
      setMetamaskAddTokenErrorMsg("Contract isn't ERC20 Token Or Chain Wrong :(")
    }
  }

  function validateParameters() {
    if (name == undefined || symbol == undefined || decimals == undefined || imgUrl == undefined || address == undefined) {
      setMetamaskAddTokenErrorMsg("Some Query Parameters Are Missing :(")
      return false;
    }
    return true;
  }

  function renderView() {
    if (haveMetamask == false) {
      return (<h1 className="mb-12 text-2xl font-semibold text-center sm:text-4xl lg:text-5xl">No Metamask Detected :( </h1>)
    }

    if (metamaskAddTokenErrorMsg !== "") {
      return (<h1 className="mb-12 text-2xl font-semibold text-center sm:text-4xl lg:text-5xl">{metamaskAddTokenErrorMsg}</h1>)
    }

    return (<h1 className="mb-12 text-2xl font-semibold text-center sm:text-4xl lg:text-5xl"> Thank you for using <span className="text-blue-600">Diverse Metamask</span> <a href="https://www.dsolutions.mn/">SDK</a> </h1>)
  }

  return (
    <div className="px-0 sm:px-12">
      <main className="flex flex-col items-center justify-center h-screen">
        {renderView()}
      </main>

      <footer className="flex items-center justify-center flex-grow py-8 border-t border-gray-300">
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
