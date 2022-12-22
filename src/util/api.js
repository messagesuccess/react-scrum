import axios from "./http";
//登录POST请求
export const loginApi=(method,url,data)=>{return axios(method,url,data)}
//获取project列表数据 GET请求
export const projectApi=(method,url,data)=>{return axios(method,url)}