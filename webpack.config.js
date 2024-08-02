const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: './src/wallet-lib.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'wallet'
  },
  experiments: {
    asyncWebAssembly: true,
  },
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer"),
      "url": require.resolve("url"),
      "stream": require.resolve("stream-browserify"),
      "events": require.resolve("events/"),
      "https": require.resolve("https-browserify"),
      "http": require.resolve("http-browserify"),
      "websocket": require.resolve('websocket'),
      "net": false,
    }
  },
  plugins: [
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
