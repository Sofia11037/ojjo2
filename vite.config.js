import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    base: 'https://sofia11037.github.io/test/',
    plugins: [react()],
})
