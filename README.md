# 启动
	要让该项目运行起来，需要执行如下命令。（注：运行如下命令前请保证你已经安装好了node、browserify等）
		npm intall
    browserify -t [ babelify --presets [ react ] ] ./src/main.js -o ./build/bundle.js
    gulp -d