import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfig from './tsconfig.app.json';


const SRC_PATH = path.resolve(__dirname, 'src');


const parseTsConfigPaths = (paths: Record<string, string[]>): Record<string, string> => {
  const viteAliases: Record<string, string> = {};

  Object.entries(paths).forEach(([alias, aliasPaths]) => {
   
    const aliasPath = aliasPaths[0].replace('/*', '');

   
    viteAliases[alias] = path.resolve(SRC_PATH, aliasPath);
  });

  return viteAliases;
};


const aliases = parseTsConfigPaths(tsconfig.compilerOptions.paths);


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
