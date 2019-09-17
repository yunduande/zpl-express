const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
//中间件的调用，这两行代码实现了给 req 身上加一个 body 的属性
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//中间件的调用，下面这行代码，实现了给 req 加上一个 cookies 的属性，获取cookie数据
app.use(cookieParser());
//中间件使用，静态资源托管管理
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("hello express")
});
app.post("/handleLogin",(req,res)=>{
    console.log(req.body);
    res.send("hello req.body");
});

//cookies 相关
app.get("/setCookie",(req,res)=>{
    //设置cookie
    res.cookie("username","张山",{
        maxAge:1000 * 60 * 20
    });
    res.send("cookie设置成功");
}); 
app.get("/getCookie",(req,res)=>{
    console.log(req.cookies);
    res.send("cookie获取成功");
});
app.listen(3000);