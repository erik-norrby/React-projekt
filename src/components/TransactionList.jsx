function TransactionList({ transactions }) {
    return (
        <section className="content-card transaction-container">
            <h2>Senaste transaktioner</h2>

            {transactions.length === 0 && <p>Det finns inga transaktioner.</p>}


            {/* Map skapar en rad för varje transaktion i listan. */}
            {transactions.map(transaction => (
                <div className="transaction-row" key={transaction.id}>
                    <div><strong>{transaction.title}</strong><p>{transaction.category} · {transaction.date}</p></div>
                    <span className={transaction.type === 'income' ? 'income-text' : 'expense-text'}>
                        {transaction.type === 'income' ? '+' : '-'} {transaction.amount.toLocaleString('sv-SE')} kr
                    </span>
                </div>
            ))}
        </section>
    )
}

export default TransactionList
