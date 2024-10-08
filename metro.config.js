const { getDefaultConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return {
    ...defaultConfig,
    resolver: {
      assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'db'),
      sourceExts: [...defaultConfig.resolver.sourceExts, 'ts', 'tsx'],
    },
  };
})();
