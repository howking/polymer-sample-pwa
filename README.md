# Polymer Sample (6) PWA [3]

## セットアップ
```
npm install -g bower polymer-cli firebase-tools
```

## インストールと実行

ビルド時には[ここ](https://github.com/Polymer/polymer-cli/issues/701)を要対応。

```
bower install
polymer build
polymer serve
```

## デプロイ

```
firebase login
firebase use [project_id]
firebase deploy
```
