import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CoinsPage from './CoinsPage';

const Coins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await fetch('https://api.coingecko.com/api/v3/search/trending');
                const data = await res.json();
                //console.log('coin data: ' + JSON.stringify(data));
                const coinArray = data.coins.map(coin => {
                    return {
                        id: coin.item.coin_id,
                        nameID: coin.item.id,
                        name: coin.item.name,
                        symbol: coin.item.symbol,
                        image: coin.item.large,
                        price: coin.item.price_btc
                    }
                });
                setCoins(coinArray);
            } catch (err) {
                console.error('Data Error: ' + err)
            }
        }
        fetchCoins();
    }, []);

    // for (let i = 0; i < coins.length; i++) {
    //     console.log(coins[i].id)
    // }

    return (
        <div className="coins">
            <p>Trending Coins</p>
            <ol>
                {coins.map(coin => {
                    return (
                        <Link to={coin.nameID}>
                            <li key={coin.id}>{coin.name}</li>
                        </Link>
                    );
                })}
                {/* {coins.length > 0 ? (
                coins.map((coin, i) =>
                <li key={coin[++i].id}>{coin[++i].name}</li>  
                )
                ) : (
                    <li>No coins available</li>
                )} */}
            </ol>
        </div>
    )
}
export default Coins;