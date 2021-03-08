import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'
const Cutdown = styled.div`
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
  strong {
    display: inline;
    height: 40px;
    font-size: 40px;
    font-weight: 900;
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
      padding:40px 10px;
      width: 95%;
    }
    .right {
      padding: 20px 10px;
    }
    p {
      height: 12px;
      font-size: 12px;
    }
    strong {
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
    strong {
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
      width: 170px;
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
    strong {
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
      width: 170px;
    }
    .right {
      padding-left: 60px;
    }
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    width: 506px;
    height: 80px;
    padding: 15px 0px 15px 35px;
    p {
      height: 12px;
      font-size: 12px;
    }
    strong {
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
      width: 170px;
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
    strong {
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
      width: 170px;
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
export default function BannerCutdown() {
  const [block, setBlock] = useState()
  const [time, setTime] = useState({})
  const [data, setData] = useState()

  let date = new Date()
  // getData
  var result = 0
  useEffect(() => {
    async function a() {
      let result = await axios('https://api-v2.chainx.org/halving')
      await setTime(result.data.time)
      await setBlock(result.data.block)
    }
    a()
    
  }, [result])
  // handleDate
  useEffect(() => {
    function timeStamp2String(time) {
      var datetime = new Date()
      datetime.setTime(time)
      var year = datetime.getFullYear()
      var month =
        datetime.getMonth() + 1 < 10
          ? '0' + (datetime.getMonth() + 1)
          : datetime.getMonth() + 1
      var date =
        datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate()
      var hour =
        datetime.getHours() < 10
          ? '0' + datetime.getHours()
          : datetime.getHours()
      var minute =
        datetime.getMinutes() < 10
          ? '0' + datetime.getMinutes()
          : datetime.getMinutes()
      var second =
        datetime.getSeconds() < 10
          ? '0' + datetime.getSeconds()
          : datetime.getSeconds()
      return (
        year +
        '-' +
        month +
        '-' +
        date +
        ' ' +
        hour +
        ':' +
        minute +
        ':' +
        second
      )
    }
    if (time) {
      let timeLine = timeStamp2String(time)
      let t1 = date.getTime()
      let t2 = new Date(timeLine).getTime()
      let d = t2 - t1
      if (!d) {
        timeLine = '2021-06-05T14:33:33.000Z'
        t2 = new Date(timeLine).getTime()
        d = t2 - t1
      }
      let timer2 = setInterval(() => {
        d -= 1000
        let day = Math.floor(d / 1000 / 3600 / 24)
        let hour = Math.floor((d / 1000 / 3600) % 24)
        let minute = Math.floor((d / 1000 / 60) % 60)
        let second = Math.floor((d / 1000) % 60)
        setData({
          day: day < 10 ? '0' + day : day,
          hour: hour < 10 ? '0' + hour : hour,
          minute: minute < 10 ? '0' + minute : minute,
          second: second < 10 ? '0' + second : second,
        })
      }, 1000)
      return () => {
        clearInterval(timer2)
      }
    }
  }, [time])
  // handleBlock
  useEffect(() => {
    if(block){
      let tmp2 = block
      let timer1 = setInterval(() => {
        if (tmp2) {
          tmp2 -= 1
          setBlock(tmp2)
        }
      }, 6000)
  
      return () => {
        clearInterval(timer1)
      }
    }else if (block === undefined) {
      let timer = setInterval(() => {
        a()
      }, 1000);
      return () => {
        clearInterval(timer)
      }
    }
    async function a() {
      let result = await axios('https://api-v2.chainx.org/halving')
      await setBlock(result.data.block)
    }
  }, [block])
  const intl = useIntl()
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <Cutdown>
          <div className="left">
            <p style={{ display: 'zh' === currentLocale ? 'block' : 'none' }}>
              PCX 减半剩余区块数
            </p>
            <p style={{ display: 'en' === currentLocale ? 'block' : 'none' }}>
              PCX halves remaining blocks
            </p>
            <strong>{block ? block : '0000000'}</strong>
          </div>
          <div
            className="right"
            style={{ display: 'zh' === currentLocale ? 'block' : 'none' }}
          >
            <p>PCX 减半倒计时</p>
            <strong>{data?.day > 0 ? data?.day : '00'}</strong>
            <span>天</span>
            <strong>{data?.hour > 0 ? data?.hour : '00'}</strong>
            <span>时</span>
            <strong>{data?.minute > 0 ? data?.minute : '00'}</strong>
            <span>分</span>
            <strong>{data?.second > 0 ? data?.second : '00'}</strong>
            <span>秒</span>
          </div>
          <div
            className="right"
            style={{ display: 'en' === currentLocale ? 'block' : 'none' }}
          >
            <p>Cutdown of PCX havels</p>
            <strong>{data?.day > 0 ? data?.day : '00'}</strong>
            <span>D</span>
            <strong>{data?.hour > 0 ? data?.hour : '00'}</strong>
            <span>H</span>
            <strong>{data?.minute > 0 ? data?.minute : '00'}</strong>
            <span>M</span>
            <strong>{data?.second > 0 ? data?.second : '00'}</strong>
            <span>S</span>
          </div>
        </Cutdown>
      )}
    </IntlContextConsumer>
  )
}
