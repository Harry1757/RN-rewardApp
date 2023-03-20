module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@': './src',
          '@component': './src/components',
          '@actions': './src/actions',
          '@constants': './src/constants',
          '@reducers': './src/reducers',
          '@sagas': './src/sagas',
          '@services': './src/services',
          '@selectors': './src/selectors',
          '@store': './src/store',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
