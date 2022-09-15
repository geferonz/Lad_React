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
      app: path.resolve(__dirname, 'src/app/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      store: path.resolve(__dirname, 'src/store/')
    },
  }
};
