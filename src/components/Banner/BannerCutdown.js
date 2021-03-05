import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import moment from 'moment'
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
  const [diff, setDiff] = useState()
  const [state, setState] = useState()
  // getBlock
  useEffect(() => {
    async function a() {
      const timer1 = setInterval(async () => {
        let result = await axios('https://api-v2.chainx.org/halving')
        // console.log(result)
        setBlock(result.data.block)
      }, 1000)
      return () => {
        //返回一个回调函数用来清除定时器
        clearInterval(timer1)
      }
    }
    a()
  }, [])
  let date = new Date()
  // console.log(block)
  // getDate
  useEffect(() => {
    async function a() {
      let result = await axios('https://api-v2.chainx.org/halving')
      setTime(result.data.time)
    }
    a()
  }, [])
  // handleDate
  useEffect(() => {
    if (time) {
      let tmp = new Date(new Date(time) + 8 * 3600 * 1000)
      let timeLine = moment(tmp).format('YYYY-MM-DD HH:mm:ss')

      let t1 = date.getTime()
      let t2 = new Date(timeLine).getTime()
      let d = t2 - t1
      let dur = moment.duration(t2 - t1)
      let days = parseInt((t2 - t1) / 86400000) - 0
      setDiff({ ...dur._data, days: days })
      let timer = setInterval(() => {
        //防止倒计时出现负数
          d -= 1000;
          let day = Math.floor((d / 1000 / 3600) / 24);
          let hour = Math.floor((d / 1000 / 3600) % 24);
          let minute = Math.floor((d / 1000 / 60) % 60);
          let second = Math.floor(d / 1000 % 60);
          setState({
            day: day,
            hour: hour < 10 ? "0" + hour : hour,
            minute: minute < 10 ? "0" + minute : minute,
            second: second < 10 ? "0" + second : second
          })
        
      }, 1000);
      return () => {
        //返回一个回调函数用来清除定时器
        clearInterval(timer)
      }
      // setDiff(t2-t1)
      // console.log(typeof diff)
    }
  }, [time])
  console.log(state)

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
            <strong>{state ? state?.day : '00'}</strong>
            <span>天</span>
            <strong>{state ? state?.hour : '00'}</strong>
            <span>时</span>
            <strong>{state ? state?.minute : '00'}</strong>
            <span>分</span>
            <strong>{state ? state?.second : '00'}</strong>
            <span>秒</span>
          </div>
          <div
            className="right"
            style={{ display: 'en' === currentLocale ? 'block' : 'none' }}
          >
            <p>Cutdown of PCX havels</p>
            <strong>{state ? state?.day : '00'}</strong>
            <span>D</span>
            <strong>{state ? state?.hour : '00'}</strong>
            <span>H</span>
            <strong>{state ? state?.minute : '00'}</strong>
            <span>M</span>
            <strong>{state ? state?.second : '00'}</strong>
            <span>S</span>
          </div>
        </Cutdown>
      )}
    </IntlContextConsumer>
  )
}
