import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';

export default {
    plugins: [
        postcssImport(),
        autoprefixer({
            overrideBrowserslist: ['last 2 versions', '> 1%'],
        }),
    ],
    sourceMap: true,
}
