import { Link } from 'react-router-dom'
import TransactionForm from '../components/TransactionForm.jsx'

function AddTransactionPage({ addTransaction }) {
  return (
    <main className="page-container form-page">
      <Link className="back-link" to="/">← Tillbaka</Link>
      <section className="form-card">
        <h1>Ny transaktion</h1>
        <p>Fyll i formuläret för att lägga till en inkomst eller utgift.</p>
        <TransactionForm addTransaction={addTransaction} />
      </section>
    </main>
  )
}

export default AddTransactionPage
