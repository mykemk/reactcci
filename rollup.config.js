import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import hashbang from 'rollup-plugin-hashbang';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.ts', '.js'];

export default {
    input: 'index.ts',
    output: {
        file: './build/cli.js',
        format: 'cjs'
    },
    plugins: [
        resolve({ extensions }),
        babel({ extensions: ['.ts', '.js'], exclude: './node_modules/**' }),
        hashbang(),
        terser()
    ],
    external: ['path', 'fs', 'child_process', 'kleur', 'prompts', 'commander']
};
