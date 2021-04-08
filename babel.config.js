module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ["./"],
          alias: {
            "@src": "./src",
            "@assets": "./assets",
            "@redux": "./redux",
            "@menu-components": "./components/test/menu",
            "@auth": "./src/screens/auth",
            "@views": "./src/screens/views",
            "@screens": "./src/screens",
            "@navigation": "./src/screens/navigation",
            "@images": "./assets/images",
          }
        }
      ]
    ]
  };
};
