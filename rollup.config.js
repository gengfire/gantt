import sass from 'rollup-plugin-sass';
import uglify from 'rollup-plugin-uglify';

const prod = {
    input: 'src/index.js',
    output: {
        name: 'Gantt',
        file: 'dist/index.js',
        format: 'umd'
    },
    plugins: [
        sass({
            output: 'dist/gantt.css'
        }),
        uglify()
    ]
};

export default [prod];
