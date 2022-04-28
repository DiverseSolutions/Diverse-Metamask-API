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
              <div className="flex items-center justify-center artboard artboard-demo phone-1">
                <h1 className="text-2xl font-bold">Add <span className="text-teal-400">Token</span> Endpoint</h1>
                <code className="px-3 my-2 text-lg text-gray-900 bg-gray-200">{"/add-token?"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"name=<TOKEN_NAME>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"decimals=<TOKEN_DECIMAL>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"symbol=<TOKEN_SYMBOL>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"address=<TOKEN_ADDRESS>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"imgUrl=<TOKEN_IMG>"}</code>
                <a href="https://metamask.dsolutions.mn/add-token?name=Tether&symbol=USDT&decimals=6&address=0xdAC17F958D2ee523a2206206994597C13D831ec7&imgUrl=https://cryptologos.cc/logos/tether-usdt-logo.png?v=022" className="mt-4 btn btn-wide btn-outline btn-warning">Add Ethereum Tether Token</a>
                <a href="https://metamask.dsolutions.mn/add-token?name=Wrapped%20BNB&symbol=WBNB&decimals=18&address=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&imgUrl=https://cryptologos.cc/logos/bnb-bnb-logo.png?v=022" className="mt-2 btn btn-wide btn-outline btn-info">Add BSC Wrapped BNB Token</a>
              </div>
            </div>
          </div>

          <div className="mockup-phone">
            <div className="camera"></div> 
            <div className="display">
              <div className="flex items-center justify-center artboard artboard-demo phone-1">
                <h1 className="text-2xl font-bold">Add <span className="text-rose-400">Chain</span> Endpoint</h1>
                <code className="px-3 my-2 text-lg text-gray-900 bg-gray-200">{"/add-chain?"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"chainId=<CHAIN_ID>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"chainName=<CHAIN_NAME>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"rpcUrl=<URL>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"blockExplorerUrl=<URL>"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"iconUrl=<URL>"}</code>
                <a href="https://metamask.dsolutions.mn/add-chain?chainId=137&chainName=Polygon&rpcUrl=https://polygon-rpc.com&blockExplorerUrl=https://polygonscan.com&iconUrl=https://cryptologos.cc/logos/polygon-matic-logo.png?v=022&currencyName=Matic&currencySymbol=MATIC&currencyDecimals=18" className="mt-4 btn btn-wide btn-outline btn-secondary">Add Polygon Chain</a>
                <a href="https://metamask.dsolutions.mn/add-chain?chainId=56&chainName=Binance%20Smart%20Chain&rpcUrl=https://bsc-dataseed1.ninicoin.io&blockExplorerUrl=https://bscscan.com&iconUrl=https://cryptologos.cc/logos/bnb-bnb-logo.png?v=022&currencyName=Binance&currencySymbol=BNB&currencyDecimals=18" className="mt-2 btn btn-wide btn-outline btn-warning">Add BSC Chain</a>
                <a href="https://metamask.dsolutions.mn/add-chain?chainId=250&chainName=Fantom%20Opera&rpcUrl=https://rpcapi.fantom.network/&blockExplorerUrl=https://ftmscan.com/&iconUrl=https://cryptologos.cc/logos/fantom-ftm-logo.png?v=022&currencyName=Fantom&currencySymbol=FTM&currencyDecimals=18" className="mt-2 btn btn-wide btn-outline btn-info">Add Fantom Chain</a>
                <a href="https://metamask.dsolutions.mn/add-chain?chainId=43114&chainName=Avalanche&rpcUrl=https://api.avax.network/ext/bc/C/rpc&blockExplorerUrl=https://snowtrace.io&iconUrl=https://cryptologos.cc/logos/avalanche-avax-logo.png?v=022&currencyName=Avalanche&currencySymbol=AVAX&currencyDecimals=18" className="mt-2 btn btn-wide btn-outline btn-error">Add Avalanche Chain</a>
              </div>
            </div>
          </div>

          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="flex items-center justify-center artboard artboard-demo phone-1">
                <h1 className="text-2xl font-bold">Switch <span className="text-cyan-400">Chain</span> Endpoint</h1>
                <code className="px-3 my-2 text-lg text-gray-900 bg-gray-200">{"/switch-chain?"}</code>
                <code className="px-3 text-gray-800 bg-gray-100">{"chainId=<CHAIN_ID>"}</code>
                <a href="https://metamask.dsolutions.mn/switch-chain?chainId=137" className="mt-4 btn btn-wide btn-outline btn-secondary">Switch To Polygon Chain</a>
                <a href="https://metamask.dsolutions.mn/switch-chain?chainId=56" className="mt-2 btn btn-wide btn-outline btn-warning">Switch To BSC Chain</a>
                <a href="https://metamask.dsolutions.mn/switch-chain?chainId=250" className="mt-2 btn btn-wide btn-outline btn-info">Switch To Fantom Chain</a>
                <a href="https://metamask.dsolutions.mn/switch-chain?chainId=43114" className="mt-2 btn btn-wide btn-outline btn-error">Switch To Avalanche Chain</a>
              </div>
            </div>
          </div>

        </div>


      </main>
    </div>
  )
}
