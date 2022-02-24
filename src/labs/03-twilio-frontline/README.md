# Twilio Frontlineの体験 - はじめに

このハンズオンでは2021年9月にパブリックベータ版となったTwilio Frontlineの設定方法を体験します。Twilio Frontlineは1:1のコミュニケーションに特化し、既存の顧客データベースと連携しながらテキストメッセージ、音声通話機能を提供するソリューションです。

## 学習内容

- Twilio Frontlineの導入方法を体験する

::: danger 警告

Twilio Frontlineを利用する場合、アカウントが[Organization](https://www.twilio.com/docs/iam/organizations)に属している必要があります。この機能は組織内において複数のユーザーやアカウントを管理できる機能となります。ただし、現時点で一度作成したOrganizationは __コンソールから削除できません。__ 削除する場合はサポートへの問い合わせが必要となるため、Organizationの使用有無や使用可能が判断できない場合は、ハンズオンを実施せずに講師がご紹介するデモをご確認ください。

また、Twilio FrontlineはTwilio Flexで利用されているプロジェクトでは利用できません。 さらに、内部ではTwilio ConversationsやTwiML Appsなどを活用しています。そのため、既存のTwilioアカウントでTwilio Frontlineを設定した場合、もともとの設定が変更されてしまう可能性があります。できるだけ新しいアカウント、あるいはサブアカウントでハンズオンを実施してください。

Twilio Frontlineはテキストチャットが初期の機能として実装され、その後音声通話に対応しました。そのため、接続するTwilio番号はSMS、音声両方の機能に対応している必要があります。2022年2月現在、コンソールから購入可能な日本の番号はSMSに対応していないため、米国番号でハンズオンを実施してください。

::::

Twilio Frontlineを利用する場合、あらかじめシングルサインオン（SSO）の設定や、CRMと連携するバックエンドアプリケーションを構築する必要があります。今回のハンズオンは[Twilio Frontline Node.js Quickstart](https://www.twilio.com/docs/frontline/nodejs-demo-quickstart)に沿って設定します。


## 前提条件

ハンズオンを開始する前に次の環境が揃っていることを確認してください。
- [アップグレード済みのTwilioアカウント](https://console.twilio.com)
- __SMS__ および __音声通話__ が可能なTwilio電話番号
- Twilio Frontlineのダウンロードおよびインストール（[iOS](https://apps.apple.com/app/id1541714273) / [Android](https://play.google.com/store/apps/details?id=com.twilio.frontline)）
- Twilio Frontline用[Oktaデベロッパーアカウント](https://developer.okta.com/)の作成
  - 既存のアイデンティプロバイダーをご利用の場合は[こちら](https://www.twilio.com/docs/frontline/sso)をご覧ください
- バージョン12.21以降の[Node.js](https://nodejs.org/ja/)
- [yarnパッケージマネージャー](https://yarnpkg.com/getting-started/install)
- [ngrok](https://ngrok.com/)などのトンネリングツール