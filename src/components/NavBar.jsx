import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="site-header">
            <Link className="logo" to="/">Saldo</Link>
            <nav>
                <Link to="/">Översikt</Link>
                <Link to="/add">Ny transaktion</Link>
            </nav>
        </header>
    )
}

export default Navbar
