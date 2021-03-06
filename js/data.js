var data = {
	info:{
		cvName:'齐仁吉的简历',
		job: '前端工程师'
	},
	contactMe: [
		{
			className: 'icon-mail-alt',
			title: '邮箱',
			content: 'work@qirenji.com'
		},
		{
			className: 'icon-wechat',
			title: '微信',
			content: 'qirenji'
		},
		{
			className:'icon-qq',
			title: 'QQ ',
			content: '290187113'
		},
		{
			className:'icon-phone-1',
			title: '电话',
			content: '15104571247'
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
			msg:'黑龙江大学(本科+硕士)'
		},
		{

			title:'博客',
			msg:'www.qirenji.com',
			url: 'http://www.qirenji.com'
		},
		{
			title:'GitHub',
			msg:'github.com/qirenji',
			url: 'https://github.com/qirenji'
		}
	],
	workList: [
		{
			title:'北京数美时代科技有限公司',
			job:'前端工程师',
			time:'2017.09-至今'
		},
		{
			title:'北京华龙通科技有限公司',
			job:'软件工程师',
			time:'2015.07-2017.06'
		},
	],
	project: [
		{
			name:'Sass客户后台',
			links:[
				{
					title:'Demo',
					url:'https://www.fengkongcloud.com'
				},
			],
			msg:[
				'Sass后台是数美大数据产品服务对外展示和查看历史调用情况及用户相关使用配置等。',
				'主要负责页面新产品及功能添加、客户反馈问题修改、产品版本更新。',
				'技术栈:templateJs，jquery，php，requireJs，fis3。'
			],
			images:''
		},
		{
			name:'数美管理后台',
			links:[
				// {
				// 	title:'Demo',
				// 	url:'http://cnode.qirenji.com'
				// },
			],
			msg:[
				'数美管理后台主要是数美公司内部使用的管理和查询平台，可查看公司运营情况及数据服务各类信息的监控。',
				'主要负责运营查询服务中各类信息的展示。',
				'技术栈: react，react-router，dva(redux + redux-saga)，less，fis3。'
			],
			images:''
		},
		{
			name:'天信-金融风控平台',
			links:[
				{
					title:'Demo',
					url:'https://next.fengkongcloud.com'
				},
			],
			msg:[
				'金融风控平台主要是面向金融用户，进行金融策略的配置。',
				'主要负责项目的搭建与主要模块的编写。',
				'技术栈: umi(react+react-router+roadhog)，dva( redux + redux-saga)，less'
			],
			images:''
		},
	],
	personalProject:[
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
				'技术栈: vue全家桶，HTML5(audio)，sass(css3)。'
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
				'技术栈: Vue全家桶，localStorage，sass(css3)'
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
				'使用爬虫对GitHub上不同语言的项目进行爬取，然后显示出Star数排行前十的项目。',
				'技术栈: Vue2.0，axios，express，cheerio'
			],
			images:''
		},
	],
	skillText:[
		{
			name:'HTML+CSS',
			msg:[
				'能够编写语义化的 HTML，掌握HTML5、CSS3，熟悉 Less Sass 等CSS预处理器'
			]
		},
		{
			name:'JavaScript',
			msg:[
				'掌握原生 Javascript(ES5、ES6)，能脱离 jQuery 等类库编码，熟悉面向对象编程',
				'熟练使用vue和react框架及其全家桶，熟悉组件化模块化开发'
			]
		},
		{
			name:'其他',
			msg:[
				'熟悉nodejs，能够使用express搭建本地服务器,了解php及nginx，使用过 pm2 部署',
				'熟悉 Grunt、Gulp等前端自动化工具，了解Webpack打包工具',
				'熟悉Git、Svn等版本控制工具'
			]
		}
	]
}