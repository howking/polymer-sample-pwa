# Polymer Sample (5) PWA [2]

[Polymer サンプルコード (5) PWA [2]](http://qiita.com/howking/items/fce01f9768d4652290a2)のソースコードです。

## セットアップ
```
npm install -g bower polymer-cli firebase-tools
```

## インストールと実行

```
bower install
polymer build
perl -pi -e 's/ks\(this\);var lI=this.Hd;if\(lI\)for\(var uI=\[\],hI=1;/ks(this);var uI=[];var lI=this.Hd;if(lI)for(var hI=1;/' build/default/src/my-view.html
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
