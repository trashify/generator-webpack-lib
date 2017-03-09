const path = require('path')
const libraryName = '<%= libraryName %>'

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: process.env.WEBPACK_ENV === 'production' ? `${libraryName}.min.js` : `${libraryName}.js`,
    library: libraryName,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
  externals: {
    /**
     * External libraries to give up control of.
     * https://webpack.js.org/guides/author-libraries/#add-externals
     */
  },
  devtool: 'cheap-module-source-map'
}