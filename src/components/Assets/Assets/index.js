import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Pcx from './pcx.svg'
import Xbtc from './xbtc.svg'
import Lbtc from './lbtc.svg'
import Sdot from './sdot.svg'
import { request } from '../../../utils/request'

const InnerSection = styled.section`
  padding-bottom: 90px;

  @media screen and (max-width: 1080px) {
    & > section {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 578px) and (max-width: 1080px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & > section {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
    display: flex;
    justify-content: space-between;
  }
`

const Asset = styled.section`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 24px;
  width: 255px;

  h4 {
    margin: 0 0 4px;
    opacity: 0.72;
    font-weight: 600;
    font-size: 20px;
    color: #000000;
  }
`

const Header = styled.header`
  margin-top: 16px;
  opacity: 0.32;
  font-size: 12px;
  color: #000000;
  letter-spacing: 0.2px;
  line-height: 16px;
`

const Value = styled.main`
  opacity: 0.72;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
`

function Item({ text, value }) {
  return (
    <>
      <Header>{text}</Header>
      <Value>{value || '--'}</Value>
    </>
  )
}

function Values({ power, value, valueText, token }) {
  const percent = Number(power * 100).toFixed(1) + '%'

  function normalizeValue(v) {
    return Number(Number(v).toFixed(0)).toLocaleString() + ` ${token}`
  }

  return (
    <>
      <Item text="算力占比" value={power && percent} />
      <Item text={valueText} value={value && normalizeValue(value)} />
    </>
  )
}

export default function() {
  const [powerArr, setPowerArr] = useState([])
  const [pseduIntentions, setPseduIntentions] = useState([])
  const [status, setStatus] = useState({})

  function getPower(name) {
    const item = powerArr.find(p => p.name === name)
    return item ? item.power : null
  }

  function getPseduCirculation(name) {
    const item = pseduIntentions.find(p => p.id === name)
    if (!item) {
      return null
    }

    const precision = name === 'SDOT' ? 3 : 8
    return Number(item.circulation) / Math.pow(10, precision)
  }

  const xbtcValue = getPseduCirculation('BTC')
  const lbtcValue = getPseduCirculation('L-BTC')
  const sdotValue = getPseduCirculation('SDOT')
  const pcxValue = !status ? null : status.pcx_issuance / Math.pow(10, 8)

  useEffect(() => {
    request({ url: 'https://api.chainx.org/power_percent_v2' }).then(
      setPowerArr
    )
    request({ url: 'https://api.chainx.org.cn/psedu_intentions' }).then(
      setPseduIntentions
    )
    request({
      url: 'https://api.chainx.org/chain/status',
    }).then(setStatus)
  }, [])

  return (
    <InnerSection>
      <Asset>
        <Pcx />
        <h4>Polkadot ChainX</h4>
        <Values
          valueText="发行量"
          power={getPower('PCX')}
          value={pcxValue}
          token="PCX"
        />
      </Asset>
      <Asset>
        <Xbtc />
        <h4>Interchain BTC</h4>
        <Values
          valueText="充值量"
          power={getPower('X-BTC')}
          value={xbtcValue}
          token="X-BTC"
        />
      </Asset>
      <Asset>
        <Lbtc />
        <h4>Lock-up BTC</h4>
        <Values
          valueText="锁仓量"
          power={getPower('L-BTC')}
          value={lbtcValue}
          token="L-BTC"
        />
      </Asset>
      <Asset>
        <Sdot />
        <h4>Shadow DOT</h4>
        <Values
          valueText="映射量"
          power={getPower('SDOT')}
          value={sdotValue}
          token="S-DOT"
        />
      </Asset>
    </InnerSection>
  )
}
