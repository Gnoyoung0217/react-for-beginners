import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((resp) => resp.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ?
        (<strong>Loading...</strong>) :
        (<select>
          {coins.map((coin) => (
            <option key={coin.id}>{coin.name} ({coin.symbol}): ${parseFloat(coin.quotes.USD.price).toFixed(2)} USD</option>
          ))}
        </select>)
      }
    </div>
  )
}

export default App;