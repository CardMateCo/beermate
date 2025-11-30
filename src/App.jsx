import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfUse from './TermsOfUse'
import Home from './Home'
import FAQ from './FAQ'

function App() {
    return (
        <Router>
            <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '2.5rem' }}>
                <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
                <Link to="/privacy" style={{ marginRight: '1rem' }}>Privacy Policy</Link>
                <Link to="/terms" style={{ marginRight: '1rem' }}>Terms of Use</Link>
                <Link to="/faq">FAQ</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfUse />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>
        </Router>
    )
}

export default App
