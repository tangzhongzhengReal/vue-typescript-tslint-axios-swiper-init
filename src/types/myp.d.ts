import Vue, { ComponentOptions } from "vue";
import AxiosClass from '../http/AxiosClass';

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    axios?: AxiosClass;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $axios: AxiosClass;
  }
}


declare module 'Swipers'{
    export const swiper: any

    export const swiperSlide: any
}