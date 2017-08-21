# Polymer Sample (4) PWA [1]

[Polymer サンプルコード (4) PWA [1]](http://qiita.com/howking/items/c4f54c4d8175b8229020)のソースコードです。

## セットアップ
```
npm install -g bower
npm install -g polymer-cli
npm install -g firebase-tools
```

## インストールと実行

```
bower install
polymer build
polymer serve
```

→ http://localhost:8000/ でチェック

## デプロイ

```
firebase login
firebase use [project_id]
firebase deploy
```

→ [https://[project_id].firebaseapp.com/](https://[project_id].firebaseapp.com/)
