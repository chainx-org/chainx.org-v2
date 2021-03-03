import React, { useState, useEffect } from 'react'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import Bannerlogo from './banner-logo.png'
import BannerLogo from './bannerlogo.png'
import ChainXWhitePaper from './ChainXWhitePaper.pdf'
import ChainX from './ChainX.pdf'
import axios from 'axios'
import moment from 'moment'


const Can = styled.div`
  background: #f6c94a;
  border-radius: 10px 0 0 0;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  p {
    height: 20px;
    align-items: center;
    margin-bottom: 0;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: rgba(46, 41, 24, 0.87);
  }
  h1 {
    display: inline;
    height: 40px;
    font-size: 40px;
    color: #111111;
    font-weight: 800;
    position: relative;
    top: 7px;
  }
  span {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #2e2918;
    text-align: center;
    padding: 0 5px 0 3px;
    position: relative;
    top: 7px;
  }
  .left {
    width: 235px;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
  }
  .right {
    padding-left: 90px;
  }

  @media screen and (max-width: 539px) {
    position: relative;
    right: -9%;
    align-self: flex-end;
    width: 100%;
    height: 280px;
    flex-direction: column;
    padding: 10px 20px;
    .left {
      border-right: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      padding:40px 0;
      width: 95%;
    }
    .right {
      padding: 20px 0;
    }
    p {
      height: 12px;
      font-size: 12px;
    }
    h1 {
      height: 36px;
      font-size: 36px;
      top: 15px;
    }
    span {
      font-size: 12px;
      padding: 0 4px 0 2px;
      top: 7px;
    }
  }
  @media screen and (min-width: 539px) and (max-width: 768px) {
    width: 95%;
    height: 130px;
    padding: 28px 0px 20px 28px;
    p {
      height: 12px;
      font-size: 12px;
    }
    h1 {
      height: 27px;
      font-size: 27px;
      top: 22px;
    }
    span {
      font-size: 12px;
      padding: 0 4px 0 2px;
      top: 20px;
    }
    .left {
      width: 157px;
    }
    .right {
      padding-left: 50px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 899px) {
    width: 506px;
    height: 80px;
    padding: 15px 0px 15px 35px;
    p {
      height: 12px;
      font-size: 12px;
    }
    h1 {
      height: 27px;
      font-size: 27px;
      top: 9px;
    }
    span {
      font-size: 12px;
      padding: 0 4px 0 2px;
      top: 7px;
    }
    .left {
      width: 157px;
    }
    .right {
      padding-left: 60px;
    }
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    // width: 380px;
    // height: 60px;
    // padding: 10px 0px 10px 22px;
    // p {
    //   height: 12px;
    //   font-size: 12px;
    //   transform:scale(0.6);
    //   position: relative;
    //   right:28px;
    // }
    // h1 {
    //   height: 20px;
    //   font-size: 20px;
    //   top: 4px;
    // }
    // span {
    //   font-size: 12px;
    //   transform:scale(0.6); // it doesn't work ~~
    //   padding: 0 4px 0 2px;
    //   top: 4px;
    // }
    // .left {
    //   width: 140px;
    // }
    // .right {
    //   p {
    //     right:36px;
    //   }
    //   padding-left: 30px;
    // }
    width: 506px;
    height: 80px;
    padding: 15px 0px 15px 35px;
    p {
      height: 12px;
      font-size: 12px;
    }
    h1 {
      height: 27px;
      font-size: 27px;
      top: 9px;
    }
    span {
      font-size: 12px;
      padding: 0 4px 0 2px;
      top: 7px;
    }
    .left {
      width: 157px;
    }
    .right {
      padding-left: 60px;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    width: 760px;
    height: 120px;
    padding: 25px 0px 28px 60px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1399px) {
    width: 506px;
    height: 80px;
    padding: 15px 0px 15px 35px;
    p {
      height: 12px;
      font-size: 12px;
      transform:scale(0.9);
      position: relative;
      right: 9px;
    }
    h1 {
      height: 27px;
      font-size: 27px;
      top: 9px;s
    }
    span {
      font-size: 9px;
      padding: 0 4px 0 2px;
      top: 7px;
    }
    .left {
      width: 157px;
    }
    .right {
      padding-left: 60px;
      p {
        right: 12px;
      }
    }
  }
  @media screen and (min-width: 1400px) {
    width: 760px;
    height: 120px;
    padding: 25px 0px 28px 60px;
  }
`



export default function BannerCandidate() {
    const [data, setData] = useState({})
    const [diff, setDiff] = useState()
    // getData
    useEffect(() => {
      async function a() {
        let result = await axios('https://api-v2.chainx.org/halving')
        setData(result.data)
      }
      a()
    }, [])
    console.log(data)
  
    // handleDate
    useEffect(() => {
      console.log(data)
      if (data && data.time) {
        let time = data.time
        let date = new Date()
        console.log(time)
        let tmp = new Date(new Date(time) + 8 * 3600 * 1000)
        let timeLine = moment(tmp).format('YYYY-MM-DD HH:mm:ss')
        console.log('timeLine: ', timeLine)
        console.log(typeof timeLine)
        console.log(timeLine)
        let t1 = date.getTime()
        let t2 = new Date(timeLine).getTime()
        let dur = moment.duration(t2 - t1)
        let days = parseInt((t2 - t1) / 86400000)
        setDiff({ ...dur._data, days: days })
  
        // setDiff(dur._data)
  
        console.log(diff)
      }
    }, [data])
    console.log('diff',diff)
  
    return (
      <Can>
        <div className="left">
          <p>PCX 减半剩余区块数</p>
          <h1>{data.block}</h1>
        </div>
        <div className="right">
          <p>PCX 减半倒计时</p>
    <h1>{diff?.days}</h1>
          <span>天</span>
          <h1>{diff?.hours}</h1>
          <span>时</span>
          <h1>{diff?.minutes}</h1>
          <span>分</span>
          <h1>{diff?.seconds}</h1>
          <span>秒</span>
        </div>
      </Can>
    )
  }