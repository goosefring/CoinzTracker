import axios from 'axios'
import { useState } from 'react';

const Coins = () => {

    let [[coins], setCoins] = useState([]);

    try {
        const res = axios.get('https://api.coingecko.com/api/v3/search/trending');
        console.log('coin data: ' + res.data);
        setCoins = res;
        console.log('coin array: ' + coins);
    } catch (err) {
        console.error('Data Error: ' + err)
    }

    // return (
    //     <div className="coins">
    //         <p>Trending Coins</p>
    //         {/* <ul>
    //             {coins.map(coin => {
    //                 <li>{coin}</li>  
    //             })}
    //         </ul> */}
    //     </div>
    // )
}
export default Coins;