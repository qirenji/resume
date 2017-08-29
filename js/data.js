var data = {
	info:{
		cvName:'齐仁吉的简历',
		job: '前端工程师'
	},
	contactMe: [
		{
			className: 'icon-mail-alt',
			title: '邮箱',
			content: 'lyf@qirenji.com'
		},
		{
			className: 'icon-wechat',
			title: '微信',
			content: 'qirenji'
		},
		{
			className:'icon-qq',
			title: 'QQ',
			content: '290187113'
		},
	],
	skill:[
		{title:'HTML/CSS',length:'80%'},
		{title:'sass',length:'55%'},
		{title:'javascript',length:'65%'},
		{title:'jQuery',length:'55%'},
		{title:'VueJs',length:'45%'},
		{title:'requireJs',length:'30%'},
		{title:'nodejs',length:'30%'},
		{title:'gulp',length:'30%'},
		{title:'PhotoShop',length:'30%'}
	],
	note:[
		'我是一个充满活力，热爱生活的前端工程师，并且善于发现问题、解决问题、勇于改进。',
		'工作积极主动、具备良好的自律性和自我驱动能力。',
		'希望寻找一个前端开发的岗位，赶快联系我吧！！！'
	],
	infoList: [
		{
			title:'个人信息',
			msg:'齐仁吉 / 男'
		},
		
		{
			title:'毕业院校',
			msg:'黑龙江大学(本科), 黑龙江大学(硕士)'
		},
		{

			title:'博客',
			msg:'www.qirenji.info',
			url: 'http://www.qirenji.info'
		},
		{
			title:'GitHub',
			msg:'https://github.com/qirenji',
			url: 'https://github.com/qirenji'
		},
		{
			title:'联系方式',
			msg:'15104571247'
		}
	],
	project: [
		{
			name:'音乐播放器',
			links:[
				{
					title:'源码',
					url:'https://github.com/qirenji/music-vue'
				},
				{
					title:'Demo',
					url:'http://music.qirenji.com'
				},
			],
			msg:[
				'Vue实现的简易在线音乐平台，调用QQ音乐API实现音乐的搜索及播放。使用HTML5中的Audio标签对音乐进行播放控制。',
				'技术栈HTML5，CSS3，Vue全家桶，Sass，Node(Express)，Webpack。'
			],
			images:''
		},
		{
			name:'Cnode社区',
			links:[
				{
					title:'源码',
					url:'https://github.com/qirenji/cnode-vue'
				},
				{
					title:'Demo',
					url:'http://cnode.qirenji.com'
				},
			],
			msg:[
				'Vue.js打造一个开源的CNode社区，调用Cnode社区官方API实现登录，浏览、发帖、收藏、回复、点赞等功能。',
				'技术栈:Vue全家桶，ES6，localStorage，Sass，Css3，flex'
			],
			images:''
		},
		{
			name:'GitHub热门项目排行榜',
			links:[
				{
					title:'源码',
					url:'https://github.com/qirenji/github-ranking'
				},
				{
					title:'Demo',
					url:'http://github.qirenji.com'
				},
			],
			msg:[
				'使用爬虫对GitHub上不同语言的项目进行爬取，然后显示出Star数比较多的GitHub项目排行，Vue做页面展示。',
				'技术栈：Vue2.0，axios，request-promise，express，cheerio，ES6，sass，flex，css3'
			],
			images:''
		},
		{
			name:'豆瓣电影收集网站',
			links:[
				{
					title:'源码',
					url:'https://github.com/qirenji/movie'
				},
				{
					title:'Demo',
					url:'http://movie.qirenji.com'
				},
			],
			msg:[
				'豆瓣电影收集，可实现对电影的资源的后台录入，前端展示和用户登录等功能。',
				'技术栈：pug(jade)，jquery，bootstrap，less，gulp，nodejs，mongoDB'
			],
			images:''
		},
		{
			name:'智能聊天室',
			links:[
				{
					title:'源码',
					url:'https://github.com/qirenji/chat-vue'
				},
				{
					title:'Demo',
					url:'http://chat.qirenji.com'
				},
			],
			msg:[
				'Vue打造的智能聊天室，兼容手机和PC。使用青云客智能机器人API接口和socket.io通信，实现在线智能聊天和多用户聊天功能。',
				'技术栈：Vue全家桶+Sass+flex+Socket.io+Express+localStorage'
			],
			images:''
		},
		{
			name:'三级联动生成器插件',
			links:[
				{
					title:'源码',
					url:'https://github.com/qirenji/select-plugin'
				},
				{
					title:'Demo',
					url:'http://www.qirenji.info/practices/select-plugin'
				},
			],
			msg:[
				'自一个三级联动的生成器插件，默认生成中国地区的三级联动数据，也可以自定义数据。',
				'技术栈：ES6，Glup'
			],
			images:''
		},
	],
	skillText:[
		{
			name:'前端',
			msg:[
				'能够编写语义化的 HTML，掌握HTML5、CSS3，熟悉 Less Sass 等CSS预处理器',
				'掌握原生 Javascript(ES5、ES6)，能脱离 jQuery 等类库编码，熟悉面向对象编程',
				'熟练使用vue.js框架及其全家桶、了解微信小程序'
			]
		},
		{
			name:'后端',
			msg:[
				'熟悉 Node.js, 使用过Express、koa框架,了解数据库 MongoDB 的开发，使用过 pm2 部署'
			]
		},
		{
			name:'其他',
			msg:[
				'熟悉 Grunt、Gulp等前端自动化工具，了解Webpack打包工具',
				'熟悉Git、Svn等版本控制工具'
			]
		}
	]
}