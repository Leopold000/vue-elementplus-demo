// 引用 Mock
const Mock = require('mockjs')

const Random = Mock.Random

let Result = {
	code: 200,
	msg: '操作成功',
	data: null
}

Mock.mock('/captcha', 'get', () => {

	Result.data = {
		token: Random.string(32),
		captchaImg: Random.dataImage('120x40', 'p7n5w')
	}
	console.log("验证码")

	return Result
})

Mock.mock("/data/list", "post",()=> {
    Result.data = {
		data:"data/list",
	}
	
	return Result
})

Mock.mock('/login', 'post', () => {

	// 无法在header中传入数jwt

	// Result.code = 400
	// Result.msg = "验证码错误"

	console.log("登录")
	Result.data = {
		token: Random.string(32),
	}

	return Result
})

//注册
Mock.mock('/register', 'post', () => {

	// 无法在header中传入数jwt

	// Result.code = 400
	// Result.msg = "验证码错误"

	console.log("注册")

	return Result
})

//登录用户信息
Mock.mock('/userInfo', 'get', () => {

	Result.data = {
		id: "1",
		username: "test",
		avatar: "https://image-1300566513.cos.ap-guangzhou.myqcloud.com/upload/images/5a9f48118166308daba8b6da7e466aab.jpg"
	}

	return Result
})

//登录用户信息
Mock.mock('/analysis', 'get', () => {

	Result.data = [
		
			[
				{
					"name": "土豆丝",
					"value": 27
				},
				{
					"name": "龙虾",
					"value": 25
				},
				{
					"name": "番茄炒鸡蛋",
					"value": 30
				},
				{
					"name": "猪肝",
					"value": 14
				},
				{
					"name": "红烧罗非鱼",
					"value": 12
				},
				{
					"name": "江小白",
					"value": 7
				}
			],
			[
				{
					"age": "0-5岁",
					"sales-volume": 38
				},
				{
					"age": "5-10岁",
					"sales-volume": 52
				},
				{
					"age": "10-20岁",
					"sales-volume": 61
				},
				{
					"age": "20-30岁",
					"sales-volume": 145
				},
				{
					"age": "30-40岁",
					"sales-volume": 48
				},
				{
					"age": "40-50岁",
					"sales-volume": 38
				},
				{
					"age": "50-60岁",
					"sales-volume": 38
				},
				{
					"age": "60岁以上",
					"sales-volume": 38
				}
			],
			[
				{
					"month": "10-01",
					"sales-volume": 3
				},
				{
					"month": "10-02",
					"sales-volume": 4
				},
				{
					"month": "10-03",
					"sales-volume": 3.5
				},
				{
					"month": "10-04",
					"sales-volume": 5
				},
				{
					"month": "10-05",
					"sales-volume": 4.9
				},
				{
					"month": "10-06",
					"sales-volume": 6
				},
				{
					"month": "10-07",
					"sales-volume": 7
				}
			
		]
	]

	return Result
})

