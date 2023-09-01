import React from 'react'
import { useEffect, useState } from 'react';
import '../index.css';
import Coins from './Coins';

const MainPage = () => {

    return (
        <div className="main">
            <h1>Coinz Tracker</h1>
            <p>View all your favourite cryptocurrencies!</p>
            <br />
            <div className="search">
                <label>Search: </label>
                <input type="text" />
            </div>
            <Coins />
        </div>
    );
}

export default MainPage;