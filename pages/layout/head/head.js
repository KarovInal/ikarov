// @flow
import * as React from 'react';
import Head from 'next/head';
import styles from './style.js'

type IPropsHead = {
  titleText?: string
}

export default ({ titleText = 'ikarov' }: IPropsHead) =>
  <Head>
    <title>{ titleText }</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500" rel="stylesheet" />
    <style jsx global>{ styles }</style>
  </Head>
