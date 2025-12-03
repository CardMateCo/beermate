import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="card home-card">
            <img src={`${import.meta.env.BASE_URL}beermateX4.png`} alt="Beermate logo" className="logo" />
            <h2>Welcome to BEERMATE</h2>
            <div className="install-guide">
                <h3>How to Install</h3>
                <div className="step-container">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h4>Install AltStore</h4>
                        <p>The world's most popular alternative app store for iOS.</p>
                        <a href="https://altstore.io/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            Get AltStore
                        </a>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h4>Install BEERMATE</h4>
                        <p>Once AltStore is ready, click below to install BEERMATE.</p>
                        <a href="altstore://source?url=https://cardmateco.github.io/beermate/altstore.json" className="btn-primary">
                            Get BEERMATE
                        </a>
                    </div>
                </div>
                <div className="webapp-link">
                    <p className="webapp-title">No iPhone? No problem.</p>
                    <a href="https://drinkup-beermate.web.app" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        Open Web Version
                    </a>
                    <p className="webapp-tip">
                        <strong>Pro Tip:</strong> Add to Home Screen for the best experience
                    </p>
                </div>
            </div>


            <hr className="divider" />
            <div className="footer">
                <div>BEERMATE</div>
                <div>CardMateCompany</div>
            </div>
        </div>
    )
}

export default Home 