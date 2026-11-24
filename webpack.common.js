import path from "node:path";
import webpack from "webpack";
import { fileURLToPath } from 'node:url';
import config from "./src/config.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: "./src/index.html",
    output: {
        filename: "[name].js",
        htmlFilename: "[name].html",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve: {
        alias: {
            "date-fns-locale": path.dirname(import.meta.resolve("date-fns/package.json")),
        },
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /date-fns[/\\]locale/,
            new RegExp(`(${config.SUPPORTED_LOCALES.join("|")})\.js$`),
        ),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};