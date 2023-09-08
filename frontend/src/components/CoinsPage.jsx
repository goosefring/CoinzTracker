import React, { useState, useEffect,} from 'react';
import { Link, useParams } from 'react-router-dom';
import Chart from './Chart'

const CoinsPage = () => {

    const params = useParams();
    const coinID = params.id

    console.log('coinID: ' + coinID);

    let [coinGraph, setCoinGraph] = useState([]);

    useEffect(() => {
        const fetchCoinChart = async () => {
            const altLink = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1';
            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinID}/ohlc?vs_currency=usd&days=30`);
                const data = await res.json();
                console.log('coin data', data);
                coinGraph = data.map(priceData => {
                    const [timestamp, open, high, low, close] = priceData;
                    return {
                        Date: timestamp,
                        Open: open,
                        High: high,
                        Low: low,
                        Close: close
                    }
                });
                console.log('coin graph', coinGraph);
                setCoinGraph(coinGraph);
            } catch (err) {
                console.error('Data Error: ' + err)
            }
        }
        fetchCoinChart();
    }, []);

    return (
        <div className="coin-page">
            <h1>Coin Info</h1>
            <br />
            <Chart coinGraph={coinGraph} />
        </div>
    );
}

export default CoinsPage;