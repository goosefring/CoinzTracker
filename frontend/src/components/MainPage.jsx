import React from 'react'
import { useEffect, useState } from 'react';
import '../index.css';
import Coins from './Coins';

const MainPage = () => {

    const [searchedCoins, setSearchedCoins] = useState([]);
    const [query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value);
        //searchCoins(query);
        setTimeout(() => {
            findCoins(query);
        }, 500)
    }
    const findCoins = async (query) => {
        try {
            const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`);
            const data = await res.json();
            const coinArray = data.coins.map(coin => {
                return {
                    name: coin.item.name,
                    symbol: coin.item.symbol,
                    image: coin.item.large,
                }
            });
            setSearchedCoins(coinArray);
            console.log('searched coins: ' + searchedCoins);
        } catch (err) {
            console.error('Data Error: ' + err)
        }
    }

    return (
        <div className="main">
            <h1>Coinz Tracker</h1>
            <p>View all your favourite cryptocurrencies!</p>
            <br />
            <div className="search">
                <label>Search: </label>
                <input type="text" value={query} onChange={handleQuery} />
                {searchedCoins.map(coin => {
                    return (
                        <p>{coin.name}</p>
                    )
                })}
            </div>
            <Coins />
        </div>
    );
}

export default MainPage;