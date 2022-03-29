<script setup lang="ts">
import { reactive } from 'vue'; // vue標準ライブラリからreactiveメソッドを使う

const state = reactive({ name: ""}); // stateはreactiveな配列で初期値。変更されうる。
const startGame = () => {
    alert(`ユーザ名：${state.name}`); // inputの中身を挿入してアラートする「startGame」アロー関数を定義
}
</script>

<template>
    <h1>トップ画面</h1>
    <!-- reactiveな変数 -->
    <p>{{ state.name }}</p>
    <input
        v-model="state.name"
        placeholder="名前を入力してください(10文字以内)"
        maxlength="10"
    ><br><br>
    <!-- v-on→押下したらstartGameメソッドを実行 -->
    <!-- v-onは@でもよい -->
    <button v-on:click="startGame()"> 
        ゲームスタート！
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