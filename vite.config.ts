import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfig from './tsconfig.app.json';

const SRC_PATH = path.resolve(__dirname, 'src');

/**
 * Функция для преобразования путей из tsconfig в алиасы Vite
 */
const parseTsConfigPaths = (paths: Record<string, string[]>): Record<string, string> => {
  const viteAliases: Record<string, string> = {};

  Object.entries(paths).forEach(([alias, aliasPaths]) => {
    // Убираем /* из алиаса и путей
    const cleanAlias = alias.replace('/*', '');
    const aliasPath = aliasPaths[0].replace('/*', '');

    // Формируем алиас в формате Vite
    viteAliases[cleanAlias] = path.resolve(SRC_PATH, aliasPath);
  });

  return viteAliases;
};

// Читаем алиасы из tsconfig
const aliases = parseTsConfigPaths(tsconfig.compilerOptions.paths);

// Экспорт конфигурации Vite
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...aliases, // Добавляем алиасы из tsconfig
      '@assets': path.resolve(__dirname, './src/app/assets'), // Явный алиас для @assets
    },
  },
});
