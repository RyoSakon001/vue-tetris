### index.html
１．index.htmlにアクセス。main.tsを読み込む、とある。
### main.ts
２．main.tsを参照する。使うメソッド（createApp, RouteRecordRaw, createWebHistory, createRouter）をimportする。
３．App.vueをいつでもindex.htmlに加えられるようにする。
４．import TopPage from "./pages/TopPage.vue"; // A
import PlayPage from "./pages/PlayPage.vue"; // B
この記述により、後のroutesの参照先エイリアスを指定する。
５．routesの定義を行う。
６．routerとは何の処理を行うことなのか定義する。
７．createApp(App).use(router).mount('#app')
この記述により、実際にApp.Vueをindex.htmlに加え、そのApp.Vueに対して、routerを使用し、mountで？？？。
### App.vue
８．templateの中身で「router-view」を使用している。これは？？？により、リクエストに応じたルーティングを行っている。

### TopPage.vue
９．"/"をリクエストされたときに表示。scriptは適宜読むこととし、templateを読んでいく。
１０．v-model="state.name"とあるが、stateという変数がreactive({ name: ""})となっている通り、これはリアルタイムで変化する値を表す。
１１．v-on:click="startGame()"により、クリックと同時にstartGameメソッドを実行する。内容は、PlayPageというmain.tsに記載されたnameのルーティングを行うというもの。queryは、クエリパラメータを表しており、配列形式になっている。「:」は「=>」と同じ。「{}」は「[]」と同じ。

### PlayPage.vue
１２．TopPageと同様、templateから読んでいく。
１３．$route.query.nameで、送られたデータを利用することができる。
１４．v-forを用いて、foreachのように、tdタグを縦横に並べていく。このとき、classBlockColorメソッドにより、tdの背景色が決定する。
１５．classBlockColorについて。
☆前提として、全体のtd表において、「既に配置されたブロック」と「落ちている最中のテトロミノ」は別々に管理されている。
最初に、「既に配置されたブロック」について処理を行う。
typeの値には、tetris.fieldというreactiveな配列が使われている。これは、Fieldクラスのインスタンスである。
Fieldクラスは、common/Field.tsに記述されているが、インスタンスを生成した際に、既存のtdに入っている値をdataとして取得する。
まず、type > 0は、ブロックの有無を判定している。内部では、Tetrominoクラスのidメソッドで、値ごとにCSSのclass名を返し、tdに付与する。