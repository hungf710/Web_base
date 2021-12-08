
import Axios from "axios";
import _ from "lodash";
import Result from "./result";
import { $Cookies } from "./cookies";
import { API_BASE_URL, JWT_TOKEN } from "./constants";
import { Ui } from "./Ui";
import Globals from "./globals";
import { $Token } from './token';


export default class ServiceBase {
  static async requestJson(opts) {
    let axiosResult = null;
    let result = null;
    const axiosRequestConfig = {
      withCredentials: true,
      baseURL: opts.baseUrl || API_BASE_URL,
      timeout: 300000,
      headers:  $Token.get(JWT_TOKEN) ? {
        'Content-Type': _.get(opts, 'contentType', 'application/json'),
        Authorization: 'Token ' + $Token.get(JWT_TOKEN),
        Accept: "application/json",
      } : {
        'Content-Type': _.get(opts, 'contentType', 'application/json'),
        Accept: "application/json",
      },

    };
    try {
      switch (opts.method) {
        case "GET":
          axiosResult = await Axios.get(opts.url, {
            ...axiosRequestConfig,
            params: opts.data,
          });
          break;
        case "POST":
          axiosResult = await Axios.post(
            opts.url,
            opts.data,
            axiosRequestConfig
          );
          break;
        case "PUT":
          axiosResult = await Axios.put(
            opts.url,
            opts.data,
            axiosRequestConfig
          );
          break;
        case "DELETE":
          axiosResult = await Axios.delete(opts.url, axiosRequestConfig);
          break;
        case "EXPORT":
          axiosResult = await Axios.get(`${opts.url}`, {
            ...axiosRequestConfig,
            responseType: 'blob',
            params: opts.data,
          });
          break;
  
      }
      result = new Result(axiosResult.data, null);
    } catch (error) {
      let messages = error.response;
      let statusCode = _.get(error, "response.status", 204);
      if (statusCode === 401) {
        Globals.clear();
        setTimeout(() => {
          window.location.href = "/signin";
        }, 500);
        return;
      } else if (statusCode === 204) {
        result = new Result(null, "오류가 발생하였습니다");
      } else {
        result = new Result(null, messages);
      }
    }
    return result;
  }
}
