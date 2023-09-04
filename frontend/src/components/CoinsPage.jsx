import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CoinsPage = () => {

    const data = useParams();
    const coinID = data.id

    console.log('coinID: ' + coinID);

    const [coin, setCoin] = useState({});

    useEffect(() => {
        const fetchCoinChart = async () => {
            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=30`);
                const data = await res.json();
                console.log('coin data', data);
            } catch (err) {
                console.error('Data Error: ' + err)
            }
        }
        fetchCoinChart();
    }, []);

    return (
        <div className="coin-page">
            <h1>Coin Info</h1>
            <p>{coin.name}</p>
        </div>
    );
}

export default CoinsPage;