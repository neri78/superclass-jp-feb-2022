# Twilio Proxyの利用

このセクションでは[Twilio Proxy](https://www.twilio.com/ja/proxy)を用いた匿名通話を実装します。

事前に音声通話が可能なTwilio番号を保有していることを確認してください。

__目次__
[[toc]]

## コンソールでProxyサービスを作成

[Twilioコンソール](https://console.twilio.com)においてサイドナビゲーションに表示されている[Explore Products](https://console.twilio.com/develop/explore)を開きます。ここでは`Programmable communication` - `Proxy`を選択します。

<!-- ![コンソール - Proxy](./images/aaa.png) -->

もし見つからない場合は下記のリンクから直接開いてください。

- [Proxyコンソール](https://www.twilio.com/console/proxy)

## サービス（Service）の作成

Twilio Proxyを利用するため、新しい`Service`を作成します。`Services`画面において`Create Service`ボタンをクリックし新しいサービスを作成します。

<!-- ![サービスの作成](./images/aaa.png) -->

サービス名の入力を求められるため、任意の名前を設定します。

<!-- ![サービスの作成](./images/aaa.png) -->

作成されたサービスの設定（Configure）画面が表示されます。今回は初期状態のまま利用しますが、`Service`の`SID`を控えておきます。

## 電話番号の追加

Proxyサービスには匿名通話のための共通番号をあらかじめ設定しておく必要があります。

先ほど表示したサービスの設定画面を開くと左側にナビゲーションが表示されます。`Numbers`を選択し、`Add Numbers`ボタンをクリックします。スクリーンショットを参考にしてください。

<!-- ![サービスの作成](./images/aaa.png) -->

現在保有している番号の一覧からTwilio Proxyサービスで利用する番号を1つ以上選択し、`Assign`ボタンをクリックします。

<!-- ![サービスの作成](./images/aaa.png) -->

この追加した番号にそれぞれが電話をかけることで匿名通話が成立します。

## セッションの作成

Twilio Proxy では通話を`Session`という単位で管理します。この`Session`では通話者をマッピングします。

セッションはコンソールであらかじめ作成する方法とアプリケーションから動的に作成する方法があります。
このハンズオンではコンソールからこのセッションを作成し、動作を確認します。

先ほど同様に作成したProxyの設定画面をコンソールで開き、左側のナビゲーションから`Sessions`を選択します。

<!-- ![サービスの作成](./images/aaa.png) -->

`Create new Session`をクリックし表示されたポップアップ内でセッションの名前を設定します。また、`MODE`は`Voice Only`とします。

作成された`Session`の`SID`を控えておきます。

## 参加者（Participant）の追加

セッションには参加者（Participant）を追加する必要があります。この作業はコンソールから実施できないため、Twilio Functionsのハンズオンでも使用したTwilio CLIを用いて参加者を追加します。

Twilio CLIを用いて参加者をセッションに追加する場合は次のコマンドを実行します。

```
twilio api:proxy:v1:services:sessions:participants:create \
    --service-sid <Service SIDの値> \
    --session-sid <Session SIDの値> \
    --identifier <E.164電話番号>
```

標準の設定ではセッションに参加者を追加する場合、`identifier`に指定する番号とProxyサービスに登録されているTwilio番号のCountryコードがマッチしなければいけません。指定した番号に対応するTwilio番号が存在しない場合は、下記のエラーが発生します。

::: danger エラーメッセージ
 » Error code 80203 from Twilio: This Service has no compatible Proxy numbers for this Participant. This Service has no available Proxy numbers for country code JP. See https://www.twilio.com/docs/errors/80203 for more info.
:::

この場合は該当する国のTwilio番号を購入し、割り当てるか、`--proxy-identifier`オプションを指定し、あらかじめ参加者に対して該当セッションで利用するProxy番号を割り当てることになります。

```bash
twilio api:proxy:v1:services:sessions:participants:create \
    --service-sid <Service SIDの値> \
    --session-sid <Session SIDの値> \
    --identifier <E.164電話番号> \
    --proxy-identifier <Proxyサービスに設定されている番号>
```

それぞれの値を置き替えて2名の参加者を追加してください。1人目としてご自身の番号を、2人目についてはハンズオン時に指定された番号を利用してください。

どちらかの番号からProxy番号に発信し、相手に番号を通知することなく、匿名通話が可能であることを確認します。
