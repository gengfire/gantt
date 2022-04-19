import sass from 'rollup-plugin-sass';
import uglify from 'rollup-plugin-uglify';
import merge from 'deepmerge';

const dev = {
    input: 'src/index.js',
    output: {
        name: 'Gantt',
        file: 'dist/frappe-gantt-bigdata.js',
        format: 'iife'
    },
    plugins: [
        sass({
            output: 'dist/gantt.css'
        })
    ]
};
const prod = merge(dev, {
    output: {
        file: 'dist/frappe-gantt-bigdata.min.js'
    },
    plugins: [uglify()]
});

export default [dev, prod];
