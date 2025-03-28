/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const Bestpractices = [
  {
    name: '🏆 【Pa55w0rd】',
    url: 'https://mp.weixin.qq.com/s/USw4pvYXN69UT6KauNqx0A',
    description: (
      <Translate id="Bestpractice.password.description">
        某互联网甲方的落地实践
      </Translate>
    ),
  },
  {
    name: '🏆 【hardy4yooz】',
    url: 'https://i0x0fy4ibf.feishu.cn/docs/doccnaKOEdFxTQnydHTuLBS5OIg',
    description: (
      <Translate id="Bestpractice.hardy.description">
        容器部署洞态 Java Agent 实践
      </Translate>
    ),
  },
  {
    name: '🏆 【伍雄】',
    url: 'https://mp.weixin.qq.com/s/R5x1pZm5kobY9tGdC1KV7Qhttps://mp.weixin.qq.com/s?__biz=MzU4MjEwNzMzMg==&mid=2247490611&idx=1&sn=fb50f059ed07602fd6cddb57d4b633cc&source=41#wechat_redirect',
    description: (
      <Translate id="Bestpractice.wuxiong.description">
        请求管理｜洞态 IAST 在好大夫 SDL 中的最佳实践
      </Translate>
    ),
  },
  {
    name: '🏆 【伍雄】',
    url: 'https://mp.weixin.qq.com/s/qyii_dLzUnZlfCIGZPOthA',
    description: (
      <Translate id="Bestpractice.wuxiong-02.description">
        解构开源 IAST 打造好大夫安全灰盒利器
      </Translate>
    ),
  },
  {
    name: '🏆 【58 集团】',
    url: 'https://mp.weixin.qq.com/s/kvm8EJwOv-DXYlutRG9t7Q',
    description: (
      <Translate id="Bestpractice.wuxiong-02.description">
        58 集团与火线联合开发洞态应用场景高可用功能！
      </Translate>
    ),
  },
  {
    name: '🏆 【何纪新】',
    url: 'https://mp.weixin.qq.com/s/eN9EfbxyVNDDBw65pg45OA',
    description: (
      <Translate id="Bestpractice.wuxiong-02.description">
        洞态在陌陌的最佳落地实践
      </Translate>
    ),
  },
  {
    name: '🏆 【陌度】',
    url: 'https://mp.weixin.qq.com/s?__biz=MzU4MjEwNzMzMg==&mid=2247490614&idx=1&sn=563d155f980addcf9bb1916191bf17e0&source=41#wechat_redirect',
    description: (
      <Translate id="Bestpractice.wuxiong-02.description">
        利用洞态做开源组件的安全治理
      </Translate>
    ),
  },      
];

interface Props {
  name: string;
  url: string;
  description: JSX.Element;
}

function BestpracticeCard({name, url, description}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url}>
          </Link>
        </div>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              <Translate id="Bestpractice.tryItButton">前往</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BestpracticeCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Bestpractices.map((Bestpractice) => (
        <BestpracticeCard key={Bestpractice.name} {...Bestpractice} />
      ))}
    </div>
  );
}
