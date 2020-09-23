const path = require("path");
const resolve = dir => path.join(__dirname, dir);


module.exports = {
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set("vue$", "vue/dist/vue.esm.js")
            .set("@", resolve("src"))
            .set("@assets", resolve("src/assets"))
            .set("@components", resolve("src/components"))
            .set("@plugins", resolve("src/plugins"))
            .set("@views", resolve("src/views"))
            .set("@router", resolve("src/router"))
            .set("@store", resolve("src/store"))
            .set("@static", resolve("src/static"));
    },
    publicPath:'./'
};