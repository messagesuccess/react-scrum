
const CracoLessPlugin = require("craco-less");//单独配置babel无效，需要和craco-less 一起样式才有效果
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel:{  
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],  //装饰器
      [   
        "import", 
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
           "style": true //设置为true即是less
         }
     ]
    ]
 },
};