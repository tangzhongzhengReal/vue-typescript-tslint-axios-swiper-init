import axios from 'axios';
import _Vue from 'vue';
import AxiosClass from './AxiosClass';

// export default axios
const $axios: AxiosClass =  new AxiosClass(axios);

// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;
export function Http(Vue: typeof _Vue): void {
    // do stuff with options
    Vue.prototype.$axios = $axios;
}
