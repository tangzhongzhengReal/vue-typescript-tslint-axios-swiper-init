<template>
    <div class="home">
        <Me msg='ssssss' @go="change"></Me>
        {{cc}}
        <Button type="primary">hello</Button>
        {{something}}

        <br>
        <swiper :options="swiperOption">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
            <swiper-slide>Slide 10</swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script lang="ts">
        import Me from '@/components/Me.vue';
        import { swiper, swiperSlide } from 'vue-awesome-swiper';
        import { Component, Vue } from 'vue-property-decorator';

    // 定义传递参数的结构
        interface InValue {
        // ?: 表示可选的参数，可以不传
        name?: string;
        age: number;

    }

        @Component({
        components: {
            Me,
            swiper,
            swiperSlide,
        },
    })

    export default class Home extends Vue {
        // 定义数据，不加声明变量;
        private cc!: string;

        // 或者在这里直接赋值
        private something: string = 'google';
        private swiperOption: object = {
            autoplay: true,
            loop: true,
            direction: 'vertical',
        };

        private data() {
            // 给数据赋值，生命周期在created之前
            return {
                cc: 'go',
            };
        }

        private clg(per: InValue){
            // 调用这个函数的时候，会判断传入参数的类型
            console.log(per.name);
        }

        private created() {
            console.log('in created');

            console.log(swiper);

            // 如果传递的类型和InValue对不上，则会报错
            this.clg({age: 12});
        }

        private change(value: string): void {
            this.cc = value;
        }

        private mounted() {
            console.log('in mounted');

            // this.$axios.get('/admin/get_proj_list', {})
            //     .then((response: any) => {
            //         if (response.data.msg === 'ok') {
            //             if (response.data.data !== null) {
            //                 const data = response.data.data;
            //             }
            //         }
            //     });
        }

    }
</script>
