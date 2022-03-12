export default function Home() {
  return (
    <div className="px-0 sm:px-12">
      <main className="flex flex-col items-center justify-center h-screen">

        <h1 className="mb-12 text-2xl text-center sm:text-4xl lg:text-7xl">
          <a className="text-blue-600" href="https://www.dsolutions.mn/">Diverse</a> Metamask API SDK!
        </h1>

        <div className="my-6 text-center">
          <p className="mb-5 text-2xl font-bold sm:text-4xl">Add Token Endpoint</p>

          <p className="mt-3">
            <code className="px-3 text-3xl text-gray-900 bg-gray-100">{"/add-token?"}</code>
          </p>

          <p className="mt-3">
            <code className="px-3 text-gray-800 bg-gray-100">{"name=<TOKEN_NAME>"}</code>
          </p>
          <p className="mt-3">
            <code className="px-3 text-gray-800 bg-gray-100">{"decimals=<TOKEN_DECIMAL>"}</code>
          </p>
          <p className="mt-3">
            <code className="px-3 text-gray-800 bg-gray-100">{"symbol=<TOKEN_SYMBOL>"}</code>
          </p>
          <p className="mt-3">
            <code className="px-3 text-gray-800 bg-gray-100">{"address=<TOKEN_ADDRESS>"}</code>
          </p>
          <p className="mt-3">
            <code className="px-3 text-gray-800 bg-gray-100">{"imgUrl=<TOKEN_IMG>"}</code>
          </p>
        </div>

        <div className="my-6 text-center">
          <p className="mb-5 text-2xl font-bold sm:text-4xl">Get Ethereum Chains</p>

          <p className="mt-3">
            <code className="px-3 text-3xl text-gray-900 bg-gray-100">{"/api/chains"}</code>
          </p>
        </div>

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
