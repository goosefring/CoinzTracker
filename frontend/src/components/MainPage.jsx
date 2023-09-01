import { useEffect } from 'react';
import React from 'react'
import '../index.css';
import Coins from './Coins'

const MainPage = () => {

    try {
        React.useEffect(async () => {
            await Coins()
            // .then((data) => {
            //     console.log('data retrieved: ' + data);
            // });
        });
    } catch (err) {
        console.error('Data Error: ' + err)
    }

    return (
        <div className="main">
            <h1>Coinz Tracker</h1>
            <p>View all your favourite cryptocurrencies!</p>
            <br />
            <div className="search">
                <label>Search: </label>
                <input type="text" />
            </div>
        </div>
    );
}

export default MainPage;