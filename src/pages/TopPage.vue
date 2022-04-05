<script setup lang="ts">
import { reactive } from 'vue'; // vue標準ライブラリからreactiveメソッドを使う
import { useRouter } from 'vue-router';
import PlayPageVue from './PlayPage.vue';

const state = reactive({ name: ""}); // stateはreactiveな配列で初期値。変更されうる。
const router = useRouter();

const startGame = () => {
    // main.tsに記載された名称「PlayPage」に従ったリンク＝/play, queryはクエリパラメータ。
    router.push({name: "PlayPage", query: {name: state.name }});
}
</script>

<template>
    <h1>Welcome to Vue-Tetris!!</h1>
    <!-- reactiveな変数 -->
    <p>{{ state.name }}</p>
    <input
        v-model="state.name"
        placeholder="Press Your Name"
        maxlength="10"
    ><br><br>
    <!-- v-on→押下したらstartGameメソッドを実行 -->
    <!-- v-onは@でもよい -->
    <button v-on:click="startGame()"> 
        GAME START
    </button>
</template>

<style>
input {
    width: 20rem;
    font-size: 1.1rem;
    text-align: center;
}
p {
    font-size: 1.6rem;
    font-weight: bold;
    height: 5vh;
}
</style>