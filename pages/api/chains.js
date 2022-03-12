import axios from 'axios'

export default async function handler(req, res) {
  let resp = await axios.get('https://chainid.network/chains.json')
  res.status(200).json(resp.data)
}
