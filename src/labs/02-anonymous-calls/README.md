# 匿名通話の実現 - はじめに

このハンズオンではTwilioを用いた匿名通話を実現するパターンを2種類実装します。匿名通話とは双方が電話番号を通知することなく通話を実施する機能でです。

## 学習内容

- Twilio Proxyを用いた匿名通話の実装
- Twilio Clientを用いた電話番号を利用しない通話の実装


## 前提条件

ハンズオンを開始する前に次の環境が揃っていることを確認してください。
- [アップグレード済みのTwilioアカウント](https://console.twilio.com)
- 音声通話が可能なTwilio電話番号
- バージョン12.21以降の[Node.js](https://nodejs.org/ja/)
- Twilio CLIの[インストール](https://www.twilio.com/ja/docs/twilio-cli/quickstart)（[Twilioアカウントへのログイン](https://www.twilio.com/ja/docs/twilio-cli/quickstart#twilio%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%B8%E3%81%AE%E3%83%AD%E3%82%AF%E3%82%99%E3%82%A4%E3%83%B3)までを事前に済ませてください）
- Twilio Serverless Toolkitの[インストール](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started#install-the-twilio-serverless-toolkit)

