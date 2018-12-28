import {AxiosStatic, AxiosRequestConfig, AxiosInstance, CancelStatic, CancelTokenStatic} from 'axios';
import qs from 'qs';
import router from './router';

interface AxiosRetry extends AxiosRequestConfig{
  retry?: number;
  retryDelay?: number; // 重试延时
  shouldRetry?: () => boolean;
}

interface AxiosInstanceMe extends AxiosInstance{
  defaults: AxiosRetry;
}

interface AxiosStaticMe extends AxiosInstanceMe {
  create(config?: AxiosRetry): AxiosInstanceMe;
  Cancel: CancelStatic;
  CancelToken: CancelTokenStatic;
  isCancel(value: any): boolean;
  all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
  spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R;
}

export default class A {
    private axios: AxiosStaticMe;

    constructor(aa: any) {
        this.axios = aa;

        // axios 配置
        this.axios.defaults.timeout = 5000;
        // axios.defaults.baseURL = 'http://192.168.199.156:91'
        this.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        this.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

        // http request 拦截器
        this.axios.interceptors.request.use(
            (config: any) => {
                return config;
            },
            (error: any) => {
                return Promise.reject(error);
            },
        );

        // http response 拦截器
        this.axios.interceptors.response.use(
            (response: any) => {
                if (!response.data.status) {
                    switch (response.data.code) {
                        case 3:
                            // store.commit('toggleLoginModal',true);
                            // store.commit('logout');
                            // // 清除自动登录 token
                            // sessionStorage.removeItem('token');
                            break;
                        case 4:
                            // console.log('go')
                            router.push('/back/login');
                            break;
                        default :
                            break;
                    }
                }
                return response;
            },
        );

        // 请求超时重新发起请求
        this.axios.defaults.retry = 1; // 重试次数
        this.axios.defaults.retryDelay = 1000; // 重试延时
        this.axios.defaults.shouldRetry = () => true; // 重试条件，默认只要是错误都需要重试
        this.axios.interceptors.response.use(undefined, (err: any) => {
            console.log(err.config);
            const config = err.config;
            // 判断是否配置了重试
            if (!config || !config.retry) { return Promise.reject(err); }

            if (!config.shouldRetry || typeof config.shouldRetry !== 'function') {
                return Promise.reject(err);
            }

            // 判断是否满足重试条件
            if (!config.shouldRetry(err)) {
                return Promise.reject(err);
            }

            // 设置重置次数，默认为0
            config.__retryCount = config.__retryCount || 0;

            // 判断是否超过了重试次数
            if (config.__retryCount >= config.retry) {
                return Promise.reject(err);
            }

            // 重试次数自增
            config.__retryCount += 1;

            // 延时处理
            const backoff = new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, config.retryDelay || 1);
            });
            // 重新发起axios请求
            return backoff.then(() => {
                return this.axios(config);
            });
        });
    }
    public get(url: string, params: object) {
        return this.axios({
            method: 'get',
            url,
            params, // get 请求时带的参数
        }).then(
            (response: any) => {
                return response;
            },
        );
    }
    public post(url: string, data: object) {
        return this.axios({
            method: 'post',
            url,
            data: qs.stringify(data),
        }).then(
            (response: any) => {
                return response;
            },
        ).then(
            (res: any) => {
                return res;
            },
        );
    }
}
