Package.describe({
  name: 'hiddentao:ethereum-networkinfo',
  summary: 'Ethereum network information package',
  version: '0.1.0',
  git: 'https://github.com/hiddentao/meteor-ethereum-networkinfo.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jrudio:bluebird@3.3.1_1', ['client', 'server']);
  api.export(['NetworkInfoPromise'], ['client', 'server']);
  api.addFiles('networkInfo.js', ['client', 'server']);
});
