import axios from "axios";

import type { AxiosRequestConfig, AxiosResponse } from "axios";
import UtilVar from "../config/UtilVar";
import { RequestEnum, StorageEnum } from "~/enums";
import { getLocalStorage } from "~/utils";

const baseUrl = UtilVar.baseUrl;

export { baseUrl };
// axios.defaults.withCredentials = true;
// 添加请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  // 在发送请求之前做些什么 传token
  const token: any = getLocalStorage(StorageEnum.GB_TOKEN_STORE);
  if (token) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    config.headers.common[RequestEnum.GB_TOKEN_KEY] = token;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  config.headers["Content-Type"] = "application/json;charset=utf-8";

  return config;
}, (error: any) => {
  // 对请求错误做些什么
  console.warn(error);
  return Promise.reject(error);
});

export interface Params {
  [key: string]: string | number;
}

/**
 * @响应拦截
 */
axios.interceptors.response.use((response: AxiosResponse) => {
  /**
     * @code 登录过期 token验证失败 根据后端调
     */
  // console.log(response)
  if (response.status !== 200) {
    return Promise.reject(response);
  }
  if (response.data.code === UtilVar.code) {
    // router.push("/login")
    return response.data;
  }
  return response.data;
}, (error: any) => {
  // console.log(error);
  const err = {
    success: false,
    msg: "未知异常，请联系管理员！",
  };
  if (JSON.stringify(error).includes("Network Error")) {
    err.msg = "网络错误或服务错误！";
  }
  // console.log(err);
  return Promise.reject(err);
});

// 判断是否是加密参数，是的话处理
const isEncryptionParam = (params: Params) => {
  return params;
};
/**
 * @description: get 请求方法
 * @param {string} url 请求地址
 * @param {Params} params 请求参数
 * @return {*}
 */
export const GET = async (url: string, params: Params): Promise<any> => {
  try {
    params = isEncryptionParam(params);
    const data = await axios.get(`${baseUrl}${url}`, {
      params,
    });
    return data;
  } catch (error) {
    return error;
  }
};

/**
 * @description: 没有基地址 访问根目录下文件
 * @param {string} url
 * @param {Params} params
 * @return {*}
 */
export const GETNOBASE = async (url: string, params?: Params): Promise<any> => {
  try {
    const data = await axios.get(location.pathname + url, {
      params,
    });
    return data;
  } catch (error) {
    return error;
  }
};
