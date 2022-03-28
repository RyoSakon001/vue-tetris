module.exports = {
    // 大元のファイルであることを明示
    root: true,
    // 静的解析の設定項目を継承したいリストを指定
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "@vue/eslint-plugin-typescript/recommended",
    ],
    // 静的解析の対象としたいリストを明示
    rules: {
        "no-redeclare": "off"
    }
};