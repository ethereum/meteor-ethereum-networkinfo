# Meteor package - Ethereum network info

Waits for a `web3` connection and then extracts network info.

It fetches the Genesis block information and places it into a 
Promise - `NetworkInfoPromise` - for use throughout your application.

It also provides a proxy wrapper class for Mongo collections 
which ensures that network id is stored for each document in the collection, 
allowing you store [data by network](https://github.com/ethereum/mist/pull/1049).

## Installation

    $ meteor add hiddentao:ethereum-networkinfo

## Usage

Use the extracted network information via the Promise:

```js
NetworkInfo.promise.then(function(networkInfo) {
  console.log(info);

  /*
  type: 'main',
  uniqueId: 'fb25ce3f...',
  genesis: {...},
   */
})
```

To _network_-ify a collection do:

```js
MyCollection = new NetworkInfo.ProxyCollection(
  new Mongo.Collection('mydata')
);
```

You can then use all the normal Meteor collection methods on the returned object.

