const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {'preference-elicitation': path.join(__dirname, 'src/index.ts')},
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },

  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json'
      })
    ],
    extensions: ['.tsx', '.ts', '.js']
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    libraryTarget: 'umd'
  },

  externals: [
    {
      react: 'react',
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_' // indicates global variable
      }
    },
    /@material-ui\/core\/.*/
  ]
};
