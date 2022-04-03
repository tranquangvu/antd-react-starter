const path = require('path');

module.exports = {
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css',
        },
        'antd',
      ],
      [
        'import',
        {
          libraryName: 'lodash',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
        'lodash',
      ],
      [
        'import',
        {
          libraryName: '@ant-design/icons',
          libraryDirectory: 'es/icons',
          camel2DashComponentName: false,
        },
        '@ant-design/icons',
      ],
    ],
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};
