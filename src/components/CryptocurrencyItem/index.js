import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoItem

  return (
    <li className="crypto-item">
      <div className="coin-card">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-value-card">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
