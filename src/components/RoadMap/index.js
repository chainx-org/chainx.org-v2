import {
  Horizontal,
  HorizontalItem,
  InnerSection,
  OuterSection,
  Title,
  Vertical,
  VerticalItem,
  VerticalSeparator,
} from './styledComponents'
import React from 'react'
import { Separator } from './styledComponents'

export default function() {
  return (
    <OuterSection>
      <InnerSection>
        <Title>路线图</Title>
        <Separator>
          <hr />
        </Separator>
        <Horizontal className="horizontal">
          <HorizontalItem>
            <h5>2019年5月</h5>
            <hr />
            <h5>单链系统</h5>
            <p>
              作为独⽴链运行并发行系统币
              PCX，逐步开发目前主流链的转接桥，进行跨链资产整合，让更广泛的用户能够陆续参与跨链挖矿。
            </p>
          </HorizontalItem>
          <HorizontalItem>
            <h5>2019年Q4 Polkadot 发布 v1 后上线</h5>
            <hr />
            <h5>双链系统</h5>
            <p>
              ChainX 将新增一条转接桥链作为 Polkadot的平行链，完成与 Polkadot
              资产的互通，并将持续支持社区开发各类 DApp。
            </p>
          </HorizontalItem>
          <HorizontalItem>
            <h5>2020年 Polkadot 发布 v2 后上线</h5>
            <hr />
            <h5>多链系统</h5>
            <p>
              ChainX 将拆分为多链架构，作为 Polkadot的第二层中继⽹络运行。
              Polkadot 专注于底层消息跨链，ChainX 专注于实现其内部的资产跨链。
            </p>
          </HorizontalItem>
        </Horizontal>

        <Vertical>
          <VerticalItem>
            <h5>2019年5月</h5>
            <VerticalSeparator />
            <div className="detail">
              <h5>单链系统</h5>
              <p>
                作为独⽴链运行并发行系统币
                PCX，逐步开发目前主流链的转接桥，进行跨链资产整合，让更广泛的用户能够陆续参与跨链挖矿。
              </p>
            </div>
          </VerticalItem>
          <VerticalItem>
            <h5>2019年Q4 Polkadot 发布 v1 后上线</h5>
            <VerticalSeparator />
            <div className="detail">
              <h5>双链系统</h5>
              <p>
                ChainX 将新增一条转接桥链作为 Polkadot的平行链，完成与 Polkadot
                资产的互通，并将持续支持社区开发各类 DApp。
              </p>
            </div>
          </VerticalItem>
          <VerticalItem>
            <h5>2020年 Polkadot 发布 v2 后上线</h5>
            <VerticalSeparator />
            <div className="detail">
              <h5>多链系统</h5>
              <p>
                ChainX 将拆分为多链架构，作为 Polkadot的第二层中继⽹络运行。
                Polkadot 专注于底层消息跨链，ChainX 专注于实现其内部的资产跨链。
              </p>
            </div>
          </VerticalItem>
        </Vertical>
      </InnerSection>
    </OuterSection>
  )
}
