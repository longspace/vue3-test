const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		// overlay: {
		// 	warnings: true,
		// 	errors: true
		// },

		host: "localhost",
		port: 8090, // 端口号
		// https: false, // https:{type:Boolean}
		open: true, //配置后自动启动浏览器
		// hotOnly: true, // 热更新

		proxy: {
			'/api': {
				target: 'https://you.163.com/', //接口域名
				changeOrigin: true,             //是否跨域
				// ws: true,                       //是否代理 websockets
				secure: true,                   //是否https接口
				pathRewrite: {                  //路径重置
					'^/api': ''
				}
			}
		},
	},


})
