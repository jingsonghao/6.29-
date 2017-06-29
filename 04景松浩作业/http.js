var http=require("http");
var fs=require("fs");
// 创建服务器
http.createServer(function (req, res) {
    var url=req.url;
    switch (url){
        case "/":// 处理 / 请求
            fs.readFile("index.html","utf-8",function (err, data) {
                //   判断一下 是否失败
                if(err){
                    console.log("读取是失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"contetn-type":"text/html;charset=utf8"});
                    res.end(data)
                }
            })
            break;
            
        case "/jpg":
            fs.readFile("a.jpg",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    //    设置响应头
                    res.writeHead(200,{"content-type":"image/jpeg"})
                    res.end(data)
                }
            })

            break;

        case "/css":
            fs.readFile("index.css","utf-8",function (err, data) {
            
                if(err){
                    console.log("读取是失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"contetn-type":"text/css;charset=utf8"});
                    res.end(data)
                }
            })

            break;    
            case "/js":
            fs.readFile("index.js","utf-8",function (err, data) {
                if(err){
                    console.log("读取是失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"contetn-type":"text/javascript;charset=utf8"});
                    res.end(data)
                }
            })

            break;
            
            case "/index2.html":
            fs.readFile("index2.html","utf-8",function (err, data) {
                if(err){
                    console.log("读取是失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"contetn-type":"text/html;charset=utf8"});
                    res.end(data)
                }
            })

            break;
             case "/index3.html":
            fs.readFile("index3.html","utf-8",function (err, data) {
                if(err){
                    console.log("读取是失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"contetn-type":"text/html;charset=utf8"});
                    res.end(data)
                }
            })

            break;
             default: //其他请求
            res.end("404 no fead")
    
            
            
            
    }




}).listen(3000);
