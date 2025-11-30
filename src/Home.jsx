import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="card home-card">
            <img src={`${import.meta.env.BASE_URL}beermateX4.png`} alt="Beermate logo" className="logo" />
            <h2>Welcome to Beermate</h2>
            <p className="page-desc">Please select a page to view:</p>
            <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
            </ul>
            <hr className="divider" />
            <div className="footer">
                <div>BeerMate</div>
                <div>CardMateCompany</div>
            </div>
        </div>
    )
}

export default Home 