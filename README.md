# Polymer Sample (6) PWA [3]

## セットアップ
```
npm install -g bower polymer-cli firebase-tools
```

## インストールと実行

- ビルド時には[ここ](https://github.com/Polymer/polymer-cli/issues/701)を要対応。
- [Firebase](https://console.firebase.google.com/)から新規プロジェクトを作成
- `設定画面`からプロジェクトID、「ウェブアプリにFirebaseを追加」からJS用の設定をコピー`src/my-fire.html`の`<firebase-app>`部分を編集
- `Authenticationのプロバイダ`からGoogleを有効に。
- `Databaseのデータ`に初期データをインポート、ルールに権限設定(サンプル)

data.json
```
{
  "data" : {
    "view1" : {
      "contents" : "# こんにちわ\n\nこれは1ページ目です。",
      "title" : "Page 1"
    },
    "view2" : {
      "contents" : "# 2ページ目\n\nこれはサンプルのテキストです。\n\n## 見出し1\n\n[リンク](https://www.google.com/)も書けます。\n\n## 見出し2\n\n**強調表示**\n",
      "title" : "Page 2"
    },
    "view3" : {
      "contents" : "# 3ページ目\n\nこれはサンプルのテキストです。\n\n```html\n<hello>hello</hello>\n```\n",
      "title" : "Page 3"
    }
  }
}
```

database.rules.json

```
{
  "rules": {
    ".read": false,
    ".write": false,
    "data": {
    	".read": true,
      "$key": {
		   	".write": "auth != null"
      }
    }
  }
}
```

- `Storageのルール`へ権限設定(サンプル)
```
service firebase.storage {
  match /b/{bucket}/o {
    match /files {
      match /{allFiles=**} {
        allow read;
      }
      match /{fileId} {
        allow write: if request.auth != null
                     && request.resource.size < 5 * 1024 * 1024
                     && request.resource.contentType.matches('image/.*')
                     && request.resource.contentType == resource.contentType
                     && fileId.size() < 32
      }
    }
  }
}
```
- 下記のコマンドビルド

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
