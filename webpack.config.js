import * as path from 'path';

export const entry = path.resolve(__dirname, 'src/index.tsx');
export const output = {
  path: path.resolve(__dirname, 'assets'),
  filename: 'bundle.js'
};
export const module = {
  rules: [
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader'
      }
    },
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/index.ts'),
      components: path.resolve(__dirname, 'src/components/index.ts'),
      pages: path.resolve(__dirname, 'src/pages/index.ts'),
      store: path.resolve(__dirname, 'src/store/index.ts'),
      types: path.resolve(__dirname, 'src/types/main.ts')
    },
  }
};
