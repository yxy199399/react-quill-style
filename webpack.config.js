const Path = require('path');
const webpack = require("webpack");
const dir = (...args) => Path.resolve(__dirname, ...args);

module.exports = {
  mode: 'production',
  entry: dir('src/index.tsx'),

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {test:/\.tsx?$/, loader:'ts-loader', exclude:/node_modules/},
      {test:/\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/}
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      // 在这儿添加下面两行
      'window.Quill': 'quill/dist/quill.js',
      'Quill': 'quill/dist/quill.js'
    })
  ],

  externals: {
    'react': {
      'commonjs': 'react',
      'commonjs2': 'react',
      'amd': 'react',
      'root': 'React'
    },
    'react-dom': {
      'commonjs': 'react-dom',
      'commonjs2': 'react-dom',
      'amd': 'react-dom',
      'root': 'ReactDOM'
    },
    'react-dom/server': {
      'commonjs': 'react-dom/server',
      'commonjs2': 'react-dom/server',
      'amd': 'react-dom/server',
      'root': 'ReactDOMServer'
    }
  },

  output: {
    path: dir('dist'),
    filename: 'react-quill.js',
    library: 'ReactQuill',
    libraryTarget: 'umd',
  },

  devServer: {
    contentBase: dir('dist'),
    stats: 'errors-only',
  },

};
