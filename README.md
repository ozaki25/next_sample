# next_sample

## Get Started

### clone

```
git clone https://github.com/ozaki25/next_sample.git
cd next_sample
yarn 
# or
npm i
```

### dev mode

```
yarn dev
# or
npm run dev
```

- open http://localhost:3000/todo

### prod mode

- build

```
yarn build && yarn export
# or
npm run build && npm run export
```

- run

```
npm i -g http-server
http-server out
```

- open http://localhost:8080/todo

## branches

### ssr

- server side renderingありのbranch
- ファイルサイズを重くするためにTodoListを50ページ用意してる

### no_ssr

- server side renderingなしのbranch
- ファイルサイズを重くするためにTodoListを50ページ用意してる
