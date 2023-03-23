import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { htmlPlugin } from './vite.htmlPlugin.js'

export default defineConfig({
  plugins: [sveltekit(), htmlPlugin()]
})
