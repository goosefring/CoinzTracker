const CoinsPage = () => {

    const [coin, setCoin] = useState('');

    useEffect(() => {
        const fetchCoinChart = async () => {
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
        <h1>Coin Info</h1>
    );
}
 
export default CoinsPage;