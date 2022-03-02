<template>
    <div>
        <!-- <router-view></router-view> -->
        <div>{{user}}</div>
        <button @click="hello">hello</button>
    </div>
</template>

<script>
import { reactive } from "vue";
export default {
    name: "App",
    setup() {
        let user = reactive({
            name: "张三",
            age: 25,
        });
        console.log(user)
        function hello() {
            console.log("aaa");
            // user = { name: "李四", age: 28 };
            user.name = '李四';
            user.age = 28;
        }

        return {
            user,
            hello,
        };
    },
};
</script>

<style>
</style>
