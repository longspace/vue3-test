import http from '../utils/http'


let resquest = "/testIp/request/"

//  写法一，适合分类导出 ：
/**
 *   resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *   '/testIp'代表vue-cil中config，index.js中配置的代理
 */

// get请求
export function getListAPI(params) {
    return http.get(`${resquest}/getList.json`, params)
}
// post请求
export function postFormAPI(params) {
    return http.post(`${resquest}/postForm.json`, params)
}
// put 请求
export function putSomeAPI(params) {
    return http.put(`${resquest}/putSome.json`, params)
}
// delete 请求
export function deleteListAPI(params) {
    return http.delete(`${resquest}/deleteList.json`, params)
}

// 组件中调用示例
// import { getListAPI, postFormAPI, putSomeAPI, deleteListAPI } from '@/api/api'

// methods: {
//     //   promise调用，链式调用， getList()括号内只接受参数；
//     //   get不传参
//     getList() {
//         getListAPI().then(res => console.log(res)).catch(err => console.log(err))
//     },
//     //post传参
//     postForm(formData) {
//         let data = formData
//         postFormAPI(data).then(res => console.log(res)).catch(err => console.log(err))
//     },

//     //async await同步调用
//     async postForm(formData) {
//         const postRes = await postFormAPI(formData)
//         const putRes = await putSomeAPI({ data: 'putTest' })
//         const deleteRes = await deleteListAPI(formData.name)
//         // 数据处理
//         console.log(postRes);
//         console.log(putRes);
//         console.log(deleteRes);
//     },
// }





// 写法二，适合全部导出 ：
/**
 *   resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *   '/testIp'代表vue-cil中config，index.js中配置的代理
 */

// // get请求
// export default{
//  	getListAPI(params){
//     	return http.get(`${resquest}/getList.json`,params)
// 	},
// 	 postFormAPI(params){
//     	return http.post(`${resquest}/postForm.json`,params)
// 	}
// }

// 组件中调用示例
// import api from '@/api/api'
// methods: {
//     getList() {
//         api.getListAPI(data).then(res => {
//             //数据处理
//         }).catch(err => console.log(err))
//     }
// }



