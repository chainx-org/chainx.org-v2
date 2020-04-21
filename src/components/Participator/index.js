import React from 'react'
import { InnerSection, Item, Items, OuterSection } from './styledComponents'
import { CommunityTitle } from '../baseComponents'

const actors = [
  {
    title: '跨链用户',
    desc:
      '充值链外资产，统一衡量市值，自动参与系统挖矿，并享受0%手续费的撮合交易。',
  },
  {
    title: '投票用户',
    desc:
      '使用 PCX 对节点进行投票，选举信托和验证节点并获得投票奖励，但同时要承担节点掉线或作恶的惩罚。',
  },
  {
    title: '验证节点',
    desc:
      '总得票数前30名的节点，负责全链⽤户交易的记账处理和打包出块，将获得⽤户投票挖矿收益的10%。',
  },
  {
    title: '信托节点',
    desc:
      '综合实力最优的15个验证节点，负责联合托管⽤户的链外资产，是系统⾥最重要的核心社区领袖。',
  },
  {
    title: '同步节点',
    desc:
      '总得票数排名靠后的其余节点，负责搭建同步节点接收交易和广播数据，将获得和验证节点相同⽐例收益。',
  },
  {
    title: '议会议员',
    desc: '通过选举产生的10个节点，负责管理和建设 ChainX 社区。',
  },
  {
    title: '充值渠道',
    desc:
      '各类钱包和社区开发人员可以帮助⽤户进⾏跨链账户绑定，充值渠道可获得⽤户充值挖矿收益的10%。',
  },
  {
    title: '跨链中继',
    desc:
      '任何人都可以提交各资产链的块头和跨链交易到 ChainX 轻节点，ChainX 会根据原链的共识算法得出合法的跨链交易。',
  },
  {
    title: '开发社区',
    desc:
      '开发者可以使⽤最新的合约技术，面向 BTC、ZEC、EOS 等多种资产开发 DApp 应用，发挥不同资产的特有能⼒。',
  },
]

export default function() {
  return (
    <OuterSection>
      <InnerSection>
        <CommunityTitle>ChainX 上的参与者</CommunityTitle>
        <Items>
          {actors.map(actor => (
            <Item>
              <h4>{actor.title}</h4>
              <p>{actor.desc}</p>
            </Item>
          ))}
        </Items>
      </InnerSection>
    </OuterSection>
  )
}
