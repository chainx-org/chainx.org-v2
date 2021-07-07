import React, { useEffect } from 'react'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import jquery from 'jquery'
import ChainXWhitePaper from '../../assetpdf/ChainXWhitePaper.pdf'
import ChainX from '../../assetpdf/ChainX.pdf'

const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #ffffff;
`

const InnerSection = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  @media screen and (max-width: 767px) {
    padding: 100px 30px;
  }
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    width: 100px;
    height: 3px;
    background: #f6c94a;
    content: '';
  }
  // &:after {
  //   position: absolute;
  //   bottom: 0;
  //   width: 100px;
  //   height: 3px;
  //   background: #F6C94A;
  //   content: "";
  // }
`

const ItemTit = styled.div`
  padding: 70px 160px 80px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(-45deg, #cbcbcb 0%, #f9da82 100%);
  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    padding: 70px 150px 80px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    padding: 70px 75px 80px;
  }
  @media screen and (max-width: 767px) {
    padding: 50px 70px 80px;
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    padding: 50px 60px 70px;
  }
  @media screen and (min-width: 768px) and (max-width: 899px) {
    padding: 50px 60px 70px;
  }
  @media screen and (max-width: 414px) {
    padding: 50px 25px 80px;
  }
  visibility: hidden;
  &.ShowAnimation_show {
    animation: show 1s ease 0.3s;
    animation-fill-mode: forwards;
  }
  @keyframes show {
    0% {
      pointer-events: none;
      visibility: visible;
      opacity: 0;
      transform: translate3d(0, 60%, 0);
    }
    100% {
      pointer-events: inherit;
      visibility: visible;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`

const EconTit = styled.div`
  font-size: 36px;
  color: #282828;
  text-align: center;
  line-height: 48px;
  margin-bottom: 24px;
`
const Classtit = styled.p`
  @media screen and (min-width: 1280px) {
    width: 960px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 600px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 890px;
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    width: 680px;
  }
  @media screen and (min-width: 768px) and (max-width: 899px) {
    width: 500px;
  }
  font-size: 16px;
  color: #282828;
  text-align: center;
  line-height: 28px;
`

const Linkbtn = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  background: rgba(40, 40, 40, 1);
  border-radius: 6px;
  padding: 12px 30px;
  &:hover {
    text-decoration: none;
    color: #ffffff;
    background: rgba(40, 40, 40, 0.8);
  }
`

const Apps = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`

const ItemSys = styled.div`
  padding: 50px 70px 80px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    padding: 50px 58px 80px;
  }
  @media screen and (min-width: 768px) and (max-width: 899px) {
    padding: 50px 60px 60px;
  }
  @media screen and (max-width: 414px) {
    padding: 50px 27px 80px;
  }
  visibility: hidden;
  &.ShowAnimation_show {
    animation: show 1s ease 0.3s;
    animation-fill-mode: forwards;
  }
  @keyframes show {
    0% {
      pointer-events: none;
      visibility: visible;
      opacity: 0;
      transform: translate3d(0, 60%, 0);
    }
    100% {
      pointer-events: inherit;
      visibility: visible;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`

const SysTit = styled.div`
  font-size: 30px;
  color: #282828;
  text-align: center;
  line-height: 40px;
  margin: 30px 0 20px;
`

const SysCon = styled.p`
  font-size: 16px;
  color: #5c5c5c;
  text-align: center;
  margin-bottom: 40px;
  @media screen and (min-width: 1400px) {
    width: 500px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 310px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 404px;
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    width: 660px;
  }
  @media screen and (min-width: 768px) and (max-width: 899px) {
    width: 500px;
  }
`

const Linkbtns = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: #282828;
  text-align: center;
  border: 1px solid #f6c94a;
  border-radius: 6px;
  padding: 12px 30px;
  &:hover {
    text-decoration: none;
    color: #282828;
    background: #f6c94a;
  }
