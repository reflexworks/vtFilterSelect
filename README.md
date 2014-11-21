# vtFilterSelect Project

## Demo
http://jsfiddle.net/takeyama/an70xd6d/10/

## 手順

### node module のインストール  
```bash
$ npm install -g bower grunt-cli
```

### sass/compassのインストール
```bash
$ gem update --system
$ gem install sass -v 3.2.12
$ gem install compass -v 0.12.3
```

### vtFilterSelect プロジェクトを GitHub からチェックアウトする
```bash
$ mkdir <vtFilterSelect root 保持ディレクトリ>
$ cd <vtFilterSelect root 保持ディレクトリ>
$ git clone https://github.com/reflexworks/vtFilterSelect.git
```

### フロントエンドプロジェクトのセットアップと起動
```bash
$ cd <vtFilterSelect root>/
$ npm install      #package.json に定義されている node モジュールをインストールします
$ bower install    #bower.json に定義されているモジュールをインストールします ( Windows でエラーが出る場合は、コマンドプロンプトに git のパスが通っていない可能性があります。その場合は "git bash" からコマンドを実行して下さい )
$ grunt serve      #サーバーが起動してデフォルトブラウザが起動すれば OK
```