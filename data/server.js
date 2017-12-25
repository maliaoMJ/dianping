const express = require('express')
const request = require('request')
const cors = require('cors')
const app = new express()
app.use(cors())
// 加载模拟数据
// 1、获取首页广告数据
let homeAdData = require('./home/ad')
// 2.获取首页推荐列表数据
let homeList = require('./home/list')
// 3.获取详情页评论数据
let comments = require('./detail/comments')
// 4.获取店家详情数据
let shopDetail = require('./detail/info')
// 5.获取搜索结果数据  （真是假的不能在假啦）
let serarchData = require('./search/list')

// 跨域第二种方法
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
app.use(express.static('public'))
app.get('/',(req,res,next)=>{
	res.redirect('/index.html')
})
app.get('/api/home/ad',(req,res,next)=>{
	res.send(homeAdData)
})
app.get('/api/home/list',(req,res,next)=>{
	res.send(homeList)
})
app.get('/api/detail/comments',(req,res,next)=>{
	console.log('店家id 评论' + req.query.id)
	res.send(comments)
})
app.get('/api/detail/shopinfo',(req,res,next)=>{
	console.log('店家id 详情' + req.query.id)
	res.send(shopDetail)
})
app.get('/api/search',(req,res,next)=>{
	console.log('keywords ---->' + req.query.keywords)
	res.send(serarchData)
})
//从防盗链获取图片处理
app.get('/imgs',(req,res,next)=>{
	request(req.query.img).pipe(res)
})
// 监听端口5000 自己可以改的
app.listen(5000,()=>{
	console.log('the server is listen at 5000 port!')
})
module.exports = app
