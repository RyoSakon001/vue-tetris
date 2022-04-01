<script setup lang="ts">
const row = 20;
const field = new Array(row);

const column = 10;
for (let i = 0; i < row; i++) {
    const fieldColumn = new Array(column).fill(0);
    field[i] = fieldColumn[i];
}

</script>

<template>
    <h1>プレイ画面</h1>
    <h2>プレーヤー名：{{ $route.query.name }}</h2>
</template>

<style>

</style>