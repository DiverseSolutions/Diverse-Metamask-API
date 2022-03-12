import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="px-12">
      <main className="h-screen flex justify-center items-center flex-col">

        <h1 className="text-7xl mb-12">
          <a className="text-blue-600" href="https://www.dsolutions.mn/">Diverse</a> Metamask API SDK!
        </h1>

        <div className="text-center my-6">
          <p className="mb-5 text-4xl font-bold">Add Token Endpoint</p>

          <p className="mt-3">
            <code className="bg-gray-100 text-gray-900 px-3 text-3xl">{"/add-token?"}</code>
          </p>

          <p className="mt-3">
            <code className="bg-gray-100 text-gray-800 px-3">{"name=<TOKEN_NAME>"}</code>
          </p>
          <p className="mt-3">
            <code className="bg-gray-100 text-gray-800 px-3">{"decimals=<TOKEN_DECIMAL>"}</code>
          </p>
          <p className="mt-3">
            <code className="bg-gray-100 text-gray-800 px-3">{"symbol=<TOKEN_SYMBOL>"}</code>
          </p>
          <p className="mt-3">
            <code className="bg-gray-100 text-gray-800 px-3">{"address=<TOKEN_ADDRESS>"}</code>
          </p>
          <p className="mt-3">
            <code className="bg-gray-100 text-gray-800 px-3">{"imgUrl=<TOKEN_IMG>"}</code>
          </p>
        </div>

        <div className="text-center my-6">
          <p className="mb-5 text-4xl font-bold">Get Ethereum Chains</p>

          <p className="mt-3">
            <code className="bg-gray-100 text-gray-900 px-3 text-3xl">{"/api/chains"}</code>
          </p>
        </div>

      </main>

      <footer className="flex flex-grow py-8 border-t border-gray-300 justify-center items-center">
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
