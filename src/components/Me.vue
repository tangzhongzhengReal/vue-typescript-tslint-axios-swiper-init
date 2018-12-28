<template>
    <div class="hello">
       <span>{{msg}}</span>
       <button @click="go">go</button>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Prop,
        Vue,
        Emit,
    } from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends Vue {
        @Prop() private msg!: string;

        @Emit('go')
        private go(): string {
            return 'name';
        }
    }
</script>   

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>