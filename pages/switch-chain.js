import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {ethers} from "ethers";

export default function Home() {
  const router = useRouter()
  const { chainId } = router.query
  const [haveMetamask, setHaveMetamask] = useState(false)

  const [metamaskAddChainErrorMsg,setMetamaskAddChainErrorMsg] = useState("")
  const [errorMsg,setErrorMsg] = useState("")

  useEffect(() => {

    if (window.ethereum) {
      setHaveMetamask(true)

      if (validateParameters()){
        switchChain()
      }
      
    }

  }, [router.query])

  function validateParameters() {
    if ( chainId == undefined){
      setErrorMsg("Some Query Parameters Are Missing :(")
      return false;
    }
    return true;
  }

  async function switchChain(){
    if(ethereum.chainId === '0x' + parseInt(chainId).toString(16)){
      setErrorMsg("Network Already Configured To This Network :)")
      return;
    }

    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ 
          chainId: '0x' + parseInt(chainId).toString(16),
        }],
      });
      setErrorMsg("")
    } catch (addChainError) {
      setErrorMsg(addChainError.message)
    }
  }

  function renderView() {
    if (haveMetamask == false) {
      return (<h1 className="mb-12 text-2xl font-semibold text-center sm:text-4xl lg:text-5xl">No Metamask Detected :( </h1>)
    }

    if (errorMsg !== "") {
      return (<h1 className="mb-12 text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>)
    }

    return (<h1 className="mb-12 text-2xl font-semibold text-center sm:text-4xl lg:text-5xl"> Thank you for using <span className="text-blue-600">Diverse Metamask</span> <a href="https://www.dsolutions.mn/">EndPoint</a> </h1>)
  }

  return (
    <div className="px-0 sm:px-12">
      <main className="flex flex-col items-center justify-center h-screen">
        {renderView()}
      </main>
    </div>
  )
}

