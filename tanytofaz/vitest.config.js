import {defineConfig} from 'vitest/config'

export default defineConfig(({mode}) => ({
 plugins: [],
 resolve: {
   conditions: mode === 'test' ? ['browser'] : [],
 },
 test: {
   environment: 'jsdom',
   setupFiles: ['./vitest-setup.js'],
   reporters: process.env.GITHUB_ACTIONS ? ['dot', 'github-actions'] : ['dot'],
 },
}))