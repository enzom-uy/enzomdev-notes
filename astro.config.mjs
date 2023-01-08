import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'
import addClasses from 'rehype-add-classes'

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bold',
          h2: 'text-2xl font-bold',
          h3: 'text-xl font-bold',
          h4: 'text-lg font-bold',
          h5: 'font-bold',
          h6: 'font-bold',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl my-4',
          a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500',
          ul: 'list-disc px-6',
          table: 'border border-slate-800 dark:border-slate-300 p-2',
          th: 'border border-b border-slate-800 dark:border-slate-300',
          td: 'border border-slate-800 dark:border-slate-300'
        }
      ]
    ]
  },
  site: 'https://enzomdev-apuntes.github.io',
  base: '/enzomdev-notes',
  output: 'server',
  adapter: vercel()
})
