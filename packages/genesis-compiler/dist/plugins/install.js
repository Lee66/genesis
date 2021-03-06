"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genesis_core_1 = require("@fmfe/genesis-core");
const vue_1 = require("./vue");
const bar_1 = require("./bar");
const style_1 = require("./style");
const babel_1 = require("./babel");
const image_1 = require("./image");
const templace_1 = require("./templace");
class InstallPlugin extends genesis_core_1.Plugin {
    constructor(ssr) {
        super(ssr);
        ssr.plugin.use(bar_1.BarPlugin);
        ssr.plugin.use(vue_1.VuePlugin);
        ssr.plugin.use(style_1.StylePlugin);
        ssr.plugin.use(babel_1.BabelPlugin);
        ssr.plugin.use(image_1.ImagePlugin);
        ssr.plugin.use(templace_1.TemplacePlugin);
    }
}
exports.InstallPlugin = InstallPlugin;
