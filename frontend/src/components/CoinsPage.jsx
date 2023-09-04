import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const CoinsPage = () => {

    const data = useParams();
    const coinID = data.id

    console.log('coinID: ' + coinID);

    const [coin, setCoin] = useState('');

    useEffect(() => {
        const fetchCoinChart = async () => {
            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=30`);
                const data = await res.json();
                console.log('coin data', data);
                //console.log('coin data: ' + JSON.stringify(data));
                // const coinArray = data.coins.map(coin => {
                //     return {
                //         id: coin.item.coin_id,
                //         nameID: coin.item.id,
                //         name: coin.item.name,
                //         symbol: coin.item.symbol,
                //         image: coin.item.large,
                //         price: coin.item.price_btc
                //     }
                // });
            } catch (err) {
                console.error('Data Error: ' + err)
            }
        }
        fetchCoinChart();
    }, []);

    return (
        <h1>Coin Info</h1>
    );
}
 
export default CoinsPage;