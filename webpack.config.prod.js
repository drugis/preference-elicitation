const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {'preference-elicitation': path.join(__dirname, 'src/index.ts')},

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
      'react-dom': 'react-dom',
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_' // indicates global variable
      },
      'help-popup': 'help-popup'
    },
    /@material-ui\/.*/
  ]
};
