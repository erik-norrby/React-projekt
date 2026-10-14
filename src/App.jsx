import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import AddTransactionPage from './pages/AddTransactionPage.jsx'

const startTransactions = [
    // { id: 1, title: 'Lön', amount: 28400, type: 'income', category: 'Inkomst', date: '2026-09-25' },
    // { id: 2, title: 'Hyra', amount: 8900, type: 'expense', category: 'Boende', date: '2026-09-01' },
    // { id: 3, title: 'Matbutik', amount: 1250, type: 'expense', category: 'Mat', date: '2026-09-04' },
    // { id: 4, title: 'Busskort', amount: 990, type: 'expense', category: 'Transport', date: '2026-09-02' },
]

function App() {
    // Om det finns sparade transaktioner används de, annars används startlistan.
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'))
    const [transactions, setTransactions] = useState(savedTransactions || startTransactions)

    function addTransaction(newTransaction) {
        // Spread-operatorn kopierar den gamla listan och lägger till det nya objektet.
        const updatedTransactions = [...transactions, newTransaction]
        setTransactions(updatedTransactions)
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions))
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage transactions={transactions} />} />
                <Route path="/add" element={<AddTransactionPage addTransaction={addTransaction} />} />
            </Routes>
        </>
    )
}

export default App
