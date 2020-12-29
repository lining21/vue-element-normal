import http from './http';
// 基础信息模块
// 登录
export const login = (params) => http.post('/login', params);
// 登出
export const logout = () => http.post('/logout');
// 获取用户信息
export const getUserInfo = () => http.post('/user/getUserInfo');
// 修改密码
export const changePwd = (params) => http.post('/user/changePwd', { params });