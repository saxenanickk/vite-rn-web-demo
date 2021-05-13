import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import { defineConfig } from 'vite'

const aliasForWeb = ([folder]) => path.resolve(`./src/.web-aliases/${folder}`)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      'react-native' /* import to override */: aliasForWeb`react-native` /* the path within the alias folder */,
    }
  }
})
