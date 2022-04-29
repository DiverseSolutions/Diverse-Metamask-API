import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {ethers} from "ethers";

export default function Home() {
  const router = useRouter()
  const { chainId,chainName,currencyName,currencySymbol,currencyDecimals,rpcUrl,blockExplorerUrl,iconUrl } = router.query
  const [haveMetamask, setHaveMetamask] = useState(false)

  const [metamaskAddChainErrorMsg,setMetamaskAddChainErrorMsg] = useState("")
  const [errorMsg,setErrorMsg] = useState("")

  useEffect(() => {

    if (window.ethereum) {
      setHaveMetamask(true)

      if (validateParameters()){
        addChain()
      }
      
    }

  }, [router.query])


  function validateParameters() {
    if ( chainId == undefined || chainName == undefined || rpcUrl == undefined || blockExplorerUrl == undefined || iconUrl == undefined || currencyName == undefined || currencySymbol == undefined || currencyDecimals == undefined){
      setErrorMsg("Some Query Parameters Are Missing :(")
      return false;
    }
    return true;
  }

  async function addChain(){
    if(ethereum.chainId === '0x' + parseInt(chainId).toString(16)){
      setErrorMsg("Network Already Configured To This Network :)")
      return;
    }

    try {
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{ 
          chainId: '0x' + parseInt(chainId).toString(16),
          chainName: chainName,
          nativeCurrency: {
            name: currencyName,
            symbol: currencySymbol,
            decimals: parseInt(currencyDecimals)
          },
          rpcUrls: [rpcUrl],
          blockExplorerUrls: [blockExplorerUrl],
          iconUrls: [iconUrl]
        }],
      });
      setErrorMsg("")
    } catch (addChainError) {
      if (addChainError.code === 4902) {
        setErrorMsg("Your Metamask Already Has This Network :>")
      }else{
        setErrorMsg(addChainError.message)
      }
    }

    setTimeout(() => {
      history.back()
    },4000);
  }

  function handleGoingBack(e){
    e.preventDefault()
    history.back()
  }

  function renderView() {
    if (haveMetamask == false) {
      return (<h1 className="mb-12 text-sm font-semibold text-center sm:text-4xl lg:text-5xl">No Metamask Detected :( </h1>)
    }

    if (errorMsg !== "") {
      return (<h1 className="mb-12 text-sm font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>)
    }

    return (
      <>
        <h1 className="text-sm font-semibold text-center sm:text-4xl lg:text-5xl">
          Thank you for using <span className="text-blue-600">Diverse Metamask</span> <a href="https://www.dsolutions.mn/">SDK</a>
        </h1>
        <button onClick={handleGoingBack} className="px-12 mt-6 text-md btn btn-primary">Go Back</button>
      </>
    )
  }

  return (
    <div className="px-0 sm:px-12">
      <main className="flex flex-col items-center justify-center h-screen">
        {renderView()}
      </main>
    </div>
  )
}

