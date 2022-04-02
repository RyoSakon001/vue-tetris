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

    <div class="container">
        <table class="field" style="border-collapse: collapse">
            <tr v-for="(row, y) in field" :key="y">
                <td
                    class="block"
                    v-for="(col, x) in column"
                    :key="() => `${x}${y}`">
                </td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.container {
display: flex;
justify-content: center;
align-items: stretch;
}

.field {
border: ridge 0.4em #2c3e50;
border-top: none; 
}

.block {
width: 1em;
height: 1em;
border: 0.1px solid #95a5a6;
}
</style>