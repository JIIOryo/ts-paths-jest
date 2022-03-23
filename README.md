# ts-paths-jest

tsのpathsを解決するサンプル

要件
- dist配下に解決済みのjsファイルがはかれるのがベスト
  - npm linkを使用したいから、その場合は↑が必須
- testはjest利用


# 試し方

```sh
cd tspathtestcore
npm ci
npm build
npm link

cd ..

cd web
npm ci
npm build
npm link tspathtestcore
npm start
```
