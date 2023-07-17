const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  headers: {
    "Content-Type": "text/css",
  },
  // ... other webpack configuration options
};