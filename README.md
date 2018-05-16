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

# 還要把 80, 443 都打開，才能用 default http, https port
# You must open and enable port 80 and 443 using the firewall-cmd command:
$ sudo firewall-cmd --permanent --zone=public --add-service=http
$ sudo firewall-cmd --permanent --zone=public --add-service=https
$ sudo firewall-cmd --reload
```

[https://www.cyberciti.biz/faq/how-to-install-and-use-nginx-on-centos-7-rhel-7/](https://www.cyberciti.biz/faq/how-to-install-and-use-nginx-on-centos-7-rhel-7/)

## Front-end Design: Material UI

[https://www.material-ui.com/#/](https://www.material-ui.com/#/)



# nginx port forwarding

[https://gist.github.com/soheilhy/8b94347ff8336d971ad0](https://gist.github.com/soheilhy/8b94347ff8336d971ad0)

* 如何在同一個 domain name 下面有很多不同的服務
* 如何把 8080 port 轉到 80 or 443 (因為 1024 以下的 port 需要 sudo )



## nginx + socket.io

[http://single9.net/2018/03/nginx-reverse-proxy-server-and-socket-io/](http://single9.net/2018/03/nginx-reverse-proxy-server-and-socket-io/)



## permission denied: ssl key (SELinux)

[https://serverfault.com/questions/540537/nginx-permission-denied-to-certificate-files-for-ssl-configuration/540544](https://serverfault.com/questions/540537/nginx-permission-denied-to-certificate-files-for-ssl-configuration/540544)



```shell
# original error
[adrianhsu@localhost]:/etc/nginx
$ sudo systemctl status nginx -l
nginx[8728]: nginx: [emerg] BIO_new_file("/etc/nginx/ssl/cert.pem") failed (SSL: error:0200100D:system library:fopen:Permission denied:fopen('/etc/nginx/ssl/cert.pem','r') error:2006D002:BIO routines:BIO_new_file:system lib)

# how to fix?
[adrianhsu@localhost]:/etc/nginx
$ /usr/sbin/sestatus -v | grep SELinux
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux

[adrianhsu@localhost]:/etc/nginx
$ ls -lrtZ .
drwxr-xr-x. root root system_u:object_r:httpd_config_t:s0 default.d
drwxr-xr-x. root root unconfined_u:object_r:user_home_t:s0 ssl # GGGGG
drwxr-xr-x. root root system_u:object_r:httpd_config_t:s0 conf.d
-rw-r--r--. root root system_u:object_r:httpd_config_t:s0 nginx.conf
...

[adrianhsu@localhost]:/etc/nginx
$ sudo chcon -R -u system_u ssl/
$ sudo chcon -R -t httpd_config_t ssl/

[adrianhsu@localhost]:/etc/nginx
$ sudo systemctl restart nginx # ok!

```

## connect() to 127.0.0.1:8080 failed (13: Permission denied) while connecting to upstream

[http://blog.51cto.com/jschu/1762345](http://blog.51cto.com/jschu/1762345)

不要用：`sudo setenforce 0`

改成用：`setsebool -P httpd_can_network_connect 1`  比較安全

## SELinux 的權限問題

[http://www.liuhaihua.cn/archives/218920.html](http://www.liuhaihua.cn/archives/218920.html)



###express -> "trust proxy" = `true`

## chat-room tutorial
[https://www.yumingyuan.me/2017/02/13/chatroom-developed-using-react-socketio-and-express.html](https://www.yumingyuan.me/2017/02/13/chatroom-developed-using-react-socketio-and-express.html)

## NPM, Webpack, React tutorial (very helpful!!)
[https://www.yumingyuan.me/2017/02/06/Getting-Started-With-Reactjs-Using-Npm-Webpack.html](https://www.yumingyuan.me/2017/02/06/Getting-Started-With-Reactjs-Using-Npm-Webpack.html)

## Webpack-dev-server + react-hot-loader

* 沒有成功把 react-hot-loader 裝起來
* 有成功把 webpack-dev-server 的 LiveReload 弄起來了
* [https://rhadow.github.io/2015/04/02/webpack-workflow/](https://rhadow.github.io/2015/04/02/webpack-workflow/)



## 127.0.0.1 v.s. 0.0.0.0

[https://stackoverflow.com/questions/20778771/what-is-the-difference-between-0-0-0-0-127-0-0-1-and-localhost](https://stackoverflow.com/questions/20778771/what-is-the-difference-between-0-0-0-0-127-0-0-1-and-localhost)



* `127.0.0.1` is normally the IP address assigned to the "loopback" or local-only interface. This is a "fake" network adapter that can only communicate within the same host.
*  when a server is told to listen on `0.0.0.0` that means "listen on every available ㄌnetwork interface". The loopback adapter with IP address `127.0.0.1` from the perspective of the server process looks just like any other network adapter on the machine, so a server told to listen on `0.0.0.0` will accept connections on that interface too.

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