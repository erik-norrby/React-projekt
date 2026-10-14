import { useEffect, useState } from 'react'

function CurrencyBox() {
    const [rates, setRates] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    // useEffect kör API-anropet en gång när komponenten visas första gången.
    useEffect(() => {
        fetch('https://api.frankfurter.dev/v1/latest?base=SEK&symbols=EUR,USD')
            .then(response => {
                // response.ok är false om API:t svarar med exempelvis 404 eller 500.
                if (!response.ok) {
                    throw new Error('Något gick fel')
                }

                return response.json()
            })
            .then(data => {
                setRates(data.rates)
            })
            .catch(() => {
                setError('Kunde inte hämta valutakurser.')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="currency-box">
            <div>
                <h2>Dagens valutakurser</h2>
                <p>1 svensk krona motsvarar</p>
            </div>

            {/* Endast det state som är aktuellt visas för användaren. */}
            {loading && <p>Hämtar valutakurser...</p>}
            {error && <p className="api-error">{error}</p>}
            {rates && <p><strong>{rates.EUR.toFixed(4)} EUR</strong> · <strong>{rates.USD.toFixed(4)} USD</strong></p>}
        </section>
    )
}

export default CurrencyBox
