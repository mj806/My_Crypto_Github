import React from 'react'
import { CoinContainer, CoinRow, CoinItem, CoinHeader1, BitPic, BitSymbol, CoinData, CoinPrice, CoinVol, cPercentRed } from './Styled/Coin.styled'
const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
  return (
    <CoinContainer>
        <CoinRow>
            <CoinItem>
                <BitPic src={image} alt='crypto'/>
                <CoinHeader1>{name}</CoinHeader1>
                <BitSymbol>{symbol}</BitSymbol>
            </CoinItem>
            <CoinData>
                <CoinPrice>${price}</CoinPrice>
                <CoinVol>${volume.toLocaleString()}</CoinVol>
                {priceChange < 0 ? (<p className='coin-percent red' style={{
                    width: 100,
                    color: "red"
                }}>{priceChange.toFixed(2)}%</p>
                ) : (<p className='coin-percent green' style={{
                    width: 100,
                    color: "green"
                }}>{priceChange.toFixed(2)}%</p>)}
                <p className='coin-marketcap' style={{
                    width: 230
                }}>
                    Mkt Cap: ${marketcap.toLocaleString()}
                </p>
            </CoinData>
        </CoinRow>
    </CoinContainer>
  )
}

export default Coin