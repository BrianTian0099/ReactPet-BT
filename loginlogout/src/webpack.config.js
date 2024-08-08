const webpack = require('webpack');

module.exports = {
  // 其他配置
  resolve: {
    fallback: {
      "net": false,
      "tls": false,
      "fs": false,
      "path": false,
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "timers": require.resolve("timers-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "buffer": require.resolve("buffer/"),
      "process": require.resolve("process/browser"),
      "url": require.resolve("url/")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
  // 其他配置
};


{
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "ejs": "^3.1.10",
    "express": "^4.19.2",
    "express-session": "^1.18.0",
    "jsonwebtoken": "^9.0.2",
    "mariadb": "^3.3.1",
    "mysql": "^2.18.1",
    "mysql2": "^3.10.2",
    "sequelize": "^6.37.3",
    "uy": "^0.0.0"
  }
}
