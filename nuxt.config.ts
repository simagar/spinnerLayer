import {resolve} from "pathe";
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
    alias: {
        '#spinner': resolve(currentDir)
    },
    components: [
        {
            // can be relative, alias or absolute
            path: 'components',

            // components organised in sub-folders should not be prefixed
            pathPrefix: false,

            // ensure contact form is accessible in Nuxt content
            // the alternative would be to rename it ContactForm.global.vue
            global: true
        },
    ],

    dirs: {
        // move public folder here
        public: 'public'
    }
})
