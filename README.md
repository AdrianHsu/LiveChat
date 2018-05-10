# chatroom
[https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)


## How to install node-js

```shell
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum -y install nodejs
sudo yum install gcc-c++ make
```

## How to set up server

```shell
$ netstat -tpln # list all ports
$ sudo firewall-cmd --list-ports
9012/tcp
$ sudo firewall-cmd --add-port=8080/tcp --permanent
$ sudo firewall-cmd --reload
$ sudo firewall-cmd --list-ports
9012/tcp 8080/tcp
```

## Front-end Design: Material UI
[https://www.material-ui.com/#/](https://www.material-ui.com/#/)

## chat-room tutorial
[https://juejin.im/entry/58a3f4dbb123db00545f8c68](https://juejin.im/entry/58a3f4dbb123db00545f8c68)

## NPM, Webpack, React tutorial (very helpful!!)
[https://www.yumingyuan.me/2017/02/06/Getting-Started-With-Reactjs-Using-Npm-Webpack.html]
(https://www.yumingyuan.me/2017/02/06/Getting-Started-With-Reactjs-Using-Npm-Webpack.html)

## Webpack-dev-server + react-hot-loader

* 沒有成功把 react-hot-loader 裝起來
* 有成功把 webpack-dev-server 的 LiveReload 弄起來了
[https://rhadow.github.io/2015/04/02/webpack-workflow/](https://rhadow.github.io/2015/04/02/webpack-workflow/)

## Main Feature

- 聯絡人列表
  - 顯示所有可聊天的對象
  - 只要是註冊在 database 的用戶，都可以跟所有對象互相聊天
  - 目前對話者的欄位需要重點標示
- 目前對話者
  - 將目前對話者的名稱顯示在上方
- 對話框
  - 依據新舊排序訊息內容
  - 越新的訊息越下面
  - 訊息、時間
  - 自己是右側、對方是左側
  - 傳訊息的音效、收到訊息的音效
  - 顯示：正在輸入訊息...
- 文字輸入框
  - 送出 按鈕
- 在最上方顯示自己的頭貼、名字（無法修改，直接沿用 github）
- 支援一對一對話
  - 要能夠開兩個視窗對話，且標題為目前聊天對象的名字
- 註冊方式有二：Github 註冊、帳號密碼註冊
  - Github 則直接登入
  - 帳號密碼登入、不可修改（避免聊天資料轉移失敗）
- Github 頭貼（不可修改）、匿名帳號頭貼上傳（可修改）
- 訊息通知（已讀，紅點點）
  - 當 A 用戶傳訊息給 B 時，假設 B 此時並不在此對話框，則聯絡人列表顯示紅點點（訊息數）
- MongoDB database
- Material UI
- 後端 log：只要有人互傳訊息， server 就印出 log，方便檢查

## To-do

1. 表情符號
2. 上傳照片
3. 多人聊天
4. 刪除訊息
5. Chatbot
6. 搜尋訊息
7. 