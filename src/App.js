import React, { useEffect, useState } from "react";
import axios from "axios";

const useBitcoin = () => {
  // KODUNUZ BURAYA GELECEK
  const [price, setPrice] = useState(undefined);

  useEffect(() => {
    let interval;

    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        setPrice(response.data.bitcoin.usd);
      } catch (error) {
        console.error("Bitcoin fiyatı alınırken hata:", error);
      }
    };

    fetchPrice(); 
    interval = setInterval(fetchPrice, 60000); 

    return () => clearInterval(interval); 
  }, []);

  return price;
};

function App() {
  // KODUNUZ BURAYA GELECEK
  const price = useBitcoin();

  return (
    <div>
      <h1>Bitcoin Fiyatı (USD)</h1>
      {price ? <p>{price} USD</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
