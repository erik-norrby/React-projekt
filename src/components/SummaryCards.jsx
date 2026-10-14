function SummaryCards({ transactions }) {
    // filter skapar två nya listor utan att ändra originallistan.
    const incomes = transactions.filter(transaction => transaction.type === 'income')
    const expenses = transactions.filter(transaction => transaction.type === 'expense')

    // reduce summerar alla belopp i respektive lista.
    const totalIncome = incomes.reduce((sum, transaction) => sum + transaction.amount, 0)
    const totalExpenses = expenses.reduce((sum, transaction) => sum + transaction.amount, 0)
    const balance = totalIncome - totalExpenses

    
    return (
        <section className="summary-container">
            <div className="summary-card income-card"><p>Inkomster</p><h2>{totalIncome.toLocaleString('sv-SE')} kr</h2></div>
            <div className="summary-card expense-card"><p>Utgifter</p><h2>{totalExpenses.toLocaleString('sv-SE')} kr</h2></div>
            <div className="summary-card balance-card"><p>Saldo</p><h2>{balance.toLocaleString('sv-SE')} kr</h2></div>
        </section>
    )
}

export default SummaryCards
