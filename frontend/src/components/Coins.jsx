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

    return (
        <div className="coins">
            <p>Trending Coins</p>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {coins.map(coin => {
                    return (
                        <tr>
                            <Link to={`${coin.nameID}`}>
                                <td>{coin.name}</td>
                                {/* <td key={coin.id}>{coin.image}</td>
                                <td key={coin.id}>{coin.symbol}</td>
                                <td key={coin.id}>{coin.price}</td> */}
                            </Link>
                        </tr>
                    );
                })}
            </table>
        </div>
    )
}
export default Coins;