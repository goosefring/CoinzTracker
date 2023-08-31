import '../index.css';

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
        </div>
    );
}

export default MainPage;