import axios from 'axios'
import { useState, useEffect } from 'react';

const Coins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await fetch('https://api.coingecko.com/api/v3/search/trending');
                const data = await res.json();
                //console.log('coin data: ' + JSON.stringify(data));
                setCoins(data);
            } catch (err) {
                console.error('Data Error: ' + err)
            }
        }
        fetchCoins();
    }, []);

    //console.log(coins);

    coins.map(coin => {
        console.log(coin.item.name);
    })

    return (
        <div className="coins">
            <p>Trending Coins</p>
            <ul>
            {coins.length > 0 ? (
                coins.map((coin, i) =>
                <li key={coin[++i].item.coin_id}>{coin[++i].item.name}</li>  
                )
                ) : (
                    <li>No coins available</li>
                )}
            </ul>
        </div>
    )
}
export default Coins;