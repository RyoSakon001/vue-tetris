<script setup lang="ts">
const row = 20;
const field = new Array(row);

const column = 10;
for (let i = 0; i < row; i++) {
    const fieldColumn = new Array(column).fill(0);
    field[i] = fieldColumn;
}

field[0][0] = 1;
field[1][0] = 1;
field[2][0] = 1;
field[3][0] = 1;

const tetrominos = [
    [
        [0] //空白
    ],
    [
        [1,1,1,1] //水色
    ],
    [
        [2,2],
        [2,2] //黄色
    ],
    [
        [0,3,3],
        [3,3,0] //緑
    ],
    [
        [4,4,0],
        [0,4,4] //赤
    ],
    [
        [0,0,5],
        [5,5,5] //青
    ],
    [
        [6,0,0],
        [6,6,6] //オレンジ
    ],
    [
        [0,7,0],
        [7,7,7] //紫
    ],
];

</script>

<template>
    <h1>プレイ画面</h1>
    <h2>プレーヤー名：{{ $route.query.name }}</h2>

    <div class="container">
        <table class="field" style="border-collapse: collapse">
            <tr v-for="(row, y) in field" :key="y">
                <td
                    class="block"
                    v-for="(col, x) in row"
                    :key="() => `${x}${y}`"
                >{{ col }}</td>
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