`

const Item = styled.div`
  padding: 50px 70px 80px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #efefef;
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    padding: 50px 58px 80px;
  }
  @media screen and (min-width: 768px) and (max-width: 899px) {
    padding: 50px 60px 60px;
  }
  @media screen and (max-width: 414px) {
    padding: 50px 23px 80px;
  }
  visibility: hidden;
  &.ShowAnimation_show {
    animation: show 1s ease 0.6s;
    animation-fill-mode: forwards;
  }
  @keyframes show {
    0% {
      pointer-events: none;
      visibility: visible;
      opacity: 0;
      transform: translate3d(0, 60%, 0);
    }
    100% {
      pointer-events: inherit;
      visibility: visible;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`

export default function () {
  const { consensus, community } = useStaticQuery(graphql`
    query {
      consensus: file(relativePath: { eq: "consensus.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      community: file(relativePath: { eq: "community.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  useEffect(() => {
    jquery(document).on('mousewheel DOMMouseScroll', function (event) {
      const delta =
        (event.originalEvent.wheelDelta &&
          (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
        (event.originalEvent.detail &&
          (event.originalEvent.detail > 0 ? -1 : 1))
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      const ani11 = jquery('.ani11').offset().top
      const ani12 = jquery('.ani12').offset().top
      let windsd =
        document.documentElement.clientHeight || document.body.clientHeight
      if (scrollTop + windsd > ani11 && delta < 0) {
        jquery('.ani11').addClass('ShowAnimation_show')
      }
      if (scrollTop + windsd > ani12 && delta < 0) {
        jquery('.ani12').addClass('ShowAnimation_show')
        jquery('.ani13').addClass('ShowAnimation_show')
      }
    })

    jquery(document).on('touchmove', function (event) {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      const ani11 = jquery('.ani11').offset().top
      const ani12 = jquery('.ani12').offset().top
      let windsd =
        document.documentElement.clientHeight || document.body.clientHeight
      if (scrollTop + windsd > ani11) {
        jquery('.ani11').addClass('ShowAnimation_show')
      }
      if (scrollTop + windsd > ani12) {
        jquery('.ani12').addClass('ShowAnimation_show')
        jquery('.ani13').addClass('ShowAnimation_show')
      }
    })
  })

  const intl = useIntl()

  return (
    <OuterSection>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <InnerSection className="economics">
            <ItemTit className="ani11">
              <EconTit>{intl.formatMessage({ id: 'Economic system' })}</EconTit>
              <Classtit
                style={{ display: 'zh' === currentLocale ? 'block' : 'none' }}
              >
                ChainX 将发行加密货币 PCX（P 代表 Polkadot），总量2100万枚，前
                21 万个分红周期，即初始轮分红周期，每个分红周期奖励为 50 个
                PCX。次轮分红周期奖励为25个PCX，依次类推。初始轮分红周期发行量的20%
                归创始团队所有，用于持续性的开发经费。之后的发行量将全部归社区所有，创始团队将只占总量的10%。
              </Classtit>
              <Classtit
                style={{ display: 'en' === currentLocale ? 'block' : 'none' }}
              >
                The cryptocurrency PCX (Polkadot ChainX) issued by ChainX has a
                fixed total supply of 21 million. In the initial dividend round
                or the first 210,000 cycles, 50 PCX is distributed as a reward
                in each cycle, and 25 PCX for the second round. 20% of the
                issuance in the initial round (which accounts for 10% of the
                total) goes to the founding team for ongoing project
                development. All the subsequent issuance goes to the community.
              </Classtit>
              <Classtit
                style={{ display: 'tr' === currentLocale ? 'block' : 'none' }}
              >
                ChainX tarafından çıkarılan kripto para birimi PCX (Polkadot
                ChainX), toplam 21 milyon sabit arza sahiptir. İlk temettü
                turunda veya ilk 210.000 döngüde, her döngüde ödül olarak 50 PCX
                ve ikinci tur için 25 PCX dağıtılır. İlk turdaki ihraçların
                %20'si (toplamın %10'unu oluşturur) devam eden proje geliştirme
                için kurucu ekibe gider. Sonraki tüm yayınlar topluluğa gider.
              </Classtit>
              <div className="paperlink">
                <Linkbtn
                  style={{ display: 'zh' === currentLocale ? 'block' : 'none' }}
                  href={ChainX}
                  className="txt"
                  target="_blank"
                  rel="noreferrer"
                >
                  查看详情
                </Linkbtn>
                <Linkbtn
                  style={{ display: 'en' === currentLocale ? 'block' : 'none' }}
                  href={ChainXWhitePaper}
                  className="txt"
                  target="_blank"
                  rel="noreferrer"
                >
                  Detail
                </Linkbtn>
                <Linkbtn
                  style={{ display: 'tr' === currentLocale ? 'block' : 'none' }}
                  href={ChainXWhitePaper}
                  className="txt"
                  target="_blank"
                  rel="noreferrer"
                >
                  detay
                </Linkbtn>
              </div>
            </ItemTit>
            <Apps>
              <ItemSys className="ani12">
                <Img fixed={consensus.childImageSharp.fixed} />
                <SysTit>
                  {intl.formatMessage({ id: 'Consensus algorithm' })}
                </SysTit>
                <SysCon
                  style={{ display: 'zh' === currentLocale ? 'block' : 'none' }}
                >
                  ChainX
                  采用波卡全新的共识机制即“Babe+Grandpa”混合共识机制。该共识机制最显著的特点就是将确定最终性的任务从区块生产的流程中分离出来，Babe模块
                  6秒稳定出块，Grandpa进行最终确认。
                </SysCon>
                <SysCon
                  style={{ display: 'en' === currentLocale ? 'block' : 'none' }}
                >
                  ChainX adopts the BABE+GRANDPA hybrid consensus, Polkadot's
                  brand-new mechanism whose most notable feature is to separate
                  block confirmation from block generation. The BABE (Blind
                  Assignment for Blockchain Extension) module generates blocks
                  every 6 seconds, with GRANDPA (GHOST-based Recursive ANcestor
                  Deriving Prefix Agreement) making the final confirmation.
                </SysCon>
                <SysCon
                  style={{ display: 'tr' === currentLocale ? 'block' : 'none' }}
                >
                  ChainX, Polkadot'un en dikkate değer özelliği blok onayını
                  blok oluşturmadan ayırmak olan yepyeni mekanizması olan
                  BABE+GRANDPA hibrit konsensüsünü benimser. BABE (Blind
                  Assignment for Blockchain Extension) modülü, her 6 saniyede
                  bir bloklar üretir ve GRANDPA (HAYALET-tabanlı Özyinelemeli
                  Ata Türetme Önek Anlaşması) nihai onayı verir.
                </SysCon>
                <div className="paperlinks">
                  <Linkbtns
                    style={{
                      display: 'zh' === currentLocale ? 'block' : 'none',
                    }}
                    href={ChainX}
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    查看详情
                  </Linkbtns>
                  <Linkbtns
                    style={{
                      display: 'en' === currentLocale ? 'block' : 'none',
                    }}
                    href={ChainXWhitePaper}
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Detail
                  </Linkbtns>
                  <Linkbtns
                    style={{
                      display: 'tr' === currentLocale ? 'block' : 'none',
                    }}
                    href={ChainXWhitePaper}
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    detay
                  </Linkbtns>
                </div>
              </ItemSys>
              <Item className="ani13">
                <Img fixed={community.childImageSharp.fixed} />
                <SysTit>
                  {intl.formatMessage({ id: 'Community autonomy' })}
                </SysTit>
                <SysCon
                  style={{ display: 'zh' === currentLocale ? 'block' : 'none' }}
                >
                  为推动社区的去中心化治理，ChainX依据波卡采用三院制（Tricameral）的治理结构，包括公投议院，理事会和技术委员会。除了链上三院制外，通过引入了
                  X - Association 和国库的概念完善社区自治的框架。
                </SysCon>
                <SysCon
                  style={{ display: 'en' === currentLocale ? 'block' : 'none' }}
                >
                  A tricameral governance structure has been adopted by ChainX
                  at the advice of Polkadot for better decentralized community
                  governance. The three chambers are a Referendum Chamber, a
                  Council and a Technical Committee. In addition to these,
                  ChainX will also be introducing a Treasury (to incentivize
                  groups and individuals that contribute to the ecological
                  development of ChainX) and the X-Association, a non-profit
                  organization responsible for promoting the development of both
                  the community and technology.
                </SysCon>
                <SysCon
                  style={{ display: 'tr' === currentLocale ? 'block' : 'none' }}
                >
                  Daha iyi merkezi olmayan topluluk yönetimi için Polkadot'un
                  tavsiyesi üzerine ChainX tarafından üç kamaralı bir yönetişim
                  yapısı benimsenmiştir. Üç meclis bir Referandum Odası, bir
                  Konsey ve bir Teknik Komite'dir. Bunlara ek olarak, ChainX
                  ayrıca bir Hazine (ChainX'in ekolojik gelişimine katkıda
                  bulunan grupları ve bireyleri teşvik etmek için) ve hem
                  topluluğun hem de teknolojinin gelişimini teşvik etmekten
                  sorumlu kar amacı gütmeyen bir kuruluş olan X-Association'ı
                  tanıtacak.
                </SysCon>
                <div className="paperlinks">
                  <Linkbtns
                    style={{
                      display: 'zh' === currentLocale ? 'block' : 'none',
                    }}
                    href={ChainX}
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    查看详情
                  </Linkbtns>
                  <Linkbtns
                    style={{
                      display: 'en' === currentLocale ? 'block' : 'none',
                    }}
                    href={ChainXWhitePaper}
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Detail
                  </Linkbtns>
                  <Linkbtns
                    style={{
                      display: 'tr' === currentLocale ? 'block' : 'none',
                    }}
                    href={ChainXWhitePaper}
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    detay
                  </Linkbtns>
                </div>
              </Item>
            </Apps>
          </InnerSection>
        )}
      </IntlContextConsumer>
    </OuterSection>
  )
}
