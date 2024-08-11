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

//表信息
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

//获取工况数据
Mock.mock('/getcondition', 'get', () => {

	Result.data = [
		{
		  "name": "China",
		  "year": "2000",
		  "gdp": 1211346869605.24
		},
		{
		  "name": "China",
		  "year": "2001",
		  "gdp": 1339395718865.3
		},
		{
		  "name": "China",
		  "year": "2002",
		  "gdp": 1470550015081.55
		},
		{
		  "name": "China",
		  "year": "2003",
		  "gdp": 1660287965662.68
		},
		{
		  "name": "China",
		  "year": "2004",
		  "gdp": 1955347004963.27
		},
		{
		  "name": "China",
		  "year": "2005",
		  "gdp": 2285965892360.54
		},
		{
		  "name": "China",
		  "year": "2006",
		  "gdp": 2752131773355.16
		},
		{
		  "name": "China",
		  "year": "2007",
		  "gdp": 3550342425238.25
		},
		{
		  "name": "China",
		  "year": "2008",
		  "gdp": 4594306848763.08
		},
		{
		  "name": "China",
		  "year": "2009",
		  "gdp": 5101702432883.45
		},
		{
		  "name": "China",
		  "year": "2010",
		  "gdp": 6087164527421.24
		},
		{
		  "name": "China",
		  "year": "2011",
		  "gdp": 7551500425597.77
		},
		{
		  "name": "China",
		  "year": "2012",
		  "gdp": 8532230724141.76
		},
		{
		  "name": "China",
		  "year": "2013",
		  "gdp": 9570405758739.79
		},
		{
		  "name": "China",
		  "year": "2014",
		  "gdp": 10438529153237.6
		},
		{
		  "name": "China",
		  "year": "2015",
		  "gdp": 11015542352468.9
		},
		{
		  "name": "China",
		  "year": "2016",
		  "gdp": 11137945669350.6
		},
		{
		  "name": "China",
		  "year": "2017",
		  "gdp": 12143491448186.1
		},
		{
		  "name": "China",
		  "year": "2018",
		  "gdp": 13608151864637.9
		},
		{
		  "name": "United States",
		  "year": "2000",
		  "gdp": 10252345464000
		},
		{
		  "name": "United States",
		  "year": "2001",
		  "gdp": 10581821399000
		},
		{
		  "name": "United States",
		  "year": "2002",
		  "gdp": 10936419054000
		},
		{
		  "name": "United States",
		  "year": "2003",
		  "gdp": 11458243878000
		},
		{
		  "name": "United States",
		  "year": "2004",
		  "gdp": 12213729147000
		},
		{
		  "name": "United States",
		  "year": "2005",
		  "gdp": 13036640229000
		},
		{
		  "name": "United States",
		  "year": "2006",
		  "gdp": 13814611414000
		},
		{
		  "name": "United States",
		  "year": "2007",
		  "gdp": 14451858650000
		},
		{
		  "name": "United States",
		  "year": "2008",
		  "gdp": 14712844084000
		},
		{
		  "name": "United States",
		  "year": "2009",
		  "gdp": 14448933025000
		},
		{
		  "name": "United States",
		  "year": "2010",
		  "gdp": 14992052727000
		},
		{
		  "name": "United States",
		  "year": "2011",
		  "gdp": 15542581104000
		},
		{
		  "name": "United States",
		  "year": "2012",
		  "gdp": 16197007349000
		},
		{
		  "name": "United States",
		  "year": "2013",
		  "gdp": 16784849190000
		},
		{
		  "name": "United States",
		  "year": "2014",
		  "gdp": 17521746534000
		},
		{
		  "name": "United States",
		  "year": "2015",
		  "gdp": 18219297584000
		},
		{
		  "name": "United States",
		  "year": "2016",
		  "gdp": 18707188235000
		},
		{
		  "name": "United States",
		  "year": "2017",
		  "gdp": 19485393853000
		},
		{
		  "name": "United States",
		  "year": "2018",
		  "gdp": 20544343456936.5
		},
		{
		  "name": "United Kingdom",
		  "year": "2000",
		  "gdp": 1657816613708.58
		},
		{
		  "name": "United Kingdom",
		  "year": "2001",
		  "gdp": 1640246149417.01
		},
		{
		  "name": "United Kingdom",
		  "year": "2002",
		  "gdp": 1784473920863.31
		},
		{
		  "name": "United Kingdom",
		  "year": "2003",
		  "gdp": 2053018775510.2
		},
		{
		  "name": "United Kingdom",
		  "year": "2004",
		  "gdp": 2416931526913.22
		},
		{
		  "name": "United Kingdom",
		  "year": "2005",
		  "gdp": 2538680000000
		},
		{
		  "name": "United Kingdom",
		  "year": "2006",
		  "gdp": 2713749770009.2
		},
		{
		  "name": "United Kingdom",
		  "year": "2007",
		  "gdp": 3100882352941.18
		},
		{
		  "name": "United Kingdom",
		  "year": "2008",
		  "gdp": 2922667279411.76
		},
		{
		  "name": "United Kingdom",
		  "year": "2009",
		  "gdp": 2410909799034.12
		},
		{
		  "name": "United Kingdom",
		  "year": "2010",
		  "gdp": 2475244321361.11
		},
		{
		  "name": "United Kingdom",
		  "year": "2011",
		  "gdp": 2659310054646.23
		},
		{
		  "name": "United Kingdom",
		  "year": "2012",
		  "gdp": 2704887678386.72
		},
		{
		  "name": "United Kingdom",
		  "year": "2013",
		  "gdp": 2786022872706.81
		},
		{
		  "name": "United Kingdom",
		  "year": "2014",
		  "gdp": 3063803240208.01
		},
		{
		  "name": "United Kingdom",
		  "year": "2015",
		  "gdp": 2928591002002.51
		},
		{
		  "name": "United Kingdom",
		  "year": "2016",
		  "gdp": 2694283209613.29
		},
		{
		  "name": "United Kingdom",
		  "year": "2017",
		  "gdp": 2666229179958.01
		},
		{
		  "name": "United Kingdom",
		  "year": "2018",
		  "gdp": 2855296731521.96
		},
		{
		  "name": "Russian",
		  "year": "2000",
		  "gdp": 259710142196.94
		},
		{
		  "name": "Russian",
		  "year": "2001",
		  "gdp": 306602070620.5
		},
		{
		  "name": "Russian",
		  "year": "2002",
		  "gdp": 345470494417.86
		},
		{
		  "name": "Russian",
		  "year": "2003",
		  "gdp": 430347770731.79
		},
		{
		  "name": "Russian",
		  "year": "2004",
		  "gdp": 591016690742.8
		},
		{
		  "name": "Russian",
		  "year": "2005",
		  "gdp": 764017107992.39
		},
		{
		  "name": "Russian",
		  "year": "2006",
		  "gdp": 989930542278.7
		},
		{
		  "name": "Russian",
		  "year": "2007",
		  "gdp": 1299705764823.62
		},
		{
		  "name": "Russian",
		  "year": "2008",
		  "gdp": 1660846387624.78
		},
		{
		  "name": "Russian",
		  "year": "2009",
		  "gdp": 1222644282201.86
		},
		{
		  "name": "Russian",
		  "year": "2010",
		  "gdp": 1524917468442.01
		},
		{
		  "name": "Russian",
		  "year": "2011",
		  "gdp": 2051661732059.78
		},
		{
		  "name": "Russian",
		  "year": "2012",
		  "gdp": 2210256976945.38
		},
		{
		  "name": "Russian",
		  "year": "2013",
		  "gdp": 2297128039058.21
		},
		{
		  "name": "Russian",
		  "year": "2014",
		  "gdp": 2059984158438.46
		},
		{
		  "name": "Russian",
		  "year": "2015",
		  "gdp": 1363594369577.82
		},
		{
		  "name": "Russian",
		  "year": "2016",
		  "gdp": 1282723881134.01
		},
		{
		  "name": "Russian",
		  "year": "2017",
		  "gdp": 1578624060588.26
		},
		{
		  "name": "Russian",
		  "year": "2018",
		  "gdp": 1657554647149.87
		},
		{
		  "name": "Japan",
		  "year": "2000",
		  "gdp": 4887519660744.86
		},
		{
		  "name": "Japan",
		  "year": "2001",
		  "gdp": 4303544259842.72
		},
		{
		  "name": "Japan",
		  "year": "2002",
		  "gdp": 4115116279069.77
		},
		{
		  "name": "Japan",
		  "year": "2003",
		  "gdp": 4445658071221.86
		},
		{
		  "name": "Japan",
		  "year": "2004",
		  "gdp": 4815148854362.11
		},
		{
		  "name": "Japan",
		  "year": "2005",
		  "gdp": 4755410630912.14
		},
		{
		  "name": "Japan",
		  "year": "2006",
		  "gdp": 4530377224970.4
		},
		{
		  "name": "Japan",
		  "year": "2007",
		  "gdp": 4515264514430.57
		},
		{
		  "name": "Japan",
		  "year": "2008",
		  "gdp": 5037908465114.48
		},
		{
		  "name": "Japan",
		  "year": "2009",
		  "gdp": 5231382674593.7
		},
		{
		  "name": "Japan",
		  "year": "2010",
		  "gdp": 5700098114744.41
		},
		{
		  "name": "Japan",
		  "year": "2011",
		  "gdp": 6157459594823.72
		},
		{
		  "name": "Japan",
		  "year": "2012",
		  "gdp": 6203213121334.12
		},
		{
		  "name": "Japan",
		  "year": "2013",
		  "gdp": 5155717056270.83
		},
		{
		  "name": "Japan",
		  "year": "2014",
		  "gdp": 4850413536037.84
		},
		{
		  "name": "Japan",
		  "year": "2015",
		  "gdp": 4389475622588.97
		},
		{
		  "name": "Japan",
		  "year": "2016",
		  "gdp": 4926667087367.51
		},
		{
		  "name": "Japan",
		  "year": "2017",
		  "gdp": 4859950558538.97
		},
		{
		  "name": "Japan",
		  "year": "2018",
		  "gdp": 4971323079771.87
		}
	  ]

	return Result
})
