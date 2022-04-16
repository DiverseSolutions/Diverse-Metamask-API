export default function Home() {
  return (
    <div className="px-0 sm:px-12">
      <main className="flex flex-col items-center justify-center h-screen">

        <h1 className="text-2xl font-semibold text-center sm:text-4xl lg:text-6xl">
          <a className="font-bold text-blue-600" href="https://www.dsolutions.mn/">Diverse</a> Metamask Endpoints
        </h1>

        <div className="mt-24 grid grid-cols-3 gap-x-10">
          <div className="mockup-phone">
            <div className="camera"></div> 
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <h1 className="text-2xl font-bold">Add <span className="text-teal-400">Token</span> Endpoint</h1>
                <code className="px-3 my-2 text-lg text-gray-900 bg-gray-200">{"/add-token?"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"name=<TOKEN_NAME>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"decimals=<TOKEN_DECIMAL>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"symbol=<TOKEN_SYMBOL>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"address=<TOKEN_ADDRESS>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"imgUrl=<TOKEN_IMG>"}</code>
              </div>
            </div>
          </div>

          <div className="mockup-phone">
            <div className="camera"></div> 
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <h1 className="text-2xl font-bold">Add <span className="text-rose-400">Chain</span> Endpoint</h1>
                <code className="px-3 my-2 text-lg text-gray-900 bg-gray-200">{"/add-chain?"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"chainId=<CHAIN_ID>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"chainName=<CHAIN_NAME>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"rpcUrl=<URL>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"blockExplorerUrl=<URL>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"iconUrl=<URL>"}</code>
              </div>
            </div>
          </div>

          <div className="mockup-phone">
            <div className="camera"></div> 
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <h1 className="text-2xl font-bold">Switch <span className="text-cyan-400">Chain</span> Endpoint</h1>
                <code className="px-3 my-2 text-lg text-gray-900 bg-gray-200">{"/switch-chain?"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"chainId=<CHAIN_ID>"}</code>
              </div>
            </div>
          </div>

        </div>


      </main>
    </div>
  )
}
