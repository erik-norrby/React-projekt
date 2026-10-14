function CategoryList({ transactions }) {
    const categories = ['Boende', 'Mat', 'Transport', 'Nöje', 'Övrigt']
    const expenses = transactions.filter(transaction => transaction.type === 'expense')

    function getCategoryTotal(category) {
        // Först hämtas rätt kategori, sedan summeras beloppen i kategorin.
        return expenses
            .filter(transaction => transaction.category === category)
            .reduce((sum, transaction) => sum + transaction.amount, 0)
    }

    // Den största utgiften används för att räkna ut staplarnas bredd i procent.
    const largestExpense = Math.max(...categories.map(getCategoryTotal), 1)

    return (
        <section className="content-card category-container">
            <h2>Utgifter per kategori</h2>
            {categories.map(category => {
                const total = getCategoryTotal(category)
                const width = (total / largestExpense) * 100

                return (
                    <div className="category-row" key={category}>
                        <span>{category}</span>
                        <div className="bar-background">
                            <div className="bar-fill" style={{ width: `${width}%` }}></div>
                        </div>
                        <strong>{total.toLocaleString('sv-SE')} kr</strong>
                    </div>
                )
            })}
        </section>
    )
}

export default CategoryList
