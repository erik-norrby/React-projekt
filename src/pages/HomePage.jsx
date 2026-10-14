import { Link } from 'react-router-dom'
import SummaryCards from '../components/SummaryCards.jsx'
import CategoryList from '../components/CategoryList.jsx'
import TransactionList from '../components/TransactionList.jsx'

function HomePage({ transactions }) {
    return (
        <main className="page-container">
            <div className="page-heading">
                <div><p>September 2026</p><h1>Min ekonomi</h1></div>
                <Link className="add-button" to="/add">+ Lägg till</Link>
            </div>

            {/* Samma transaktionslista skickas till flera komponenter med props. */}
            <SummaryCards transactions={transactions} />

            <div className="dashboard-container">
                <CategoryList transactions={transactions} />
                <TransactionList transactions={transactions} />
            </div>
        </main>
    )
}

export default HomePage