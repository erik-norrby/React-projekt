import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TransactionForm({ addTransaction }) {
    // Varje formulärfält har ett eget lokalt state.
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('expense')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    

    function handleSubmit(event) {
        // Hindrar formuläret från att ladda om hela sidan.
        event.preventDefault()

        if (title === '' || amount === '' || category === '' || date === '') {
            setError('Du måste fylla i alla fält.')
            return
        }

        if (Number(amount) <= 0) {
            setError('Beloppet måste vara större än 0.')
            return
        }

        const newTransaction = {
            id: Date.now(),
            title: title,
            amount: Number(amount),
            type: type,
            category: category,
            date: date,
        }

        addTransaction(newTransaction)
        // Efter att transaktionen sparats skickas användaren till översikten.
        navigate('/')
    }


    return (
        <form className="transaction-form" onSubmit={handleSubmit}>
            {error && <p className="form-error">{error}</p>}

            <label htmlFor="transactionTitle">Namn</label>
            <input id="transactionTitle" value={title} onChange={event => setTitle(event.target.value)} />

            <label htmlFor="transactionAmount">Belopp</label>
            <input id="transactionAmount" type="number" value={amount} onChange={event => setAmount(event.target.value)} />

            <label htmlFor="transactionType">Typ</label>
            <select id="transactionType" value={type} onChange={event => setType(event.target.value)}>
                <option value="expense">Utgift</option>
                <option value="income">Inkomst</option>
            </select>

            <label htmlFor="transactionCategory">Kategori</label>
            <select id="transactionCategory" value={category} onChange={event => setCategory(event.target.value)}>
                <option value="">Välj kategori</option>
                <option value="Inkomst">Inkomst</option>
                <option value="Boende">Boende</option>
                <option value="Mat">Mat</option>
                <option value="Transport">Transport</option>
                <option value="Nöje">Nöje</option>
                <option value="Övrigt">Övrigt</option>
            </select>

            <label htmlFor="transactionDate">Datum</label>
            <input id="transactionDate" type="date" value={date} onChange={event => setDate(event.target.value)} />

            <button type="submit">Spara transaktion</button>
        </form>
    )
}

export default TransactionForm
