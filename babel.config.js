module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [ 
      //['react-native-reanimated/plugin'],
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ["./"],
          alias: {
            "@src": "./src",
            "@auth": "./src/views/auth",
            "@images": "./assets/images",
            "@components": "./src/components",
            "@views": "./src/views",
            "@redux": "./redux"
          }
        }
      ]
    ]
  };
};
