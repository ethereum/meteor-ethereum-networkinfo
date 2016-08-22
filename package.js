Package.describe({
  name: 'ethereum:networkinfo',
  summary: 'Ethereum network information package',
  version: '0.2.1',
  git: 'https://github.com/ethereum/meteor-ethereum-networkinfo.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('jrudio:bluebird@3.3.1_1', ['client', 'server']);
  api.export(['NetworkInfo'], ['client', 'server']);
  api.addFiles('networkInfo.js', ['client', 'server']);
});
