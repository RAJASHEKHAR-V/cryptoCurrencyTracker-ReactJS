import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoaderStarted: true}

  componentDidMount() {
    this.getCryptoList()
    // this.timerId = setTimeout(() => {
    //   this.setState(prevState => ({loadImage: !prevState.loadImage}))
    // }, 3000)
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const newCryptoList = data.map(eachCrypto => ({
      currencyName: eachCrypto.currency_name,
      usdValue: eachCrypto.usd_value,
      euroValue: eachCrypto.euro_value,
      id: eachCrypto.id,
      currencyLogo: eachCrypto.currency_logo,
    }))
    this.setState(prevState => ({
      cryptoList: newCryptoList,
      isLoaderStarted: !prevState.isLoaderStarted,
    }))
  }

  render() {
    const {cryptoList, isLoaderStarted} = this.state

    return (
      <>
        {isLoaderStarted ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
            {/* {loadImage ? ( */}
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="crypto-image"
              alt="cryptocurrency"
            />
            {/* ) : (
              ''
            )} */}
            <ul className="crypto-card">
              <div className="descrtiption-card">
                <p className="coin-type">Coin Type</p>
                <div className="currency-card">
                  <p className="usd">USD</p>
                  <p className="euro">EURO</p>
                </div>
              </div>
              {cryptoList.map(eachCrypto => (
                <CryptocurrencyItem
                  key={eachCrypto.id}
                  cryptoItem={eachCrypto}
                />
              ))}
            </ul>
          </>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
