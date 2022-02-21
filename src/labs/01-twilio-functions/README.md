# Twilio Functionの使用方法 - はじめに

このハンズオンではTwilio Functionの使用方法について学習します。

## 学習内容

- コンソール/UIを用いたTwilio Functionsの作成
- Runtime Handlerを用いたリクエスト情報へのアクセス
- Serverless Toolkitを用いたローカル開発

## 前提条件

ハンズオンを開始する前に次の環境が揃っていることを確認してください。
- [アップグレード済みのTwilioアカウント](https://console.twilio.com)
- バージョン12.21以降の[Node.js](https://nodejs.org/ja/)
- Twilio CLIの[インストール](https://www.twilio.com/ja/docs/twilio-cli/quickstart)（[Twilioアカウントへのログイン](https://www.twilio.com/ja/docs/twilio-cli/quickstart#twilio%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%B8%E3%81%AE%E3%83%AD%E3%82%AF%E3%82%99%E3%82%A4%E3%83%B3)までを事前に済ませてください）
- Twilio Serverless Toolkitの[インストール](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started#install-the-twilio-serverless-toolkit)